"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useRef, useEffect, useState } from "react";
import {
  Buildings,
  UsersThree,
  MapPin,
  AirplaneTilt,
  ChartLineUp,
  ShieldCheck,
  Compass,
  Heart,
} from "@phosphor-icons/react/dist/ssr";
import { IMAGES } from "@/lib/images";

/* ---------- 公司关键数据 ---------- */
const STATS = [
  { value: "2014", label: "成立年份", icon: Buildings, color: "#0077B6", colorLight: "#00b4d8", position: "top" },
  { value: "500+", label: "服务客户", icon: UsersThree, color: "#06b6d4", colorLight: "#22d3ee", position: "top-right" },
  { value: "2000+", label: "完成项目", icon: ChartLineUp, color: "#f97316", colorLight: "#fb923c", position: "bottom-right" },
  { value: "30+", label: "覆盖城市", icon: MapPin, color: "#8b5cf6", colorLight: "#a78bfa", position: "bottom-left" },
  { value: "30万", label: "设备资产", icon: AirplaneTilt, color: "#10b981", colorLight: "#34d399", position: "top-left" },
];

function AnimatedNumber({ value }: { value: string }) {
  const numStr = value.replace(/[^0-9]/g, '');
  const suffix = value.replace(/[0-9]/g, '');
  const num = parseInt(numStr) || 0;
  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    const controls = animate(motionValue, num, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => { controls.stop(); unsubscribe(); };
  }, [motionValue, num]);

  return (
    <span className="font-mono">
      {displayValue}
      {suffix}
    </span>
  );
}

