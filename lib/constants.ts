import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** 合并 Tailwind 类名，处理冲突 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** 格式化日期为中文格式 */
export function formatDate(date: string | Date): string {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  return `${year}年${month}月${day}日`;
}

/** 分类映射：slug → 中文名称 */
export const CATEGORY_LABELS: Record<string, string> = {
  wedding: "婚庆航拍",
  "real-estate": "房地产/建筑",
  event: "活动/赛事",
  tourism: "城市/旅游宣传",
  corporate: "企业/品牌宣传",
  film: "影视/纪录片",
  engineering: "工程/进度记录",
  surveying: "航测测绘",
  "vr-panorama": "VR全景",
  live: "无人机直播",
};

/** 联系方式常量 */
export const CONTACT_INFO = {
  phone: "150-2305-5582",
  phoneRaw: "15023055582",
  landline: "023-63711779",
  email: "790356914@qq.com",
  address: "重庆市南岸区天龙广场B栋2单元21-7号",
  addressShort: "重庆·南岸区",
  workingHours: "周一至周日 9:00 - 18:00",
};

/** 导航菜单配置 */
export const NAV_ITEMS = [
  { label: "首页", href: "/" },
  { label: "关于我们", href: "/about" },
  {
    label: "航拍服务",
    href: "/services",
    children: [
      { label: "婚庆航拍", href: "/services/wedding" },
      { label: "房地产航拍", href: "/services/real-estate" },
      { label: "活动赛事航拍", href: "/services/event" },
      { label: "城市宣传航拍", href: "/services/tourism" },
      { label: "企业品牌航拍", href: "/services/corporate" },
      { label: "影视纪录片航拍", href: "/services/film" },
      { label: "工程记录航拍", href: "/services/engineering" },
    ],
  },
  { label: "航测服务", href: "/surveying" },
  {
    label: "更多服务",
    href: "/more-services",
    children: [
      { label: "VR全景航拍", href: "/more-services/vr-panorama" },
      { label: "无人机直播", href: "/more-services/live-stream" },
      { label: "编队表演", href: "/more-services/light-show" },
      { label: "整机销售", href: "/more-services/sales" },
      { label: "植保服务", href: "/more-services/agriculture" },
    ],
  },
  { label: "作品案例", href: "/portfolio" },
  { label: "设备展示", href: "/equipment" },
  { label: "解决方案", href: "/solutions" },
  { label: "联系我们", href: "/contact" },
] as const;

/** 站点元数据 */
export const SITE_CONFIG = {
  name: "重庆极翼无人飞行器科技有限公司",
  shortName: "极翼科技",
  slogan: "极致视角 · 翼望山城",
  englishSlogan: "Ultimate Perspective · Soaring Above Chongqing",
  foundedYear: 2015,
};
