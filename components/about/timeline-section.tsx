"use client";

import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState, useCallback } from "react";
import {
  RocketLaunch,
  Buildings,
  Certificate,
  CameraRotate,
  CubeTransparent,
  ShootingStar,
  Sparkle,
  CaretDown,
} from "@phosphor-icons/react/dist/ssr";

/* ---------- 发展历程数据 ---------- */
interface Milestone {
  year: string;
  title: string;
  desc: string;
  detail: string;
  icon: typeof RocketLaunch;
  isFuture?: boolean;
}

const MILESTONES: Milestone[] = [
  {
    year: "2014",
    title: "梦想启航 · 公司成立",
    desc: "重庆极翼无人飞行器科技有限公司正式注册成立，开启专业航拍服务之路。",
    detail:
      "在无人机行业尚处萌芽期的2014年，极翼科技于山城重庆正式诞生。创始团队怀揣着对航空摄影的热爱与对低空经济的敏锐洞察，从零开始探索无人机商业应用的可能。最初以基础航拍服务切入市场，在实战中积累经验、打磨技术。",
    icon: RocketLaunch,
  },
  {
    year: "2016",
    title: "设备升级 · 团队扩充",
    desc: "引进首批专业级航拍设备，团队扩充至5人核心成员。",
    detail:
      "随着业务需求的增长，公司进行了首次重大设备投资，引进了DJI Inspire系列专业级航拍无人机及配套影像系统。同时团队规模从初创的2人扩展至5人核心成员，涵盖飞手、摄影师和后期制作等关键岗位，初步形成了专业化分工体系。",
    icon: Buildings,
  },
  {
    year: "2018",
    title: "里程碑项目 · 标准化建立",
    desc: "完成首个大型城市宣传航拍项目，建立标准化作业流程。",
    detail:
      "2018年是极翼科技发展的关键转折点。我们成功承接并完成了首个大型城市级航拍宣传项目——重庆市某区县全域形象宣传片。项目的成功交付不仅验证了我们的技术实力，更推动公司建立了标准化的航拍作业SOP流程，包括空域申请、现场勘测、多机位协同、安全预案等全链路规范。",
    icon: Certificate,
  },
  {
    year: "2020",
    title: "全面拓展 · 七大领域",
    desc: "拓展至7大航拍服务领域，设备投资突破20万元。",
    detail:
      "疫情之下，航拍需求逆势上扬。公司抓住机遇，将服务范围系统化地扩展到七大领域：婚庆航拍、房地产宣传、活动赛事记录、城市品牌推广、企业宣传片制作、影视纪录片摄制以及工程项目记录。设备资产投资累计突破20万元，引入了更高端的影像设备和配件。",
    icon: CameraRotate,
  },
  {
    year: "2022",
    title: "创新突破 · 新兴业务",
    desc: "新增VR全景、无人机直播等创新服务线。",
    detail:
      "紧跟技术发展趋势，极翼科技正式布局创新业务线。VR全景拍摄服务为房地产和文旅客户提供了沉浸式的空间展示方案；无人机直播技术让赛事和活动的空中视角实时触达观众；编队表演业务的开展则为大型活动和庆典增添了震撼的视觉亮点。服务矩阵持续丰富。",
    icon: CubeTransparent,
  },
  {
    year: "2024",
    title: "规模跨越 · 千日见证",
    desc: "服务客户累计超过500家，完成项目2000+。",
    detail:
      "经过十年的深耕与沉淀，极翼科技迎来了规模上的重要里程碑。截至2024年底，累计服务客户超过500家，覆盖政府机构、房地产开发企业、文化传媒公司、婚庆服务机构等多种类型；完成的航拍项目数量突破2000个，积累了丰富的行业案例库和实战经验数据。",
    icon: ShootingStar,
  },
  {
    year: "2025",
    title: "智能升级 · AI赋能",
    desc: "启动智能化升级，引入AI后期处理流程。",
    detail:
      "站在新的起点，极翼科技正式启动智能化战略升级计划。引入AI辅助的后期处理工作流，包括智能去噪、自动调色、AI视频增强等技术应用，大幅提升交付效率与画质水准。同时积极探索低空经济新赛道，为下一个十年蓄力启航。",
    icon: Sparkle,
    isFuture: true,
  },
];

