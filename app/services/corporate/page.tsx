import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Buildings,
  GearSix,
  Megaphone,
  ChartLineUp,
  Presentation,
} from "@phosphor-icons/react/dist/ssr";
import Breadcrumb from "@/components/layout/breadcrumb";
import { IMAGES } from "@/lib/images";

/* ========== SEO元数据 ========== */
export const metadata: Metadata = {
  title: "企业/品牌宣传航拍 — 企业形象片品牌宣传无人机拍摄",
  description:
    "极翼科技企业形象片、品牌宣传航拍服务，用空中视角诠释企业实力与品牌价值。适用于企业总部园区、工厂生产线、IPO路演等场景。",
  keywords: ["企业宣传片", "品牌航拍", "企业形象片", "工厂航拍", "企业年会航拍"],
};

/* ========== 关键数据指标 ========== */
const METRICS = [
  { value: "200+", label: "服务企业" },
  { value: "95%", label: "行业覆盖率" },
  { value: "50+", label: "上市企业客户" },
  { value: "11年", label: "行业深耕" },
];

/* ========== 适用场景（图标+描述列表形式）========== */
const SCENARIOS = [
  { icon: Buildings, label: "企业总部园区", desc: "办公环境与园区风貌的全面展示，展现企业形象与规模实力" },
  { icon: GearSix, label: "工厂生产线", desc: "生产规模与制造实力的震撼呈现，突出工业美学与科技感" },
  { icon: Megaphone, label: "品牌发布会", desc: "新品发布与品牌活动的视觉记录，营造专业氛围" },
  { icon: ChartLineUp, label: "年度总结视频", desc: "企业发展历程与成就的影像回顾，数据可视化呈现" },
  { icon: Presentation, label: "IPO路演材料", desc: "投资路演与招商推介的视觉素材，提升说服力" },
];

/* ========== 服务流程（阶段式展示）========== */
const PROCESS_STAGES = [
  {
    stage: "阶段一",
    title: "前期准备",
    steps: [
      { title: "品牌解读", desc: "深入理解企业文化、定位与传播目标" },
      { title: "创意脚本", desc: "撰写分镜脚本，规划叙事节奏与视觉风格" },
    ],
  },
  {
    stage: "阶段二",
    title: "拍摄执行",
    steps: [
      { title: "拍摄执行", desc: "多机位、多时段精准执行拍摄计划" },
      { title: "素材管理", desc: "现场DIT管理，确保素材安全与质量" },
    ],
  },
  {
    stage: "阶段三",
    title: "后期交付",
    steps: [
      { title: "后期包装", desc: "剪辑调色、特效合成、配乐音效" },
      { title: "多格式交付", desc: "适配官网、社交媒体、展会等多渠道" },
    ],
  },
];

/* ========== 推荐设备（专业规格表）========== */
const EQUIPMENT = [
  {
    name: "DJI Inspire 3",
    specs: ["全画幅8K视频", "CinemaDNG无损格式", "双操控系统"],
    src: IMAGES.inspire3,
  },
  {
    name: "DJI Matrice 350 RTK",
    specs: ["工业级平台", "RTK高精度定位", "长续航大载重"],
    src: IMAGES.matrice350,
  },
  {
    name: "Sony FX3 + 禅思X9",
    specs: ["电影摄影机级成像", "高动态范围", "专业色彩科学"],
    src: IMAGES.filmEquipment,
  },
];

