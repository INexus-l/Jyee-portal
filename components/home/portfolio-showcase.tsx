"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight, Eye, Calendar } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { IMAGES } from "@/lib/images";

/* 精选作品画廊 — 真实案例展示 */

const MOCK_PORTFOLIOS = [
  {
    id: 1,
    title: "山城夜景航拍",
    category: "tourism",
    categoryName: "城市宣传",
    location: "重庆渝中区",
    featured: true,
    description: "从400米高空俯瞰重庆夜景，洪崖洞、解放碑、两江交汇尽收眼底",
    date: "2024.12",
    image: IMAGES.chongqingNight,
  },
  {
    id: 2,
    title: "湖畔婚礼航拍",
    category: "wedding",
    categoryName: "婚庆航拍",
    location: "重庆南川",
    featured: false,
    description: "上帝视角见证浪漫时刻，湖光山色映衬爱情誓言",
    date: "2024.10",
    image: IMAGES.lakeWedding,
  },
  {
    id: 3,
    title: "CBD天际线",
    category: "estate",
    categoryName: "房地产",
    location: "重庆江北嘴",
    featured: false,
    description: "江北嘴金融中心全景展示，现代建筑群与江景完美融合",
    date: "2024.11",
    image: IMAGES.cbdSkyline,
  },
  {
    id: 4,
    title: "长江索道穿越",
    category: "tourism",
    categoryName: "旅游宣传",
    location: "重庆渝中",
    featured: false,
    description: "穿越长江索道，记录山城独特交通方式与两岸风光",
    date: "2024.09",
    image: IMAGES.yangtzeCable,
  },
  {
    id: 5,
    title: "工业园区俯瞰",
    category: "enterprise",
    categoryName: "企业品牌",
    location: "重庆两江新区",
    featured: false,
    description: "现代化工业园区全景，展现企业规模与实力",
    date: "2024.08",
    image: IMAGES.industrialPark,
  },
  {
    id: 6,
    title: "音乐节现场直播",
    category: "event",
    categoryName: "活动赛事",
    location: "重庆大渡口",
    featured: false,
    description: "万人音乐节现场多机位直播，空中视角捕捉狂欢瞬间",
    date: "2024.07",
    image: IMAGES.musicFestival,
  },
  {
    id: 7,
    title: "武隆天生三桥",
    category: "tourism",
    categoryName: "自然风光",
    location: "重庆武隆",
    featured: false,
    description: "世界自然遗产天生三桥，喀斯特地貌的壮美奇观",
    date: "2024.06",
    image: IMAGES.wulongBridge,
  },
  {
    id: 8,
    title: "新楼盘开盘宣传",
    category: "estate",
    categoryName: "房地产",
    location: "重庆巴南",
    featured: false,
    description: "高端住宅项目开盘宣传，展示区位优势与生活配套",
    date: "2024.05",
    image: IMAGES.newRealEstate,
  },
  {
    id: 9,
    title: "大学城毕业季航拍",
    category: "event",
    categoryName: "校园活动",
    location: "重庆沙坪坝",
    featured: false,
    description: "青春不散场，大学城毕业季集体航拍留念",
    date: "2024.06",
    image: IMAGES.universityGrad,
  },
  {
    id: 10,
    title: "嘉陵江晨雾",
    category: "film",
    categoryName: "影视素材",
    location: "重庆北碚",
    featured: false,
    description: "清晨嘉陵江面薄雾缭绕，如诗如画的山水画卷",
    date: "2024.04",
    image: IMAGES.jialingFog,
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  tourism: "bg-tech-cyan/15 text-tech-cyan border-tech-cyan/20",
  wedding: "bg-pink-500/15 text-pink-300 border-pink-500/20",
  estate: "bg-aerial-orange/15 text-aerial-orange border-aerial-orange/20",
  event: "bg-purple-500/15 text-purple-300 border-purple-500/20",
  enterprise: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
  film: "bg-yellow-500/15 text-yellow-300 border-yellow-500/20",
};

export default function PortfolioShowcase() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-container py-20 md:py-24">
      {/* 区块标题 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
      >
        <div>
          <span className="overline-label">PORTFOLIO</span>
          <h2 className="mt-3 text-3xl font-heading font-bold gradient-text sm:text-4xl">
            精选作品 · 见证专业
          </h2>
          <p className="mt-2 max-w-lg text-sm text-muted-foreground">
            每一次起飞都是对完美的追求，每一帧画面都承载着我们对品质的承诺。
          </p>
        </div>
        <Link
          href="/portfolio"
          className="group inline-flex items-center gap-1 text-sm font-medium text-tech-cyan transition-colors hover:text-tech-cyan/80"
        >
          查看全部
          <ArrowRight
            weight="bold"
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </motion.div>

      {/* Masonry瀑布流 */}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4" style={{ columnFill: "balance" }}>
        {MOCK_PORTFOLIOS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: index * 0.07,
              duration: 0.5,
              ease: "easeOut",
            }}
            className={`mb-5 break-inside-avoid ${item.featured ? "sm:column-span-2" : ""}`}
          >
            <div className="group relative overflow-hidden rounded-xl glass-card">
              {/* 高质量封面图 */}
              <div className={`relative overflow-hidden ${item.featured ? "aspect-video" : "aspect-[4/3]"}`}>
                {/* 图片背景容器 */}
                <div className="absolute inset-0 bg-gradient-to-br from-space-blue to-space-deep">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* 渐变遮罩层 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* 特色项目的取景框装饰 */}
                  {item.featured && <div className="viewfinder-corners absolute inset-0 z-10" />}
                </div>

                {/* Hover信息叠加层 */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/0 px-4 py-8 text-center backdrop-blur-sm opacity-0 transition-all duration-500 group-hover:bg-black/70 group-hover:opacity-100">
                  <Eye weight="duotone" size={32} className="mb-3 text-tech-cyan" />
                  <p className="mb-2 text-sm font-medium text-slate-800 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar weight="duotone" size={12} />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin weight="duotone" size={12} />
                      {item.location}
                    </span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mt-4 rounded-full bg-tech-cyan px-4 py-2 text-xs font-semibold text-slate-800 transition-colors hover:bg-tech-cyan/80"
                  >
                    查看详情
                  </motion.div>
                </div>

                {/* 分类标签（悬浮在图片上） */}
                <div className="absolute top-3 left-3 z-10">
                  <Badge
                    variant="outline"
                    className={`border backdrop-blur-md ${
                      CATEGORY_COLORS[item.category] ||
                      "bg-muted text-muted-foreground"
                    }`}
                  >
                    {item.categoryName}
                  </Badge>
                </div>
              </div>

              {/* 卡片信息区 */}
              <div className="relative z-10 p-4 -mt-8">
                <h3 className="font-heading text-base font-semibold text-slate-800 group-hover:text-tech-cyan transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin weight="duotone" size={12} />
                  {item.location}
                </p>

                {/* 底部装饰线 */}
                <div className="mt-3 h-px w-0 bg-gradient-to-r from-tech-cyan to-aerial-orange transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
