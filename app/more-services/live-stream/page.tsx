import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Broadcast,
  VideoCamera,
  ShareNetwork,
  ClockCounterClockwise,
  Newspaper,
  Trophy,
  TreeEvergreen,
  ArrowRight,
  AirplaneTilt,
  WifiHigh,
  MonitorPlay,
  Waves,
  ChartLineUp,
} from "@phosphor-icons/react/dist/ssr";
import Breadcrumb from "@/components/layout/breadcrumb";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { IMAGES } from "@/lib/images";

/* ========== SEO元数据 ========== */
export const metadata: Metadata = {
  title: "无人机直播 - 4K高清实时推流航拍直播服务",
  description:
    "极翼科技无人机实时航拍直播服务，4K高清推流、多平台同步传输、低延迟图传。适用于活动实况直播、新闻报道、赛事转播、景区慢直播等场景。",
  keywords: ["无人机直播", "航拍直播", "4K推流", "活动直播", "实时航拍"],
};

/* ========== 技术能力数据（信号强度仪风格） ========== */
const TECH_CAPABILITIES = [
  {
    icon: VideoCamera,
    label: "4K高清推流",
    desc: "支持4K@30fps超清画质实时输出",
    signalLevel: 5,
    color: "#ef4444",
  },
  {
    icon: ShareNetwork,
    label: "多平台同步",
    desc: "同时推送至抖音、B站、视频号等多平台",
    signalLevel: 4,
    color: "#f97316",
  },
  {
    icon: ClockCounterClockwise,
    label: "低延迟传输",
    desc: "端到端延迟低于800ms，近乎实时体验",
    signalLevel: 5,
    color: "#dc2626",
  },
];

/* ========== 应用场景数据（直播间缩略图风格） ========== */
const SCENARIOS = [
  {
    icon: null as never,
    label: "活动实况直播",
    desc: "大型活动现场空中视角实时转播",
    image: IMAGES.liveConcert,
    isLive: true,
    viewers: "12.8万",
  },
  {
    icon: null as never,
    label: "新闻报道",
    desc: "突发事件现场快速部署航拍报道",
    image: IMAGES.eventStadium,
    isLive: false,
    viewers: "回放",
  },
  {
    icon: null as never,
    label: "赛事转播",
    desc: "体育比赛全程跟拍与精彩回放",
    image: IMAGES.liveSports,
    isLive: true,
    viewers: "8.6万",
  },
  {
    icon: null as never,
    label: "景区慢直播",
    desc: "24小时不间断风景慢直播运营",
    image: IMAGES.tourismCity,
    isLive: false,
    viewers: "回放",
  },
];

/* ========== 直播流程数据（倒计时/进度概念） ========== */
const WORKFLOW_STEPS = [
  { step: 1, title: "需求沟通", desc: "确认活动类型", icon: ShareNetwork, progress: 20 },
  { step: 2, title: "方案设计", desc: "规划航线机位", icon: VideoCamera, progress: 40 },
  { step: 3, title: "设备调试", desc: "信号测试联调", icon: WifiHigh, progress: 60 },
  { step: 4, title: "正式直播", desc: "多机位协作", icon: Broadcast, progress: 80 },
  { step: 5, title: "素材交付", desc: "录像剪辑交付", icon: MonitorPlay, progress: 100 },
];

