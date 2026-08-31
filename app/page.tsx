export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full space-y-8">
        
        {/* 個人頭像與標題 */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
            你好，我是 朱展均
            <span className="block text-blue-500 text-3xl sm:text-4xl mt-2 font-semibold">
              Zhan Jun Zhu
            </span>
          </h1>
          <p className="text-lg text-neutral-400">
            工程師，專注於解決問題、數據分析。
          </p>
        </div>

        {/* 技能 / 領域標籤 */}
        <div className="flex flex-wrap gap-2">
          {["SQL", "PowerBI", "Self-learning", "Programming", "Data Analysis"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-800 text-neutral-300 border border-neutral-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 專案 / 連結區塊 */}
        <div className="grid gap-4 sm:grid-cols-2 pt-4">
          <a
            href="#projects"
            className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 transition"
          >
            <h2 className="text-lg font-semibold text-white mb-1">專案展示 →</h2>
            <p className="text-sm text-neutral-400">查看我過去打造的專案與技術實作。</p>
          </a>

          <a
            href="#about"
            className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 transition"
          >
            <h2 className="text-lg font-semibold text-white mb-1">關於我 →</h2>
            <p className="text-sm text-neutral-400">了解我的背景經歷與日常興趣。</p>
          </a>
        </div>

      </div>
    </main>
  );
}