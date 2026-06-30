"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useRef, useEffect, useState } from "react";
import {
  ClockCounterClockwise,
  Camera,
  AirplaneTilt,
  MapPinArea,
  UsersThree,
  Heart,
} from "@phosphor-icons/react/dist/ssr";

const STATS_DATA = [
  {
    icon: ClockCounterClockwise,
    num: 11,
    suffix: "年",
    label: "技术积淀",
    desc: "2015年成立至今",
    progress: 100,
    color: "#0077B6",
    colorLight: "#00b4d8",
  },
  {
    icon: UsersThree,
    num: 500,
    suffix: "+",
    label: "完成项目",
    desc: "覆盖西南地区",
    progress: 85,
    color: "#06b6d4",
    colorLight: "#22d3ee",
  },
  {
    icon: Heart,
    num: 98,
    suffix: "%",
    label: "客户好评率",
    desc: "零差评记录",
    progress: 98,
    color: "#f97316",
    colorLight: "#fb923c",
  },
  {
    icon: Camera,
    num: 7,
    suffix: "+",
    label: "专业设备",
    desc: "RED/A7S/Inspire3",
    progress: 75,
    color: "#8b5cf6",
    colorLight: "#a78bfa",
  },
  {
    icon: AirplaneTilt,
    num: 12,
    suffix: "+",
    label: "服务类型",
    desc: "航拍·航测·直播·VR",
    progress: 90,
    color: "#0891b2",
    colorLight: "#06b6d4",
  },
  {
    icon: MapPinArea,
    num: 100,
    suffix: "%",
    label: "重庆全域",
    desc: "38个区县全覆盖",
    progress: 100,
    color: "#10b981",
    colorLight: "#34d399",
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    const controls = animate(motionValue, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => { controls.stop(); unsubscribe(); };
  }, [motionValue, value]);

  return (
    <span className="font-mono">
      {displayValue}
      {suffix}
    </span>
  );
}

