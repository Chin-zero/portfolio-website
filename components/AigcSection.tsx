"use client";

import Grainient from "@/components/Grainient";
import { aigcVideos } from "@/data/aigcVideos";

export default function AigcSection() {
  return (
    <section id="aigc" data-motion-section className="motion-section relative overflow-hidden border-t border-white/10 bg-ink py-24 md:py-36">
      <Grainient
        className="absolute inset-0 z-0 opacity-70"
        color1="#050505"
        color2="#c08a55"
        color3="#5f1717"
        timeSpeed={0.7}
        colorBalance={0.18}
        warpStrength={0.8}
        warpFrequency={4.5}
        warpSpeed={0.9}
        warpAmplitude={42}
        blendSoftness={0.18}
        rotationAmount={360}
        noiseScale={0.85}
        grainAmount={0.06}
        grainScale={1}
        grainAnimated={false}
        contrast={1.12}
        gamma={1}
        saturation={0.45}
        zoom={1.35}
      />

      <div className="section-shell relative z-10">
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-[1fr_.8fr] md:items-end">
          <div data-motion-heading>
            <p className="section-kicker">AIGC</p>
            <h2 className="section-title">AIGC影像作品</h2>
          </div>
          <p data-motion-copy className="section-copy md:max-w-md md:justify-self-end">
            将 AI 生成影像作为视觉实验、概念预演与品牌氛围片的创作工具，探索真实影像之外的叙事可能。
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {aigcVideos.map((video, index) => {
            const hasVideo = Boolean(video.videoUrl);
            const isEmbeddedVideo = /^https?:\/\//.test(video.videoUrl);
            const frameNumber = `AI 影像 ${String(index + 1).padStart(2, "0")}`;

            return (
              <article
                key={video.slug}
                data-motion-item
                className="group overflow-hidden border border-white/10 bg-white/[0.035] transition duration-500 hover:border-white/24 hover:bg-white/[0.055]"
              >
                <div data-image-reveal className="work-image-frame relative aspect-video overflow-hidden border border-white/[0.08] bg-[radial-gradient(circle_at_20%_20%,rgba(192,138,85,0.24),transparent_30%),linear-gradient(135deg,#121212,#050505_58%,#211111)]">
                  {hasVideo && isEmbeddedVideo ? (
                    <iframe
                      className="h-full w-full"
                      src={video.videoUrl}
                      title={`${video.title} player`}
                      allow="fullscreen; picture-in-picture"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      sandbox="allow-scripts allow-same-origin allow-presentation"
                    />
                  ) : hasVideo ? (
                    <video
                      data-parallax-media
                      className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
                      src={video.videoUrl}
                      poster={video.poster}
                      controls
                      preload="metadata"
                      playsInline
                    />
                  ) : (
                    <div className="flex h-full flex-col justify-between p-5">
                      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-paper/45">
                        <span>{frameNumber}</span>
                        <span>待添加视频</span>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ember">视频位置</p>
                        <p className="mt-3 max-w-xs text-lg font-medium leading-tight text-paper md:text-xl">
                          添加 AI 视频文件后即可激活播放器。
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="absolute left-4 top-4 z-10 border border-white/15 bg-black/35 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/70 backdrop-blur-sm">
                    {frameNumber}
                  </div>
                </div>

                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="text-xl font-medium leading-tight text-paper md:text-2xl">{video.title}</h3>
                    <span className="shrink-0 text-sm text-muted">{video.year}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted">{video.prompt}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {video.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
