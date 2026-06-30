import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // ========== 图片优化配置 ==========
  images: {
    // 允许加载远程图片（Vercel Blob / Payload CMS 媒体）
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.vercel-blob.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.vercel-storage.com",
        pathname: "/**",
      },
      // Payload CMS 本地媒体（开发环境）
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/media/**",
      },
      // 生产环境 Payload CMS 媒体
      {
        protocol: "https",
        hostname: "jiyiaerial.vercel.app",
        pathname: "/media/**",
      },
      // AI 图片生成服务（text_to_image API）
      {
        protocol: "https",
        hostname: "trae-api-cn.mchost.guru",
        pathname: "/**",
      },
      // Lorem Picsum 占位图片服务
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      // Unsplash 图片服务（设备展示页真实产品摄影图）
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      // Pixabay 图片服务（真实DJI无人机实物图 + 首页轮播）
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        pathname: "/**",
      },
      // DJI 官方CDN — 真实产品实物图
      {
        protocol: "https",
        hostname: "www1.djicdn.com",
        pathname: "/**",
      },
      // DJI 官方网站图片
      {
        protocol: "https",
        hostname: "*.dji.com",
        pathname: "/**",
      },
      // ESRI ArcGIS 卫星影像（联系页地图）
      {
        protocol: "https",
        hostname: "server.arcgisonline.com",
        pathname: "/**",
      },
      // thesvg.org 图标服务（社交平台Logo）
      {
        protocol: "https",
        hostname: "thesvg.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.tile.openstreetmap.org",
        pathname: "/**",
      },
    ],
    // 禁用远程图片优化（直接由浏览器加载原始URL，避免代理超时/500错误）
    // 生产环境可考虑启用并配置自定义loader
    unoptimized: true,
    // 图片格式自动转换（unoptimized模式下不生效，保留供未来启用时使用）
    formats: ["image/avif", "image/webp"],
    // 图片尺寸限制
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // ========== Headers 安全配置 ==========
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // ========== 允许的开发源（局域网访问） ==========
  allowedDevOrigins: ["192.168.2.26", "localhost"],

  // ========== 实验性功能 ==========
  experimental: {
    // 启用 React 编译器（如果可用）
    // reactCompiler: true,
  },
};

export default nextConfig;
