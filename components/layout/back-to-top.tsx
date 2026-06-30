"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "@phosphor-icons/react/dist/ssr";

/** 滚动超过此阈值后显示按钮（px） */
const SHOW_THRESHOLD = 1200;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // 检测减少动效偏好
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // 监听滚动
  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > SHOW_THRESHOLD);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // 平滑滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={prefersReducedMotion ? {} : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={prefersReducedMotion ? {} : { opacity: 0, x: 40 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-6 z-50 size-11 rounded-full bg-tech-cyan text-white shadow-lg shadow-tech-cyan/25 flex items-center justify-center hover:bg-neon-glow hover:shadow-xl hover:shadow-tech-cyan/30 active:scale-95 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-tech-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-space-blue"
          aria-label="返回顶部"
        >
          <ArrowUp weight="bold" size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
