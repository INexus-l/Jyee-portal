"use client";

import Link from "next/link";
import {
  AirplaneTilt,
  Airplane,
  Camera,
  FilmStrip,
  Broadcast,
  MonitorPlay,
  BatteryCharging,
  ArrowRight,
  MapTrifold,
  Sparkle,
  Users,
  ShieldCheck,
  ChartLineUp,
  WifiHigh,
  TreeEvergreen,
  Building,
  Heart,
  VideoCamera,
  Package,
  Thermometer,
  Cube,
  Gauge,
  Eye,
  Plant,
  Truck,
  CellSignalHigh,
  Waves,
  Globe,
  Lightbulb,
  Sun,
} from "@phosphor-icons/react/dist/ssr";
import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState, useCallback } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { Badge } from "@/components/ui/badge";
import Breadcrumb from "@/components/layout/breadcrumb";
import { IMAGES } from "@/lib/images";

/* ========== 设备分类（全覆盖业务场景） ========== */
type CategoryKey = "all" | "aerial" | "survey" | "live" | "swarm" | "agri" | "lift" | "camera";

interface Category {
  key: CategoryKey;
  label: string;
  icon: React.ForwardRefExoticComponent<any>;
  desc: string;
}

const CATEGORIES: Category[] = [
  { key: "all", label: "全部设备", icon: AirplaneTilt, desc: "全品类展示" },
  { key: "aerial", label: "航拍摄影", icon: Camera, desc: "消费级+专业级航拍机" },
  { key: "survey", label: "测绘建模", icon: MapTrifold, desc: "LiDAR/RTK/三维建模" },
  { key: "live", label: "直播图传", icon: Broadcast, desc: "推流/传输/监看系统" },
  { key: "swarm", label: "编队表演", icon: Sparkle, desc: "灯光秀/阵列控制" },
  { key: "agri", label: "植保农业", icon: Plant, desc: "喷洒/播撒/精准作业" },
  { key: "lift", label: "吊运运输", icon: Package, desc: "重载/物流/应急投送" },
  { key: "camera", label: "影像器材", icon: FilmStrip, desc: "相机/镜头/VR全景" },
];

/* ========== 设备数据（全覆盖） ========== */
interface EquipmentItem {
  id: string;
  name: string;
  model: string;
  tagline: string;
  productImage: string; // 图片URL（支持容错降级）
  category: CategoryKey;
  specs: { label: string; value: string }[];
  scenes: string[];
  highlight?: boolean;
}

