"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Certificate,
  SealCheck,
  Handshake,
  Trophy,
  Medal,
  Star,
  AirTrafficControl,
  FilmStrip,
  Network,
  Drone,
} from "@phosphor-icons/react/dist/ssr";

/* ---------- 资质认证数据 ---------- */
interface CertItem {
  name: string;
  issuer: string;
  icon: typeof Certificate;
  status: "valid" | "pending";
}

const CERTIFICATIONS: CertItem[] = [
  {
    name: "民用无人机驾驶航空器经营许可证",
    issuer: "中国民用航空局",
    icon: AirTrafficControl,
    status: "valid",
  },
  {
    name: "无人机驾驶员执照（CAAC）",
    issuer: "中国民航局飞行标准司",
    icon: Drone,
    status: "valid",
  },
  {
    name: "广播电视节目制作经营许可",
    issuer: "重庆市文化和旅游发展委员会",
    icon: FilmStrip,
    status: "valid",
  },
  {
    name: "网络文化经营许可证",
    issuer: "重庆市新闻出版局",
    icon: Network,
    status: "valid",
  },
  {
    name: "重庆市科技型企业认证",
    issuer: "重庆市科学技术厅",
    icon: SealCheck,
    status: "valid",
  },
  {
    name: "影视工业网认证会员",
    issuer: "影视工业网",
    icon: Certificate,
    status: "valid",
  },
];

/* ---------- 合作伙伴数据（含品牌色+首字母）---------- */
interface PartnerItem {
  name: string;
  nameEn: string;
  category: string;
  initial: string;
  brandColor: string;
  bgColor: string;
}

const PARTNERS: PartnerItem[] = [
  { name: "重庆文旅集团", nameEn: "CQ CULTURE & TOURISM", category: "政府机构", initial: "文旅", brandColor: "#c41e3a", bgColor: "#fef2f2" },
  { name: "龙湖地产", nameEn: "LONGFOR", category: "房地产", initial: "龙湖", brandColor: "#e65100", bgColor: "#fff7ed" },
  { name: "万科重庆", nameEn: "VANKE", category: "房地产", initial: "万科", brandColor: "#0077b6", bgColor: "#f0f9ff" },
  { name: "重庆电视台", nameEn: "CQ TV", category: "媒体传播", initial: "重视", brandColor: "#b91c1c", bgColor: "#fef2f2" },
  { name: "华熙文化体育中心", nameEn: "HUAXI LIVE", category: "文体场馆", initial: "华熙", brandColor: "#7c3aed", bgColor: "#f5f3ff" },
  { name: "融创西南", nameEn: "SUNAC SW", category: "房地产开发", initial: "融创", brandColor: "#dc2626", bgColor: "#fef2f2" },
  { name: "重庆大学", nameEn: "CQU", category: "教育科研", initial: "重大", brandColor: "#15803d", bgColor: "#f0fdf4" },
  { name: "武隆喀斯特景区", nameEn: "WULONG KARST", category: "旅游景区", initial: "武隆", brandColor: "#0369a1", bgColor: "#eff6ff" },
];

/* ---------- 荣誉奖项数据 ---------- */
interface HonorItem {
  title: string;
  year: string;
  org: string;
  icon: typeof Trophy;
}

const HONORS: HonorItem[] = [
  {
    title: "年度优秀航拍服务团队",
    year: "2024",
    org: "重庆影视行业协会",
    icon: Trophy,
  },
  {
    title: "科技创新企业奖",
    year: "2023",
    org: "重庆市科技局",
    icon: Medal,
  },
  {
    title: "行业诚信经营示范单位",
    year: "2022",
    org: "重庆市市场监督管理局",
    icon: SealCheck,
  },
  {
    title: "最佳航拍作品金奖",
    year: "2021",
    org: "中国航拍大赛组委会",
    icon: Star,
  },
];

