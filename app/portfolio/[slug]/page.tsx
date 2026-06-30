import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FilmStrip,
  MapPin,
  Calendar,
  User,
  Camera,
  ArrowLeft,
  ArrowRight,
  Quotes,
  Lightbulb,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import Breadcrumb from "@/components/layout/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { ShareButton } from "@/components/share-button";
import { IMAGES } from "@/lib/images";

/* ========== Mock案例数据（12个完整案例） ========== */
const MOCK_PORTFOLIOS = [
  {
    id: 1,
    slug: "chongqing-night-aerial",
    title: "山城夜景航拍",
    category: "tourism",
    categoryName: "城市/旅游宣传",
    location: "重庆渝中区",
    date: "2025-03-15",
    clientType: "文旅客户",
    equipment: "DJI Inspire 3 + Zenith X9",
    heroImage: IMAGES.chongqingNight,
    gallery: [
      IMAGES.chongqingNight,
      IMAGES.cityPanorama,
      IMAGES.cbdSkyline,
      IMAGES.riverView,
    ],
    featured: true,
    excerpt:
      "从千厮门大桥到洪崖洞，用上帝视角记录山城最美夜景。本次拍摄历时3天，涵盖渝中半岛核心区域20+个经典机位。",
    description: `
## 项目背景

重庆，这座被誉为「山城」的魔幻都市，以其独特的地形地貌和璀璨的夜景闻名于世。受某文旅机构委托，我们需要用航拍视角重新诠释这座城市夜晚的魅力。

## 拍摄挑战

### 1. 复杂的城市空域环境
渝中半岛作为重庆的核心商务区，建筑密集、航线复杂。我们提前进行了详细的空域勘察，规划了多条安全飞行路线。

### 2. 夜间拍摄的曝光控制
夜景航拍对曝光要求极高。我们采用 bracketing 连拍技术，后期通过 HDR 合成，确保高光与暗部细节完美保留。

### 3. 天气窗口期把握
重庆春季多雾，能见度变化快。团队连续蹲守5天，最终在3月15日捕捉到了理想的拍摄条件。

## 创作理念

本次作品以「光影山城」为主题，通过时间延时、航拍追踪、垂直俯瞰等多种镜头语言，展现重庆从黄昏到深夜的光影变幻。特别聚焦千厮门大桥、洪崖洞、解放碑三大地标，用上帝视角讲述这座城市的夜故事。

## 技术亮点

- **8K RAW 原始素材**：全片采用 8K 分辨率录制，为后期调色预留充足空间
- **多机位协同**：地面+空中共6个机位同步作业
- **时间延时序列**：关键场景采集 2000+ 帧延时素材
- **专业色彩管理**：全程遵循 DCI-P3 色彩空间标准

## 项目成果

最终交付成片时长 4 分 30 秒，被客户用于城市形象宣传片、文旅推广视频及社交媒体传播。成片上线首周播放量突破 50 万次。
    `,
    challenges: [
      {
        challenge: "渝中半岛空域管制严格，可飞区域有限",
        solution: "提前7天申请临时空域，协调多个管理部门，规划备用航线3条",
      },
      {
        challenge: "夜间光线复杂，洪崖洞区域光比极大",
        solution: "采用 bracketing 曝光合成 + 后期 HDR 调色，动态范围提升 3 档",
      },
      {
        challenge: "江面湿气重，镜头易起雾",
        solution: "配备专业防雾镜片 + 镜头加热带，确保长时间拍摄稳定",
      },
    ],
    testimonial: {
      content:
        "极翼团队的专业度令人印象深刻。从前期沟通到最终交付，每个环节都超出了我们的预期。特别是夜景部分的呈现，完全达到了国际水准。",
      author: "张总",
      position: "某文旅机构项目负责人",
    },
  },
  {
    id: 2,
    slug: "yangtze-cable-car",
    title: "长江索道穿越",
    category: "tourism",
    categoryName: "城市/旅游宣传",
    location: "重庆渝中区",
    date: "2025-02-20",
    clientType: "文旅客户",
    equipment: "DJI Mavic 3 Pro",
    heroImage: IMAGES.yangtzeCable,
    gallery: [
      IMAGES.yangtzeCable,
      IMAGES.landmark,
      IMAGES.riverView,
      IMAGES.tourismCity,
    ],
    featured: false,
    excerpt: "跨越长江的空中视角，记录山城独特交通方式——长江索道的壮美穿越画面",
    description: "长江索道是重庆最具标志性的交通工具之一。本项目以「空中走廊」为主题，用无人机跟拍与定点航拍相结合的方式，记录索道跨越长江的震撼瞬间...",
    challenges: [],
    testimonial: null,
  },
  {
    id: 3,
    slug: "wulong-three-bridges",
    title: "武隆天生三桥",
    category: "tourism",
    categoryName: "旅游宣传",
    location: "重庆武隆",
    date: "2024-11-10",
    clientType: "景区管委会",
    equipment: "DJI Inspire 3 + X9 camera",
    heroImage: IMAGES.wulongBridge,
    gallery: [
      IMAGES.wulongBridge,
      IMAGES.landmark,
      IMAGES.tourismCity,
      IMAGES.riverView,
    ],
    featured: false,
    excerpt: "天生三桥、仙女山的壮美自然风光，世界自然遗产的航拍视觉呈现",
    description: "武隆喀斯特是世界自然遗产地，天生三桥更是其中的精华。本次拍摄旨在用航拍视角展现这一地质奇观的宏大与壮美...",
    challenges: [
      {
        challenge: "峡谷内GPS信号弱，无人机定位困难",
        solution: "采用视觉定位系统辅助飞行，预设航点确保安全返航",
      },
    ],
    testimonial: null,
  },
  {
    id: 4,
    slug: "jialing-river-morning-fog",
    title: "嘉陵江晨雾",
    category: "tourism",
    categoryName: "城市/旅游宣传",
    location: "重庆北碚区",
    date: "2024-10-05",
    clientType: "旅游推广",
    equipment: "DJI Mavic 3 Pro",
    heroImage: IMAGES.jialingFog,
    gallery: [
      IMAGES.jialingFog,
      IMAGES.riverView,
      IMAGES.tourismCity,
      IMAGES.landmark,
    ],
    featured: false,
    excerpt: "清晨嘉陵江上的薄雾与日出交相辉映，捕捉山城最宁静的时刻",
    description: "嘉陵江晨雾是重庆北碚最具诗意的自然景观。我们在连续一周的蹲守后，终于捕捉到了最完美的晨雾时刻...",
    challenges: [],
    testimonial: null,
  },
  {
    id: 5,
    slug: "lake-wedding-aerial",
    title: "湖畔婚礼航拍",
    category: "wedding",
    categoryName: "婚庆航拍",
    location: "重庆南川",
    date: "2025-02-14",
    clientType: "个人客户",
    equipment: "DJI Mavic 3 Pro",
    heroImage: IMAGES.lakeWedding,
    gallery: [
      IMAGES.weddingVenue,
      IMAGES.weddingOutdoor,
      IMAGES.weddingSunset,
      IMAGES.lakeWedding,
    ],
    featured: false,
    excerpt: "金佛山下的浪漫誓言，空中视角见证爱情最美的样子",
    description: "这是一场在南川金佛山脚下举行的户外湖畔婚礼。新人希望用航拍记录下这个人生中最重要的时刻，从独特的空中视角见证他们的爱情誓言...",
    challenges: [],
    testimonial: {
      content: "看到成片的那一刻我们都哭了，太美了！感谢极翼团队为我们留下了这么珍贵的回忆。",
      author: "王先生 & 李女士",
      position: "新人",
    },
  },
  {
    id: 6,
    slug: "industrial-park-aerial",
    title: "工业园区俯瞰",
    category: "corporate",
    categoryName: "企业品牌",
    location: "重庆两江新区",
    date: "2024-10-18",
    clientType: "制造企业",
    equipment: "DJI Matrice 350 RTK",
    heroImage: IMAGES.industrialPark,
    gallery: [
      IMAGES.corporateCampus,
      IMAGES.factoryAerial,
      IMAGES.industrialPark,
      IMAGES.corporateCampus,
    ],
    featured: false,
    excerpt: "某智能制造企业总部园区形象片航拍展示，展现现代化工业美学",
    description: "本项目是为两江新区某智能制造企业制作的形象宣传片航拍部分。从空中俯瞰的角度展现园区的规模与现代化水平...",
    challenges: [],
    testimonial: null,
  },
  {
    id: 7,
    slug: "new-real-estate-promo",
    title: "新楼盘开盘宣传",
    category: "real-estate",
    categoryName: "房地产",
    location: "重庆江北嘴",
    date: "2025-01-15",
    clientType: "房地产开发商",
    equipment: "DJI Inspire 3 + Sony A7S III",
    heroImage: IMAGES.newRealEstate,
    gallery: [
      IMAGES.realEstateHero,
      IMAGES.buildingExterior,
      IMAGES.luxuryBuilding,
      IMAGES.newRealEstate,
    ],
    featured: false,
    excerpt: "江北嘴高端住宅项目开盘宣传航拍素材，展现楼盘品质与区位优势",
    description: "本项目是为江北嘴某高端住宅项目制作的形象宣传片。通过航拍视角全方位展示项目的建筑品质、周边配套及区位优势...",
    challenges: [],
    testimonial: null,
  },
  {
    id: 8,
    slug: "cbd-skyline-aerial",
    title: "CBD天际线",
    category: "real-estate",
    categoryName: "房地产",
    location: "重庆江北嘴",
    date: "2024-12-08",
    clientType: "房地产开发商",
    equipment: "DJI Inspire 3 + X9",
    heroImage: IMAGES.cbdSkyline,
    gallery: [
      IMAGES.cbdSkyline,
      IMAGES.tourismNight,
      IMAGES.buildingExterior,
      IMAGES.riverView,
    ],
    featured: false,
    excerpt: "江北嘴中央商务区天际线全景航拍，展现重庆现代化金融中心风貌",
    description: "江北嘴CBD是重庆的金融中心，本项目用航拍方式记录下这片区域的现代化面貌与蓬勃活力...",
    challenges: [],
    testimonial: null,
  },
  {
    id: 9,
    slug: "music-festival-live",
    title: "音乐节现场直播",
    category: "event",
    categoryName: "活动赛事",
    location: "重庆",
    date: "2024-09-15",
    clientType: "活动主办方",
    equipment: "DJI Inspire 3 + FPV drone",
    heroImage: IMAGES.musicFestival,
    gallery: [
      IMAGES.concertCrowd,
      IMAGES.eventStadium,
      IMAGES.eventNight,
      IMAGES.musicFestival,
    ],
    featured: false,
    excerpt: "大型户外音乐节多机位航拍跟拍直播，捕捉现场最燃的瞬间",
    description: "这是一场大型户外音乐节的航拍直播项目。我们使用多架无人机从不同角度同步拍摄，为线上观众带来身临其境的体验...",
    challenges: [
      {
        challenge: "夜间人群密集，飞行安全风险高",
        solution: "划定禁飞区，使用轻型FPV无人机，配备专业飞手实时操控",
      },
    ],
    testimonial: null,
  },
  {
    id: 10,
    slug: "university-graduation",
    title: "大学城毕业季",
    category: "event",
    categoryName: "活动赛事",
    location: "重庆沙坪坝",
    date: "2024-06-20",
    clientType: "高校",
    equipment: "DJI Mavic 3 Pro",
    heroImage: IMAGES.universityGrad,
    gallery: [
      IMAGES.universityGrad,
      IMAGES.officeBuilding,
      IMAGES.teamPhoto,
      IMAGES.corporateCampus,
    ],
    featured: false,
    excerpt: "大学校园毕业典礼航拍记录青春时刻，定格人生重要转折点",
    description: "毕业季是每个大学生最重要的时刻之一。我们用航拍视角记录下这份青春的记忆，为学生留下永恒的纪念...",
    challenges: [],
    testimonial: null,
  },
  {
    id: 11,
    slug: "drone-swarm-light-show",
    title: "大型编队灯光秀",
    category: "vr-panorama",
    categoryName: "更多服务-编队表演",
    location: "重庆",
    date: "2024-08-18",
    clientType: "活动公司",
    equipment: "定制编队系统 + 航拍机",
    heroImage: IMAGES.droneSwarm,
    gallery: [
      IMAGES.droneShow,
      IMAGES.lightShowNight,
      IMAGES.festivalShow,
      IMAGES.droneSwarm,
    ],
    featured: false,
    excerpt: "数百架无人机编队表演绚丽灯光秀，科技与艺术的完美结合",
    description: "这是重庆首次大规模无人机编队表演项目。数百架无人机在夜空中组成绚丽的图案和文字，为观众带来前所未有的视觉体验...",
    challenges: [
      {
        challenge: "编队协调复杂，需要精确到厘米级的定位控制",
        solution: "使用RTK高精度定位系统，提前进行多次模拟演练",
      },
    ],
    testimonial: null,
  },
  {
    id: 12,
    slug: "hongya-cave-vr-panorama",
    title: "VR全景-洪崖洞",
    category: "vr-panorama",
    categoryName: "更多服务-VR全景",
    location: "重庆渝中区",
    date: "2023-11-25",
    clientType: "文旅客户",
    equipment: "Insta360 Titan + DJI Matrice",
    heroImage: IMAGES.vrHongya,
    gallery: [
      IMAGES.vrHongya,
      IMAGES.landmark,
      IMAGES.tourismNight,
      IMAGES.filmCinematic,
    ],
    featured: false,
    excerpt: "洪崖洞720°VR全景漫游制作，沉浸式体验山城地标魅力",
    description: "洪崖洞是重庆最具代表性的景点之一。本项目制作了完整的VR全景漫游内容，让用户可以足不出户就能身临其境地游览这一文化地标...",
    challenges: [
      {
        challenge: "多层建筑结构复杂，全景拼接难度大",
        solution: "分层采集，每层独立拍摄后进行精准拼接，确保无缝过渡",
      },
    ],
    testimonial: null,
  },
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

/* ========== 生成静态路径 ========== */
export function generateStaticParams() {
  return MOCK_PORTFOLIOS.map((portfolio) => ({
    slug: portfolio.slug,
  }));
}

/* ========== 生成SEO元数据 ========== */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const portfolio = MOCK_PORTFOLIOS.find((p) => p.slug === slug);

  if (!portfolio) {
    return { title: "案例未找到" };
  }

  return {
    title: `${portfolio.title} — 作品案例 | 重庆极翼科技`,
    description: portfolio.excerpt,
    openGraph: {
      title: portfolio.title,
      description: portfolio.excerpt,
      type: "article",
      locale: "zh_CN",
    },
  };
}