/* ========== 全宽 Hero 区 ========== */
function IntroHero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* 背景图 */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.aboutHero}
          alt="极翼科技团队办公场景"
          className="h-full w-full object-cover"
          loading="eager"
        />
        {/* 深色遮罩 — 确保文字可读 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#151c2c]/92 via-[#151c2c]/75 to-[#151c2c]/88" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1020]/50 via-transparent to-[#0a1020]/50" />
      </div>

      {/* 装饰性网格线 */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="heroGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#0077b6" strokeWidth="0.15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      {/* Hero 内容 */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-10 lg:py-36 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          {/* Overline 标签 */}
          <span className="mb-4 inline-block rounded-full bg-[#0077b6]/15 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[#0077b6]">
            WHO WE ARE
          </span>

          {/* 主标题 */}
          <h1 className="mb-6 text-4xl font-heading font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            重庆极翼无人飞行器
            <br />
            <span style={{ backgroundImage: "linear-gradient(135deg,#0077b6,#48cae4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              科技有限公司
            </span>
          </h1>

          {/* 副标题描述 */}
          <p className="mb-8 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            深耕无人机航拍领域十一载，我们是一支扎根重庆、服务西南的专业团队。
            从婚庆纪实到城市宣传片，从工程记录到影视级航拍——以天空为画布，
            用镜头书写每一个不凡的故事。
          </p>

          {/* 关键标签行 */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0077b6]/30 bg-[#0077b6]/12 px-3.5 py-1.5 text-xs font-semibold text-[#48cae4]">
              <AirplaneTilt weight="fill" size={13} />
              专业航拍服务商
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e65100]/30 bg-[#e65100]/10 px-3.5 py-1.5 text-xs font-semibold text-[#f97316]">
              <MapPin weight="fill" size={13} />
              重庆 · 西南地区
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-medium text-white/70">
              <ShieldCheck weight="fill" size={13} />
              11年+ 行业经验
            </span>
          </div>
        </motion.div>
      </div>

      {/* 底部渐变过渡到浅蓝底 */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#eef4f9] to-transparent" />
    </section>
  );
}

/* ========== 公司简介区：左文右数据 ========== */
function CompanyProfile() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="section-container py-20 lg:py-28">
      <div className="flex flex-col gap-14 lg:flex-row lg:gap-20">
        {/* ===== 左侧：公司详细介绍 ===== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1"
        >
          {/* 标题区 */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-1 w-8 rounded-full bg-[#0077b6]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077b6]">COMPANY PROFILE</span>
          </div>
          <h2 className="mb-6 text-2xl font-heading font-bold tracking-tight text-[#1a2744] sm:text-3xl lg:text-4xl">
            关于<span className="text-[#0077b6]">极翼</span>科技
          </h2>

          {/* 正文段落 — 深色文字在浅蓝底上 */}
          <div className="space-y-5 text-sm leading-relaxed text-[#334155] sm:text-base sm:leading-loose">
            <p>
              <strong className="font-semibold text-[#1a2744]">重庆极翼无人飞行器科技有限公司</strong>成立于2014年，
              是一家专注于无人机应用服务的科技创新型企业。十余年来，我们始终深耕于无人机航拍领域，
              以专业的飞手团队、精良的设备资产和标准化的作业流程，为政府机构、企事业单位及个人客户提供
              高品质的空中影像解决方案。
            </p>
            <p>
              我们的核心业务涵盖<strong className="font-semibold text-[#0077b6]">七大航拍服务领域</strong>：
              婚庆航拍、房地产宣传、活动赛事记录、城市品牌推广、企业宣传片制作、
              影视纪录片摄制以及工程项目记录。同时，我们积极拓展创新业务线，
              包括VR全景拍摄、无人机直播、编队表演、整机销售、植保服务和航测测绘等，
              构建了完整的无人机应用服务生态。
            </p>
            <p>
              公司拥有近<strong className="font-semibold text-[#e65100]">30万元</strong>专业无人机设备资产，
              服务范围覆盖重庆全域及西南主要城市。我们的团队由资深持证飞手和专业后期制作人员组成，
              具备完善的合规资质和丰富的实战经验。截至目前，已累计服务超过
              <strong className="font-semibold text-[#e65100]">500家</strong>客户，
              完成航拍项目<strong className="font-semibold text-[#e65100]">2000余个</strong>。
            </p>
          </div>

          {/* 业务领域标签云 */}
          <div className="mt-8 relative">
            <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0077B6] via-[#00b4d8] to-[#f77f00] rounded-full" />
            <div className="pl-4">
              <p className="text-xs font-semibold text-slate-500 mb-3 tracking-wider uppercase">业务领域 / Business Scope</p>
              <div className="flex flex-wrap gap-x-1.5 gap-y-2">
                {[
                  { label: "婚庆航拍", color: "#0077B6" },
                  { label: "房地产宣传", color: "#06b6d4" },
                  { label: "活动赛事", color: "#8b5cf6" },
                  { label: "城市宣传", color: "#10b981" },
                  { label: "企业品牌", color: "#f97316" },
                  { label: "影视纪录片", color: "#ec4899" },
                  { label: "工程记录", color: "#6366f1" },
                  { label: "VR全景", color: "#14b8a6" },
                  { label: "无人机直播", color: "#f59e0b" },
                  { label: "编队表演", color: "#ef4444" },
                  { label: "整机销售", color: "#84cc16" },
                  { label: "植保服务", color: "#06b6d4" },
                  { label: "航测服务", color: "#0077B6" },
                ].map((tag, i) => (
                  <motion.span
                    key={tag.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
                    className="relative group cursor-default"
                  >
                    <span 
                      className="relative z-10 block px-3.5 py-1.5 text-xs font-medium transition-all duration-300 group-hover:text-white"
                      style={{ 
                        color: tag.color,
                      }}
                    >
                      {tag.label}
                    </span>
                    <span 
                      className="absolute inset-0 rounded-full border transition-all duration-300 group-hover:scale-105"
                      style={{ 
                        borderColor: `${tag.color}30`,
                        backgroundColor: `${tag.color}08`,
                      }}
                    />
                    <span 
                      className="absolute inset-0 rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
                      style={{ backgroundColor: tag.color }}
                    />
                    <span 
                      className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: tag.color }}
                    />
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== 右侧：环绕式数据节点 ===== */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-[480px] xl:w-[520px] flex items-center justify-center"
        >
          <div className="relative w-full aspect-square max-w-[480px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0077B6] via-[#023E8A] to-[#03045E] shadow-2xl shadow-[#0077B6]/30" />
                <div className="absolute -inset-4 rounded-full border border-[#0077B6]/20 animate-pulse" />
                <div className="absolute -inset-8 rounded-full border border-[#0077B6]/10" />
                
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
                    backgroundSize: '12px 12px'
                  }}
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                  <div className="w-12 h-12 mb-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <AirplaneTilt weight="duotone" size={26} className="text-white" />
                  </div>
                  <p className="text-xs text-white/60 tracking-widest uppercase mb-1">Core Data</p>
                  <p className="text-sm font-medium text-white/80">核心数据</p>
                </div>
              </div>
            </div>

            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0077B6" />
                  <stop offset="100%" stopColor="#00b4d8" />
                </linearGradient>
                <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="70" fill="none" stroke="#0077B6" strokeWidth="0.5" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="50" fill="none" stroke="#00b4d8" strokeWidth="0.5" strokeDasharray="2 4" />
            </svg>

            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              const positions: Record<string, string> = {
                'top': 'top-0 left-1/2 -translate-x-1/2',
                'top-right': 'top-[15%] right-0',
                'bottom-right': 'bottom-[15%] right-0',
                'bottom-left': 'bottom-[15%] left-0',
                'top-left': 'top-[15%] left-0',
              };
              
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: 0.35 + i * 0.12,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  className={`absolute ${positions[stat.position]} z-20`}
                >
                  <div className="group relative">
                    <div className="absolute -inset-2 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{ backgroundColor: stat.color }} />
                    
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-white to-slate-50 shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center mb-1"
                        style={{ backgroundColor: `${stat.color}15` }}
                      >
                        <Icon weight="duotone" size={20} style={{ color: stat.color }} />
                      </div>
                      <span className="text-lg md:text-xl font-black font-mono leading-none" style={{ color: stat.color }}>
                        <AnimatedNumber value={stat.value} />
                      </span>
                    </div>
                    
                    <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 whitespace-nowrap">
                      <span className="text-xs font-semibold text-slate-600 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-200/60 shadow-sm">
                        {stat.label}
                      </span>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-slate-200/50 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125" />
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              animate={isInView ? { opacity: 1, rotate: 0 } : {}}
              transition={{ delay: 1, duration: 1, ease: "easeOut" }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full"
            >
              <div className="relative mx-auto w-fit">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#f97316]/20 to-[#fb923c]/20 rounded-full blur-xl" />
                <div className="relative bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white px-6 py-2.5 rounded-full shadow-lg shadow-[#f97316]/25">
                  <span className="text-sm font-bold">30万设备资产 · 专业保障</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ========== 使命 / 愿景 / 价值观 三列卡片（完全硬编码，无条件渲染） ========== */
function CultureCards() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <section ref={ref} className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f8fafc] via-white to-[#f0f4f8]" />

      <div className="section-container relative z-10">
        {/* 标题 */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full bg-[#0077b6]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#0077b6]">
            OUR CULTURE
          </span>
          <h2 className="mt-3 text-3xl font-heading font-bold tracking-tight text-[#1e293b] sm:text-4xl">
            企业<span className="text-[#0077b6]">文化</span>
          </h2>
          <p className="mt-3 mx-auto max-w-lg text-sm text-[#64748b]">
            驱动我们前行的核心理念与价值追求
          </p>
        </motion.div>

        {/* ====== 三列卡片（直接展开写死） ====== */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* ═══════ 卡片1：使命 ═══════ */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15, duration: 0.55 }} className="group">
            <div className="relative h-full overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-200/50 border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/60">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0077B6] via-[#00b4d8] to-[#0077B6]" />
              
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[#00b4d8]/5 blur-3xl group-hover:bg-[#00b4d8]/10 transition-all duration-700" />
              
              <div className="relative p-7">
                <div className="mb-6 flex items-start gap-4">
                  <div className="relative">
                    <div className="absolute -inset-1.5 bg-[#0077B6]/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0077B6] to-[#023E8A] flex items-center justify-center shadow-lg shadow-[#0077B6]/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Compass weight="duotone" size={28} className="text-white" />
                    </div>
                  </div>
                  <div className="min-w-0 pt-1">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#0077b6]">MISSION</span>
                    <h3 className="mt-1 text-xl font-heading font-bold text-[#1e293b]">使命</h3>
                  </div>
                </div>

                <ul className="mb-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-[#0077b6]" />
                    <span className="text-sm leading-relaxed text-[#334155]">以极致视角，记录每一份珍贵瞬间</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-[#0077b6]" />
                    <span className="text-sm leading-relaxed text-[#334155]">用无人机航拍技术创造超越预期的视觉价值</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-[#0077b6]" />
                    <span className="text-sm leading-relaxed text-[#334155]">让每一次飞行都成为值得铭记的作品</span>
                  </li>
                </ul>

                <div className="relative rounded-2xl bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] p-4 overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[#00b4d8]/10 blur-xl" />
                  <p className="relative text-center text-sm font-semibold text-[#0077b6] italic">
                    &ldquo;天空为画布 · 镜头书写不凡&rdquo;
                  </p>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0077b6]/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#0077b6]/15" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#0077b6]/10" />
              </div>
            </div>
          </motion.div>

          {/* ═══════ 卡片2：愿景 ═══════ */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.27, duration: 0.55 }} className="group">
            <div className="relative h-full overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-200/50 border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/60">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0369a1] via-[#0284c7] to-[#0369a1]" />
              
              <div className="absolute -top-20 -left-20 w-48 h-48 rounded-full bg-[#0284c7]/5 blur-3xl group-hover:bg-[#0284c7]/10 transition-all duration-700" />
              
              <div className="relative p-7">
                <div className="mb-6 flex items-start gap-4">
                  <div className="relative">
                    <div className="absolute -inset-1.5 bg-[#0369a1]/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0284c7] to-[#0c4a6e] flex items-center justify-center shadow-lg shadow-[#0369a1]/25 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                      <ShieldCheck weight="duotone" size={28} className="text-white" />
                    </div>
                  </div>
                  <div className="min-w-0 pt-1">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#0369a1]">VISION</span>
                    <h3 className="mt-1 text-xl font-heading font-bold text-[#1e293b]">愿景</h3>
                  </div>
                </div>

                <ul className="mb-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-[#0369a1]" />
                    <span className="text-sm leading-relaxed text-[#334155]">成为重庆乃至西南地区最受信赖的航拍服务伙伴</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-[#0369a1]" />
                    <span className="text-sm leading-relaxed text-[#334155]">构建完整的无人机应用服务生态体系</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-[#0369a1]" />
                    <span className="text-sm leading-relaxed text-[#334155]">推动航拍技术普惠化、专业化发展</span>
                  </li>
                </ul>

                <div className="relative rounded-2xl bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] p-4 overflow-hidden">
                  <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-[#0284c7]/10 blur-xl" />
                  <p className="relative text-center text-sm font-semibold text-[#0369a1] italic">
                    &ldquo;扎根山城 · 服务西南 · 走向全国&rdquo;
                  </p>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0369a1]/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#0369a1]/15" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#0369a1]/10" />
              </div>
            </div>
          </motion.div>

          {/* ═══════ 卡片3：价值观 ═══════ */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.39, duration: 0.55 }} className="group">
            <div className="relative h-full overflow-hidden rounded-3xl bg-white shadow-lg shadow-slate-200/50 border border-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/60">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#e65100] via-[#f97316] to-[#e65100]" />
              
              <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-[#f97316]/5 blur-3xl group-hover:bg-[#f97316]/10 transition-all duration-700" />
              
              <div className="relative p-7">
                <div className="mb-6 flex items-start gap-4">
                  <div className="relative">
                    <div className="absolute -inset-1.5 bg-[#e65100]/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f97316] to-[#c2410c] flex items-center justify-center shadow-lg shadow-[#e65100]/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Heart weight="duotone" size={28} className="text-white" />
                    </div>
                  </div>
                  <div className="min-w-0 pt-1">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#e65100]">VALUES</span>
                    <h3 className="mt-1 text-xl font-heading font-bold text-[#1e293b]">价值观</h3>
                  </div>
                </div>

                <div className="mb-6 grid grid-cols-2 gap-3">
                  <div className="relative rounded-xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-3.5 transition-all hover:border-orange-200 hover:shadow-md overflow-hidden">
                    <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-orange-200/30 blur-lg" />
                    <p className="relative text-sm font-bold text-[#1e293b]">专业至上</p>
                    <p className="relative mt-1 text-[11px] leading-relaxed text-slate-500">十一年深耕，技艺精进</p>
                  </div>
                  <div className="relative rounded-xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-3.5 transition-all hover:border-orange-200 hover:shadow-md overflow-hidden">
                    <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-orange-200/30 blur-lg" />
                    <p className="relative text-sm font-bold text-[#1e293b]">安全第一</p>
                    <p className="relative mt-1 text-[11px] leading-relaxed text-slate-500">合规飞行，万无一失</p>
                  </div>
                  <div className="relative rounded-xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-3.5 transition-all hover:border-orange-200 hover:shadow-md overflow-hidden">
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-orange-200/30 blur-lg" />
                    <p className="relative text-sm font-bold text-[#1e293b]">客户为先</p>
                    <p className="relative mt-1 text-[11px] leading-relaxed text-slate-500">倾听需求，超越期待</p>
                  </div>
                  <div className="relative rounded-xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-3.5 transition-all hover:border-orange-200 hover:shadow-md overflow-hidden">
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-orange-200/30 blur-lg" />
                    <p className="relative text-sm font-bold text-[#1e293b]">持续精进</p>
                    <p className="relative mt-1 text-[11px] leading-relaxed text-slate-500">拥抱技术，永不止步</p>
                  </div>
                </div>

                <div className="relative rounded-2xl bg-gradient-to-br from-[#fff7ed] to-[#ffedd5] p-4 overflow-hidden">
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-[#f97316]/10 blur-xl" />
                  <p className="relative text-center text-sm font-semibold text-[#e65100] italic">
                    &ldquo;以诚为本 · 以质取胜&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ========== 主组件导出 ========== */
export default function CompanyIntro() {
  return (
    <>
      <IntroHero />
      <CompanyProfile />
      <CultureCards />
    </>
  );
}
