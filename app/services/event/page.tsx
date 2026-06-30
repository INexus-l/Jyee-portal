import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  MusicNote,
  Medal,
  MicrophoneStage,
  UsersThree,
  PersonSimpleRun,
} from "@phosphor-icons/react/dist/ssr";
import Breadcrumb from "@/components/layout/breadcrumb";
import { IMAGES } from "@/lib/images";

/* ========== SEO元数据 ========== */
export const metadata: Metadata = {
  title: "活动/赛事航拍 — 大型活动体育赛事无人机航拍直播",
  description:
    "极翼科技大型活动、体育赛事专业航拍服务，多机位协同、实时传输，为音乐节、演唱会、马拉松、企业年会等活动增添震撼空中视角。",
  keywords: ["活动航拍", "赛事航拍", "演唱会航拍", "马拉松航拍", "企业年会航拍"],
};

/* ========== 适用场景数据（竖向卡片）========== */
const SCENARIOS = [
  { icon: MusicNote, label: "音乐节/演唱会", desc: "万人现场的壮观场面与舞台效果", src: IMAGES.concertCrowd },
  { icon: Medal, label: "体育赛事", desc: "足球、篮球、赛车等竞技类活动", src: IMAGES.eventStadium },
  { icon: MicrophoneStage, label: "发布会/展览", desc: "新品发布、行业展会现场记录", src: IMAGES.eventNight },
  { icon: UsersThree, label: "企业年会", desc: "年度盛典团队风采与氛围呈现", src: IMAGES.sportsAction },
  { icon: PersonSimpleRun, label: "马拉松赛事", desc: "城市路跑全程跟拍与补给点记录", src: IMAGES.liveSports },
];

/* ========== 服务流程（6步紧凑网格）========== */
const PROCESS = [
  { step: 1, title: "活动评估", desc: "分析规模、场地及安全要求" },
  { step: 2, title: "空域报备", desc: "申请飞行许可与报备" },
  { step: 3, title: "机位规划", desc: "设计多机位布局方案" },
  { step: 4, title: "现场彩排", desc: "测试信号、确认关键节点" },
  { step: 5, title: "正式录制", desc: "多机位协同作业执行" },
  { step: 6, title: "快速出片", desc: "优先处理精彩片段交付" },
];

/* ========== 推荐设备（3张大卡片）========== */
const EQUIPMENT = [
  {
    name: "DJI Inspire 3",
    feature: "双控操作，全画幅电影画质",
    specs: ["全画幅8K视频", "双操控系统", "专业级图传"],
    src: IMAGES.inspire3,
  },
  {
    name: "DJI Matrice 300 RTK",
    feature: "多负载平台，支持多机位协同",
    specs: ["RTK高精度定位", "多负载挂载", "长续航设计"],
    src: IMAGES.matrice350,
  },
  {
    name: "DJI FPV 穿越机",
    feature: "高速机动，第一人称沉浸视角",
    specs: ["第一人称视角", "高速机动性", "沉浸式体验"],
    src: IMAGES.filmEquipment,
  },
];

