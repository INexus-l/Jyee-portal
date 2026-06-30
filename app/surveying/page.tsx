import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  MapTrifold,
  CubeTransparent,
  ImageSquare,
  CellSignalHigh,
  TreeEvergreen,
  Buildings,
  Warning,
  Factory,
  AirplaneTilt,
  ArrowRight,
  CloudArrowUp,
  GearSix,
  CheckCircle,
  FileArrowDown,
  Waveform,
  Crosshair,
  Timer,
  MapPin,
  Cube,
  ArrowsCounterClockwise,
} from "@phosphor-icons/react/dist/ssr";
import Breadcrumb from "@/components/layout/breadcrumb";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { IMAGES } from "@/lib/images";

/* ========== SEO元数据 ========== */
export const metadata: Metadata = {
  title:
    "航测测绘服务 — 无人机三维建模、正射影像、LiDAR激光扫描",
  description:
    "极翼科技提供专业无人机航测测绘服务，包括倾斜摄影测量、三维模型重建、DOM/DSM正射影像、LiDAR激光点云扫描、土地确权、工程测量等。厘米级精度，全天候作业。",
};

/* ========== 核心能力矩阵（4项） - 技术规格条样式 ========== */
const CAPABILITIES = [
  {
    icon: ImageSquare,
    label: "倾斜摄影测量",
    desc: "五镜头同步采集，一键生成三维模型",
    param: "5镜头 · 80%重叠率",
    progress: 95,
    src: IMAGES.vrPanorama,
  },
  {
    icon: CubeTransparent,
    label: "三维建模重建",
    desc: "实景复刻，厘米级精度，支持OSGB/OBJ格式",
    param: "±5cm精度 · 多格式",
    progress: 92,
    src: IMAGES.tourismCity,
  },
  {
    icon: MapTrifold,
    label: "正射影像DOM/DSM",
    desc: "分辨率优于5cm，1:500~1:2000成图",
    param: "0.5cm/pixel · 1:500",
    progress: 90,
    src: IMAGES.constructionSite,
  },
  {
    icon: CellSignalHigh,
    label: "LiDAR激光扫描",
    desc: "穿透植被获取真实地形DTM",
    param: "24万点/秒 · 3回波",
    progress: 88,
    src: IMAGES.bridgeBuild,
  },
];

/* ========== 技术作业流程（5步） ========== */
const TECH_PROCESS = [
  {
    step: 1,
    icon: Crosshair,
    title: "项目勘测",
    desc: "现场踏勘，确定航高、重叠率、GCP布设方案",
  },
  {
    step: 2,
    icon: CloudArrowUp,
    title: "数据采集",
    desc: "多角度倾斜拍摄或激光雷达扫描，RTK/PPK高精度定位",
  },
  {
    step: 3,
    icon: GearSix,
    title: "空三加密",
    desc: "Smart3D/ContextCapture自动化处理，生成密集点云",
  },
  {
    step: 4,
    icon: Cube,
    title: "成果生产",
    desc: "三维模型/正射影像/等高线/断面图/土方计算",
  },
  {
    step: 5,
    icon: FileArrowDown,
    title: "交付应用",
    desc: "多格式交付，支持GIS/BIM平台对接",
  },
];

/* ========== 应用场景（Bento布局） ========== */
const APPLICATIONS = [
  {
    icon: TreeEvergreen,
    label: "土地确权与不动产登记",
    desc: "农村宅基地/承包地确权，房地一体调查，界址点精准测量",
    specs: ["1:500精度", "界址点±5cm", "自动成图"],
    src: IMAGES.agriField,
    size: "large" as const,
  },
  {
    icon: Factory,
    label: "工程测量与进度管理",
    desc: "土方量计算、施工进度监测、竣工测量验收",
    specs: ["土方计算", "进度对比", "偏差分析"],
    src: IMAGES.constructionSite,
    size: "small" as const,
  },
  {
    icon: Buildings,
    label: "城市规划与违建排查",
    desc: "三维城市底板建设、违法建筑自动识别与标注",
    specs: ["三维底板", "AI识别", "变化检测"],
    src: IMAGES.tourismCity,
    size: "small" as const,
  },
  {
    icon: Warning,
    label: "灾害评估与应急响应",
    desc: "滑坡监测、洪水淹没分析、灾后快速评估与重建规划",
    specs: ["应急2h响应", "淹没模拟", "损失评估"],
    src: IMAGES.bridgeBuild,
    size: "large" as const,
  },
];

