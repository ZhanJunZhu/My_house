import Link from 'next/link';
import Image from 'next/image';

const publications = [
  {
    id: 1,
    title: "B, N-co-doped graphene-supported Ir and Pt clusters for methane activation and C─C coupling: A density functional theory study",
    journal: "Journal of Computational Chemistry",
    year: "2019",
    doi: "10.1002/jcc.26088",
    url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/jcc.26088",
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
    id: 3,
    title: "Bismuth oxyiodide as a highly efficient room temperature NOx gas sensor: Role of surface orientations on sensing performance",
    journal: "Materials Today Physics",
    year: "2024",
    doi: "10.1016/j.mtphys.2024.101511",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S2542529324002189",
  },
];

const posters = [
  {
    id: 1,
    title: "化學年會學術海報發表",
    subtitle: "Annual Meeting of the Chemical Society",
    src: "/化學年會海報.jpg",
    alt: "化學年會海報",
  },
  {
    id: 2,
    title: "化工年會學術海報發表",
    subtitle: "Annual Meeting of the Taiwan Institute of Chemical Engineers",
    src: "/化工年會海報.jpg",
    alt: "化工年會海報",
  },
];

export default function PublicationPage() {
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
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-200">Conference Posters</h2>
        
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

              {/* 海報圖片 */}
              <div className="relative w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 flex items-center justify-center">
                <Image
                  src={poster.src}
                  alt={poster.alt}
                  width={800}
                  height={1100}
                  className="w-full h-auto object-contain hover:scale-[1.02] transition duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}