'use client';

import Link from 'next/link';

interface Experience {
  id: number;
  role: string;
  organization: string;
  period: string;
  description: string;
  points: string[];
}

interface Education {
  id: number;
  degree: string;
  school: string;
  major: string;
  period: string;
  details?: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "製程工程師 (Process Engineer)",
    organization: "半導體製造業 (Semiconductor Manufacturing)",
    period: "現職",
    description: "專注於先進微影與光罩製程監控、良率異常分析與製程自動化優化。",
    points: [
      "運用 SQL 與內部系統整合高維度製程資料，建立即時監控指標",
      "透過資料視覺化與自動化流程優化例行工程分析效率",
      "跨單位協同排除機台與製程缺陷，確保生產線穩定度與良率達標",
    ],
  },
  {
    id: 2,
    role: "製程工程師 (Process Engineer)",
    organization: "高科技與電子零組件製造 (Tech & Component Manufacturing)",
    period: "前期經歷",
    description: "負責表面處理與電鍍製程條件調控、設備維護及良率改善專案。",
    points: [
      "主導製程參數 DOE 實驗設計，優化鍍層均勻度與信賴性",
      "建立標準作業流程（SOP）並導入製程異常即時預警機制",
    ],
  },
];

const educations: Education[] = [
  {
    id: 1,
    degree: "化學工程 碩士 (M.S. in Chemical Engineering)",
    school: "國立臺灣科技大學 (Taiwan Tech)",
    major: "計算化學與分子模擬 (Computational Chemistry)",
    period: "研究所",
    details: "專注於第一原理密度泛函理論（DFT）計算、材料表面反應與氣體感測機制分析。",
  },
  {
    id: 2,
    degree: "化學工程 學士 (B.S. in Chemical Engineering)",
    school: "國立臺灣科技大學 (Taiwan Tech)",
    major: "化學工程系",
    period: "大學部",
    details: "紮實的化工單元操作、傳送現象與材料化學基礎工程訓練。",
  },
];

const skillCategories = [
  {
    category: "Data & Automation",
    skills: ["SQL", "Power BI", "Python / Bash", "PowerShell", "Process Analytics"],
  },
  {
    category: "Computational & Engineering",
    skills: ["DFT Calculations", "VASP", "ADF / Gaussian", "HPC Linux Environment"],
  },
  {
    category: "Domain Expertise",
    skills: ["Photolithography Mask Process", "Electroplating", "DOE Optimization", "Yield Analysis"],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-8 md:p-16 max-w-4xl mx-auto space-y-14">
      {/* 頂部導航與個人簡介 */}
      <div>
        <Link 
          href="/" 
          className="text-neutral-400 hover:text-white transition-colors text-sm mb-8 inline-block"
        >
          ← Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">About Me</h1>
        <p className="text-neutral-400 text-base leading-relaxed">
          工程師 × 自主學習者。相信「創新就是為了解決真實問題」，熱衷於結合工程領域專業、計算模擬與資料分析工具，探索最佳化解決方案。
        </p>
      </div>

      {/* 核心專業領域標籤 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-200">Skills & Toolsets</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {skillCategories.map((group) => (
            <div 
              key={group.category}
              className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-3"
            >
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-neutral-800/90 text-neutral-300 border border-neutral-700/60 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 工作與實務經歷 */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-neutral-200">Professional Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 md:p-7 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900/60 transition duration-200 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-neutral-800/80 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-neutral-100">{exp.role}</h3>
                  <p className="text-sm text-neutral-400">{exp.organization}</p>
                </div>
                <span className="text-xs text-neutral-400 bg-neutral-800/80 px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-1.5 list-disc list-inside text-xs sm:text-sm text-neutral-400">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="leading-snug">
                    <span className="text-neutral-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 學歷與研究背景 */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-neutral-200">Education & Academic Background</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {educations.map((edu) => (
            <div
              key={edu.id}
              className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-3 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-blue-400 tracking-wide uppercase">
                  {edu.period}
                </span>
                <h3 className="text-base font-bold text-neutral-100 mt-1">
                  {edu.degree}
                </h3>
                <p className="text-sm text-neutral-400 mt-0.5">{edu.school}</p>
              </div>

              {edu.details && (
                <p className="text-xs text-neutral-400 leading-relaxed border-t border-neutral-800/80 pt-3">
                  {edu.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 底部行動呼籲 / 快速跳轉 */}
      <section className="p-6 rounded-2xl border border-neutral-800/80 bg-neutral-900/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h3 className="text-sm font-semibold text-neutral-200">想了解更多學術著作或專案內容？</h3>
          <p className="text-xs text-neutral-400 mt-0.5">歡迎造訪我的研究成果發表或專案頁面。</p>
        </div>
        <div className="flex gap-3 text-xs font-medium">
          <Link
            href="/publication"
            className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition"
          >
            Publications →
          </Link>
          <Link
            href="/project-showcase"
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition"
          >
            Projects →
          </Link>
        </div>
      </section>
    </main>
  );
}