const EQUIPMENT_LIST: EquipmentItem[] = [
  /* ═══════════════ 一、航拍摄影机型 ═══════════════ */
  {
    id: "mavic3pro",
    name: "DJI Mavic 3 Pro",
    model: "Mavic 3 Pro",
    tagline: "哈苏主摄 · 三摄影像系统 · 航拍旗舰",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=DJI%20Mavic%203%20Pro%20%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E5%93%88%E8%8B%8F%E7%9B%B8%E6%9C%BA%20%E4%B8%89%E6%91%84%E5%83%8F%E7%B3%BB%E7%BB%9F%20%E6%8A%98%E5%8F%A0%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%20%E4%B8%93%E4%B8%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1%2045%E5%BA%A6%E8%A7%92&image_size=landscape_4_3",
    category: "aerial",
    specs: [
      { label: "传感器", value: "4/3 CMOS 哈苏" },
      { label: "镜头", value: "162mm 三摄" },
      { label: "飞行时间", value: "43 min" },
      { label: "图传距离", value: "15 km O3+" },
    ],
    scenes: ["婚庆航拍", "房地产", "宣传片", "活动记录"],
    highlight: true,
  },
  {
    id: "inspire3",
    name: "DJI Inspire 3",
    model: "Inspire 3",
    tagline: "全画幅禅思X9 · 电影级画质",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=DJI%20Inspire%203%20%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E5%85%A8%E7%94%BB%E5%B9%85%208K%20%E7%94%B5%E5%BD%B1%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E5%8F%AF%E5%8F%98%E5%BD%A2%E8%9E%BA%E6%97%8B%E6%9C%A8%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%20%E4%B8%93%E4%B8%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1&image_size=landscape_4_3",
    category: "aerial",
    specs: [
      { label: "传感器", value: "全画幅 X9-8K" },
      { label: "视频规格", value: "8K/25fps RAW" },
      { label: "飞行时间", value: "28 min" },
      { label: "双控支持", value: "是" },
    ],
    scenes: ["电影拍摄", "广告片", "纪录片", "MV制作"],
    highlight: true,
  },
  {
    id: "mini4pro",
    name: "DJI Mini 4 Pro",
    model: "Mini 4 Pro",
    tagline: "轻便灵活 · 室内小空间利器",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=DJI%20Mini%204%20Pro%20%E5%B0%8F%E5%9E%8B%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E8%BD%BB%E4%BE%BF%E6%8A%98%E5%8F%A0%20%E7%81%B0%E8%89%B2%E6%9C%BA%E8%BA%AB%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%20%E4%B8%93%E4%B8%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1&image_size=landscape_4_3",
    category: "aerial",
    specs: [
      { label: "重量", value: "<249g 免登记" },
      { label: "传感器", value: "1/1.3 CMOS" },
      { label: "飞行时间", value: "34 min" },
      { label: "避障", value: "全向避障" },
    ],
    scenes: ["室内航拍", "旅行记录", "Vlog创作"],
  },
  {
    id: "air3",
    name: "DJI Air 3",
    model: "Air 3",
    tagline: "双摄中端主力 · 性价比之王",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=DJI%20Air%203%20%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E5%8F%8C%E6%91%84%E5%83%8F%E5%A4%B4%20%E4%B8%AD%E7%AB%AF%E8%88%AA%E6%8B%8D%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E9%BB%91%E8%89%B2%E6%9C%BA%E8%BA%AB%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%20%E4%B8%93%E4%B8%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1&image_size=landscape_4_3",
    category: "aerial",
    specs: [
      { label: "镜头", value: "24mm + 70mm 双摄" },
      { label: "飞行时间", value: "46 min" },
      { label: "图传距离", value: "20 km" },
      { label: "重量", value: "720g" },
    ],
    scenes: ["旅拍", "户外探险", "活动跟拍"],
  },
  {
    id: "phantom4pro",
    name: "DJI Phantom 4 Pro",
    model: "Phantom 4 Pro V2.0",
    tagline: "经典四旋翼 · 稳定可靠的工作马",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=DJI%20Phantom%204%20Pro%20%E7%99%BD%E8%89%B2%E5%9B%9B%E6%97%8B%E7%BF%BC%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E7%B2%BE%E7%81%B5%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%20%E4%B8%93%E4%B8%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1&image_size=landscape_4_3",
    category: "aerial",
    specs: [
      { label: "传感器", value: "1英寸 2000万像素" },
      { label: "视频", value: "4K/60fps" },
      { label: "飞行时间", value: "30 min" },
      { label: "抗风等级", value: "5级" },
    ],
    scenes: ["工程记录", "常规航拍", "培训教学"],
  },

  /* ═══════════════ 二、测绘建模设备 ═══════════════ */
  {
    id: "matrice350",
    name: "DJI Matrice 350 RTK",
    model: "M350 RTK",
    tagline: "行业旗舰 · 测绘巡检全能王",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=DJI%20Matrice%20350%20RTK%20%E8%A1%8C%E4%B8%9A%E7%BA%A7%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E5%A2%9E%E6%B5%8B%E5%BB%BA%E6%A8%A1%20%E5%85%AD%E6%97%8B%E7%BF%BC%20%E9%BB%91%E8%89%B2%E4%B8%93%E4%B8%9A%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%20%E4%B8%93%E4%B8%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1&image_size=landscape_4_3",
    category: "survey",
    specs: [
      { label: "载重能力", value: "2.7 kg" },
      { label: "防护等级", value: "IP55 防尘防水" },
      { label: "飞行时间", value: "55 min" },
      { label: "定位精度", value: "RTK 厘米级" },
    ],
    scenes: ["正射影像", "三维建模", "电力巡检", "基础设施"],
    highlight: true,
  },
  {
    id: "matrice30t",
    name: "DJI Matrice 30T",
    model: "M30T",
    tagline: "便携行业机 · 应急响应首选",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=DJI%20Matrice%2030T%20%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E7%83%AD%E6%88%90%E5%83%8F%20%E5%8F%AF%E6%8A%98%E5%8F%A0%E8%A1%8C%E4%B8%9A%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E9%BB%91%E8%89%B2%E6%9C%BA%E8%BA%AB%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF&image_size=landscape_4_3",
    category: "survey",
    specs: [
      { label: "热成像", value: "640×512 @30Hz" },
      { label: "防水等级", value: "IP55" },
      { label: "折叠尺寸", value: "背包可装" },
      { label: "抗风能力", value: "12 m/s" },
    ],
    scenes: ["消防应急", "公安侦查", "海事巡查", "环境监测"],
  },
  {
    id: "l2lidar",
    name: "DJI Zenmuse L2 LiDAR",
    model: "L2 激光雷达",
    tagline: "点云扫描 · 精准三维重建",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=DJI%20Zenmuse%20L2%20%E6%BF%80%E5%85%89%E9%9B%B7%E8%BE%BE%20%E7%82%B9%E4%BA%91%E6%89%AB%E6%8F%8F%E4%BB%AA%E8%B4%9F%E8%BD%BD%E6%97%A0%E4%BA%BA%E6%9C%BA%E6%91%84%E5%83%8F%20%E4%B8%93%E4%B8%9A%E6%B5%8B%E7%BB%98%E8%AE%BE%E5%A4%87%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF&image_size=landscape_4_3",
    category: "survey",
    specs: [
      { label: "回波次数", value: "3次回波" },
      { label: "测距范围", value: "450 m@100klx" },
      { label: "点频", value: "240,000 点/秒" },
      { label: "精度", value: "2cm(水平)·5cm(垂直)" },
    ],
    scenes: ["地形测绘", "林业调查", "矿山测量", "BIM建模"],
    highlight: true,
  },
  {
    id: "p1camera",
    name: "DJI Zenmuse P1 全画幅相机",
    model: "P1 Full-Frame",
    tagline: "4500万全画幅 · 高效正射作业",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=DJI%20Zenmuse%20P1%20%E5%85%A8%E7%94%BB%E5%B9%85%E7%9B%B8%E6%9C%BA%20%E6%97%A0%E4%BA%BA%E6%9C%BA%E6%91%84%E5%83%8F%E7%9B%B8%E6%9C%BA%20%E4%B8%93%E4%B8%9A%E8%88%AA%E6%8B%8D%E7%9B%B8%E6%9C%BA%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF&image_size=landscape_4_3",
    category: "survey",
    specs: [
      { label: "传感器", value: "全画幅 45MP" },
      { label: "快门", value: "机械全局快门" },
      { label: "像元", value: "3.76 μm" },
      { label: "效率", value: "单架次 3 km²" },
    ],
    scenes: ["正射影像DOM", "城市测绘", "不动产确权"],
  },
  {
    id: "rtkstation",
    name: "DJI D-RTK 2 移动站",
    model: "D-RTK 2 Mobile Station",
    tagline: "厘米级定位基准站",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=DJI%20D-RTK%202%20%E7%A7%BB%E5%8A%A8%E7%AB%99%20RTK%E5%AE%9A%E4%BD%8D%E5%9F%BA%E5%87%86%E7%AB%99%20%E9%AB%98%E7%B2%BE%E5%BA%A6%20GPS%E5%AE%9A%E4%BD%8D%E8%AE%BE%E5%A4%87%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF&image_size=landscape_4_3",
    category: "survey",
    specs: [
      { label: "定位模式", value: "RTK / PPK" },
      { label: "通信距离", value: "10+ km" },
      { label: "初始化", value: "<10秒" },
      { label: "兼容性", value: "M300/M350/M30" },
    ],
    scenes: ["精密测绘", "管线检测", "施工放样"],

  },

  /* ═══════════════ 三、直播图传系统 ═══════════════ */
  {
    id: "o3pro",
    name: "DJI O3 Pro 图传系统",
    model: "O3 Pro Transmission",
    tagline: "远距离高清图传 · 15km+稳定回传",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=DJI%20O3%20Pro%20%E5%9B%BE%E4%BC%A0%E7%B3%BB%E7%BB%9F%20%E6%97%A0%E4%BA%BA%E6%9C%BA%E9%AB%98%E6%B8%85%E5%9B%BE%E4%BC%A0%E6%A8%A1%E5%9D%97%20%E9%BB%91%E8%89%B2%E4%B8%93%E4%B8%9A%E8%AE%BE%E5%A4%87%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%20%E4%B8%93%E4%B8%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1&image_size=landscape_4_3",
    category: "live",
    specs: [
      { label: "传输距离", value: "15+ km (FCC)" },
      { label: "端到端延迟", value: "28 ms" },
      { label: "码率", value: "50 Mbps" },
      { label: "工作频段", value: "2.4/5.8 GHz" },
    ],
    scenes: ["超远距航拍", "影视直播", "赛事转播"],
    highlight: true,
  },
  {
    id: "rcpro",
    name: "DJI RC Pro 专业遥控器",
    model: "RC Pro",
    tagline: "高性能遥控 · 影视级操控体验",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=DJI%20RC%20Pro%20%E4%B8%93%E4%B8%9A%E9%81%A5%E6%8E%A7%E5%99%A8%20%E6%97%A0%E4%BA%BA%E6%9C%BA%E9%81%A5%E6%8E%A7%E5%99%A8%20%E5%B1%8F%E5%B9%95%E9%81%A5%E6%8E%A7%E5%99%A8%20%E9%BB%91%E8%89%B2%E4%B8%93%E4%B8%9A%E8%AE%BE%E5%A4%87%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%20%E4%B8%93%E4%B8%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1&image_size=landscape_4_3",
    category: "live",
    specs: [
      { label: "屏幕", value: "5.5\" 1000nits" },
      { label: "处理器", value: "骁龙865" },
      { label: "接口", value: "HDMI / SDI / USB-C" },
      { label: "存储", value: "128GB 内置" },
    ],
    scenes: ["专业航拍", "影视制作", "现场监看"],
  },
  {
    id: "crystalsky",
    name: "CrystalSky 高亮监视器",
    model: "CrystalSky 7.85\"",
    tagline: "超亮显示屏 · 户外日光可视",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=DJI%20CrystalSky%20%E9%AB%98%E4%BA%AE%E7%9B%91%E8%A7%86%E5%99%A8%20%E6%97%A0%E4%BA%BA%E6%9C%BA%E6%98%BE%E7%A4%BA%E5%B1%8F%20%E9%AB%98%E4%BA%AE%E5%B1%8F%E7%9B%91%E7%9D%A3%E5%99%A8%20%E9%BB%91%E8%89%B2%E4%B8%93%E4%B8%9A%E8%AE%BE%E5%A4%87%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF&image_size=landscape_4_3",
    category: "live",
    specs: [
      { label: "屏幕", value: "7.85\" 高亮屏" },
      { label: "亮度", value: "1000 cd/m²" },
      { label: "分辨率", value: "1080p" },
      { label: "续航", value: "4~6 小时" },
    ],
    scenes: ["户外航拍", "日光环境", "导演实时监看"],
  },
  {
    id: "aggregator",
    name: "多链路聚合路由器",
    model: "LiveU Solo / Kiloview",
    tagline: "多卡聚合 · 零中断直播推流",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=%E5%A4%9A%E9%93%BE%E8%B7%AF%E8%81%9A%E5%90%88%E8%B7%AF%E7%94%B1%E5%99%A8%20LiveU%20Solo%20%E7%9B%B4%E6%92%AD%E8%AE%BE%E5%A4%87%20%E4%B8%93%E4%B8%9A%E7%9B%B4%E6%92%AD%E5%99%A8%20%E9%BB%91%E8%89%B2%E8%AE%BE%E5%A4%87%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%20%E4%B8%93%E4%B8%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1&image_size=landscape_4_3",
    category: "live",
    specs: [
      { label: "链路聚合", value: "4~6 卡同时" },
      { label: "上行带宽", value: "50+ Mbps" },
      { label: "协议", value: "SRT / RTMP / HLS" },
      { label: "延迟", value: "0.5~2 秒" },
    ],
    scenes: ["活动直播", "赛事转播", "新闻连线", "电商带货"],
  },
  {
    id: "encoder",
    name: "专业直播编码器",
    model: "Blackmagic ATEM Mini / Teradek",
    tagline: "多机位切换与推流一体机",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Blackmagic%20ATEM%20Mini%20%E7%9B%B4%E6%92%AD%E7%BC%96%E7%A0%81%E5%99%A8%20%E5%A4%9A%E6%9C%BA%E4%BD%8D%E5%88%87%E6%8D%A2%E5%8F%B0%20%E4%B8%93%E4%B8%9A%E5%BD%B1%E8%A7%86%E8%AE%BE%E5%A4%87%20%E9%BB%91%E8%89%B2%E8%AE%BE%E5%A4%87%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%20%E4%B8%93%E4%B8%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1&image_size=landscape_4_3",
    category: "live",
    specs: [
      { label: "输入路数", value: "4路 HDMI/SDI" },
      { label: "输出格式", value: "1080p60 H.264/H.265" },
      { label: "流媒体", value: "YouTube/B站/抖音直推" },
      { label: "录制", value: "USB/SD卡同时录" },
    ],
    scenes: ["多机位直播", "访谈节目", "产品发布会"],

  },

  /* ═══════════════ 四、编队表演设备 ═══════════════ */
  {
    id: "swarm-drone",
    name: "编队表演无人机阵列",
    model: "Swarm Fleet (50~500架)",
    tagline: "LED灯光秀 · 夜空视觉盛宴",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=%E7%BC%96%E9%98%9F%E8%A1%A8%E6%BC%94%E6%97%A0%E4%BA%BA%E6%9C%BA%E9%98%B5%E5%88%97%20LED%E7%81%AF%E5%85%89%E7%A7%80%20%E5%A4%9A%E6%9E%B6%E6%97%A0%E4%BA%BA%E6%9C%BA%E7%BC%96%E9%98%9F%E9%A3%9E%E8%A1%8C%20%E5%A4%9C%E7%A9%BA%E7%81%AF%E5%85%89%E7%A7%80%20%E7%9C%9F%E5%AE%9E%E5%9C%BA%E6%99%AF%E7%85%A7%E7%89%87%20%E5%BD%A9%E8%89%B2LED%E7%81%AF%E5%85%89&image_size=landscape_4_3",
    category: "swarm",
    specs: [
      { label: "编队规模", value: "50 ~ 500 架" },
      { label: "灯光", value: "全彩 RGB LED" },
      { label: "单机续航", value: "20~30 min" },
      { label: "定位精度", value: "厘米级 RTK" },
    ],
    scenes: ["节日庆典", "品牌发布", "婚礼灯光秀", "城市地标"],
    highlight: true,
  },
  {
    id: "swarm-control",
    name: "编队飞控系统",
    model: "Swarm Control Station",
    tagline: "智能路径规划 · 实时监控调度",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=%E7%BC%96%E9%98%9F%E9%A3%9E%E6%8E%A7%E7%B3%BB%E7%BB%9F%20%E6%97%A0%E4%BA%BA%E6%9C%BA%E7%BE%A4%E6%8E%A7%E5%88%B6%E7%AB%99%20%E5%9C%B0%E9%9D%A2%E6%8E%A7%E5%88%B6%E5%8F%B0%20%E4%B8%93%E4%B8%9A%E6%8E%A7%E5%88%B6%E8%AE%BE%E5%A4%87%20%E5%A4%9A%E5%B1%8F%E7%9B%91%E6%8E%A7%E7%B3%BB%E7%BB%9F%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF&image_size=landscape_4_3",
    category: "swarm",
    specs: [
      { label: "最大控制", value: "500+ 架同步" },
      { label: "编排软件", value: "可视化3D编辑" },
      { label: "安全冗余", value: "自动避障+紧急降落" },
      { label: "预演模拟", value: "全流程仿真验证" },
    ],
    scenes: ["灯光秀编程", "彩排仿真", "现场总控"],
  },
  {
    id: "rtk-base",
    name: "高精度RTK基站",
    model: "RTK Base Station (Swarm)",
    tagline: "厘米级定位保障 · 编队精准执行",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=%E9%AB%98%E7%B2%BE%E5%BA%A6RTK%E5%9F%BA%E7%AB%99%20GNSS%E5%AE%9A%E4%BD%8D%E5%9F%BA%E5%87%86%E7%AB%99%20GPS%E6%8E%A5%E6%94%B6%E6%9C%BA%20%E4%B8%93%E4%B8%9A%E6%B5%8B%E7%BB%98%E8%AE%BE%E5%A4%87%20%E9%AB%98%E7%B2%BE%E5%BA%A6%E5%AE%9A%E4%BD%8D%E8%AE%BE%E5%A4%87%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF&image_size=landscape_4_3",
    category: "swarm",
    specs: [
      { label: "定位精度", value: "1cm + 1ppm" },
      { label: "覆盖半径", value: "5~10 km" },
      { label: "初始化", value: "<5分钟" },
      { label: "通信方式", value: "4G/电台双模" },
    ],
    scenes: ["编队定位基准", "集群协同保障"],

  },

  /* ═══════════════ 五、植保农业设备 ═══════════════ */
  {
    id: "agrast40",
    name: "DJI Agras T40 农业无人机",
    model: "Agras T40",
    tagline: "共轴双旋翼 · 50升大载重喷洒",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=DJI%20Agras%20T40%20%E5%86%9C%E4%B8%9A%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E6%A4%8D%E4%BF%9D%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E5%96%B7%E6%B4%92%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E5%85%B1%E8%BD%B4%E5%8F%8C%E6%97%8B%E7%BF%BC%20%E9%BB%84%E8%89%B2%E6%9C%BA%E8%BA%AB%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%20%E4%B8%93%E4%B8%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1&image_size=landscape_4_3",
    category: "agri",
    specs: [
      { label: "喷洒容量", value: "50 L" },
      { label: "播撒容量", value: "50 L (肥料)" },
      { label: "喷幅宽度", value: "9 m" },
      { label: "作业效率", value: "~320 亩/小时" },
    ],
    scenes: ["大田作物", "果园植保", "水稻田", "林业防治"],
    highlight: true,
  },
  {
    id: "agrast20p",
    name: "DJI Agras T20P 农业无人机",
    model: "Agras T20P",
    tagline: "折叠式设计 · 中小地块灵活作业",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=DJI%20Agras%20T20P%20%E5%86%9C%E4%B8%9A%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E6%8A%98%E5%8F%A0%E5%BC%8F%E6%A4%8D%E4%BF%9D%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E5%96%B7%E6%B4%92%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E9%BB%84%E8%89%B2%E6%9C%BA%E8%BA%AB%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%20%E4%B8%93%E4%B8%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1&image_size=landscape_4_3",
    category: "agri",
    specs: [
      { label: "喷洒容量", value: "20 L" },
      { label: "折叠尺寸", value: "可放入SUV后备箱" },
      { label: "喷幅宽度", value: "6 m" },
      { label: "作业效率", value: "~180 亩/小时" },
    ],
    scenes: ["丘陵山地", "小地块", "茶园/果园", "设施农业"],
  },
  {
    id: "smart-agri-battery",
    name: "智能农业电池组",
    model: "BS12000A 智能电池",
    tagline: "12000mAh大容量 · 快充循环",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=%E6%99%BA%E8%83%BD%E5%86%9C%E4%B8%9A%E7%94%B5%E6%B1%A0%E7%BB%84%20%E6%97%A0%E4%BA%BA%E6%9C%BA%E7%94%B5%E6%B1%A0%20%E5%A4%A7%E5%AE%B9%E9%87%8F%E7%94%B5%E6%B1%A0%20DJI%20BS12000A%20%E4%B8%93%E4%B8%9A%E7%94%B5%E6%B1%A0%20%E9%BB%91%E8%89%B2%E7%94%B5%E6%B1%A0%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%20%E4%B8%93%E4%B8%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1&image_size=landscape_4_3",
    category: "agri",
    specs: [
      { label: "容量", value: "12000 mAh / 444 Wh" },
      { label: "充电时间", value: "~12分钟(快充)" },
      { label: "循环寿命", value: "1000 次" },
      { label: "工作温度", value: "-20°C ~ 45°C" },
    ],
    scenes: ["连续作业供电", "电池轮换保障"],

  },

  /* ═══════════════ 六、吊运运输设备 ═══════════════ */
  {
    id: "flycart30",
    name: "DJI FlyCart 30 运输无人机",
    model: "FlyCart 30",
    tagline: "30kg载重 · 大疆首款民用货运无人机",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=DJI%20FlyCart%2030%20%E8%BF%90%E8%BE%93%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E8%B4%A7%E8%BF%90%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E5%A4%A7%E8%BD%BD%E9%87%8D%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E5%85%AD%E6%97%8B%E7%BF%BC%E8%B4%A7%E8%BF%90%E6%9C%BA%20%E9%BB%91%E8%89%B2%E6%9C%BA%E8%BA%AB%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%20%E4%B8%93%E4%B8%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1&image_size=landscape_4_3",
    category: "lift",
    specs: [
      { label: "载重能力", value: "30 kg" },
      { label: "空载续航", value: "28 min" },
      { label: "货箱容积", value: "96 L" },
      { label: "投放精度", value: "±1 m" },
    ],
    scenes: ["物资运输", "应急投送", "建筑吊运", "山区配送"],
    highlight: true,
  },
  {
    id: "heavy-lift-multi",
    name: "重型多旋翼吊运平台",
    model: "Custom Heavy-Lift Octocopter",
    tagline: "八旋翼重载 · 定制化解决方案",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=%E9%87%8D%E5%9E%8B%E5%A4%9A%E6%97%8B%E7%BF%BC%E8%B0%83%E8%BF%90%E5%B9%B3%E5%8F%B0%20%E5%85%AB%E6%97%8B%E7%BF%BC%E9%87%8D%E8%BD%BD%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E5%B7%A8%E5%9E%8B%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E5%B7%A5%E4%B8%9A%E7%BA%A7%E6%97%A0%E4%BA%BA%E6%9C%BA%20%E9%BB%91%E8%89%B2%E4%B8%93%E4%B8%9A%E8%AE%BE%E5%A4%87%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%20%E4%B8%93%E4%B8%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1&image_size=landscape_4_3",
    category: "lift",
    specs: [
      { label: "载重范围", value: "10 ~ 50 kg 可调" },
      { label: "动力配置", value: "8× 大功率电机" },
      { label: "安全冗余", value: "单桨失效安全着陆" },
      { label: "定制选项", value: "抛物/索降/空投" },
    ],
    scenes: ["重型设备吊运", "应急救援", "特殊载荷任务"],

  },

  /* ═══════════════ 七、专业影像器材 ═══════════════ */
  {
    id: "red-komodo",
    name: "RED KOMODO-X 电影摄影机",
    model: "KOMODO-X 6K",
    tagline: "6K全球快门 · 影院级画质",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=RED%20KOMODO-X%20%E7%94%B5%E5%BD%B1%E6%91%84%E5%BD%B1%E6%9C%BA%206K%E5%85%A8%E7%90%83%E5%BF%AB%E9%97%A8%E7%94%B5%E5%BD%B1%E6%9C%BA%20%E4%B8%93%E4%B8%9A%E6%91%84%E5%BD%B1%E6%9C%BA%E8%BA%AB%20%E9%BB%91%E8%89%B2%E7%94%B5%E5%BD%B1%E6%9C%BA%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%20%E4%B8%93%E4%B8%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1&image_size=landscape_4_3",
    category: "camera",
    specs: [
      { label: "传感器", value: "6K S35 全球快门" },
      { label: "动态范围", value: "17+ 档" },
      { label: "录制格式", value: "REDCODE RAW" },
      { label: "重量", value: "1.12 kg" },
    ],
    scenes: ["电影拍摄", "商业广告", "纪录片"],
    highlight: true,
  },
  {
    id: "sony-a7s3",
    name: "Sony A7S III 微单相机",
    model: "α7S III",
    tagline: "低光王者 · 4K 120fps",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sony%20A7S%20III%20%E5%BE%AE%E5%8D%95%E7%9B%B8%E6%9C%BA%20%E7%B4%A2%E5%B0%BC%E5%85%A8%E7%94%BB%E5%B9%85%E7%9B%B8%E6%9C%BA%20%E9%BB%91%E8%89%B2%E4%B8%93%E4%B8%9A%E7%9B%B8%E6%9C%BA%20%E4%BD%8E%E5%85%89%E7%8E%8B%E8%80%85%E7%9B%B8%E6%9C%BA%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%20%E4%B8%93%E4%B8%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1&image_size=landscape_4_3",
    category: "camera",
    specs: [
      { label: "传感器", value: "1210万像素 BSI-CMOS" },
      { label: "感光度", value: "ISO 40-409600" },
      { label: "视频", value: "4K 120fps / 1080p 240fps" },
      { label: "对焦", value: "693点相位AF" },
    ],
    scenes: ["弱光航拍", "婚礼跟拍", "活动记录"],
  },
  {
    id: "canon-r5",
    name: "Canon EOS R5 全画幅微单",
    model: "EOS R5",
    tagline: "4500万像素 · 8K视频",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Canon%20EOS%20R5%20%E5%85%A8%E7%94%BB%E5%B9%85%E5%BE%AE%E5%8D%95%E7%9B%B8%E6%9C%BA%20%E4%BD%B3%E8%83%BD%E5%85%A8%E7%94%BB%E5%B9%85%E7%9B%B8%E6%9C%BA%20%E9%BB%91%E8%89%B2%E4%B8%93%E4%B8%9A%E7%9B%B8%E6%9C%BA%208K%E8%A7%86%E9%A2%91%E7%9B%B8%E6%9C%BA%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%20%E4%B8%93%E4%B8%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1&image_size=landscape_4_3",
    category: "camera",
    specs: [
      { label: "像素", value: "45 MP 全画幅" },
      { label: "视频", value: "8K RAW / 4K 120fps" },
      { label: "防抖", value: "机身5轴防抖+镜头防抖" },
      { label: "连拍", value: "12张/秒(机械)" },
    ],
    scenes: ["风光航拍", "商业摄影", "产品拍摄"],
  },
  {
    id: "bmpcc6k",
    name: "Blackmagic Pocket Cinema 6K Pro",
    model: "BMPCC 6K Pro",
    tagline: "口袋电影机 · 高性价比之选",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Blackmagic%20Pocket%20Cinema%206K%20Pro%20%E5%8F%A3%E8%A2%8B%E7%94%B5%E5%BD%B1%E6%9C%BA%20BMPCC%206K%20Pro%20%E4%B8%93%E4%B8%9A%E7%94%B5%E5%BD%B1%E6%91%84%E5%BD%B1%E6%9C%BA%20%E9%BB%91%E8%89%B2%E7%94%B5%E5%BD%B1%E6%9C%BA%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%20%E4%B8%93%E4%B8%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1&image_size=landscape_4_3",
    category: "camera",
    specs: [
      { label: "传感器", value: "6K Super 35 HDR" },
      { label: "动态范围", value: "13档" },
      { label: "ND滤镜", value: "内置 2/4/6档" },
      { label: "屏幕", value: "5\" 触摸HDR" },
    ],
    scenes: ["独立电影", "短视频创作", "低成本项目"],
  },
  {
    id: "gopro-hero",
    name: "GoPro HERO12 Black",
    model: "HERO12 Black",
    tagline: "极限运动 · 第一视角记录",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GoPro%20HERO12%20Black%20%E8%BF%90%E5%8A%A8%E7%9B%B8%E6%9C%BA%20%E6%9E%81%E9%99%90%E8%BF%90%E5%8A%A8%E7%9B%B8%E6%9C%BA%20%E9%BB%91%E8%89%B2%E8%BF%90%E5%8A%A8%E7%9B%B8%E6%9C%BA%20%E9%98%B2%E6%B0%B4%E8%BF%90%E5%8A%A8%E7%9B%B8%E6%9C%BA%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%20%E4%B8%93%E4%B8%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1&image_size=landscape_4_3",
    category: "camera",
    specs: [
      { label: "视频", value: "5.3K60 / 4K120" },
      { label: "防抖", value: "HyperSmooth 6.0" },
      { label: "防水", value: "33ft 无需外壳" },
      { label: "重量", value: "154 g" },
    ],
    scenes: ["FPV穿越", "第一人称航拍", "运动记录"],
  },
  {
    id: "insta360-x4",
    name: "Insta360 X4 全景相机",
    model: "X4",
    tagline: "8K全景VR · 一键成片",
    productImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Insta360%20X4%20%E5%85%A8%E6%99%AF%E7%9B%B8%E6%9C%BA%208K%E5%85%A8%E6%99%AFVR%E7%9B%B8%E6%9C%BA%20%E5%8D%B0%E8%B1%A1360%E8%BF%90%E5%8A%A8%E7%9B%B8%E6%9C%BA%20%E9%BB%91%E8%89%B2%E6%91%84%E5%83%8F%E7%9B%B8%E6%9C%BA%20%E7%9C%9F%E5%AE%9E%E4%BA%A7%E5%93%81%E7%85%A7%E7%89%87%20%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%20%E4%B8%93%E4%B8%9A%E4%BA%A7%E5%93%81%E6%91%84%E5%BD%B1&image_size=landscape_4_3",
    category: "camera",
    specs: [
      { label: "视频", value: "8K 360° 全景" },
      { label: "照片", value: "72MP 全景" },
      { label: "AI剪辑", value: "AI自动成片" },
      { label: "防抖", value: "FlowState 2.0" },
    ],
    scenes: ["VR全景航拍", "房产漫游", "旅游宣传"],
  },
];

