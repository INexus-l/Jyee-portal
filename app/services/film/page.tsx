import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  TreeEvergreen,
  City,
  Megaphone,
  MusicNote,
  Television,
} from "@phosphor-icons/react/dist/ssr";
import Breadcrumb from "@/components/layout/breadcrumb";
import { IMAGES } from "@/lib/images";

/* ========== SEO元数据 ========== */
export const metadata: Metadata = {
  title: "影视/纪录片航拍 — 电影级无人机航拍影像服务",
  description:
    "极翼科技影视纪录片航拍服务，RED/A7S等顶级设备加持，满足自然纪录片、城市人文、商业广告大片、音乐MV、电视剧等高端制作需求。",
  keywords: ["影视航拍", "纪录片航拍", "广告片航拍", "MV航拍", "RED航拍"],
};

/* ========== 适用场景（电影胶片风格）========== */
const SCENARIOS = [
  { label: "自然纪录片", desc: "山川河流、野生动物的史诗级呈现", src: IMAGES.filmCinematic },
  { label: "城市人文纪录片", desc: "城市变迁与人文故事的情感表达", src: IMAGES.filmSet },
  { label: "商业广告大片", desc: "品牌TVC与产品宣传片的视觉冲击", src: IMAGES.movieScene },
  { label: "音乐MV", desc: "艺术化航拍镜头为MV增色添彩", src: IMAGES.riverView },
  { label: "电视剧航拍镜头", desc: "影视剧中的关键空镜与转场镜头", src: IMAGES.movieScene },
];

/* ========== 服务流程（分镜脚本式布局）========== */
const PROCESS = [
  {
    step: "SC-01",
    title: "剧本分析",
    scene: "研读剧本理解导演意图与美学需求",
    note: "标注关键场景、情绪节点与视觉参考",
  },
  {
    step: "SC-02",
    title: "分镜设计",
    scene: "绘制航拍分镜图，规划运镜轨迹",
    note: "确定机位、角度、运动方式与时间长度",
  },
  {
    step: "SC-03",
    title: "器材配置",
    scene: "根据需求选配相机、镜头及辅助设备",
    note: "匹配画质要求、光线条件与特殊拍摄需求",
  },
  {
    step: "SC-04",
    title: "现场拍摄",
    scene: "配合导演精准执行每一组镜头",
    note: "实时调整参数，确保画面符合预期效果",
  },
  {
    step: "SC-05",
    title: "DIT管理",
    scene: "现场数据备份与质量检查",
    note: "多副本备份，现场回放确认素材质量",
  },
  {
    step: "SC-06",
    title: "后期调色",
    scene: "专业调色匹配整体影片风格",
    note: "遵循导演意图，保持画面一致性",
  },
];

/* ========== 推荐设备（产品展示卡）========== */
const EQUIPMENT = [
  {
    name: "DJI Inspire 3 + Zenmuse X9-8K Air",
    specs: [
      { key: "传感器", value: "全画幅" },
      { key: "视频规格", value: "8K 30fps / CinemaDNG" },
      { key: "动态范围", value: "14+档" },
      { key: "色彩科学", value: "D-Log M / HLG" },
    ],
    src: IMAGES.inspire3,
  },
  {
    name: "DJI Ronin 4D + Zenmuse X9",
    specs: [
      { key: "形态", value: "四轴电影机一体化" },
      { key: "云台系统", value: "Z-Axis 云台增稳" },
      { key: "操控", value: "双操作员模式" },
      { key: "录制格式", value: "ProRes RAW" },
    ],
    src: IMAGES.filmEquipment,
  },
  {
    name: "Sony A7S III / RED KOMODO",
    specs: [
      { key: "传感器", value: "全画幅 / Super35" },
      { key: "高感光度", value: "ISO 409600" },
      { key: "适用场景", value: "低光/夜景拍摄" },
      { key: "输出接口", value: "SDI / HDMI" },
    ],
    src: IMAGES.filmEquipment,
  },
];

