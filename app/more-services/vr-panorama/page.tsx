import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Sunglasses,
  House,
  TreeEvergreen,
  Storefront,
  Buildings,
  ArrowRight,
  AirplaneTilt,
  Cube,
  Monitor,
  GlobeHemisphereWest,
  Eye,
  DeviceTablet,
  TreePalm,
} from "@phosphor-icons/react/dist/ssr";
import Breadcrumb from "@/components/layout/breadcrumb";
import { BackgroundBeams } from "@/components/ui/background-beams";
import PanoramaViewer from "@/components/ui/PanoramaViewer";
import { IMAGES } from "@/lib/images";

/* ========== SEO元数据 ========== */
export const metadata: Metadata = {
  title: "VR全景航拍 — 720°沉浸式全景漫游服务",
  description:
    "极翼科技VR全景航拍服务，720°高清全景拍摄与拼接，支持Krpano/Pano2VR平台，适用于房产VR看房、景区VR漫游、展会展示等场景。",
  keywords: ["VR全景", "720°全景", "VR航拍", "全景漫游", "Krpano"],
};

/* ========== 技术参数条数据 ========== */
const TECH_SPECS = [
  {
    icon: Cube,
    label: "多镜头拼接",
    desc: "专业全景云台多角度拍摄，无缝拼接技术",
    value: 95,
    color: "#06b6d4",
  },
  {
    icon: Monitor,
    label: "高分辨率输出",
    desc: "单场景最高8K分辨率，细节清晰可辨",
    value: 90,
    color: "#0ea5e9",
  },
  {
    icon: GlobeHemisphereWest,
    label: "平台兼容",
    desc: "支持Krpano、Pano2VR、720云等主流平台",
    value: 88,
    color: "#3b82f6",
  },
];

/* ========== 应用场景数据（含图片） ========== */
const SCENARIOS = [
  { icon: House, label: "房产VR看房", desc: "足不出户沉浸式浏览楼盘户型与环境", image: IMAGES.vrRealEstate },
  { icon: TreeEvergreen, label: "景区VR漫游", desc: "线上预览景区风光，助力旅游推广营销", image: IMAGES.vrTourism },
  { icon: Storefront, label: "展会VR展示", desc: "虚拟展厅呈现，突破时空限制触达客户", image: IMAGES.corporateCampus },
  { icon: Buildings, label: "酒店VR预订", desc: "客房与公共区域全景展示，提升预订转化", image: IMAGES.luxuryBuilding },
];

