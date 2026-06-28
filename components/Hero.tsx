"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(true);

  return (
    <section id="top" className="film-grain relative min-h-screen overflow-hidden bg-ink">
      <div className="absolute inset-0">
        {showVideo ? (
          <video
            className="relative z-10 h-full w-full object-cover opacity-70"
            src="/videos/mobile/hero-preview-h264.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero/hero.jpg"
            onError={() => setShowVideo(false)}
          />
        ) : null}
        <Image
          src="/images/hero/hero.jpg"
          alt="CHIN visual showreel still"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.92),rgba(5,5,5,0.42),rgba(5,5,5,0.78))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_38%,rgba(192,138,85,0.16),transparent_36%)]" />
      <div className="hero-flicker" />
      <div className="hero-letterbox" />
      <div className="hero-corner-labels">
        <span>REC / CHIN_001</span>
        <span>DOCUMENTARY / BRAND FILM</span>
        <span>ZHENGZHOU, CHINA</span>
        <span>24 FPS / 4K / COLOR</span>
      </div>

      <div className="section-shell relative flex min-h-screen items-end pb-12 pt-28 md:items-center md:pb-0 md:pt-20">
        <div className="max-w-4xl animate-[fadeUp_.9s_ease-out_both]">
          <p className="section-kicker">Photographer / Director / AIGC</p>
          <h1 className="mt-7 text-[clamp(54px,12vw,148px)] font-medium leading-[0.9] text-paper">
            张秦
          </h1>
          <p className="mt-8 max-w-2xl text-[clamp(24px,4vw,52px)] font-light leading-tight text-paper">
            镜头捕捉的不仅是影像，<br />更是稍纵即逝的情感与灵魂。
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className="focus-ring rounded-full bg-paper px-7 py-3.5 text-center text-sm font-medium text-ink transition duration-300 hover:bg-ember">
              View Works
            </a>
            <a href="#contact" className="focus-ring rounded-full border border-paper/25 px-7 py-3.5 text-center text-sm font-medium text-paper transition duration-300 hover:border-paper hover:bg-paper/10">
              Contact Me
            </a>
            <a href="/files/resume.pdf" className="focus-ring rounded-full border border-paper/15 px-7 py-3.5 text-center text-sm font-medium text-paper/80 transition duration-300 hover:border-ember hover:text-paper">
              Download Resume
            </a>
          </div>
        </div>

        <p className="absolute bottom-7 left-4 right-4 text-xs uppercase leading-5 tracking-[0.16em] text-paper/55 md:left-auto md:right-0 md:max-w-md md:text-right">
          Based in Zhengzhou, available for documentary, commercial film and brand storytelling projects.
        </p>
      </div>
    </section>
  );
}
