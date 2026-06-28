"use client";

import Image from "next/image";
import { CSSProperties, useEffect, useRef, useState } from "react";

const previewWorks = [
  "/images/works/optimized/under-the-hanging-lake-cover.jpg",
  "/images/works/optimized/mobile-hospital-cover.jpg",
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
      className="immersive-laptop film-grain relative h-[165vh] overflow-clip bg-[#060606] text-paper"
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
              <Image
                src="/images/hero/hero.jpg"
                alt=""
                fill
                sizes="100vw"
                className="object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.72),rgba(5,5,5,0.18)_48%,rgba(5,5,5,0.62))]" />

              <div className="immersive-laptop__site absolute inset-0">
                <div className="flex h-full flex-col bg-[#050505]">
                  <div className="flex h-12 shrink-0 items-center justify-between border-b border-paper/10 px-5 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/58">
                    <span>CHIN</span>
                    <span>作品 / AIGC / 联系</span>
                  </div>

                  <div className="grid min-h-0 flex-1 md:grid-cols-[0.9fr_1.1fr]">
                    <div className="flex flex-col justify-end p-5 md:p-8">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#c08a55]">
                        导演 / 摄影师
                      </p>
                      <h3 className="mt-4 text-[clamp(42px,7vw,96px)] font-light leading-[0.84]">
                        张秦
                      </h3>
                      <p className="mt-4 max-w-sm text-sm leading-6 text-paper/68 md:text-base">
                        纪录、商业影像与 AIGC 视觉的作品入口。
                      </p>
                    </div>

                    <div className="grid min-h-0 grid-cols-3 gap-2 p-3 md:gap-3 md:p-5">
                      {previewWorks.map((src, index) => (
                        <div
                          key={src}
                          className="relative min-h-0 overflow-hidden rounded-md border border-paper/10 bg-paper/5"
                        >
                          <Image
                            src={src}
                            alt=""
                            fill
                            sizes="(max-width: 768px) 28vw, 18vw"
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>
                      ))}
                    </div>
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
