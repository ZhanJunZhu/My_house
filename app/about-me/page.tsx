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
    role: "EUV mask Process Engineer",
    organization: "TSMC",
    period: "Current Position",
    description: "EUV mask defect inspection",
    points: [
      "Streamlined routine engineering analysis efficiency through data visualization in Power BI",
      "Integrated process data across internal systems using SQL to establish real-time monitoring indicators",
    ],
  },
  {
    id: 2,
    role: "MLCC Curing / Plating Process Engineer)",
    organization: "YAEGO",
    period: "Previous Experience",
    description: "MLCC surface treatment。",
    points: [
      "Established SOP and implemented OCAP for process excursions",
      "Optimized process parameters using DOE to enhance process window and yield",
    ],
  },
];

const educations: Education[] = [
  {
    id: 1,
    degree: "Master degree in Chemical Engineering",
    school: "National Taiwan University of Science and Technology (NTUST)",
    major: "Chemical Engineering",
    period: "Graduate School",
    details: "Focused on first-principles Density Functional Theory (DFT) calculations to analyze material surface reactions and gas-sensing mechanisms",
  },
  {
    id: 2,
    degree: "Bachelor degree in Chemical Engineering",
    school: "National Taiwan University of Science and Technology (NTUST)",
    major: "Chemical Engineering",
    period: "Undergraduate",
    details: "Solid engineering foundation in chemical unit operations, transport phenomena, and materials chemistry。",
  },
];

const skillCategories = [
  {
    category: "Data Automation",
    skills: ["SQL", "Power BI", "Python", "Linux"],
  },
  {
    category: "Computational Chemistry",
    skills: ["VASP", "ADF", "Gaussian", "Siesta", "Conquest"],
  },
  {
    category: "Domain Expertise",
    skills: ["EUV Mask", "MLCC Plating", "MLCC Curing"],
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
          解決問題就是創新最好的定義
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
          <h3 className="text-sm font-semibold text-neutral-200">了解更多學術著作與作品</h3>
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