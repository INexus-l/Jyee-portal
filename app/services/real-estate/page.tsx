import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Camera,
} from "@phosphor-icons/react/dist/ssr";
import Breadcrumb from "@/components/layout/breadcrumb";
import { IMAGES } from "@/lib/images";

/* ========== SEO元数据 ========== */
export const metadata: Metadata = {
  title: "房地产/建筑航拍 — 专业楼盘建筑无人机航拍服务",
  description:
    "极翼科技房地产航拍解决方案，从楼盘全景到周边配套，从建筑细节到施工进度。助力房产营销、工程管理与品牌展示，重庆全域服务。",
  keywords: ["房地产航拍", "楼盘航拍", "建筑摄影", "房地产宣传片", "施工进度航拍"],
};

/* ========== 适用场景数据（3列中等卡片）========== */
const SCENARIOS = [
  {
    label: "楼盘开盘宣传片",
    desc: "全方位展示楼盘区位与环境优势",
    src: IMAGES.luxuryBuilding,
  },
  {
    label: "施工进度记录",
    desc: "阶段性影像留存与进度汇报",
    src: IMAGES.constructionSite,
  },
  {
    label: "周边环境展示",
    desc: "交通、商业、教育配套一览无余",
    src: IMAGES.realEstateHero,
  },
  {
    label: "建筑外观立面",
    desc: "高精度展现建筑设计与细节",
    src: IMAGES.buildingExterior,
  },
  {
    label: "园林景观航拍",
    desc: "园区绿化与景观设计呈现",
    src: IMAGES.luxuryBuilding,
  },
];

/* ========== 服务流程数据（水平连接线+节点）========== */
const PROCESS = [
  { step: 1, title: "项目了解", desc: "深入了解项目定位与营销诉求" },
  { step: 2, title: "航拍规划", desc: "制定分阶段拍摄计划与镜头脚本" },
  { step: 3, title: "分阶段拍摄", desc: "按节点执行拍摄，覆盖不同建设阶段" },
  { step: 4, title: "素材整理", desc: "分类归档原始素材，建立影像数据库" },
  { step: 5, title: "后期调色", desc: "专业色彩校正与视觉增强处理" },
  { step: 6, title: "交付成片", desc: "多格式输出，适配各类营销渠道" },
];

/* ========== 推荐设备（纵向列表）========== */
const EQUIPMENT = [
  {
    name: "DJI Mavic 3 Enterprise",
    feature: "高精度测绘级相机，支持RTK定位",
    src: IMAGES.matrice350,
  },
  {
    name: "DJI Inspire 3",
    feature: "全画幅禅思X9，电影级画质表现",
    src: IMAGES.inspire3,
  },
  {
    name: "DJI Matrice 350 RTK",
    feature: "行业旗舰平台，多负载支持",
    src: IMAGES.matrice350,
  },
];

/* ========== 案例（2x2网格+角标）========== */
const CASES = [
  { title: "龙湖·云河颂·全景宣传片", category: "开盘宣传", src: IMAGES.luxuryBuilding },
  { title: "万科·城市花园·施工全记录", category: "工程记录", src: IMAGES.constructionSite },
  { title: "融创·壹号院·建筑立面细节", category: "建筑摄影", src: IMAGES.buildingExterior },
  { title: "保利·中央公园·园林航拍", category: "景观呈现", src: IMAGES.luxuryBuilding },
];

