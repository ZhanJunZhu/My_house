import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full space-y-8">
        
        {/* 個人介紹與標題 */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
            你好，我是朱展均
            <span className="block text-blue-500 text-3xl sm:text-4xl mt-2 font-semibold">
              Zhan Jun Zhu
            </span>
          </h1>
          <p className="text-lg text-neutral-400">
            創新就是解決問題
          </p>
        </div>

        {/* 技能 / 領域標籤 */}
        <div className="flex flex-wrap gap-2">
          {["SQL", "PowerBI", "Self-learning", "Programming", "Data Analysis"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-900 text-neutral-300 border border-neutral-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 專案 / 導航卡片區塊 */}
        <div className="grid gap-4 sm:grid-cols-2 pt-4">
          <Link
            href="/project-showcase"
            className="group p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 hover:border-neutral-700 transition duration-200"
          >
            <h2 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition">
              Project Showcase →
            </h2>
            <p className="text-sm text-neutral-400">
              Explore my projects and technical work.
            </p>
          </Link>

          <Link
            href="/publication"
            className="group p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 hover:border-neutral-700 transition duration-200"
          >
            <h2 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition">
              Publication →
            </h2>
            <p className="text-sm text-neutral-400">
              Browse academic contributions and papers.
            </p>
          </Link>

          <Link
            href="/about-me"
            className="group p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 hover:border-neutral-700 transition duration-200 sm:col-span-2"
          >
            <h2 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition">
              About Me →
            </h2>
            <p className="text-sm text-neutral-400">
              Background, experience, and passions.
            </p>
          </Link>
        </div>

      </div>
    </main>
  );
}