import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/ntustChE105051",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/zhanjunzhu/?hl=zh-tw",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/%E5%B1%95%E5%9D%87-%E6%9C%B1-869a9b296/",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Shopee",
    url: "https://shopee.tw/wujiapig?entryPoint=ShopBySearch&searchKeyword=%E5%85%94%E5%85%94%E4%BA%8C%E6%89%8B%E5%95%86%E5%BA%97",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19.98 6.57a1.64 1.64 0 0 0-1.25-.57h-2.19A4.81 4.81 0 0 0 12 2a4.81 4.81 0 0 0-4.54 4H5.27a1.64 1.64 0 0 0-1.25.57 1.63 1.63 0 0 0-.37 1.34l1.37 11.23A2.73 2.73 0 0 0 7.72 22h8.56a2.73 2.73 0 0 0 2.7-2.43l1.37-11.23a1.63 1.63 0 0 0-.37-1.77zM12 3.82c1.61 0 2.94 1.18 3.19 2.75H8.81c.25-1.57 1.58-2.75 3.19-2.75zm1.53 11.45c-.53.48-1.27.73-2.22.73a3.52 3.52 0 0 1-2.14-.65.46.46 0 0 1-.16-.48.45.45 0 0 1 .43-.33c.12 0 .23.04.33.1a2.6 2.6 0 0 0 1.54.49c.67 0 1.18-.17 1.54-.51.34-.32.52-.77.52-1.33 0-.48-.15-.87-.45-1.18a3.7 3.7 0 0 0-1.46-.83l-.68-.27c-.83-.33-1.48-.73-1.92-1.2A3.16 3.16 0 0 1 8 7.75c0-.9.31-1.63.92-2.18s1.42-.83 2.41-.83c.77 0 1.48.21 2.11.62.13.09.2.23.2.39 0 .23-.17.43-.4.45a.47.47 0 0 1-.29-.08 2.8 2.8 0 0 0-1.62-.48c-.68 0-1.22.17-1.58.52-.35.33-.53.78-.53 1.33 0 .47.16.86.47 1.18.3.31.78.59 1.44.85l.68.27c.85.34 1.51.76 1.96 1.25.46.49.69 1.12.69 1.88 0 .93-.32 1.7-.95 2.27z" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=cda870828@gmail.com",
    icon: (
      <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center px-6 py-16 overflow-hidden">
      {/* 背景微光 */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 blur-[130px] pointer-events-none rounded-full" />

      {/* 3 欄式水平排列：資訊 (4) | 照片 (4) | 導航卡片 (4) */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* 左欄：個人資訊 */}
        <div className="md:col-span-4 space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tight text-white">
              歡迎來到展均的個人小窩🥳
              <span className="block text-blue-500 text-xl mt-10 font-semibold">
                在這裡你可以更加認識我，歡迎透過下列社群與我聯繫
              </span>
            </h1>
            <p className="text-base text-amber-600 mt-10">
              創新就是解決問題
            </p>
          </div>

          {/* 標籤 */}
          <div className="flex flex-wrap gap-2">
            {["化工工程師", "教育關注者", "斜槓青年"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-900 text-neutral-300 border border-neutral-800"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* 社群圖示 */}
          <div className="pt-2 flex items-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="p-2.5 rounded-full text-neutral-400 hover:text-white bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition duration-200"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* 中欄：個人照片 */}
        <div className="md:col-span-4 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border border-neutral-800 bg-neutral-900/50 shadow-2xl">
            <Image
              src="/profile_picture.jpg"
              alt="朱展均"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* 右欄：導航卡片 (About Me → Life → Publication) */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <Link
            href="/about-me"
            className="group p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 hover:border-neutral-700 transition duration-200"
          >
            <h2 className="text-base font-semibold text-white mb-1 group-hover:text-blue-400 transition">
              關於我 →
            </h2>
            <p className="text-xs text-neutral-400">
              Background, experience, and passions.
            </p>
          </Link>

          <Link
            href="/life"
            className="group p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 hover:border-neutral-700 transition duration-200"
          >
            <h2 className="text-base font-semibold text-white mb-1 group-hover:text-blue-400 transition">
              生活 →
            </h2>
            <p className="text-xs text-neutral-400">
              Personal reflections, side projects, and daily notes.
            </p>
          </Link>

          <Link
            href="/publication"
            className="group p-5 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 hover:border-neutral-700 transition duration-200"
          >
            <h2 className="text-base font-semibold text-white mb-1 group-hover:text-blue-400 transition">
              發表 →
            </h2>
            <p className="text-xs text-neutral-400">
              Browse academic contributions and papers.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}