/* ========== 页面组件（服务端组件）========== */
export default function CorporatePage() {
  return (
    <div style={{ backgroundColor: "#eef4f9" }} className="flex flex-col">
      {/* ====== Hero - 靛蓝调遮罩 ====== */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.corporateCampus}
            alt="企业品牌航拍"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151c2c] via-indigo-950/75 to-blue-900/50" />
        </div>

        <div className="relative z-10 w-full px-6 pb-16 pt-32 sm:px-12 md:px-20 lg:px-28 xl:px-36">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/40">
              Corporate &amp; Brand Aerial Production
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              企业/品牌<br />宣传航拍
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
              用空中视角诠释企业实力与品牌价值
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
            { label: "企业/品牌宣传航拍" },
          ]}
        />
      </section>

      {/* ====== 概述区 - 数据驱动（关键数据指标+文字）===== */}
      <section className="py-16 md:py-24">
        <div className="px-6 sm:px-12 lg:px-28 xl:px-36">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* 左侧文字 */}
            <div>
              <h2 className="mb-6 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                用空中视角<br />诠释企业实力
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-white/50">
                <p>
                  在品牌竞争日益激烈的市场环境中，高质量的视觉内容已成为企业对外展示的核心资产。
                  极翼科技企业品牌航拍服务，以专业的空中视角帮助企业在众多竞争对手中脱颖而出，
                  用震撼的画面语言讲述品牌故事。
                </p>
                <p>
                  从总部园区的宏伟全貌到生产线的精密运转，从新品发布会的热烈现场到年度盛典的高高光时刻 &mdash;
                  我们用镜头捕捉企业的每一个精彩瞬间，将其转化为具有感染力的视觉素材。
                </p>
                <p>
                  我们的团队深谙商业影像的语言逻辑，在确保画面美感的同时，
                  注重传递企业的核心价值主张与品牌调性。
                </p>
              </div>
            </div>

            {/* 右侧：关键数据指标 */}
            <div className="space-y-8">
              <h3 className="text-sm font-medium uppercase tracking-wider text-white/35">
                核心数据
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {METRICS.map((metric) => (
                  <div key={metric.label} className="border-l-2 border-[#00b4d8]/40 pl-5">
                    <div className="text-3xl font-bold text-white">{metric.value}</div>
                    <div className="mt-1 text-xs text-white/45">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* 配图 */}
              <div className="relative aspect-video overflow-hidden rounded">
                <Image
                  src={IMAGES.factoryAerial}
                  alt="企业园区航拍"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-70"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 场景区 - 图标+描述列表形式（商务正式）===== */}
      <section className="border-t border-slate-200 py-16 md:py-20">
        <div className="mb-10 px-6 sm:px-12 lg:px-28 xl:px-36">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl lg:text-4xl">
            典型应用场景
          </h2>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-slate-200 px-6 sm:px-12 lg:px-28 xl:px-36">
          {SCENARIOS.map((item) => (
            <div key={item.label} className="group flex gap-6 py-7 transition-colors hover:bg-slate-50">
              {/* 图标 */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-slate-200 bg-white transition-colors group-hover:border-tech-cyan/30">
                <item.icon weight="duotone" size={20} className="text-tech-cyan/60" />
              </div>

              {/* 描述 */}
              <div className="flex-1">
                <h3 className="mb-1 text-base font-semibold text-slate-800">{item.label}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== 流程区 - 阶段式展示 ====== */}
      <section className="border-t border-slate-200 bg-white py-16 md:py-20">
        <div className="mb-10 px-6 sm:px-12 lg:px-28 xl:px-36">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            企业品牌航拍服务流程
          </h2>
        </div>

        <div className="mx-auto max-w-4xl px-6 sm:px-12 lg:px-28 xl:px-36">
          <div className="grid gap-8 md:grid-cols-3">
            {PROCESS_STAGES.map((stage, idx) => (
              <div key={stage.stage} className={`relative ${idx < PROCESS_STAGES.length - 1 ? "border-r border-r-slate-200 md:pr-8" : ""}`}>
                {/* 阶段标题 */}
                <div className="mb-6 flex items-baseline gap-3">
                  <span className="text-xs font-medium uppercase tracking-widest text-[#00b4d8]/60">{stage.stage}</span>
                  <h3 className="text-base font-semibold text-slate-800">{stage.title}</h3>
                </div>

                {/* 步骤列表 */}
                <div className="space-y-5">
                  {stage.steps.map((step) => (
                    <div key={step.title}>
                      <h4 className="mb-1 text-sm font-medium text-slate-800">{step.title}</h4>
                      <p className="text-xs leading-relaxed text-slate-500">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 设备区 - 专业规格表 ====== */}
      <section className="border-t border-slate-200 py-16 md:py-20">
        <div className="mb-10 px-6 sm:px-12 lg:px-28 xl:px-36">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl lg:text-4xl">
            专业设备配置
          </h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-4 px-6 sm:px-12 lg:px-28 xl:px-36">
          {EQUIPMENT.map((eq) => (
            <div key={eq.name} className="group flex items-center gap-6 border border-slate-200 p-6 transition-all duration-300 hover:bg-slate-50 hover:border-tech-cyan/30 sm:p-8">
              {/* 设备图 */}
              <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded">
                <Image
                  src={eq.src}
                  alt={eq.name}
                  fill
                  sizes="96px"
                  className="object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-90"
                />
              </div>

              {/* 设备名 */}
              <div className="w-48 shrink-0">
                <h3 className="text-base font-semibold text-slate-800">{eq.name}</h3>
              </div>

              {/* 规格列表 */}
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {eq.specs.map((spec) => (
                  <span key={spec} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-500">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== 简洁的文字链接CTA ====== */}
      <section className="border-t border-slate-200 py-16 text-center md:py-20">
        <p className="text-sm text-slate-500">
          让我们为您的企业打造一张令人印象深刻的视觉名片。{" "}
          <Link
            href="/contact"
            className="font-medium text-tech-cyan underline decoration-slate-200 underline-offset-4 transition-colors hover:text-[#00b4d8] hover:decoration-[#00b4d8]"
          >
            联系咨询
          </Link>
        </p>
      </section>
    </div>
  );
}
