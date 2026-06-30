"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* ========== 配置 ========== */
const COMPANY_LOCATION: [number, number] = [29.550, 106.565];
const SATELLITE_ZOOM_THRESHOLD = 18; // 放大到此级别切换卫星图

export default function MapComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || mapRef.current) return;

    let map: L.Map;
    let streetLayer: L.TileLayer;
    let satLayer: L.TileLayer;

    try {
      map = L.map(container, {
        center: COMPANY_LOCATION,
        zoom: 16,
        minZoom: 10,
        maxZoom: 20,
        zoomControl: false,
        attributionControl: false,
      });
      mapRef.current = map;

      L.control.zoom({ position: "bottomright" }).addTo(map);
    } catch (e) {
      console.error("[Map] 初始化失败:", e);
      return;
    }

    /* ====== 图层1：高德二维街道图（默认显示） ====== */
    streetLayer = L.tileLayer(
      "https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
      { maxZoom: 20 }
    ).addTo(map);

    /* ====== 图层2：高德卫星影像（预加载，初始隐藏） ====== */
    satLayer = L.tileLayer(
      "https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
      { maxZoom: 18, zIndex: 5 }
    );

    /* ====== 缩放时自动切换图层 ====== */
    const switchLayers = () => {
      const z = map.getZoom();
      if (z >= SATELLITE_ZOOM_THRESHOLD) {
        // 放大足够 → 切换为卫星影像
        if (!map.hasLayer(satLayer)) satLayer.addTo(map);
      } else {
        // 缩小 → 恢复二维街道
        if (map.hasLayer(satLayer)) map.removeLayer(satLayer);
      }
    };

    map.on("zoomend", switchLayers);

    /* ====== 标记 ====== */
    const timer = setTimeout(() => {
      try { addCompanyMarker(map); } catch (e) { console.warn("[Map] 标记:", e); }
    }, 800);

    return () => {
      clearTimeout(timer);
      map.off("zoomend", switchLayers);
      if (mapRef.current) { try { mapRef.current.remove(); } catch (_) {} mapRef.current = null; }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%" }}
      className="leaflet-container"
    />
  );
}

/* ========== 专业地图标记（SVG 矢量水滴针） ========== */
function addCompanyMarker(map: L.Map) {
  const markerHtml = `
    <div class="jy-marker-wrap">
      <div class="jy-ping"></div>
      <div class="jy-ping2"></div>
      <svg width="36" height="46" viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 0C8.06 0 0 7.83 0 17.48c0 12.42 16.56 27.04 17.24 27.63a1.4 1.4 0 001.52 0C19.44 44.52 36 29.9 36 17.48 36 7.83 27.94 0 18 0z"
          fill="#0077B6"/>
        <path d="M18 3C9.72 3 3 9.47 3 17.43c0 11.02 14.68 24.28 15 24.57l.01-.01L33 17.43C33 9.47 26.28 3 18 3z"
          fill="#00A3E0" opacity="0.35"/>
        <circle cx="18" cy="17" r="7" fill="white" opacity="0.95"/>
        <circle cx="18" cy="17" r="4" fill="#0077B6"/>
        <path d="M18 13.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 1a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill="#00B4D8" opacity="0.5"/>
      </svg>
    </div>
    <style>
      .jy-marker-wrap{position:relative;width:36px;height:46px;display:flex;align-items:flex-end}
      .jy-ping{position:absolute;bottom:-4px;left:50%;width:54px;height:54px;margin-left:-27px;border-radius:50%;border:2px solid rgba(0,119,182,.35);animation:jyPulse 2.2s ease-out infinite;pointer-events:none}
      .jy-ping2{position:absolute;bottom:-8px;left:50%;width:66px;height:66px;margin-left:-33px;border-radius:50%;background:radial-gradient(circle,rgba(0,119,182,.15),transparent 70%);animation:jyPulse2 2.2s ease-out infinite .25s;pointer-events:none}
      @keyframes jyPulse{0%{transform:scale(.65);opacity:1}100%{transform:scale(2);opacity:0}}
      @keyframes jyPulse2{0%{transform:scale(.65);opacity:.45}100%{transform:scale(1.85);opacity:0}}
    </style>`;

  const icon = L.divIcon({
    html: markerHtml,
    className: "",
    iconSize: [36, 46],
    iconAnchor: [18, 46],
    popupAnchor: [0, -46],
  });

  const marker = L.marker(COMPANY_LOCATION, { icon }).addTo(map);

  marker.bindPopup(
    `<div style="padding:10px 16px;background:#fff;color:#1e293b;font-size:12px;line-height:1.55;border-radius:12px;box-shadow:0 4px 24px rgba(0,0,0,0.15),0 0 0 1px rgba(0,119,182,0.2);min-width:170px">
      <div style="font-weight:700;font-size:14px;display:flex;align-items:center;gap:5px;margin-bottom:3px;color:#0077B6">&#128205; 极翼科技总部</div>
      <div style="color:#64748b;font-size:11.5px">重庆市南岸区南坪街道</div>
      <div style="color:#64748b;font-size:11.5px">天龙广场 B栋2单元21-7号</div>
      <div style="margin-top:6px;padding-top:6px;border-top:1px solid #e2e8f0;display:flex;align-items:center;gap:5px;color:#0077B6;font-weight:600;font-size:11.5px">
        &#9742; 150-2305-5582
      </div>
    </div>`,
    { closeButton: true, className: "", offset: [0, -14], maxWidth: 280 }
  );

  requestAnimationFrame(() => { try { marker.openPopup(); } catch (_) {} });
}
