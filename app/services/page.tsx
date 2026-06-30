import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Buildings,
  Trophy,
  MapPinLine,
  Factory,
  FilmStrip,
  HardHat,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import Breadcrumb from "@/components/layout/breadcrumb";
import { IMAGES } from "@/lib/images";

/* ========== SEO元数据 ========== */
export const metadata: Metadata = {
  title: "航拍服务 — 全场景专业无人机航拍解决方案",
  description:
    "极翼科技提供婚庆航拍、房地产航拍、活动赛事、城市宣传、企业品牌、影视纪录片、工程记录等7大类专业无人机航拍服务，重庆全域覆盖，11年行业经验。",
  keywords: [
    "航拍服务",
    "重庆航拍",
    "婚庆航拍",
    "房地产航拍",
    "活动赛事航拍",
    "城市宣传航拍",
    "企业品牌航拍",
    "影视纪录片航拍",
    "工程记录航拍",
  ],
};

/* ========== 服务分类数据 ========== */
const SERVICE_CATEGORIES = [
  {
    name: "婚庆航拍",
    slug: "wedding",
    description: "记录人生最美时刻，上帝视角见证爱情誓言",
    href: "/services/wedding",
    src: IMAGES.weddingOutdoor,
  },
  {
    name: "房地产/建筑航拍",
    slug: "real-estate",
    description: "全景展示楼盘区位与建筑细节，助力房产营销",
    href: "/services/real-estate",
    src: IMAGES.realEstateHero,
  },
  {
    name: "活动/赛事航拍",
    slug: "event",
    description: "大型活动、体育赛事的震撼空中视角记录",
    href: "/services/event",
    src: IMAGES.eventStadium,
  },
  {
    name: "城市/旅游宣传",
    slug: "tourism",
    description: "展现城市风貌与自然风光，打造视觉名片",
    href: "/services/tourism",
    src: IMAGES.tourismCity,
  },
  {
    name: "企业/品牌宣传",
    slug: "corporate",
    description: "空中视角诠释企业实力与品牌价值",
    href: "/services/corporate",
    src: IMAGES.corporateCampus,
  },
  {
    name: "影视/纪录片航拍",
    slug: "film",
    description: "电影级画质，RED/A7S顶级设备加持",
    href: "/services/film",
    src: IMAGES.filmCinematic,
  },
  {
    name: "工程/进度记录",
    slug: "engineering",
    description: "从开工到竣工的全周期影像留存与管理",
    href: "/services/engineering",
    src: IMAGES.constructionSite,
  },
];

/* ========== SOP流程步骤（紧凑版）========== */
const SOP_STEPS = [
  { step: 1, label: "需求沟通" },
  { step: 2, label: "方案策划" },
  { step: 3, label: "空域申请" },
  { step: 4, label: "现场勘测" },
  { step: 5, label: "设备调试" },
  { step: 6, label: "正式拍摄" },
  { step: 7, label: "后期制作" },
  { step: 8, label: "成品交付" },
  { step: 9, label: "售后服务" },
];

/* ========== 合作案例（Masonry布局）========== */
const CASE_PREVIEWS = [
  { title: "某五星级酒店婚礼航拍", category: "婚庆航拍", size: "large", src: IMAGES.weddingOutdoor },
  { title: "龙湖地产·云河颂宣传片", category: "房地产航拍", size: "small", src: IMAGES.luxuryBuilding },
  { title: "2025重庆马拉松全程跟拍", category: "赛事航拍", size: "small", src: IMAGES.sportsAction },
  { title: "武隆喀斯特景区形象片", category: "城市宣传", size: "large", src: IMAGES.landmark },
];

