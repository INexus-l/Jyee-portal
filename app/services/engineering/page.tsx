import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowsCounterClockwise,
} from "@phosphor-icons/react/dist/ssr";
import Breadcrumb from "@/components/layout/breadcrumb";
import { IMAGES } from "@/lib/images";

/* ========== SEO元数据 ========== */
export const metadata: Metadata = {
  title: "工程/进度记录航拍 — 工程项目全周期无人机影像留存",
  description:
    "极翼科技工程进度记录航拍服务，从开工到竣工的全周期影像留存，助力工程管理与成果展示。适用于建筑施工、道路桥梁、水利水电等项目。",
  keywords: ["工程航拍", "施工进度记录", "工程验收航拍", "建筑监测", "工程影像存档"],
};

/* ========== 适用场景（前后对比卡片）========== */
const SCENARIOS = [
  {
    label: "建筑施工进度",
    before: "开工前场地原貌",
    after: "主体结构封顶",
    srcBefore: IMAGES.constructionSite,
    srcAfter: IMAGES.engineeringProgress,
  },
  {
    label: "道路桥梁工程",
    before: "原始地形地貌",
    after: "全线贯通通车",
    srcBefore: IMAGES.bridgeBuild,
    srcAfter: IMAGES.tourismCoastal,
  },
];

/* ========== 服务流程（甘特图式进度条）========== */
const PROCESS = [
  { step: 1, title: "工程了解", desc: "掌握项目概况、工期节点与管理要求", progress: 100 },
  { step: 2, title: "周期规划", desc: "制定阶段性航拍计划与固定点位方案", progress: 85 },
  { step: 3, title: "定期航拍", desc: "按周期执行标准化拍摄任务", progress: 70 },
  { step: 4, title: "对比分析", desc: "多期影像对比，生成进度报告", progress: 55 },
  { step: 5, title: "档案整理", desc: "分类归档原始素材与成果文件", progress: 40 },
  { step: 6, title: "成果汇报", desc: "可视化汇报材料与验收资料交付", progress: 25 },
];

/* ========== 推荐设备（技术参数对比表）========== */
const EQUIPMENT = [
  {
    name: "DJI Matrice 350 RTK",
    specs: ["RTK厘米级定位", "多负载支持", "IP55防护等级"],
    feature: "适合精密测量与长期监测",
    src: IMAGES.matrice350,
  },
  {
    name: "DJI Mavic 3 Enterprise",
    specs: ["机械快门正射影像", "便携高效", "热成像可选"],
    feature: "灵活机动的日常巡检",
    src: IMAGES.mavic3Pro,
  },
  {
    name: "DJI P1 全画幅相机",
    specs: ["4500万像素", "测绘级成像精度", "智能摆动拍摄"],
    feature: "高精度正射影像采集",
    src: IMAGES.inspire3,
  },
];

