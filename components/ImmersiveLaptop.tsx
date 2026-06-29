"use client";

import Image from "next/image";
import { CSSProperties, useEffect, useRef, useState } from "react";

const previewWorks = [
  "/images/works/optimized/altay-mobile-clinic-cover.jpg",
  "/images/works/optimized/under-the-hanging-lake-cover.jpg",
  "/images/works/optimized/zeekr-8x-cover.jpg",
];

const montageImages = [
  "/images/works/optimized/under-the-hanging-lake-cover.jpg",
  "/images/works/optimized/mobile-hospital-cover.jpg",
  "/images/works/optimized/zeekr-8x-cover.jpg",
];

export default function ImmersiveLaptop() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(motionQuery.matches);
    updateMotion();
    motionQuery.addEventListener("change", updateMotion);

    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const section = sectionRef.current;
      const target = frameRef.current;
      if (!section || !target) return;

      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      target.style.setProperty("--laptop-progress", progress.toFixed(4));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      motionQuery.removeEventListener("change", updateMotion);
    };
  }, []);

  const staticStyle = reducedMotion
    ? ({ "--laptop-progress": 1 } as CSSProperties)
    : undefined;

  return (
    <section
      ref={sectionRef}
      className="immersive-laptop film-grain relative h-[210vh] overflow-clip bg-[#060606] text-paper"
      aria-label="作品网站预览"
    >
      <div
        ref={frameRef}
        style={staticStyle}
        className="immersive-laptop__stage sticky top-0 flex h-screen items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(192,138,85,0.18),transparent_36%),linear-gradient(180deg,#050505,#15110e_48%,#050505)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.86))]" />

        <div className="immersive-laptop__copy pointer-events-none absolute left-1/2 top-[7vh] z-[5] w-[min(100%-32px,860px)] -translate-x-1/2 text-center">
          <p className="section-kicker">作品界面</p>
          <h2 className="mt-3 text-[clamp(28px,4.8vw,56px)] font-light leading-[0.94]">
            进入作品现场
          </h2>
        </div>

        <div className="immersive-laptop__device immersive-laptop__device--laptop relative z-10 w-[min(92vw,1180px)]">
          <div className="immersive-laptop__display relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-[22px] border border-paper/18 bg-black p-[1.1%] shadow-[0_46px_140px_rgba(0,0,0,0.74)]">
            <div className="absolute left-1/2 top-2 z-20 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-paper/28" />
            <div className="immersive-laptop__screen relative h-full overflow-hidden rounded-[16px] bg-[#060606]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_22%,rgba(192,138,85,0.18),transparent_34%),linear-gradient(135deg,#050505,#120807_56%,#050505)]" />
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.035)_0_1px,transparent_1px_5px)] opacity-45" />

              <div className="immersive-laptop__site absolute inset-0">
                <div className="relative flex h-full flex-col justify-center overflow-hidden bg-[#050505]/92 p-[5%]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(192,138,85,0.13),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_28%,rgba(0,0,0,0.36))]" />

                  <div className="relative z-10 mb-[4%] flex items-center justify-between font-mono text-[clamp(8px,1.1vw,12px)] tracking-[0.18em] text-paper/52">
                    <span>CHIN 作品集</span>
                    <span>DOCUMENTARY / COMMERCIAL / AIGC</span>
                  </div>

                  <div className="relative z-10 grid shrink-0 grid-cols-3 gap-[2.4%]">
                    {previewWorks.map((cover, index) => (
                      <div
                        key={cover}
                        className="relative aspect-video min-w-0 overflow-hidden border border-paper/18 bg-paper/[0.035]"
                      >
                        <Image
                          src={cover}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 28vw, 280px"
                          className="object-cover opacity-95"
                          priority={index === 0}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="relative z-10 mt-[4%] flex items-center justify-between border-t border-paper/10 pt-[3%] font-mono text-[clamp(7px,0.9vw,10px)] tracking-[0.18em] text-paper/36">
                    <span>WORK / AIGC / ABOUT / CONTACT</span>
                    <span>2025 - 2026</span>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.18),transparent_22%,transparent_70%,rgba(255,255,255,0.1))]" />
            </div>
          </div>

          <div className="immersive-laptop__base mx-auto h-7 w-[88%] rounded-b-[28px] bg-[linear-gradient(180deg,#5c5b5a,#161616)] shadow-[0_26px_70px_rgba(0,0,0,0.58)]">
            <div className="mx-auto h-2 w-24 rounded-b-xl bg-black/35" />
          </div>
        </div>

        <div className="immersive-laptop__tunnel absolute inset-0 z-20 pointer-events-none" aria-hidden="true" />
        <div className="immersive-laptop__montage absolute inset-0 pointer-events-none" aria-hidden="true">
          {montageImages.map((src, index) => (
            <Image
              key={`${src}-${index}`}
              className="immersive-laptop__montage-clip absolute inset-0 h-full w-full object-cover"
              src={src}
              alt=""
              fill
              sizes="100vw"
              style={{ ["--clip-index" as string]: index }}
            />
          ))}
          <div className="immersive-laptop__montage-scan absolute inset-0" />
        </div>
        <div className="immersive-laptop__shutter absolute inset-0 z-40 pointer-events-none" aria-hidden="true" />
        <div className="immersive-laptop__handoff absolute inset-0 pointer-events-none" aria-hidden="true" />
      </div>
    </section>
  );
}