/* ========== 页面组件（服务端组件）========== */
export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: "#eef4f9" }} className="flex flex-col">
      {/* ====== Hero 区域 - 超大全屏背景图，标题左下对齐 ====== */}
      <section className="relative flex min-h-[80vh] items-end overflow-hidden">
        {/* 背景大图 */}
        <div className="absolute inset-0">
          <Image
            src={IMAGES.heroAerial}
            alt="专业航拍服务全景"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          {/* 深色遮罩层 */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#151c2c] via-[#151c2c]/60 to-[#151c2c]/30" />
        </div>

        {/* Hero 内容 - 左下对齐 */}
        <div className="relative z-10 w-full px-6 pb-16 pt-32 sm:px-12 md:px-20 lg:px-28 xl:px-36">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-slate-300">
              Aerial Photography Services
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              专业航拍<br />解决方案
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              七大专业航拍领域全覆盖 · 11年行业经验 · 重庆全域服务
            </p>
            {/* 统计数据条 */}
            <div className="flex flex-wrap items-center gap-10 border-t border-white/10 pt-8">
              {[
                { value: "11+", label: "年行业经验" },
                { value: "5000+", label: "次航拍任务" },
                { value: "7大", label: "服务领域" },
                { value: "99%", label: "客户满意度" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="mt-0.5 text-xs text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== 面包屑导航 ====== */}
      <section className="px-6 py-4 sm:px-12 md:px-20 lg:px-28 xl:px-36">
        <Breadcrumb
          items={[
            { label: "首页", href: "/" },
            { label: "航拍服务" },
          ]}
        />
      </section>

      {/* ====== 服务分类 - 自动轮播大卡片（从右到左无限滚动）===== */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="mb-12 px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36">
          <h2 className="text-2xl font-bold tracking-tight text-[#1a2744] sm:text-3xl lg:text-4xl">
            选择您的航拍需求
          </h2>
          <p className="mt-2 text-sm text-[#557090]">七大专业领域 · 滑动或等待自动轮播</p>
        </div>

        {/* 无限轮播容器 — CSS动画驱动从右到左 */}
        <div className="relative">
          {/* 渐变遮罩左右两侧，让卡片自然淡入淡出 */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#eef4f9] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#eef4f9] to-transparent pointer-events-none" />

          {/* 轨道容器 — 双份内容实现无缝循环 */}
          <div className="flex animate-scroll-left gap-6 sm:gap-8">
            {/* 第一组 */}
            {SERVICE_CATEGORIES.map((service) => (
              <Link
                key={`a-${service.slug}`}
                href={service.href}
                className="group flex h-[320px] w-[85vw] shrink-0 overflow-hidden border border-[#cce0ed] bg-white transition-all duration-500 hover:border-[#0077b6] hover:shadow-lg hover:shadow-[#0077b6]/10 hover:-translate-y-1 sm:w-[600px] lg:w-[700px]"
              >
                <div className="relative w-[70%] overflow-hidden">
                  <Image
                    src={service.src}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 60vw, (max-width: 1200px) 420px, 490px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex w-[30%] flex-col justify-center p-6 sm:p-8">
                  <h3 className="mb-3 text-lg font-semibold leading-tight text-[#1a2744] transition-colors duration-300 group-hover:text-[#0077b6] sm:text-xl">
                    {service.name}
                  </h3>
                  <p className="mb-6 text-xs leading-relaxed text-[#557090] sm:text-sm">
                    {service.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-medium text-[#0077b6]/70 transition-all duration-300 group-hover:text-[#0077b6] group-hover:gap-3">
                    了解详情
                    <ArrowRight size={14} weight="bold" />
                  </div>
                </div>
              </Link>
            ))}
            {/* 第二组（克隆，实现无缝循环） */}
            {SERVICE_CATEGORIES.map((service) => (
              <Link
                key={`b-${service.slug}`}
                href={service.href}
                className="group flex h-[320px] w-[85vw] shrink-0 overflow-hidden border border-[#cce0ed] bg-white transition-all duration-500 hover:border-[#0077b6] hover:shadow-lg hover:shadow-[#0077b6]/10 hover:-translate-y-1 sm:w-[600px] lg:w-[700px]"
              >
                <div className="relative w-[70%] overflow-hidden">
                  <Image
                    src={service.src}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 60vw, (max-width: 1200px) 420px, 490px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex w-[30%] flex-col justify-center p-6 sm:p-8">
                  <h3 className="mb-3 text-lg font-semibold leading-tight text-[#1a2744] transition-colors duration-300 group-hover:text-[#0077b6] sm:text-xl">
                    {service.name}
                  </h3>
                  <p className="mb-6 text-xs leading-relaxed text-[#557090] sm:text-sm">
                    {service.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-medium text-[#0077b6]/70 transition-all duration-300 group-hover:text-[#0077b6] group-hover:gap-3">
                    了解详情
                    <ArrowRight size={14} weight="bold" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SOP流程 — 视觉冲击力强化的步骤条 ====== */}
      <section className="border-t border-[#cce0ed] bg-white py-16 md:py-20">
        <div className="px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36">
          <div className="mb-12">
            <span className="inline-block rounded-full bg-[#0077b6]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0077b6]">
              Standard Operating Procedure
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#1a2744] sm:text-3xl">
              专业服务流程
            </h2>
            <p className="mt-2 text-sm font-medium text-[#557090]">标准化9步作业流程 · 从需求到交付全链路管控</p>
          </div>

          {/* 横向步骤条 — 大号圆圈 + 强色数字 */}
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex items-center gap-3 min-w-max">
              {SOP_STEPS.map((item, idx) => (
                <div key={item.step} className="flex items-center">
                  {/* 步骤节点 — 大圆圈 + 渐变边框 + 粗体数字 */}
                  <div
                    className="group flex flex-col items-center gap-2.5"
                  >
                    {/* 数字圆圈 */}
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-full text-base font-black transition-all duration-300 group-hover:scale-110 sm:h-13 sm:w-13 sm:text-lg"
                      style={{
                        background: idx === 0
                          ? "linear-gradient(135deg, #0077b6, #0096c7)"
                          : "linear-gradient(135deg, #e8f1f8, #ffffff)",
                        color: idx === 0 ? "#ffffff" : "#0077b6",
                        boxShadow: idx === 0
                          ? "0 4px 16px rgba(0,119,182,0.30)"
                          : "0 2px 8px rgba(0,119,182,0.10), inset 0 1px 0 rgba(255,255,255,0.8)",
                        border: `2px solid ${idx === 0 ? "#0077b6" : "#cce0ed"}`,
                      }}
                    >
                      {item.step}
                    </div>
                    {/* 步骤标签 */}
                    <span className="whitespace-nowrap text-xs font-bold tracking-wide transition-colors duration-300 group-hover:text-[#0077b6] sm:text-sm" style={{ color: idx <= 2 ? "#1a2744" : "#557090" }}>
                      {item.label}
                    </span>
                    {/* 进度指示点（已完成步骤显示） */}
                    {idx < 3 && (
                      <span className="h-1 w-1 rounded-full bg-[#0077b6]" />
                    )}
                  </div>
                  {/* 连接线 — 带渐变动画 */}
                  {idx < SOP_STEPS.length - 1 && (
                    <div
                      className="h-0.5 w-10 overflow-hidden rounded-full sm:w-14"
                      style={{ background: "#cce0ed" }}
                    >
                      <div
                        className="h-full w-full animate-pulse-slow"
                        style={{
                          background: "linear-gradient(90deg, #0077b6, transparent 80%)",
                          transformOrigin: "left",
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 流程说明提示 */}
          <div className="mt-8 flex items-center gap-6 rounded-xl border border-[#cce0ed] bg-[#f5f9fc] px-6 py-4 sm:gap-10">
            {[
              { icon: "01-03", label: "前期准备", desc: "沟通·策划·申请", active: true },
              { icon: "04-06", label: "执行阶段", desc: "勘测·调试·拍摄", active: false },
              { icon: "07-09", label: "交付收尾", desc: "制作·交付·售后", active: false },
            ].map((phase) => (
              <div key={phase.icon} className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold"
                  style={{
                    background: phase.active ? "#0077b6" : "#e8f1f8",
                    color: phase.active ? "#fff" : "#557090",
                  }}
                >
                  {phase.icon}
                </span>
                <div>
                  <p className="text-xs font-semibold text-[#1a2744]">{phase.label}</p>
                  <p className="text-[10px] text-[#557090]">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 合作案例 - Masonry瀑布流布局（2大2小）===== */}
      <section className="py-16 md:py-24">
        <div className="mb-10 flex items-end justify-between px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl lg:text-4xl">
              精选案例速览
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-[#00b4d8] sm:flex"
          >
            查看全部案例
            <ArrowRight size={14} weight="bold" />
          </Link>
        </div>

        {/* Masonry 布局 - 2大2小交错 */}
        <div className="px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {CASE_PREVIEWS.map((caseItem, idx) => (
              <Link
                key={caseItem.title}
                href="/portfolio"
                className={`group relative overflow-hidden border border-[#cce0ed] bg-white shadow-sm transition-all duration-500 hover:border-[#b8d0e3] ${
                  caseItem.size === "large" ? "row-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${caseItem.size === "large" ? "h-full min-h-[400px]" : "h-[200px]"} md:min-h-[280px]`}>
                  <Image
                    src={caseItem.src}
                    alt={caseItem.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {/* 分类标签 */}
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0077b6]">
                    {caseItem.category}
                  </span>
                  {/* 标题 */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-sm font-semibold leading-snug text-white sm:text-base line-clamp-2 drop-shadow-md">
                      {caseItem.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 移动端查看全部按钮 */}
        <div className="mt-8 px-6 text-center md:hidden sm:px-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400"
          >
            查看全部案例
            <ArrowRight size={14} weight="bold" />
          </Link>
        </div>
      </section>

      {/* ====== 简洁的文字链接CTA ====== */}
      <section className="border-t border-[#cce0ed] bg-white py-16 text-center md:py-20">
        <p className="text-sm text-[#557090]">
          准备开始您的航拍项目？{" "}
          <Link
            href="/contact"
            className="font-semibold text-[#0077b6] underline decoration-[#0077b6]/30 underline-offset-4 transition-all hover:text-[#005f99] hover:decoration-[#005f99]"
          >
            联系我们获取免费方案 →
          </Link>
        </p>
      </section>
    </div>
  );
}