/* ========== 页面组件（服务端组件）========== */
export default function LiveStreamPage() {
  return (
    <div className="flex flex-col" style={{ backgroundColor: "#fff5f5" }}>
      {/* ====== Hero — 暗红-紫调遮罩 + 脉冲动画红点LIVE指示器 ====== */}
      <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden lg:min-h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.liveStudio}
            alt="无人机直播"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
          {/* 暗红-紫调遮罩 */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to bottom, rgba(30,10,25,0.88) 0%, rgba(20,10,30,0.94) 100%),
                linear-gradient(to right, rgba(239,68,68,0.18) 0%, transparent 45%, rgba(147,51,234,0.12) 100%)
              `,
            }}
          />
          {/* 红橙光晕 */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at 40% 40%, rgba(239,68,68,0.18) 0%, transparent 55%),
                radial-gradient(ellipse at 65% 60%, rgba(249,115,22,0.12) 0%, transparent 50%)
              `,
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Broadcast weight="duotone" size={56} className="mx-auto mb-5" style={{ color: "#ef4444" }} />

          {/* Badge 标签 */}
          <span
            className="mb-4 inline-block rounded-md px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
            style={{ backgroundColor: "rgba(239,68,68,0.12)", color: "#ef4444" }}
          >
            DRONE LIVE STREAMING
          </span>

          {/* 超大标题 */}
          <h1 className="mb-4 font-heading font-black tracking-tight text-slate-800 text-5xl sm:text-6xl lg:text-7xl">
            无人机<span style={{ color: "#ef4444" }}>直播</span>
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
            Real-time Aerial Live Streaming Service
          </p>

          {/* 特性标签 */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["4K超清画质", "多平台推流", "<800ms低延迟", "专业导播团队"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-4 py-1.5 text-sm font-medium"
                style={{
                  borderColor: "rgba(239,68,68,0.25)",
                  backgroundColor: "rgba(239,68,68,0.08)",
                  color: "rgba(239,68,68,0.85)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 脉冲动画的红点LIVE指示器 */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="relative flex h-4 w-4">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ backgroundColor: "#ef4444" }}
              ></span>
              <span
                className="relative inline-flex h-4 w-4 rounded-full"
                style={{ backgroundColor: "#ef4444" }}
              ></span>
            </span>
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#ef4444" }}>
              ● LIVE READY
            </span>
          </div>
        </div>
      </section>

      {/* ====== 面包屑导航 ====== */}
      <section className="section-container py-2.5">
        <Breadcrumb
          items={[
            { label: "首页", href: "/" },
            { label: "更多服务", href: "/more-services" },
            { label: "无人机直播" },
          ]}
        />
      </section>

      {/* ====== 概述区 — 直播数据面板风格（右侧图片叠加直播参数条） ====== */}
      <section className="section-container pb-10 md:pb-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span
              className="mb-4 inline-block rounded-md bg-red-50 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[#ef4444]"
            >
              SERVICE OVERVIEW
            </span>
            <h2 className="mb-6 font-heading font-bold text-slate-800 text-3xl sm:text-4xl">
              实时航拍直播服务
            </h2>

            <div className="space-y-3.5 text-base leading-relaxed text-[#334155]">
              <p>
                当事件正在发生，每一秒都值得被实时记录。
                极翼科技无人机直播服务将天空视角带入直播间，
                为观众提供前所未有的沉浸式观看体验。
              </p>
              <p>
                我们配备专业的图传设备与编码推流系统，支持4K超高清画质输出，
                可同时向多个直播平台进行同步推流。
                先进的低延迟技术确保端到端延迟控制在800ms以内，
                让远程观众也能感受到现场的紧张氛围。
              </p>
              <p>
                从大型活动的震撼开场到体育赛事的关键时刻，
                从突发新闻的第一时间到景区的四季流转 &mdash;
                我们的直播团队具备丰富的实战经验，确保每一次直播都稳定流畅。
              </p>
            </div>

            {/* 核心亮点标签 */}
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {[
                { icon: WifiHigh, text: "O3+图传系统" },
                { icon: MonitorPlay, text: "SDI/HDMI输出" },
                { icon: Waves, text: "抗干扰能力强" },
                { icon: ChartLineUp, text: "实时数据叠加" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2.5 rounded-xl border border-[#fecaca] bg-red-50 px-4 py-3"
                >
                  <item.icon size={20} style={{ color: "#ef4444" }} />
                  <span className="text-sm font-medium text-slate-800">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：直播数据面板风格的大图容器 + 叠加直播参数条 */}
          <div className="relative overflow-hidden rounded-2xl lg:min-h-[320px]">
            <Image
              src={IMAGES.liveEvent}
              alt="无人机直播作业现场"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, rgba(20,10,30,0.20) 0%, rgba(20,10,30,0.70) 100%)",
              }}
            />

            {/* 叠加的直播参数条（模拟直播界面） */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-3 rounded-lg border border-[#fecaca] bg-white/90 backdrop-blur-md px-4 py-2.5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#ef4444" }}></span>
                <span className="text-xs font-bold tracking-wider uppercase" style={{ color: "#ef4444" }}>REC</span>
                <span className="mx-1.5 text-xs text-[#94a3b8]">|</span>
                <span className="text-xs font-mono font-semibold text-slate-800">4K@30fps</span>
              </div>
              <span className="font-mono text-xs font-medium tabular-nums text-[#64748b]">
                00:00:00
              </span>
            </div>

            {/* 底部浮动信息卡 */}
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-[#fecaca] bg-white/90 backdrop-blur-md p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-50">
                  <VideoCamera size={22} style={{ color: "#ef4444" }} />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#557090]">直播技术规格</p>
                  <p className="text-sm font-semibold text-slate-800">RTMP推流 / O3 Pro图传 / 多机位切换</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 技术能力区 — 信号强度仪风格（信号格可视化） ====== */}
      <section
        className="border-t border-[#fecaca] py-12 md:py-16"
      >
        <div className="section-container">
          <div className="mb-8 text-center">
            <span
              className="mb-4 inline-block rounded-md bg-red-50 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[#ef4444]"
            >
              TECHNICAL CAPABILITIES
            </span>
            <h2 className="mt-4 font-heading font-bold text-slate-800 text-3xl sm:text-4xl">
              核心技术<span style={{ color: "#ef4444" }}>能力</span>
            </h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-5">
            {TECH_CAPABILITIES.map((item) => (
              <div key={item.label} className="group">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div
                      className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl bg-red-50 transition-transform duration-300 group-hover:scale-110"
                    >
                      <item.icon weight="duotone" size={28} style={{ color: item.color }} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-800">{item.label}</h3>
                      <p className="mt-0.5 text-xs leading-relaxed text-[#557090]">{item.desc}</p>
                    </div>
                  </div>
                </div>

                {/* 信号格可视化（类似手机信号强度的横条） */}
                <div className="flex items-end gap-1.5 pl-16">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="transition-all duration-500 group-hover:brightness-125"
                      style={{
                        width: i === 4 ? "30px" : "24px",
                        height: `${(i + 1) * 11}px`,
                        borderRadius: "3px",
                        backgroundColor: i < item.signalLevel ? item.color : "#fecaca",
                        boxShadow: i < item.signalLevel ? `0 0 8px ${item.color}30` : "none",
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 应用场景区 — 4个竖向卡片（aspect-[3/4]），模拟直播间缩略图 ====== */}
      <section
        className="border-t border-[#fecaca] py-10 md:py-14"
      >
        <div className="section-container">
          <div className="mb-6 text-center">
            <span
              className="mb-4 inline-block rounded-md bg-red-50 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[#ef4444]"
            >
              APPLICATION SCENARIOS
              </span>
              <h2 className="mt-4 font-heading font-bold text-slate-800 text-3xl sm:text-4xl">
              典型应用<span style={{ color: "#ef4444" }}>场景</span>
            </h2>
          </div>

          {/* 4个竖向卡片网格 */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {SCENARIOS.map((item, index) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl"
                style={{ aspectRatio: "4/5" }}
                >
                {/* 图片背景 */}
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
                    background: "linear-gradient(to bottom, rgba(20,10,30,0.15) 0%, rgba(20,10,30,0.82) 100%)",
                  }}
                />

                {/* 右上角：LIVE角标（奇数项）或 回放角标（偶数项） */}
                <div className="absolute top-3 right-3">
                  {item.isLive ? (
                    <div
                      className="flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-bold"
                      style={{ backgroundColor: "#dc2626", color: "#fff" }}
                    >
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-white"></span>
                      LIVE
                    </div>
                  ) : (
                    <div
                      className="rounded-md px-2.5 py-1 text-xs font-bold bg-white/80 text-[#64748b]"
                    >
                      回放
                    </div>
                  )}
                </div>

                {/* 底部：标题 + 观看人数模拟 */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="mb-1.5 text-base font-bold text-white">{item.label}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-white/80">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <span>{item.viewers}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 流程区 — 直播倒计时风格（圆形进度节点） ====== */}
      <section
        className="border-t border-[#fecaca] py-10 md:py-14"
      >
        <div className="section-container">
          <div className="mb-6 text-center">
              <span
                className="mb-4 inline-block rounded-md bg-red-50 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[#ef4444]"
              >
              WORKFLOW
            </span>
            <h2 className="mt-4 font-heading font-bold text-slate-800 text-3xl sm:text-4xl">
              直播服务<span style={{ color: "#ef4444" }}>流程</span>
            </h2>
          </div>

          {/* 5步横向排列 — 圆形进度节点 */}
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-0">
              {WORKFLOW_STEPS.map((item, index) => (
                <div key={item.step} className="flex flex-1 flex-col items-center relative group">
                  {/* 圆形进度节点 */}
                  <div
                    className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-red-200 bg-red-50 transition-all duration-400 group-hover:scale-110"
                  >
                    {/* 进度环 */}
                    <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 80 80">
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        fill="none"
                        stroke="#fecaca"
                        strokeWidth="3"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 36}`}
                        strokeDashoffset={`${2 * Math.PI * 36 * (1 - item.progress / 100)}`}
                        className="transition-all duration-1000"
                      />
                    </svg>
                    <span className="text-lg font-bold tabular-nums" style={{ color: "#ef4444" }}>{item.step}</span>
                  </div>

                  {/* 图标 */}
                  <item.icon weight="duotone" size={20} className="mb-2 transition-transform duration-300 group-hover:scale-110" style={{ color: "#ef4444" }} />

                  {/* 文字信息 */}
                  <h3 className="text-sm font-bold text-slate-800">{item.title}</h3>
                  <p className="mt-0.5 text-center text-xs text-[#557090]">{item.desc}</p>

                  {/* 连接箭头（非最后一项显示） */}
                  {index < WORKFLOW_STEPS.length - 1 && (
                    <div className="hidden absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] md:block">
                      <div className="h-px" style={{ background: "linear-gradient(to right, rgba(239,68,68,0.30), rgba(239,68,68,0.08))" }}></div>
                      <ArrowRight
                        size={14}
                        className="absolute -top-1.5 right-[-7px]"
                        style={{ color: "rgba(239,68,68,0.25)" }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== 底部 CTA — 红色 energetic 按钮（浅色背景） ====== */}
      <section className="relative overflow-hidden bg-red-50 py-12 md:py-16">
        <div className="relative z-10 section-container text-center">
          <AirplaneTilt weight="duotone" size={40} className="mx-auto mb-3" style={{ color: "#ef4444" }} />
          <h3 className="mb-4 font-heading font-bold text-slate-800 text-3xl sm:text-4xl">
            立即咨询无人机直播服务
          </h3>
          <p className="mx-auto mb-5 max-w-lg text-base text-[#557090]">
            告知活动类型、时长及目标平台，获取直播技术方案
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-base font-bold shadow-2xl shadow-red-600/30 transition-all hover:-translate-y-0.5 hover:shadow-red-600/40"
            style={{
              background: "linear-gradient(135deg, #ef4444, #dc2626)",
              color: "#fff",
            }}
          >
            立即预约直播
            <ArrowRight weight="bold" size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