/* ========== 页面组件（服务端组件）========== */
export default function FilmPage() {
  return (
    <div style={{ backgroundColor: "#eef4f9" }} className="flex flex-col">
      {/* ====== Hero - 暗紫调遮罩（不要太紫）===== */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.filmCinematic}
            alt="影视航拍"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151c2c] via-neutral-950/95 to-stone-900/70" />
        </div>

        <div className="relative z-10 w-full px-6 pb-16 pt-32 sm:px-12 md:px-20 lg:px-28 xl:px-36">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/40">
              Film & Documentary Aerial Cinematography
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              影视/<br />纪录片航拍
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
              电影级画质 · RED/A7S顶级设备 · 全流程支持
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
            { label: "影视/纪录片航拍" },
          ]}
        />
      </section>

      {/* ====== 概述区 - 导演视角叙事（引言格式+署名）===== */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 sm:px-12 lg:px-28 xl:px-36">
          {/* 引言格式 */}
          <blockquote className="relative border-l-2 border-[#b8d0e3] pl-6 italic text-base leading-loose text-slate-800/60 sm:text-lg">
            当航拍从「记录」升级为「创作」，每一个镜头都承载着导演的艺术追求。
            我们不只是提供设备，更是用专业的电影级工作流支持每一个创意的落地。
          </blockquote>
          
          {/* 署名 */}
          <div className="mt-4 pl-6 text-sm text-slate-500">— 极翼科技影视团队</div>

          <div className="mt-10 space-y-4 text-sm leading-relaxed text-slate-500">
            <p>
              极翼科技影视纪录片航拍团队配备行业顶级影像设备 — DJI Inspire 3 全画幅8K系统、
              Ronin 4D 电影机、RED KOMODO 等，为纪录片、广告大片、音乐MV、电视剧等高端制作
              提供电影级画质保障。
            </p>
            <p>
              我们不仅提供设备，更提供完整的电影级工作流支持：从剧本分析与分镜设计开始，
              到现场DIT数据管理与质量检查，再到后期的专业调色输出 — 
              每一个环节都严格遵循影视工业标准。
            </p>
            <p>
              团队成员具备丰富的剧组协作经验，能够准确理解导演的创作意图，
              将抽象的艺术构想转化为精确的飞行轨迹和完美的画面构图。
            </p>
          </div>
        </div>
      </section>

      {/* ====== 场景区 - 电影胶片风格的横向滚动（带齿孔装饰边）===== */}
      <section className="border-t border-[#cce0ed] py-16 md:py-20">
        <div className="mb-10 px-6 sm:px-12 lg:px-28 xl:px-36">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl lg:text-4xl">
            典型应用场景
          </h2>
        </div>

        {/* 横向滚动容器 */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 scrollbar-hide sm:gap-8 sm:px-12 lg:px-28 xl:px-36">
          {SCENARIOS.map((item) => (
            <div
              key={item.label}
              className="group relative h-[340px] w-[280px] shrink-0 overflow-hidden transition-all duration-500 hover:-translate-y-1 sm:w-[320px]"
            >
              {/* 齿孔装饰边 */}
              <div className="absolute inset-y-0 left-0 z-10 w-6 bg-white shadow-sm flex flex-col justify-around py-3">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="mx-auto h-3 w-2 rounded-full bg-white/15" />
                ))}
              </div>
              <div className="absolute inset-y-0 right-0 z-10 w-6 bg-white shadow-sm flex flex-col justify-around py-3">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="mx-auto h-3 w-2 rounded-full bg-white/15" />
                ))}
              </div>

              {/* 图片区域 */}
              <div className="ml-6 mr-6 h-full overflow-hidden rounded">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 268px, 308px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                
                {/* 文字信息 */}
                <div className="absolute bottom-0 left-0 right-0 p-5 pt-10">
                  <h3 className="mb-1 text-base font-semibold text-white line-clamp-2">{item.label}</h3>
                  <p className="text-xs text-white/70 line-clamp-2">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== 流程区 - 分镜脚本式布局 ====== */}
      <section className="border-t border-[#cce0ed] bg-white py-16 md:py-20">
        <div className="mb-10 px-6 sm:px-12 lg:px-28 xl:px-36">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            影视航拍工作流
          </h2>
          <p className="mt-2 text-sm text-slate-800/40">每个步骤如同一个分镜脚本</p>
        </div>

        <div className="space-y-1 px-6 sm:px-12 lg:px-28 xl:px-36">
          {PROCESS.map((item) => (
            <div
              key={item.step}
              className="group grid gap-4 border-b border-white/[0.04] py-6 transition-colors hover:bg-slate-50 sm:grid-cols-[100px_1fr_200px]"
            >
              {/* 分镜编号 */}
              <div className="font-mono text-sm font-medium text-[#00b4d8]/60">{item.step}</div>

              {/* 画面描述 */}
              <div>
                <h3 className="mb-1 text-sm font-semibold text-slate-800">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.scene}</p>
              </div>

              {/* 技术备注 */}
              <div className="hidden border-l border-[#cce0ed] pl-4 sm:block">
                <span className="text-[10px] uppercase tracking-wider text-slate-300">技术备注</span>
                <p className="mt-1 text-xs leading-relaxed text-slate-800/40">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== 设备区 - 产品展示卡（电商产品页风格）===== */}
      <section className="border-t border-[#cce0ed] py-16 md:py-20">
        <div className="mb-10 px-6 sm:px-12 lg:px-28 xl:px-36">
          <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl lg:text-4xl">
            顶级影像设备
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 px-6 sm:grid-cols-3 sm:gap-6 sm:px-12 lg:px-28 xl:px-36">
          {EQUIPMENT.map((eq) => (
            <div
              key={eq.name}
              className="group overflow-hidden border border-[#cce0ed] bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#b8d0e3]"
            >
              {/* 产品大图 */}
              <div className="relative aspect-square overflow-hidden bg-white">
                <Image
                  src={eq.src}
                  alt={eq.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  className="object-cover opacity-50 transition-all duration-500 group-hover:opacity-75 group-hover:scale-105"
                />
              </div>

              {/* 产品名称 + 详细规格列表 */}
              <div className="p-6">
                <h3 className="mb-4 text-base font-semibold text-slate-800">{eq.name}</h3>
                <dl className="space-y-2.5">
                  {eq.specs.map((spec) => (
                    <div key={spec.key} className="flex items-baseline justify-between gap-4">
                      <dt className="shrink-0 text-xs text-slate-300">{spec.key}</dt>
                      <dd className="text-right text-xs font-medium text-slate-500">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== 简洁的文字链接CTA ====== */}
      <section className="border-t border-[#cce0ed] py-16 text-center md:py-20">
        <p className="text-sm text-slate-800/40">
          告知项目类型与需求，获取定制化的影视级航拍方案。{" "}
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
