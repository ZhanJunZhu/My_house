'use client';

import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  category: string;
  period: string;
  description: string;
  highlights: string[];
  techStack: string[];
  links?: {
    name: string;
    url: string;
  }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Quantum Molecular Modeling & Adsorption Energy Analysis",
    category: "Computational Chemistry & Surface Science",
    period: "Master's Research",
    description:
      "利用第一原理密度泛函理論（DFT）建立 2D 材料（BiOI、g-C3N4）與 CoV 系列觸發電極表面結構模型，深入探討有毒氣體吸附反應機制、表面缺陷特性與催化傳輸反應動力學。",
    highlights: [
      "運用 VASP 與 ADF 進行大型晶胞吸附能與電荷轉移（Bader charge）精密計算",
      "成功發表多篇國際 SCI 期刊（JCC、Materials Today Physics）與年會學術展示",
      "以數值模擬輔助實驗解析表面活性位點與感測效能極限",
    ],
    techStack: ["VASP", "ADF", "Gaussian", "Density Functional Theory", "Linux HPC", "Bash"],
  },
  {
    id: 2,
    title: "Process Data Analytics & Automated Workflow Pipeline",
    category: "Data Engineering & Automation",
    period: "Engineering Practice",
    description:
      "針對製程參數資料與設備產能監控進行流程自動化建置，整合資料庫查詢與互動式視覺化儀表板，提升工程分析效率與良率異常監控即時性。",
    highlights: [
      "設計 SQL 查詢與資料萃取清洗架構，標準化高維度製程資料",
      "建置 Power BI 即時監控儀表板，協助跨模組分析關鍵指標與趨勢走向",
      "撰寫 PowerShell / Linux Script 自動化處理例行資料管道與批次任務",
    ],
    techStack: ["SQL", "Power BI", "PowerShell", "Linux Terminal", "Process Analytics"],
  },
];

export default function ProjectShowcasePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-8 md:p-16 max-w-4xl mx-auto space-y-12">
      {/* 頂部導航與標題 */}
      <div>
        <Link 
          href="/" 
          className="text-neutral-400 hover:text-white transition-colors text-sm mb-8 inline-block"
        >
          ← Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">Project Showcase</h1>
        <p className="text-neutral-400 text-base">
          Explore technical projects, computational modeling research, and engineering analytics.
        </p>
      </div>

      {/* 專案列表區塊 */}
      <section className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 md:p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900/60 transition duration-200 space-y-5"
          >
            {/* 專案上方資訊 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800/80 pb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  {project.category}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-neutral-100 mt-1">
                  {project.title}
                </h2>
              </div>
              <span className="text-xs text-neutral-400 bg-neutral-800/80 px-3 py-1 rounded-full w-fit">
                {project.period}
              </span>
            </div>

            {/* 專案描述 */}
            <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
              {project.description}
            </p>

            {/* 專案成果亮點 */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Key Highlights
              </h3>
              <ul className="space-y-1.5 list-disc list-inside text-sm text-neutral-300">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="leading-snug">
                    <span className="text-neutral-200">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 技術標籤 */}
            <div className="pt-2 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-neutral-800 border border-neutral-700/60 text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* 外部連結（若有） */}
            {project.links && project.links.length > 0 && (
              <div className="pt-2 flex gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-medium text-blue-400 hover:text-blue-300 hover:underline gap-1"
                  >
                    {link.name} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}