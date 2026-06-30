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
  title: "婚庆航拍 — 专业婚礼无人机航拍记录服务",
  description:
    "极翼科技婚庆航拍服务，从接亲车队到户外仪式，从空中俯瞰婚礼盛况。专业飞手团队，多角度拍摄，精剪成片，让每一个感动瞬间都被完美捕捉。",
  keywords: ["婚庆航拍", "婚礼航拍", "重庆婚礼无人机拍摄", "婚礼跟拍"],
};

/* ========== 适用场景数据（2列大卡片）========== */
const SCENARIOS = [
  {
    label: "户外婚礼仪式",
    desc: "草坪/海滩/山顶等户外场地空中视角",
    src: IMAGES.weddingOutdoor,
  },
  {
    label: "婚礼车队跟拍",
    desc: "接亲车队行进路线动态航拍",
    src: IMAGES.weddingCar,
  },
  {
    label: "婚礼场地全景",
    desc: "酒店/庄园/宴会厅周边环境展示",
    src: IMAGES.weddingVenue,
  },
  {
    label: "婚宴现场航拍",
    desc: "宴席规模与氛围的震撼呈现",
    src: IMAGES.weddingBanquet,
  },
];

/* ========== 服务流程数据（垂直时间线）========== */
const PROCESS = [
  { step: 1, title: "需求沟通", desc: "了解婚礼时间、地点、风格偏好" },
  { step: 2, title: "实地勘察", desc: "提前踩点评估飞行条件与安全区域" },
  { step: 3, title: "拍摄方案", desc: "定制专属航拍脚本与关键镜头规划" },
  { step: 4, title: "天气预案", desc: "关注气象信息，准备备选方案" },
  { step: 5, title: "正式拍摄", desc: "多角度、多时段精准执行拍摄" },
  { step: 6, title: "精剪成片", desc: "专业后期剪辑调色，配乐包装交付" },
];

/* ========== 推荐设备（横向排列）========== */
const EQUIPMENT = [
  {
    name: "DJI Mavic 3 Pro",
    feature: "哈苏主摄，4/3大底，低光表现出色",
    src: IMAGES.mavic3Pro,
  },
  {
    name: "DJI Inspire 3",
    feature: "全画幅禅思X9，电影级画质",
    src: IMAGES.inspire3,
  },
  {
    name: "DJI Mini 4 Pro",
    feature: "轻便灵活，适合室内小空间拍摄",
    src: IMAGES.mini4Pro,
  },
];

/* ========== 作品集（横向滚动画廊）========== */
const PORTFOLIO = [
  { title: "海棠晓月·户外草坪婚礼", src: IMAGES.weddingOutdoor, width: "w-[280px]" },
  { title: "洲际酒店·奢华室内婚礼", src: IMAGES.weddingVenue, width: "w-[220px]" },
  { title: "南山·山顶日落婚礼", src: IMAGES.weddingSunset, width: "w-[300px]" },
  { title: "南滨路·江景游轮婚礼", src: IMAGES.riverView, width: "w-[240px]" },
  { title: "解放碑·城市天台仪式", src: IMAGES.tourismCity, width: "w-[260px]" },
];

