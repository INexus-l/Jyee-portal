import { cn } from "@/lib/utils";

/* ============================================
   极翼科技 JIYI UAV — 品牌标识 Logo

   设计理念：
   - 几何菱形外框（参考大疆DJI的钻石形态，象征精准与稳定）
   - 内部由三条流线构成抽象"机翼+飞行轨迹"
   - 中心负空间形成向上的箭头（象征飞行、上升、突破）
   - 线条粗细变化体现速度感与层次
   - 整体可识别为：翅膀 / 飞行器俯视 / 科技徽章

   配色：
   - 主色 #0077B6 (brand-blue) → #00b4d8 (tech-cyan) 渐变
   - 支持单色模式（用于浅色/深色背景自适应）
=========================================== */

interface JiyiLogoProps {
  /** 尺寸预设 */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** 是否显示文字 */
  showText?: boolean;
  /** 文字颜色覆盖 */
  textColor?: string;
  /** 自定义类名 */
  className?: string;
  /** 是否仅图标（无文字，紧凑） */
  iconOnly?: boolean;
}

const SIZE_MAP = {
  xs: { svg: 24, text: "text-[13px]", gap: "gap-1.5" },
  sm: { svg: 28, text: "text-[15px]", gap: "gap-1.5" },
  md: { svg: 32, text: "text-[17px]", gap: "gap-2" },
  lg: { svg: 40, text: "text-[21px]", gap: "gap-2.5" },
  xl: { svg: 48, text: "text-[26px]", gap: "gap-3" },
};

export default function JiyiLogo({
  size = "md",
  showText = true,
  textColor,
  className,
  iconOnly = false,
}: JiyiLogoProps) {
  const s = SIZE_MAP[size];

  return (
    <div
      className={cn(
        "flex items-center select-none",
        !iconOnly && s.gap,
        className
      )}
    >
      {/* ====== Logo 图标（SVG内联） ====== */}
      <svg
        width={s.svg}
        height={s.svg}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-label="极翼科技品牌标识"
      >
        <defs>
          {/* 主渐变：深蓝 → 青色 */}
          <linearGradient id="jiyi-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0077B6" />
            <stop offset="50%" stopColor="#0096c7" />
            <stop offset="100%" stopColor="#00b4d8" />
          </linearGradient>
          {/* 光晕渐变 */}
          <radialGradient id="jiyi-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00b4d8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00b4d8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 背景光晕 */}
        <circle cx="24" cy="24" r="22" fill="url(#jiyi-glow)" />

        {/* 外框：45°旋转的菱形（稳定、精准） */}
        <rect
          x="6"
          y="6"
          width="36"
          height="36"
          rx="8"
          ry="8"
          transform="rotate(45 24 24)"
          stroke="url(#jiyi-grad)"
          strokeWidth="1.8"
          fill="none"
        />

        {/* 内部装饰细线菱形 */}
        <rect
          x="11"
          y="11"
          width="26"
          height="26"
          rx="5"
          ry="5"
          transform="rotate(45 24 24)"
          stroke="url(#jiyi-grad)"
          strokeWidth="0.6"
          fill="none"
          opacity="0.4"
        />

        {/* ====== 核心图形：三线机翼 + 向上箭头 ====== */}

        {/* 左翼 — 上扬流线 */}
        <path
          d="M14 28 Q18 20 24 16"
          stroke="url(#jiyi-grad)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* 右翼 — 上扬流线（镜像） */}
        <path
          d="M34 28 Q30 20 24 16"
          stroke="url(#jiyi-grad)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* 中轴线 — 向上箭头（飞行轨迹） */}
        <path
          d="M24 32 L24 19 M20 23 L24 19 L28 23"
          stroke="url(#jiyi-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* 机翼末端小装饰点 — 像素/数据感 */}
        <circle cx="14" cy="28" r="1.5" fill="#00b4d8" opacity="0.8" />
        <circle cx="34" cy="28" r="1.5" fill="#00b4d8" opacity="0.8" />

        {/* 顶部光点 — 代表镜头/传感器 */}
        <circle cx="24" cy="16" r="2" fill="#0077B6" opacity="0.9" />
        <circle cx="24" cy="15.5" r="0.8" fill="#ffffff" opacity="0.7" />
      </svg>

      {/* ====== 品牌文字 ====== */}
      {!iconOnly && showText && (
        <span
          className={cn(
            "font-heading font-extrabold tracking-tight whitespace-nowrap",
            s.text
          )}
          style={{
            color: textColor || undefined,
          }}
        >
          极翼科技
        </span>
      )}
    </div>
  );
}
