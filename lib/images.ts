/**
 * 极翼科技 — 本地图片资源库
 * 所有图片均存储在 public/images/ 目录下，零网络依赖，极速加载
 *
 * 目录结构：
 *   /images/hero/          首页大图
 *   /images/wedding/       婚庆航拍
 *   /images/real-estate/   房地产航拍
 *   /images/event/         活动赛事
 *   /images/tourism/       旅游宣传
 *   /images/corporate/     企业品牌
 *   /images/film/          影视纪录片
 *   /images/engineering/   工程记录
 *   /images/surveying/     航测测绘
 *   /images/vr/            VR全景
 *   /images/live-stream/   无人机直播
 *   /images/light-show/    编队表演
 *   /images/sales/         整机销售
 *   /images/agriculture/   植保服务
 *   /images/equipment/     设备展示
 *   /images/portfolio/     作品案例
 *   /images/about/         关于我们
 *   /images/contact/       联系我们
 */

/* ========== 图片路径前缀 ========== */
const BASE = "/images";

export function img(path: string): string {
  return `${BASE}${path}`;
}

/* ========== 图片资源常量（语义化命名） ========== */
export const IMAGES = {
  // ==================== 首页 Hero ====================
  heroAerial: `${BASE}/hero/chongqing-city.jpg`,
  cityPanorama: `${BASE}/hero/chongqing-city.jpg`,
  droneShot: `${BASE}/equipment/mavic3pro.jpg`,

  // ==================== 婚庆航拍 (Wedding) ====================
  weddingOutdoor: `${BASE}/wedding/ceremony-outdoor.jpg`,
  weddingVenue: `${BASE}/wedding/venue-panorama.jpg`,
  weddingCar: `${BASE}/wedding/car-convoy.jpg`,
  weddingBanquet: `${BASE}/wedding/reception-hall.jpg`,
  weddingSunset: `${BASE}/wedding/couple-romantic.jpg`,
  weddingCta: `${BASE}/wedding/decoration.jpg`,

  // ==================== 房地产航拍 (Real Estate) ====================
  realEstateHero: `${BASE}/real-estate/modern-building.jpg`,
  buildingExterior: `${BASE}/real-estate/luxury-housing.jpg`,
  luxuryBuilding: `${BASE}/real-estate/city-skyline.jpg`,
  interiorAerial: `${BASE}/real-estate/commercial.jpg`,
  realEstateCta: `${BASE}/real-estate/garden-view.jpg`,

  // ==================== 活动赛事 (Event) ====================
  eventStadium: `${BASE}/event/stadium-aerial.jpg`,
  concertCrowd: `${BASE}/event/music-festival.jpg`,
  eventNight: `${BASE}/event/product-launch.jpg`,
  sportsAction: `${BASE}/event/marathon-race.jpg`,
  eventCta: `${BASE}/event/company-gala.jpg`,

  // ==================== 旅游宣传 (Tourism) ====================
  tourismCity: `${BASE}/tourism/city-night.jpg`,
  riverView: `${BASE}/tourism/coastal-beach.jpg`,
  landmark: `${BASE}/tourism/ancient-town.jpg`,
  tourismNight: `${BASE}/tourism/city-night.jpg`,
  tourismCoastal: `${BASE}/tourism/coastal-beach.jpg`,
  tourismCta: `${BASE}/tourism/nature-scenic.jpg`,

  // ==================== 企业品牌 (Corporate) ====================
  corporateCampus: `${BASE}/corporate/campus-aerial.jpg`,
  factoryAerial: `${BASE}/corporate/factory-zone.jpg`,
  officeBuilding: `${BASE}/corporate/office-building.jpg`,
  teamPhoto: `${BASE}/corporate/team-photo.jpg`,
  corporateCta: `${BASE}/corporate/business-meeting.jpg`,

  // ==================== 影视纪录片 (Film) ====================
  filmCinematic: `${BASE}/film/movie-set.jpg`,
  filmSet: `${BASE}/film/aerial-shot.jpg`,
  movieScene: `${BASE}/film/music-video.jpg`,
  filmEquipment: `${BASE}/film/cinema-equipment.jpg`,
  filmCta: `${BASE}/film/commercial-ad.jpg`,

  // ==================== 工程记录 (Engineering) ====================
  constructionSite: `${BASE}/engineering/construction-site.jpg`,
  craneWork: `${BASE}/engineering/site-panorama.jpg`,
  engineeringProgress: `${BASE}/engineering/progress-monitor.jpg`,
  bridgeBuild: `${BASE}/engineering/bridge-build.jpg`,
  engineeringCta: `${BASE}/engineering/infrastructure.jpg`,

  // ==================== VR全景 (VR Panorama) ====================
  vrPanorama: `${BASE}/vr/panorama-360.jpg`,
  vrInterior: `${BASE}/vr/virtual-tour.jpg`,
  vrRealEstate: `${BASE}/vr/virtual-tour.jpg`,
  vrTourism: `${BASE}/vr/panorama-360.jpg`,
  vrCta: `${BASE}/vr/krpano-demo.jpg`,

  // ==================== 无人机直播 (Live Stream) ====================
  liveStudio: `${BASE}/live-stream/broadcast-equip.jpg`,
  liveEvent: `${BASE}/live-stream/drone-live.jpg`,
  liveSports: `${BASE}/live-stream/drone-live.jpg`,
  liveConcert: `${BASE}/live-stream/broadcast-equip.jpg`,
  liveCta: `${BASE}/live-stream/broadcast-equip.jpg`,

  // ==================== 编队表演 (Light Show) ====================
  lightShowNight: `${BASE}/light-show/night-lights.jpg`,
  formationFlight: `${BASE}/light-show/light-patterns.jpg`,
  festivalShow: `${BASE}/light-show/drone-swarm.jpg`,
  lightShowCta: `${BASE}/light-show/drone-swarm.jpg`,

  // ==================== 整机销售 (Sales) ====================
  droneStore: `${BASE}/sales/drone-accessories.jpg`,
  djiMavic: `${BASE}/sales/mavic-drone.jpg`,
  djiInspire: `${BASE}/sales/mavic-drone.jpg`,
  accessories: `${BASE}/sales/drone-accessories.jpg`,
  salesCta: `${BASE}/sales/mini-drone.jpg`,

  // ==================== 植保服务 (Agriculture) ====================
  agriField: `${BASE}/agriculture/agri-field.jpg`,
  cropSpraying: `${BASE}/agriculture/crop-spraying.jpg`,
  greenFarm: `${BASE}/agriculture/rural-countryside.jpg`,
  agriDrone: `${BASE}/agriculture/agri-drone-work.jpg`,
  agriCta: `${BASE}/agriculture/harvest-season.jpg`,

  // ==================== 设备展示 (Equipment) — Pexels真实无人机实物图（与Hero轮播同源，已验证可用）================
  equipmentHero: "https://images.pexels.com/photos/874045/pexels-photo-874045.jpeg?auto=compress&cs=tinysrgb&w=800",
  mavic3Pro: "https://images.pexels.com/photos/874045/pexels-photo-874045.jpeg?auto=compress&cs=tinysrgb&w=800",
  inspire3: "https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=800",
  matrice350: "https://images.pexels.com/photos/52530/antenna-drone-technology-wireless-52530.jpeg?auto=compress&cs=tinysrgb&w=800",
  mavic3Enterprise: "https://images.pexels.com/photos/8846381/pexels-photo-8846381.jpeg?auto=compress&cs=tinysrgb&w=800",
  matrice30t: "https://images.pexels.com/photos/557391/pexels-photo-557391.jpeg?auto=compress&cs=tinysrgb&w=800",
  mini4Pro: "https://images.pexels.com/photos/4596736/pexels-photo-4596736.jpeg?auto=compress&cs=tinysrgb&w=800",
  air3: "https://images.pexels.com/photos/7876624/pexels-photo-7876624.jpeg?auto=compress&cs=tinysrgb&w=800",
  avata2: "https://images.pexels.com/photos/8692994/pexels-photo-8692994.jpeg?auto=compress&cs=tinysrgb&w=800",
  rcPro: "https://images.pexels.com/photos/159272/pexels-photo-159272.jpeg?auto=compress&cs=tinysrgb&w=800",
  crystalSky: "https://images.pexels.com/photos/415811/pexels-photo-415811.jpeg?auto=compress&cs=tinysrgb&w=800",
  o3Pro: "https://images.pexels.com/photos/3783385/pexels-photo-3783385.jpeg?auto=compress&cs=tinysrgb&w=800",
  l2Lidar: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
  p1Camera: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800",
  djiSoftware: "https://images.pexels.com/photos/270409/pexels-photo-270409.jpeg?auto=compress&cs=tinysrgb&w=800",
  aggregatorRouter: "https://images.pexels.com/photos/3677192/pexels-photo-3677192.jpeg?auto=compress&cs=tinysrgb&w=800",
  droneShow: `${BASE}/light-show/drone-swarm.jpg`,

  // ==================== 作品案例 (Portfolio) ====================
  chongqingNight: `${BASE}/tourism/city-night.jpg`,
  yangtzeCable: `${BASE}/tourism/coastal-beach.jpg`,
  wulongBridge: `${BASE}/engineering/bridge-build.jpg`,
  jialingFog: `${BASE}/tourism/mountain-aerial.jpg`,
  lakeWedding: `${BASE}/wedding/couple-romantic.jpg`,
  industrialPark: `${BASE}/corporate/factory-zone.jpg`,
  newRealEstate: `${BASE}/real-estate/modern-building.jpg`,
  cbdSkyline: `${BASE}/real-estate/city-skyline.jpg`,
  musicFestival: `${BASE}/event/music-festival.jpg`,
  universityGrad: `${BASE}/corporate/campus-aerial.jpg`,
  droneSwarm: `${BASE}/light-show/drone-swarm.jpg`,
  vrHongya: `${BASE}/vr/panorama-360.jpg`,

  // ==================== 关于我们 (About) ====================
  aboutHero: `${BASE}/about/office-space.jpg`,
  officeSpace: `${BASE}/about/office-space.jpg`,

  // ==================== 联系我们 (Contact) ====================
  contactMap: `${BASE}/contact/map-decoration.jpg`,

  // ==================== 航测测绘专用 (Surveying) ====================
  surveyingSmartCity: `${BASE}/surveying/dom-image.jpg`,
  surveyingNaturalResource: `${BASE}/surveying/land-survey.jpg`,
  surveyingTransport: `${BASE}/surveying/oblique-photo.jpg`,
  surveyingEmergency: `${BASE}/surveying/lidar-scan.jpg`,
  surveyingLidar: `${BASE}/surveying/lidar-scan.jpg`,
  surveying3DModel: `${BASE}/surveying/oblique-photo.jpg`,
} as const;