/* ========== 页面组件（服务端组件）========== */
export default function WeddingPage() {
  return (
    <div style={{ backgroundColor: "#eef4f9" }} className="flex flex-col">
      {/* ====== Hero - 全屏图 + 暖玫瑰色调遮罩 + 标题居中偏下 + 细线分隔符 ====== */}
      <section className="relative flex min-h-[75vh] items-end justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.weddingOutdoor}
            alt="婚庆航拍"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#eef4f9] via-rose-100/80 to-rose-50/40" />
        </div>

        <div className="relative z-10 px-6 pb-20 pt-32 text-center sm:px-12 md:pb-24">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-slate-300">
            Wedding Aerial Photography
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl lg:text-6xl">
            婚庆航拍
          </h1>
          {/* 细线装饰分隔符 */}
          <div className="mx-auto mb-6 h-px w-24 bg-slate-200" />
          <p className="text-sm text-slate-400 sm:text-base">
            上帝视角见证爱情誓言 · 电影级画质记录人生最美时刻
          </p>
        </div>
      </section>

      {/* ====== 面包屑导航 ====== */}
      <section className="px-6 py-4 sm:px-12 lg:px-28 xl:px-36">
        <Breadcrumb
          items={[
            { label: "首页", href: "/" },
            { label: "航拍服务", href: "/services" },
            { label: "婚庆航拍" },
          ]}
        />
      </section>

      {/* ====== 概述区 - 右文左图反转布局（独特）===== */}
      <section className="py-16 md:py-24">
        <div className="px-6 sm:px-12 lg:px-28 xl:px-36">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* 左侧：图片（圆角+微妙阴影） */}
            <div className="order-last overflow-hidden rounded-2xl shadow-2xl shadow-black/30 lg:order-first">
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/3]">
                <Image
                  src={IMAGES.weddingSunset}
                  alt="婚礼日落场景"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* 右侧：文字内容 */}
            <div>
              <h2 className="mb-6 text-2xl font-bold leading-tight tracking-tight text-slate-800 sm:text-3xl lg:text-4xl">
                为您的婚礼<br />提供全方位航拍记录
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-slate-500">
                <p>
                  婚礼是人生中最重要的时刻之一，每一帧画面都承载着珍贵的情感记忆。
                  极翼科技婚庆航拍服务以专业的无人机设备与经验丰富的飞手团队，
                  为您打造独一无二的婚礼影像记录。
                </p>
                <p>
                  从接亲车队的出发瞬间，到户外仪式上交换戒指的神圣时刻；
                  从空中俯瞰婚礼场地的壮丽全景，到婚宴现场热闹非凡的氛围呈现 —
                  我们用上帝视角，将您的大喜之日完整而唯美地定格。
                </p>
                <p>
                  每一场婚礼都是独一无二的，我们根据您的婚礼风格、场地特点和时间安排，
                  定制专属航拍方案。无论是浪漫的户外草坪婚礼，还是隆重的酒店宴会，
                  我们都能找到最完美的拍摄角度。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 场景区 - 2列大卡片（图片背景满铺+底部半透明文字层）===== */}
      <section className="border-t border-[#cce0ed] py-16 md:py-24">
        <div className="mb-12 px-6 sm:px-12 lg:px-28 xl:px-36">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl lg:text-4xl">
            典型应用场景
          </h2>
        </div>

        <div className="px-6 sm:px-12 lg:px-28 xl:px-36">
          <div className="grid gap-6 md:grid-cols-2">
            {SCENARIOS.map((item) => (
              <div
                key={item.label}
                className="group relative h-[320px] overflow-hidden transition-transform duration-500 hover:-translate-y-1 md:h-[380px]"
              >
                {/* 背景图片满铺 */}
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* 底部半透明文字层 */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8 pt-16">
                  <h3 className="mb-2 text-xl font-semibold text-white sm:text-2xl line-clamp-2">
                    {item.label}
                  </h3>
                  <p className="text-sm text-white/70 line-clamp-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 流程区 - 垂直时间线（桌面端也用竖向）===== */}
      <section className="border-t border-[#cce0ed] py-16 md:py-24">
        <div className="px-6 sm:px-12 lg:px-28 xl:px-36">
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl lg:text-4xl">
              婚庆航拍服务流程
            </h2>
          </div>

          {/* 垂直时间线 */}
          <div className="relative max-w-2xl">
            {/* 左侧连线 */}
            <div className="absolute left-[15px] top-0 h-full w-px bg-white/10" />

            <div className="space-y-8">
              {PROCESS.map((item) => (
                <div key={item.step} className="relative flex gap-6 pl-12">
                  {/* 序号圆点 */}
                  <div className="absolute left-0 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#151c2c] text-xs font-medium text-white/70">
                    {item.step}
                  </div>

                  {/* 右侧内容 */}
                  <div className="flex-1 pb-2">
                    <h3 className="mb-1 text-base font-semibold text-slate-800 sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== 设备区 - 横向排列的设备条（左图60%+右信息40%）===== */}
      <section className="border-t border-[#cce0ed] py-16 md:py-24">
        <div className="mb-12 px-6 sm:px-12 lg:px-28 xl:px-36">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl lg:text-4xl">
            推荐使用设备
          </h2>
        </div>

        <div className="flex flex-col gap-6 px-6 sm:px-12 lg:px-28 xl:px-36">
          {EQUIPMENT.map((eq) => (
            <div
              key={eq.name}
              className="group flex h-[180px] overflow-hidden border border-white/[0.06] transition-all duration-500 hover:border-[#b8d0e3] sm:h-[200px]"
            >
              {/* 左侧设备图 - 占60% */}
              <div className="relative w-[60%] overflow-hidden bg-white/[0.02]">
                <Image
                  src={eq.src}
                  alt={eq.name}
                  fill
                  sizes="(max-width: 768px) 60vw, 600px"
                  className="object-cover opacity-70 transition-all duration-500 group-hover:opacity-90 group-hover:scale-105"
                />
              </div>

              {/* 右侧信息 - 占40% */}
              <div className="flex w-[40%] flex-col justify-center p-6 sm:p-8">
                <Camera weight="duotone" size={20} className="mb-3 text-tech-cyan/50" />
                <h3 className="mb-2 text-lg font-semibold text-slate-800">{eq.name}</h3>
                <p className="text-sm text-slate-500">{eq.feature}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== 作品集 - 横向滚动画廊（等高不等宽）===== */}
      <section className="border-t border-[#cce0ed] py-16 md:py-24">
        <div className="mb-10 flex items-end justify-between px-6 sm:px-12 lg:px-28 xl:px-36">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl lg:text-4xl">
              作品精选
            </h2>
          </div>
          <Link
            href="/portfolio?category=wedding"
            className="hidden items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-[#00b4d8] sm:flex"
          >
            查看更多作品
            <ArrowRight size={14} weight="bold" />
          </Link>
        </div>

        {/* 横向滚动容器 */}
        <div className="flex gap-4 overflow-x-auto pb-4 px-6 scrollbar-hide sm:gap-6 sm:px-12 lg:px-28 xl:px-36">
          {PORTFOLIO.map((work) => (
            <Link
              key={work.title}
              href="/portfolio?category=wedding"
              className={`group relative ${work.width} shrink-0 overflow-hidden`}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded">
                <Image
                  src={work.src}
                  alt={work.title}
                  fill
                  sizes="(max-width: 768px) 250px, 260px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-xs font-medium text-white line-clamp-2">{work.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ====== 简洁的文字链接CTA ====== */}
      <section className="border-t border-[#cce0ed] py-16 text-center md:py-20">
        <p className="text-sm text-slate-500">
          让天空见证你们的爱情故事。{" "}
          <Link
            href="/contact"
            className="font-medium text-slate-800/70 underline decoration-white/20 underline-offset-4 transition-colors hover:text-[#00b4d8] hover:decoration-[#00b4d8]"
          >
            立即咨询婚庆航拍服务
          </Link>
        </p>
      </section>
    </div>
  );
}