/* ========== 专业设备（水平时间轴式） ========== */
const EQUIPMENT = [
  {
    name: "DJI Matrice 350 RTK + P1 全画幅",
    specs: ["4500万像素", "快门1/2000s", "RTK/PPK双定位"],
    application: "大面积正射影像、高精度三维建模",
    src: IMAGES.matrice350,
  },
  {
    name: "DJI L2 激光雷达系统",
    specs: ["240000点/秒", "3回波接收", "穿透植被"],
    application: "DTM生成、林业调查、电力巡检",
    src: IMAGES.filmEquipment,
  },
  {
    name: "大疆智图 + ContextCapture",
    specs: ["自动化处理", "集群渲染", "多格式输出"],
    application: "空三加密、模型重建、正射影像生产",
    src: IMAGES.inspire3,
  },
];

/* ========== 技术精度指标（仪表盘风格） ========== */
const ACCURACY_SPECS = [
  { value: "±5cm", unit: "", label: "平面精度", max: 10 },
  { value: "±10cm", unit: "", label: "高程精度", max: 20 },
  { value: "0.5cm", unit: "/pixel", label: "地面分辨率", max: 5 },
  { value: "1-3", unit: "km²", label: "单架次覆盖", max: 5 },
  { value: "5-10", unit: "km²", label: "日产能", max: 15 },
  { value: "7", unit: "种", label: "输出格式", max: 10 },
];

