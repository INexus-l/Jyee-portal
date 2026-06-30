/**
 * 询价记录 Collection
 *
 * 存储从前台提交的客户询价信息
 * 支持状态跟踪和内部备注
 */

import { CollectionConfig } from "payload";

export const Inquiries: CollectionConfig = {
  slug: "inquiries",

  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "phone", "serviceType", "status", "createdAt"],
    description: "询价记录管理 — 管理来自前台的客户询价",
    useAsTitle: "name",
  },

  fields: [
    // ==================== 客户基本信息 ====================
    {
      name: "name",
      type: "text",
      required: true,
      label: "姓名",
    },
    {
      name: "phone",
      type: "text",
      required: true,
      label: "手机号",
      admin: {
        description: "11位手机号码",
      },
    },
    {
      name: "email",
      type: "text",
      label: "邮箱",
      admin: {
        description: "选填，用于发送邮件通知",
      },
    },

    // ==================== 服务需求 ====================
    {
      name: "serviceType",
      type: "select",
      hasMany: true,
      options: [
        { label: "婚庆航拍", value: "wedding" },
        { label: "房地产航拍", value: "real-estate" },
        { label: "活动赛事航拍", value: "event" },
        { label: "城市宣传航拍", value: "tourism" },
        { label: "企业品牌航拍", value: "corporate" },
        { label: "影视纪录片航拍", value: "film" },
        { label: "工程记录航拍", value: "engineering" },
        { label: "航测测绘", value: "surveying" },
        { label: "VR全景航拍", value: "vr-panorama" },
        { label: "无人机直播", value: "live-stream" },
        { label: "编队表演", value: "light-show" },
        { label: "整机销售", value: "sales" },
        { label: "植保服务", value: "agriculture" },
        { label: "其他", value: "other" },
      ],
      label: "服务类型",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      maxLength: 500,
      label: "需求描述",
      admin: {
        description: "客户的项目需求描述",
      },
    },
    {
      name: "budgetRange",
      type: "select",
      options: [
        { label: "5,000元以下", value: "under-5k" },
        { label: "5,000 - 10,000元", value: "5k-10k" },
        { label: "10,000 - 30,000元", value: "10k-30k" },
        { label: "30,000 - 50,000元", value: "30k-50k" },
        { label: "50,000元以上", value: "over-50k" },
        { label: "面议", value: "negotiable" },
      ],
      label: "预算范围",
    },
    {
      name: "preferredDate",
      type: "date",
      label: "期望服务日期",
      admin: {
        date: {
          displayFormat: "yyyy年MM月dd日",
          pickerAppearance: "dayonly",
        },
      },
    },

    // ==================== 状态管理 ====================
    {
      name: "status",
      type: "select",
      defaultValue: "new",
      options: [
        { label: "新询价", value: "new" },
        { label: "已回复", value: "replied" },
        { label: "已完成", value: "completed" },
      ],
      label: "处理状态",
    },

    // ==================== 内部备注 ====================
    {
      name: "note",
      type: "textarea",
      label: "内部备注",
      admin: {
        description: "仅后台可见的处理记录或备注",
      },
    },
  ],

  // ==================== 权限控制 ====================
  access: {
    read: ({ req }) => !!req.user, // 仅登录用户可查看
    create: () => true, // 所有人可创建（通过API）
    update: ({ req }) => !!req.user, // 登录用户可更新
    delete: ({ req }) => req.user?.role === "admin", // 仅管理员可删除
  },

  // ==================== Hooks ====================
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation === "create") {
          console.log(`[Inquiry] 新询价: ${doc.name} - ${doc.phone}`);
          // TODO: 触发邮件通知给管理员
        }
      },
    ],
  },
};
