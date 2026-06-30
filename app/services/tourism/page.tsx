import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  City,
  TreeEvergreen,
  Storefront,
  Mountains,
  MoonStars,
} from "@phosphor-icons/react/dist/ssr";
import Breadcrumb from "@/components/layout/breadcrumb";
import { IMAGES } from "@/lib/images";

/* ========== SEO元数据 ========== */
export const metadata: Metadata = {
  title: "城市/旅游宣传航拍 — 城市形象片旅游景区宣传航拍",
  description:
    "极翼科技城市形象片、旅游景区宣传航拍服务，用上帝视角展现城市魅力与自然风光，打造令人过目难忘的城市名片与旅游推广素材。",
  keywords: ["城市宣传片", "旅游航拍", "城市形象片", "景区航拍", "夜景航拍"],
};

/* ========== 适用场景数据（5个小卡片横向排列）========== */
const SCENARIOS = [
  { icon: City, label: "城市形象宣传片", desc: "展现城市风貌与发展成就", src: IMAGES.tourismCity },
  { icon: TreeEvergreen, label: "旅游景区推广", desc: "自然景观与人文风情融合", src: IMAGES.landmark },
  { icon: Storefront, label: "特色小镇展示", desc: "古镇风貌与特色产业叙事", src: IMAGES.tourismCoastal },
  { icon: Mountains, label: "自然风光纪录", desc: "山川河流的壮美画卷", src: IMAGES.tourismNight },
  { icon: MoonStars, label: "夜景航拍", desc: "璀璨灯火下的城市夜色", src: IMAGES.cbdSkyline },
];

/* ========== 服务流程（编号列表样式）========== */
const PROCESS = [
  { step: 1, title: "创意策划", desc: "深入理解定位，构思视觉叙事主线" },
  { step: 2, title: "踩点选位", desc: "实地勘察最佳拍摄点位与光线条件" },
  { step: 3, title: "最佳时段拍摄", desc: "黄金时刻/蓝调时刻精准把握光影" },
  { step: 4, title: "多角度覆盖", desc: "高空远景+中景过渡+近景特写组合" },
  { step: 5, title: "调色配乐", desc: "电影级调色与原创配乐深度融合" },
  { step: 6, title: "成片交付", desc: "多分辨率输出，适配各传播渠道" },
];

/* ========== 推荐设备（对比表格形式）========== */
const EQUIPMENT = [
  {
    name: "DJI Mavic 3 Pro",
    params: "三摄系统，162mm长焦",
    scene: "远距离取景、大范围航拍",
    src: IMAGES.mavic3Pro,
  },
  {
    name: "Sony A7S III + Zenmuse X7",
    params: "高感光度传感器",
    scene: "夜景拍摄、低光环境",
    src: IMAGES.filmEquipment,
  },
  {
    name: "DJI Inspire 3",
    params: "全画幅8K视频",
    scene: "电影级成像品质要求",
    src: IMAGES.inspire3,
  },
];

