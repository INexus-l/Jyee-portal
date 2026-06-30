﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkle,
  Gift,
  CalendarBlank,
  Star,
  FlagBanner,
  City,
  ArrowRight,
  AirplaneTilt,
  Confetti,
  PaintBrush,
  MagicWand,
  UsersThree,
  ShieldCheck,
  Rocket,
} from "@phosphor-icons/react/dist/ssr";
import Breadcrumb from "@/components/layout/breadcrumb";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { IMAGES } from "@/lib/images";

/* ========== SEO元数据 ========== */
export const metadata: Metadata = {
  title: "无人机编队表演 — 大型灯光秀编排表演服务",
  description:
    "极翼科技无人机编队灯光秀表演服务，支持50-500架次规模，自定义图案文字动画编排。适用于开业庆典、节日晚会、品牌发布会、城市地标秀。",
  keywords: ["无人机表演", "编队飞行", "灯光秀", "无人机编队", "庆典表演"],
};

/* ========== 规格参数数据（超大号数字展示） ========== */
const SCALE_SPECS = [
  {
    number: "500+",
    unit: "架次",
    label: "最大编队规模",
    desc: "支持从小型精致到大型震撼的多规格演出",
    color: "#a855f7",
  },
  {
    number: "10-15",
    unit: "分钟",
    label: "单幕演出时长",
    desc: "可定制多幕式演出，总时长灵活调整",
    color: "#d946ef",
  },
  {
    number: "∞",
    unit: "可能",
    label: "自定义图案",
    desc: "Logo、文字、动画、动态图形全部支持",
    color: "#ec4899",
  },
];

/* ========== 应用场景数据（灯光秀效果图画廊） ========== */
const SCENARIOS = [
  {
    icon: Gift,
    label: "开业庆典",
    desc: "商业体/酒店/商场开业仪式亮点节目",
    image: IMAGES.lightShowNight,
  },
  {
    icon: CalendarBlank,
    label: "节日晚会",
    desc: "春节/中秋/国庆等节日主题表演",
    image: IMAGES.festivalShow,
  },
  {
    icon: PaintBrush,
    label: "品牌发布",
    desc: "新品发布会品牌Logo空中呈现",
    image: IMAGES.droneShow,
  },
  {
    icon: City,
    label: "城市地标秀",
    desc: "城市形象宣传与文旅地标夜空秀",
    image: IMAGES.formationFlight,
  },
];

