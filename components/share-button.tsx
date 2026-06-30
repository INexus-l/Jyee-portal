"use client";

import { useState, useCallback } from "react";
import { ShareNetwork } from "@phosphor-icons/react/dist/ssr";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-tech-cyan/30 hover:text-white"
    >
      <ShareNetwork size={14} weight="duotone" />
      {copied ? "已复制!" : "复制链接"}
    </button>
  );
}
