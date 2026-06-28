"use client";

import Image from "next/image";

export default function HeroMedia() {
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
        className="hero-opening__video absolute inset-0 h-full w-full object-cover"
        src="/videos/mobile/hero-preview-h264.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero/hero.jpg"
        preload="auto"
      />
    </div>
  );
}