function CircularProgress({ progress, color, colorLight, size = 120, strokeWidth = 8 }: { 
  progress: number; 
  color: string; 
  colorLight: string;
  size?: number; 
  strokeWidth?: number;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true });
  const [progressValue, setProgressValue] = useState(0);
  
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progressValue / 100) * circumference;

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, progress, {
        duration: 1.5,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setProgressValue(latest),
      });
      return () => controls.stop();
    }
  }, [isInView, progress]);

  return (
    <svg ref={ref} width={size} height={size} className="-rotate-90">
      <defs>
        <linearGradient id={`grad-${color.replace('#', '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colorLight} />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
        <filter id={`glow-${color.replace('#', '')}`}>
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth={strokeWidth}
      />
      
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={`url(#grad-${color.replace('#', '')})`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        filter={`url(#glow-${color.replace('#', '')})`}
        style={{ transition: "stroke-dashoffset 0.5s ease" }}
      />
    </svg>
  );
}

function HeroStatCard({ stat, index, isInView }: { stat: typeof STATS_DATA[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative col-span-2 row-span-2"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-[#0077B6] via-[#023E8A] to-[#03045E]" />
        
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#00b4d8]/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-[#f77f00]/10 blur-3xl" />
        
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}
        />

        <svg className="absolute top-6 right-6 w-24 h-24 opacity-20" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="1" strokeDasharray="2 4" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="white" strokeWidth="1" />
        </svg>

        <svg className="absolute bottom-0 left-0 w-full h-20 opacity-10" viewBox="0 0 400 80" preserveAspectRatio="none">
          <path d="M0,40 Q100,10 200,40 T400,40 L400,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 p-8 md:p-10 text-white h-full flex flex-col">
        <div className="flex items-start justify-between mb-8">
          <div className="relative">
            <div className="absolute -inset-2 bg-white/15 rounded-2xl blur-xl" />
            <div className="relative w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
              <stat.icon weight="duotone" size={36} className="text-white" />
            </div>
          </div>
          
          <div className="text-right">
            <span className="text-xs font-medium text-white/50 tracking-widest uppercase">CORE</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center text-center mb-8">
          <div className="relative mb-6">
            <CircularProgress 
              progress={stat.progress} 
              color={stat.color} 
              colorLight={stat.colorLight}
              size={160}
              strokeWidth={10}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl md:text-6xl font-black font-mono tracking-tight">
                <AnimatedNumber value={stat.num} suffix={stat.suffix} />
              </span>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-2">{stat.label}</h3>
          <p className="text-white/60 text-base">{stat.desc}</p>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/50">实时数据</span>
          </div>
          <div className="text-right">
            <span className="text-lg font-bold font-mono">{stat.progress}%</span>
            <span className="text-xs text-white/50 ml-1">完成度</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MediumStatCard({ stat, index, isInView }: { stat: typeof STATS_DATA[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative col-span-1 row-span-1"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 shadow-lg shadow-slate-200/30 group-hover:shadow-xl group-hover:shadow-slate-200/50 transition-all duration-500 group-hover:-translate-y-1">
        <div className="absolute top-0 right-0 w-32 h-32 -translate-y-1/2 translate-x-1/2">
          <div className={`absolute inset-0 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`} style={{ backgroundColor: stat.color }} />
        </div>
        
        <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundColor: stat.color }} />
      </div>

      <div className="relative p-6 h-full">
        <div className="flex items-start justify-between mb-5">
          <div className="relative">
            <div className="absolute -inset-1.5 rounded-xl blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-300" style={{ backgroundColor: stat.color }} />
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-400 shadow-sm">
              <stat.icon weight="duotone" size={24} style={{ color: stat.color }} />
            </div>
          </div>
          
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: stat.color }} />
            <span className="text-[10px] font-mono text-slate-400">{stat.progress}%</span>
          </div>
        </div>

        <div className="mb-5">
          <span className="text-4xl font-black font-mono leading-none" style={{ color: stat.color }}>
            <AnimatedNumber value={stat.num} suffix={stat.suffix} />
          </span>
        </div>

        <div>
          <h3 className="text-base font-bold text-slate-800 mb-1">{stat.label}</h3>
          <p className="text-xs text-slate-500 line-clamp-2">{stat.desc}</p>
        </div>

        <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${stat.progress}%` } : {}}
            transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="h-full rounded-full"
            style={{ 
              background: `linear-gradient(90deg, ${stat.colorLight}, ${stat.color})`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function SmallStatCard({ stat, index, isInView }: { stat: typeof STATS_DATA[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative col-span-1"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/50 group-hover:border-slate-300/60 transition-all duration-300">
        <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundColor: stat.color }} />
      </div>

      <div className="relative p-5 flex items-center gap-4">
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 rounded-xl blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundColor: stat.color }} />
          <div className="relative w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-105 group-hover:-rotate-6 transition-all duration-300"
            style={{ backgroundColor: `${stat.color}15` }}
          >
            <stat.icon weight="duotone" size={22} style={{ color: stat.color }} />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-1 mb-0.5">
            <span className="text-2xl font-bold font-mono leading-none" style={{ color: stat.color }}>
              <AnimatedNumber value={stat.num} suffix={stat.suffix} />
            </span>
          </div>
          <p className="text-sm font-semibold text-slate-700 truncate">{stat.label}</p>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-0.5 h-10 bg-gradient-to-b from-transparent via-current to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300" style={{ color: stat.color }} />
    </motion.div>
  );
}

function WideStatCard({ stat, index, isInView }: { stat: typeof STATS_DATA[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4"
    >
      <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#10b981] via-[#059669] to-[#047857]" />
        
        <div className="absolute -top-40 -right-20 w-80 h-80 rounded-full bg-[#34d399]/20 blur-3xl" />
        <div className="absolute -bottom-20 left-20 w-64 h-64 rounded-full bg-[#06b6d4]/10 blur-3xl" />
        
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.3) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.3) 75%, transparent 75%)`,
            backgroundSize: '20px 20px'
          }}
        />

        <svg className="absolute right-0 top-0 h-full w-48 opacity-10" viewBox="0 0 200 200">
          <path d="M0,100 Q50,50 100,100 T200,100" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M0,120 Q50,70 100,120 T200,120" fill="none" stroke="white" strokeWidth="1" strokeDasharray="2 4" />
          <path d="M0,80 Q50,30 100,80 T200,80" fill="none" stroke="white" strokeWidth="1" strokeDasharray="2 4" />
        </svg>
      </div>

      <div className="relative z-10 p-7 md:p-8 text-white flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex items-center gap-5 flex-1">
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-2 bg-white/20 rounded-2xl blur-lg" />
            <div className="relative w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <stat.icon weight="duotone" size={28} className="text-white" />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-1">{stat.label}</h3>
            <p className="text-white/70 text-sm">{stat.desc}</p>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-black font-mono leading-none mb-1">
              <AnimatedNumber value={stat.num} suffix={stat.suffix} />
            </div>
            <p className="text-xs text-white/50 tracking-wider uppercase">覆盖范围</p>
          </div>
          
          <div className="hidden sm:block w-px h-16 bg-white/20" />
          
          <div className="hidden sm:block space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-300" />
              <span className="text-sm text-white/70">38个区县</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-300" />
              <span className="text-sm text-white/70">全域覆盖</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-300" />
              <span className="text-sm text-white/70">100%完成度</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function StatsDashboard() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const heroStat = STATS_DATA[0];
  const mediumStats = STATS_DATA.slice(1, 3);
  const smallStats = STATS_DATA.slice(3, 5);
  const wideStat = STATS_DATA[5];

  return (
    <section ref={ref} className="section-container py-20 md:py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 -translate-y-1/2 rounded-full bg-[#0077B6]/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 translate-y-1/2 rounded-full bg-[#f77f00]/5 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <div
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,119,182,0.8) 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
          className="h-full w-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center relative z-10"
      >
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 border border-slate-200/60 shadow-sm mb-5">
          <span className="w-2 h-2 rounded-full bg-[#0077B6] animate-pulse" />
          <span className="text-xs font-semibold tracking-[0.2em] text-slate-600 uppercase">Data Cockpit</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
          <span className="text-slate-800">数据说话 · </span>
          <span className="gradient-text">实力见证</span>
        </h2>
        <p className="mt-3 max-w-lg mx-auto text-base text-slate-500">
          专业航空数据驾驶舱 · 用实力赢得信赖
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#0077B6]/30" />
          <span className="text-xs text-slate-400 tracking-[0.3em] uppercase">Since 2015</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#0077B6]/30" />
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-5 relative z-10 auto-rows-fr">
        <HeroStatCard stat={heroStat} index={0} isInView={isInView} />
        
        {mediumStats.map((stat, i) => (
          <MediumStatCard key={stat.label} stat={stat} index={i + 1} isInView={isInView} />
        ))}

        {smallStats.map((stat, i) => (
          <SmallStatCard key={stat.label} stat={stat} index={i + 3} isInView={isInView} />
        ))}

        <WideStatCard stat={wideStat} index={5} isInView={isInView} />
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
        className="mx-auto mt-16 h-px max-w-md"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,119,182,0.3), transparent)"
        }}
      />
    </section>
  );
}
