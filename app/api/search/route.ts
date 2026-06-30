import { NextRequest, NextResponse } from "next/server";
import {
  mockPortfolios,
  type PortfolioItem,
} from "@/lib/mock-data";
import { CATEGORY_LABELS } from "@/lib/constants";

// ========== 类型定义 ==========

interface SearchParams {
  q?: string; // 关键词搜索
  category?: string; // 分类筛选
  sort?: "newest" | "oldest" | "order"; // 排序方式
  page?: string; // 页码
  limit?: string; // 每页数量
}

interface SearchResponse {
  results: PortfolioItem[];
  total: number;
  page: number;
  totalPages: number;
}

// ========== GET Handler：案例搜索 ==========

export async function GET(request: NextRequest) {
  try {
    // 1. 解析查询参数
    const { searchParams } = request.nextUrl;
    const params: SearchParams = {
      q: searchParams.get("q") || undefined,
      category: searchParams.get("category") || undefined,
      sort: (searchParams.get("sort") as SearchParams["sort"]) || "order",
      page: searchParams.get("page") || "1",
      limit: searchParams.get("limit") || "12",
    };

    // 参数校验
    const page = Math.max(1, parseInt(params.page ?? "1", 10) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(params.limit ?? "12", 10) || 12));
    const validSorts = ["newest", "oldest", "order"];
    const sort = validSorts.includes(params.sort!) ? params.sort! : "order";

    // 2. 从 Mock 数据中获取已发布的案例
    let results = mockPortfolios.filter((p) => p.status === "published");

    // 3. 关键词搜索（标题、简述、地点）
    if (params.q) {
      const keyword = params.q.toLowerCase().trim();
      results = results.filter(
        (p) =>
          p.title.toLowerCase().includes(keyword) ||
          p.excerpt.toLowerCase().includes(keyword) ||
          (p.location && p.location.toLowerCase().includes(keyword)) ||
          p.category.some(
            (c) =>
              (CATEGORY_LABELS[c] || c).toLowerCase().includes(keyword)
          )
      );
    }

    // 4. 分类筛选
    if (params.category && params.category !== "all") {
      results = results.filter((p) =>
        p.category.includes(params.category!)
      );
    }

    // 5. 排序
    switch (sort) {
      case "newest":
        results.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "oldest":
        results.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        break;
      case "order":
      default:
        results.sort((a, b) => b.order - a.order);
        break;
    }

    // 6. 分页
    const total = results.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const paginatedResults = results.slice(startIndex, startIndex + limit);

    // 7. 返回结果
    const response: SearchResponse = {
      results: paginatedResults,
      total,
      page,
      totalPages,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("[Search API] 服务器内部错误:", error);
    return NextResponse.json(
      {
        success: false,
        error: "服务器内部错误，请稍后重试",
        results: [],
        total: 0,
        page: 1,
        totalPages: 0,
      },
      { status: 500 }
    );
  }
}
