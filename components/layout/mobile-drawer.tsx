"use client";

import { useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Phone,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, CONTACT_INFO } from "@/lib/constants";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const pathname = usePathname();

  // 打开时禁止body滚动
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ESC键关闭
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [open, handleKeyDown]);

  // 扁平化导航项（含子项）
  const flatItems: { label: string; href: string; indent?: boolean }[] = [];
  NAV_ITEMS.forEach((item) => {
    flatItems.push({ label: item.label, href: item.href });
    if ("children" in item && item.children) {
      item.children.forEach((child) => {
        flatItems.push({
          label: child.label,
          href: child.href,
          indent: true,
        });
      });
    }
  });

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* 遮罩层 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* 抽屉面板 */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x > 120 || info.velocity.x > 500) {
                onClose();
              }
            }}
            className="fixed top-0 right-0 bottom-0 z-[61] w-[320px] max-w-[85vw] bg-space-blue/98 backdrop-blur-xl border-l border-border/20 flex flex-col shadow-2xl"
          >
            {/* 头部 */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
              <span className="font-heading font-bold text-lg text-tech-cyan">
                导航菜单
              </span>
              <button
                onClick={onClose}
                className="size-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/[0.06] transition-colors"
                aria-label="关闭菜单"
              >
                <X weight="bold" size={20} />
              </button>
            </div>

            {/* 导航列表 */}
            <nav className="flex-1 overflow-y-auto py-4 px-3">
              {flatItems.map((item, index) => (
                <motion.div
                  key={`${item.label}-${item.href}`}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-150",
                      item.indent ? "pl-8 text-sm" : "",
                      pathname === item.href
                        ? "text-tech-cyan bg-tech-cyan/10"
                        : "text-foreground/75 hover:text-foreground hover:bg-white/[0.04]"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* 底部固定区域 */}
            <div className="border-t border-white/[0.06] p-5 space-y-3 safe-bottom">
              {/* CTA按钮 */}
              <Link
                href="/contact"
                onClick={onClose}
                className="flex w-full items-center justify-center rounded-lg bg-aerial-orange px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-aerial-orange/90"
              >
                免费咨询
              </Link>

              {/* 一键拨号 */}
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.03] text-foreground/80 hover:text-tech-cyan hover:bg-white/[0.06] transition-colors text-sm font-medium"
              >
                <Phone size={18} weight="duotone" className="text-tech-cyan" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
