"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Lightbulb,
  Buildings,
  City,
  Heart,
  MapPin,
  FilmStrip,
  HouseLine,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Headset,
  Lock,
  ChatCircleText,
  Clock,
  CloudWarning,
  FileText,
  CalendarBlank,
  VideoCamera,
  Palette,
  FolderOpen,
  Truck,
  UsersThree,
  Star,
} from "@phosphor-icons/react/dist/ssr";
import { motion, AnimatePresence, useInView } from "motion/react";
import { useRef } from "react";
import Breadcrumb from "@/components/layout/breadcrumb";
import { IMAGES } from "@/lib/images";

/* ========== 三大客户解决方案（完整方案数据）========== */
const SOLUTIONS = [
  {
    id: "personal",
    icon: Heart,
    title: "个人客户解决方案",
    subtitle: "Personal Solutions",
    color: "#e65100",
    bgLight: "#fff7ed",
    scenarios: [
      { label: "婚庆航拍", desc: "接亲车队+户外仪式+婚宴全景", icon: Heart },
      { label: "旅行记录", desc: "旅途中的上帝视角Vlog素材", icon: MapPin },
      { label: "房产看房", desc: "房屋周边环境与社区配套展示", icon: HouseLine },
      { label: "个人创作", desc: "航拍短片/创意影像/社交媒体内容", icon: FilmStrip },
    ],
    /* 方案包含的服务内容 */
    includes: [
      { icon: VideoCamera, text: "全程跟拍（半日/全日）" },
      { icon: Palette, text: "专业后期剪辑调色" },
      { icon: FolderOpen, text: "多格式成品交付（MP4/MOV）" },
      { icon: Truck, text: "重庆主城区免差旅费" },
      { icon: UsersThree, text: "1名持证飞手+1名摄影助理" },
    ],
    /* 交付物清单 */
    deliverables: [
      "精剪成片1部（3~8分钟）",
      "精选原片30~60张（已调色）",
      "VR全景漫游链接（可选）",
      "全部RAW原始素材U盘归档",
    ],
    /* 服务流程 */
    process: ["需求沟通", "场地勘察", "拍摄执行", "初稿确认", "精修交付"],
    /* 服务亮点 */
    highlights: [
      "资深飞手全程跟拍",
      "多角度创意运镜",
      "交付后免费修改1次",
      "RAW原始素材全送",
    ],
    ctaText: "咨询个人方案",
    heroImage: IMAGES.weddingOutdoor,
  },
  {
    id: "corporate",
    icon: Buildings,
    title: "企业客户解决方案",
    subtitle: "Corporate Solutions",
    color: "#0077b6",
    bgLight: "#f0f9ff",
    scenarios: [
      { label: "品牌宣传片", desc: "企业形象/产品发布/年会记录", icon: Buildings },
      { label: "房地产航拍", desc: "楼盘全景/样板间/周边配套", icon: HouseLine },
      { label: "活动赛事", desc: "发布会/展会/马拉松/音乐节", icon: CalendarBlank },
      { label: "工程进度", desc: "施工全过程影像档案管理", icon: ChatCircleText },
    ],
    includes: [
      { icon: VideoCamera, text: "多机位航拍+地面协同拍摄" },
      { icon: Palette, text: "电影级调色+品牌视觉包装" },
      { icon: FolderOpen, text: "4K/8K多规格成品交付" },
      { icon: Star, text: "专属项目经理一对一服务" },
      { icon: ShieldCheck, text: "商业授权协议+版权清晰" },
    ],
    deliverables: [
      "品牌宣传正片（30s/60s/3min多版本）",
      "竖屏适配版（抖音/视频号/小红书）",
      "高分辨率剧照20~50张",
      "项目完整素材硬盘归档",
      "航拍LOGO素材包（可复用）",
    ],
    process: ["需求调研", "创意策划", "脚本确认", "拍摄执行", "粗剪审片", "精修交付"],
    /* 服务亮点 */
    highlights: [
      "专属项目经理对接",
      "多机位航拍+地拍协同",
      "品牌视觉统一包装",
      "竖屏版同步适配",
    ],
    ctaText: "咨询企业方案",
    heroImage: IMAGES.corporateCampus,
  },
  {
    id: "government",
    icon: City,
    title: "机构/政府解决方案",
    subtitle: "Institutional & Government Solutions",
    color: "#0369a1",
    bgLight: "#eff6ff",
    scenarios: [
      { label: "城市形象片", desc: "城市宣传片/招商推介/文旅推广", icon: City },
      { label: "航测测绘", desc: "正射影像/三维建模/LiDAR扫描", icon: MapPin },
      { label: "应急保障", desc: "灾害评估/搜救支援/环境监测", icon: ShieldCheck },
      { label: "大型活动", desc: "节庆活动/体育赛事/政务直播", icon: CalendarBlank },
    ],
    includes: [
      { icon: VideoCamera, text: "多平台设备集群作业" },
      { icon: MapPin, text: "高精度测绘数据处理" },
      { icon: FolderOpen, text: "GIS/BIM格式专业交付" },
      { icon: Lock, text: "保密协议+数据安全管控" },
      { icon: FileText, text: "完整项目报告+验收文档" },
    ],
    deliverables: [
      "城市/区域航拍宣传片（4K/8K）",
      "正射影像DOM/DSM成果（≤5cm精度）",
      "三维实景模型（OSGB/OBJ格式）",
      "LiDAR点云数据（LAS格式）",
      "项目技术报告+验收文档",
      "全部原始数据加密交付",
    ],
    process: ["立项对接", "技术方案评审", "空域申请", "外业采集", "内业处理", "成果验收", "售后支持"],
    /* 服务亮点 */
    highlights: [
      "多平台设备集群作业",
      "RTK厘米级定位精度",
      "保密协议+数据安全管控",
      "完整技术报告+验收文档",
    ],
    ctaText: "获取定制方案",
    heroImage: IMAGES.tourismCity,
  },
];

