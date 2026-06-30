import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Cube,
  AirplaneTilt,
  Camera,
  Circuitry,
  BatteryCharging,
  PlugsConnected,
  Wrench,
  ArrowRight,
  Storefront,
  ShieldCheck,
  Headset,
  Package,
  CreditCard,
  Truck,
} from "@phosphor-icons/react/dist/ssr";
import Breadcrumb from "@/components/layout/breadcrumb";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { IMAGES } from "@/lib/images";

/* ========== SEO元数据 ========== */
export const metadata: Metadata = {
  title: "无人机整机销售 — 专业级无人机设备及配件销售",
  description:
    "极翼科技专业级无人机设备及配件销售，涵盖DJI大疆及其他专业品牌。提供整机、镜头、云台、图传、电池、配件一站式采购与技术支持。",
  keywords: ["无人机销售", "DJI代理", "无人机配件", "重庆无人机店", "无人机购买"],
};

/* ========== 热销产品数据（电商产品卡风格） ========== */
const HOT_PRODUCTS = [
  {
    name: "DJI Mavic 3 Pro",
    feature: "哈苏三摄旗舰航拍机，4/3 CMOS哈苏相机",
    price: "咨询报价",
    image: IMAGES.djiMavic,
    tag: "热销",
  },
  {
    name: "DJI Inspire 3",
    feature: "电影级专业创作平台，全画幅8K视频",
    price: "咨询报价",
    image: IMAGES.djiInspire,
    tag: "旗舰",
  },
  {
    name: "DJI Matrice 350 RTK",
    feature: "行业应用旗舰平台，多负载模块化设计",
    price: "咨询报价",
    image: IMAGES.matrice350,
    tag: "行业级",
  },
];

/* ========== 配件类别数据（小卡片网格） ========== */
const ACCESSORIES = [
  { icon: Camera, label: "镜头与云台", desc: "禅思系列 / 可换镜头" },
  { icon: PlugsConnected, label: "图传系统", desc: "O3 Pro / O4 图传" },
  { icon: BatteryCharging, label: "电池与充电", desc: "智能电池 / 充电管家" },
  { icon: Wrench, label: "维修配件", desc: "螺旋桨 / 遥控器 / 零件" },
  { icon: Package, label: "收纳装备", desc: "背包 / 安全箱 / 支架" },
  { icon: Circuitry, label: "扩展模块", desc: "RTK / 负载接口 / 开发套件" },
];

/* ========== 品牌优势数据（简洁的图标+标题+一句话） ========== */
const ADVANTAGES = [
  { icon: ShieldCheck, title: "正品保障", desc: "官方授权渠道，原厂正品行货全国联保" },
  { icon: Headset, title: "专业售后", desc: "专业技术支持团队，快速响应售后需求" },
  { icon: AirplaneTilt, title: "技术培训", desc: "免费操作培训课程，助您快速上手" },
  { icon: CreditCard, title: "以旧换新", desc: "旧设备折抵购新机，降低升级成本" },
];

/* ========== 购买流程数据（5步箭头连接） ========== */
const PURCHASE_FLOW = [
  { step: 1, title: "咨询需求", icon: Headset },
  { step: 2, title: "方案推荐", icon: AirplaneTilt },
  { step: 3, title: "试用体验", icon: Cube },
  { step: 4, title: "正式采购", icon: Package },
  { step: 5, title: "售后支持", icon: ShieldCheck },
];

