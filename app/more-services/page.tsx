import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Sunglasses,
  Broadcast,
  Sparkle,
  Cube,
  Plant,
  ArrowRight,
  Lightbulb,
  Rocket,
  MagicWand,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import Breadcrumb from "@/components/layout/breadcrumb";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { IMAGES } from "@/lib/images";

/* ========== SEO元数据 ========== */
export const metadata: Metadata = {
  title: "更多创新服务 — VR全景/直播/编队表演/销售/植保",
  description:
    "极翼科技更多创新服务：VR全景航拍、无人机实时直播、无人机编队灯光秀表演、专业无人机设备销售、农业植保无人机作业服务。",
  keywords: ["VR全景", "无人机直播", "编队表演", "无人机销售", "植保服务"],
};

/* ========== 服务入口数据（含差异化设计属性）========== */
const MORE_SERVICES = [
  {
    name: "VR全景航拍",
    slug: "vr-panorama",
    icon: Sunglasses,
    description: "720°沉浸式全景漫游体验，支持房产看房、景区展示等多场景应用",
    href: "/more-services/vr-panorama",
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    image: IMAGES.vrPanorama,
    scenarioIcon: Lightbulb,
    scenarioDesc: "让客户足不出户身临其境",
  },
  {
    name: "无人机直播",
    slug: "live-stream",
    icon: Broadcast,
    description: "4K高清实时推流，多平台同步传输，活动实况与新闻现场首选方案",
    href: "/more-services/live-stream",
    gradient: "from-orange-500 via-red-500 to-pink-600",
    image: IMAGES.liveStudio,
    scenarioIcon: Rocket,
    scenarioDesc: "零延迟将天空视角带入直播间",
  },
  {
    name: "无人机编队表演",
    slug: "light-show",
    icon: Sparkle,
    description: "50-500架次大型灯光秀编排表演，自定义图案文字动画呈现",
    href: "/more-services/light-show",
    gradient: "from-purple-500 via-fuchsia-500 to-pink-600",
    image: IMAGES.droneShow,
    scenarioIcon: MagicWand,
    scenarioDesc: "夜空中的科技艺术盛宴",
  },
  {
    name: "无人机整机销售",
    slug: "sales",
    icon: Cube,
    description: "DJI等品牌专业级无人机设备及配件一站式采购服务",
    href: "/more-services/sales",
    gradient: "from-slate-500 via-zinc-600 to-neutral-700",
    image: IMAGES.equipmentHero,
    scenarioIcon: ShieldCheck,
    scenarioDesc: "官方授权正品保障",
  },
  {
    name: "无人机植保服务",
    slug: "agriculture",
    icon: Plant,
    description: "农业植保无人机喷洒播撒作业，高效精准覆盖大面积农田",
    href: "/more-services/agriculture",
    gradient: "from-green-500 via-emerald-600 to-teal-700",
    image: IMAGES.agriField,
    scenarioIcon: Plant,
    scenarioDesc: "科技赋能现代农业",
  },
];

