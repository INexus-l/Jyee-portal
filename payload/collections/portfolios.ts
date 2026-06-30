/**
 * 作品案例 Collection
 *
 * 这是 PRD 中最重要的数据模型！
 * 用于管理前台展示的所有航拍作品案例
 */

import { CollectionConfig } from "payload";

export const Portfolios: CollectionConfig = {
  slug: "portfolios",

  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "status", "createdAt"],
    description: "作品案例管理 — 客户可在此处自主添加/编辑/删除案例",
  },

  fields: [
    // ==================== 基本信息 ====================
    {
      name: "title",
      type: "text",
      required: true,
      label: "案例标题",
      localized: false,
    },
    {
      name: "excerpt",
      type: "textarea",
      required: true,
      maxLength: 200,
      label: "案例简述",
      admin: {
        description: "用于列表页展示的简短描述，不超过200字",
      },
    },
    {
      name: "category",
      type: "select",
      required: true,
      hasMany: true,
      options: [
        { label: "婚庆航拍", value: "wedding" },
        { label: "房地产/建筑", value: "real-estate" },
        { label: "活动/赛事", value: "event" },
        { label: "城市/旅游宣传", value: "tourism" },
        { label: "企业/品牌宣传", value: "corporate" },
        { label: "影视/纪录片", value: "film" },
        { label: "工程/进度记录", value: "engineering" },
        { label: "航测测绘", value: "surveying" },
        { label: "VR全景", value: "vr-panorama" },
        { label: "其他", value: "other" },
      ],
      label: "分类",
      defaultValue: ["other"],
    },

    // ==================== 时间地点信息 ====================
    {
      name: "shootDate",
      type: "date",
      label: "拍摄日期",
      admin: {
        date: {
          displayFormat: "yyyy年MM月dd日",
          pickerAppearance: "dayonly",
        },
      },
    },
    {
      name: "location",
      type: "text",
      label: "拍摄地点",
      admin: {
        description: "如：重庆市渝中区解放碑",
      },
    },
    {
      name: "clientType",
      type: "select",
      options: [
        { label: "个人", value: "individual" },
        { label: "企业", value: "enterprise" },
        { label: "机构/政府", value: "institution" },
      ],
      label: "客户类型",
    },

    // ==================== 媒体资源 ====================
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "封面图片",
      admin: {
        description: "建议尺寸：1920×1080px 或更大",
      },
    },
    {
      name: "coverVideo",
      type: "upload",
      relationTo: "media",
      label: "封面视频（可选）",
      filterOptions: {
        mimeType: { contains: "video" },
      },
    },
    {
      name: "gallery",
      type: "array",
      maxRows: 50,
      labels: {
        singular: "图片",
        plural: "详细图片集",
      },
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
          label: "图片",
        },
        {
          name: "caption",
          type: "text",
          label: "说明文字",
        },
      ],
      label: "详细图片集",
    },

    // ==================== 内容详情 ====================
    {
      name: "content",
      type: "richText",
      editor: () => import("payload/dist/fields/richText/lexical"),
      label: "项目详情",
      admin: {
        description: "支持富文本编辑，可插入图片、视频等",
      },
    },
    {
      name: "challenge",
      type: "textarea",
      label: "项目难点与解决方案",
      admin: {
        description: "描述项目中遇到的技术难点及解决方式",
      },
    },
    {
      name: "testimonial",
      type: "textarea",
      label: "客户评价",
      admin: {
        description: "客户的反馈或评价（如有）",
      },
    },

    // ==================== 设备信息 ====================
    {
      name: "equipment",
      type: "group",
      fields: [
        {
          name: "drone",
          type: "text",
          label: "无人机型号",
          placeholder: "如：DJI Inspire 3 / Mavic 3 Pro",
        },
        {
          name: "camera",
          type: "text",
          label: "相机/镜头",
          placeholder: "如：Zenmuse X9-8K Air / Sony A7S III",
        },
        {
          name: "gimbal",
          type: "text",
          label: "云台系统",
          placeholder: "如：DJI Ronin 4D",
        },
        {
          name: "teamSize",
          type: "number",
          label: "团队人数",
          min: 1,
          max: 20,
        },
      ],
      label: "使用设备",
    },

    // ==================== SEO 设置 ====================
    {
      name: "seo",
      type: "group",
      fields: [
        {
          name: "metaTitle",
          type: "text",
          label: "SEO标题",
          admin: {
            description: "搜索引擎显示的标题，留空则使用案例标题",
          },
        },
        {
          name: "metaDesc",
          type: "textarea",
          label: "SEO描述",
          maxLength: 160,
          admin: {
            description: "搜索引擎显示的描述文字，不超过160字符",
          },
        },
        {
          name: "keywords",
          type: "text",
          label: "关键词",
          admin: {
            description: "用逗号分隔的关键词",
          },
        },
      ],
      label: "SEO设置",
    },

    // ==================== 状态与排序 ====================
    {
      name: "status",
      type: "select",
      defaultValue: "draft",
      options: [
        { label: "草稿", value: "draft" },
        { label: "已发布", value: "published" },
      ],
      label: "发布状态",
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      label: "排序权重（越大越靠前）",
      min: 0,
      max: 9999,
    },
  ],

  // ==================== 权限控制 ====================
  access: {
    read: () => true, // 所有人可读
    create: ({ req }) => !!req.user, // 登录用户可创建
    update: ({ req }) => !!req.user, // 登录用户可编辑
    delete: ({ req }) => req.user?.role === "admin", // 仅管理员可删除
  },

  // ==================== Hooks ====================
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === "create") {
          // 创建时自动设置时间戳
          return data;
        }
        return data;
      },
    ],
  },
};
