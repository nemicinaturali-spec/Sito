import React from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import {
  SiSpotify,
  SiApple,
  SiYoutubemusic,
  SiFacebook,
  SiInstagram,
} from "react-icons/si";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/shows", label: "CONCERTI" },
    { href: "/photos", label: "FOTO" },
  ];

  const socialLinks = [
    {
      href: "https://open.spotify.com/artist/4JYxWWzukI4F5XYS0GYFNt?si=QG8rdWBgQ2WnBLwx47Dx_A",
      icon: SiSpotify,
      label: "Spotify",
    },
    {
      href: "https://music.apple.com/si/artist/nemici-naturali/1827306385",
      icon: SiApple,
      label: "Apple Music",
    },
    {
      href: "https://www.youtube.com/channel/UCuwlsUlmsU_37JH4nBsUCvA",
      icon: SiYoutubemusic,
      label: "YouTube Music",
    },
    {
      href: "https://www.instagram.com/nemicinaturali",
      icon: SiInstagram,
      label: "Instagram",
    },
    //{ href: "https://facebook.com", icon: SiFacebook, label: "Facebook" },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground relative selection:bg-primary selection:text-white">
      <div className="noise-overlay" />

      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 text-white bg-background/90 backdrop-blur-md border-b border-border md:bg-transparent md:backdrop-blur-0 md:border-0 md:mix-blend-difference">
        <Link
          href="/"
          className="font-display text-2xl font-bold tracking-tighter hover:text-primary transition-colors z-50"
        >
          NEMICI NATURALI
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-bold tracking-widest transition-colors glitch-hover ${location === link.href ? "text-primary" : "text-primary/80 hover:text-primary"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-white hover:text-primary transition-colors"
          onClick={toggleMenu}
          aria-label="Apri o chiudi il menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center p-6 animate-in fade-in duration-300">
          <nav className="flex flex-col items-center gap-8 mb-16">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`font-display text-5xl font-black uppercase tracking-tighter ${location === link.href ? "text-primary" : "text-foreground"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      )}

      <main className="flex-1 flex flex-col w-full relative z-10">
        {children}
      </main>

      <footer className="w-full border-t border-border py-12 px-6 mt-auto relative z-10 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-display text-xl font-bold tracking-tighter">
              NEMICI NATURALI
            </span>
            <span className="text-xs text-muted-foreground tracking-widest uppercase">
              Prod by Spicy Mushrooms Records
            </span>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <div className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Nemici Naturali.
          </div>
        </div>
      </footer>
    </div>
  );
}