/* ========== 单个时间轴节点 ========== */
function TimelineNode({
  milestone,
  index,
  isActive,
  total,
  onToggle,
}: {
  milestone: Milestone;
  index: number;
  isActive: boolean;
  total: number;
  onToggle: () => void;
}) {
  const Icon = milestone.icon;
  const isLast = index === total - 1;
  const isFuture = !!milestone.isFuture;

  return (
    <div className="relative flex gap-6 sm:gap-10">
      {/* ===== 左侧：时间线 + 节点 ===== */}
      <div className="relative flex flex-col items-center shrink-0">
        {/* 竖线（渐变：从上到下） */}
        {!isLast && (
          <div
            className="absolute top-7 bottom-0 w-px"
            style={{
              background: isFuture
                ? "linear-gradient(to bottom, rgba(247,127,0,0.25), rgba(247,127,0,0.05))"
                : `linear-gradient(to bottom, ${
                    index < total - 2 ? "rgba(0,180,216,0.3)" : "rgba(0,180,216,0.15)"
                  }, ${isActive ? "rgba(0,180,216,0.35)" : "rgba(0,180,216,0.06)"})`,
            }}
          />
        )}

        {/* 节点圆点 */}
        <motion.button
          onClick={onToggle}
          layout
          className={`relative z-10 mt-1.5 flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 transition-all duration-300 ${
            isActive
              ? isFuture
                ? "border-aerial-orange bg-aerial-orange/15 shadow-lg shadow-aerial-orange/20 scale-110"
                : "border-tech-cyan bg-tech-cyan/12 shadow-lg shadow-tech-cyan/20 scale-110"
              : isFuture
                ? "border-aerial-orange/30 bg-space-blue hover:border-aerial-orange/50 hover:bg-aerial-orange/10"
                : "border-white/15 bg-space-blue/80 hover:border-tech-cyan/40 hover:bg-tech-cyan/[0.08]"
          }`}
          whileHover={{ scale: isActive ? 1.12 : 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* 内部实心圆 */}
          <motion.div
            layout
            className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
              isActive
                ? isFuture
                  ? "bg-aerial-orange"
                  : "bg-tech-cyan"
                : isFuture
                  ? "bg-aerial-orange/50"
                  : "bg-white/40"
            }`}
          />

          {/* 激活态发光脉冲环 */}
          {isActive && (
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.8, opacity: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              className={`absolute inset-0 rounded-full ${
                isFuture ? "bg-aerial-orange" : "bg-tech-cyan"
              } opacity-15`}
            />
          )}
        </motion.button>

        {/* 年份标签 */}
        <span
          className={`mt-2 text-xs font-mono font-bold tracking-wider transition-colors ${
            isActive
              ? isFuture
                ? "text-aerial-orange"
                : "text-tech-cyan"
              : isFuture
                ? "text-aerial-orange/50"
                : "text-muted-foreground"
          }`}
        >
          {milestone.year}
        </span>
      </div>

      {/* ===== 右侧：内容卡片 ===== */}
      <motion.div layout className="flex-1 pb-10 min-w-0">
        {/* 标题行（始终可见） */}
        <button
          onClick={onToggle}
          className="group flex w-full items-start gap-3 text-left"
        >
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
              isActive
                ? isFuture
                  ? "border-[#e65100]/30 bg-[#e65100]/6"
                  : "border-[#0077b6]/30 bg-[#0077b6]/6"
                : "border-[#cce0ed] bg-white group-hover:border-[#0077b6]/30 group-hover:shadow-sm"
            }`}
          >
            <Icon
              weight="duotone"
              size={22}
              className={`transition-colors duration-300 ${
                isActive
                  ? isFuture
                    ? "text-[#e65100]"
                    : "text-[#0077b6]"
                  : "text-[#557090] group-hover:text-[#0077b6]"
              }`}
            />
          </div>
          <div className="flex-1 min-w-0 pt-1.5">
            <h3
              className={`text-base font-heading font-semibold leading-snug transition-colors sm:text-lg ${
                isActive
                  ? isFuture
                    ? "text-[#e65100]"
                    : "text-[#1a2744]"
                  : "text-[#334155] group-hover:text-[#1a2744]"
              }`}
            >
              {milestone.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-1 sm:line-clamp-none">
              {milestone.desc}
            </p>
          </div>
          <motion.span
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="shrink-0 mt-2 text-muted-foreground/60"
          >
            <CaretDown weight="bold" size={18} />
          </motion.span>
        </button>

        {/* 展开详情区域 — 平滑手风琴动画 */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{
                opacity: 1,
                height: "auto",
                marginTop: 16,
              }}
              exit={{
                opacity: 0,
                height: 0,
                marginTop: 0,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                opacity: { duration: 0.25 },
              }}
              className="overflow-hidden"
            >
              <div
                className={`rounded-2xl border p-5 sm:p-6 ${
                  isActive
                    ? isFuture
                      ? "border-[#e65100]/20 shadow-lg shadow-[#e65100]/[0.06]"
                      : "border-[#0077b6]/20 shadow-lg shadow-[#0077b6]/[0.08]"
                    : ""
                }`}
              >
                {/* 卡片顶部色条 */}
                <div
                  className="mb-4 h-0.5 w-16 rounded-full"
                  style={{
                    backgroundColor: isFuture ? "#f77f00" : "#00b4d8",
                  }}
                />
                <p className="text-sm leading-relaxed text-[#334155] sm:text-base sm:leading-loose">
                  {milestone.detail}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

/* ========== 主组件：发展历程时间轴 ========== */
export default function TimelineSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = useCallback((index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* 微弱背景装饰 */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-0 top-1/4 h-[600px] w-[400px] rounded-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(ellipse at center, #00b4d8 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* 区块标题 */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-[#0077b6]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#0077b6]">OUR JOURNEY</span>
          <h2 className="text-3xl font-heading font-bold tracking-tight text-[#1a2744] sm:text-4xl lg:text-5xl">
            发展<span className="text-[#0077b6]">历程</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground sm:text-base">
            从2014年到今天，每一步都脚踏实地，每一次起飞都满怀热忱
          </p>
        </motion.div>

        {/* 时间轴主体 */}
        <div ref={containerRef} className="mx-auto max-w-3xl">
          {MILESTONES.map((milestone, i) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <TimelineNode
                milestone={milestone}
                index={i}
                isActive={activeIndex === i}
                total={MILESTONES.length}
                onToggle={() => handleToggle(i)}
              />
            </motion.div>
          ))}
        </div>

        {/* 底部装饰：时间轴末端标记 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-4 flex justify-center"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground/50">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-aerial-orange/30" />
            <Sparkle weight="fill" size={12} className="text-aerial-orange/40" />
            <span className="font-mono tracking-widest">CONTINUING</span>
            <Sparkle weight="fill" size={12} className="text-aerial-orange/40" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-aerial-orange/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
