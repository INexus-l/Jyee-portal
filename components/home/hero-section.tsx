"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ArrowDown,
  AirplaneTilt,
  MapPinArea,
  ClockCounterClockwise,
  Camera,
} from "@phosphor-icons/react/dist/ssr";

/* Hero轮播背景图 — 业务场景展示（航拍、婚庆、房地产、编队、测绘等） */
const HERO_SLIDES = [
  {
    url: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=%E9%87%8D%E5%BA%86%E5%B1%B1%E5%9F%8E%E5%A4%9C%E6%99%AF%E8%88%AA%E6%8B%8D%20%E5%8D%83%E4%B8%9E%E4%B8%9D%E6%A1%A5%20%E5%8F%A3%E6%9D%BE%E5%9D%97%E5%A4%9C%E6%99%AF%20%E9%B8%9F%E7%9E%B0%E8%A7%86%E8%A7%92%20%E5%9F%8E%E5%B8%82%E5%BB%BA%E7%AD%91%E7%BE%A4%20%E7%81%AF%E7%81%AB%E8%BE%89%E7%85%8C%20%E5%AE%8F%E4%BC%9F%E5%8E%84%E5%A4%A7%E5%9C%BA%E9%9D%A2%20%E9%AB%98%E8%B4%A8%E9%87%8F%E8%88%AA%E6%8B%8D%E7%85%A7%E7%89%87%204K%E8%B6%85%E6%B8%85&image_size=landscape_16_9",
    label: "山城夜景航拍",
  },
  {
    url: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=%E4%B8%93%E4%B8%9A%E8%88%AA%E6%8B%8D%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%9F%8E%E5%B8%82%E4%B8%8A%E7%A9%BA%E9%A3%9E%E8%A1%8C%20DJI%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E7%8E%B0%E4%BB%A3%E5%9F%8E%E5%B8%82%E5%BB%BA%E7%AD%91%20%E9%AB%98%E6%A5%BC%E5%A4%A7%E5%8E%A6%20%E5%A4%A9%E7%A9%BA%E4%B8%8B%E7%9A%84%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E5%8D%8A%E7%A9%BA%E8%A7%86%E8%A7%92%20%E5%AE%8F%E4%BC%9F%E5%9C%BA%E9%9D%A2%20%E9%AB%98%E8%B4%A8%E9%87%8F%E5%AE%9E%E6%99%AF%E7%85%A7%E7%89%87&image_size=landscape_16_9",
    label: "城市航拍",
  },
  {
    url: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=%E6%97%A0%E4%BA%BA%E6%9C%BA%E7%BC%96%E9%98%9F%E7%81%AF%E5%85%89%E7%A7%80%20%E5%A4%9C%E7%A9%BALED%E7%81%AF%E5%85%89%20%E5%BD%A9%E8%89%B2%E7%81%AF%E5%85%89%E7%BC%96%E7%BB%87%E5%9B%BE%E6%A1%88%20%E5%9F%8E%E5%B8%82%E5%9C%B0%E6%A0%87%E5%BB%BA%E7%AD%91%E8%83%8C%E6%99%AF%20%E7%82%AB%E5%BD%A9%E7%9B%AE%E7%9A%84%E5%A4%9C%E7%A9%BA%E8%89%BA%E6%9C%AF%20%E5%AE%8F%E4%BC%9F%E5%8E%84%E5%A4%A7%E5%9C%BA%E9%9D%A2%20%E9%AB%98%E8%B4%A8%E9%87%8F%E5%AE%9E%E6%8B%8D%E7%85%A7%E7%89%87&image_size=landscape_16_9",
    label: "编队表演",
  },
  {
    url: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=%E5%A9%9A%E5%BA%86%E8%88%AA%E6%8B%8D%20%E6%B5%AA%E6%BC%AB%E5%A9%9A%E7%A4%BC%E7%8E%B0%E5%9C%BA%20%E6%96%B0%E5%A8%98%E6%96%B0%E9%83%8E%E6%89%8B%E6%8B%BD%E6%89%8B%E5%9C%A8%E8%8A%B1%E5%BA%AD%20%E7%99%BD%E8%89%B2%E5%A9%9A%E7%BA%B1%20%E8%88%AA%E6%8B%8D%E4%B8%8B%E6%96%B9%E4%BD%8D%20%E9%98%B3%E5%85%89%E7%82%BC%E7%82%BC%E7%9A%84%E5%A4%96%E6%99%AF%E5%A9%9A%E7%A4%BC%20%E6%B8%A9%E9%A6%A8%E6%B5%AA%E6%BC%AB%E6%B0%9B%E5%9B%B4%20%E9%AB%98%E8%B4%A8%E9%87%8F%E8%88%AA%E6%8B%8D%E7%85%A7%E7%89%87&image_size=landscape_16_9",
    label: "婚庆航拍",
  },
  {
    url: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=%E6%88%BF%E5%9C%B0%E4%BA%A7%E6%A5%BC%E7%9B%98%E8%88%AA%E6%8B%8D%20%E7%8E%B0%E4%BB%A3%E5%8C%96%E9%AB%98%E6%80%BB%E5%B1%85%E6%B0%91%E7%A4%BE%E5%8C%BA%20%E7%8E%B0%E4%BB%A3%E7%AE%80%E7%BA%A6%E5%BB%BA%E7%AD%91%E9%A3%8E%E6%A0%BC%20%E7%BB%BF%E8%89%B2%E6%A4%8D%E8%A2%8D%E6%99%AF%E8%A7%82%20%E9%B8%9F%E7%9E%B0%E8%A7%86%E8%A7%92%20%E6%97%A5%E8%90%BD%E9%BB%84%E6%98%8F%E6%96%9C%E9%98%B3%20%E9%AB%98%E7%AB%AF%E7%A4%BE%E5%8C%BA%E7%8E%AF%E5%A2%83%20%E9%AB%98%E8%B4%A8%E9%87%8F%E8%88%AA%E6%8B%8D%E7%85%A7%E7%89%87&image_size=landscape_16_9",
    label: "房产航拍",
  },
  {
    url: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=%E6%B5%8B%E7%BB%98%E6%97%A0%E4%BA%BA%E6%9C%BA%E4%B8%89%E7%BB%B4%E5%BB%BA%E6%A8%A1%20%E5%B1%B1%E5%9C%B0%E5%9C%B0%E5%BD%A2%20%E8%88%AA%E6%8B%8D%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%9C%A8%E4%B8%8A%E7%A9%BA%E9%A3%9E%E8%A1%8C%20%E6%95%B0%E5%AD%97%E5%8C%96%E7%82%B9%E4%BA%91%E5%8F%AF%E8%A7%86%E5%8C%96%20%E7%A7%91%E6%8A%80%E6%84%9F%20%E4%B8%93%E4%B8%9A%E6%B5%8B%E7%BB%98%E8%AE%BE%E5%A4%87%20%E5%AE%8F%E4%BC%9F%E8%87%AA%E7%84%B6%E6%99%AF%E8%A7%82%20%E9%AB%98%E8%B4%A8%E9%87%8F%E5%AE%9E%E6%99%AF%E7%85%A7%E7%89%87&image_size=landscape_16_9",
    label: "测绘建模",
  },
  {
    url: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=%E6%97%A5%E8%90%BD%E6%97%B6%E5%88%86%E8%88%AA%E6%8B%8D%E9%A3%8E%E6%99%AF%20%E9%87%91%E8%89%B2%E5%85%89%E7%BA%BF%E4%B8%8B%E7%9A%84%E5%B1%B1%E5%B7%9D%E6%B9%96%E6%B3%8A%20%E4%B9%8C%E4%BA%91%E5%A5%87%E7%89%B9%E5%BD%A2%E7%8A%B6%20%E9%87%91%E9%BB%84%E8%89%B2%E6%99%9D%E5%85%89%20%E8%88%AA%E6%8B%8D%E8%A7%86%E8%A7%92%20%E5%A3%AE%E9%98%94%E8%87%AA%E7%84%B6%E9%A3%8E%E5%85%89%20%E9%AB%98%E8%B4%A8%E9%87%8F%E6%91%84%E5%BD%B1%E4%BD%9C%E5%93%81%20%E6%96%87%E8%89%BA%E6%B0%9B%E5%9B%B4&image_size=landscape_16_9",
    label: "风光航拍",
  },
];

