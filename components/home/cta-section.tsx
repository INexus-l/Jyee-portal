"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import Link from "next/link";
import { Phone, AirplaneTilt, PaperPlaneTilt, Clock, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { BackgroundBeams } from "@/components/ui/background-beams";

/* 底部转化区 — 增强版CTA行动召唤 */
export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length >= 11) {
      setIsSubmitted(true);
      // 这里可以添加实际的提交逻辑
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* 深色背景 */}
      <div className="absolute inset-0 bg-[#e8f1f8]" />

      {/* 光束氛围层 */}
      <BackgroundBeams className="opacity-25" />

      {/* 网格透视纹理 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,180,216,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,180,216,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          perspective: "500px",
          transform: "perspective(500px) rotateX(30deg)",
          transformOrigin: "center top",
        }}
      />

      {/* 地形等高线装饰 */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-topo" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M0 60 Q30 40 60 60 T120 60" fill="none" stroke="#f77f00" strokeWidth="0.4"/>
              <path d="M0 30 Q30 50 60 30 T120 30" fill="none" stroke="#00b4d8" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-topo)" />
        </svg>
      </div>

      {/* 径向渐变装饰 */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 80%, rgba(247, 127, 0, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(0, 180, 216, 0.06) 0%, transparent 50%)
          `,
        }}
      />

      {/* 主内容区 */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mb-6 text-center"
        >
          <span className="overline-label">READY TO TAKE OFF?</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center text-4xl font-heading font-bold leading-tight text-[#1a2744] sm:text-5xl lg:text-6xl"
        >
          开启您的
          <br />
          <span className="gradient-text-warm">航拍项目</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.45 }}
          className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          无论您需要婚庆记录、企业宣传还是影视创作，我们都将为您提供专业的航拍解决方案。
          <br />
          立即联系我们，获取免费项目评估与报价。
        </motion.p>

        {/* 优势特点展示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.45 }}
          className="mx-auto mt-8 flex max-w-lg flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <CheckCircle weight="duotone" size={18} className="text-tech-cyan" />
            <span>免费咨询</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock weight="duotone" size={18} className="text-tech-cyan" />
            <span>10分钟响应</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle weight="duotone" size={18} className="text-tech-cyan" />
            <span>专业团队</span>
          </div>
        </motion.div>

        {/* 表单输入区 */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.45 }}
          className="mx-auto mt-10 max-w-xl"
        >
          <div className="glass-card glow-border rounded-2xl p-6">
            {!isSubmitted ? (
              <>
                <label htmlFor="phone-input" className="mb-3 block text-center text-sm font-medium text-muted-foreground">
                  输入您的手机号，我们将在10分钟内联系您
                </label>
                <div className="flex gap-3">
                  <input
                    id="phone-input"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 11))}
                    placeholder="请输入手机号码"
                    maxLength={11}
                    className="flex-1 rounded-xl border border-[#cce0ed] bg-white px-4 py-3.5 text-base text-slate-800 placeholder:text-slate-400 transition-all focus:border-tech-cyan/40 focus:outline-none focus:ring-2 focus:ring-tech-cyan/20"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={phoneNumber.length < 11}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-aerial-orange to-aerial-orange-light px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-aerial-orange/25 transition-all hover:shadow-xl hover:shadow-aerial-orange/30 disabled:cursor-not-allowed disabled:opacity-50 sm:px-8"
                  >
                    <PaperPlaneTilt weight="bold" size={20} />
                    立即提交
                  </motion.button>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center py-4"
              >
                <CheckCircle weight="duotone" size={48} className="mb-3 text-emerald-400" />
                <p className="text-lg font-semibold text-[#1a2744]">提交成功！</p>
                <p className="mt-1 text-sm text-muted-foreground">我们的专业顾问将在10分钟内与您联系</p>
              </motion.div>
            )}
          </div>
        </motion.form>

        {/* 电话号码展示 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.45 }}
          className="mt-8 text-center"
        >
          <p className="mb-2 text-xs text-muted-foreground/60">或直接致电</p>
          <a
            href="tel:15023055582"
            className="group inline-flex items-center gap-3 font-mono text-2xl font-medium tracking-wide text-tech-cyan transition-colors hover:text-neon-glow sm:text-3xl"
          >
            <Phone weight="duotone" size={28} className="transition-transform group-hover:rotate-12" />
            150-2305-5582
          </a>
        </motion.div>

        {/* CTA主按钮（备选） */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.45 }}
          className="mt-8 text-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-aerial-orange/25 transition-all hover:shadow-xl hover:shadow-aerial-orange/30 hover:-translate-y-0.5"
            style={{ background: "var(--gradient-cta)" }}
          >
            <AirplaneTilt weight="duotone" size={22} />
            免费获取详细方案
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>

        {/* 备选文字 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55, duration: 0.4 }}
          className="mt-6 text-center text-xs text-muted-foreground/60"
        >
          工作时间：周一至周日 09:00–18:00 · 全年无休为您服务
        </motion.p>
      </div>
    </section>
  );
}
