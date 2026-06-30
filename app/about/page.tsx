import type { Metadata } from "next";
import AboutHero from "@/components/about/about-hero";
import CompanyIntro from "@/components/about/company-intro";
import TimelineSection from "@/components/about/timeline-section";
import TeamSection from "@/components/about/team-section";
import CertificationsSection from "@/components/about/certifications-section";
import CultureSection from "@/components/about/culture-section";

/* ========== SEO Metadata ========== */
export const metadata: Metadata = {
  title: "关于我们 — 重庆极翼无人飞行器科技有限公司",
  description:
    "了解极翼科技：深耕重庆11年的专业无人机航拍服务商。从2015年成立至今，我们以极致视角记录每一份珍贵，提供航空摄影、影视制作、航测测绘等全场景服务。",
};

/* ========== 关于我们主页面 — 服务端组件组合6个Section ========== */
export default function AboutPage() {
  return (
    <main id="main-content" className="flex flex-col">
      {/* Section 1: 页面Hero区 */}
      <AboutHero />

      {/* Section 2: 公司简介 */}
      <CompanyIntro />

      {/* Section 3: 发展历程时间轴 ⭐ 核心亮点 */}
      <TimelineSection />

      {/* Section 4: 核心团队 */}
      <TeamSection />

      {/* Section 5: 资质荣誉墙 */}
      <CertificationsSection />

      {/* Section 6: 企业文化 */}
      <CultureSection />
    </main>
  );
}
