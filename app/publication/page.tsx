'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const publications = [
  {
    id: 3,
    title: "Bismuth oxyiodide as a highly efficient room temperature NOx gas sensor: Role of surface orientations on sensing performance",
    journal: "Materials Today Physics",
    year: "2024",
    doi: "10.1016/j.mtphys.2024.101511",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S2542529324002189",
  },
  {
    id: 2,
    title: "Density functional theory study on sensing properties of g-C3N4 sheet to atmospheric gasses: Role of zigzag and armchair edges",
    journal: "Journal of the Chinese Chemical Society",
    year: "2023",
    doi: "10.1002/jccs.202200442",
    url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/jccs.202200442",
  },
  {
    id: 1,
    title: "B, N-co-doped graphene-supported Ir and Pt clusters for methane activation and C─C coupling: A density functional theory study",
    journal: "Journal of Computational Chemistry",
    year: "2019",
    doi: "10.1002/jcc.26088",
    url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/jcc.26088",
  },
];

const posters = [
  {
    id: 1,
    title: "Catalytic activity of CoVSe and CoVO as high-performance counter electrodes for dye-sensitized solar cells – A DFT study",
    subtitle: "Poster Presentation at the CSLT Annual Meeting",
    src: "/化學年會海報.jpg",
    alt: "化學年會海報",
  },
  {
    id: 2,
    title: "DFT Study on Two-Dimensional BiOI as Gas Sensors: Effects of defects",
    subtitle: "Poster Presentation at the TwIChE Annual Meeting",
    src: "/化工年會海報.jpg",
    alt: "化工年會海報",
  },
];

type PosterItem = (typeof posters)[number];

export default function PublicationPage() {
  const [activePoster, setActivePoster] = useState<PosterItem | null>(null);

  // 監聽鍵盤 Esc 鍵關閉彈窗
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActivePoster(null);
      }
    };
    if (activePoster) {
      document.body.style.overflow = 'hidden'; // 防止背景滾動
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePoster]);

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

        <h1 className="text-3xl sm:text-4xl font-bold mb-3 tracking-tight">Publications</h1>
        <p className="text-neutral-400 text-base">
          Browse published works and conference presentations.
        </p>
      </div>

      {/* 論文列表區塊 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-200">Journal Papers</h2>
        <div className="space-y-4">
          {publications.map((paper) => (
            <div 
              key={paper.id}
              className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900/70 transition duration-200"
            >
              <h3 className="text-lg font-semibold text-neutral-100 mb-2 leading-snug">
                {paper.title}
              </h3>
              
              <p className="text-sm text-neutral-400 mb-4">
                <span className="italic text-neutral-300">{paper.journal}</span> ({paper.year})
              </p>

              <a
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-medium text-blue-400 hover:text-blue-300 hover:underline gap-1"
              >
                View Publication (DOI: {paper.doi}) ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 研討會 / 海報展示區塊 */}
      <section className="space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Conference Posters
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {posters.map((poster) => (
            <div 
              key={poster.id}
              className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/40 space-y-4 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-semibold text-neutral-100">{poster.title}</h3>
                <p className="text-xs text-neutral-400 mt-0.5">{poster.subtitle}</p>
              </div>

              {/* 海報圖片（點擊打開放大視窗） */}
              <div 
                onClick={() => setActivePoster(poster)}
                className="relative w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 flex items-center justify-center cursor-zoom-in group"
              >
                <Image
                  src={poster.src}
                  alt={poster.alt}
                  width={800}
                  height={1100}
                  className="w-full h-auto object-contain transition duration-300 group-hover:scale-[1.02] group-hover:opacity-95"
                />
                {/* 懸浮提示文字 */}
                <span className="absolute bottom-3 right-3 bg-black/70 text-neutral-300 text-xs px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none backdrop-blur-sm border border-neutral-700/50">
                  Click to enlarge
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 燈箱彈窗 (Lightbox Modal) */}
      {activePoster && (
        <div 
          onClick={() => setActivePoster(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8 cursor-zoom-out animate-fadeIn"
        >
          {/* 關閉按鈕 */}
          <button
            onClick={() => setActivePoster(null)}
            className="absolute top-5 right-5 text-neutral-400 hover:text-white bg-neutral-900/70 hover:bg-neutral-800 p-2.5 rounded-full border border-neutral-700 transition"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* 放大容器 */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-5xl max-h-[92vh] w-auto h-auto flex items-center justify-center cursor-default"
          >
            <Image
              src={activePoster.src}
              alt={activePoster.alt}
              width={1600}
              height={2200}
              priority
              className="max-h-[90vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-neutral-800"
            />
          </div>
        </div>
      )}
    </main>
  );
}