/* ========== 资质认证卡片网格 ========== */
function CertificationGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <div ref={ref} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {CERTIFICATIONS.map((cert, i) => {
        const Icon = cert.icon;
        return (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: i * 0.07,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group"
          >
            <div className="h-full overflow-hidden rounded-xl border border-[#cce0ed] bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#0077b6]/35 hover:shadow-md hover:-translate-y-0.5 sm:p-6">
              {/* 图标 + 状态徽章 */}
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0077b6]/8 transition-colors group-hover:bg-[#0077b6]/14">
                  <Icon
                    weight="duotone"
                    size={24}
                    className="text-[#0077b6]"
                  />
                </div>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                    cert.status === "valid"
                      ? "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200"
                      : "bg-amber-50 text-amber-600 ring-1 ring-amber-200"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      cert.status === "valid" ? "bg-emerald-500" : "bg-amber-500"
                    }`}
                  />
                  {cert.status === "valid" ? "有效" : "审核中"}
                </span>
              </div>

              {/* 名称 */}
              <h4 className="mb-2 text-sm font-heading font-semibold leading-snug text-[#1a2744] sm:text-base">
                {cert.name}
              </h4>

              {/* 发放机关 */}
              <p className="text-xs text-[#557090]">{cert.issuer}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ========== 合作伙伴 Logo 展示区（大品牌卡风格）========== */
function PartnersShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref}>
      {/* 子标题行 */}
      <div className="mb-10 flex items-center gap-3">
        <Handshake
          weight="duotone"
          size={24}
          className="text-[#e65100]"
        />
        <h3 className="text-xl font-heading font-semibold text-[#1a2744]">
          合作<span className="text-[#e65100]">伙伴</span>
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-[#cce0ed] to-transparent" />
        <span className="rounded-full bg-[#e65100]/10 px-3 py-1 text-xs font-semibold text-[#e65100]">
          {PARTNERS.length} 家
        </span>
      </div>

      {/* 合作伙伴网格 — 大品牌Logo卡 */}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-4">
        {PARTNERS.map((partner, i) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.1 + i * 0.06,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group"
          >
            <div
              className="flex flex-col items-center overflow-hidden rounded-2xl border border-[#dde8ef] bg-white p-6 transition-all duration-300 hover:border-[#0077b6]/35 hover:shadow-lg hover:-translate-y-1 hover:shadow-[#0077b6]/8"
            >
              {/* 品牌Logo区域 — 大尺寸圆角矩形，品牌色底 */}
              <div
                className="mb-4 flex h-20 w-full items-center justify-center rounded-xl transition-all duration-300 group-hover:shadow-md"
                style={{
                  background: `linear-gradient(135deg, ${partner.bgColor}, white)`,
                  border: `1.5px solid ${partner.brandColor}18`,
                }}
              >
                {/* 品牌首字/缩写 — 大号粗体 */}
                <span
                  className="text-2xl font-heading font-black tracking-tight transition-transform duration-300 group-hover:scale-110 sm:text-3xl"
                  style={{ color: partner.brandColor }}
                >
                  {partner.initial}
                </span>
              </div>

              {/* 中文名称 */}
              <span className="text-center text-sm font-bold leading-tight text-[#1a2744] transition-colors group-hover:text-[#0077b6]">
                {partner.name}
              </span>

              {/* 英文名称/简称 */}
              <span className="mt-1 text-center text-[10px] font-medium uppercase tracking-wider text-[#94a3b8]">
                {partner.nameEn}
              </span>

              {/* 分类标签 */}
              <span
                className="mt-2.5 rounded-full px-2.5 py-0.5 text-[10px] font-medium"
                style={{
                  color: partner.brandColor,
                  backgroundColor: partner.bgColor,
                }}
              >
                {partner.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ========== 荣誉奖项时间线 ========== */
function HonorsTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="mt-16">
      {/* 子标题行 */}
      <div className="mb-8 flex items-center gap-3">
        <Trophy
          weight="duotone"
          size={22}
          className="text-[#0077b6]"
        />
        <h3 className="text-lg font-heading font-semibold text-[#1a2744]">
          荣誉<span className="text-[#0077b6]">奖项</span>
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-[#cce0ed] to-transparent" />
        <span className="text-xs text-[#94a3b8]">{HONORS.length} 项</span>
      </div>

      {/* 奖项列表 */}
      <div className="space-y-3">
        {HONORS.map((honor, i) => {
          const Icon = honor.icon;
          return (
            <motion.div
              key={honor.title}
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                delay: 0.15 + i * 0.08,
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-xl border border-[#cce0ed] bg-white transition-all duration-300 hover:border-[#0077b6]/35 hover:shadow-md"
            >
              <div className="flex items-center gap-4 p-4 sm:p-5">
                {/* 年份标签 */}
                <div className="shrink-0 text-center">
                  <span className="block text-lg font-mono font-bold leading-none text-[#0077b6]">
                    {honor.year}
                  </span>
                  <span className="mt-1 block h-px w-6 bg-[#0077b6]/25 mx-auto" />
                </div>

                {/* 图标 */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0077b6]/8">
                  <Icon
                    weight="duotone"
                    size={20}
                    className="text-[#0077b6]/80 transition-colors group-hover:text-[#0077b6]"
                  />
                </div>

                {/* 内容 */}
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-heading font-semibold text-[#1a2744] sm:text-base">
                    {honor.title}
                  </h4>
                  <p className="mt-0.5 text-xs text-[#557090]">{honor.org}</p>
                </div>
              </div>

              {/* 左侧色条（hover时显示） */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#0077b6] via-[#48cae4] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ========== 主组件：资质荣誉墙 ========== */
export default function CertificationsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="relative overflow-hidden bg-[#f5f9fc] py-20 lg:py-28">
      {/* 微弱背景氛围 */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-0 top-1/3 h-[500px] w-[450px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(ellipse at center, #e65100 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -left-32 bottom-1/4 h-[350px] w-[350px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(ellipse at center, #0077b6 0%, transparent 70%)",
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
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-[#0077b6]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#0077b6]">
            CERTIFICATIONS & HONORS
          </span>
          <h2 className="mt-3 text-3xl font-heading font-bold tracking-tight text-[#1a2744] sm:text-4xl lg:text-5xl">
            资质<span className="text-[#e65100]">荣誉</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-[#557090] sm:text-base">
            多项权威资质认证与行业荣誉，为每一次安全飞行提供坚实保障
          </p>
        </motion.div>

        {/* Part 1: 资质认证卡片网格 */}
        <CertificationGrid />

        {/* Part 2: 合作伙伴展示 */}
        <div className="mt-16">
          <PartnersShowcase />
        </div>

        {/* Part 3: 荣誉奖项 */}
        <HonorsTimeline />
      </div>
    </section>
  );
}
