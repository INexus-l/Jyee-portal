/**
 * Payload CMS 主配置文件
 *
 * 当前阶段：框架配置，Collections 以注释形式预留
 * 后续安装 Payload CMS 后取消注释并完善数据库配置
 */

import { buildConfig } from "payload";
import path from "path";

// ========== Collections（后续创建后取消注释）==========
// import { Portfolios } from "./collections/portfolios";
// import { Inquiries } from "./collections/inquiries";
// import { Subscribers } from "./collections/subscribers";
// import { Media } from "./collections/media";

export default buildConfig({
  admin: {
    user: "users",
    meta: {
      titleSuffix: "— 极翼科技后台管理",
      favicon: "/favicon.ico",
      ogImage: "/og-image.jpg",
    },
    // 后台管理界面自定义
    // build: {
    //   adminScript: '/admin.js',
    //   adminCSS: '/admin.css',
    // },
  },

  // ========== 数据集合 ==========
  collections: [
    // 后续取消注释
    // Portfolios,
    // Inquiries,
    // Subscribers,
    // Media,
  ],

  // ========== TypeScript 类型生成 ==========
  typescript: {
    outputFile: path.resolve(__dirname, "lib/payload-types.ts"),
  },

  // ========== 数据库配置（后续接入 Vercel Postgres）==========
  // db: postgresAdapter({
  //   pool: new Pool({
  //     connectionString: process.env.DATABASE_URL!,
  //   }),
  // }),

  // ========== 文件存储配置（后续接入 Vercel Blob）==========
  // upload: {
  //   adapter: blobStorage(),
  //   config: {
  //     token: process.env.BLOB_READ_WRITE_TOKEN!,
  //   },
  // },

  // ========== 邮件服务配置（后续接入 Resend）==========
  // email: resendAdapter({
  //   apiKey: process.env.RESEND_API_KEY!,
  //   defaultFromAddress: 'noreply@jiyiaerial.com',
  //   defaultFromName: '极翼科技',
  // }),

  // ========== CORS 配置 ==========
  cors: [
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    "https://jiyiaerial.vercel.app",
  ],

  // ========== CSRF 防护 ==========
  csrf: true,

  // ========== 调试模式 ==========
  // debug: process.env.NODE_ENV === "development",
});
