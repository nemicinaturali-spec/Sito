import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Photos() {
  const digitalPhotos = [
    { src: "/IMG_5405.JPG", alt: "Cantante dal vivo" },
    { src: "/IMG_5585.JPG", alt: "Gruppo dal vivo" },
    { src: "/IMG_5407.JPG", alt: "Chitarra dal vivo" },
    { src: "/IMG_5389.JPG", alt: "Basso dal vivo" },
    { src: "/IMG_5392.jpeg", alt: "Chitarra 2 dal vivo" },
    { src: "/IMG_5630.JPG", alt: "Batteria dal vivo" },
    { src: "/IMG_5584.JPG", alt: "Chitarra 3 dal vivo" },
    { src: "/IMG_5643.JPG", alt: "Gruppo daò vivo" },
  ];

  const filmPhotos = [
    { src: "/885876-23--PfDF43.jpg", alt: "VOX" },
    { src: "/885876-12--PfDF43.jpg", alt: "bass" },
    { src: "/885876-5--PfDF43.jpg", alt: "isafiga" },
    // Reusing for grid
    { src: "/885876-24--PfDF43.jpg", alt: "goonels" },
    { src: "/885876-25--PfDF43.jpg", alt: "Manu" },
    { src: "/885876-30--PfDF43.jpg", alt: "nerd" },
  ];

  return (
    <div className="w-full pt-32 pb-24 px-6 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 animate-in slide-in-from-bottom-4 duration-700 fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase text-center">
            FOTO
          </h1>
          <p className="text-muted-foreground font-mono max-w-lg text-center">
            Rumore documentato. Scatti dal pit, dal palco e dagli spazi in
            mezzo.
          </p>
        </div>

        <Tabs defaultValue="film" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-muted/50 border border-border p-1">
              <TabsTrigger
                value="film"
                className="font-mono tracking-widest uppercase data-[state=active]:bg-primary data-[state=active]:text-white px-8 py-3"
              >
                35MM Pellicola
              </TabsTrigger>
              <TabsTrigger
                value="digital"
                className="font-mono tracking-widest uppercase data-[state=active]:bg-white data-[state=active]:text-black px-8 py-3"
              >
                Digitale
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="film" className="mt-0 outline-none">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {filmPhotos.map((photo, i) => (
                <div
                  key={`film-${i}`}
                  className="break-inside-avoid relative group overflow-hidden bg-muted aspect-[3/4] animate-in fade-in zoom-in-95 duration-500 fill-mode-both"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-125"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="digital" className="mt-0 outline-none">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {digitalPhotos.map((photo, i) => (
                <div
                  key={`digital-${i}`}
                  className="break-inside-avoid relative group overflow-hidden bg-muted aspect-[3/4] animate-in fade-in zoom-in-95 duration-500 fill-mode-both"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Subtle red overlay on hover to match the brand */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 mix-blend-overlay transition-colors duration-300" />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