/* ========== 场景图标映射 ========== */
const SCENE_ICONS: Record<string, React.ForwardRefExoticComponent<any>> = {
  婚庆航拍: Heart,
  房地产: Building,
  宣传片: VideoCamera,
  电影拍摄: FilmStrip,
  测绘建模: MapTrifold,
  电力巡检: ShieldCheck,
  应急搜救: Users,
  节日庆典: Sparkle,
  品牌发布: Lightbulb,
  活动直播: Broadcast,
  工程记录: Building,
  常规航拍: Camera,
  培训教学: VideoCamera,
  正射影像: MapTrifold,
  三维建模: Cube,
  消防应急: ShieldCheck,
  公安侦查: Eye,
  海事巡查: Waves,
  环境监测: TreeEvergreen,
  地形测绘: MapTrifold,
  林业调查: TreeEvergreen,
  矿山测量: Gauge,
  BIM建模: Cube,
  城市测绘: MapTrifold,
  不动产确权: Building,
  管线检测: CellSignalHigh,
  施工放样: Gauge,
  超远距航拍: Camera,
  影视直播: Broadcast,
  赛事转播: Broadcast,
  专业航拍: Camera,
  影视制作: FilmStrip,
  现场监看: MonitorPlay,
  户外航拍: Camera,
  日光环境: Sun,
  导演实时监看: MonitorPlay,
  多机位直播: Broadcast,
  访谈节目: VideoCamera,
  产品发布会: Sparkle,
  婚礼灯光秀: Heart,
  城市地标: Building,
  灯光秀编程: Sparkle,
  彩排仿真: MonitorPlay,
  现场总控: MonitorPlay,
  编队定位基准: CellSignalHigh,
  集群协同保障: WifiHigh,
  大田作物: Plant,
  果园植保: Plant,
  水稻田: Plant,
  林业防治: TreeEvergreen,
  丘陵山地: TreeEvergreen,
  小地块: Plant,
  "茶园/果园": Plant,
  设施农业: Plant,
  连续作业供电: BatteryCharging,
  电池轮换保障: BatteryCharging,
  物资运输: Truck,
  应急投送: Package,
  建筑吊运: Package,
  山区配送: Truck,
  重型设备吊运: Package,
  应急救援: ShieldCheck,
  特殊载荷任务: Package,
  商业广告: FilmStrip,
  纪录片: FilmStrip,
  弱光航拍: Camera,
  婚礼跟拍: Heart,
  活动记录: VideoCamera,
  风光航拍: Camera,
  商业摄影: Camera,
  产品拍摄: Camera,
  独立电影: FilmStrip,
  短视频创作: VideoCamera,
  低成本项目: Camera,
  FPV穿越: AirplaneTilt,
  第一人称航拍: Camera,
  运动记录: VideoCamera,
  VR全景航拍: Globe,
  房产漫游: Building,
  旅游宣传: MapTrifold,
};

