"use client";

import Link from "next/link";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  ArrowRight,
  Drone,
} from "@phosphor-icons/react/dist/ssr";
import { CONTACT_INFO, SITE_CONFIG } from "@/lib/constants";
import JiyiLogo from "@/components/ui/JiyiLogo";

const NAV_LINKS = [
  { label: "首页", href: "/" },
  { label: "关于我们", href: "/about" },
  { label: "航拍服务", href: "/services" },
  { label: "更多服务", href: "/more-services" },
  { label: "作品案例", href: "/portfolio" },
  { label: "设备展示", href: "/equipment" },
];

const SERVICE_LINKS = [
  { label: "婚庆航拍", href: "/services/wedding" },
  { label: "房地产", href: "/services/real-estate" },
  { label: "活动赛事", href: "/services/event" },
  { label: "城市宣传", href: "/services/tourism" },
];

const MORE_LINKS = [
  { label: "VR全景", href: "/more-services/vr-panorama" },
  { label: "无人机直播", href: "/more-services/live-stream" },
  { label: "航测测绘", href: "/surveying" },
];

const SOCIAL_LINKS = [
  {
    name: "微信",
    icon: "https://thesvg.org/icons/wechat/default.svg",
    href: "https://mp.weixin.qq.com",
    gradient: "from-[#07C160] to-[#00A850]",
  },
  {
    name: "抖音",
    icon: "https://thesvg.org/icons/tiktok/default.svg",
    href: "https://www.douyin.com",
    gradient: "from-[#000000] to-[#333333]",
  },
  {
    name: "YouTube",
    icon: "https://thesvg.org/icons/youtube/default.svg",
    href: "https://www.youtube.com",
    gradient: "from-[#FF0000] to-[#CC0000]",
  },
  {
    name: "小红书",
    icon: "https://thesvg.org/icons/xiaohongshu/default.svg",
    href: "https://www.xiaohongshu.com",
    gradient: "from-[#FF2442] to-[#E60026]",
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#0c1222] to-[#0a0f1a] text-white">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0077B6]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#0077B6]/5 via-transparent to-[#00D4FF]/5 blur-3xl" />
        {/* 网格纹理 */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="section-container relative py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* 第一列：品牌 + 联系 */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6] to-[#00D4FF] rounded-xl blur-md opacity-50 group-hover:opacity-70 transition-opacity" />
                <JiyiLogo size="lg" showText={true} textColor="#ffffff" />
              </div>
            </Link>
            <p className="text-sm text-[#94a3b8] leading-relaxed max-w-xs">
              专业无人机航拍与航测测绘服务，用镜头记录世界的不同角度
            </p>
            
            {/* 联系方式卡片 */}
            <div className="relative mt-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/20 to-transparent rounded-2xl" />
              <div className="relative p-5 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0077B6] to-[#00D4FF] flex items-center justify-center">
                    <Drone size={16} weight="duotone" className="text-white" />
                  </div>
                  <span className="text-sm font-semibold text-white">联系我们</span>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    className="flex items-center gap-3 text-sm text-[#94a3b8] hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#0077B6]/30 transition-colors">
                      <Phone size={14} weight="duotone" className="text-[#00D4FF]" />
                    </div>
                    <span className="group-hover:translate-x-0.5 transition-transform">{CONTACT_INFO.phone}</span>
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-3 text-sm text-[#94a3b8] hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#0077B6]/30 transition-colors">
                      <EnvelopeSimple size={14} weight="duotone" className="text-[#00D4FF]" />
                    </div>
                    <span className="group-hover:translate-x-0.5 transition-transform">{CONTACT_INFO.email}</span>
                  </a>
                  <div className="flex items-center gap-3 text-sm text-[#94a3b8]">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      <MapPin size={14} weight="duotone" className="text-[#00D4FF]" />
                    </div>
                    <span>{CONTACT_INFO.addressShort}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 第二列：快速导航 */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-[#0077B6] to-[#00D4FF] rounded-full" />
              快速导航
            </h4>
            <div className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center text-sm text-[#94a3b8] hover:text-white transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0077B6]/0 group-hover:bg-[#00D4FF] mr-2.5 transition-all scale-0 group-hover:scale-100" />
                  <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* 第三列：服务项目 */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-[#0077B6] to-[#00D4FF] rounded-full" />
              服务项目
            </h4>
            <div className="space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center text-sm text-[#94a3b8] hover:text-white transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0077B6]/0 group-hover:bg-[#00D4FF] mr-2.5 transition-all scale-0 group-hover:scale-100" />
                  <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* 第四列：更多服务 */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-[#0077B6] to-[#00D4FF] rounded-full" />
              更多服务
            </h4>
            <div className="space-y-2.5">
              {MORE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center text-sm text-[#94a3b8] hover:text-white transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0077B6]/0 group-hover:bg-[#00D4FF] mr-2.5 transition-all scale-0 group-hover:scale-100" />
                  <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* 第五列：关注我们 + 订阅 */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-[#0077B6] to-[#00D4FF] rounded-full" />
                关注我们
              </h4>
              <p className="mt-2 text-sm text-[#94a3b8]">
                获取相关案例和服务支持
              </p>
            </div>

            {/* 社交媒体图标区域 */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  title={social.name}
                >
                  {/* 光晕效果 */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} rounded-2xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
                  {/* 图标容器 */}
                  <div className="relative w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10 group-hover:scale-110 group-hover:-translate-y-1">
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-6 h-6 object-contain"
                      loading="lazy"
                    />
                  </div>
                </a>
              ))}
            </div>

            {/* 订阅表单 */}
            <div className="relative mt-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/10 to-transparent rounded-2xl" />
              <div className="relative p-5 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                <h5 className="text-sm font-semibold text-white mb-3">
                  订阅资讯
                </h5>
                <p className="text-xs text-[#64748b] mb-4">
                  获取最新行业动态与案例分享
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="输入您的邮箱"
                    className="flex-1 h-10 px-4 text-sm rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-[#64748b] focus:outline-none focus:border-[#0077B6]/50 focus:ring-1 focus:ring-[#0077B6]/30 focus:bg-white/10 transition-all"
                  />
                  <button className="h-10 px-4 rounded-xl bg-gradient-to-r from-[#0077B6] to-[#00D4FF] text-white text-sm font-medium hover:shadow-lg hover:shadow-[#0077B6]/25 hover:scale-105 transition-all flex items-center justify-center">
                    <ArrowRight size={16} weight="bold" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部版权区域 */}
      <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#64748b] tracking-wide">
            &copy;{new Date().getFullYear()} {SITE_CONFIG.shortName} · 渝ICP备XXXXXXXX号-X
          </p>
          <p className="text-xs text-[#64748b]">
            {SITE_CONFIG.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
