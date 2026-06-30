"use client";

import { useState, useRef } from "react";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  PaperPlaneTilt,
  MapTrifold,
  CheckCircle,
  WarningCircle,
  Question,
  ChatCircleText,
  Buildings,
  MarkerCircle,
  ShieldCheck,
  Timer,
  VideoCamera,
  PaintBrush,
  ArrowsOutCardinal,
} from "@phosphor-icons/react/dist/ssr";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Breadcrumb from "@/components/layout/breadcrumb";
import Map3D from "@/components/ui/map3d";
import { CONTACT_INFO, CATEGORY_LABELS, SITE_CONFIG } from "@/lib/constants";

/* ========== 地图配置 ========== */
const MAP_CONFIG = {
  center: { lng: 106.565, lat: 29.550 },
  zoom: 14,
  companyName: encodeURIComponent("重庆极翼无人飞行器科技有限公司"),
  embedUrl:
    "https://uri.amap.com/embed?center=106.574,29.563&zoom=14&markers=mid,,A:106.574,29.563&callnative=1",
};

/* ========== 联系方式矩阵数据 ========== */
const CONTACT_MATRIX = [
  {
    icon: Phone,
    label: "手机",
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phoneRaw}`,
    highlight: true,
  },
  {
    icon: Phone,
    label: "座机",
    value: CONTACT_INFO.landline,
    href: `tel:${CONTACT_INFO.landline.replace(/-/g, "")}`,
    highlight: false,
  },
  {
    icon: EnvelopeSimple,
    label: "官方邮箱",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    highlight: false,
  },
];

/* ========== 服务覆盖区域 ========== */
const SERVICE_AREAS = [
  { region: "重庆主城", cities: "渝中、江北、南岸、九龙坡、沙坪坝、大渡口、渝北、巴南、北碚" },
  { region: "重庆远郊", cities: "永川、江津、合川、涪陵、长寿、綦江、万盛、璧山" },
  { region: "四川周边", cities: "成都、广安、达州、泸州、内江（异地项目支持）" },
  { region: "特殊项目", cities: "全国范围航拍 / VR全景 / 直播编队（需提前沟通）" },
];

/* ========== 服务类型选项 ========== */
const SERVICE_OPTIONS = [
  ...Object.entries(CATEGORY_LABELS).map(([key, label]) => ({ value: key, label })),
  { value: "light-show", label: "编队表演" },
  { value: "sales", label: "整机销售" },
  { value: "agriculture", label: "植保服务" },
];

/* ========== 预算范围选项 ========== */
const BUDGET_OPTIONS = [
  { value: "under-2000", label: "\u00A52,000 以下" },
  { value: "2000-5000", label: "\u00A52,000 - \u00A55,000" },
  { value: "5000-10000", label: "\u00A55,000 - \u00A510,000" },
  { value: "10000-20000", label: "\u00A510,000 - \u00A520,000" },
  { value: "above-20000", label: "\u00A520,000以上" },
  { value: "tbd", label: "待商议" },
];

/* ========== FAQ 数据 ========== */
const FAQ_ITEMS = [
  {
    q: "航拍服务如何收费？",
    a: "我们根据项目复杂度、拍摄时长、设备类型及后期制作需求综合报价。基础航拍套餐从 \u00A52,000 起，VR全景项目从 \u00A53,000 起，大型活动直播/编队表演需单独评估。所有报价均透明无隐藏费用，可免费提供初步方案与预算估算。",
  },
  {
    q: "需要提前多久预约？",
    a: "建议提前 3-7 个工作日预约，以便我们完成空域申请、设备检查及航线规划。紧急项目可在 24 小时内响应（视空域审批情况而定）。大型活动或跨城市项目请至少提前 2 周沟通。",
  },
  {
    q: "恶劣天气能否拍摄？",
    a: "安全是我们的首要原则。小雨、薄雾天气在确保安全的前提下可正常作业；大风（\u22656级）、雷雨、低能见度等恶劣天气将延期拍摄。我们会密切关注气象信息，提前与您沟通备选时间方案。已预约客户享有一次免费改期机会。",
  },
  {
    q: "是否提供后期制作服务？",
    a: "提供全套后期制作服务，包括：专业调色、剪辑配乐、特效合成、VR全景拼接与热点标注、直播推流技术支持等。您也可以选择只购买原始素材自行处理。我们的后期团队拥有影视级制作水准。",
  },
  {
    q: "服务范围覆盖哪些地区？",
    a: `总部位于${CONTACT_INFO.address}，服务覆盖重庆全域（主城9区+远郊区县），四川成都、广安、达州等周边城市可安排异地作业。全国范围的重大项目（如大型活动直播、编队表演）亦可承接，具体需提前沟通协调。`,
  },
];

/* ========== 表单数据类型 ========== */
interface FormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  description: string;
  budget: string;
}

/* ========== 表单错误类型 ========== */
interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  description?: string;
}

/* ========== 主页面组件 ========== */
export default function ContactPage() {
  /* 表单状态管理 */
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    description: "",
    budget: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  /* FAQ 展开状态 */
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  /* 动画引用 */
  const mainRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(mainRef, { once: true, amount: 0.1 });
  const faqRef = useRef<HTMLDivElement>(null);
  const isFaqInView = useInView(faqRef, { once: true, amount: 0.1 });

  /* 输入变更处理 */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  /* 表单校验 */
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "请输入您的姓名";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "请输入手机号码";
    } else if (!/^1[3-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = "请输入正确的11位手机号码";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "请输入正确的邮箱格式";
    }

    if (!formData.description.trim()) {
      newErrors.description = "请简要描述您的项目需求";
    } else if (formData.description.length > 500) {
      newErrors.description = "项目描述不能超过500字";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* 表单提交处理 */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("提交的询价数据:", formData);
      setIsSubmitted(true);
    } catch {
      setSubmitError("提交失败，请稍后重试或直接电话联系我们");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* 重置表单 */
  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({ name: "", phone: "", email: "", serviceType: "", description: "", budget: "" });
    setErrors({});
  };

  return (
    <div className="flex flex-col">
      {/* ====== Page Hero ====== */}
      <section className="relative flex min-h-[32vh] items-center justify-center overflow-visible pt-[88px]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#eef4f9] via-[#e8f2f8] to-[#eef4f9]" />
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08]"
            style={{ background: "radial-gradient(circle, #f77f00 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative flex h-16 w-16 mx-auto mb-5 items-center justify-center rounded-2xl border border-[#00b4d8]/20 bg-[#00b4d8]/10 shadow-sm">
              <PaperPlaneTilt weight="duotone" size={32} className="text-[#0077b6]" />
            </div>
            <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.25em] text-[#557090]">CONTACT US</span>
            <h1 className="mb-3 text-4xl font-heading font-bold tracking-tight text-[#1a2744] sm:text-5xl lg:text-6xl">
              联系<span style={{ color: "#f77f00" }}>我们</span>
            </h1>
            <p className="text-sm text-[#334155] sm:text-base lg:text-lg">
              开启您的航拍项目 · 专业顾问随时待命
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div
            className="h-full w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(0,180,216,0.4) 30%, rgba(247,127,0,0.3) 70%, transparent 100%)",
            }}
          />
        </div>
      </section>

      {/* ====== 面包屑导航 ====== */}
      <section className="px-6 py-4 sm:px-12 lg:px-28 xl:px-36">
        <Breadcrumb items={[{ label: "首页", href: "/" }, { label: "联系我们" }]} />
      </section>

      {/* ====== 主体两列布局：左侧信息+服务承诺 | 右侧表单 ====== */}
      <section ref={mainRef} className="pb-16 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-stretch">
            {/* ==================== 左列：联系信息 + 服务承诺 ==================== */}
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-6"
            >
              {/* ---- 公司基本信息卡 ---- */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0077B6] via-[#023E8A] to-[#03045E] p-8 text-white shadow-2xl shadow-[#0077B6]/20">
                <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#00b4d8]/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#f77f00]/15 blur-3xl" />
                
                <div className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
                    backgroundSize: '25px 25px'
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-white/20 rounded-2xl blur-lg" />
                      <div className="relative w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                        <Buildings weight="duotone" size={32} className="text-white" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-2xl font-heading font-bold leading-tight">
                        {SITE_CONFIG.name}
                      </h2>
                      <p className="mt-1.5 text-sm text-white/70">{SITE_CONFIG.slogan}</p>
                    </div>
                  </div>

                  <div className="relative rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-5 overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#f77f00]/20 blur-xl" />
                    <div className="relative flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#f77f00]/30">
                        <MapPin weight="fill" size={22} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">公司地址</p>
                        <p className="text-base leading-relaxed font-medium">{CONTACT_INFO.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-6 right-6 flex flex-col gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/10 ml-1" />
                </div>
              </div>

              {/* ---- 联系方式矩阵 ---- */}
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-base font-heading font-semibold text-[#1a2744]">
                  <ChatCircleText weight="duotone" size={18} className="text-[#00b4d8]" />
                  联系方式
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {CONTACT_MATRIX.map((item, idx) => (
                    <motion.a
                      key={item.label}
                      href={item.href ?? undefined}
                      initial={{ opacity: 0, y: 12 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                      className={`group relative flex flex-col items-center gap-2.5 rounded-2xl p-5 text-center transition-all duration-400 hover:-translate-y-1.5 ${
                        item.highlight
                          ? "bg-gradient-to-br from-[#0077B6] to-[#023E8A] text-white shadow-lg shadow-[#0077B6]/25 hover:shadow-xl hover:shadow-[#0077B6]/35"
                          : "bg-white border border-slate-200 hover:border-[#00b4d8]/30 hover:shadow-lg hover:shadow-slate-200/50"
                      }`}
                    >
                      {item.highlight && (
                        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                          <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-white/10 blur-xl" />
                        </div>
                      )}
                      <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                        item.highlight 
                          ? "bg-white/20 border border-white/30" 
                          : "bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] group-hover:from-[#0077B6]/10 group-hover:to-[#00b4d8]/10"
                      }`}>
                        <item.icon
                          size={22}
                          weight="duotone"
                          className={item.highlight ? "text-white" : "text-[#0077b6]"}
                        />
                      </div>
                      <p className={`text-xs font-medium ${item.highlight ? "text-white/70" : "text-[#557090]"}`}>{item.label}</p>
                      <p className={`text-sm font-bold leading-snug ${item.highlight ? "font-mono text-white" : "text-[#1a2744]"}`}>
                        {item.value}
                      </p>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* ---- 服务覆盖区域 ---- */}
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-base font-heading font-semibold text-[#1a2744]">
                  <ArrowsOutCardinal weight="duotone" size={18} className="text-[#f77f00]" />
                  服务覆盖区域
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {SERVICE_AREAS.map((area, idx) => (
                    <motion.div
                      key={area.region}
                      initial={{ opacity: 0, y: 12 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.25 + idx * 0.06 }}
                      className={`group relative overflow-hidden rounded-2xl p-4.5 transition-all duration-300 hover:-translate-y-1 ${
                        idx === 0 
                          ? "bg-gradient-to-br from-[#f77f00] to-[#ea580c] text-white shadow-lg shadow-[#f77f00]/25 hover:shadow-xl"
                          : "bg-white border border-slate-200 hover:border-[#f77f00]/30 hover:shadow-lg hover:shadow-slate-200/40"
                      }`}
                    >
                      {idx === 0 && (
                        <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/15 blur-xl" />
                      )}
                      <div className="relative">
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            idx === 0 
                              ? "bg-white/20 border border-white/30" 
                              : "bg-[#fff7ed] group-hover:bg-[#f77f00]/10 transition-colors"
                          }`}>
                            <MarkerCircle weight="fill" size={15} className={idx === 0 ? "text-white" : "text-[#f77f00]"} />
                          </div>
                          <span className={`text-sm font-bold ${idx === 0 ? "text-white" : "text-[#1a2744]"}`}>{area.region}</span>
                        </div>
                        <p className={`text-xs leading-relaxed ${idx === 0 ? "text-white/80" : "text-[#557090]"}`}>{area.cities}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ---- 服务承诺 ---- */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 border border-emerald-100 p-6 shadow-sm">
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-emerald-200/30 blur-3xl" />
                <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-teal-200/30 blur-3xl" />
                
                <div className="relative">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-emerald-500/20 rounded-xl blur-md" />
                      <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                        <ShieldCheck weight="duotone" size={24} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-heading font-bold text-[#1a2744]">服务承诺</p>
                      <p className="text-xs text-emerald-600 mt-0.5">您的满意是我们的追求</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-[#0077B6]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0077B6]/15 transition-colors">
                        <Timer weight="bold" size={15} className="text-[#0077b6]" />
                      </div>
                      <span className="text-sm text-[#334155]">工作时间 <strong className="text-[#1a2744]">2 小时内响应</strong></span>
                    </li>
                    <li className="flex items-center gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/15 transition-colors">
                        <CheckCircle weight="bold" size={15} className="text-emerald-600" />
                      </div>
                      <span className="text-sm text-[#334155]">拍摄前 <strong className="text-[#1a2744]">免费方案评估</strong></span>
                    </li>
                    <li className="flex items-center gap-3 group">
                      <div className="w-8 h-8 rounded-lg bg-[#f77f00]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f77f00]/15 transition-colors">
                        <ShieldCheck weight="bold" size={15} className="text-[#e65100]" />
                      </div>
                      <span className="text-sm text-[#334155]">设备<strong className="text-[#1a2744]">全型保险</strong>，安全有保障</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* ==================== 右侧：在线询价表单 ==================== */}
            <motion.div
              initial={{ opacity: 0, x: 36 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
              className="flex flex-col h-full space-y-5"
            >
              {/* ---- 在线询价表单 ---- */}
              <div className="relative flex-1 overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0077B6] via-[#00b4d8] to-[#f77f00]" />
                
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#00b4d8]/5 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-[#f77f00]/5 blur-3xl" />

                <div className="relative border-b border-slate-100 px-7 py-5">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-[#f77f00]/20 rounded-xl blur-md" />
                      <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center shadow-lg shadow-[#f77f00]/25">
                        <PaperPlaneTilt weight="duotone" size={22} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-[#1a2744]">在线询价</h3>
                      <p className="text-xs text-slate-500">填写以下表单，我们将在 2 小时内回复</p>
                    </div>
                  </div>
                </div>

                <div className="relative px-7 py-6">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="py-4 text-center"
                    >
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.15, type: "spring", stiffness: 250, damping: 15 }}>
                        <CheckCircle size={56} weight="duotone" className="mx-auto mb-4 text-emerald-500" />
                      </motion.div>
                      <h4 className="mb-2 text-lg font-semibold text-[#1a2744]">提交成功！</h4>
                      <p className="mb-5 text-sm leading-relaxed text-slate-500">
                        感谢您的询价，我们的专业顾问将在<span className="font-semibold text-[#00b4d8]">2 小时</span>内与您联系。<br />
                        如有紧急需求，可直接拨打：<a href={`tel:${CONTACT_INFO.phoneRaw}`} className="font-mono text-[#00b4d8] hover:underline ml-1">{CONTACT_INFO.phone}</a>
                      </p>
                      <Button onClick={resetForm} variant="outline" className="border-[#00b4d8]/30 text-[#00b4d8] hover:bg-[#00b4d8]/10">继续提交新询价</Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 no-validate">
                      <AnimatePresence>
                        {submitError && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                            <WarningCircle size={18} weight="duotone" className="mt-0.5 shrink-0 text-red-500" />
                            <p className="text-sm text-red-600">{submitError}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* 姓名 + 手机 */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-1.5">
                          <Label htmlFor="name" className="text-xs text-slate-600 font-medium">姓名 <span className="text-red-500">*</span></Label>
                          <Input id="name" name="name" type="text" placeholder="您的姓名" value={formData.name} onChange={handleInputChange} className="bg-slate-50/50 border-slate-200 h-11 text-[#1a2744] focus:bg-white transition-colors rounded-xl" required />
                          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="phone" className="text-xs text-slate-600 font-medium">手机 <span className="text-red-500">*</span></Label>
                          <Input id="phone" name="phone" type="tel" placeholder="手机号码" value={formData.phone} onChange={handleInputChange} className="bg-slate-50/50 border-slate-200 h-11 font-mono text-[#1a2744] focus:bg-white transition-colors rounded-xl" required />
                          {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                        </div>
                      </div>

                      {/* 邮箱 */}
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-xs text-slate-600 font-medium">邮箱 <span className="text-slate-400">(选填)</span></Label>
                        <Input id="email" name="email" type="email" placeholder="电子邮箱" value={formData.email} onChange={handleInputChange} className="bg-slate-50/50 border-slate-200 h-11 text-[#1a2744] focus:bg-white transition-colors rounded-xl" />
                        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                      </div>

                      {/* 服务类型 + 预算范围 */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-1.5">
                          <Label htmlFor="serviceType" className="text-xs text-slate-600 font-medium">服务类型</Label>
                          <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleInputChange} className="flex h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm text-[#1a2744] outline-none focus:border-[#00b4d8]/50 focus:bg-white focus:ring-1 focus:ring-[#00b4d8]/25 transition-colors [&>option]:bg-white [&>option]:text-[#1a2744]">
                            <option value="">请选择服务类型</option>
                            {SERVICE_OPTIONS.map((opt) => (<option key={opt.value} value={opt.value}>{opt.label}</option>))}
                          </select>
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="budget" className="text-xs text-slate-600 font-medium">预算范围</Label>
                          <select id="budget" name="budget" value={formData.budget} onChange={handleInputChange} className="flex h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm text-[#1a2744] outline-none focus:border-[#00b4d8]/50 focus:bg-white focus:ring-1 focus:ring-[#00b4d8]/25 transition-colors [&>option]:bg-white [&>option]:text-[#1a2744]">
                            <option value="">请选择预算范围</option>
                            {BUDGET_OPTIONS.map((opt) => (<option key={opt.value} value={opt.value}>{opt.label}</option>))}
                          </select>
                        </div>
                      </div>

                      {/* 项目描述 */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="description" className="text-xs text-slate-600 font-medium">项目描述 <span className="text-red-500">*</span></Label>
                          <span className="text-xs text-slate-400">{formData.description.length}<span className="text-slate-300">/500</span></span>
                        </div>
                        <Textarea id="description" name="description" placeholder="请简要描述您的项目需求，包括拍摄时间、地点、风格偏好等信息..." value={formData.description} onChange={handleInputChange} rows={4} maxLength={500} className="resize-none bg-slate-50/50 border-slate-200 text-sm leading-relaxed text-[#1a2744] focus:bg-white transition-colors rounded-xl" required />
                        {errors.description && (<p className="text-xs text-red-500">{errors.description}</p>)}
                      </div>

                      {/* 提交按钮 */}
                      <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-base font-semibold text-white shadow-xl shadow-[#f77f00]/25 hover:shadow-2xl hover:shadow-[#f77f00]/35 transition-all disabled:opacity-70 disabled:cursor-not-allowed rounded-xl" style={{ background: isSubmitting ? "#94a3b8" : "linear-gradient(135deg, #f77f00 0%, #fb8500 100%)" }}>
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                            提交中...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <PaperPlaneTilt weight="bold" size={18} />
                            提交询价
                          </span>
                        )}
                      </Button>
                      <p className="text-center text-[11px] text-slate-400">提交即表示您同意我们的隐私政策，我们将严格保护您的个人信息</p>
                    </form>
                  )}
                </div>
              </div>

              {/* ---- 现场演示 + 后期制作 ---- */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 p-6 text-center transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-100/50 cursor-pointer"
                >
                  <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-emerald-200/30 blur-xl group-hover:bg-emerald-200/50 transition-all duration-500" />
                  
                  <div className="relative">
                    <div className="relative mx-auto mb-4">
                      <div className="absolute -inset-2 bg-emerald-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:scale-110 transition-transform duration-300">
                        <VideoCamera weight="duotone" size={24} className="text-white" />
                      </div>
                    </div>
                    <p className="text-sm font-bold text-[#1a2744] mb-1">现场演示</p>
                    <p className="text-xs leading-relaxed text-slate-500">免费产品演示<br />与方案解说</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 p-6 text-center transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange-100/50 cursor-pointer"
                >
                  <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-orange-200/30 blur-xl group-hover:bg-orange-200/50 transition-all duration-500" />
                  
                  <div className="relative">
                    <div className="relative mx-auto mb-4">
                      <div className="absolute -inset-2 bg-[#f77f00]/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center shadow-lg shadow-[#f77f00]/25 group-hover:scale-110 transition-transform duration-300">
                        <PaintBrush weight="duotone" size={24} className="text-white" />
                      </div>
                    </div>
                    <p className="text-sm font-bold text-[#1a2744] mb-1">后期制作</p>
                    <p className="text-xs leading-relaxed text-slate-500">专业调色剪辑<br />VR全景拼接</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== 全宽地图区域：找到我们 ====== */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {/* 标题栏 */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#00b4d8]/20 bg-[#00b4d8]/10">
                <MapTrifold weight="duotone" size={24} className="text-[#0077b6]" />
              </div>
              <div>
                <h2 className="text-xl font-heading font-bold text-[#1a2744]">找到我们</h2>
                <p className="text-xs text-[#557090]">重庆市南岸区 · 极翼科技总部</p>
              </div>
            </div>
            <a href={`https://uri.amap.com/navigation?to=${MAP_CONFIG.center.lng},${MAP_CONFIG.center.lat},${MAP_CONFIG.companyName}&mode=car&coordinate=gaode`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 rounded-full border border-[#0077b6]/25 bg-[#0077b6]/[0.06] px-4 py-2 text-sm font-medium text-[#0077b6] transition-all hover:border-[#0077b6]/40 hover:bg-[#0077b6]/10 hover:shadow-sm">
              <MapTrifold weight="bold" size={14} /> 导航前往
            </a>
          </div>

          {/* 地图容器 */}
          <Map3D height={450} showControlsHint={true} />

          {/* 底部地址信息条 — 紧贴地图下方 */}
          <div className="mt-4 rounded-xl border border-[#dde8ef] bg-white px-5 py-3.5 shadow-md">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e65100]/10 border border-[#e65100]/20">
                <MapPin weight="fill" size={16} className="text-[#e65100]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#1a2744]">重庆极翼无人飞行器科技有限公司</p>
                <p className="mt-0.5 text-xs text-[#557090]">{CONTACT_INFO.address}</p>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#557090]">
              <span className="flex items-center gap-1"><Phone weight="bold" size={11} className="text-[#0077b6]" />{CONTACT_INFO.phone}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 分隔线 */}
      <div className="mx-auto h-px w-full max-w-[1400px] bg-gradient-to-r from-transparent via-[#dde8ef] to-transparent" />

      {/* ====== FAQ 常见问题区域 ====== */}
      <section ref={faqRef} className="py-10 md:py-14">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={isFaqInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
            <div className="mb-6 text-center">
              <Question weight="duotone" size={24} className="mx-auto mb-1.5 text-[#0077b6]/60" />
              <h2 className="text-lg font-heading font-bold text-[#1e293b] sm:text-xl">常见问题</h2>
              <p className="mt-1 text-xs text-[#64748b]">关于航拍服务，您可能想知道的</p>
            </div>

            <div className="space-y-2">
              {FAQ_ITEMS.map((faq, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 8 }} animate={isFaqInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.35, delay: index * 0.05 }} className="overflow-hidden rounded-lg border border-[#e2e8f0] bg-white transition-all duration-300">
                  <button type="button" onClick={() => setOpenFaqId(openFaqId === index ? null : index)} className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-[#f8fafc]">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#0077b6]/08 text-[10px] font-bold text-[#0077b6]">Q</span>
                    <span className="flex-1 text-xs font-medium text-[#334155] sm:text-sm">{faq.q}</span>
                    <motion.span animate={{ rotate: openFaqId === index ? 45 : 0 }} transition={{ duration: 0.2 }} className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f1f5f9] text-[#94a3b8]">
                      <Question weight="bold" size={10} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaqId === index && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }} className="overflow-hidden">
                        <div className="border-t border-[#e2e8f0] px-4 py-3 pl-13">
                          <p className="text-xs leading-relaxed text-[#64748b]">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 分隔线 */}
      <div className="mx-auto h-px w-full max-w-[1400px] bg-gradient-to-r from-transparent via-[#dde8ef] to-transparent" />

      {/* ====== 底部CTA区 ====== */}
      <section className="border-t border-[#dde8ef] py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-12 lg:px-28 xl:px-36">
          <Phone weight="duotone" size={40} className="mx-auto mb-4 text-[#00b4d8]" />
          <h3 className="mb-3 text-2xl font-heading font-bold text-[#1a2744] sm:text-3xl">准备好开始了吗？</h3>
          <p className="mb-6 text-sm text-[#557090] sm:text-base">立即致电获取专业咨询 · 我们随时为您服务</p>

          <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="group mb-8 inline-block font-mono text-3xl font-bold tracking-wide text-[#00b4d8] transition-all hover:text-[#00b4d8]/80 sm:text-4xl lg:text-5xl">
            {CONTACT_INFO.phone}
            <span className="block mt-2 text-xs font-normal not-italic text-[#557090] group-hover:text-[#00b4d8]/60 transition-colors">点击拨打</span>
          </a>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#00b4d8]/25 transition-all hover:shadow-xl hover:shadow-[#00b4d8]/30 hover:-translate-y-0.5" style={{ background: "linear-gradient(135deg, #00b4d8 0%, #0077b6 100%)" }}>
              <Phone weight="bold" size={18} /> 立即通话
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