/* ========== 页面组件（服务端组件）========== */
export default function MoreServicesPage() {
  return (
    <div className="flex flex-col" style={{ backgroundColor: "#f0eff8" }}>
      {/* ====== Hero 区域 (60vh) — 暖色放射状光晕背景 ====== */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        {/* 背景大图 */}
        <div className="absolute inset-0">
          <Image
            src={IMAGES.droneShow}
            alt="创新服务"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
          {/* 深暖黑遮罩 */}
          <div className="absolute inset-0 bg-[#f0eff8]/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f0eff8] via-transparent to-transparent" />

          {/* 暖色放射状光晕背景（多个 radial-gradient 叠加） */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at 25% 35%, rgba(245,158,11,0.18) 0%, transparent 55%),
                radial-gradient(ellipse at 75% 45%, rgba(249,115,22,0.14) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 70%, rgba(239,68,68,0.10) 0%, transparent 45%),
                radial-gradient(ellipse at 20% 75%, rgba(244,63,94,0.08) 0%, transparent 40%),
                radial-gradient(ellipse at 80% 25%, rgba(251,191,36,0.10) 0%, transparent 50%)
              `,
            }}
          />
        </div>
        <BackgroundBeams className="opacity-12" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
          {/* Badge 标签 */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2 text-sm font-semibold tracking-wide" style={{ color: "#f59e0b" }}>
            <Sparkle weight="fill" size={16} />
            INNOVATION BEYOND AERIAL
          </div>

          {/* 超大字号标题 */}
          <h1 className="mb-5 font-heading font-black tracking-tight text-slate-800 text-6xl lg:text-7xl xl:text-8xl">
            探索<span style={{ color: "#f59e0b" }}>无限可能</span>
          </h1>

          {/* Warmer 语调副标题 */}
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-800/70 sm:text-xl" style={{ color: "rgba(71,85,105,0.65)" }}>
            从沉浸式体验到智能农业 — 每一项创新都带着温度，每一次飞行都充满能量。我们不只是提供技术，更在创造令人心动的可能。
          </p>

          {/* 特色标签条 */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {["VR全景", "实时直播", "编队表演", "设备销售", "智慧农业"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-4 py-1.5 text-sm font-medium transition-colors hover:border-amber-500/40"
                style={{
                  borderColor: "rgba(203,213,225,0.8)",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  color: "rgba(255,255,255,0.55)",
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
            { label: "更多服务" },
          ]}
        />
      </section>

      {/* ====== 服务列表 — 交替式大板块设计 ====== */}
      <section className="pb-20 md:pb-28">
        <div className="mb-14 px-4 text-center sm:px-6 md:px-8">
          <span className="mb-4 inline-block rounded-md bg-amber-500/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase" style={{ color: "#f59e0b" }}>
            INNOVATIVE SERVICES
          </span>
          <h2 className="mt-4 font-heading font-bold text-slate-800 text-3xl sm:text-4xl lg:text-5xl">
            每一项都是<span style={{ color: "#f97316" }}>突破常规</span>的创新
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-base" style={{ color: "rgba(255,255,255,0.55)" }}>
            不止于航拍 — 我们用技术重新定义可能
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-7 px-4 sm:px-6 md:px-8">
          {MORE_SERVICES.map((service, index) => (
            <Link
              key={service.slug}
              href={service.href}
              className="group relative block overflow-hidden rounded-2xl border border-[#cce0ed] bg-white shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/10"
            >
              <div className="flex flex-col md:flex-row">
                {/* 左侧：渐变色块 + 图标区域 (200px宽) */}
                <div className={`relative flex w-full shrink-0 items-center justify-center overflow-hidden md:w-[200px]`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 transition-opacity duration-300 group-hover:opacity-100`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <service.icon
                    weight="duotone"
                    size={56}
                    className="relative z-10 text-slate-800/90 transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* 序号角标 */}
                  <span
                    className="absolute left-3 top-3 z-10 rounded-full px-2 py-0.5 text-[10px] font-bold backdrop-blur-md"
                    style={{
                      backgroundColor: "rgba(255,255,255,1)",
                      color: "#fff",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* 中间：内容区 */}
                <div className="flex flex-1 flex-col justify-center p-6 lg:p-8">
                  <div className="mb-2 flex items-center gap-3">
                    <h3 className="text-xl font-semibold text-slate-800 transition-colors duration-300 group-hover:text-amber-400 lg:text-2xl">
                      {service.name}
                    </h3>
                    <span
                      className="hidden rounded-full px-2.5 py-0.5 text-[10px] font-medium sm:inline-block"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.95)",
                        color: "rgba(255,255,255,0.40)",
                      }}
                    >
                      创新服务
                    </span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed lg:text-base" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {service.description}
                  </p>
                  {/* 场景示意 + 场景描述 */}
                  <div className="flex items-center gap-3">
                    <service.scenarioIcon
                      weight="duotone"
                      size={16}
                      style={{ color: "rgba(245,158,11,0.60)" }}
                    />
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.40)" }}>{service.scenarioDesc}</span>
                    <ArrowRight
                      size={14}
                      weight="bold"
                      className="ml-auto opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                      style={{ color: "rgba(245,158,11,0.40)" }}
                    />
                  </div>
                </div>

                {/* 右侧：场景预览图（桌面端） */}
                <div className="hidden md:block relative w-[220px] shrink-0 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-60 transition-all duration-500 group-hover:opacity-90 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-l ${service.gradient} to-transparent opacity-30`} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ====== 探索感装饰区 — 圆角方形图标容器 + 光晕扩散效果 ====== */}
      <section
        className="border-t py-20 md:py-28"
        style={{
          borderColor: "rgba(203,213,225,0.6)",
          background: "linear-gradient(180deg, rgba(245,158,11,0.03) 0%, transparent 100%)",
        }}
      >
        <div className="section-container">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                icon: Lightbulb,
                title: "前沿技术应用",
                desc: "紧跟行业最新技术趋势，第一时间将成熟创新方案落地到实际项目中",
              },
              {
                icon: Rocket,
                title: "快速响应能力",
                desc: "从需求对接到方案交付，平均响应时间不超过24小时，高效推进每一个项目",
              },
              {
                icon: MagicWand,
                title: "定制化解决方案",
                desc: "每项创新服务均可根据您的具体需求进行深度定制，打造专属方案",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-[#cce0ed] bg-white shadow-sm p-8 transition-all duration-400 hover:-translate-y-1.5 hover:border-amber-500/20 hover:bg-white shadow-sm"
              >
                {/* Hover 光晕扩散层 */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: "radial-gradient(circle at 50% 30%, rgba(245,158,11,0.08) 0%, transparent 70%)",
                  }}
                />

                {/* 圆角方形图标容器（不是圆形！）— amber色渐变背景 */}
                <div
                  className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(245,158,11,0.18), rgba(249,115,22,0.12))",
                  }}
                >
                  <item.icon
                    weight="duotone"
                    size={32}
                    className="transition-transform duration-300"
                    style={{ color: "#f59e0b" }}
                  />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-800">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 底部 CTA — 大胆的全宽CTA，实心amber到orange渐变按钮 ====== */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.droneShow}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#f0eff8]/96" />
          {/* 暖色光晕叠加 */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at 50% 50%, rgba(245,158,11,0.15) 0%, transparent 60%),
                radial-gradient(ellipse at 30% 60%, rgba(249,115,22,0.10) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 section-container text-center">
          <Sparkle weight="duotone" size={48} className="mx-auto mb-6" style={{ color: "#f59e0b" }} />
          <h3 className="mb-5 font-heading font-bold text-slate-800 text-3xl sm:text-4xl lg:text-5xl">
            有<span style={{ color: "#f59e0b" }}>特殊想法</span>？
          </h3>
          <p className="mx-auto mb-10 max-w-xl text-base text-slate-800/70" style={{ color: "rgba(71,85,105,0.65)" }}>
            除了以上标准服务，我们还可根据您的具体创意需求提供完全定制化的无人机解决方案
          </p>
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            {/* 实心amber到orange渐变按钮（不是半透明！） */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full px-12 py-5 text-base font-bold shadow-2xl transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(245,158,11,0.35)]"
              style={{
                background: "linear-gradient(135deg, #f59e0b, #f97316)",
                color: "#fff",
              }}
            >
              联系我们定制方案
              <ArrowRight weight="bold" size={20} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border px-9 py-5 text-base font-semibold transition-all hover:border-white/40 hover:text-slate-800"
              style={{
                borderColor: "rgba(203,213,225,0.9)",
                color: "rgba(51,65,85,0.80)",
              }}
            >
              返回航拍服务
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
