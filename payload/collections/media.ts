/**
 * 媒体文件 Collection
 *
 * 使用 Payload Upload 功能管理图片和视频资源
 * 支持自动生成多种尺寸缩略图
 *
 * 后续接入 Vercel Blob 存储
 */

import { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",

  upload: {
    staticURL: "/media",
    staticDir: "public/media",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 800,
        height: 600,
        position: "centre",
      },
      {
        name: "large",
        width: 1920,
        height: 1080,
        position: "centre",
      },
    ],
    // TODO: 接入 Vercel Blob 后替换为远程存储
    // adapter: blobStorage(),
    // config: {
    //   token: process.env.BLOB_READ_WRITE_TOKEN!,
    // },
    mimeTypes: ["image/*", "video/*"],
  },

  admin: {
    useAsTitle: "filename",
    defaultColumns: ["filename", "alt", "mimeType", "filesize", "createdAt"],
    description: "媒体文件管理 — 上传和管理图片、视频等素材",
  },

  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      label: "替代文本（Alt Text）",
      admin: {
        description:
          "必填。用于无障碍访问和 SEO，请简要描述图片内容",
      },
    },
    {
      name: "caption",
      type: "text",
      label: "图片说明",
      admin: {
        description: "可选。在图集展示时作为图片说明文字",
      },
    },
  ],

  // ==================== 权限控制 ====================
  access: {
    read: () => true, // 所有人可查看媒体文件
    create: ({ req }) => !!req.user, // 登录用户可上传
    update: ({ req }) => !!req.user, // 登录用户可编辑
    delete: ({ req }) =>
      req.user?.role === "admin" || req.user?.role === "editor", // 管理员和编辑可删除
  },

  // ==================== Hooks ====================
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === "create") {
          console.log(
            `[Media] 上传新文件: ${data.filename} (${data.mimeType})`
          );
        }
        return data;
      },
    ],
  },
};