export default function SurveyingPage() {
  return (
    <div className="flex flex-col" style={{ backgroundColor: "#eaf3ef" }}>
      {/* ====== Hero 区域 — 技术仪表盘风格 ====== */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden lg:min-h-[70vh]">
        {/* 背景图 */}
        <div className="absolute inset-0">
          <Image
            src={IMAGES.vrPanorama}
            alt="航测测绘服务"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#dff0ea]/97 via-[#dff0ea]/75 to-[#162320]/85" />
        </div>
        {/* 微妙的光晕效果 */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 40%, rgba(16,185,129,0.08), transparent 60%)",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* 左侧 60%：标题+描述 */}
            <div className="lg:col-span-3">
              {/* monospace 英文标签 */}
              <span className="mb-4 block font-mono text-xs tracking-widest text-[#059669] uppercase">
                SURVEYING &amp; MAPPING SERVICES
              </span>

              {/* 主标题 */}
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl lg:text-6xl">
                航测<span className="text-emerald-400">测绘</span>服务
              </h1>

              {/* 技术性描述 */}
              <p className="mb-8 max-w-xl leading-relaxed text-slate-600 sm:text-base lg:text-lg">
                基于无人机平台的专业地理信息数据采集与处理服务。
                集成倾斜摄影测量、三维建模重建、正射影像生产及 LiDAR 激光扫描技术，
                为国土测绘、工程建设、城市规划等领域提供厘米级精度的空间数据解决方案。
              </p>

              {/* 技术标签 */}
              <div className="flex flex-wrap gap-2">
                {["RTK/PPK高精度定位", "五镜头倾斜摄影", "LiDAR点云", "多格式输出"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="border border-emerald-500/15 bg-[#ecfdf5] px-3 py-1 font-mono text-xs text-emerald-700"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* 右侧 40%：实时数据面板 */}
            <div className="lg:col-span-2">
              <div className="border border-emerald-500/12 bg-white p-5 backdrop-blur-sm lg:p-6">
                {/* 面板标题 */}
                <div className="mb-4 flex items-center gap-2 border-b border-[#dde8ef] pb-3">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  <span className="font-mono text-xs tracking-wide text-[#059669] uppercase">
                    Real-time Specifications
                  </span>
                </div>

                {/* 网格背景的数据项 */}
                <div
                  className="space-y-3"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(16,185,129,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                >
                  {[
                    { label: "平面精度", value: "±5cm", unit: "" },
                    { label: "高程精度", value: "±10cm", unit: "" },
                    { label: "分辨率", value: "0.5cm", unit: "/pixel" },
                    { label: "日产能", value: "5-10", unit: "km²" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between border-b border-emerald-500/8 pb-2.5 last:border-0"
                    >
                      <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                        {item.label}
                      </span>
                      <span className="font-mono text-base font-semibold text-emerald-400 sm:text-lg">
                        {item.value}
                        <span className="ml-0.5 text-xs font-normal text-[#10b981]">
                          {item.unit}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>

                {/* 底部状态栏 */}
                <div className="mt-4 flex items-center gap-2 pt-3 border-t border-[#dde8ef]">
                  <CheckCircle weight="bold" size={14} className="text-[#059669]" />
                  <span className="font-mono text-[10px] text-[#94a3b8] uppercase tracking-wider">
                    System Online · Ready for Mission
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 面包屑导航 ====== */}
      <section className="border-b border-[#dde8ef] py-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Breadcrumb
            items={[
              { label: "首页", href: "/" },
              { label: "航拍服务", href: "/services" },
              { label: "航测测绘服务" },
            ]}
          />
        </div>
      </section>

      {/* ====== 四大核心能力 — 2x2 数据面板 ====== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* 区域标题 */}
          <div className="mb-12">
            <span className="mb-3 block font-mono text-xs tracking-widest text-[#059669] uppercase">
              Core Capabilities
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              四大<span className="text-emerald-400">核心能力</span>
            </h2>
            <div className="mt-3 h-px w-16 bg-emerald-500/30" />
          </div>

          {/* 2x2 数据面板网格 */}
          <div className="grid gap-5 md:grid-cols-2">
            {CAPABILITIES.map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden border border-[#dde8ef] bg-white transition-colors hover:border-emerald-500/20"
              >
                {/* 装饰性背景图（低透明度） */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className="relative p-6">
                  {/* 顶部：图标 + 名称 + 参数 */}
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      {/* 线条图标（无圆圈背景） */}
                      <item.icon
                        weight="duotone"
                        size={24}
                        className="text-emerald-600 shrink-0"
                      />
                      <h3 className="text-base font-semibold text-slate-800">{item.label}</h3>
                    </div>
                    {/* 右侧关键参数（monospace） */}
                    <span className="font-mono text-xs text-[#059669]">
                      {item.param}
                    </span>
                  </div>

                  {/* 描述文本 */}
                  <p className="mb-4 text-sm leading-relaxed text-[#557090]">{item.desc}</p>

                  {/* 底部：emerald 进度条 */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-[#94a3b8] uppercase tracking-wider">
                        Capability Level
                      </span>
                      <span className="font-mono text-[10px] text-[#10b981]">
                        {item.progress}%
                      </span>
                    </div>
                    <div className="h-1 overflow-hidden bg-[#ecfdf5]">
                      <div
                        className="h-full bg-emerald-500/60 transition-all group-hover:bg-emerald-400/70"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 技术作业流程 — 工程图纸连接线 ====== */}
      <section className="border-y border-[#dde8ef] py-16 md:py-24 bg-[#eaf3ef]/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* 区域标题 */}
          <div className="mb-14 text-center">
            <span className="mb-3 block font-mono text-xs tracking-widest text-[#059669] uppercase">
              Technical Workflow
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              技术<span className="text-emerald-400">作业流程</span>
            </h2>
            <div className="mx-auto mt-3 h-px w-16 bg-emerald-500/30" />
          </div>

          {/* 桌面端：横向矩形节点流程图 */}
          <div className="hidden md:block">
            <div className="relative">
              {/* 水平连接线 */}
              <div className="absolute left-[8%] right-[8%] top-12 h-px bg-emerald-500/20" />

              <div className="flex justify-between gap-3">
                {TECH_PROCESS.map((item, idx) => (
                  <div key={item.step} className="flex flex-1 flex-col items-center">
                    {/* 矩形节点 */}
                    <div className="relative mb-4 w-full max-w-[140px]">
                      {/* 步骤编号角标 */}
                      <div className="absolute -top-2.5 -left-2.5 z-10 flex h-6 w-6 items-center justify-center bg-emerald-600 font-mono text-xs font-bold text-slate-800">
                        {String(item.step).padStart(2, "0")}
                      </div>

                      {/* 矩形容器 */}
                      <div className="border border-emerald-500/15 bg-white p-4 backdrop-blur-sm transition-colors hover:border-emerald-500/30">
                        {/* 图标 */}
                        <div className="mb-2 flex justify-center">
                          <item.icon
                            weight="duotone"
                            size={26}
                            className="text-emerald-600"
                          />
                        </div>
                        {/* 标题 */}
                        <h4 className="mb-1 text-center text-sm font-semibold text-slate-800">
                          {item.title}
                        </h4>
                        {/* 技术说明 */}
                        <p className="line-clamp-2 text-center text-[11px] leading-relaxed text-[#94a3b8]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 移动端：纵向排列 + 左侧连接线 */}
          <div className="md:hidden space-y-4">
            {TECH_PROCESS.map((item) => (
              <div key={item.step} className="flex gap-4">
                {/* 左侧：编号 + 连接线 */}
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-emerald-500/25 bg-[#ecfdf5] font-mono text-xs font-bold text-emerald-400">
                    {item.step}
                  </div>
                  {item.step < TECH_PROCESS.length && (
                    <div className="w-px flex-1 bg-gradient-to-b from-emerald-500/25 to-transparent" />
                  )}
                </div>

                {/* 右侧：内容 */}
                <div className="flex-1 border border-[#dde8ef] bg-white p-4">
                  <div className="mb-1.5 flex items-center gap-2">
                    <item.icon weight="duotone" size={18} className="text-emerald-600" />
                    <h4 className="text-sm font-semibold text-slate-800">{item.title}</h4>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 典型应用场景 — Bento错位布局 ====== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* 区域标题 */}
          <div className="mb-12">
            <span className="mb-3 block font-mono text-xs tracking-widest text-[#059669] uppercase">
              Application Scenarios
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              典型<span className="text-emerald-400">应用场景</span>
            </h2>
            <div className="mt-3 h-px w-16 bg-emerald-500/30" />
          </div>

          {/* Bento 网格：2大 + 2小错位布局 */}
          <div className="grid gap-4 md:grid-cols-2 md:grid-rows-2">
            {APPLICATIONS.map((item) => (
              <div
                key={item.label}
                className={`group relative overflow-hidden border border-[#dde8ef] bg-white transition-colors hover:border-emerald-500/20 ${
                  item.size === "large" ? "md:col-span-2" : ""
                }`}
              >
                {/* 顶部图片区域 */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes={
                      item.size === "large"
                        ? "(max-width: 768px) 100vw, 66vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                    className="object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#dff0ea] via-[#dff0ea]/40 to-transparent" />
                </div>

                {/* 底部信息区 */}
                <div className="p-5">
                  {/* 标题行：图标 + 标题 */}
                  <div className="mb-2 flex items-center gap-2.5">
                    <item.icon
                      weight="duotone"
                      size={18}
                      className="text-emerald-600 shrink-0"
                    />
                    <h3 className="text-base font-semibold text-slate-800">{item.label}</h3>
                  </div>

                  {/* 描述 */}
                  <p className="mb-3 text-sm leading-relaxed text-[#557090]">{item.desc}</p>

                  {/* 技术指标 tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.specs.map((spec) => (
                      <span
                        key={spec}
                        className="font-mono text-[10px] border border-[#dde8ef] bg-white px-2 py-0.5 text-[#059669] uppercase tracking-wider"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 专业设备配置 — 水平时间轴式 ====== */}
      <section className="border-y border-[#dde8ef] py-16 md:py-24 bg-[#eaf3ef]/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* 区域标题 */}
          <div className="mb-12">
            <span className="mb-3 block font-mono text-xs tracking-widest text-[#059669] uppercase">
              Equipment Configuration
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              专业<span className="text-emerald-400">设备配置</span>
            </h2>
            <div className="mt-3 h-px w-16 bg-emerald-500/30" />
          </div>

          {/* 设备列表：每行一个设备节点 */}
          <div className="space-y-4">
            {EQUIPMENT.map((eq, idx) => (
              <div
                key={eq.name}
                className="group grid gap-5 border border-[#dde8ef] bg-white p-5 transition-colors hover:border-emerald-500/20 md:grid-cols-[1fr_120px_1fr] md:items-center md:gap-8 md:p-6"
              >
                {/* 左侧：设备名称 + 序号 */}
                <div className="flex items-start gap-3">
                  <span className="font-mono text-lg font-bold text-[#94a3b8]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-slate-800 group-hover:text-emerald-400/90 transition-colors">
                      {eq.name}
                    </h3>
                    <p className="text-xs text-[#94a3b8]">{eq.application}</p>
                  </div>
                </div>

                {/* 中间：小图 */}
                <div className="relative aspect-square overflow-hidden border border-[#dde8ef] bg-white">
                  <Image
                    src={eq.src}
                    alt={eq.name}
                    fill
                    sizes="120px"
                    className="object-cover opacity-85"
                  />
                </div>

                {/* 右侧：规格参数 */}
                <div className="flex flex-wrap gap-2">
                  {eq.specs.map((spec) => (
                    <span
                      key={spec}
                      className="font-mono text-xs border border-emerald-500/12 bg-white px-2.5 py-1 text-[#059669]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 技术精度指标 — 仪表盘风格 ====== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* 区域标题 */}
          <div className="mb-12 text-center">
            <span className="mb-3 block font-mono text-xs tracking-widest text-[#059669] uppercase">
              Accuracy Specifications
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              技术<span className="text-emerald-400">精度指标</span>
            </h2>
            <div className="mx-auto mt-3 h-px w-16 bg-emerald-500/30" />
          </div>

          {/* 6个指标横向排列 */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {ACCURACY_SPECS.map((spec) => (
              <div
                key={spec.label}
                className="group border border-[#dde8ef] bg-white p-5 text-center transition-colors hover:border-emerald-500/20"
              >
                {/* 大号 monospace 数值 */}
                <div className="mb-1 font-mono text-2xl font-bold text-emerald-400 sm:text-3xl">
                  {spec.value}
                  <span className="ml-0.5 text-sm font-normal text-[#10b981]">
                    {spec.unit}
                  </span>
                </div>

                {/* 参数名 */}
                <p className="mb-3 text-xs text-slate-400">{spec.label}</p>

                {/* 参考刻度线 */}
                <div className="relative h-1 w-full overflow-hidden bg-[#ecfdf5]">
                  <div
                    className="absolute left-0 top-0 h-full bg-emerald-500/50 transition-all group-hover:bg-emerald-400/70"
                    style={{
                      width: `${Math.min(
                        (parseFloat(spec.value.replace(/[^\d.]/g, "")) / spec.max) * 100,
                        95
                      )}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* 支持输出格式 */}
          <div className="mt-10 border border-[#dde8ef] bg-white p-6">
            <div className="mb-3 flex items-center gap-2">
              <FileArrowDown weight="duotone" size={16} className="text-[#059669]" />
              <span className="font-mono text-xs text-[#94a3b8] uppercase tracking-wider">
                Supported Output Formats
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "OSGB",
                "OBJ",
                "FBX",
                "LAS",
                "DXF",
                "DOM",
                "DSM",
              ].map((fmt) => (
                <span
                  key={fmt}
                  className="font-mono text-sm border border-emerald-500/15 bg-[#ecfdf5] px-3 py-1.5 text-emerald-700"
                >
                  {fmt}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== 底部 CTA — 技术风格 ====== */}
      <section className="relative overflow-hidden border-t border-[#dde8ef] py-20 md:py-28">
        {/* 背景光晕 */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(16,185,129,0.06), transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          {/* 图标 */}
          <AirplaneTilt
            weight="duotone"
            size={36}
            className="mx-auto mb-5 text-[#059669]"
          />

          {/* 标题 */}
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            获取定制化<span className="text-emerald-400">航测方案</span>
          </h2>

          {/* 副文本 */}
          <p className="mb-8 text-sm leading-relaxed text-[#557090] sm:text-base">
            我们的技术团队将在 24 小时内为您提供专业的可行性分析与最优技术路线建议，
            包含航高设计、设备选型、精度预估及成本核算。
          </p>

          {/* CTA 按钮（直角/小圆角，非 pill） */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 border border-emerald-500/30 bg-emerald-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-emerald-400 hover:bg-emerald-500"
            style={{ borderRadius: "2px" }}
          >
            免费咨询测绘方案
            <ArrowRight weight="bold" size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