/* ========== SOP流程步骤 ========== */
const SOP_STEPS = [
  { step: 1, icon: ChatCircleText, title: "需求沟通", desc: "深入了解您的项目目标、风格偏好及特殊要求" },
  { step: 2, icon: MapPin, title: "实地勘察", desc: "提前踩点评估飞行条件、空域限制及安全区域" },
  { step: 3, icon: FileText, title: "方案制定", desc: "输出详细拍摄方案、机位规划及时间表" },
  { step: 4, icon: FileText, title: "方案确认", desc: "双方确认服务范围、交付标准与项目时间表" },
  { step: 5, icon: Clock, title: "预约排期", desc: "根据天气窗口和档期安排最佳拍摄时间" },
  { step: 6, icon: CloudWarning, title: "天气预案", desc: "气象监测，准备备选方案确保万无一失" },
  { step: 7, icon: FilmStrip, title: "正式拍摄", desc: "多角度多时段精准执行，捕捉每个关键瞬间" },
  { step: 8, icon: Lightbulb, title: "后期制作", desc: "专业剪辑调色、配乐包装，精雕细琢每帧画面" },
  { step: 9, icon: CheckCircle, title: "验收交付", desc: "多格式成品交付 + 原始素材归档 + 售后支持" },
];

/* ========== FAQ数据 ========== */
const FAQS = [
  { question: "航拍需要提前多久预约？", answer: "一般建议提前7-14天预约。大型项目或特殊日期（节假日、婚庆旺季）建议至少提前2-3周。紧急项目可联系客服评估加急可能性。" },
  { question: "天气不好能飞吗？", answer: "安全第一。小雨、薄雾等轻微条件下仍可作业；大雨、大风（超5级）、雷电、低能见度会暂停飞行。我们会提前24小时与您确认是否按计划执行。" },
  { question: "飞行需要申请空域吗？", answer: "是的，中国境内商业飞行需遵守相关法规。我们拥有专业空域申请经验，禁飞区/限飞区会提前申报临时飞行计划，您无需操心手续。" },
  { question: "拍摄后多久能拿到成片？", answer: "常规项目5-7个工作日交付初稿；复杂项目（如城市宣传片）10-15个工作日。可在合同中约定加急费用。所有项目提供一次免费修改。" },
  { question: "可以提供原始素材吗？", answer: "可以。根据套餐不同，可提供RAW格式原始素材、DNG文件或已调色中间文件。通常在最终交付后额外提供，以合同约定为准。" },
  { question: "服务包含哪些内容？", answer: "我们的服务涵盖完整航拍全流程：前期需求沟通与定制化方案设计、现场专业拍摄（含持证飞手及顶级设备）、后期专业剪辑调色与视觉包装、多格式成品交付、以及交付后免费修改服务。每个项目都会根据您的具体需求量身定制，确保物超所值。" },
  { question: "飞行需要申请空域吗？", answer: "是的，我们负责所有空域申请和报备工作，确保每次飞行合法合规。您只需告诉我们想拍的地点和时间即可。" },
];