/* ========== 页面组件（服务端组件）========== */
export default function SalesPage() {
  return (
    <div className="flex flex-col" style={{ backgroundColor: "#f5f5f4" }}>
      {/* ====== Hero — 中性灰-暖棕调遮罩（商务感） ====== */}
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden lg:min-h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.equipmentHero}
            alt="无人机整机销售"
            fill
            className="object-cover"
            priority
          />
          {/* 中性灰-暖棕调遮罩 */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to bottom, rgba(28,22,18,0.90) 0%, rgba(20,16,14,0.95) 100%),
                linear-gradient(to right, rgba(120,80,50,0.12) 0%, transparent 45%, rgba(100,70,45,0.08) 100%)
              `,
            }}
          />
          {/* 暖棕光晕 */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at 35% 45%, rgba(180,130,80,0.10) 0%, transparent 55%),
                radial-gradient(ellipse at 65% 55%, rgba(150,105,65,0.08) 0%, transparent 50%)
              `,
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Cube weight="duotone" size={56} className="mx-auto mb-5" style={{ color: "#b8956a" }} />

          {/* Badge 标签 */}
          <span
            className="mb-4 inline-block rounded-md px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
            style={{ backgroundColor: "rgba(184,149,106,0.12)", color: "#b8956a" }}
          >
            DRONE EQUIPMENT SALES
          </span>

          {/* 超大标题 */}
          <h1 className="mb-4 font-heading font-black tracking-tight text-slate-800 text-5xl sm:text-6xl lg:text-7xl">
            无人机<span style={{ color: "#b8956a" }}>整机销售</span>
          </h1>
          <p className="text-lg" style={{ color: "rgba(71,85,105,0.65)" }}>
            Professional Drone Equipment & Accessories
          </p>

          {/* 特性标签 */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["DJI官方授权", "正品行货联保", "全套配件齐全", "本地技术支持"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-4 py-1.5 text-sm font-medium"
                style={{
                  borderColor: "rgba(184,149,106,0.25)",
                  backgroundColor: "rgba(184,149,106,0.08)",
                  color: "rgba(184,149,106,0.85)",
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
            { label: "整机销售" },
          ]}
        />
      </section>

      {/* ====== 概述区 — 商务风格介绍 ====== */}
      <section className="section-container pb-16 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span
              className="mb-4 inline-block rounded-md bg-amber-50 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[#b8956a]"
            >
              ABOUT SALES
            </span>
            <h2 className="mb-6 font-heading font-bold text-slate-800 text-3xl sm:text-4xl">
              专业级无人机设备及配件销售
            </h2>

            <div className="space-y-5 text-base leading-relaxed text-[#334155]">
              <p>
                作为深耕无人机行业多年的专业服务商，极翼科技不仅提供航拍作业服务，
                同时也是专业的无人机设备及配件供应商。
                我们与大疆(DJI)等知名品牌保持紧密合作，
                为客户提供从入门级消费产品到行业级解决方案的全系列产品。
              </p>
              <p>
                无论您是刚入门的航拍爱好者，还是需要组建专业团队的企业用户，
                我们都能根据您的具体需求和预算，
                推荐最合适的设备组合方案。
              </p>
              <p>
                所有产品均为官方渠道正品行货，享受厂家全国联保。
                同时我们提供设备调试、操作培训和售后技术支持，
                让您买得放心、用得安心。
              </p>
            </div>

            {/* 购买保障标签 */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { icon: ShieldCheck, text: "原厂正品保证" },
                { icon: CreditCard, text: "灵活付款方式" },
                { icon: Package, text: "完整开箱验货" },
                { icon: Truck, text: "快速物流配送" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2.5 rounded-xl border border-[#dde8ef] bg-white px-4 py-3"
                >
                  <item.icon size={20} style={{ color: "#b8956a" }} />
                  <span className="text-sm font-medium text-slate-800">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：商务风格大图 + 品牌信息卡 */}
          <div className="relative overflow-hidden rounded-2xl lg:min-h-[450px]">
            <Image
              src={IMAGES.droneStore}
              alt="无人机设备展示"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(to bottom, rgba(20,16,14,0.15) 0%, rgba(20,16,14,0.75) 100%)",
              }}
            />

            {/* 品牌覆盖信息卡 */}
            <div
              className="absolute bottom-4 left-4 right-4 rounded-xl border border-[#dde8ef] bg-white/90 backdrop-blur-md p-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-50"
                >
                  <Storefront size={22} style={{ color: "#b8956a" }} />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#557090]">合作品牌</p>
                  <p className="text-sm font-semibold text-slate-800">DJI 大疆 / Autel 道通 / Insta360 / PGYTECH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 产品目录区 — 电商产品卡风格（大图aspect-square + 产品名 + 卖点 + 价格区间 + 按钮） ====== */}
      <section
        className="border-t border-[#dde8ef] py-20 md:py-28"
      >
        <div className="section-container">
          <div className="mb-12 text-center">
            <span
              className="mb-4 inline-block rounded-md bg-amber-50 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[#b8956a]"
            >
              HOT PRODUCTS
            </span>
            <h2 className="mt-4 font-heading font-bold text-slate-800 text-3xl sm:text-4xl">
              热销设备<span style={{ color: "#b8956a" }}>推荐</span>
            </h2>
          </div>

          {/* 3个主要产品横排 — 电商产品卡风格 */}
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            {HOT_PRODUCTS.map((product) => (
              <div
                key={product.name}
                className="group relative overflow-hidden rounded-2xl border border-[#dde8ef] bg-white shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl hover:border-stone-500/25"
              >
                {/* 标签角标 */}
                <div
                  className="absolute top-3 left-3 z-10 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: product.tag === "热销" ? "#dc2626" : product.tag === "旗舰" ? "#b8956a" : "#64748b",
                    color: "#fff",
                  }}
                >
                  {product.tag}
                </div>

                {/* 大图（aspect-square） */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to bottom, transparent 60%, rgba(20,16,14,0.40) 100%)",
                    }}
                  />
                </div>

                {/* 产品信息 */}
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-bold text-slate-800 group-hover:underline decoration-offset-4" style={{ textDecorationColor: "#b8956a" }}>
                    {product.name}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-[#557090]">{product.feature}</p>

                  {/* 价格区间 + 按钮 */}
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] text-[#94a3b8]">价格区间</p>
                      <p className="text-base font-bold" style={{ color: "#b8956a" }}>{product.price}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="shrink-0 rounded-lg border px-4 py-2.5 text-xs font-semibold transition-all hover:border-brown-500/50"
                      style={{
                        borderColor: "rgba(184,149,106,0.30)",
                        color: "#b8956a",
                      }}
                    >
                      查看详情 →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 配件/服务区 — 小卡片网格展示配件种类 ====== */}
      <section
        className="border-t py-20 md:py-28"
        style={{ borderColor: "rgba(203,213,225,0.6)", background: "linear-gradient(180deg, rgba(184,149,106,0.02) 0%, transparent 100%)" }}
      >
        <div className="section-container">
          <div className="mb-12 text-center">
            <span
              className="mb-4 inline-block rounded-md bg-amber-50 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[#b8956a]"
            >
              ACCESSORIES & SERVICES
            </span>
            <h2 className="mt-4 font-heading font-bold text-slate-800 text-3xl sm:text-4xl">
              配件与<span style={{ color: "#b8956a" }}>服务</span>
            </h2>
          </div>

          {/* 小卡片网格 */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto">
            {ACCESSORIES.map((item) => (
              <div
                key={item.label}
                className="group flex items-start gap-4 rounded-xl border border-[#dde8ef] bg-white shadow-sm p-5 transition-all duration-300 hover:-translate-y-1 hover:border-stone-500/20 hover:bg-white shadow-sm"
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-50 transition-transform duration-300 group-hover:scale-110"
                >
                  <item.icon weight="duotone" size={22} style={{ color: "#b8956a" }} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800">{item.label}</h3>
                  <p className="mt-0.5 text-xs text-[#557090]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 品牌优势区 — 4个优势点（图标+标题+一句话） ====== */}
      <section
        className="border-t border-[#dde8ef] py-20 md:py-28"
      >
        <div className="section-container">
          <div className="mb-12 text-center">
            <span
              className="mb-4 inline-block rounded-md bg-amber-50 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[#b8956a]"
            >
              WHY CHOOSE US
            </span>
            <h2 className="mt-4 font-heading font-bold text-slate-800 text-3xl sm:text-4xl">
              品牌<span style={{ color: "#b8956a" }}>优势</span>
            </h2>
          </div>

          {/* 4个优势点 */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {ADVANTAGES.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-[#dde8ef] bg-white shadow-sm p-6 text-center transition-all duration-400 hover:-translate-y-1.5 hover:border-stone-500/20 hover:bg-white shadow-sm"
              >
                <div
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 transition-transform duration-300 group-hover:scale-110"
                >
                  <item.icon
                    weight="duotone"
                    size={28}
                    className="transition-transform duration-300 group-hover:scale-110"
                    style={{ color: "#b8956a" }}
                  />
                </div>
                <h3 className="mb-2 text-base font-bold text-slate-800">{item.title}</h3>
                <p className="text-xs leading-relaxed text-[#557090]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 购买流程 — 5步箭头连接 ====== */}
      <section
        className="border-t py-20 md:py-28"
        style={{ borderColor: "rgba(203,213,225,0.6)", background: "linear-gradient(180deg, rgba(184,149,106,0.02) 0%, transparent 100%)" }}
      >
        <div className="section-container">
          <div className="mb-12 text-center">
            <span
              className="mb-4 inline-block rounded-md bg-amber-50 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[#b8956a]"
            >
              PURCHASE FLOW
            </span>
            <h2 className="mt-4 font-heading font-bold text-slate-800 text-3xl sm:text-4xl">
              购买<span style={{ color: "#b8956a" }}>流程</span>
            </h2>
          </div>

          {/* 5步横向排列 — 简洁的箭头连接 */}
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-0">
              {PURCHASE_FLOW.map((item, index) => (
                <div key={item.step} className="flex flex-1 flex-col items-center relative">
                  {/* 圆形步骤节点 */}
                  <div
                    className="relative mb-3 flex h-16 w-16 items-center justify-center rounded-full border-2 border-amber-200 bg-amber-50 transition-all duration-300 group-hover:scale-110"
                  >
                    <span className="text-lg font-bold tabular-nums" style={{ color: "#b8956a" }}>{item.step}</span>
                  </div>

                  {/* 图标 */}
                  <item.icon weight="duotone" size={22} className="mb-2" style={{ color: "#b8956a" }} />

                  {/* 文字 */}
                  <h3 className="text-sm font-bold text-slate-800">{item.title}</h3>

                  {/* 连接箭头（非最后一项显示） */}
                  {index < PURCHASE_FLOW.length - 1 && (
                    <div className="hidden absolute top-7 left-[calc(50%+36px)] w-[calc(100%-72px)] md:block">
                      <ArrowRight
                        size={16}
                        className="mx-auto"
                        style={{ color: "rgba(184,149,106,0.25)" }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== 底部 CTA — 棕金色按钮（浅色背景） ====== */}
      <section className="relative overflow-hidden bg-amber-50 py-20 md:py-28">
        <div className="relative z-10 section-container text-center">
          <AirplaneTilt weight="duotone" size={40} className="mx-auto mb-5" style={{ color: "#b8956a" }} />
          <h3 className="mb-4 font-heading font-bold text-slate-800 text-3xl sm:text-4xl">
            获取<span style={{ color: "#b8956a" }}>产品目录</span>
          </h3>
          <p className="mx-auto mb-8 max-w-lg text-base text-[#557090]">
            告知您的需求与预算，我们的工程师将推荐最优配置
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full px-12 py-5 text-base font-bold shadow-2xl transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(184,149,106,0.25)]"
            style={{
              background: "linear-gradient(135deg, #8c643c, #b8956a)",
              color: "#fff",
            }}
          >
            获取产品目录
            <ArrowRight weight="bold" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
