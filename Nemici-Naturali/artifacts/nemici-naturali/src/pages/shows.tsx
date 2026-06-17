import React from "react";
import { ArrowRight, Ticket, MapPin, Lock } from "lucide-react"; // Aggiunta icona Lock per coerenza

export default function Shows() {
  const shows = [
    {
      id: 7,
      date: "27 GIUGNO 2026",
      venue: "CLAMORE FESTIVAL",
      location: "LORETO",
      doors: "10:30 PM",
      price: "FREE",
      status: "INFO",
      ticketUrl: "https://www.instagram.com/clamore.festival/",
      soldOut: false,
      isPrivate: false,
    },
    {
      id: 6,
      date: "7 GIUGNO 2026",
      venue: "BOCCALEONE MUSIC FEST",
      location: "ORATORIO BOCCALEONE (BG)",
      doors: "8:15 PM",
      price: "FREE",
      status: "ESAURITO",
      ticketUrl: "https://www.instagram.com/cineteatro_boccaleone/",
      soldOut: true,
      isPrivate: false,
    },
    {
      id: 5,
      date: "29 MAGGIO 2026",
      venue: "IMMACOLATA FEST",
      location: "ORATORIO ALZANO CENTRO (BG)",
      doors: "9:00 PM",
      price: "FREE",
      status: "ESAURITO",
      ticketUrl: "https://www.instagram.com/oratori_alzano/",
      soldOut: true,
      isPrivate: false,
    },
    {
      id: 4,
      date: "9 APRILE 2026",
      venue: "DASTE",
      location: "BERGAMO",
      doors: "9:00 PM",
      price: "FREE",
      status: "ESAURITO",
      ticketUrl: "https://example.com/tickets",
      soldOut: true,
      isPrivate: false,
    },
    {
      id: 3,
      date: "20 SETTEMBRE 2025",
      venue: "CTE BOCCALEONE",
      location: "BERGAMO",
      doors: "4:00 PM",
      price: "FREE",
      status: "ESAURITO",
      ticketUrl: "https://example.com/tickets",
      soldOut: true,
      isPrivate: false,
    },
    {
      id: 2,
      date: "6 SETTEMBRE 2025",
      venue: "CAMBIO PALCO @BOPO",
      location: "PONTERANICA (BG)",
      doors: "5:00 PM",
      price: "FREE",
      status: "ESAURITO",
      ticketUrl: "https://example.com/tickets",
      soldOut: true,
      isPrivate: false,
    },
    {
      id: 1,
      date: "21 GIUGNO 2025",
      venue: "Casa Circondariale di Voghera",
      location: "VOGHERA (PV)",
      doors: "N/A",
      price: "N/A",
      status: "PRIVATE",
      ticketUrl: "#",
      soldOut: false,
      isPrivate: true, // Nuova proprietà per gestire l'evento chiuso
    }
  ];

  return (
    <div className="w-full pt-32 pb-24 px-6 min-h-screen bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 animate-in slide-in-from-left-8 duration-700 fade-in">
          <h1 className="font-display text-6xl md:text-8xl font-black text-white tracking-tighter uppercase mb-2">
            Suoni <span className="text-primary">Live</span>
          </h1>
          <p className="text-muted-foreground font-mono text-lg tracking-widest uppercase">
            DATE IN PROGRAMMA
          </p>
        </div>

        <div className="flex flex-col border-t border-border">
          {shows.map((show, i) => (
            <div
              key={show.id}
              className={`group flex flex-col md:flex-row md:items-center py-8 border-b border-border transition-colors duration-300 hover:bg-card/50 ${show.soldOut || show.isPrivate ? "opacity-60" : ""} animate-in fade-in slide-in-from-bottom-4 fill-mode-both`}
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              {/* Date */}
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <span className="font-mono text-primary font-bold tracking-widest text-lg md:text-xl">
                  {show.date}
                </span>
              </div>

              {/* Venue Info */}
              <div className="w-full md:w-2/4 mb-6 md:mb-0">
                <h3 className="font-display text-3xl md:text-4xl text-white font-bold uppercase mb-2 group-hover:text-primary transition-colors">
                  {show.venue}
                </h3>
                <div className="flex items-center gap-4 text-muted-foreground font-mono text-sm">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {show.location}
                  </span>
                  <span>//</span>
                  <span>PORTE: {show.doors}</span>
                  <span>//</span>
                  <span>{show.price}</span>
                </div>
              </div>

              {/* CTA Section */}
              <div className="w-full md:w-1/4 flex md:justify-end">
                {show.isPrivate ? (
                  /* Opzione: EVENTO CHIUSO AL PUBBLICO */
                  <div className="inline-flex items-center justify-center gap-2 rounded-md border border-muted-foreground/50 text-muted-foreground px-6 py-3 font-mono font-bold tracking-widest text-xs uppercase text-center w-full md:w-auto">
                    <Lock size={14} />
                    EVENTO CHIUSO AL PUBBLICO
                  </div>
                ) : show.soldOut ? (
                  <div className="inline-block rounded-md border border-destructive/50 text-destructive px-6 py-3 font-mono font-bold tracking-widest text-sm uppercase text-center w-full md:w-auto">
                    ESAURITO
                  </div>
                ) : show.price === "FREE" ? (
                  <div className="inline-flex items-center justify-center rounded-md border border-primary/50 text-primary px-6 py-3 font-mono font-bold tracking-widest text-sm uppercase w-full md:w-auto">
                    EVENTO GRATUITO
                  </div>
                ) : (
                  <a
                    href={show.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-black px-6 py-3 font-mono font-bold tracking-widest text-sm uppercase hover:bg-primary hover:text-white transition-colors w-full md:w-auto"
                  >
                    <Ticket size={16} />
                    BIGLIETTI
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-8 border border-border bg-card text-center flex flex-col items-center justify-center">
          <h3 className="font-display text-2xl uppercase text-white mb-2">
            Ci vuoi nella tua città?
          </h3>
          <p className="text-muted-foreground font-mono mb-6 max-w-md">
            Stiamo preparando un nuovo tour. Facci sapere dove dovremmo arrivare
            a fare rumore.
          </p>
          <a
            href="mailto:nemicinaturali@gmail.com"
            className="text-primary font-mono tracking-widest uppercase border-b border-primary pb-1 hover:text-white hover:border-white transition-colors"
          >
            nemicinaturali@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