/* ========== 页面组件（服务端组件）========== */
export default function LightShowPage() {
  return (
    <div className="flex flex-col" style={{ backgroundColor: "#faf5ff" }}>
      {/* ====== Hero — 暗紫-品红调遮罩 + 星点闪烁效果 ====== */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden lg:min-h-[65vh]">
        <div className="absolute inset-0 bg-black">
          <Image
            src={IMAGES.lightShowNight}
            alt="无人机编队表演"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
          {/* 暗紫-品红调遮罩 */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to bottom, rgba(30,10,35,0.88) 0%, rgba(15,5,25,0.95) 100%),
                linear-gradient(to right, rgba(168,85,247,0.18) 0%, transparent 45%, rgba(236,72,153,0.12) 100%)
              `,
            }}
          />
          {/* 紫粉光晕 */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at 30% 55%, rgba(168,85,247,0.18) 0%, transparent 55%),
                radial-gradient(ellipse at 70% 40%, rgba(217,70,239,0.14) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 75%, rgba(236,72,153,0.10) 0%, transparent 45%)
              `,
            }}
          />

          {/* 星点闪烁效果（CSS动画模拟） */}
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: i % 3 === 0 ? "#a855f7" : i % 3 === 1 ? "#d946ef" : "#ec4899",
                opacity: Math.random() * 0.6 + 0.2,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Sparkle weight="duotone" size={56} className="mx-auto mb-5" style={{ color: "#d946ef" }} />

          {/* Badge 标签 */}
          <span
            className="mb-4 inline-block rounded-md px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
            style={{ backgroundColor: "rgba(217,70,239,0.12)", color: "#d946ef" }}
          >
            DRONE LIGHT SHOW
          </span>

          {/* 超大标题 */}
          <h1 className="mb-4 font-heading font-black tracking-tight text-white text-5xl sm:text-6xl lg:text-7xl">
            无人机<span style={{ background: "linear-gradient(135deg, #a855f7, #d946ef, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>编队表演</span>
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
            Formation Flight Light Show Performance
          </p>

          {/* 核心卖点标签 */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["50-500架次规模", "自定义图案文字", "专业编排团队", "全程安全保障"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-4 py-1.5 text-sm font-medium"
                style={{
                  borderColor: "rgba(168,85,247,0.25)",
                  backgroundColor: "rgba(168,85,247,0.08)",
                  color: "rgba(217,70,239,0.80)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 向下滚动指示 */}
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce">
          <div className="flex h-8 w-5 items-start justify-center rounded-full p-1" style={{ borderColor: "rgba(255,255,255,0.25)" }}>
            <div className="h-2 w-0.5 rounded-full" style={{ backgroundColor: "rgba(148,163,184,0.50)" }} />
          </div>
        </div>
      </section>

      {/* ====== 面包屑导航 ====== */}
      <section className="section-container py-4">
        <Breadcrumb
          items={[
            { label: "首页", href: "/" },
            { label: "更多服务", href: "/more-services" },
            { label: "编队表演" },
          ]}
        />
      </section>

      {/* ====== 概述区 — 编队概念可视化（矩阵点的图案装饰元素） ====== */}
      <section className="section-container pb-16 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span
              className="mb-4 inline-block rounded-md bg-purple-50 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[#a855f7]"
            >
              SERVICE OVERVIEW
            </span>
            <h2 className="mb-6 font-heading font-bold text-[#1a2744] text-3xl sm:text-4xl">
              大型活动无人机灯光秀编排表演
            </h2>

            <div className="space-y-5 text-base leading-relaxed text-[#334155]">
              <p>
                当数百架无人机在夜空中同时亮起，编织出绚丽的图案与动态动画 &mdash;
                这不仅是科技的展示，更是艺术与工程的完美融合。
                极翼科技无人机编队表演服务，为您的大型活动打造令人难忘的视觉盛宴。
              </p>
              <p>
                我们拥有成熟的编队飞行控制系统和专业的编排设计团队，
                支持从50架到500架不同规模的表演需求。
                无论是静态的品牌Logo展示、祝福文字呈现，
                还是复杂的动态动画序列，都能精确执行、完美呈现。
              </p>
              <p>
                每一场表演前，我们都会进行充分的空域协调、航线规划、
                安全预案设计与实地彩排，确保表演安全有序地进行。
              </p>
            </div>
          </div>

          {/* 右侧：真实场景大图 + 矩阵点装饰 */}
          <div className="relative overflow-hidden rounded-2xl lg:min-h-[450px]">
            <Image
              src={IMAGES.lightShowNight}
              alt="编队表演现场"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(to bottom, rgba(15,5,25,0.20) 0%, rgba(15,5,25,0.65) 100%)",
              }}
            />

            {/* 矩阵点图案装饰（模拟无人机阵列） */}
            <div className="absolute top-4 left-4 grid grid-cols-7 gap-1.5 opacity-40">
              {[...Array(21)].map((_, i) => (
                <span
                  key={i}
                  className="rounded-full"
                  style={{
                    width: "6px",
                    height: "6px",
                    backgroundColor: i % 3 === 0 ? "#a855f7" : i % 3 === 1 ? "#d946ef" : "#ec4899",
                  }}
                />
              ))}
            </div>

            {/* 浮动信息卡 */}
            <div
              className="absolute bottom-4 left-4 right-4 rounded-xl border border-[#e9d5ff] bg-white/90 backdrop-blur-md p-4"
            >
              <div className="flex items-center gap-3">
                <Confetti weight="duotone" size={26} className="shrink-0" style={{ color: "#d946ef" }} />
                <div>
                  <p className="text-xs font-medium text-[#557090]">典型演出时长</p>
                  <p className="text-[11px] text-[#94a3b8]">8-15分钟 / 可定制多幕式演出</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 规格参数区 — 大型展示卡片（超大号数字） ====== */}
      <section
        className="border-t py-20 md:py-28"
        style={{ borderColor: "rgba(203,213,225,0.6)", background: "linear-gradient(180deg, rgba(168,85,247,0.03) 0%, transparent 100%)" }}
      >
        <div className="section-container">
          <div className="mb-12 text-center">
            <span
              className="mb-4 inline-block rounded-md bg-purple-50 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[#a855f7]"
            >
              SCALE SPECS
            </span>
            <h2 className="mt-4 font-heading font-bold text-[#1a2744] text-3xl sm:text-4xl">
              规模<span style={{ color: "#d946ef" }}>参数</span>
            </h2>
          </div>

          {/* 超大号数字展示卡片 */}
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {SCALE_SPECS.map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-[#cce0ed] bg-white shadow-sm p-8 text-center transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl hover:border-fuchsia-500/20"
              >
                {/* 超大号数字 — 紫色渐变（这个页面允许用紫色渐变因为灯光秀本身就是多彩的） */}
                <div
                  className="mb-3 font-heading font-black tabular-nums leading-none"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 4.5rem)",
                    background: `linear-gradient(135deg, ${item.color}, ${item.color === "#a855f7" ? "#d946ef" : item.color === "#d946ef" ? "#ec4899" : "#f43f5e"})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {item.number}
                </div>
                <div className="mb-3 text-sm font-semibold" style={{ color: item.color }}>{item.unit}</div>
                <h3 className="mb-2 text-base font-bold text-[#1a2744]">{item.label}</h3>
                    <p className="text-sm leading-relaxed text-[#557090]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 案例/作品区 — 灯光秀效果图画廊（横向滚动图片条） ====== */}
      <section
        className="border-t border-[#e9d5ff] py-20 md:py-28"
      >
        <div className="section-container">
          <div className="mb-12 text-center">
            <span
              className="mb-4 inline-block rounded-md bg-purple-50 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[#a855f7]"
            >
              SHOWCASE GALLERY
            </span>
            <h2 className="mt-4 font-heading font-bold text-[#1a2744] text-3xl sm:text-4xl">
              灯光秀<span style={{ color: "#d946ef" }}>效果图</span>
            </h2>
          </div>

          {/* 横向滚动的图片条（模拟夜空中的光绘效果） */}
          <div className="relative">
            {/* 横向滚动容器 */}
            <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {SCENARIOS.map((item) => (
                <div
                  key={item.label}
                  className="group relative shrink-0 snap-start overflow-hidden rounded-2xl transition-all duration-400 hover:-translate-y-1"
                  style={{ width: "320px", aspectRatio: "16/10" }}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* 光绘效果遮罩 */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `
                        linear-gradient(to bottom, rgba(15,5,25,0.15) 0%, rgba(15,5,25,0.78) 100%),
                        linear-gradient(135deg, ${item.label.includes("开业") ? "rgba(168,85,247,0.08)" : item.label.includes("节日") ? "rgba(217,70,239,0.08)" : item.label.includes("品牌") ? "rgba(236,72,153,0.08)" : "rgba(244,63,94,0.08)"} 0%, transparent 50%)
                      `,
                    }}
                  />

                  {/* 内容叠加 */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50"
                      >
                        <item.icon weight="duotone" size={18} style={{ color: "#d946ef" }} />
                      </div>
                      <h3 className="text-sm font-bold text-white">{item.label}</h3>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(100,116,139,0.55)" }}>{item.desc}</p>
                  </div>
                </div>
              ))}

              {/* 额外的重复项用于无缝滚动效果 */}
              {SCENARIOS.slice(0, 2).map((item) => (
                <div
                  key={`${item.label}-dup`}
                  className="group relative shrink-0 snap-start overflow-hidden rounded-2xl transition-all duration-400 hover:-translate-y-1"
                  style={{ width: "320px", aspectRatio: "16/10" }}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to bottom, rgba(15,5,25,0.15) 0%, rgba(15,5,25,0.78) 100%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-sm font-bold text-white">{item.label}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== 服务优势区 ====== */}
      <section
        className="border-t py-20 md:py-28"
        style={{ borderColor: "rgba(203,213,225,0.6)", background: "linear-gradient(180deg, rgba(168,85,247,0.03) 0%, transparent 100%)" }}
      >
        <div className="section-container">
          <div className="mb-12 text-center">
            <span
              className="mb-4 inline-block rounded-md bg-purple-50 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[#a855f7]"
            >
              WHY CHOOSE US
            </span>
            <h2 className="mt-4 font-heading font-bold text-[#1a2744] text-3xl sm:text-4xl">
              我们的<span style={{ color: "#d946ef" }}>优势</span>
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 max-w-3xl mx-auto">
            {[
              { icon: MagicWand, title: "专业编排团队", desc: "资深视觉设计师+飞行工程师，从创意到落地全流程把控" },
              { icon: ShieldCheck, title: "全方位安全保障", desc: "空域审批、保险覆盖、应急预案三重保障体系" },
              { icon: Rocket, title: "快速响应交付", desc: "从方案确认到正式演出，最快7个工作日完成全部准备" },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-[#cce0ed] bg-white shadow-sm p-8 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl hover:border-fuchsia-500/20 hover:bg-white/[0.04]"
              >
                {/* 圆角方形图标容器 */}
                <div
                  className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-50 transition-all duration-300 group-hover:scale-110"
                >
                  <item.icon
                    weight="duotone"
                    size={32}
                    className="transition-transform duration-300 group-hover:scale-110"
                    style={{ color: "#d946ef" }}
                  />
                </div>

                <h3 className="mb-3 text-xl font-bold text-[#1a2744]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#557090]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 底部 CTA — 紫粉渐变按钮（浅色背景） ====== */}
      <section className="relative overflow-hidden bg-purple-50 py-24 md:py-32">
        <div className="relative z-10 section-container text-center">
          <Sparkle weight="duotone" size={48} className="mx-auto mb-6" style={{ color: "#d946ef" }} />
          <h3 className="mb-5 font-heading font-bold text-[#1a2744] text-3xl sm:text-4xl lg:text-5xl">
            让<span style={{ background: "linear-gradient(135deg, #a855f7, #d946ef, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>夜空</span>成为您的画布
          </h3>
          <p className="mx-auto mb-10 max-w-xl text-base text-[#557090]">
            告知活动规模、日期及创意想法，我们的编排团队将为您打造一场独一无二的空中光影盛宴
          </p>
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            {/* 紫粉渐变按钮 */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full px-12 py-5 text-base font-bold shadow-2xl transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(168,85,247,0.30)]"
              style={{
                background: "linear-gradient(135deg, #a855f7, #d946ef, #ec4899)",
                color: "#fff",
              }}
            >
              定制您的星空秀
              <ArrowRight weight="bold" size={20} />
            </Link>
            <Link
              href="/more-services"
              className="inline-flex items-center gap-2 rounded-full border border-[#e9d5ff] px-9 py-5 text-base font-semibold text-[#a855f7] transition-all hover:border-[#c084fc] hover:bg-purple-50"
            >
              查看更多创新服务
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