/* ========== 页面组件（服务端组件）========== */
export default function EventPage() {
  return (
    <div style={{ backgroundColor: "#151c2c" }} className="flex flex-col">
      {/* ====== Hero - 暖橙红调遮罩 + 扫描线效果 ====== */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.eventStadium}
            alt="活动赛事航拍"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151c2c] via-orange-950/80 to-red-900/50" />
        </div>

        {/* CSS扫描线效果 */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)",
          }}
        />

        <div className="relative z-10 w-full px-6 pb-16 pt-32 sm:px-12 md:px-20 lg:px-28 xl:px-36">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-orange-300/60">
              Event & Sports Aerial Coverage
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              活动/赛事航拍
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-gray-300/90 sm:text-lg">
              多机位协同 · 实时图传 · 震撼空中视角
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
            { label: "活动/赛事航拍" },
          ]}
        />
      </section>

      {/* ====== 概述区 - 全宽文字区块 + 横幅式大图 ====== */}
      <section className="py-16 md:py-24">
        {/* 全宽文字区块 */}
        <div className="mx-auto mb-12 max-w-3xl px-6 text-center sm:px-12 lg:px-28 xl:px-36">
          <h2 className="mb-6 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            大型活动、体育赛事的<br />专业航拍服务
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-gray-400/80">
            <p>
              从万人狂欢的音乐节到激情四射的体育赛场，从庄重的企业年会到热血沸腾的马拉松赛道 — 
              活动航拍需要的不只是技术，更是对节奏的把控和对关键时刻的敏锐嗅觉。
            </p>
            <p>
              极翼科技拥有丰富的活动现场航拍经验，配备多套专业设备与多名资深飞手，
              可实现多机位协同作业。无论是固定机位的稳定画面，还是FPV穿越机的动感穿梭，
              我们都能为您的活动增添令人震撼的空中视角。
            </p>
          </div>
        </div>

        {/* 横幅式大图 */}
        <div className="relative h-[300px] overflow-hidden sm:h-[400px]">
          <Image
            src={IMAGES.concertCrowd}
            alt="活动现场全景"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151c2c]/60 via-transparent to-transparent" />
        </div>
      </section>

      {/* ====== 场景区 - 横向滚动条（桌面端也滚动）+ 竖向卡片 ====== */}
      <section className="border-t border-white/[0.05] py-16 md:py-24">
        <div className="mb-10 px-6 sm:px-12 lg:px-28 xl:px-36">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            典型应用场景
          </h2>
        </div>

        {/* 横向滚动容器 - 竖向卡片 */}
        <div className="flex gap-5 overflow-x-auto px-6 pb-4 scrollbar-hide sm:gap-6 sm:px-12 lg:px-28 xl:px-36">
          {SCENARIOS.map((item) => (
            <div
              key={item.label}
              className="group flex w-[220px] shrink-0 flex-col overflow-hidden border border-white/[0.06] transition-all duration-500 hover:-translate-y-1 hover:border-white/15 sm:w-[260px]"
            >
              {/* 竖向图片区域 */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 220px, 260px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                {/* 图标 */}
                <div className="absolute bottom-4 left-4">
                  <item.icon weight="duotone" size={24} className="text-white/60" />
                </div>
              </div>

              {/* 文字信息 */}
              <div className="flex-1 bg-white/[0.02] p-4">
                <h3 className="mb-1 text-sm font-semibold text-white">{item.label}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== 流程区 - 6步紧凑网格（2行3列）===== */}
      <section className="border-t border-white/[0.05] py-16 md:py-20">
        <div className="px-6 sm:px-12 lg:px-28 xl:px-36">
          <div className="mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              活动赛事航拍服务流程
            </h2>
          </div>

          {/* 2行3列紧凑网格 */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
            {PROCESS.map((item) => (
              <div key={item.step} className="border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:bg-white/[0.04] sm:p-6">
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-orange-500/30 text-xs font-medium text-orange-300/80">
                    {item.step}
                  </span>
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-xs leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 设备区 - 3张大卡片横向排列 + 悬停详细参数overlay ====== */}
      <section className="border-t border-white/[0.05] py-16 md:py-20">
        <div className="mb-10 px-6 sm:px-12 lg:px-28 xl:px-36">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            推荐使用设备
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-3 sm:gap-8 sm:px-12 lg:px-28 xl:px-36">
          {EQUIPMENT.map((eq) => (
            <div
              key={eq.name}
              className="group relative h-[360px] overflow-hidden border border-white/[0.06] transition-all duration-500 hover:-translate-y-1 hover:border-white/15 sm:h-[400px]"
            >
              {/* 设备背景图 */}
              <div className="relative h-[65%] overflow-hidden">
                <Image
                  src={eq.src}
                  alt={eq.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  className="object-cover opacity-50 transition-opacity duration-500 group-hover:opacity-70"
                />
              </div>

              {/* 基础信息 */}
              <div className="relative bg-white/[0.02] p-5 pt-4">
                <h3 className="mb-1 text-base font-semibold text-white">{eq.name}</h3>
                <p className="text-xs text-gray-500">{eq.feature}</p>
              </div>

              {/* 悬停时显示的详细参数overlay */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-white shadow-md backdrop-blur-md p-5 transition-transform duration-300 group-hover:translate-y-0">
                <h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-[#00b4d8]">技术参数</h4>
                <ul className="space-y-1.5">
                  {eq.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="h-1 w-1 rounded-full bg-[#00b4d8]" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== 页末简洁联系按钮（无独立CTA区块）===== */}
      <section className="border-t border-white/[0.05] py-16 text-center md:py-20">
        <p className="mb-4 text-sm text-gray-500">
          告知活动时间、地点和规模，获取专业航拍方案
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2.5 rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-gray-400 transition-all hover:border-[#00b4d8] hover:text-[#00b4d8]"
        >
          联系咨询
        </Link>
      </section>
    </div>
  );
}