/* ========== 页面组件（服务端组件）========== */
export default function TourismPage() {
  return (
    <div style={{ backgroundColor: "#eef4f9" }} className="flex flex-col">
      {/* ====== Hero - 蓝青调遮罩 + 地理位置感排版 ====== */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.tourismCity}
            alt="城市宣传航拍"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151c2c] via-cyan-950/70 to-blue-950/50" />
        </div>

        <div className="relative z-10 w-full px-6 pb-16 pt-32 sm:px-12 md:px-20 lg:px-28 xl:px-36">
          <div className="max-w-3xl">
            {/* 地理位置感排版 */}
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.4em] text-slate-300">
              Chongqing · China
            </p>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/40">
              City & Tourism Promotional Aerial
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              城市/旅游<br />宣传航拍
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
              用上帝视角展现城市魅力与自然风光
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
            { label: "城市/旅游宣传航拍" },
          ]}
        />
      </section>

      {/* ====== 概述区 - 图文穿插（段落间插入小图引用）===== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 sm:px-12 lg:px-28 xl:px-36">
          {/* 第一段文字 */}
          <p className="mb-8 text-base leading-loose text-white/60 first-letter:text-4xl first-letter:font-bold first-letter:text-white first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none sm:text-lg">
            一座城市的灵魂，不仅在于它的街道与建筑，更在于它从空中俯瞰时呈现的独特气质。极翼科技城市与旅游宣传航拍服务，致力于为政府文旅部门、旅游景区运营方、特色小镇开发者打造令人过目难忘的视觉名片。
          </p>

          {/* 小图引用 */}
          <figure className="my-10 overflow-hidden rounded">
            <div className="relative aspect-[21/9]">
              <Image
                src={IMAGES.riverView}
                alt="重庆江景"
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-right text-xs text-white/35">重庆两江交汇处</figcaption>
          </figure>

          {/* 第二段文字 */}
          <p className="mb-8 text-base leading-loose text-white/60 sm:text-lg">
            从清晨第一缕阳光洒向天际线的黄金时刻，到华灯初上的蓝调时刻；从层峦叠嶂的自然奇观，到烟火氤氲的古街老巷；我们用镜头讲述每座城市、每处风景独有的故事。
          </p>

          {/* 第三段文字 */}
          <p className="text-base leading-loose text-white/60 sm:text-lg">
            团队深谙延时摄影、移动延时、日转夜等高级航拍技法，结合电影级调色与原创配乐，让您的城市宣传片达到院线级别的视听品质。
          </p>
        </div>
      </section>

      {/* ====== 场景区 - 5个小卡片横向排列不换行（溢出滚动）===== */}
      <section className="border-t border-[#cce0ed] py-16 md:py-20">
        <div className="mb-10 px-6 sm:px-12 lg:px-28 xl:px-36">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            典型应用场景
          </h2>
        </div>

        {/* 横向不换行容器 */}
        <div className="flex gap-4 overflow-x-auto px-6 pb-4 scrollbar-hide sm:gap-5 sm:px-12 lg:px-28 xl:px-36">
          {SCENARIOS.map((item) => (
            <div
              key={item.label}
              className="group flex h-[280px] w-[200px] shrink-0 flex-col overflow-hidden border border-white/[0.06] transition-all duration-500 hover:-translate-y-1 hover:border-[#b8d0e3] sm:w-[240px]"
            >
              {/* 图片区域 */}
              <div className="relative flex-1 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 200px, 240px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* 图标 */}
                <div className="absolute bottom-3 left-3">
                  <item.icon weight="duotone" size={22} className="text-white/50" />
                </div>
              </div>

              {/* 文字信息 */}
              <div className="bg-white p-4">
                <h3 className="mb-1 text-sm font-semibold text-slate-800 line-clamp-2">{item.label}</h3>
                <p className="text-[11px] leading-relaxed text-slate-500 line-clamp-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== 流程区 - 编号列表样式（类似文章中的有序列表）===== */}
      <section className="border-t border-[#cce0ed] bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 sm:px-12 lg:px-28 xl:px-36">
          <div className="mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              城市/旅游宣传航拍流程
            </h2>
          </div>

          {/* 编号列表样式 */}
          <ol className="space-y-6">
            {PROCESS.map((item) => (
              <li key={item.step} className="group relative flex gap-5 pl-10">
                {/* 编号 */}
                <span className="absolute left-0 top-0 text-xl font-bold text-white/15 group-hover:text-[#00b4d8]/40 transition-colors duration-300">
                  {String(item.step).padStart(2, "0")}
                </span>

                {/* 内容 */}
                <div className="flex-1 border-b border-white/[0.05] pb-6">
                  <h3 className="mb-1 text-base font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/45">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ====== 设备区 - 对比表格形式（设备名 | 核心参数 | 适用场景）===== */}
      <section className="border-t border-[#cce0ed] py-16 md:py-20">
        <div className="mb-10 px-6 sm:px-12 lg:px-28 xl:px-36">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            推荐使用设备
          </h2>
        </div>

        <div className="mx-auto max-w-4xl px-6 sm:px-12 lg:px-28 xl:px-36">
          {/* 表格头部 */}
          <div className="hidden grid-cols-12 gap-4 border-b border-[#cce0ed] pb-3 text-xs font-medium uppercase tracking-wider text-white/35 sm:grid">
            <div className="col-span-4">设备名称</div>
            <div className="col-span-4">核心参数</div>
            <div className="col-span-4">适用场景</div>
          </div>

          {/* 表格内容 */}
          <div className="divide-y divide-slate-200">
            {EQUIPMENT.map((eq) => (
              <div key={eq.name} className="grid grid-cols-1 gap-4 py-5 sm:grid-cols-12 sm:items-center sm:gap-6 sm:py-6">
                {/* 设备名 + 缩略图 */}
                <div className="col-span-4 flex items-center gap-3">
                  <div className="relative h-10 w-14 shrink-0 overflow-hidden rounded">
                    <Image
                      src={eq.src}
                      alt={eq.name}
                      fill
                      sizes="56px"
                      className="object-cover opacity-60"
                    />
                  </div>
                  <span className="text-sm font-medium text-white">{eq.name}</span>
                </div>

                {/* 核心参数 */}
                <div className="col-span-4 text-sm text-white/55">{eq.params}</div>

                {/* 适用场景 */}
                <div className="col-span-4 text-sm text-white/45">{eq.scene}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 简洁的文字链接CTA ====== */}
      <section className="border-t border-[#cce0ed] py-16 text-center md:py-20">
        <p className="text-sm text-white/40">
          让我们为您的城市或景区打造一张动人的视觉名片。{" "}
          <Link
            href="/contact"
            className="font-medium text-white/70 underline decoration-slate-200 underline-offset-4 transition-colors hover:text-[#00b4d8] hover:decoration-[#00b4d8]"
          >
            联系咨询
          </Link>
        </p>
      </section>
    </div>
  );
}
