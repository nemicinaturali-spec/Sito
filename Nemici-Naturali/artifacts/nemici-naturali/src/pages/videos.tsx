import { ExternalLink, Play, Radio } from "lucide-react";

const liveVideos = [
  {
    title: "Concerto completo / The Boiler Room",
    date: "24 OTT",
    length: "38 MIN",
    description: "Una registrazione di sala dalla prima fila. Chitarre troppo vicine, batteria troppo forte.",
    href: "https://youtube.com",
  },
  {
    title: "Ripresa in cantina / Static Teeth",
    date: "NOV 02",
    length: "6 MIN",
    description: "Un brano catturato sotto soffitti bassi e luci sbagliate.",
    href: "https://youtube.com",
  },
  {
    title: "Frammento live / No Surrender",
    date: "05 DIC",
    length: "9 MIN",
    description: "Un taglio grezzo da metà set, lasciato ruvido di proposito.",
    href: "https://youtube.com",
  },
];

export default function Videos() {
  return (
    <div className="w-full pt-32 pb-24 px-6 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 mb-20 items-end">
          <div className="animate-in slide-in-from-left-8 duration-700 fade-in">
            <p className="text-primary font-mono font-bold tracking-[0.35em] uppercase mb-4">
              Video live
            </p>
            <h1 className="font-display text-6xl md:text-8xl font-black text-white tracking-tighter uppercase mb-6">
              Presi <span className="text-primary">Vivi</span>
            </h1>
          </div>
          <p className="text-muted-foreground font-mono text-lg leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            Clip dal vivo, set completi e frammenti grezzi da stanze dove i muri sudano.
            Sostituisci i link provvisori con YouTube, Vimeo o il tuo archivio.
          </p>
        </div>

        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden border border-border bg-card min-h-[420px] mb-8 animate-in fade-in zoom-in-95 duration-700"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_45%,rgba(204,0,0,0.45),transparent_24%),linear-gradient(120deg,rgba(255,255,255,0.12),transparent_45%),linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.88))]" />
          <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(0deg,transparent,transparent_6px,rgba(255,255,255,0.08)_7px)]" />
          <div className="relative z-10 min-h-[420px] flex flex-col md:flex-row md:items-end justify-between gap-8 p-8 md:p-12">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-primary border border-primary/40 px-3 py-1 mb-6 uppercase">
                <Radio size={14} />
                Registrazione in evidenza
              </span>
              <h2 className="font-display text-5xl md:text-7xl text-white tracking-tighter uppercase max-w-4xl group-hover:text-primary transition-colors">
                Nemici Naturali / Live nella Red Room
              </h2>
              <p className="text-muted-foreground font-mono mt-5 max-w-xl">
                Segnaposto per il set completo. Collega questo link al video live ufficiale quando sarà pronto.
              </p>
            </div>
            <div className="shrink-0 w-24 h-24 border border-white/30 rounded-full flex items-center justify-center bg-black/50 group-hover:bg-primary group-hover:border-primary transition-colors">
              <Play className="text-white ml-1" size={34} fill="currentColor" />
            </div>
          </div>
        </a>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {liveVideos.map((video, index) => (
            <a
              key={video.title}
              href={video.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border bg-card min-h-[300px] p-6 flex flex-col justify-between hover:border-primary transition-colors animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div>
                <div className="aspect-video mb-6 border border-border bg-background relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(204,0,0,0.55),transparent_30%),linear-gradient(145deg,rgba(255,255,255,0.14),transparent_45%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 border border-white/30 rounded-full flex items-center justify-center bg-black/60 group-hover:bg-primary group-hover:border-primary transition-colors">
                      <Play className="text-white ml-0.5" size={22} fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-primary tracking-widest uppercase mb-3">
                  <span>{video.date}</span>
                  <span>//</span>
                  <span>{video.length}</span>
                </div>
                <h3 className="font-display text-3xl text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
              </div>
              <div className="pt-6">
                <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-6">
                  {video.description}
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-white group-hover:text-primary transition-colors">
                  Guarda
                  <ExternalLink size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}