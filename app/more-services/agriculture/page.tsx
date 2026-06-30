import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Plant,
  Funnel,
  ChartLineUp,
  ArrowRight,
  AirplaneTilt,
  DropHalf,
  Sun,
  CheckCircle,
  TreeEvergreen,
  Timer,
  CalendarBlank,
} from "@phosphor-icons/react/dist/ssr";
import Breadcrumb from "@/components/layout/breadcrumb";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { IMAGES } from "@/lib/images";

/* ========== SEO元数据 ========== */
export const metadata: Metadata = {
  title: "无人机植保服务 — 农业植保无人机喷洒播撒作业",
  description:
    "极翼科技农业植保无人机作业服务，提供喷洒作业、播撒作业、农情监测等全方位农业航空服务。高效精准、节省成本、大面积覆盖。",
  keywords: ["植保服务", "农业无人机", "农药喷洒", "播种撒肥", "农情监测"],
};

/* ========== 农田参数仪表盘数据 ========== */
const FIELD_METRICS = [
  {
    icon: ChartLineUp,
    label: "作业效率",
    value: "30-50x",
    desc: "是人工作业的数十倍",
    unit: "效率提升",
    color: "#22c55e",
    percentage: 95,
  },
  {
    icon: DropHalf,
    label: "药剂节省",
    value: "40%",
    desc: "精准施药减少浪费",
    unit: "节省率",
    color: "#16a34a",
    percentage: 88,
  },
  {
    icon: Plant,
    label: "覆盖面积",
    value: "50亩/架次",
    desc: "单架次大面积覆盖",
    unit: "单架次",
    color: "#15803d",
    percentage: 92,
  },
  {
    icon: Timer,
    label: "响应时间",
    value: "<24h",
    desc: "快速调度及时作业",
    unit: "响应速度",
    color: "#166534",
    percentage: 90,
  },
];

/* ========== 场景数据（全宽大图 + 标注） ========== */
const FIELD_SCENARIOS = [
  {
    image: IMAGES.agriField,
    location: "重庆 · 潼南区",
    cropType: "水稻田",
    area: "约800亩",
    task: "病虫害防治作业",
  },
  {
    image: IMAGES.greenFarm,
    location: "四川 · 成都市",
    cropType: "小麦种植区",
    area: "约1200亩",
    task: "叶面肥喷洒作业",
  },
  {
    image: IMAGES.cropSpraying,
    location: "云南 · 大理州",
    cropType: "茶园基地",
    area: "约500亩",
    task: "有机农药喷洒",
  },
];

/* ========== 植保机参数对比数据 ========== */
const EQUIPMENT_COMPARE = [
  {
    name: "DJI Agras T50",
    capacity: "50L",
    sprayWidth: "11米",
    coverage: "350亩/hour",
    battery: "双电池系统",
    tag: "旗舰推荐",
  },
  {
    name: "DJI Agras T25",
    capacity: "25L",
    sprayWidth: "9米",
    coverage: "200亩/hour",
    battery: "智能电池",
    tag: "灵活高效",
  },
  {
    name: "极翼定制方案",
    capacity: "定制",
    sprayWidth: "定制",
    coverage: "按需配置",
    battery: "多方案可选",
    tag: "量身打造",
  },
];

/* ========== 农事季节时间轴数据 ========== */
const SEASON_TIMELINE = [
  {
    season: "播种期",
    period: "3-4月",
    icon: TreeEvergreen,
    tasks: ["种子播撒作业", "底肥均匀投放", "土壤墒情监测"],
    color: "#84cc16",
  },
  {
    season: "生长期",
    period: "5-7月",
    icon: Sun,
    tasks: ["营养液叶面喷施", "生长状态巡检", "灌溉效果评估"],
    color: "#22c55e",
  },
  {
    season: "病虫害防治期",
    period: "6-9月",
    icon: Funnel,
    tasks: ["精准农药喷洒", "病害区域定位", "防治效果追踪"],
    color: "#16a34a",
  },
  {
    season: "收获期",
    period: "9-11月",
    icon: TreeEvergreen,
    tasks: ["产量预估航测", "收割路线规划", "秸秆还田处理"],
    color: "#15803d",
  },
];