/* ========== 页面组件（服务端组件）========== */
export default function VRPanoramaPage() {
  return (
    <div className="flex flex-col" style={{ backgroundColor: "#1a1410" }}>
      {/* ====== Hero — 深蓝青调遮罩（VR科技属性） ====== */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden lg:min-h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.vrPanorama}
            alt="VR全景航拍"
            fill
            className="object-cover"
            priority
          />
          {/* 深蓝青调遮罩 */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to bottom, rgba(10,30,50,0.85) 0%, rgba(8,25,42,0.92) 100%),
                linear-gradient(to right, rgba(6,182,212,0.20) 0%, transparent 40%, rgba(59,130,246,0.15) 100%)
              `,
            }}
          />
          {/* 青色光晕 */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at 35% 45%, rgba(6,182,212,0.18) 0%, transparent 55%),
                radial-gradient(ellipse at 65% 55%, rgba(14,165,233,0.12) 0%, transparent 50%)
              `,
            }}
          />
        </div>
        <BackgroundBeams className="opacity-12" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Sunglasses weight="duotone" size={56} className="mx-auto mb-5" style={{ color: "#06b6d4" }} />

          {/* Badge 标签 */}
          <span className="mb-4 inline-block rounded-md px-4 py-1.5 text-xs font-bold tracking-widest uppercase" style={{ backgroundColor: "rgba(6,182,212,0.12)", color: "#06b6d4" }}>
            VR PANORAMA AERIAL
          </span>

          {/* 超大标题 — 纯色+青色强调 */}
          <h1 className="mb-4 font-heading font-black tracking-tight text-white text-5xl sm:text-6xl lg:text-7xl">
            VR<span style={{ color: "#06b6d4" }}>全景航拍</span>
          </h1>
          <p className="text-lg text-white/70" style={{ color: "rgba(255,255,255,0.65)" }}>
            720° Immersive Panorama Experience
          </p>

          {/* 特性标签 */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["8K超清分辨率", "无缝拼接技术", "多平台兼容", "沉浸式体验"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-4 py-1.5 text-sm font-medium"
                style={{
                  borderColor: "rgba(6,182,212,0.25)",
                  backgroundColor: "rgba(6,182,212,0.08)",
                  color: "rgba(6,182,212,0.80)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 面包屑导航 ====== */}
      <section className="section-container py-4">
        <Breadcrumb
          items={[
            { label: "首页", href: "/" },
            { label: "更多服务", href: "/more-services" },
            { label: "VR全景航拍" },
          ]}
        />
      </section>

      {/* ====== 概述区 — 沉浸式体验叙述 + 圆形viewport视觉暗示 ====== */}
      <section className="section-container pb-16 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            {/* Badge */}
            <span className="mb-4 inline-block rounded-md bg-cyan-500/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase" style={{ color: "#06b6d4" }}>
              SERVICE OVERVIEW
            </span>
            <h2 className="mb-6 font-heading font-bold text-white text-3xl sm:text-4xl">
              720°VR全景航拍服务
            </h2>

            {/* 文字描述 — 沉浸式叙述风格 */}
            <div className="space-y-5 text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.60)" }}>
              <p>
                VR全景航拍是连接现实与数字世界的桥梁。
                通过无人机搭载的专业全景相机系统，我们能够捕捉完整的球面影像，
                让用户通过鼠标拖拽或VR设备，获得身临其境的360°沉浸式体验。
              </p>
              <p>
                我们采用工业级全景拍摄方案，支持单场景8K超高分辨率输出，
                确保每一个细节都清晰可见。后期处理使用专业的拼接软件，
                实现像素级精准对齐，画面过渡自然无痕。
              </p>
              <p>
                成品兼容Krpano、Pano2VR、720云等主流全景发布平台，
                可轻松嵌入网站、微信小程序或APP中，为您的业务带来全新的互动体验。
              </p>
            </div>

            {/* 核心亮点标签 */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { icon: Eye, text: "球面完整覆盖" },
                { icon: DeviceTablet, text: "多终端适配" },
                { icon: GlobeHemisphereWest, text: "一键分享传播" },
                { icon: TreePalm, text: "热点交互导航" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2.5 rounded-xl border px-4 py-3"
                  style={{
                    borderColor: "rgba(203,213,225,0.8)",
                    backgroundColor: "rgba(255,255,255,0.02)",
                  }}
                >
                  <item.icon size={20} style={{ color: "#06b6d4" }} />
                  <span className="text-sm font-medium text-white">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：圆形viewport概念的大图容器 */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* 外层装饰圆环 — 模拟VR viewport */}
            <div
              className="relative overflow-hidden rounded-full p-1"
              style={{
                border: "2px solid rgba(6,182,212,0.20)",
                boxShadow: "0 0 60px rgba(6,182,212,0.08), inset 0 0 40px rgba(6,182,212,0.05)",
              }}
            >
              <div className="relative aspect-square overflow-hidden rounded-full">
                <Image
                  src={IMAGES.vrInterior}
                  alt="VR全景航拍作业"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(6,182,212,0.15) 0%, transparent 50%)",
                  }}
                />
              </div>
            </div>

            {/* 浮动信息卡 — 支持输出格式 */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-xl border backdrop-blur-md px-6 py-4"
              style={{
                borderColor: "rgba(6,182,212,0.15)",
                backgroundColor: "rgba(8,25,42,0.85)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: "rgba(6,182,212,0.15)" }}
                >
                  <Monitor size={22} style={{ color: "#06b6d4" }} />
                </div>
                <div>
                  <p className="text-xs font-medium" style={{ color: "rgba(100,116,139,0.55)" }}>支持输出格式</p>
                  <p className="text-sm font-semibold text-white">Krpano / Pano2VR / 720云 / WebGL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 核心技术区 — 技术参数条风格（横向进度条可视化） ====== */}
      <section
        className="border-t py-20 md:py-28"
        style={{ borderColor: "rgba(203,213,225,0.6)" }}
      >
        <div className="section-container">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-md bg-cyan-500/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase" style={{ color: "#06b6d4" }}>
              TECHNICAL SPECIFICATIONS
            </span>
            <h2 className="mt-4 font-heading font-bold text-white text-3xl sm:text-4xl">
              核心技术<span style={{ color: "#06b6d4" }}>参数</span>
            </h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-8">
            {TECH_SPECS.map((item) => (
              <div key={item.label} className="group">
                {/* 参数条头部：图标 + 名称 + 描述 */}
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <item.icon weight="duotone" size={26} style={{ color: item.color }} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{item.label}</h3>
                      <p className="mt-0.5 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>{item.desc}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold tabular-nums" style={{ color: item.color }}>{item.value}%</span>
                </div>

                {/* 进度条样式的可视化 */}
                <div
                  className="relative h-2.5 overflow-hidden rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-125"
                    style={{
                      width: `${item.value}%`,
                      background: `linear-gradient(90deg, ${item.color}, ${item.color}cc)`,
                      boxShadow: `0 0 16px ${item.color}40`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 应用场景区 — 4个大方块 (2x2网格)，中央浮动半透明圆形信息气泡 ====== */}
      <section
        className="border-t py-20 md:py-28"
        style={{ borderColor: "rgba(203,213,225,0.6)" }}
      >
        <div className="section-container">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-md bg-cyan-500/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase" style={{ color: "#06b6d4" }}>
              APPLICATION SCENARIOS
            </span>
            <h2 className="mt-4 font-heading font-bold text-white text-3xl sm:text-4xl">
              典型应用<span style={{ color: "#06b6d4" }}>场景</span>
            </h2>
          </div>

          {/* 2x2 网格 — 大方块 */}
          <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            {SCENARIOS.map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl transition-all duration-400 hover:-translate-y-1"
                style={{ aspectRatio: "4/3" }}
              >
                {/* 图片满铺背景 */}
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* 渐变遮罩 */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to bottom, rgba(8,25,42,0.30) 0%, rgba(8,25,42,0.75) 100%)",
                  }}
                />

                {/* 中央浮动半透明圆形信息气泡（模拟VR热点概念） */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="group-hover:scale-110 transition-transform duration-300 rounded-full border backdrop-blur-md px-6 py-4 text-center"
                    style={{
                      borderColor: "rgba(6,182,212,0.25)",
                      backgroundColor: "rgba(6,182,212,0.08)",
                    }}
                  >
                    <item.icon weight="duotone" size={28} className="mb-2" style={{ color: "#06b6d4" }} />
                    <h3 className="text-base font-bold text-white">{item.label}</h3>
                    <p className="mt-1 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.60)" }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== VR预览嵌入位 — 实际全景展示区 ====== */}
      <section
        className="section-container border-t py-20 md:py-28"
        style={{ borderColor: "rgba(203,213,225,0.6)" }}
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <span className="mb-4 inline-block rounded-md bg-cyan-500/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase" style={{ color: "#06b6d4" }}>
              LIVE PREVIEW
            </span>
            <h2 className="mt-4 font-heading font-bold text-white text-3xl sm:text-4xl">
              VR全景<span style={{ color: "#06b6d4" }}>预览体验</span>
            </h2>
            <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.50)" }}>
              拖拽画面可360°旋转查看 · 支持鼠标滚轮缩放
            </p>
          </div>

          {/* 全景预览容器 — 交互式拖拽旋转 */}
          <PanoramaViewer
            src={IMAGES.vrPanorama}
            alt="VR全景预览 — 360度城市航拍"
          />

          {/* 平台兼容说明 */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { name: "Krpano", desc: "专业级全景引擎，自定义皮肤与热点" },
              { name: "Pano2VR", desc: "所见即所得编辑器，快速发布" },
              { name: "720云/WebGL", desc: "轻量Web端方案，微信小程序友好" },
            ].map((platform) => (
              <div
                key={platform.name}
                className="rounded-xl border p-4 text-center"
                style={{ borderColor: "rgba(203,213,225,0.6)", backgroundColor: "rgba(255,255,255,0.02)" }}
              >
                <Cube size={22} weight="duotone" className="mx-auto mb-2" style={{ color: "#06b6d4" }} />
                <p className="text-xs font-semibold text-white">{platform.name}</p>
                <p className="mt-1 text-[10px] leading-relaxed" style={{ color: "rgba(148,163,184,0.55)" }}>{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 底部 CTA — 简洁的青色系按钮 ====== */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.vrCta}
            alt="VR全景咨询"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to bottom, rgba(8,25,42,0.95) 0%, rgba(10,30,50,0.98) 100%),
                radial-gradient(ellipse at 50% 50%, rgba(6,182,212,0.10) 0%, transparent 60%)
              `,
            }}
          />
        </div>
        <div className="relative z-10 section-container text-center">
          <AirplaneTilt weight="duotone" size={40} className="mx-auto mb-5" style={{ color: "#06b6d4" }} />
          <h3 className="mb-4 font-heading font-bold text-white text-3xl sm:text-4xl">
            立即咨询VR全景航拍服务
          </h3>
          <p className="mx-auto mb-8 max-w-lg text-base" style={{ color: "rgba(255,255,255,0.60)" }}>
            告知您的场地信息，获取定制化VR全景方案报价
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full px-10 py-4.5 text-base font-bold shadow-lg shadow-cyan-500/25 transition-all hover:-translate-y-0.5 hover:shadow-cyan-500/35"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
              color: "#fff",
            }}
          >
            免费咨询报价
            <ArrowRight weight="bold" size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
