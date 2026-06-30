"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  List,
  Phone,
} from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import MobileDrawer from "./mobile-drawer";
import JiyiLogo from "@/components/ui/JiyiLogo";

/** 导航栏三种状态 */
type NavState = 1 | 2 | 3;

export default function Navbar() {
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);
  const [navState, setNavState] = useState<NavState>(1);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // 检测用户是否偏好减少动效
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // 监听滚动，计算导航状态
  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrollY(y);
    if (y < 100) setNavState(1);
    else if (y < 300) setNavState(2);
    else setNavState(3);
  }, []);

  useEffect(() => {
    handleScroll(); // 初始化
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // 根据状态计算样式 — 透明 → 毛玻璃渐变过渡
  const navStyles = {
    1: "bg-white/80 backdrop-blur-md h-[76px] border-b border-[#cce0ed]",
    2: "bg-white/90 backdrop-blur-xl h-[68px] border-b border-[#cce0ed]",
    3: "bg-white/95 backdrop-blur-2xl h-[64px] border-b border-[#cce0ed] shadow-sm",
  };

  // 链接文字颜色
  const linkColorClass = navState === 1 ? "text-slate-600" : "text-slate-700";

  return (
    <>
      <motion.header
        initial={prefersReducedMotion ? {} : { y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center px-4 sm:px-6 lg:px-10 xl:px-16 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          navStyles[navState]
        )}
      >
        <div className="mx-auto w-full max-w-[1400px] flex items-center justify-between">
          {/* Logo — 品牌图标 + 文字 */}
          <Link
            href="/"
            className="group relative transition-all duration-300"
          >
            <JiyiLogo
              size="md"
              showText={true}
              textColor={navState === 1 ? undefined : undefined}
            />
            {/* Logo hover微光 */}
            <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-gradient-to-r from-tech-cyan via-neon-glow to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
          </Link>

          {/* 桌面端导航 */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) =>
              "children" in item && item.children ? (
                <DropdownNavItem
                  key={item.label}
                  item={item}
                  pathname={pathname}
                  linkColorClass={linkColorClass}
                  navState={navState}
                />
              ) : (
                <NavLink
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  isActive={pathname === item.href && !("children" in item)}
                  linkColorClass={linkColorClass}
                />
              )
            )}
          </nav>

          {/* CTA按钮 + 移动端汉堡按钮 */}
          <div className="flex items-center gap-3">
            {/* CTA按钮 — gradient背景 + hover上浮+阴影增强 */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 relative overflow-hidden group"
              style={{
                background: "var(--gradient-cta)",
                boxShadow: "0 4px 16px rgba(247,127,0,0.25), inset 0 1px 0 rgba(255,255,255,0.15)"
              }}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                免费咨询
                <Phone size={14} weight="bold" className="-mr-1" />
              </span>
              {/* hover光效 */}
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>

            {/* 移动端汉堡按钮 — 精致动画 */}
            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                "xl:hidden inline-flex items-center justify-center size-10 rounded-xl transition-all duration-300",
                linkColorClass,
                "hover:bg-slate-100 hover:scale-105 active:scale-95 backdrop-blur-sm border border-[#cce0ed]"
              )}
              aria-label="打开菜单"
            >
              <List weight="bold" size={20} className="transition-transform duration-200 hover:rotate-90" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* 移动端抽屉 */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

/* ---------- 导航链接（带下划线动画） ---------- */
function NavLink({
  href,
  label,
  isActive,
  linkColorClass,
}: {
  href: string;
  label: string;
  isActive: boolean;
  linkColorClass: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-250 group",
        linkColorClass,
        "hover:text-tech-cyan hover:bg-slate-100",
        isActive && "text-tech-cyan"
      )}
    >
      <span className="relative z-10">{label}</span>
      {/* 激活态：固定下划线 */}
      {isActive && (
        <motion.div
          layoutId="navbar-active"
          className="absolute bottom-1 left-3 right-3 h-[1.5px] rounded-full"
          style={{ background: "linear-gradient(90deg, #00b4d8, #48cae4)" }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      {/* Hover态：从中间展开的渐变下划线 */}
      {!isActive && (
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] rounded-full group-hover:w-[calc(100%-24px)] transition-all duration-300 ease-out"
          style={{ background: "linear-gradient(90deg, transparent, #00b4d8, #48cae4, #00b4d8, transparent)" }}
        />
      )}
    </Link>
  );
}

/* ---------- 下拉菜单子项（桌面端） ---------- */
function DropdownNavItem({
  item,
  pathname,
  linkColorClass,
  navState,
}: {
  item: (typeof NAV_ITEMS)[number];
  pathname: string;
  linkColorClass: string;
  navState: NavState;
}) {
  const [open, setOpen] = useState(false);

  const isActive = ("children" in item ? item.children : []).some((child) => pathname === child.href);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={cn(
          "flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-250 group",
          linkColorClass,
          "hover:text-tech-cyan hover:bg-slate-100",
          isActive && "text-tech-cyan"
        )}
      >
        {item.label}
        <svg
          className="size-3 transition-transform duration-300 group-hover:text-tech-cyan"
          style={{
            transform: open ? "rotate(180deg)" : undefined,
            color: open ? "#00b4d8" : undefined,
          }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        {/* 下拉触发器底部下划线 */}
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] rounded-full group-hover:w-[60%] transition-all duration-300"
          style={{ background: "linear-gradient(90deg, transparent, #00b4d8, transparent)" }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 mt-3 w-56 rounded-2xl overflow-hidden z-50"
            style={{
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              border: "1px solid rgba(204,224,237,0.6)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.08), 0 0 1px rgba(0,180,216,0.1), inset 0 1px 0 rgba(255,255,255,0.8)"
            }}
          >
            {/* 下拉菜单顶部装饰线 */}
            <div
              className="h-px w-3/4 mx-auto mt-0"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(0,180,216,0.5), transparent)"
              }}
            />
            <div className="py-2 px-1.5">
              {("children" in item ? item.children : []).map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block px-4 py-2.5 text-sm rounded-xl transition-all duration-200 group/link",
                    pathname === child.href
                      ? "text-tech-cyan font-semibold bg-tech-cyan/[0.08]"
                      : "text-[#1a2744] hover:text-tech-cyan hover:bg-tech-cyan/[0.04]"
                  )}
                >
                  <span className="flex items-center gap-2.5">
                    {/* 左侧指示条 */}
                    <span className="w-0.5 h-0 rounded-full bg-tech-cyan transition-all duration-200 group-hover/link:h-3.5"
                      style={pathname === child.href ? { height: '14px' } : {}}
                    />
                    {child.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