/* ========== 页面组件（服务端组件）========== */
export default function RealEstatePage() {
  return (
    <div style={{ backgroundColor: "#151c2c" }} className="flex flex-col">
      {/* ====== Hero - 冷青调遮罩 ====== */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.realEstateHero}
            alt="房地产航拍"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151c2c] via-slate-950/90 to-cyan-950/60" />
        </div>

        <div className="relative z-10 w-full px-6 pb-16 pt-32 sm:px-12 md:px-20 lg:px-28 xl:px-36">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300/60">
              Real Estate & Architecture Aerial
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              房地产/建筑航拍
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-gray-300/80 sm:text-lg">
              从楼盘全景到建筑细节 · 助力房产营销与品牌展示
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
            { label: "房地产/建筑航拍" },
          ]}
        />
      </section>

      {/* ====== 概述区 - 左文右图（图片更大min-h-[500px]，底部纯文字标注）===== */}
      <section className="py-16 md:py-24">
        <div className="px-6 sm:px-12 lg:px-28 xl:px-36">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* 左侧文字 */}
            <div>
              <h2 className="mb-6 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                专业的房地产<br />航拍解决方案
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-gray-400">
                <p>
                  在房地产行业竞争日益激烈的今天，优质的视觉素材已成为项目营销的核心竞争力。
                  极翼科技凭借多年房地产航拍经验，为开发商、代理商和建筑设计机构提供专业的航拍解决方案。
                </p>
                <p>
                  从楼盘开盘宣传片的震撼开场，到施工进度的全周期记录；
                  从周边交通、教育、商业配套的环境展示，到建筑立面细节的高精度呈现；
                  从园林景观的整体布局到社区氛围的生动刻画 — 
                  我们的航拍服务贯穿房地产开发的全生命周期。
                </p>
                <p>
                  我们配备RTK高精度定位系统，可生成正射影像、三维模型等专业数据产品，
                  为规划设计、工程管理提供精准的数据支撑。
                </p>
              </div>
            </div>

            {/* 右侧图片 - 更大 */}
            <div className="relative min-h-[500px] overflow-hidden rounded-lg">
              <Image
                src={IMAGES.buildingExterior}
                alt="高端楼盘航拍"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* 底部纯文字标注 */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-6 py-3 backdrop-blur-sm">
                <p className="text-xs text-white/70">高端住宅建筑立面 · 重庆渝北区</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 场景区 - 3列中等卡片（错位效果）===== */}
      <section className="border-t border-white/[0.08] py-16 md:py-24">
        <div className="mb-12 px-6 sm:px-12 lg:px-28 xl:px-36">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            典型应用场景
          </h2>
        </div>

        <div className="px-6 sm:px-12 lg:px-28 xl:px-36">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SCENARIOS.map((item, idx) => (
              <div
                key={item.label}
                className={`group relative h-[280px] overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
                  idx % 3 !== 0 ? "mt-2 sm:mt-2 lg:mt-2" : ""
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 pt-10">
                  <h3 className="mb-1 text-base font-semibold text-white sm:text-lg line-clamp-2">{item.label}</h3>
                  <p className="text-xs text-white/70 line-clamp-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 流程区 - 水平连接线+节点（简化版）===== */}
      <section className="border-t border-white/[0.08] py-16 md:py-20">
        <div className="px-6 sm:px-12 lg:px-28 xl:px-36">
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              房地产航拍服务流程
            </h2>
          </div>

          {/* 水平连接线 + 节点 */}
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="relative min-w-max px-8">
              {/* 主连接线 */}
              <div className="absolute top-6 left-8 right-8 h-px bg-white/10" />

              <div className="flex justify-between gap-8">
                {PROCESS.map((item) => (
                  <div key={item.step} className="flex flex-col items-center gap-4">
                    {/* 节点圆圈 */}
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm font-medium text-cyan-300">
                      {item.step}
                    </div>
                    {/* 标题与描述 */}
                    <div className="max-w-[120px] text-center">
                      <h3 className="mb-1 text-sm font-semibold text-white whitespace-nowrap">{item.title}</h3>
                      <p className="text-[11px] leading-relaxed text-gray-500 line-clamp-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 设备区 - 纵向列表（设备名+特性+小缩略图）===== */}
      <section className="border-t border-white/[0.08] py-16 md:py-20">
        <div className="mb-12 px-6 sm:px-12 lg:px-28 xl:px-36">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            推荐使用设备
          </h2>
        </div>

        <div className="px-6 sm:px-12 lg:px-28 xl:px-36">
          <div className="divide-y divide-white/[0.06]">
            {EQUIPMENT.map((eq) => (
              <div key={eq.name} className="group flex items-center gap-6 py-6 transition-colors hover:bg-white/[0.02]">
                {/* 小缩略图 */}
                <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded">
                  <Image
                    src={eq.src}
                    alt={eq.name}
                    fill
                    sizes="96px"
                    className="object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-90"
                  />
                </div>

                {/* 设备信息 */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <Camera weight="duotone" size={16} className="text-cyan-400" />
                    <h3 className="text-base font-semibold text-white">{eq.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500">{eq.feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 案例 - 2x2网格（类别角标+标题覆盖）===== */}
      <section className="border-t border-white/[0.08] py-16 md:py-24">
        <div className="mb-10 flex items-end justify-between px-6 sm:px-12 lg:px-28 xl:px-36">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              项目案例
            </h2>
          </div>
          <Link
            href="/portfolio?category=real-estate"
            className="hidden items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-[#00b4d8] sm:flex"
          >
            查看更多案例
            <ArrowRight size={14} weight="bold" />
          </Link>
        </div>

        <div className="px-6 sm:px-12 lg:px-28 xl:px-36">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {CASES.map((caseItem) => (
              <Link
                key={caseItem.title}
                href="/portfolio?category=real-estate"
                className="group relative aspect-[4/3] overflow-hidden transition-transform duration-500 hover:-translate-y-1"
              >
                <Image
                  src={caseItem.src}
                  alt={caseItem.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                {/* 类别角标 */}
                <span className="absolute left-3 top-3 rounded bg-cyan-500/15 px-2 py-1 text-[10px] font-medium text-cyan-300 backdrop-blur-sm">
                  {caseItem.category}
                </span>
                {/* 标题覆盖 */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-sm font-medium text-white sm:text-base line-clamp-2">{caseItem.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 简洁的文字链接CTA ====== */}
      <section className="border-t border-white/[0.08] py-16 text-center md:py-20">
        <p className="text-sm text-gray-500">
          让每一帧画面都成为营销利器。{" "}
          <Link
            href="/contact"
            className="font-medium text-gray-400 underline decoration-white/10 underline-offset-4 transition-colors hover:text-cyan-400 hover:decoration-cyan-400"
          >
            获取定制化航拍方案与报价
          </Link>
        </p>
      </section>
    </div>
  );
}