// Sun图标已在顶部导入

/* ========== 动画卡片组件 ========== */
function AnimatedCard({
  children,
  index,
  className = "",
}: {
  children: React.ReactNode;
  index: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ========== 设备卡片组件 ========== */
function EquipmentCard({ item, index }: { item: EquipmentItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <AnimatedCard index={index}>
      <motion.div
        className="group relative overflow-hidden rounded-xl border border-[#dde8ef] bg-white shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-[#0077b6]/30 hover:shadow-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.01 }}
      >
        {/* 高亮标记 */}
        {item.highlight && (
          <div className="absolute right-2.5 top-2.5 z-20">
            <Badge className="border-[#e65100]/40 bg-[#e65100]/10 text-[9px] font-bold text-[#e65100] px-2 py-0.5">
              推荐
            </Badge>
          </div>
        )}

        {/* 产品图片区 */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#f0f4f8] to-[#e8eef3]">
          {!imgFailed ? (
            <img
              src={item.productImage}
              alt={`${item.name}`}
              className="h-full w-full object-cover transition-transform duration-600 group-hover:scale-105"
              loading="lazy"
              onError={() => setImgFailed(true)}
            />
          ) : (
            /* 降级占位：带图标和型号名 */
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#eef4f9] to-[#dde8ef]">
              <Airplane size={32} weight="duotone" className="text-[#94a3b8]" />
              <span className="text-xs font-medium text-[#64748b] text-center px-3">{item.name}</span>
            </div>
          )}
          {/* 底部渐变 */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/[0.06] to-transparent pointer-events-none" />
        </div>

        {/* 信息区 */}
        <div className="p-4 pb-5">
          {/* 名称行 */}
          <div className="mb-1 flex items-start justify-between gap-2">
            <div>
              <h3 className="text-sm font-bold tracking-tight text-[#1a2744] group-hover:text-[#0077b6] transition-colors">
                {item.name}
              </h3>
              <p className="mt-0.5 text-[10px] font-medium tracking-wide text-[#94a3b8] uppercase">
                {item.model}
              </p>
            </div>
          </div>

          {/* 定位语 */}
          <p className="mb-2.5 text-[11px] leading-relaxed text-[#0077b6]/70 font-medium">
            {item.tagline}
          </p>

          {/* 核心参数 */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-1 mb-2.5">
            {item.specs.map((spec) => (
              <div key={spec.label} className="flex items-center gap-1">
                <span className="text-[9px] text-[#94a3b8]">{spec.label}</span>
                <span className="text-[10px] font-semibold text-[#1a2744]">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* 适用场景标签 */}
          <div className="flex flex-wrap gap-1">
            {item.scenes.slice(0, 3).map((scene) => {
              const IconComp = SCENE_ICONS[scene];
              return (
                <Badge
                  key={scene}
                  variant="outline"
                  className="border-[#dde8ef] bg-[#f8fafc] text-[9px] text-[#557090] gap-0.5 px-1.5 py-px"
                >
                  {IconComp && <IconComp size={9} weight="fill" />}
                  {scene}
                </Badge>
              );
            })}
            {item.scenes.length > 3 && (
              <Badge variant="outline" className="border-[#dde8ef] bg-[#f8fafc] text-[9px] text-[#94a3b8] px-1.5 py-px">
                +{item.scenes.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatedCard>
  );
}

/* ========== 统计数字动画组件 ========== */
function StatNumber({
  value,
  label,
  delay = 0,
}: {
  value: string;
  label: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
    >
      <div className="text-2xl sm:text-3xl font-bold text-[#0077b6]">{value}</div>
      <div className="mt-0.5 text-[10px] sm:text-xs text-[#94a3b8] tracking-wide">{label}</div>
    </motion.div>
  );
}

/* ========== 分类统计 ========== */
const CATEGORY_STATS: Record<CategoryKey, { count: number; label: string }> = {
  all: { count: 0, label: "全部" }, // 动态计算
  aerial: { count: 5, label: "航拍摄影" },
  survey: { count: 5, label: "测绘建模" },
  live: { count: 5, label: "直播图传" },
  swarm: { count: 3, label: "编队表演" },
  agri: { count: 3, label: "植保农业" },
  lift: { count: 2, label: "吊运运输" },
  camera: { count: 7, label: "影像器材" },
};

/* ========== 主页面组件 ========== */
export default function EquipmentPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const filteredEquipment = useCallback(() => {
    if (activeCategory === "all") return EQUIPMENT_LIST;
    return EQUIPMENT_LIST.filter((eq) => eq.category === activeCategory);
  }, [activeCategory]);

  const totalCount = filteredEquipment().length;

  return (
    <div className="flex flex-col">
      {/* ================================================================
          HERO区
      ================================================================== */}
      <section className="relative flex min-h-[42vh] items-center justify-center overflow-hidden bg-gradient-to-br from-[#eef4f9] via-[#e8f2f8] to-[#e0ecf5]">
        {/* 背景装饰 */}
        <Spotlight className="-top-20 left-1/2 -translate-x-1/2 md:left-1/3" fill="rgba(0,119,182,0.05)" />
        <Spotlight className="-top-10 right-1/4" fill="rgba(230,81,0,0.04)" />

        {/* Hero 内容 */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="mb-3 inline-block rounded-full border border-[#0077b6]/20 bg-[#0077b6]/5 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#0077b6]">
              Equipment Showcase
            </span>

            <h1 className="mt-3 mb-3 text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-[#1a2744] leading-tight">
              专业设备 ·{" "}
              <span className="bg-gradient-to-r from-[#0077b6] to-[#00b4d8] bg-clip-text text-transparent">全场景覆盖</span>
            </h1>

            <p className="mx-auto mb-6 max-w-2xl text-sm sm:text-base leading-relaxed text-[#557090]">
              覆盖<span className="font-semibold text-[#1a2744] mx-0.5">8大类</span>、
              <span className="font-semibold text-[#1a2744] mx-0.5">32款+</span>专业设备，
              从航拍摄影到测绘建模，从编队表演到吊运运输，一站式满足各类无人机应用需求
            </p>

            {/* 数据统计 */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
              <StatNumber value="8+" label="设备类别" delay={0.1} />
              <div className="hidden sm:block h-7 w-px bg-[#dde8ef]" />
              <StatNumber value="32+" label="设备型号" delay={0.15} />
              <div className="hidden sm:block h-7 w-px bg-[#dde8ef]" />
              <StatNumber value="6大" label="服务场景" delay={0.2} />
              <div className="hidden sm:block h-7 w-px bg-[#dde8ef]" />
              <StatNumber value="100%" label="原厂正品" delay={0.25} />
            </div>
          </motion.div>
        </div>

        {/* 底部分隔线 */}
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-[#0077b6]/30 to-transparent" />
        </div>
      </section>

      {/* ====== 面包屑 ====== */}
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-3">
        <Breadcrumb items={[{ label: "首页", href: "/" }, { label: "设备展示" }]} />
      </section>

      {/* ================================================================
          分类导航栏
      ================================================================== */}
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pb-5">
        <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-xl border border-[#dde8ef] bg-white p-1.5 shadow-sm">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`relative inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-medium transition-all duration-250 ${
                  isActive
                    ? "bg-[#0077b6]/10 text-[#0077b6]"
                    : "text-[#557090] hover:text-[#1a2744] hover:bg-[#f5f9fc]"
                }`}
                title={cat.desc}
              >
                <Icon size={13} weight={isActive ? "fill" : "duotone"} />
                {cat.label}
                {!isActive && (
                  <span className="text-[9px] text-[#94a3b8]">({CATEGORY_STATS[cat.key].count})</span>
                )}
              </button>
            );
          })}
        </div>
        <p className="mt-2 text-center text-[10px] text-[#94a3b8]">
          当前分类：<span className="font-medium text-[#557090]">{CATEGORIES.find(c => c.key === activeCategory)?.label}</span> · 共 <span className="font-semibold text-[#0077b6]">{totalCount}</span> 件设备
        </p>
      </section>

      {/* ================================================================
          设备展示网格
      ================================================================== */}
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filteredEquipment().map((item, index) => (
              <EquipmentCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 分隔线 */}
      <div className="mx-auto h-px w-full max-w-[1400px] bg-gradient-to-r from-transparent via-[#dde8ef] to-transparent" />

      {/* ================================================================
          CTA区域
      ================================================================== */}
      <section className="relative overflow-hidden border-t border-[#dde8ef] py-14 md:py-18 bg-gradient-to-br from-[#f0f7fa] via-white to-[#fafbfd]">
        <div className="relative z-10 mx-auto max-w-[900px] px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <WifiHigh weight="duotone" size={36} className="mx-auto mb-4 text-[#0077b6]" />
            <h3 className="mb-3 text-xl sm:text-2xl font-heading font-bold text-[#1a2744]">
              需要了解具体设备的详细参数或租赁方案？
            </h3>
            <p className="mx-auto mb-7 max-w-lg text-sm text-[#557090] leading-relaxed">
              我们的技术团队将根据您的项目需求，推荐最优设备组合方案
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #0077b6 0%, #00b4d8 100%)" }}
            >
              联系技术顾问
              <ArrowRight weight="bold" size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-[10px] text-[#94a3b8]">
              <span className="flex items-center gap-1"><TreeEvergreen size={11} weight="fill" /> 免费技术咨询</span>
              <span className="flex items-center gap-1"><Users size={11} weight="fill" /> 48小时内响应</span>
              <span className="flex items-center gap-1"><ShieldCheck size={11} weight="fill" /> 定制设备方案</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
