"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { IMAGES } from "@/lib/images";

/* 精选作品数据 */
const SHOWCASE_ITEMS = [
  {
    id: 1,
    title: "山城夜景",
    description: "璀璨灯火下的城市脉搏",
    category: "城市宣传",
    image: IMAGES.chongqingNight,
    gridClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: 2,
    title: "CBD天际线",
    description: "现代都市的天际轮廓",
    category: "房地产",
    image: IMAGES.cbdSkyline,
    gridClass: "",
  },
  {
    id: 3,
    title: "影视级航拍",
    description: "电影级画面质感呈现",
    category: "影视拍摄",
    image: IMAGES.filmCinematic,
    gridClass: "",
  },
  {
    id: 4,
    title: "工程监测",
    description: "精准视角的工程记录",
    category: "工程航拍",
    image: IMAGES.constructionSite,
    gridClass: "",
  },
  {
    id: 5,
    title: "编队表演",
    description: "无人机编队视觉盛宴",
    category: "活动赛事",
    image: IMAGES.droneSwarm,
    gridClass: "",
  },
  {
    id: 6,
    title: "VR全景漫游",
    description: "沉浸式全景体验",
    category: "VR全景",
    image: IMAGES.vrPanorama,
    gridClass: "md:col-span-2",
  },
];

export default function ShowcaseGallery() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-container py-20 md:py-28">
      {/* 区块标题 */}
      <div className="flex items-end justify-between mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="overline-label">AERIAL SHOWCASE</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-heading font-bold gradient-text">
            精选作品
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-md">
            每一帧都是对极致的追求
            <br />
            用镜头记录世界的不同角度
          </p>
        </motion.div>

        <Link
          href="/portfolio"
          className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full border border-tech-cyan/30 text-sm text-tech-cyan hover:bg-tech-cyan/5 hover:border-tech-cyan/50 transition-all duration-300 group"
        >
          查看全部
          <ArrowRight
            size={14}
            weight="bold"
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>

      {/* 作品画廊网格 - 非对称Bento布局 */}
      <div className="grid grid-cols-2 md:grid-cols-3 md:grid-template-bento gap-3 md:gap-3 [&_]:[grid-template-columns:1.6fr_1fr_1fr] [&_]:[grid-template-rows:280px_220px]">
        {SHOWCASE_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              delay: 0.1 + index * 0.1,
              duration: 0.55,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={`group relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer ${item.gridClass}`}
          >
            <Link href="/portfolio" className="block relative w-full h-full min-h-[200px] md:min-h-0">
              {/* 图片容器 */}
              <div className="relative overflow-hidden bg-gradient-to-br from-space-blue to-space-deep w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
                  sizes={
                    item.id === 1
                      ? "(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px"
                      : item.id === 6
                        ? "(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 650px"
                        : "(max-width: 768px) 50vw, (max-width: 1200px) 28vw, 280px"
                  }
                />

                {/* 渐变遮罩层 - 从下到上 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Hover 光晕效果 */}
                <div className="absolute inset-0 bg-gradient-to-br from-tech-cyan/0 via-transparent to-aerial-orange/0 group-hover:from-tech-cyan/10 group-hover:to-aerial-orange/8 transition-all duration-500" />
              </div>

              {/* Hover 信息浮层 - 从底部滑入 */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                <div className="transform transition-all duration-400 ease-out translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  {/* 分类标签 pill */}
                  <span className="inline-flex items-center mb-2 px-3 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-full bg-tech-cyan/20 backdrop-blur-md text-tech-cyan border border-tech-cyan/30">
                    {item.category}
                  </span>

                  {/* 标题 + 描述 */}
                  <h3 className="text-white font-bold text-base md:text-lg leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/70 leading-relaxed line-clamp-1">
                    {item.description}
                  </p>

                  {/* 右下角查看箭头 */}
                  <div className="flex justify-end mt-2">
                    <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 transition-colors duration-300 group-hover:bg-tech-cyan/30 group-hover:border-tech-cyan/50">
                      <ArrowRight
                        size={12}
                        weight="bold"
                        className="text-white transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 底部装饰线 */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-tech-cyan/0 to-transparent group-hover:via-tech-cyan/70 transition-all duration-500" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* 移动端 CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          delay: 0.8,
          duration: 0.5,
          ease: "easeOut",
        }}
        className="mt-10 text-center sm:hidden"
      >
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-tech-cyan border border-tech-cyan/30 rounded-full hover:bg-tech-cyan/5 hover:border-tech-cyan/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 group"
        >
          <span>探索全部作品</span>
          <ArrowRight
            weight="bold"
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </motion.div>
    </section>
  );
}
