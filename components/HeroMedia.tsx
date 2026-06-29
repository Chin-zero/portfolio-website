"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroMedia() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <div className="hero-opening__media absolute inset-0 z-10 bg-black">
      <Image
        src="/images/hero/hero.jpg"
        alt="张秦作品视觉片段"
        fill
        priority
        sizes="100vw"
        className="hero-opening__poster object-cover"
      />
      <video
        className={`hero-opening__video absolute inset-0 h-full w-full object-cover ${
          videoReady ? "is-ready" : ""
        }`}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero/hero.jpg"
        preload="metadata"
        onCanPlay={() => setVideoReady(true)}
        onPlaying={() => setVideoReady(true)}
      >
        <source src="/videos/mobile/hero-preview-10s.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
