"use client";

import { useState, useMemo } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FilmStrip,
  MagnifyingGlass,
  Funnel,
  ArrowsLeftRight,
  X,
  MapPin,
  Calendar,
  Sparkle,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { motion, AnimatePresence, useInView } from "motion/react";
import { useRef } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Breadcrumb from "@/components/layout/breadcrumb";
import { IMAGES } from "@/lib/images";

/* ========== Mock案例数据（12个真实航拍案例） ========== */
const MOCK_PORTFOLIOS = [
  {
    id: 1,
    slug: "chongqing-night-aerial",
    title: "山城夜景航拍",
    category: "tourism",
    location: "重庆渝中区",
    date: "2025-03",
    excerpt: "从千厮门大桥到洪崖洞，用上帝视角记录山城最美夜景",
    image: IMAGES.chongqingNight,
    featured: true,
  },
  {
    id: 2,
    slug: "yangtze-cable-car",
    title: "长江索道穿越",
    category: "tourism",
    location: "重庆渝中区",
    date: "2025-02",
    excerpt: "跨越长江的空中视角，记录山城独特交通方式",
    image: IMAGES.yangtzeCable,
    featured: false,
  },
  {
    id: 3,
    slug: "wulong-three-bridges",
    title: "武隆天生三桥",
    category: "tourism",
    location: "重庆武隆",
    date: "2024-11",
    excerpt: "天生三桥、仙女山的壮美自然风光航拍记录",
    image: IMAGES.wulongBridge,
    featured: false,
  },
  {
    id: 4,
    slug: "jialing-river-morning-fog",
    title: "嘉陵江晨雾",
    category: "tourism",
    location: "重庆北碚区",
    date: "2024-10",
    excerpt: "清晨嘉陵江上的薄雾与日出交相辉映",
    image: IMAGES.jialingFog,
    featured: false,
  },
  {
    id: 5,
    slug: "lake-wedding-aerial",
    title: "湖畔婚礼航拍",
    category: "wedding",
    location: "重庆南川",
    date: "2025-02",
    excerpt: "金佛山下的浪漫誓言，空中视角见证爱情最美的样子",
    image: IMAGES.lakeWedding,
    featured: false,
  },
  {
    id: 6,
    slug: "industrial-park-aerial",
    title: "工业园区俯瞰",
    category: "corporate",
    location: "重庆两江新区",
    date: "2024-10",
    excerpt: "某智能制造企业总部园区形象片航拍展示",
    image: IMAGES.industrialPark,
    featured: false,
  },
  {
    id: 7,
    slug: "new-real-estate-promo",
    title: "新楼盘开盘宣传",
    category: "real-estate",
    location: "重庆江北嘴",
    date: "2025-01",
    excerpt: "江北嘴高端住宅项目开盘宣传航拍素材",
    image: IMAGES.newRealEstate,
    featured: false,
  },
  {
    id: 8,
    slug: "cbd-skyline-aerial",
    title: "CBD天际线",
    category: "real-estate",
    location: "重庆江北嘴",
    date: "2024-12",
    excerpt: "江北嘴中央商务区天际线全景航拍",
    image: IMAGES.cbdSkyline,
    featured: false,
  },
  {
    id: 9,
    slug: "music-festival-live",
    title: "音乐节现场直播",
    category: "event",
    location: "重庆",
    date: "2024-09",
    excerpt: "大型户外音乐节多机位航拍跟拍直播",
    image: IMAGES.musicFestival,
    featured: false,
  },
  {
    id: 10,
    slug: "university-graduation",
    title: "大学城毕业季",
    category: "event",
    location: "重庆沙坪坝",
    date: "2024-06",
    excerpt: "大学校园毕业典礼航拍记录青春时刻",
    image: IMAGES.universityGrad,
    featured: false,
  },
  {
    id: 11,
    slug: "drone-swarm-light-show",
    title: "大型编队灯光秀",
    category: "vr-panorama",
    location: "重庆",
    date: "2024-08",
    excerpt: "数百架无人机编队表演绚丽灯光秀",
    image: IMAGES.droneSwarm,
    featured: false,
  },
  {
    id: 12,
    slug: "hongya-cave-vr-panorama",
    title: "VR全景-洪崖洞",
    category: "vr-panorama",
    location: "重庆渝中区",
    date: "2023-11",
    excerpt: "洪崖洞720°VR全景漫游制作",
    image: IMAGES.vrHongya,
    featured: false,
  },
];

