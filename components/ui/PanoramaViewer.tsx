"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface PanoramaViewerProps {
  src: string;
  alt: string;
  className?: string;
}

export default function PanoramaViewer({ src, alt, className = "" }: PanoramaViewerProps) {
  const [offsetX, setOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const startXRef = useRef(0);
  const startOffsetXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const lastXRef = useRef(0);
  const velocityRef = useRef(0);
  const animFrameRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 惯性滑动
  const applyInertia = useCallback(() => {
    if (Math.abs(velocityRef.current) > 0.3) {
      setOffsetX((prev) => {
        const next = prev + velocityRef.current;
        velocityRef.current *= 0.95; // 摩擦系数
        return next;
      });
      animFrameRef.current = requestAnimationFrame(applyInertia);
    }
  }, []);

  // 边界约束
  const clampOffset = useCallback(
    (value: number, imgWidth: number) => {
      if (!containerRef.current) return value;
      const containerWidth = containerRef.current.offsetWidth;
      const maxOffset = Math.max(0, (imgWidth * containerRef.current.offsetHeight / (containerRef.current.offsetWidth * 0.5625)) - containerWidth) * 0.6;
      return Math.max(-maxOffset, Math.min(maxOffset, value));
    },
    []
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      setIsDragging(true);
      startXRef.current = e.clientX;
      startOffsetXRef.current = offsetX;
      lastTimeRef.current = performance.now();
      lastXRef.current = e.clientX;
      velocityRef.current = 0;
      cancelAnimationFrame(animFrameRef.current);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [offsetX]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;

      const now = performance.now();
      const dt = now - lastTimeRef.current;
      const dx = e.clientX - lastXRef.current;

      if (dt > 0) {
        velocityRef.current = dx * (16 / Math.max(dt, 8)); // 标准化到60fps
      }

      const deltaX = e.clientX - startXRef.current;
      const newOffset = startOffsetXRef.current + deltaX * 1.8; // 灵敏度倍率

      setOffsetX(newOffset);

      lastTimeRef.current = now;
      lastXRef.current = e.clientX;
    },
    [isDragging]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
    // 启动惯性
    if (Math.abs(velocityRef.current) > 1) {
      animFrameRef.current = requestAnimationFrame(applyInertia);
    }
  }, [applyInertia]);

  // 清理
  useEffect(() => {
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{
        borderColor: "rgba(6,182,212,0.20)",
        boxShadow: "0 8px 40px rgba(6,182,212,0.08), inset 0 0 80px rgba(0,0,0,0.3)",
        backgroundColor: "#0a1628",
        cursor: isDragging ? "grabbing" : "grab",
        touchAction: "none", // 防止触摸滚动
        userSelect: "none",
      }}
    >
      {/* 全景图片容器 - 超宽图片通过translateX实现拖拽查看 */}
      <div
        className="relative aspect-[16/9] overflow-hidden"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `translateX(${offsetX}px)`,
            transition: isDragging ? "none" : "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: isDragging ? "transform" : "auto",
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
            className="object-cover"
            style={{ objectPosition: `${50 + offsetX * 0.05}% center` }}
            onLoad={() => setIsLoaded(true)}
            draggable={false}
          />
        </div>

        {/* 加载状态 */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0a1628]">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-500/30 border-t-cyan-500" />
              <span className="text-xs text-gray-500">加载全景图中...</span>
            </div>
          </div>
        )}

        {/* 渐变边缘遮罩 - 增强沉浸感 */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,22,40,0.4) 0%, transparent 15%, transparent 85%, rgba(10,22,40,0.4) 100%)",
          }}
        />

        {/* 中央交互提示（首次加载时显示，拖动后淡出） */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-700"
          style={{ opacity: isDragging || Math.abs(offsetX) > 20 ? 0 : 1 }}
        >
          <div
            className="flex flex-col items-center gap-3 rounded-2xl border backdrop-blur-md px-8 py-6"
            style={{
              borderColor: "rgba(6,182,212,0.25)",
              backgroundColor: "rgba(10,22,40,0.75)",
            }}
          >
            {/* 动态拖拽指示器 */}
            <div className="flex items-center gap-2">
              <svg
                width="40"
                height="24"
                viewBox="0 0 40 24"
                fill="none"
                className="animate-pulse"
              >
                <path
                  d="M4 12H36M30 6L36 12L30 18M10 6L4 12L10 18"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-sm font-semibold text-white">360° 全景交互</p>
            <p className="text-center text-xs leading-relaxed" style={{ color: "rgba(148,163,184,0.65)" }}>
              左右拖拽旋转视角<br />
              支持惯性滑动
            </p>
          </div>
        </div>

        {/* 方向指示器 */}
        <div
          className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-lg border px-3 py-1.5"
          style={{
            borderColor: "rgba(6,182,212,0.15)",
            backgroundColor: "rgba(10,22,40,0.6)",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            style={{ color: "#06b6d4", transform: `scaleX(${offsetX > 0 ? -1 : 1})` }}
          >
            <path
              d="M1 7H13M8 3L13 7L8 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[10px] font-medium" style={{ color: "rgba(148,163,184,0.70)" }}>
            拖拽旋转
          </span>
        </div>
      </div>

      {/* 底部工具栏 */}
      <div
        className="flex items-center justify-between border-t px-5 py-3"
        style={{
          borderColor: "rgba(6,182,212,0.12)",
          backgroundColor: "rgba(10,22,40,0.85)",
        }}
      >
        <div className="flex items-center gap-4">
          {[
            { label: "自动漫游", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
            { label: "全屏模式", icon: "M4 8V4h4M4 4l6 6M20 8V4h-4M20 4l-6 6M4 16v4h4M4 20l6-6M20 16v4h-4M20 20l-6-6" },
            { label: "重置视角", icon: "M4 4v5h5M20 20v-5h-5M4 9c0 4.418 3.582 8 8 8s8-3.582 8-8M16 5c0-4.418-3.582-8-8-8S0 .582 0 5" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => {
                if (item.label === "重置视角") {
                  setOffsetX(0);
                  velocityRef.current = 0;
                }
              }}
              className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-colors hover:bg-cyan-500/10"
              style={{ color: "rgba(148,163,184,0.65)" }}
            >
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={item.icon} />
              </svg>
              <span className="text-[11px]">{item.label}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px]" style={{ color: "rgba(148,163,184,0.45)" }}>分辨率:</span>
          <span className="text-[11px] font-mono font-semibold" style={{ color: "#06b6d4" }}>8K</span>
        </div>
      </div>
    </div>
  );
}
