'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LifePost {
  id: string;
  title: string;
  category: 'Travel' | 'Thought' | 'Side Project' | 'Daily';
  date: string;
  description: string;
  image?: string; // 可選，若有生活照片可放 public/life/...
  tags: string[];
}

const posts: LifePost[] = [
  {
    id: '1',
    title: '工作與生活之間的動態平衡',
    category: 'Thought',
    date: '2026.08',
    description:
      '工程思維重視效率與最佳化，但在生活裡，有時留白與體驗當下才是長期前進的動力。記錄近期對於時間分配與學習步調的隨筆。',
    tags: ['Mindset', 'Growth'],
  },
  {
    id: '2',
    title: '探索新城市的慢行筆記',
    category: 'Travel',
    date: '2026.07',
    description:
      '離開熟悉的日常環境，走進不同城市的節奏與街景。用雙腳和相機捕捉那些未被規劃在行程表上的意外驚喜。',
    image: '/profile_picture.jpg', // 可替換為專屬旅行照片，如 /life/travel.jpg
    tags: ['Travel', 'Photography'],
  },
  {
    id: '3',
    title: '打造個人數位花園的初衷',
    category: 'Side Project',
    date: '2026.06',
    description:
      '從零開始規劃個人網站與技術記錄，把散落在各處的想法與專案聚合在同一個空間，當作長期沉澱的基地。',
    tags: ['Next.js', 'Building in Public'],
  },
];

const categories = ['All', 'Thought', 'Travel', 'Side Project', 'Daily'] as const;

export default function LifePage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

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
            Life & Notes
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl">
            記錄工作之外的生活片段、日常觀察與個人隨筆。這裡是我放慢步調、整理思緒的角落。
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
                <div className="flex items-center gap-3 text-xs text-neutral-400">
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

              {/* 圖片預覽（若無圖片則不佔位） */}
              {post.image && (
                <div className="relative w-full md:w-48 h-40 rounded-xl overflow-hidden border border-neutral-800 flex-shrink-0 bg-neutral-900">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
              )}
            </article>
          ))}
        </div>

        {/* 頁尾一句話 */}
        <div className="pt-10 border-t border-neutral-800/60 text-center text-xs text-neutral-500">
          持續記錄，讓生活有跡可循。
        </div>
      </div>
    </main>
  );
}