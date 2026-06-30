import HeroSection from "@/components/home/hero-section";
import StatsDashboard from "@/components/home/stats-dashboard";
import ShowcaseGallery from "@/components/home/showcase-gallery";
import WhyChooseUs from "@/components/home/why-choose-us";
import PartnersSection from "@/components/home/partners-section";
import ServiceLinks from "@/components/home/service-links";

export default function Home() {
  return (
    <main id="main-content" className="flex flex-col">
      {/* Section 1: Hero沉浸式首屏 */}
      <HeroSection />

      {/* Section 2: 数据看板 */}
      <StatsDashboard />

      {/* Section 3: 精选作品展示画廊 */}
      <ShowcaseGallery />

      {/* Section 4: 为什么选择极翼 */}
      <WhyChooseUs />

      {/* Section 5: 合作伙伴生态 */}
      <PartnersSection />

      {/* Section 6: 服务快捷入口 */}
      <ServiceLinks />
    </main>
  );
}
