"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Compass,
  ShieldCheck,
  Heart,
} from "@phosphor-icons/react/dist/ssr";

/* ========== 企业文化（独立组件，用于 about 页面底部） ========== */
export default function CultureSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <section ref={ref} className="relative overflow-hidden py-20 lg:py-28">
      {/* 背景 */}
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

        {/* ====== 三列卡片（完全硬编码） ====== */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* ═══════ 卡片1：使命 ═══════ */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15, duration: 0.55 }} className="group">
            <div className="relative h-full overflow-hidden rounded-2xl border-[#0077b640] bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#0077b680]">
              <div className="absolute left-0 top-0 bottom-0 w-1 origin-top bg-[#0077b6] transition-transform duration-300 group-hover:scale-y-110" />

              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f0f9ff] shadow-sm group-hover:shadow-md">
                  <Compass weight="duotone" size={26} color="#0077b6" />
                </div>
                <div className="min-w-0 pt-0.5">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#0077b6]">MISSION</span>
                  <h3 className="mt-0.5 text-lg font-heading font-bold text-[#1e293b]">使命</h3>
                </div>
              </div>

              <ul className="mb-5 space-y-2.5">
                <li className="flex items-start gap-2.5"><span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0077b6]" /><span className="text-sm leading-relaxed text-[#334155]">以极致视角，记录每一份珍贵瞬间</span></li>
                <li className="flex items-start gap-2.5"><span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0077b6]" /><span className="text-sm leading-relaxed text-[#334155]">用无人机航拍技术创造超越预期的视觉价值</span></li>
                <li className="flex items-start gap-2.5"><span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0077b6]" /><span className="text-sm leading-relaxed text-[#334155]">让每一次飞行都成为值得铭记的作品</span></li>
              </ul>

              <div className="rounded-lg bg-[#f0f9ff] px-4 py-2.5 text-center text-xs font-medium italic text-[#0077b6]">
                &ldquo;天空为画布 · 镜头书写不凡&rdquo;
              </div>
            </div>
          </motion.div>

          {/* ═══════ 卡片2：愿景 ═══════ */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.27, duration: 0.55 }} className="group">
            <div className="relative h-full overflow-hidden rounded-2xl border-[#0369a140] bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#0369a180]">
              <div className="absolute left-0 top-0 bottom-0 w-1 origin-top bg-[#0369a1] transition-transform duration-300 group-hover:scale-y-110" />

              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eff6ff] shadow-sm group-hover:shadow-md">
                  <ShieldCheck weight="duotone" size={26} color="#0369a1" />
                </div>
                <div className="min-w-0 pt-0.5">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#0369a1]">VISION</span>
                  <h3 className="mt-0.5 text-lg font-heading font-bold text-[#1e293b]">愿景</h3>
                </div>
              </div>

              <ul className="mb-5 space-y-2.5">
                <li className="flex items-start gap-2.5"><span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0369a1]" /><span className="text-sm leading-relaxed text-[#334155]">成为重庆乃至西南地区最受信赖的航拍服务伙伴</span></li>
                <li className="flex items-start gap-2.5"><span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0369a1]" /><span className="text-sm leading-relaxed text-[#334155]">构建完整的无人机应用服务生态体系</span></li>
                <li className="flex items-start gap-2.5"><span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0369a1]" /><span className="text-sm leading-relaxed text-[#334155]">推动航拍技术普惠化、专业化发展</span></li>
              </ul>

              <div className="rounded-lg bg-[#eff6ff] px-4 py-2.5 text-center text-xs font-medium italic text-[#0369a1]">
                &ldquo;扎根山城 · 服务西南 · 走向全国&rdquo;
              </div>
            </div>
          </motion.div>

          {/* ═══════ 卡片3：价值观 ═══════ */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.39, duration: 0.55 }} className="group">
            <div className="relative h-full overflow-hidden rounded-2xl border-[#e6510040] bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#e6510080]">
              <div className="absolute left-0 top-0 bottom-0 w-1 origin-top bg-[#e65100] transition-transform duration-300 group-hover:scale-y-110" />

              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fff7ed] shadow-sm group-hover:shadow-md">
                  <Heart weight="duotone" size={26} color="#e65100" />
                </div>
                <div className="min-w-0 pt-0.5">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#e65100]">VALUES</span>
                  <h3 className="mt-0.5 text-lg font-heading font-bold text-[#1e293b]">价值观</h3>
                </div>
              </div>

              <div className="mb-5 grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-[#e6510020] bg-[#fff7ed80] p-2.5 transition-colors hover:border-[#e6510060]">
                  <p className="text-xs font-semibold text-[#1e293b]">专业至上</p>
                  <p className="mt-0.5 text-[10px] leading-relaxed text-[#64748b]">十一年深耕，技艺精进</p>
                </div>
                <div className="rounded-lg border border-[#e6510020] bg-[#fff7ed80] p-2.5 transition-colors hover:border-[#e6510060]">
                  <p className="text-xs font-semibold text-[#1e293b]">安全第一</p>
                  <p className="mt-0.5 text-[10px] leading-relaxed text-[#64748b]">合规飞行，万无一失</p>
                </div>
                <div className="rounded-lg border border-[#e6510020] bg-[#fff7ed80] p-2.5 transition-colors hover:border-[#e6510060]">
                  <p className="text-xs font-semibold text-[#1e293b]">客户为先</p>
                  <p className="mt-0.5 text-[10px] leading-relaxed text-[#64748b]">倾听需求，超越期待</p>
                </div>
                <div className="rounded-lg border border-[#e6510020] bg-[#fff7ed80] p-2.5 transition-colors hover:border-[#e6510060]">
                  <p className="text-xs font-semibold text-[#1e293b]">持续精进</p>
                  <p className="mt-0.5 text-[10px] leading-relaxed text-[#64748b]">拥抱技术，永不止步</p>
                </div>
              </div>

              <div className="rounded-lg bg-[#fff7ed] px-4 py-2.5 text-center text-xs font-medium italic text-[#e65100]">
                &ldquo;以诚为本 · 以质取胜&rdquo;
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