const HUD_TAGS = [
  { icon: ClockCounterClockwise, label: "11年+", sub: "行业经验" },
  { icon: MapPinArea, label: "全域覆盖", sub: "重庆及西南" },
  { icon: Camera, label: "4K/8K", sub: "影像级画质" },
];

/* 过渡动画样式定义 */
type TransitionStyle =
  | "fade"        // 淡入淡出 + 微缩放
  | "slideLeft"   // 左进右出
  | "slideRight"  // 右进左出
  | "slideDown"   // 上进下出
  | "slideUp"     // 下进上出
  | "zoomBlur"    // 缩放+模糊
  | "clipWipe";   // 裁剪擦除

const TRANSITION_STYLES: TransitionStyle[] = [
  "fade", "slideLeft", "slideRight", "slideDown", "slideUp", "zoomBlur", "clipWipe",
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionStyle, setTransitionStyle] = useState<TransitionStyle>("fade");
  const [isPaused, setIsPaused] = useState(false);

  // 自动轮播 — 每3秒切换（加快速度）
  const nextSlide = useCallback(() => {
    // 随机选择下一个过渡样式
    setTransitionStyle(
      TRANSITION_STYLES[Math.floor(Math.random() * TRANSITION_STYLES.length)]
    );
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const goTo = useCallback((idx: number) => {
    setTransitionStyle(
      TRANSITION_STYLES[Math.floor(Math.random() * TRANSITION_STYLES.length)]
    );
    setCurrentSlide(idx);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 2000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  /* 根据当前过渡样式渲染动画 */
  const renderSlide = () => {
    const base = { duration: 0.8, ease: "easeInOut" as const };

    switch (transitionStyle) {
      case "slideLeft":
        return (
          <motion.div
            key={currentSlide}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={base}
            className="absolute inset-0"
          >
            <img src={HERO_SLIDES[currentSlide].url} alt={HERO_SLIDES[currentSlide].label} className="h-full w-full object-cover" draggable={false} />
          </motion.div>
        );
      case "slideRight":
        return (
          <motion.div
            key={currentSlide}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={base}
            className="absolute inset-0"
          >
            <img src={HERO_SLIDES[currentSlide].url} alt={HERO_SLIDES[currentSlide].label} className="h-full w-full object-cover" draggable={false} />
          </motion.div>
        );
      case "slideDown":
        return (
          <motion.div
            key={currentSlide}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={base}
            className="absolute inset-0"
          >
            <img src={HERO_SLIDES[currentSlide].url} alt={HERO_SLIDES[currentSlide].label} className="h-full w-full object-cover" draggable={false} />
          </motion.div>
        );
      case "slideUp":
        return (
          <motion.div
            key={currentSlide}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={base}
            className="absolute inset-0"
          >
            <img src={HERO_SLIDES[currentSlide].url} alt={HERO_SLIDES[currentSlide].label} className="h-full w-full object-cover" draggable={false} />
          </motion.div>
        );
      case "zoomBlur":
        return (
          <motion.div
            key={currentSlide}
            initial={{ scale: 1.15, opacity: 0, filter: "blur(12px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            exit={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
            transition={base}
            className="absolute inset-0"
          >
            <img src={HERO_SLIDES[currentSlide].url} alt={HERO_SLIDES[currentSlide].label} className="h-full w-full object-cover" draggable={false} />
          </motion.div>
        );
      case "clipWipe":
        return (
          <motion.div
            key={currentSlide}
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 1 }}
            animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
            exit={{ clipPath: "inset(0 0 0 100%)", opacity: 1 }}
            transition={{ ...base, duration: 1 }}
            className="absolute inset-0"
          >
            <img src={HERO_SLIDES[currentSlide].url} alt={HERO_SLIDES[currentSlide].label} className="h-full w-full object-cover" draggable={false} />
          </motion.div>
        );
      default: // fade
        return (
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={base}
            className="absolute inset-0"
          >
            <img src={HERO_SLIDES[currentSlide].url} alt={HERO_SLIDES[currentSlide].label} className="h-full w-full object-cover" draggable={false} />
          </motion.div>
        );
    }
  };

  return (
    <section
      className="relative flex min-h-[90svh] items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ========== 全屏背景轮播 ========== */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          {renderSlide()}
        </AnimatePresence>

        {/* 深色渐变遮罩 — 确保文字可读 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20" />

        {/* 微妙网格纹理 */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* 扫描线效果 */}
        <motion.div
          className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* ========== 内容层 ========== */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="flex flex-col justify-center py-20 md:py-28 lg:py-36">

          {/* HUD顶部标签行 */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 flex flex-wrap items-center gap-3"
          >
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 backdrop-blur-sm">
              Professional Aerial Photography
            </span>
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
            />
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] text-white/40 backdrop-blur-sm">
              LIVE · CHONGQING
            </span>
          </motion.div>

          {/* 主标题 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mb-4 text-5xl font-heading font-black tracking-tight text-white leading-[1.08] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            极致视角
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(34,211,238,0.3)]">
              翼望山城
            </span>
          </motion.h1>

          {/* 副标题 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-8 max-w-xl text-lg text-white/65 leading-relaxed sm:text-xl"
          >
            重庆极翼无人飞行器科技有限公司
            <br />
            <span className="text-sm text-white/35 tracking-wide">
              Ultimate Perspective · Soaring Above Chongqing
            </span>
          </motion.p>

          {/* 浮动HUD标签组 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.55 }}
            className="mb-10 flex flex-wrap gap-3"
          >
            {HUD_TAGS.map((tag, i) => (
              <motion.div
                key={tag.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.45 }}
                whileHover={{ scale: 1.04, borderColor: "rgba(34,211,238,0.35)" }}
                className="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2.5 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/[0.09]"
              >
                <tag.icon weight="duotone" size={22} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">{tag.label}</span>
                  <span className="text-[11px] text-white/45">{tag.sub}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 双CTA按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.55 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-base font-bold text-white shadow-[0_8px_32px_rgba(249,115,22,0.35)] transition-all hover:shadow-[0_12px_40px_rgba(249,115,22,0.45)] hover:-translate-y-0.5 sm:text-lg"
            >
              <AirplaneTilt weight="duotone" size={22} />
              免费获取报价
              <motion.span
                className="inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                &rarr;
              </motion.span>
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/18 bg-white/[0.06] px-8 py-4 text-base font-semibold text-white/85 backdrop-blur-md transition-all hover:border-white/28 hover:bg-white/[0.1] hover:-translate-y-0.5 hover:text-white sm:text-lg"
            >
              浏览作品案例
            </Link>
          </motion.div>

          {/* 当前场景标签（底部浮动） */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-12 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 backdrop-blur-sm"
          >
            <Camera weight="fill" size={12} className="text-cyan-400" />
            <span className="text-xs text-white/50">当前场景</span>
            <span className="text-xs font-medium text-white/80">{HERO_SLIDES[currentSlide].label}</span>
          </motion.div>
        </div>
      </div>

      {/* ========== 轮播指示器（右下角） ========== */}
      <div className="absolute bottom-10 right-10 z-20 hidden sm:flex items-center gap-2">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={slide.label}
            onClick={() => goTo(idx)}
            className={`rounded-full transition-all duration-400 ${
              idx === currentSlide
                ? "h-2.5 w-8 bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.5)]"
                : "h-2 w-2 bg-white/25 hover:bg-white/45 hover:w-3"
            }`}
            aria-label={`切换到 ${slide.label}`}
          />
        ))}
      </div>

      {/* ========== 底部滚动提示 ========== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/35">向下滚动探索更多</span>
          <ArrowDown weight="bold" size={18} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
