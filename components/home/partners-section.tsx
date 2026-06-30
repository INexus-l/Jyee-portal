"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  FilmStrip,
  MonitorPlay,
  Heart,
  Buildings,
  CalendarBlank,
  Mountains,
  Factory,
  Megaphone,
} from "@phosphor-icons/react/dist/ssr";

/* 合作伙伴生态 — 客户类型展示 */

const CLIENT_TYPES = [
  { icon: FilmStrip, name: "影视制作" },
  { icon: MonitorPlay, name: "电视台媒体" },
  { icon: Heart, name: "婚庆公司" },
  { icon: Buildings, name: "房地产商" },
  { icon: CalendarBlank, name: "活动策划" },
  { icon: Mountains, name: "旅游景区" },
  { icon: Factory, name: "企业品牌" },
  { icon: Megaphone, name: "广告代理" },
];

export default function PartnersSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-container overflow-hidden py-16 md:py-20">
      {/* 区块标题 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <span className="overline-label">CLIENTS & PARTNERS</span>
        <h2 className="mt-3 text-3xl font-heading font-bold gradient-text sm:text-4xl">
          服务客户涵盖
        </h2>
      </motion.div>

      {/* 图标网格 — 移动端可横向滑动 */}
      <div className="-mx-4 snap-x snap-mandatory overflow-x-auto px-4 pb-4 scrollbar-hide sm:mx-0 sm:grid sm:grid-cols-2 sm:grid-flow-row lg:grid-cols-4 sm:overflow-visible sm:snap-none sm:gap-4">
        {CLIENT_TYPES.map((client, index) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: index * 0.06,
              duration: 0.45,
              ease: "easeOut",
            }}
            className="snap-center"
          >
            <div className="glass-card mx-1.5 flex min-h-[120px] flex-col items-center justify-center gap-3 rounded-xl px-4 sm:mx-0">
              <client.icon
                weight="duotone"
                size={32}
                className="text-tech-cyan/80"
              />
              <span className="text-sm font-medium text-muted-foreground">
                {client.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 隐藏滚动条样式 */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
