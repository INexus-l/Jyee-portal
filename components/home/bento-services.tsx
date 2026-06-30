"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FilmStrip,
  Heart,
  Buildings,
  CalendarBlank,
  City,
  Factory,
  FilmReel,
  Ruler,
  VirtualReality,
  Broadcast,
  Airplane,
  AirplaneTilt,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { IMAGES } from "@/lib/images";

/* Bento Grid服务展示 — 图文混排的Bento Grid布局 */
const SERVICES = [
  /* 大卡(2×2)：影视级航拍服务 */
  {
    title: "影视级航拍服务",
    description:
      "RED/A7S等专业影像设备，电影级画质，为纪录片、宣传片、广告片提供极致视觉体验。从前期勘景到后期交付，全流程专业把控。",
    icon: FilmReel,
    className: "md:col-span-2 md:row-span-2",
    featured: true,
    image: IMAGES.filmCinematic,
  },
  /* 中卡(1×1) × 7 */
  {
    title: "婚庆航拍",
    description: "记录人生最美时刻，上帝视角见证爱情",
    icon: Heart,
    className: "",
    image: IMAGES.weddingOutdoor,
  },
  {
    title: "房地产航拍",
    description: "全景展示楼盘区位与周边配套",
    icon: Buildings,
    className: "",
    image: IMAGES.realEstateHero,
  },
  {
    title: "活动赛事航拍",
    description: "大型活动、体育赛事的空中视角记录",
    icon: CalendarBlank,
    className: "",
    image: IMAGES.eventStadium,
  },
  {
    title: "城市宣传航拍",
    description: "展现城市风貌，助力文旅推广",
    icon: City,
    className: "",
    image: IMAGES.tourismCity,
  },
  {
    title: "企业品牌航拍",
    description: "企业形象、园区环境的空中呈现",
    icon: Factory,
    className: "",
    image: IMAGES.corporateCampus,
  },
  {
    title: "影视纪录片",
    description: "电影级画质，专业后期调色输出",
    icon: FilmStrip,
    className: "",
    image: IMAGES.filmCinematic,
  },
  {
    title: "工程监测航拍",
    description: "施工进度、地形测绘、工程验收",
    icon: Ruler,
    className: "",
    image: IMAGES.constructionSite,
  },
  /* 宽卡(2×1)：航测测绘服务 */
  {
    title: "航测测绘服务",
    description:
      "正射影像DOM、数字高程模型DEM、三维实景建模，为规划、设计、建设提供精准地理数据支撑。",
    icon: Ruler,
    className: "md:col-span-2",
    survey: true,
    image: IMAGES.engineeringProgress,
  },
  /* 小卡(1×1) × 3 */
  {
    title: "VR全景航拍",
    description: "720°沉浸式全景漫游体验",
    icon: VirtualReality,
    className: "",
    image: IMAGES.vrPanorama,
  },
  {
    title: "无人机直播",
    description: "多机位实时推流，活动直播首选",
    icon: Broadcast,
    className: "",
    image: IMAGES.liveStudio,
  },
  {
    title: "编队表演",
    description: "多机协同编队飞行，灯光秀表演",
    icon: Airplane,
    className: "",
    image: IMAGES.droneShow,
  },
];

export default function BentoServices() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-container py-20 md:py-24">
      {/* 区块标题 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <span className="overline-label">SERVICES</span>
        <h2 className="mt-3 text-3xl font-heading font-bold gradient-text sm:text-4xl">
          全场景航拍解决方案
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-sm text-muted-foreground">
          从婚庆记录到企业宣传，从影视创作到工程监测，我们提供全方位的专业航拍服务
        </p>
      </motion.div>

      {/* BentoGrid 服务卡片 */}
      <BentoGrid className="max-w-none">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              delay: index * 0.06,
              duration: 0.45,
              ease: "easeOut",
            }}
          >
            <div className={`group/bento relative overflow-hidden glass-card cursor-pointer border-white/[0.06] bg-white shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-tech-cyan/30 hover:shadow-xl hover:shadow-tech-cyan/10 dark:bg-black ${service.className || ""}`}>
              {/* 背景图片区域 */}
              <div className="relative overflow-hidden" style={{ minHeight: service.featured ? '200px' : '160px' }}>
                {/* 图片背景 */}
                <div className="absolute inset-0 bg-gradient-to-br from-space-blue to-space-deep">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/bento:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* 渐变遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* 悬停时的光晕效果 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-tech-cyan/0 to-aerial-orange/0 transition-all duration-500 group-hover/bento:from-tech-cyan/10 group-hover/bento:to-aerial-orange/10" />
                </div>

                {/* 图标叠加层 */}
                <div className="absolute top-4 right-4 z-10 rounded-lg bg-black/40 p-2 backdrop-blur-sm transition-all duration-300 group-hover/bento:scale-110 group-hover/bento:bg-tech-cyan/20">
                  <service.icon
                    weight="duotone"
                    size={service.featured ? 32 : 24}
                    className="text-tech-cyan"
                  />
                </div>
              </div>

              {/* 内容区域 */}
              <div className="relative z-10 p-5 -mt-8">
                {/* 标题和描述 */}
                <h3 className="mb-2 text-lg font-heading font-bold text-white group-hover/bento:text-tech-cyan transition-colors duration-300 line-clamp-2">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {service.description}
                </p>

                {/* 了解更多链接 */}
                <div className="flex items-center gap-2 text-sm font-medium text-tech-cyan opacity-0 transition-all duration-300 translate-y-2 group-hover/bento:opacity-100 group-hover/bento:translate-y-0">
                  <span>了解更多</span>
                  <ArrowRight weight="bold" size={16} className="transition-transform duration-300 group-hover/bento:translate-x-1" />
                </div>
              </div>

              {/* 底部装饰线 */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-tech-cyan/0 to-transparent transition-all duration-500 group-hover/bento:via-tech-cyan/50" />
            </div>
          </motion.div>
        ))}

        {/* CTA卡：查看全部服务 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{
            delay: SERVICES.length * 0.06,
            duration: 0.45,
          }}
          className="md:col-span-3"
        >
          <HoverBorderGradient containerClassName="w-full">
            <Link
              href="/services"
              className="group flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl py-12 text-lg font-semibold text-white transition-colors hover:text-tech-cyan"
            >
              <div className="rounded-full bg-gradient-to-br from-tech-cyan/20 to-aerial-orange/20 p-4 transition-transform duration-300 group-hover:scale-110">
                <AirplaneTilt weight="duotone" size={32} className="text-tech-cyan" />
              </div>
              <span>查看全部服务</span>
              <ArrowRight weight="bold" size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </HoverBorderGradient>
        </motion.div>
      </BentoGrid>
    </section>
  );
}
