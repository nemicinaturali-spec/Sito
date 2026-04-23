import { ArrowRight, Disc3, Shirt, ShoppingBag } from "lucide-react";

const merchItems = [
  {
    title: "T-shirt Nemici Naturali",
    type: "ARTICOLI",
    price: "$28",
    detail: "Maglietta in cotone pesante. Logo davanti, stampa sul retro.",
    icon: Shirt,
    href: "https://example.com/merch/tee",
  },
  {
    title: "Vinile Live Pressure",
    type: "VINYL",
    price: "$32",
    detail: "Vinile nero 12 pollici. Prima stampa.",
    icon: Disc3,
    href: "https://example.com/merch/vinyl",
  },
  {
    title: "CD Basement Sessions",
    type: "CD",
    price: "$15",
    detail: "Registrazioni grezze, tiratura numerata a mano.",
    icon: Disc3,
    href: "https://example.com/merch/cd",
  },
  {
    title: "Pacchetto poster",
    type: "ARTICOLI",
    price: "$18",
    detail: "Tre poster dei concerti del ciclo attuale.",
    icon: ShoppingBag,
    href: "https://example.com/merch/posters",
  },
];

export default function Merch() {
  return (
    <div className="w-full pt-32 pb-24 px-6 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 animate-in slide-in-from-left-8 duration-700 fade-in">
          <p className="text-primary font-mono font-bold tracking-[0.35em] uppercase mb-4">
            Dischi / Maglie / Oggetti
          </p>
          <h1 className="font-display text-6xl md:text-8xl font-black text-white tracking-tighter uppercase mb-6">
            Negozio <span className="text-primary">&</span> Musica
          </h1>
          <p className="text-muted-foreground font-mono text-lg max-w-2xl leading-relaxed">
            Rumore fisico per lo scaffale, il giradischi, lo stereo della macchina e il prossimo concerto.
            I link dello store sono pronti da sostituire con gli URL ufficiali.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {merchItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative min-h-[320px] overflow-hidden border border-border bg-card p-8 flex flex-col justify-between hover:border-primary transition-colors animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_20%_20%,rgba(204,0,0,0.35),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />
                <div className="relative z-10 flex items-start justify-between gap-6">
                  <div>
                    <span className="inline-block text-xs font-mono tracking-widest text-primary border border-primary/40 px-3 py-1 mb-5">
                      {item.type}
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl text-white tracking-tighter uppercase group-hover:text-primary transition-colors">
                      {item.title}
                    </h2>
                  </div>
                  <Icon className="text-white/20 group-hover:text-primary transition-colors shrink-0" size={56} />
                </div>

                <div className="relative z-10">
                  <p className="text-muted-foreground font-mono mb-8 max-w-md">
                    {item.detail}
                  </p>
                  <div className="flex items-center justify-between border-t border-border pt-6">
                    <span className="font-display text-4xl text-white">{item.price}</span>
                    <span className="inline-flex items-center gap-2 text-sm font-mono font-bold tracking-widest uppercase text-white group-hover:text-primary transition-colors">
                      Compra / Dettagli
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-20 border border-border bg-muted/30 p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-3xl text-white uppercase mb-2">
              Vuoi ritirare dal vivo?
            </h3>
            <p className="text-muted-foreground font-mono max-w-xl">
              Passa al banco merch al prossimo concerto oppure scrivici prima per bloccare copie, taglie e disponibilità dei dischi.
            </p>
          </div>
          <a
            href="mailto:merch@nemicinaturali.com"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 font-mono font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
          >
            merch@nemicinaturali.com
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}