/* ========== 分类筛选配置 ========== */
const CATEGORIES = [
  { key: "all", label: "全部" },
  { key: "wedding", label: "婚庆" },
  { key: "real-estate", label: "房产" },
  { key: "event", label: "活动" },
  { key: "tourism", label: "城市" },
  { key: "corporate", label: "企业" },
  { key: "film", label: "影视" },
  { key: "engineering", label: "工程" },
  { key: "surveying", label: "航测" },
  { key: "vr-panorama", label: "VR" },
];

/* ========== 分类颜色映射 ========== */
const CATEGORY_COLORS: Record<string, string> = {
  wedding: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  "real-estate": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  event: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  tourism: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  corporate: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  film: "bg-red-500/20 text-red-300 border-red-500/30",
  engineering: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  surveying: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  "vr-panorama": "bg-purple-500/20 text-purple-300 border-purple-500/30",
};

/* ========== 排序类型 ========== */
type SortType = "newest" | "featured";

/* ========== 案例卡片组件 ========== */
function PortfolioCard({
  portfolio,
  index,
}: {
  portfolio: (typeof MOCK_PORTFOLIOS)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  const imageUrl = portfolio.image;

  return (
    <Link href={`/portfolio/${portfolio.slug}`}>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.05, duration: 0.5 }}
        className="glass-card break-inside-avoid mb-4 group cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-tech-cyan/50 hover:shadow-tech-cyan/10"
      >
        {/* 图片区域 - 真实航拍图 */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
          {/* 真实航拍背景图 */}
          <img
            src={imageUrl}
            alt={portfolio.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
          />

          {/* 渐变叠加层 - 增强文字可读性 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* 播放/查看图标 overlay - hover时显示 */}
          <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/25 transition-transform duration-500 group-hover:scale-100 scale-90">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="white" opacity="0.9">
                <path d="M213.66,122.34l-80-48A8,8,0,0,0,120,80v96a8,8,0,0,0,13.66,5.66l80-48A8,8,0,0,0,213.66,122.34ZM136,159.05V96.95L193.61,128Z"/>
              </svg>
            </div>
          </div>

          {/* Featured标记 */}
          {portfolio.featured && (
            <div className="absolute inset-0 z-10">
              <Badge className="absolute top-3 left-3 z-20 border-tech-cyan/40 bg-tech-cyan/15 text-tech-cyan text-xs backdrop-blur-sm">
                <Sparkle size={10} weight="duotone" className="mr-1" />
                精选
              </Badge>
              {/* 取景框装饰角标 */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-tech-cyan/50" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-tech-cyan/50" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-tech-cyan/50" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-tech-cyan/50" />
            </div>
          )}

          {/* Hover信息浮层 - 增强版 */}
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
            <div className="transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
              <h3 className="mb-2 text-base font-semibold text-slate-800 drop-shadow-lg sm:text-lg">
                {portfolio.title}
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-700">
                <Badge variant="outline" className={`${CATEGORY_COLORS[portfolio.category]} text-[10px] px-2 py-0.5 backdrop-blur-sm`}>
                  {CATEGORIES.find((c) => c.key === portfolio.category)?.label}
                </Badge>
                <span className="flex items-center gap-1">
                  <MapPin size={12} weight="duotone" />
                  {portfolio.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={12} weight="duotone" />
                  {portfolio.date}
                </span>
              </div>
            </div>
          </div>

          {/* 底部渐隐遮罩（非hover状态） */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
        </div>

        {/* 卡片底部文字信息 */}
        <div className="p-4 relative">
          <h3 className="mb-1.5 text-sm font-semibold text-slate-800 group-hover:text-tech-cyan transition-colors sm:text-base">
            {portfolio.title}
          </h3>
          <p className="mb-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
            {portfolio.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={12} weight="duotone" className="text-tech-cyan/60" />
              <span>{portfolio.location}</span>
              <span className="text-border">·</span>
              <span>{portfolio.date}</span>
            </div>
            {/* 右下角箭头指示器 */}
            <ArrowRight size={14} weight="bold" className="text-tech-cyan/40 group-hover:text-tech-cyan group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

/* ========== 主页面组件 ========== */
export default function PortfolioPage() {
  /* 状态管理 */
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortType, setSortType] = useState<SortType>("newest");

  /* 筛选与排序逻辑 */
  const filteredPortfolios = useMemo(() => {
    let result = [...MOCK_PORTFOLIOS];

    // 分类筛选
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // 搜索过滤
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.excerpt.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query)
      );
    }

    // 排序
    if (sortType === "featured") {
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    // 默认按日期降序（newest）

    return result;
  }, [selectedCategory, searchQuery, sortType]);

  return (
    <div className="flex flex-col">
      {/* ====== 面包屑导航 ====== */}
      <section className="section-container pt-6 pb-2">
        <Breadcrumb items={[{ label: "首页", href: "/" }, { label: "作品案例" }]} />
      </section>

      {/* ====== 筛选工具栏 (Sticky) - 视觉增强 ====== */}
      <section className="sticky top-[72px] z-30 border-b border-white/[0.05] bg-background/80 backdrop-blur-md">
        <div className="section-container py-4">
          {/* 分类标签栏 - 增强视觉 */}
          <div className="mb-3 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
            <Funnel size={16} weight="duotone" className="shrink-0 text-muted-foreground" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`shrink-0 snap-start rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-300 ${
                  selectedCategory === cat.key
                    ? "bg-tech-cyan text-slate-800 shadow-lg shadow-tech-cyan/25 scale-105"
                    : "border border-white/10 bg-white/[0.08] text-muted-foreground hover:border-tech-cyan/30 hover:text-slate-800 hover:bg-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 搜索和排序栏 */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* 搜索框 */}
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlass
                size={16}
                weight="duotone"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                placeholder="搜索案例..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-white/[0.08] border-white/10 text-sm h-9"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-slate-800"
                >
                  <X size={14} weight="bold" />
                </button>
              )}
            </div>

            {/* 排序切换 */}
            <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.08] p-1">
              <button
                onClick={() => setSortType("newest")}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                  sortType === "newest"
                    ? "bg-tech-cyan/20 text-tech-cyan"
                    : "text-muted-foreground hover:text-slate-800"
                }`}
              >
                最新最早
              </button>
              <button
                onClick={() => setSortType("featured")}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                  sortType === "featured"
                    ? "bg-aerial-orange/20 text-aerial-orange"
                    : "text-muted-foreground hover:text-slate-800"
                }`}
              >
                <ArrowsLeftRight size={12} weight="bold" className="inline mr-1" />
                精选优先
              </button>
            </div>
          </div>

          {/* 结果计数 - 动态高亮 */}
          <div className="mt-2 text-xs text-muted-foreground">
            共找到 <span className="font-medium text-tech-cyan">{filteredPortfolios.length}</span> 个案例
            {selectedCategory !== "all" && (
              <span className="ml-2">
                · 当前筛选: <span className="text-slate-800/80">{CATEGORIES.find((c) => c.key === selectedCategory)?.label}</span>
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ====== Masonry瀑布流画廊 ====== */}
      <section className="section-container py-8 md:py-12">
        <AnimatePresence mode="wait">
          {filteredPortfolios.length > 0 ? (
            <motion.div
              key={`${selectedCategory}-${searchQuery}-${sortType}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 md:gap-6"
            >
              {filteredPortfolios.map((portfolio, index) => (
                <PortfolioCard
                  key={portfolio.id}
                  portfolio={portfolio}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            /* 空状态 */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <FilmStrip size={64} weight="duotone" className="mb-4 text-muted-foreground/30" />
              <h3 className="mb-2 text-lg font-semibold text-slate-800">暂无匹配的案例</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                尝试调整筛选条件或搜索关键词
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="rounded-full bg-tech-cyan/15 px-6 py-2 text-sm font-medium text-tech-cyan hover:bg-tech-cyan/25 transition-colors"
              >
                重置所有筛选
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
