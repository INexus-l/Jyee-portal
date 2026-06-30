import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// ========== Zod Schema 定义 ==========

const contactSchema = z.object({
  name: z.string().min(2, "姓名至少2个字符"),
  phone: z.string().regex(/^1[3-9]\d{9}$/, "请输入有效的手机号"),
  email: z
    .string()
    .email("邮箱格式不正确")
    .optional()
    .or(z.literal("")),
  serviceType: z.array(z.string()).optional(),
  description: z.string().min(10, "请描述您的项目需求").max(500),
  budgetRange: z.string().optional(),
  preferredDate: z.string().optional(),
});

// ========== 简易内存速率限制器 ==========

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 60秒窗口期
const RATE_LIMIT_MAX = 3; // 每个IP最多3次请求

/**
 * 检查IP是否超过速率限制
 * @param ip 客户端IP地址
 * @returns 是否允许请求
 */
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // 首次请求或窗口期已过，重置计数
  if (!record || now - record.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  // 未超限则递增计数
  if (record.count >= RATE_LIMIT_MAX) return false;
  record.count++;
  return true;
}

// ========== POST Handler：询价提交 ==========

export async function POST(request: NextRequest) {
  try {
    // 1. 解析请求体
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "无效的请求数据格式",
        },
        { status: 400 }
      );
    }

    // 2. Zod Schema 校验
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      const fieldErrors: Record<string, string[]> = {};
      for (const issue of result.error.issues) {
        const field = issue.path.join(".");
        if (!fieldErrors[field]) {
          fieldErrors[field] = [];
        }
        fieldErrors[field].push(issue.message);
      }
      return NextResponse.json(
        {
          success: false,
          error: "表单校验失败",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    // 3. 获取客户端IP并检查速率限制
    const forwarded = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const clientIp =
      (forwarded ? forwarded.split(",")[0].trim() : null) ||
      realIp ||
      "unknown";

    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: "操作过于频繁，请稍后再试",
        },
        { status: 429 }
      );
    }

    const data = result.data;

    // TODO: 后续接入 Payload CMS 写入 inquiries collection
    // TODO: 后续接入 Resend 发送邮件通知

    // 4. 当前阶段：模拟成功处理
    console.log("[Contact API] 收到新的询价提交:", {
      name: data.name,
      phone: data.phone,
      email: data.email || "(未填写)",
      serviceType: data.serviceType || [],
      description: data.description.substring(0, 50) + "...",
      budgetRange: data.budgetRange || "(未填写)",
      preferredDate: data.preferredDate || "(未指定)",
      ip: clientIp,
      timestamp: new Date().toISOString(),
    });

    // 5. 返回成功响应
    const inquiryId = `inquiry_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

    return NextResponse.json(
      {
        success: true,
        message: "询价提交成功，我们会尽快联系您",
        inquiryId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[Contact API] 服务器内部错误:", error);
    return NextResponse.json(
      {
        success: false,
        error: "服务器内部错误，请稍后重试",
      },
      { status: 500 }
    );
  }
}
