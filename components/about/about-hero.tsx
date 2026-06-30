"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Spotlight } from "@/components/ui/spotlight";

/* 关于我们页面 — Hero区 (50vh) */
export default function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[50vh] items-center justify-center overflow-hidden"
    >
      {/* 暗色渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060b16] via-[#0a0f1e] to-[#0d1528]" />

      {/* Spotlight聚光灯效果 */}
      <Spotlight
        className="-top-40 left-1/2 -translate-x-1/2 md:left-1/3"
        fill="rgba(0, 180, 216, 0.08)"
      />

      {/* 微弱粒子装饰 — 使用径向渐变模拟 */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #00b4d8 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #f77f00 0%, transparent 70%)" }}
        />
      </div>

      {/* 居中内容 */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.span
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="overline-label mb-6 inline-block"
        >
          ABOUT US
        </motion.span>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-5 text-4xl font-heading font-bold tracking-tight text-white sm:text-5xl"
        >
          关于极翼科技
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-base text-muted-foreground sm:text-lg"
        >
          深耕重庆十一载，以极致视角记录每一份珍贵
        </motion.p>
      </div>

      {/* 底部渐变分隔线 */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div
          className="h-full w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(0,180,216,0.4) 30%, rgba(247,127,0,0.3) 70%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}
