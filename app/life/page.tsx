'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LifePost {
  id: string;
  title: string;
  category: '旅行' | '小品' | '寵物';
  date: string;
  description: string;
  image?: string; // 可選，若有生活照片可放 public/life/...
  tags: string[];
}

const posts: LifePost[] = [
  {
    id: '1',
    title: '自製調酒-琴通寧',
    category: '小品',
    date: '2023.03',
    description:
      '琴酒搭配簡通寧水或汽水，加上一小片檸檬，便完成簡單的chill調飲',
    image: '/Gin_Tonic.jpg',
    tags: ['Gin Tonic'],
  },
  {
    id: '2',
    title: '澳洲-坎培拉',
    category: '旅行',
    date: '2026.08',
    description: '坎培拉-泰勒山的日落風景，在這裡，你可以近距離的觀察野生袋鼠群，更是休閒放空的chill景點',
    image: '/Mount_Taylor_Nature_Reserve.JPEG',
    tags: ['Mount Taylor Nature Reserve'],
  },
  {
    id: '3',
    title: '養魚日誌',
    category: '寵物',
    date: '2026.08',
    description:
      '從冰桶避難所，到新缸，養魚的同時也療育了自己',
    image: '/Fish.JPEG',
    tags: ['養魚日記'],
  },
];

const categories = ['All', '旅行', '小品', '寵物'] as const;

export default function LifePage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeImage, setActiveImage] = useState<{ src: string; title: string } | null>(null);

  // 監聽鍵盤 Esc 鍵與防止背景滾動
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImage(null);
      }
    };

    if (activeImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImage]);

  const filteredPosts =
    activeCategory === 'All'
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <main className="relative min-h-screen bg-neutral-950 text-neutral-100 px-6 py-16 md:py-20 overflow-hidden">
      {/* 背景柔光氛圍 */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        {/* 頂部導航與頁面標題 */}
        <div>
          <Link
            href="/"
            className="text-neutral-400 hover:text-white transition-colors text-sm mb-8 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            生活蹤跡🧳🍸🐟
          </h1>
          <p className="text-base sm:text-lg text-zinc-100 leading-relaxed max-w-3xl">
            記錄工作之外的生活片段與個人隨筆。這裡是我放慢步調、整理思緒的角落🐰
          </p>
        </div>

        {/* 分類篩選按鈕 */}
        <div className="flex flex-wrap items-center gap-2 border-b border-neutral-800/80 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-white text-black font-semibold'
                  : 'bg-neutral-900/60 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 內容卡片列表 */}
        <div className="grid gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group p-6 sm:p-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900/60 transition duration-200 flex flex-col md:flex-row gap-6 items-start justify-between"
            >
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3 text-normal text-neutral-400">
                  <span className="text-blue-400 font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-md bg-neutral-800/80 text-neutral-400 border border-neutral-700/50"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 圖片預覽（點擊放大部分） */}
              {post.image && (
                <div
                  onClick={() => setActiveImage({ src: post.image!, title: post.title })}
                  className="relative w-full md:w-48 h-40 rounded-xl overflow-hidden border border-neutral-800 flex-shrink-0 bg-neutral-900 cursor-zoom-in group/img"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover/img:scale-105 transition duration-300"
                  />
                  <span className="absolute bottom-2 right-2 bg-black/70 text-neutral-300 text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover/img:opacity-100 transition-opacity pointer-events-none backdrop-blur-sm border border-neutral-700/50">
                    放大
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* 頁尾一句話 */}
        <div className="pt-10 border-t border-neutral-800/60 text-center text-sm text-neutral-100">
          🍫Life is like a box of chocolates, you never know what you are gonna get🍫
        </div>
      </div>

      {/* 燈箱彈窗 (Lightbox Modal) */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8 cursor-zoom-out animate-fadeIn"
        >
          {/* 關閉按鈕 */}
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-5 right-5 text-neutral-400 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 p-2.5 rounded-full border border-neutral-700 transition cursor-pointer"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* 放大圖片容器 */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[90vh] w-auto h-auto flex flex-col items-center justify-center cursor-default"
          >
            <Image
              src={activeImage.src}
              alt={activeImage.title}
              width={1600}
              height={1200}
              priority
              className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-neutral-800"
            />
            <p className="mt-3 text-sm text-neutral-300 tracking-wide">
              {activeImage.title}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}