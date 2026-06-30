import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ========== 图片优化配置 ==========
  images: {
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
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "jiyiaerial.vercel.app",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "trae-api-cn.mchost.guru",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www1.djicdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.dji.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "server.arcgisonline.com",
        pathname: "/**",
      },
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
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
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
  experimental: {},
};

export default nextConfig;
