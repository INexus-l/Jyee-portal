"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

/* ---------- 团队成员数据 ---------- */
interface TeamMember {
  name: string;
  role: string;
  tags: string[];
  bio: string;
  initials: string;
  color: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "刘林",
    role: "创始人 · 总负责人 · 飞控手",
    tags: ["CAAC持证飞手", "11年航拍经验", "航空模型协会创办人"],
    bio: "科班出身的无人机操控专家，大学时期即创办航空模型协会，2015年创立极翼科技。深耕重庆航拍领域十一载，累计飞行时长超数千小时。",
    initials: "LL",
    color: "#00b4d8",
  },
  {
    name: "云台手",
    role: "首席摄影师 · 云台操作",
    tags: ["摄影职业出身", "影视级影像把控", "多品牌相机精通"],
    bio: "拥有深厚摄影功底，熟练操作各类专业相机与云台系统，确保每一帧画面达到影视级品质。对构图与光影有独到见解。",
    initials: "YT",
    color: "#f77f00",
  },
];

/* 核心团队 — 成员卡片网格 */
export default function TeamSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });
  const gridView = useInView(gridRef, { once: true, amount: 0.1 });

  return (
    <section className="section-container py-20 lg:py-28">
      {/* 区块标题 */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-14 text-center"
      >
        <span className="overline-label mb-3 inline-block">OUR TEAM</span>
        <h2 className="text-3xl font-heading font-bold tracking-tight text-white sm:text-4xl">
          核心<span className="gradient-text">团队</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground sm:text-base">
          精英汇聚，以专业与热爱驱动每一次飞行
        </p>
      </motion.div>

      {/* 团员成员网格 */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8"
      >
        {TEAM_MEMBERS.map((member, i) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            animate={gridView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.55, ease: "easeOut" }}
            className="glow-border"
          >
            <div className="glass-card group h-full rounded-2xl p-6 sm:p-8">
              {/* 头像区域：圆形渐变占位 + 首字大写 */}
              <div className="mb-5 flex justify-center">
                <div
                  className="flex h-24 w-24 items-center justify-center rounded-full text-2xl font-heading font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${member.color}40, ${member.color}15)`,
                    boxShadow: `0 0 24px ${member.color}20`,
                  }}
                >
                  {member.initials}
                </div>
              </div>

              {/* 姓名 */}
              <h3 className="text-center text-lg font-heading font-semibold text-white">
                {member.name}
              </h3>

              {/* 角色 */}
              <p className="mb-4 text-center text-sm text-tech-cyan">{member.role}</p>

              {/* 能力标签行 */}
              <div className="mb-4 flex flex-wrap justify-center gap-1.5">
                {member.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="border-white/[0.06] px-2.5 py-0.5 text-[11px]"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* 简介 */}
              <p className="text-center text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </div>
          </motion.div>
        ))}

        {/* 招聘占位卡片 — 暗示团队在扩展 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={gridView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.55, ease: "easeOut" }}
          className="hidden lg:flex"
        >
          <div className="glass-card flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border-dashed border-white/[0.08] p-8 text-center">
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-aerial-orange/10 ring-1 ring-aerial-orange/20">
              <span className="text-2xl text-aerial-orange/60">+</span>
            </div>
            <p className="text-sm font-medium text-muted-foreground">期待更多伙伴加入</p>
            <p className="mt-1 text-xs text-muted-foreground/60">如果你也热爱飞行，欢迎联系</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