/* ========== 页面组件（服务端组件）========== */
export default function AgriculturePage() {
  return (
    <div className="flex flex-col" style={{ backgroundColor: "#f0fdf4" }}>
      {/* ====== Hero — 深绿-橄榄调遮罩（自然感） ====== */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden lg:min-h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.agriField}
            alt="无人机植保服务"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
          {/* 深绿-橄榄调遮罩 */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to bottom, rgba(10,32,20,0.90) 0%, rgba(8,25,16,0.95) 100%),
                linear-gradient(to right, rgba(22,163,74,0.15) 0%, transparent 45%, rgba(21,128,61,0.10) 100%)
              `,
            }}
          />
          {/* 绿色光晕 */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at 35% 45%, rgba(34,197,94,0.14) 0%, transparent 55%),
                radial-gradient(ellipse at 65% 55%, rgba(22,163,74,0.10) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 70%, rgba(21,128,61,0.08) 0%, transparent 45%)
              `,
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Plant weight="duotone" size={56} className="mx-auto mb-5" style={{ color: "#22c55e" }} />

          {/* Badge 标签 */}
          <span
            className="mb-4 inline-block rounded-md px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
            style={{ backgroundColor: "rgba(34,197,94,0.12)", color: "#22c55e" }}
          >
            AGRICULTURE DRONE SERVICE
          </span>

          {/* 超大标题 */}
          <h1 className="mb-4 font-heading font-black tracking-tight text-slate-800 text-5xl sm:text-6xl lg:text-7xl">
            无人机<span style={{ color: "#22c55e" }}>植保服务</span>
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
            Agricultural Protection Drone Operation Service
          </p>

          {/* 特性标签 */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["高效精准喷洒", "智能航线规划", "大面积覆盖", "环保低残留"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-4 py-1.5 text-sm font-medium"
                style={{
                  borderColor: "rgba(34,197,94,0.25)",
                  backgroundColor: "rgba(34,197,94,0.08)",
                  color: "rgba(34,197,94,0.85)",
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
            { label: "植保服务" },
          ]}
        />
      </section>

      {/* ====== 概述区 — 田野数据展示风格 ====== */}
      <section className="section-container pb-16 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span
              className="mb-4 inline-block rounded-md bg-green-50 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[#22c55e]"
            >
              SERVICE OVERVIEW
            </span>
            <h2 className="mb-6 font-heading font-bold text-slate-800 text-3xl sm:text-4xl">
              农业植保无人机作业服务
            </h2>

            <div className="space-y-5 text-base leading-relaxed text-[#334155]">
              <p>
                农业现代化离不开科技的力量。极翼科技植保服务将先进的无人机技术引入农业生产，
                为种植户和专业合作社提供高效、精准、环保的植保作业解决方案。
              </p>
              <p>
                相比传统人工作业方式，植保无人机具有效率高、成本低、
                用药量精准可控、对农作物损伤小等显著优势。
                单架次即可完成数十亩农田的喷洒作业，
                是传统人工效率的几十倍。
              </p>
              <p>
                我们的服务涵盖农药喷洒、种子播撒、肥料投放以及农情监测等多种作业类型，
                配备专业的植保飞手团队和完善的作业安全保障体系，
                为您的农业生产保驾护航。
              </p>
            </div>

            {/* 田野数据标签 */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { icon: TreeEvergreen, text: "绿色环保用药" },
                { icon: Plant, text: "全作物适配" },
                { icon: Timer, text: "快速响应调度" },
                { icon: Funnel, text: "变量精准施药" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2.5 rounded-xl border border-[#bbf7d0] bg-white px-4 py-3"
                >
                  <item.icon size={20} style={{ color: "#22c55e" }} />
                  <span className="text-sm font-medium text-slate-800">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：田野数据面板风格的大图容器 */}
          <div className="relative overflow-hidden rounded-2xl lg:min-h-[450px]">
            <Image
              src={IMAGES.cropSpraying}
              alt="植保无人机作业现场"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(to bottom, rgba(8,25,16,0.15) 0%, rgba(8,25,16,0.75) 100%)",
              }}
            />

            {/* 浮动数据卡 — 单架次作业能力 */}
            <div
              className="absolute bottom-4 left-4 right-4 rounded-xl border border-[#bbf7d0] bg-white/90 backdrop-blur-md p-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-50"
                >
                  <ChartLineUp size={22} style={{ color: "#22c55e" }} />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#557090]">单架次作业能力</p>
                  <p className="text-sm font-semibold text-slate-800">覆盖 30-50 亩 / 载重 20-50L / 效率提升 30-50 倍</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 农田参数仪表盘区 ====== */}
      <section
        className="border-t py-20 md:py-28"
        style={{ borderColor: "rgba(255,255,255,0.05)", background: "linear-gradient(180deg, rgba(34,197,94,0.03) 0%, transparent 100%)" }}
      >
        <div className="section-container">
          <div className="mb-12 text-center">
            <span
              className="mb-4 inline-block rounded-md bg-green-50 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[#22c55e]"
            >
              FIELD METRICS DASHBOARD
            </span>
            <h2 className="mt-4 font-heading font-bold text-slate-800 text-3xl sm:text-4xl">
              农田参数<span style={{ color: "#22c55e" }}>仪表盘</span>
            </h2>
          </div>

          {/* 参数可视化网格 */}
          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {FIELD_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="group relative overflow-hidden rounded-2xl border border-[#cce0ed] bg-white shadow-sm p-6 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl"
                style={{
                  "--glow-color": metric.color,
                } as React.CSSProperties}
              >
                {/* 头部：图标 + 名称 */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${metric.color}15` }}
                    >
                      <metric.icon weight="duotone" size={26} style={{ color: metric.color }} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-800">{metric.label}</h3>
                      <p className="mt-0.5 text-xs text-[#557090]">{metric.desc}</p>
                    </div>
                  </div>
                </div>

                {/* 数值展示 */}
                <div className="mb-3 flex items-baseline gap-2">
                  <span
                    className="font-heading font-black tabular-nums leading-none"
                    style={{
                      fontSize: "clamp(2rem, 4vw, 2.8rem)",
                      color: metric.color,
                    }}
                  >
                    {metric.value}
                  </span>
                  <span className="text-sm font-medium text-[#94a3b8]">{metric.unit}</span>
                </div>

                {/* 进度条样式可视化 */}
                <div
                  className="relative h-2 overflow-hidden rounded-full bg-green-100"
                >
                  <div
                    className="absolute left-0 top-0 h-full rounded-full transition-all duration-700 group-hover:brightness-125"
                    style={{
                      width: `${metric.percentage}%`,
                      background: `linear-gradient(90deg, ${metric.color}, ${metric.color}cc)`,
                      boxShadow: `0 0 12px ${metric.color}30`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 场景区 — 大气的农田航拍图片展示（全宽大图 + 地点/作物类型/作业面积标注） ====== */}
      <section
        className="border-t border-[#bbf7d0] py-20 md:py-28"
      >
        <div className="section-container">
          <div className="mb-12 text-center">
            <span
              className="mb-4 inline-block rounded-md bg-green-50 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[#22c55e]"
            >
              FIELD SCENARIOS
            </span>
            <h2 className="mt-4 font-heading font-bold text-slate-800 text-3xl sm:text-4xl">
              作业<span style={{ color: "#22c55e" }}>现场</span>
            </h2>
          </div>

          {/* 全宽大图列表（不是小卡片！） */}
          <div className="mx-auto max-w-4xl space-y-8">
            {FIELD_SCENARIOS.map((scene, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl transition-all duration-400 hover:-translate-y-1"
                style={{ aspectRatio: "21/9" }}
              >
                <Image
                  src={scene.image}
                  alt={`${scene.location} - ${scene.task}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                {/* 渐变遮罩 */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to right, rgba(8,25,16,0.80) 0%, rgba(8,25,16,0.30) 50%, transparent 100%), linear-gradient(to top, rgba(8,25,16,0.70) 0%, transparent 50%)",
                  }}
                />

                {/* 底部标注信息栏 */}
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-6">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-800">{scene.task}</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#557090]">
                      <span className="flex items-center gap-1.5">
                        <TreeEvergreen size={14} style={{ color: "#22c55e" }} />
                        {scene.cropType}
                      </span>
                      <span>|</span>
                      <span>{scene.location}</span>
                      <span>|</span>
                      <span>{scene.area}</span>
                    </div>
                  </div>
                  <div
                    className="shrink-0 rounded-lg px-4 py-2 text-xs font-semibold"
                    style={{ backgroundColor: "rgba(34,197,94,0.15)", color: "#22c55e" }}
                  >
                    已完成
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 设备区 — 植保机参数对比（对比卡片形式） ====== */}
      <section
        className="border-t py-20 md:py-28"
        style={{ borderColor: "rgba(255,255,255,0.05)", background: "linear-gradient(180deg, rgba(34,197,94,0.02) 0%, transparent 100%)" }}
      >
        <div className="section-container">
          <div className="mb-12 text-center">
            <span
              className="mb-4 inline-block rounded-md bg-green-50 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[#22c55e]"
            >
              EQUIPMENT COMPARISON
            </span>
            <h2 className="mt-4 font-heading font-bold text-slate-800 text-3xl sm:text-4xl">
              设备<span style={{ color: "#22c55e" }}>对比</span>
            </h2>
          </div>

          {/* 对比卡片 */}
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            {EQUIPMENT_COMPARE.map((equip) => (
              <div
                key={equip.name}
                className="group relative overflow-hidden rounded-2xl border border-[#cce0ed] bg-white shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl hover:border-green-500/25"
              >
                {/* 标签 */}
                <div
                  className="rounded-t-2xl px-5 py-3 text-center text-xs font-bold tracking-wider uppercase"
                  style={{ backgroundColor: "rgba(34,197,94,0.08)", color: "#22c55e" }}
                >
                  {equip.tag}
                </div>

                <div className="p-6">
                  <h3 className="mb-5 text-lg font-bold text-slate-800">{equip.name}</h3>

                  {/* 参数列表 */}
                  <div className="space-y-3">
                    {[
                      { label: "载重容量", value: equip.capacity },
                      { label: "喷幅宽度", value: equip.sprayWidth },
                      { label: "作业效率", value: equip.coverage },
                      { label: "动力系统", value: equip.battery },
                    ].map((param) => (
                      <div key={param.label} className="flex items-center justify-between text-sm">
                        <span className="text-[#94a3b8]">{param.label}</span>
                        <span className="font-semibold text-slate-800">{param.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 服务流程 — 农事季节时间轴（按农作物生长周期组织） ====== */}
      <section
        className="border-t border-[#bbf7d0] py-20 md:py-28"
      >
        <div className="section-container">
          <div className="mb-12 text-center">
            <span
              className="mb-4 inline-block rounded-md bg-green-50 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[#22c55e]"
            >
              FARMING SEASON TIMELINE
            </span>
            <h2 className="mt-4 font-heading font-bold text-slate-800 text-3xl sm:text-4xl">
              农事<span style={{ color: "#22c55e" }}>季节</span>时间轴
            </h2>
          </div>

          {/* 时间轴布局 */}
          <div className="mx-auto max-w-3xl">
            <div className="relative">
              {/* 中央时间轴线 */}
              <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block" style={{ background: "linear-gradient(to bottom, rgba(34,197,94,0.20), rgba(34,197,94,0.05))" }}></div>

              <div className="space-y-8">
                {SEASON_TIMELINE.map((season, index) => (
                  <div key={season.season} className="group relative flex gap-6 md:gap-10">
                    {/* 左侧：节点圆点 */}
                    <div className="relative z-10 flex shrink-0 flex-col items-center">
                      <div
                        className="flex h-16 w-16 items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:scale-110"
                        style={{
                          borderColor: `${season.color}40`,
                          backgroundColor: `${season.color}10`,
                        }}
                      >
                        <season.icon weight="duotone" size={28} style={{ color: season.color }} />
                      </div>
                      {/* 连接线（非最后一项显示） */}
                      {index < SEASON_TIMELINE.length - 1 && (
                        <div className="mt-2 w-px h-8" style={{ backgroundColor: `rgba(34,197,94,${0.15 - index * 0.03})` }}></div>
                      )}
                    </div>

                    {/* 右侧：内容卡片 */}
                    <div
                      className="flex-1 rounded-xl border border-[#cce0ed] bg-white shadow-sm p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white shadow-sm"
                    >
                      <div className="mb-2 flex items-center gap-3">
                        <h3 className="text-base font-bold text-slate-800">{season.season}</h3>
                        <span
                          className="rounded-md px-2 py-0.5 text-[10px] font-bold"
                          style={{ backgroundColor: `${season.color}18`, color: season.color }}
                        >
                          {season.period}
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {season.tasks.map((task) => (
                          <li key={task} className="flex items-center gap-2 text-sm text-[#334155]">
                            <CheckCircle size={14} style={{ color: season.color }} />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 底部 CTA — 绿色自然按钮（浅色背景） ====== */}
      <section className="relative overflow-hidden bg-green-50 py-20 md:py-28">
        <div className="relative z-10 section-container text-center">
          <Plant weight="duotone" size={44} className="mx-auto mb-5" style={{ color: "#22c55e" }} />
          <h3 className="mb-4 font-heading font-bold text-slate-800 text-3xl sm:text-4xl">
            免费<span style={{ color: "#22c55e" }}>评估地块</span>
          </h3>
          <p className="mx-auto mb-8 max-w-lg text-base text-[#557090]">
            提供地块位置、作物类型及作业面积，获取植保方案报价
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full px-12 py-5 text-base font-bold shadow-2xl shadow-green-600/25 transition-all hover:-translate-y-0.5 hover:shadow-green-600/35"
            style={{
              background: "linear-gradient(135deg, #22c55e, #16a34a)",
              color: "#fff",
            }}
          >
            免费评估地块
            <ArrowRight weight="bold" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