/* ========== 页面组件（服务端组件）========== */
export default function EngineeringPage() {
  return (
    <div style={{ backgroundColor: "#151c2c" }} className="flex flex-col">
      {/* ====== Hero - 石板灰调遮罩 ====== */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.constructionSite}
            alt="工程记录航拍"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151c2c] via-slate-950/90 to-stone-800/60" />
        </div>

        <div className="relative z-10 w-full px-6 pb-16 pt-32 sm:px-12 md:px-20 lg:px-28 xl:px-36">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-slate-800/40">
              Engineering Progress Documentation
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-slate-800 sm:text-5xl lg:text-6xl">
              工程/<br />进度记录航拍
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              从第1天到第365天 · 全周期影像留存
            </p>
          </div>
        </div>
      </section>

      {/* ====== 面包屑导航 ====== */}
      <section className="px-6 py-4 sm:px-12 lg:px-28 xl:px-36">
        <Breadcrumb
          items={[
            { label: "首页", href: "/" },
            { label: "航拍服务", href: "/services" },
            { label: "工程/进度记录航拍" },
          ]}
        />
      </section>

      {/* ====== 概述区 - 时间轴引入概念 ====== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 sm:px-12 lg:px-28 xl:px-36">
          {/* 时间轴视觉 */}
          <div className="mb-10 flex items-center gap-4 overflow-hidden">
            <span className="shrink-0 text-sm font-medium text-slate-800">Day 1</span>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-300 via-slate-200 to-transparent" />
            <span className="shrink-0 text-sm font-medium text-[#00b4d8]">Day 365</span>
          </div>

          <h2 className="mb-6 text-2xl font-bold leading-tight tracking-tight text-slate-800 sm:text-3xl lg:text-4xl">
            工程项目全周期<br />影像留存与管理
          </h2>
          
          <div className="space-y-4 text-sm leading-relaxed text-slate-500">
            <p>
              工程项目的建设过程是漫长而复杂的，从破土动工到竣工验收，每一个阶段都值得被完整记录。
              极翼科技工程进度记录航拍服务，为工程项目提供从开工到竣工的全周期影像留存解决方案。
            </p>
            <p>
              我们采用RTK高精度定位技术，确保每次拍摄的位置和角度完全一致，
              实现多期影像的精准对比分析。无论是建筑施工的逐层推进、道路桥梁的延伸贯通，
              还是水利水电设施的逐步成型，都能通过直观的影像变化展现工程进展。
            </p>
            <p>
              生成的影像资料可用于工程管理汇报、监理检查、验收归档以及后续的宣传展示等多种用途，
              是工程项目不可或缺的数字化档案资产。
            </p>
          </div>
        </div>
      </section>

      {/* ====== 场景区 - 前后对比卡片 ====== */}
      <section className="border-t border-slate-200 py-16 md:py-20">
        <div className="mb-10 px-6 sm:px-12 lg:px-28 xl:px-36">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl lg:text-4xl">
            典型应用场景
          </h2>
          <p className="mt-2 text-sm text-slate-800/40">前后对比 · 见证蜕变</p>
        </div>

        <div className="space-y-8 px-6 sm:px-12 lg:px-28 xl:px-36">
          {SCENARIOS.map((item) => (
            <div key={item.label}>
              <h3 className="mb-4 text-base font-semibold text-slate-800">{item.label}</h3>
              
              {/* 对比卡片 */}
              <div className="grid grid-cols-2 gap-4">
                {/* Before */}
                <div className="group relative aspect-video overflow-hidden rounded border border-white/[0.06]">
                  <Image
                    src={item.srcBefore}
                    alt={`${item.label} - ${item.before}`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 45vw, 42vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">{item.before}</span>
                    <ArrowsCounterClockwise weight="bold" size={14} className="text-slate-500" />
                  </div>
                </div>

                {/* After */}
                <div className="group relative aspect-video overflow-hidden rounded border border-white/[0.06]">
                  <Image
                    src={item.srcAfter}
                    alt={`${item.label} - ${item.after}`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 45vw, 42vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-xs font-medium text-[#00b4d8]/80">{item.after}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== 流程区 - 甘特图式进度条可视化 ====== */}
      <section className="border-t border-slate-200 bg-white py-16 md:py-20">
        <div className="mb-10 px-6 sm:px-12 lg:px-28 xl:px-36">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            工程记录航拍服务流程
          </h2>
          <p className="mt-2 text-sm text-slate-800/40">项目进度可视化</p>
        </div>

        <div className="mx-auto max-w-3xl space-y-5 px-6 sm:px-12 lg:px-28 xl:px-36">
          {PROCESS.map((item) => (
            <div key={item.step} className="group">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border border-slate-200 bg-white text-[10px] font-medium text-slate-600">
                    {item.step}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-800">{item.title}</h3>
                </div>
                <span className="text-xs text-slate-300">{item.progress}%</span>
              </div>

              {/* 进度条 */}
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-[#00b4d8] transition-all duration-700 group-hover:bg-[#00b4d8]/80"
                  style={{ width: `${item.progress}%` }}
                />
              </div>

              <p className="mt-2 pl-9 text-xs text-slate-800/45">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====== 设备区 - 技术参数对比表 ====== */}
      <section className="border-t border-slate-200 py-16 md:py-20">
        <div className="mb-10 px-6 sm:px-12 lg:px-28 xl:px-36">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl lg:text-4xl">
            专业设备配置
          </h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-4 px-6 sm:px-12 lg:px-28 xl:px-36">
          {EQUIPMENT.map((eq) => (
            <div key={eq.name} className="grid grid-cols-1 gap-4 border border-white/[0.06] p-5 transition-all duration-300 border border-slate-200 bg-white hover:border-[#b8d0e3] hover:bg-slate-50 sm:grid-cols-[120px_1fr_200px] sm:p-6">
              {/* 设备图 + 名称 */}
              <div className="flex items-start gap-3">
                <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded">
                  <Image
                    src={eq.src}
                    alt={eq.name}
                    fill
                    sizes="80px"
                    className="object-cover opacity-60"
                  />
                </div>
                <h3 className="text-sm font-semibold text-slate-800 leading-snug">{eq.name}</h3>
              </div>

              {/* 技术参数标签 */}
              <div className="flex flex-wrap items-center gap-2">
                {eq.specs.map((spec) => (
                  <span key={spec} className="rounded border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] text-slate-400">
                    {spec}
                  </span>
                ))}
              </div>

              {/* 适用说明 */}
              <div className="hidden text-right sm:block">
                <p className="text-xs leading-relaxed text-slate-800/40">{eq.feature}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== 简洁的文字链接CTA ====== */}
      <section className="border-t border-slate-200 py-16 text-center md:py-20">
        <p className="text-sm text-slate-800/40">
          提供项目基本信息，获取定制化的工程影像管理方案。{" "}
          <Link
            href="/contact"
            className="font-medium text-slate-500 underline decoration-slate-200 underline-offset-4 transition-colors hover:text-[#00b4d8] hover:decoration-[#00b4d8]"
          >
            联系咨询
          </Link>
        </p>
      </section>
    </div>
  );
}
