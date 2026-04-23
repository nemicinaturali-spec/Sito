import React, { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
        heroRef.current.style.opacity = `${1 - scrolled / 700}`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section - Mobile: stacked layout, Desktop: full overlay */}
      <section className="relative w-full overflow-hidden flex flex-col md:h-[100dvh] md:items-center md:justify-center">
        {/* Mobile: full image as block at top */}
        <div className="md:hidden relative w-full pt-20 bg-background">
          <img
            src="/hero-bg1.png"
            alt="Nemici Naturali sul palco dal vivo"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-auto object-contain animate-in fade-in duration-1000"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none" />
        </div>

        {/* Desktop: parallax full-bleed background */}
        <div
          ref={heroRef}
          className="hidden md:block absolute inset-0 z-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-black/60 z-10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background z-10" />
          <img
            src="/hero-bg1.png"
            alt="Nemici Naturali sul palco dal vivo"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-full object-cover object-center animate-in fade-in duration-1000 zoom-in-105"
          />
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 py-12 md:py-0 md:mt-20">
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[12rem] font-black tracking-tighter text-white leading-none mb-6 animate-in slide-in-from-bottom-8 duration-1000 fade-in delay-150 fill-mode-both">
            NEMICI
            <br className="md:hidden" /> NATURALI
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-mono tracking-widest uppercase animate-in slide-in-from-bottom-8 duration-1000 fade-in delay-300 fill-mode-both mb-10 md:mb-12">
            rumorosi. crudi. inevitabili.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto animate-in slide-in-from-bottom-8 duration-1000 fade-in delay-500 fill-mode-both">
            <Link
              href="/shows"
              className="rounded-md bg-primary text-primary-foreground px-8 py-4 font-bold tracking-widest text-sm uppercase hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2 group"
            >
              Date live
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <a
              href="https://open.spotify.com/artist/4JYxWWzukI4F5XYS0GYFNt?si=QG8rdWBgQ2WnBLwx47Dx_A"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/20 bg-black/50 backdrop-blur-sm text-white px-8 py-4 font-bold tracking-widest text-sm uppercase hover:border-white transition-colors duration-300 text-center"
            >
              Ascolta ora
            </a>
          </div>
        </div>
      </section>
      {/* Intro / Manifesto Section */}
      <section className="py-32 px-6 bg-background relative z-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="font-display text-4xl md:text-6xl text-white mb-12 tracking-tight">
            NESSUN COMPROMESSO
          </h2>
          <div className="space-y-8 text-muted-foreground text-lg md:text-xl font-mono max-w-2xl leading-relaxed">
            <p>Siamo i vostri Nemici Naturali.</p>
          </div>
        </div>
      </section>
      {/* Next Show Teaser */}
      <section className="py-24 px-6 border-t border-border bg-card">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-4 border border-primary/30">
              Prossimo concerto
            </div>
            <h3 className="font-display text-5xl md:text-7xl text-white">
              STAY TUNED
            </h3>
            <p className="text-xl text-muted-foreground font-mono">
              {/*24 OTT // 21:00 // INGRESSO: $15*/}
            </p>
            <Link
              href="/shows"
              className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase hover:text-white transition-colors mt-4"
            >
              Tutte le prossime date
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="w-full md:w-1/2 aspect-video bg-muted overflow-hidden relative group rounded-md">
            <img
              src="/IMG_5389.JPG"
              alt="Azione dal vivo"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-primary mix-blend-overlay opacity-50 group-hover:opacity-20 transition-opacity duration-700"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
