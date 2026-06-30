"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("x5-playsinline", "true");
    video.setAttribute("x5-video-player-type", "h5");
    video.setAttribute("x5-video-player-fullscreen", "false");

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch(() => {
          // WeChat may block autoplay until the first user gesture.
        });
      }
    };

    tryPlay();
    const retryTimer = window.setInterval(tryPlay, 900);
    const stopRetryTimer = window.setTimeout(() => window.clearInterval(retryTimer), 7200);

    const handleVisibility = () => {
      if (!document.hidden) tryPlay();
    };

    const handleFirstGesture = () => {
      tryPlay();
      window.removeEventListener("touchstart", handleFirstGesture);
      window.removeEventListener("click", handleFirstGesture);
    };

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("touchstart", handleFirstGesture, { passive: true });
    window.addEventListener("click", handleFirstGesture);

    return () => {
      window.clearInterval(retryTimer);
      window.clearTimeout(stopRetryTimer);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("touchstart", handleFirstGesture);
      window.removeEventListener("click", handleFirstGesture);
    };
  }, []);

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
        ref={videoRef}
        className={`hero-opening__video absolute inset-0 h-full w-full object-cover ${
          videoReady ? "is-ready" : ""
        }`}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero/hero.jpg"
        preload="auto"
        onLoadedData={() => setVideoReady(true)}
        onCanPlay={() => setVideoReady(true)}
        onPlaying={() => setVideoReady(true)}
      >
        <source src="/videos/mobile/hero-preview-10s.mp4?v=20260629" type="video/mp4" />
      </video>
    </div>
  );
}
