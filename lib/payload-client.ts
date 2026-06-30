/**
 * Payload CMS 客户端工具封装
 *
 * 注意：当前 Payload CMS 尚未完全安装配置，此文件先创建接口定义和 Mock 实现
 * 后续安装 Payload 后替换为真实 API 调用
 */

// ========== 接口定义 ==========

/** 作品案例数据结构 */
export interface Portfolio {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string[];
  shootDate: string | null;
  location: string | null;
  clientType: string | null;
  coverImage: {
    id: string;
    url: string;
    alt?: string;
    filename?: string;
  } | null;
  coverVideo?: {
    id: string;
    url: string;
    filename?: string;
  } | null;
  gallery?: Array<{
    image: {
      id: string;
      url: string;
      alt?: string;
    };
    caption?: string;
  }>;
  content?: any; // RichText 内容
  challenge?: string;
  testimonial?: string;
  equipment?: {
    drone?: string;
    camera?: string;
    gimbal?: string;
    teamSize?: number;
  };
  seo?: {
    metaTitle?: string;
    metaDesc?: string;
    keywords?: string;
  };
  status: "draft" | "published";
  order: number;
  createdAt: string;
  updatedAt: string;
}

/** 询价记录数据结构 */
export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email?: string;
  serviceType?: string[];
  description: string;
  budgetRange?: string;
  preferredDate?: string;
  status: "new" | "replied" | "completed";
  note?: string;
  createdAt: string;
  updatedAt: string;
}

/** 邮件订阅者数据结构 */
export interface Subscriber {
  id: string;
  email: string;
  subscribedAt: string;
  active: boolean;
}

/** 媒体文件数据结构 */
export interface MediaFile {
  id: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width?: number;
  height?: number;
  url: string;
  thumbnailURL?: string;
  cardURL?: string;
  largeURL?: string;
  alt?: string;
  caption?: string;
  createdAt: string;
}

// ========== 分页响应类型 ==========

export interface PaginatedResponse<T> {
  docs: T[];
  totalPages: number;
  page: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  totalDocs: number;
}

// ========== Mock 实现（当前使用） ==========

import { mockPortfolios, getPortfolioBySlug } from "./mock-data";

/**
 * 获取已发布的作品案例列表（Mock 实现）
 * @param options 筛选选项
 * @returns 分页的案例数据
 */
export async function getPublishedPortfolios(options?: {
  category?: string;
  limit?: number;
  page?: number;
}): Promise<{ docs: any[]; totalPages: number }> {
  // 模拟网络延迟
  await new Promise((resolve) => setTimeout(resolve, 100));

  let results = mockPortfolios.filter((p) => p.status === "published");

  // 分类筛选
  if (options?.category && options.category !== "all") {
    results = results.filter((p) => p.category.includes(options.category!));
  }

  // 排序（按 order 降序）
  results.sort((a, b) => b.order - a.order);

  const limit = options?.limit || 12;
  const page = options?.page || 1;
  const start = (page - 1) * limit;
  const totalPages = Math.ceil(results.length / limit);

  return {
    docs: results.slice(start, start + limit),
    totalPages,
  };
}

/**
 * 根据 slug 获取单个作品案例详情（Mock 实现）
 * @param slug 案例 slug
 * @returns 案例详情或 null
 */
export async function getPortfolioBySlugDetail(
  slug: string
): Promise<Portfolio | null> {
  // 模拟网络延迟
  await new Promise((resolve) => setTimeout(resolve, 50));

  const portfolio = getPortfolioBySlug(slug);
  if (!portfolio || portfolio.status !== "published") return null;

  // 转换为完整格式
  return {
    ...portfolio,
    coverImage: portfolio.coverImage
      ? { id: portfolio.id, url: portfolio.coverImage }
      : null,
  } as Portfolio;
}

/**
 * 提交询价记录（Mock 实现）
 * TODO: 接入 Payload CMS 后替换为真实 API 调用
 */
export async function createInquiry(data: Omit<Inquiry, "id" | "createdAt" | "updatedAt">): Promise<Inquiry> {
  console.log("[Payload Client] 创建询价记录:", data);
  return {
    id: `inquiry_${Date.now()}`,
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

/**
 * 添加邮件订阅（Mock 实现）
 * TODO: 接入 Payload CMS 后替换为真实 API 调用
 */
export async function createSubscriber(email: string): Promise<Subscriber> {
  console.log("[Payload Client] 创建订阅:", email);
  return {
    id: `sub_${Date.now()}`,
    email,
    subscribedAt: new Date().toISOString(),
    active: true,
  };
}
