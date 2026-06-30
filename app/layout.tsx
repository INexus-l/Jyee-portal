import type { Metadata } from "next";
import {
  Noto_Sans_SC,
  Noto_Serif_SC,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BackToTop from "@/components/layout/back-to-top";

/* ========== 字体加载：font-display=swap 防止 FOIT/FOUT ========== */
const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

/* ========== SEO Metadata ========== */
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://jiyiaerial.vercel.app"),
  title: {
    default: "重庆极翼无人飞行器科技有限公司 — 专业无人机航拍服务 | 极致视角 翼望山城",
    template: "%s | 重庆极翼无人飞行器科技有限公司",
  },
  description:
    "极翼科技专注无人机航拍服务11年，提供婚庆航拍、房地产航拍、活动赛事、城市宣传、企业品牌、影视纪录片等全场景航拍解决方案。RED/A7S/5D3等顶级影像设备，四轴/六轴/八轴多平台支持，重庆全域覆盖。",
  keywords: [
    "重庆航拍",
    "无人机航拍",
    "极翼科技",
    "婚庆航拍",
    "房地产航拍",
    "活动航拍",
    "城市宣传片",
    "航测测绘",
    "VR全景航拍",
    "无人机直播",
    "重庆极翼无人飞行器科技",
  ],
  authors: [{ name: "重庆极翼无人飞行器科技有限公司" }],
  creator: "重庆极翼无人飞行器科技有限公司",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://jiyiaerial.vercel.app",
    siteName: "重庆极翼无人飞行器科技有限公司",
    title: "专业无人机航拍服务 — 重庆极翼科技",
    description:
      "11年技术积淀，7大品牌相机，3类无人机平台。极致视角，翼望山城。",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "重庆极翼无人飞行器科技有限公司",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "重庆极翼无人飞行器科技有限公司 — 专业无人机航拍服务",
    description: "11年技术积淀，极致视角，翼望山城。",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ========== JSON-LD 结构化数据：公司信息 ========== */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${notoSansSC.variable} ${notoSerifSC.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        {/* 百度站长验证（预留） */}
        {/* <meta name="baidu-site-verification" content="YOUR_CODE" /> */}
        {/* 百度统计（预留） */}
        {/* <script src="https://hm.baidu.com/hm.js?YOUR_ID"></script> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "重庆极翼无人飞行器科技有限公司",
              alternateName: "极翼科技 / Jiyi Aerial",
              description:
                "专业无人机航拍服务商，专注航拍服务11年。提供婚庆、房产、活动、城市宣传、企业品牌、影视等全场景航拍及航测测绘服务。",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://jiyiaerial.vercel.app",
              telephone: "+86-150-2305-5582",
              email: "790356914@qq.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "天龙广场B栋2单元21-7号",
                addressLocality: "南岸区",
                addressRegion: "重庆市",
                addressCountry: "CN",
              },
              areaServed: {
                "@type": "City",
                name: "重庆市",
                containedInPlace: {
                  "@type": "State",
                  name: "中国",
                },
              },
              foundingDate: "2015-04",
              image: "/og-image.jpg",
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* Skip Link 无障碍跳转 */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:text-sm font-medium transition-colors"
        >
          跳转到主内容
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
