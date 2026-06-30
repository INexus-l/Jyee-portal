"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  GraduationCap,
  Camera,
  MapPin,
  Certificate,
  ArrowRight,
  TrendUp,
} from "@phosphor-icons/react/dist/ssr";

/* 为什么选择极翼 — 航空公司级信任背书展示 */
const REASONS = [
  {
    icon: GraduationCap,
    title: "科班出身",
    overline: "PROFESSIONAL BACKGROUND",
    description:
      "创始人系大学航空模型协会创办人，科班飞控手出身。从航模到无人机，十余年飞行经验积淀，每一次起飞都源于对飞行的热爱与专业。",
  },
  {
    icon: Camera,
    title: "影视级品质",
    overline: "CINEMA-GRADE QUALITY",
    description:
      "配备RED、A7S3、5D Mark IV等专业级影像设备，支持6K/8K高分辨率录制，电影级画质输出，为您的项目提供极致视觉呈现。",
  },
  {
    icon: MapPin,
    title: "本土深耕",
    overline: "LOCAL EXPERTISE",
    description:
      "重庆本地11年深耕，熟悉山城每一处地标与拍摄点位。从解放碑到洪崖洞，从两江四岸到武隆天坑，我们比任何人都更懂这座城。",
  },
  {
    icon: Certificate,
    title: "合规运营",
    overline: "COMPLIANT OPERATION",
    description:
      "重庆市科技型企业认证，资质齐全。严格遵循民航局空域管理规定，全流程合规报备，让您安心享受专业航拍服务。",
  },
];

const STATS = [
  { value: "500+", label: "完成项目" },
  { value: "98%", label: "客户好评率" },
  { value: "11年", label: "行业经验" },
  { value: "30万+", label: "设备资产" },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28"
      style={{ backgroundColor: "#f8fafc" }}
    >
      {/* 标题 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative mb-14 text-center md:mb-16"
      >
        <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em]" style={{ color: "#0891b2" }}>
          WHY CHOOSE US
        </span>
        <h2 className="mt-2 text-[28px] font-heading font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-[42px]" style={{ color: "#0f172a" }}>
          为什么选择极翼
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed md:text-base" style={{ color: "#475569" }}>
          四大核心优势，让我们成为您值得信赖的航拍合作伙伴
        </p>
        <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400" />
      </motion.div>

      {/* ========== 2×2 网格卡片 ========== */}
      <div className="mx-auto grid max-w-6xl gap-5 px-5 sm:grid-cols-2 sm:gap-6 md:px-8 lg:gap-7">
        {REASONS.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.15 * index,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-350 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-xl hover:shadow-slate-200/60 md:p-8"
            onClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
          >
            {/* 图标 */}
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100/60 transition-transform duration-300 group-hover:scale-105">
              <item.icon
                weight="duotone"
                size={32}
                className="text-cyan-600"
              />
            </div>

            {/* 英文副标题 */}
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              {item.overline}
            </span>

            {/* 中文标题 */}
            <h3 className="mt-1.5 text-lg font-bold tracking-tight text-slate-900 md:text-xl">
              {item.title}
            </h3>

            {/* 分隔线 */}
            <div className="my-4 h-px w-full bg-gradient-to-r from-slate-200 via-slate-200 to-transparent" />

            {/* 描述文字 - 可展开 */}
            <p
              className={`text-sm leading-relaxed text-slate-500 transition-all duration-350 ${
                expandedIndex === index
                  ? "line-clamp-none"
                  : "line-clamp-3"
              }`}
            >
              {item.description}
            </p>

            {/* 了解更多提示 */}
            <div className="mt-4 flex items-center justify-end gap-1.5 text-xs font-medium text-cyan-600 opacity-70 transition-opacity duration-250 group-hover:opacity-100">
              <span>了解更多</span>
              <ArrowRight
                size={13}
                weight="bold"
                className={`transition-transform duration-300 ${
                  expandedIndex === index ? "rotate-90" : ""
                }`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* ========== 底部数据条 — 深色成就徽章 ========== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          delay: 0.75,
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto mt-14 max-w-6xl overflow-hidden rounded-2xl px-6 py-10 md:mt-16 md:px-10 md:py-12"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #1e293b 100%)",
        }}
      >
        {/* 背景装饰光晕 */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -left-20 top-0 h-full w-40 bg-gradient-to-r from-cyan-500/10 to-transparent blur-2xl" />
          <div className="absolute -right-20 top-0 h-full w-40 bg-gradient-to-l from-teal-500/10 to-transparent blur-2xl" />
        </div>

        <div className="relative flex flex-wrap items-center justify-around gap-8 sm:flex-nowrap">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: 0.9 + index * 0.1,
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center"
            >
              {/* 趋势图标 */}
              <TrendUp
                size={18}
                weight="bold"
                className="mb-2 text-cyan-400"
              />
              {/* 数值 */}
              <div className="text-3xl font-heading font-bold tracking-tight text-white sm:text-4xl md:text-[42px]">
                {stat.value}
              </div>
              {/* 标签 */}
              <div className="mt-1.5 text-xs font-medium tracking-wide text-slate-400 sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
