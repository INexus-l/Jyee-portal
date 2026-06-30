/**
 * 邮件订阅者 Collection
 *
 * 管理订阅了网站动态更新的邮箱地址
 * 支持 Unsubscribe 功能
 */

import { CollectionConfig } from "payload";

export const Subscribers: CollectionConfig = {
  slug: "subscribers",

  admin: {
    useAsTitle: "email",
    defaultColumns: ["email", "active", "subscribedAt"],
    description: "邮件订阅者管理 — 管理订阅了网站更新的邮箱列表",
  },

  fields: [
    {
      name: "email",
      type: "text",
      required: true,
      unique: true,
      index: true,
      label: "邮箱地址",
      admin: {
        description: "订阅者的邮箱地址，唯一不可重复",
      },
    },
    {
      name: "subscribedAt",
      type: "date",
      label: "订阅时间",
      admin: {
        readOnly: true,
        date: {
          displayFormat: "yyyy年MM月dd日 HH:mm",
        },
      },
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: "active",
      type: "checkbox",
      label: "激活状态",
      defaultValue: true,
      admin: {
        description: "取消勾选将停止向该邮箱发送通知",
      },
    },
  ],

  // ==================== 权限控制 ====================
  access: {
    read: ({ req }) => !!req.user, // 仅登录用户可查看列表
    create: () => true, // 所有人可通过 API 订阅
    update: ({ req }) => !!req.user, // 仅登录用户可修改
    delete: ({ req }) => req.user?.role === "admin", // 仅管理员可删除
  },

  // ==================== Hooks ====================
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === "create") {
          // 标准化邮箱格式
          if (data.email) {
            data.email = data.email.toLowerCase().trim();
          }
        }
        return data;
      },
    ],
    afterChange: [
      async ({ doc, operation }) => {
        if (operation === "create") {
          console.log(`[Subscriber] 新订阅: ${doc.email}`);
          // TODO: 发送欢迎邮件
        }
      },
    ],
  },
};
