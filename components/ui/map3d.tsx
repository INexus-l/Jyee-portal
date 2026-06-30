"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

/* ========== 动态导入 Leaflet（避免 SSR 问题） ========== */
const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center bg-[#f0f4f8] text-[#64748b] text-sm">
      地图加载中...
    </div>
  ),
});

/* ========== 配置 ========== */
/* 公司真实坐标（重庆市南岸区天龙广场B栋2单元21-7号） */
const COMPANY_LOCATION: [number, number] = [29.550, 106.565];

interface Map3DProps {
  className?: string;
  height?: string | number;
  showControlsHint?: boolean;
}

export default function Map3D({
  className = "",
  height = 420,
  showControlsHint = true,
}: Map3DProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-[#dde8ef] ${className}`}>
      {/* 地图容器 */}
      <div
        style={{
          width: "100%",
          height: typeof height === "number" ? `${height}px` : height,
        }}
      >
        <MapComponent />
      </div>

      {/* 左上角：位置信息卡 */}
      <div className="absolute left-3 top-3 z-10 flex items-center gap-2.5 rounded-xl border border-white/70 bg-white/93 px-3.5 py-2 shadow-md backdrop-blur-md">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#f77f00]/15 to-[#e65100]/10">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e65100" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
        <div>
          <p className="text-[11px] font-bold text-[#1a2744] leading-tight">极翼科技</p>
          <p className="text-[9px] text-[#64748b] leading-tight">重庆市南岸区天龙广场</p>
        </div>
      </div>

      {/* 右下角：操作提示 */}
      {showControlsHint && (
        <div className="absolute bottom-3 right-12 z-10 hidden items-center gap-2.5 rounded-lg border border-[#e2e8f0] bg-white/92 px-3 py-1.5 shadow-sm backdrop-blur-sm sm:flex">
          <span className="flex items-center gap-1 text-[9px] text-[#94a3b8]">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 11-18 0"/><path d="M9 12h6"/></svg>缩放
          </span>
          <span className="flex items-center gap-1 text-[9px] text-[#94a3b8]">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 9l4-4 4 4"/><path d="M15 15l4 4-4 4"/><path d="M12 3v18"/></svg>拖拽
          </span>
          <span className="flex items-center gap-1 text-[9px] font-semibold text-[#0077b6]">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="#0077b6"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>3D视图
          </span>
        </div>
      )}
    </div>
  );
}