/* ========== 详情页面组件 ========== */
export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const portfolioIndex = MOCK_PORTFOLIOS.findIndex((p) => p.slug === slug);
  const portfolio = MOCK_PORTFOLIOS[portfolioIndex];
  const prevPortfolio =
    portfolioIndex > 0 ? MOCK_PORTFOLIOS[portfolioIndex - 1] : null;
  const nextPortfolio =
    portfolioIndex < MOCK_PORTFOLIOS.length - 1
      ? MOCK_PORTFOLIOS[portfolioIndex + 1]
      : null;

  if (!portfolio) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <FilmStrip size={64} weight="duotone" className="mx-auto mb-4 text-muted-foreground" />
          <h1 className="mb-2 text-2xl font-bold text-white">案例未找到</h1>
          <p className="mb-6 text-muted-foreground">该案例可能已被删除或不存在</p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full bg-tech-cyan px-6 py-2.5 text-sm font-medium text-white hover:bg-tech-cyan/90 transition-colors"
          >
            返回案例列表
          </Link>
        </div>
      </div>
    );
  }

  const heroImageUrl = portfolio.heroImage;

  /* ====== Hero大图区 (60vh) - 真实航拍背景 ====== */
  return (
    <div className="flex flex-col">
      {/* ====== Hero大图区 (60vh) ====== */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        {/* 真实航拍背景图 */}
        <div className="absolute inset-0">
          <img
            src={heroImageUrl}
            alt={portfolio.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* 渐变叠加层 - 确保文字可读 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

        {/* 纹理噪点 */}
        <div className="noise-overlay absolute inset-0 opacity-[0.03]" />

        {/* 居中内容 */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Badge
            variant="outline"
            className={`${CATEGORY_COLORS[portfolio.category]} mb-4 text-xs backdrop-blur-sm`}
          >
            {portfolio.categoryName}
          </Badge>

          <h1 className="mb-4 text-4xl font-heading font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
            {portfolio.title}
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg drop-shadow-md">
            {portfolio.excerpt}
          </p>

          {/* 元信息行 */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} weight="duotone" />
              {portfolio.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} weight="duotone" />
              {portfolio.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Camera size={14} weight="duotone" />
              {portfolio.equipment}
            </span>
          </div>
        </div>

        {/* 底部渐隐 */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ====== 面包屑导航 ====== */}
      <section className="section-container py-4">
        <Breadcrumb
          items={[
            { label: "首页", href: "/" },
            { label: "作品案例", href: "/portfolio" },
            { label: portfolio.title },
          ]}
        />
      </section>

      {/* ====== 基本信息 ====== */}
      <section className="section-container pb-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Calendar, label: "拍摄日期", value: portfolio.date },
            { icon: MapPin, label: "拍摄地点", value: portfolio.location },
            { icon: User, label: "客户类型", value: portfolio.clientType },
            { icon: Camera, label: "使用设备", value: portfolio.equipment },
          ].map((item) => (
            <div key={item.label} className="glass-card rounded-xl p-5">
              <item.icon
                size={20}
                weight="duotone"
                className="mb-2 text-tech-cyan"
              />
              <p className="mb-1 text-xs text-muted-foreground">{item.label}</p>
              <p className="text-sm font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====== 项目详情富文本区 ====== */}
      <section className="section-container border-t border-white/[0.05] py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-heading font-bold gradient-text">
            项目详情
          </h2>
          <div
            className="prose prose-invert prose-sm max-w-none leading-relaxed text-muted-foreground
            [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:text-lg [&>h2]:font-bold [&>h2]:text-white
            [&>h3]:mt-6 [&>h3]:mb-3 [&>h3]:text-base [&>h3]:font-semibold [&>h3]:text-white/90
            [&>ul]:list-none [&>ul]:pl-0 [&>ul]:space-y-2
            [&>li]:relative [&>li]:pl-6 [&>li]:before:content-[''] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-1.5 [&>li]:before:h-1.5 [&>li]:before:w-1.5 [&>li]:before:rounded-full [&>li]:before:bg-tech-cyan
            [&>strong]:text-white [&>p]:mb-4"
            dangerouslySetInnerHTML={{ __html: portfolio.description.replace(/\n/g, "<br />") }}
          />
        </div>
      </section>

      {/* ====== 详细图片集Gallery - 真实场景图 ====== */}
      <section className="border-t border-white/[0.05] py-12">
        <div className="section-container">
          <h2 className="mb-6 text-center text-2xl font-heading font-bold gradient-text">
            图片集
          </h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {portfolio.gallery.map((imageUrl, index) => {
              return (
                <div
                  key={index}
                  className="group relative aspect-[16/10] overflow-hidden rounded-xl cursor-pointer bg-gradient-to-br from-slate-800 to-slate-900"
                >
                  {/* 真实场景图片 */}
                  <img
                    src={imageUrl}
                    alt={`${portfolio.title} - 图片 ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Hover遮罩 */}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />

                  {/* 图片编号 */}
                  <div className="absolute bottom-2 left-3 z-10 flex items-center gap-1.5 text-xs text-white/70 group-hover:text-white transition-colors">
                    <Camera size={12} weight="duotone" />
                    <span>#{index + 1}</span>
                  </div>

                  {/* 悬停放大图标提示 */}
                  <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <FilmStrip size={16} weight="bold" className="text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== 项目难点与解决方案 ====== */}
      {portfolio.challenges.length > 0 && (
        <section className="border-t border-white/[0.05] py-12">
          <div className="section-container">
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 flex items-center gap-3">
                <Lightbulb
                  size={24}
                  weight="duotone"
                  className="text-aerial-orange"
                />
                <h2 className="text-2xl font-heading font-bold gradient-text-warm">
                  项目难点与解决方案
                </h2>
              </div>

              <div className="space-y-6">
                {portfolio.challenges.map((item, index) => (
                  <div key={index} className="glass-card rounded-xl p-6">
                    <div className="mb-3 flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-xs font-bold text-red-400">
                        !
                      </span>
                      <div>
                        <h3 className="mb-1 text-sm font-semibold text-white">
                          挑战 #{index + 1}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.challenge}
                        </p>
                      </div>
                    </div>
                    <div className="ml-9 flex items-start gap-3 border-l-2 border-tech-cyan/20 pl-4">
                      <CheckCircle
                        size={18}
                        weight="duotone"
                        className="mt-0.5 shrink-0 text-tech-cyan"
                      />
                      <div>
                        <h4 className="mb-1 text-xs font-medium text-tech-cyan uppercase tracking-wider">
                          解决方案
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ====== 客户评价引用块 ====== */}
      {portfolio.testimonial && (
        <section className="border-t border-white/[0.05] py-12">
          <div className="section-container">
            <div className="glass-card mx-auto max-w-2xl rounded-2xl p-8 sm:p-10 relative overflow-hidden">
              {/* 大引号装饰 */}
              <Quotes
                size={80}
                weight="duotone"
                className="absolute top-4 right-6 text-tech-cyan/10"
              />

              <div className="relative">
                <p className="mb-6 text-base leading-relaxed text-white/90 italic sm:text-lg">
                  &ldquo;{portfolio.testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tech-cyan/15 text-sm font-bold text-tech-cyan">
                    {portfolio.testimonial.author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {portfolio.testimonial.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {portfolio.testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ====== 上下篇导航 ====== */}
      <section className="border-t border-white/[0.05] py-8">
        <div className="section-container">
          <div className="flex items-center justify-between gap-4">
            {prevPortfolio ? (
              <Link
                href={`/portfolio/${prevPortfolio.slug}`}
                className="group flex flex-1 items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-tech-cyan/20 hover:bg-white/[0.04]"
              >
                <ArrowLeft
                  size={18}
                  weight="bold"
                  className="shrink-0 text-muted-foreground group-hover:text-tech-cyan transition-colors"
                />
                <div className="min-w-0">
                  <p className="mb-0.5 text-xs text-muted-foreground">上一篇</p>
                  <p className="truncate text-sm font-medium text-white group-hover:text-tech-cyan transition-colors">
                    {prevPortfolio.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {/* 返回列表按钮 */}
            <Link
              href="/portfolio"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-muted-foreground transition-all hover:border-tech-cyan/20 hover:bg-white/[0.04 hover:text-tech-cyan"
            >
              <FilmStrip size={20} weight="duotone" />
            </Link>

            {nextPortfolio ? (
              <Link
                href={`/portfolio/${nextPortfolio.slug}`}
                className="group flex flex-1 items-center justify-end gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-tech-cyan/20 hover:bg-white/[0.04]"
              >
                <div className="min-w-0 text-right">
                  <p className="mb-0.5 text-xs text-muted-foreground">下一篇</p>
                  <p className="truncate text-sm font-medium text-white group-hover:text-tech-cyan transition-colors">
                    {nextPortfolio.title}
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  weight="bold"
                  className="shrink-0 text-muted-foreground group-hover:text-tech-cyan transition-colors"
                />
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </div>
      </section>

      {/* ====== 分享功能栏 ====== */}
      <section className="border-t border-white/[0.05] py-6">
        <div className="section-container">
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              觉得不错？分享给朋友
            </p>
            <ShareButton />
          </div>
        </div>
      </section>
    </div>
  );
}