/* ========== 服务保障 ========== */
const GUARANTEES = [
  { icon: CheckCircle, title: "品质保证", desc: "专业团队 + 顶级设备，每帧画面都经严格品控", color: "#0077b6" },
  { icon: ShieldCheck, title: "安全保障", desc: "全额保险覆盖，持证飞手操作，严格遵守安全规范", color: "#16a34a" },
  { icon: Headset, title: "售后服务", desc: "交付后30天内免费修改，长期存档备份", color: "#e65100" },
  { icon: Lock, title: "保密承诺", desc: "签署保密协议，客户资料与素材绝不外泄", color: "#7c3aed" },
];

/* ========== 解决方案卡片组件（完整方案展示）========== */
function SolutionCard({ solution, index }: { solution: (typeof SOLUTIONS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      className="overflow-hidden rounded-2xl border border-[#dde8ef] bg-white shadow-sm"
    >
      {/* ====== 卡片头部：左侧大图 + 右侧标题信息 ====== */}
      <div className="grid lg:grid-cols-5">
        {/* 左侧：场景大图 */}
        <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[320px]">
          <Image
            src={solution.heroImage}
            alt={solution.title}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          {/* 左上角标签 */}
          <div
            className="absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-bold"
            style={{ backgroundColor: `${solution.color}18`, color: solution.color }}
          >
            {solution.subtitle.toUpperCase()}
          </div>
        </div>

        {/* 右侧：标题 + 场景 + 包含服务 */}
        <div className="p-6 sm:p-8 lg:col-span-4">
          <div className="flex items-start gap-4 mb-5">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
              style={{ backgroundColor: solution.bgLight, border: `1.5px solid ${solution.color}20` }}
            >
              <solution.icon size={26} weight="duotone" style={{ color: solution.color }} />
            </div>
            <div>
              <h2 className="text-xl font-heading font-bold tracking-tight text-[#1a2744] sm:text-2xl">{solution.title}</h2>
              <p className="mt-1 text-xs text-[#557090]">为{solution.id === "personal" ? "个人用户" : solution.id === "corporate" ? "企业客户" : "政府机构"}量身定制的全方位航拍解决方案</p>
            </div>
          </div>

          {/* 典型应用场景 */}
          <div className="mb-5">
            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-wider" style={{ color: solution.color }}>典型应用场景</p>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {solution.scenarios.map((s) => (
                <div key={s.label} className="flex items-start gap-2 rounded-lg p-2.5 sm:p-3" style={{ backgroundColor: solution.bgLight }}>
                  <s.icon size={15} weight="duotone" className="mt-0.5 shrink-0" style={{ color: solution.color }} />
                  <div>
                    <p className="text-xs font-semibold text-[#1a2744]">{s.label}</p>
                    <p className="text-[10px] leading-relaxed text-[#557090]">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 方案包含 */}
          <div className="mb-5">
            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-wider" style={{ color: solution.color }}>方案包含</p>
            <div className="flex flex-wrap gap-2">
              {solution.includes.map((inc) => (
                <span key={inc.text} className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium" style={{ borderColor: `${solution.color}25`, backgroundColor: solution.bgLight, color: "#334155" }}>
                  <inc.icon size={13} weight="duotone" style={{ color: solution.color }} />
                  {inc.text}
                </span>
              ))}
            </div>
          </div>

          {/* 交付物清单 */}
          <div>
            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-wider" style={{ color: solution.color }}>交付物清单</p>
            <ul className="space-y-1.5">
              {solution.deliverables.map((d) => (
                <li key={d} className="flex items-center gap-2 text-xs text-[#334155]">
                  <CheckCircle size={14} weight="fill" style={{ color: solution.color }} />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ====== 底部：服务亮点 + CTA ====== */}
      <div className="border-t border-[#dde8ef] bg-[#fafcfe] p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          {/* 服务亮点 */}
          <div>
            <p className="mb-3 text-xs font-semibold text-[#557090]">方案核心优势</p>
            <div className="rounded-lg border border-[#dde8ef] bg-white p-4">
              <ul className="space-y-2">
                {solution.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-xs text-[#334155]">
                    <CheckCircle size={15} weight="fill" style={{ color: solution.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA按钮 */}
          <Link
            href="/contact"
            className="shrink-0 flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl whitespace-nowrap"
            style={{ backgroundColor: solution.color, boxShadow: `0 4px 16px ${solution.color}35` }}
          >
            {solution.ctaText}
            <ArrowRight weight="bold" size={16} />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

/* ========== 主页面组件 ========== */
export default function SolutionsPage() {
  return (
    <div className="flex flex-col">
      {/* ====== Hero 区域 ====== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#151c2c] via-[#1a2744] to-[#0f172a]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <Lightbulb weight="duotone" size={44} className="mb-4 text-[#e65100]" />
            <span className="mb-3 inline-block rounded-full bg-white/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#48cae4]">
              CUSTOMIZED SOLUTIONS
            </span>
            <h1 className="mb-4 text-4xl font-heading font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              定制化<span style={{ backgroundImage: "linear-gradient(135deg,#e65100,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>解决方案</span>
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              从个人纪念到企业品牌，从单次拍摄到年度合作 — 为每位客户打造专属航拍方案。
            </p>
            {/* 快速导航到三类方案 */}
            <div className="flex flex-wrap gap-3">
              {SOLUTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/[0.08]"
                  style={{ borderColor: `${s.color}30` }}
                >
                  <s.icon size={14} weight="duotone" style={{ color: s.color }} />
                  {s.title.replace("解决方案", "")}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* 底部渐变过渡 */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#eef4f9] to-transparent" />
      </section>

      {/* 面包屑 */}
      <section className="section-container py-4">
        <Breadcrumb items={[{ label: "首页", href: "/" }, { label: "解决方案" }]} />
      </section>

      {/* ====== 三大方案板块 ====== */}
      <section className="space-y-10 pb-16 md:pb-20 lg:space-y-14">
        {SOLUTIONS.map((solution, i) => (
          <div key={solution.id} id={solution.id} className="px-4 sm:px-6 lg:px-28 xl:px-36">
            <SolutionCard solution={solution} index={i} />
          </div>
        ))}
      </section>

      {/* 分隔线 */}
      <div className="mx-auto h-px w-full max-w-[1400px] bg-gradient-to-r from-transparent via-[#cce0ed] to-transparent" />

      {/* ====== 9步标准SOP流程 ====== */}
      <section className="py-16 md:py-20">
        <div className="px-4 sm:px-6 lg:px-28 xl:px-36">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full bg-[#0077b6]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0077b6]">
              STANDARD WORKFLOW
            </span>
            <h2 className="mt-3 text-2xl font-heading font-bold tracking-tight text-[#1a2744] sm:text-3xl">
              9步标准<span className="text-[#0077b6]">服务流程</span>
            </h2>
            <p className="mt-2 mx-auto max-w-2xl text-sm text-[#557090]">
              从初次沟通到最终交付，每个环节都有标准化流程保障
            </p>
          </div>

          {/* 横向步骤条 — 大号圆圈 + 强色数字 */}
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex min-w-max gap-3 sm:gap-4">
              {SOP_STEPS.map((item, idx) => (
                <div key={item.step} className="group relative flex flex-col items-center gap-2.5 w-[110px] sm:w-[130px]">
                  {/* 数字圆圈 */}
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-base font-black transition-all duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:text-lg"
                    style={{
                      borderColor: idx <= 2 ? "#0077b6" : "#cce0ed",
                      background: idx <= 2 ? "linear-gradient(135deg,#0077b6,#0096c7)" : "white",
                      color: idx <= 2 ? "#ffffff" : "#0077b6",
                      boxShadow: idx <= 2 ? "0 4px 12px rgba(0,119,182,0.25)" : "0 2px 6px rgba(0,119,182,0.08)",
                    }}
                  >
                    {item.step}
                  </div>
                  <span className="whitespace-nowrap text-xs font-bold text-[#1a2744] group-hover:text-[#0077b6] transition-colors">{item.title}</span>
                  {/* 连接线 */}
                  {idx < SOP_STEPS.length - 1 && (
                    <div className="absolute top-6 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px hidden sm:block" style={{ background: idx <= 1 ? "#0077b6" : "#dde8ef" }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 分隔线 */}
      <div className="mx-auto h-px w-full max-w-[1400px] bg-gradient-to-r from-transparent via-[#cce0ed] to-transparent" />

      {/* ====== FAQ常见问题（修复文字可见性）====== */}
      <section className="bg-[#f5f9fc] py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block rounded-full bg-[#0077b6]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0077b6]">
              FAQ
            </span>
            <h2 className="mt-3 text-2xl font-heading font-bold tracking-tight text-[#1a2744] sm:text-3xl">
              常见问题<span className="text-[#0077b6]">解答</span>
            </h2>
            <p className="mt-2 text-sm text-[#557090]">关于航拍服务的常见疑问，为您一一解答</p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <details
                key={index}
                className="group overflow-hidden rounded-xl border border-[#dde8ef] bg-white transition-all duration-300 hover:border-[#0077b6]/30 hover:shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-[#1a2744] list-none hover:text-[#0077b6] transition-colors [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <ArrowRight
                    weight="bold"
                    size={16}
                    className="shrink-0 text-[#94a3b8] transition-transform duration-300 group-open:rotate-90"
                  />
                </summary>
                <div className="px-5 pb-5 pt-0">
                  <p className="text-xs leading-relaxed text-[#557090] sm:text-sm">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 分隔线 */}
      <div className="mx-auto h-px w-full max-w-[1400px] bg-gradient-to-r from-transparent via-[#cce0ed] to-transparent" />

      {/* ====== 服务保障承诺 ====== */}
      <section className="py-16 md:py-20">
        <div className="px-4 sm:px-6 lg:px-28 xl:px-36">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block rounded-full bg-[#0077b6]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0077b6]">
              OUR GUARANTEE
            </span>
            <h2 className="mt-3 text-2xl font-heading font-bold tracking-tight text-[#1a2744] sm:text-3xl">
              服务保障<span className="text-[#e65100]">承诺</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {GUARANTEES.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group rounded-xl border border-[#dde8ef] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-[#0077b6]/8"
              >
                <div
                  className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${g.color}08`, border: `1.5px solid ${g.color}20` }}
                >
                  <g.icon size={26} weight="duotone" style={{ color: g.color }} />
                </div>
                <h3 className="mb-1.5 text-sm font-bold text-[#1a2744]">{g.title}</h3>
                <p className="text-xs leading-relaxed text-[#557090]">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 底部CTA ====== */}
      <section className="border-t border-[#cce0ed] bg-gradient-to-br from-[#151c2c] to-[#0f172a] py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <Lightbulb weight="duotone" size={40} className="mx-auto mb-4 text-[#e65100]" />
          <h3 className="mb-3 text-2xl font-heading font-bold text-white sm:text-3xl">
            还不确定选择哪个方案？
          </h3>
          <p className="mb-8 text-sm text-white/60 sm:text-base">
            告诉我们您的需求，专业顾问为您推荐最优解决方案
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#e65100] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#e65100]/25 transition-all hover:bg-[#c2410c] hover:-translate-y-0.5 hover:shadow-xl"
          >
            免费获取方案建议
            <ArrowRight weight="bold" size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

// React import for useState in SolutionCard
import React from "react";
