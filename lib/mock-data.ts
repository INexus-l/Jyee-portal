/**
 * 作品案例 Mock 数据
 * 当前阶段：用于前台展示和搜索API
 * 后续接入 Payload CMS 后替换为真实数据
 */

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string[];
  shootDate: string | null;
  location: string | null;
  clientType: string | null;
  coverImage: string | null;
  status: "draft" | "published";
  order: number;
  createdAt: string;
  updatedAt: string;
}

/** Mock 案例数据 */
export const mockPortfolios: PortfolioItem[] = [
  {
    id: "1",
    slug: "chongqing-wedding-2024",
    title: "重庆解放碑婚礼航拍",
    excerpt:
      "为新人记录人生重要时刻，使用 Inspire 3 搭载 Zenmuse X9-8K Air，从高空俯瞰解放碑CBD的璀璨夜景。",
    category: ["wedding"],
    shootDate: "2024-05-20",
    location: "重庆市渝中区解放碑",
    clientType: "individual",
    coverImage: "/portfolio/wedding-1.jpg",
    status: "published",
    order: 10,
    createdAt: "2024-05-21T08:00:00Z",
    updatedAt: "2024-05-21T08:00:00Z",
  },
  {
    id: "2",
    slug: "real-estate-longspring",
    title: "龙湖春江天境房地产航拍",
    excerpt:
      "为龙湖地产打造高端楼盘宣传片，展现建筑与山城地貌的完美融合，多角度呈现项目全貌。",
    category: ["real-estate"],
    shootDate: "2024-04-15",
    location: "重庆市南岸区弹子石",
    clientType: "enterprise",
    coverImage: "/portfolio/realestate-1.jpg",
    status: "published",
    order: 9,
    createdAt: "2024-04-16T10:00:00Z",
    updatedAt: "2024-04-16T10:00:00Z",
  },
  {
    id: "3",
    slug: "chongqing-marathon-2024",
    title: "2024重庆国际马拉松赛事航拍",
    excerpt:
      "全程跟拍重庆马拉松赛事，从起跑仪式到终点冲线，用上帝视角记录三万跑者的精彩瞬间。",
    category: ["event"],
    shootDate: "2024-03-17",
    location: "重庆市南滨路",
    clientType: "institution",
    coverImage: "/portfolio/event-1.jpg",
    status: "published",
    order: 8,
    createdAt: "2024-03-18T09:00:00Z",
    updatedAt: "2024-03-18T09:00:00Z",
  },
  {
    id: "4",
    slug: "chongqing-tourism-promo",
    title: "「山水之城·美丽之地」城市宣传片",
    excerpt:
      "配合重庆市文旅委拍摄城市形象宣传片，涵盖洪崖洞、长江索道、磁器口等标志性景点。",
    category: ["tourism"],
    shootDate: "2024-02-01",
    location: "重庆市全域",
    clientType: "institution",
    coverImage: "/portfolio/tourism-1.jpg",
    status: "published",
    order: 7,
    createdAt: "2024-02-02T14:00:00Z",
    updatedAt: "2024-02-02T14:00:00Z",
  },
  {
    id: "5",
    slug: "changan-corporate-film",
    title: "长安汽车品牌形象片航拍",
    excerpt:
      "为长安汽车拍摄新能源工厂及测试基地航拍素材，展现智能制造与绿色出行的企业理念。",
    category: ["corporate"],
    shootDate: "2024-01-20",
    location: "重庆市两江新区",
    clientType: "enterprise",
    coverImage: "/portfolio/corporate-1.jpg",
    status: "published",
    order: 6,
    createdAt: "2024-01-21T11:00:00Z",
    updatedAt: "2024-01-21T11:00:00Z",
  },
  {
    id: "6",
    slug: "documentary-three-gorges",
    title: "《三峡人家》纪录片航拍",
    excerpt:
      "参与央视纪录片《三峡人家》航拍工作，历时30天沿长江溯流而上，记录三峡库区变迁。",
    category: ["film"],
    shootDate: "2023-11-01",
    location: "湖北省宜昌市至重庆市奉节县",
    clientType: "institution",
    coverImage: "/portfolio/film-1.jpg",
    status: "published",
    order: 5,
    createdAt: "2023-11-02T16:00:00Z",
    updatedAt: "2023-11-02T16:00:00Z",
  },
  {
    id: "7",
    slug: "railway-construction-progress",
    title: "渝湘高铁建设进度记录",
    excerpt:
      "为期6个月的定点航拍记录，完整呈现渝湘高铁隧道群及桥梁工程的施工全过程。",
    category: ["engineering"],
    shootDate: "2023-09-01",
    location: "重庆市武隆区",
    clientType: "enterprise",
    coverImage: "/portfolio/engineering-1.jpg",
    status: "published",
    order: 4,
    createdAt: "2023-09-02T08:00:00Z",
    updatedAt: "2023-09-02T08:00:00Z",
  },
  {
    id: "8",
    slug: "wulong-surveying-mapping",
    title: "武隆喀斯特地貌航测测绘",
    excerpt:
      "使用 P1 全画幅相机对武隆天生三桥区域进行高精度正射影像采集，生成1:500地形图。",
    category: ["surveying"],
    shootDate: "2023-07-15",
    location: "重庆市武隆区仙女山镇",
    clientType: "institution",
    coverImage: "/portfolio/surveying-1.jpg",
    status: "published",
    order: 3,
    createdAt: "2023-07-16T07:00:00Z",
    updatedAt: "2023-07-16T07:00:00Z",
  },
  {
    id: "9",
    slug: "hongyadong-vr-panorama",
    title: "洪崖洞VR全景漫游制作",
    excerpt:
      "360°全景拍摄洪崖洞夜景，支持Web端和移动端沉浸式浏览，让游客足不出户体验山城魅力。",
    category: ["vr-panorama"],
    shootDate: "2023-06-01",
    location: "重庆市渝中区洪崖洞",
    clientType: "enterprise",
    coverImage: "/portfolio/vr-1.jpg",
    status: "published",
    order: 2,
    createdAt: "2023-06-02T13:00:00Z",
    updatedAt: "2023-06-02T13:00:00Z",
  },
  {
    id: "10",
    slug: "outdoor-brand-launch",
    title: "某户外品牌新品发布会航拍",
    excerpt:
      "户外运动品牌新品发布活动现场航拍，结合地面机位与空中视角的多机位协同拍摄。",
    category: ["event", "corporate"],
    shootDate: "2023-05-20",
    location: "重庆市北碚区缙云山",
    clientType: "enterprise",
    coverImage: "/portfolio/other-1.jpg",
    status: "published",
    order: 1,
    createdAt: "2023-05-21T10:00:00Z",
    updatedAt: "2023-05-21T10:00:00Z",
  },
  {
    id: "11",
    slug: "draft-portfolio-example",
    title: "草稿案例（示例）",
    excerpt: "这是一个草稿状态的案例，不会在前台展示。",
    category: ["other"],
    shootDate: null,
    location: null,
    clientType: null,
    coverImage: null,
    status: "draft",
    order: 0,
    createdAt: "2024-06-01T00:00:00Z",
    updatedAt: "2024-06-01T00:00:00Z",
  },
];

/**
 * 获取已发布的案例（过滤掉草稿）
 */
export function getPublishedPortfolios(): PortfolioItem[] {
  return mockPortfolios.filter((p) => p.status === "published");
}

/**
 * 根据 slug 获取单个案例
 */
export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return mockPortfolios.find((p) => p.slug === slug);
}

/**
 * 根据分类筛选案例
 */
export function getPortfoliosByCategory(category: string): PortfolioItem[] {
  return getPublishedPortfolios().filter((p) =>
    p.category.includes(category)
  );
}
