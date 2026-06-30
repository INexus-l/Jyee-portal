"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import {
  Heart,
  Buildings,
  CalendarBlank,
  City,
  Factory,
  VirtualReality,
  Broadcast,
  Ruler,
} from "@phosphor-icons/react/dist/ssr";

/* 服务列表 */
const SERVICES = [
  {
    name: "婚庆航拍",
    href: "/services/wedding",
    icon: Heart,
  },
  {
    name: "房地产航拍",
    href: "/services/real-estate",
    icon: Buildings,
  },
  {
    name: "活动赛事",
    href: "/services/events",
    icon: CalendarBlank,
  },
  {
    name: "城市宣传",
    href: "/services/tourism",
    icon: City,
  },
  {
    name: "企业品牌",
    href: "/services/corporate",
    icon: Factory,
  },
  {
    name: "VR全景",
    href: "/services/vr",
    icon: VirtualReality,
  },
  {
    name: "无人机直播",
    href: "/services/live-stream",
    icon: Broadcast,
  },
  {
    name: "航测测绘",
    href: "/services/surveying",
    icon: Ruler,
  },
];

export default function ServiceLinks() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-12 md:py-16 bg-white/50 dark:bg-black/30">
      <div className="section-container">
        {/* 区块标签 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-8 text-center"
        >
          <span className="overline-label">OUR SERVICES</span>
        </motion.div>

        {/* 服务 Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.15,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: 0.2 + index * 0.05,
                duration: 0.35,
                ease: "easeOut",
              }}
            >
              <Link
                href={service.href}
                className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full border border-border/60 bg-white/80 dark:bg-white/5 backdrop-blur-sm text-foreground hover:border-tech-cyan/50 hover:bg-tech-cyan/5 dark:hover:bg-tech-cyan/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                <service.icon
                  weight="duotone"
                  size={18}
                  className="text-muted-foreground group-hover:text-tech-cyan transition-colors duration-300"
                />
                <span>{service.name}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
