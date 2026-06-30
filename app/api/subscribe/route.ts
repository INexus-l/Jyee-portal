import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// ========== Zod Schema 定义 ==========

const subscribeSchema = z.object({
  email: z.string().email("邮箱格式不正确").max(100),
});

// ========== 内存去重存储（当前阶段） ==========

/** 已订阅邮箱集合（生产环境应使用数据库） */
const subscribedEmails = new Set<string>();

// ========== POST Handler：邮件订阅 ==========

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

    // 2. Schema 校验
    const result = subscribeSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error.issues[0]?.message || "邮箱格式不正确",
        },
        { status: 400 }
      );
    }

    const { email } = result.data;
    const normalizedEmail = email.toLowerCase().trim();

    // 3. 检查去重（内存简单判断）
    if (subscribedEmails.has(normalizedEmail)) {
      return NextResponse.json(
        {
          success: false,
          error: "该邮箱已订阅，无需重复提交",
        },
        { status: 409 }
      );
    }

    // TODO: 后续接入 Payload CMS 写入 subscribers collection
    // TODO: 后续接入 Resend 发送确认邮件

    // 4. 当前阶段：模拟成功处理
    subscribedEmails.add(normalizedEmail);

    console.log("[Subscribe API] 新的邮件订阅:", {
      email: normalizedEmail,
      timestamp: new Date().toISOString(),
    });

    // 5. 返回成功响应
    return NextResponse.json({
      success: true,
      message: "订阅成功",
    });
  } catch (error) {
    console.error("[Subscribe API] 服务器内部错误:", error);
    return NextResponse.json(
      {
        success: false,
        error: "服务器内部错误，请稍后重试",
      },
      { status: 500 }
    );
  }
}
