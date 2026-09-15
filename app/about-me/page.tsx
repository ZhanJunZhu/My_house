'use client';

import Link from 'next/link';

interface Experience {
  id: number;
  role: string;
  organization: string;
  period: string;
}

interface Education {
  id: number;
  degree: string;
  school: string;
  major: string;
  period: string;
  details?: string;
  logoUrl?: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "光罩製程工程師",
    organization: "TSMC (台積電)",
    period: "Current Position",
  },
  {
    id: 2,
    role: "MLCC 燒附/電鍍製程工程師",
    organization: "YAEGO (國巨)",
    period: "Previous Experience",
  },
  {
    id: 3,
    role: "LCM 研發工程師",
    organization: "Innolux (群創光電)",
    period: "Previous Experience",
  },
];

const educations: Education[] = [
  {
    id: 1,
    degree: "碩士",
    school: "國立台灣科技大學",
    major: "化學工程系",
    period: "Graduate School",
    details: "第一原理計算\n催化反應\n材料表面行為",
    logoUrl: "/ntust-logo.jpg",
  },
  {
    id: 2,
    degree: "大學",
    school: "國立台灣科技大學",
    major: "化學工程系",
    period: "Undergraduate",
    details: "動力學\n熱力學\n量子化學",
    logoUrl: "/ntust-logo.jpg",
  },
];

const skillCategories = [
  {
    category: "資料分析",
    skills: ["SQL", "Power BI", "Python", "Linux"],
  },
  {
    category: "計算化學",
    skills: ["VASP", "ADF", "Gaussian", "Siesta", "Conquest"],
  },
  {
    category: "產業經歷",
    skills: ["光罩缺陷檢驗", "MLCC 燒附/電鍍", "LCM 膠材/防爆膜"],
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

        <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">內心嚮往著自由的實踐家</h1>
        <p className="text-zinc-400 text-base leading-relaxed">
          沒有什麼能困住你，唯一的是你自己
        </p>
      </div>

      {/* 核心專業領域標籤 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-200">專長</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {skillCategories.map((group) => (
            <div 
              key={group.category} 
              className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-3"
            >
              <h3 className="text-sm font-semibold text-white-400 uppercase tracking-wider">
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
        <h2 className="text-xl font-semibold text-neutral-200">職涯經驗</h2>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 md:p-7 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900/60 transition duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-neutral-100">{exp.role}</h3>
                  <p className="text-sm text-neutral-400 mt-0.5">{exp.organization}</p>
                </div>
                <span className="text-xs text-neutral-400 bg-neutral-800/80 px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 學歷與研究背景 */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-neutral-200">學歷</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {educations.map((edu) => (
            <div
              key={edu.id}
              className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-4 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-neutral-100">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-neutral-400 mt-1">{edu.school}</p>
                </div>

                <div className="w-14 h-14 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                  {edu.logoUrl ? (
                    <img 
                      src={edu.logoUrl} 
                      alt={edu.school} 
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-xs text-neutral-700 font-bold">臺科大</span>
                  )}
                </div>
              </div>

              {edu.details && (
                <p className="text-xs text-neutral-400 leading-relaxed border-t border-neutral-800/80 pt-3">
                  {edu.details.split('\n').map((line, idx, arr) => (
                    <span key={idx}>
                      {line}
                      {idx !== arr.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}