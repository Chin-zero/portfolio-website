"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Work } from "@/data/works";

type WorkCardProps = {
  work: Work;
  index: number;
  priority?: boolean;
};

function getBilibiliEmbedUrl(url: string) {
  const match = url.match(/BV[a-zA-Z0-9]+/);
  return match ? `https://player.bilibili.com/player.html?isOutside=true&bvid=${match[0]}&p=1&autoplay=0` : "";
}

function getEmbedUrl(url: string) {
  if (url.includes("player.xinpianchang.com")) return url;
  return getBilibiliEmbedUrl(url);
}

export default function WorkCard({ work, index, priority = false }: WorkCardProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const hasVideo = work.videoUrl && work.videoUrl !== "#";
  const embedUrl = hasVideo ? getEmbedUrl(work.videoUrl) : "";
  const isEmbeddedVideo = Boolean(embedUrl);
  const isXinpianchangVideo = embedUrl.includes("player.xinpianchang.com");
  const shouldCropXinpianchangVideo = isXinpianchangVideo && !["corn-journey", "xingyi-dessert-shop"].includes(work.slug);
  const frameNumber = `镜头 ${String(index + 1).padStart(3, "0")}`;
  const primaryRole = work.role[0] ?? "影像创作";

  useEffect(() => {
    document.body.classList.toggle("work-video-open", open);

    return () => {
      document.body.classList.remove("work-video-open");
    };
  }, [open]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modal = (
    <div className="fixed inset-0 z-[999] flex items-end bg-black/80 p-0 backdrop-blur-md md:items-center md:p-8" role="dialog" aria-modal="true">
      <button className="absolute inset-0 cursor-default" type="button" aria-label="Close modal" onClick={() => setOpen(false)} />
      <div className="relative mx-auto max-h-[92vh] w-full max-w-5xl overflow-y-auto border border-white/12 bg-[#080808] shadow-glow md:max-h-[86vh]">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="focus-ring absolute right-4 top-4 z-10 h-10 w-10 rounded-full border border-white/20 bg-black/50 text-xl leading-none text-paper transition hover:bg-paper hover:text-ink"
          aria-label="Close"
        >
          ×
        </button>
        <div className="relative aspect-video bg-[linear-gradient(135deg,#161616,#050505_60%,#2b2119)]">
          {embedUrl ? (
            <iframe
              className={
                shouldCropXinpianchangVideo
                  ? "absolute -top-14 left-0 h-[calc(100%+3.5rem)] w-full"
                  : "h-full w-full"
              }
              src={embedUrl}
              title={`${work.title} player`}
              allow="fullscreen; picture-in-picture"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-presentation"
            />
          ) : hasVideo ? (
            <video className="h-full w-full object-cover" src={work.videoUrl} controls preload="none" playsInline poster={work.cover} />
          ) : (
            <Image
              src={work.cover}
              alt={`${work.title} detail image`}
              fill
              sizes="(min-width: 1024px) 960px, 100vw"
              className="object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          )}
        </div>
        <div className="grid gap-8 p-6 md:grid-cols-[1.4fr_.8fr] md:p-9">
          <div>
            <p className="section-kicker">{work.client}</p>
            <h3 className="mt-4 text-3xl font-medium leading-tight text-paper md:text-5xl">{work.title}</h3>
            <p className="mt-5 section-copy">{work.description}</p>
            {hasVideo && !isEmbeddedVideo ? (
              <a
                href={work.videoUrl}
                className="focus-ring mt-8 inline-flex rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition hover:bg-ember"
              >
                观看预览
              </a>
            ) : null}
          </div>
          <dl className="grid content-start gap-5 border-t border-white/10 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">类型</dt>
              <dd className="mt-2 text-paper">{work.category}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">职责</dt>
              <dd className="mt-2 text-paper">{work.role.join(" / ")}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">年份</dt>
              <dd className="mt-2 text-paper">{work.year}</dd>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {work.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </dl>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        data-motion-item
        className="focus-ring group block h-full w-full text-left"
      >
        <article className="flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.03] transition duration-500 hover:border-white/25">
          <div data-image-reveal className="work-image-frame relative aspect-video shrink-0 overflow-hidden border border-white/[0.08] bg-[linear-gradient(135deg,#171717,#050505_56%,#2b2119)] transition duration-500 group-hover:border-white/[0.18]">
            <Image
              src={work.cover}
              alt={`${work.title} cover`}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              data-parallax-media
              className="object-cover opacity-90 brightness-90 saturate-90 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100 group-hover:brightness-100 group-hover:contrast-[1.06] group-hover:saturate-[1.05]"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-70 transition group-hover:opacity-95" />
            <div className="absolute left-4 top-4 z-10 border border-white/15 bg-black/35 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/70 backdrop-blur-sm">
              {frameNumber}
            </div>
            <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-xs uppercase tracking-[0.16em] text-ember">{work.client}</p>
              <p className="mt-2 text-sm text-paper/80">{work.role.join(" / ")}</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-5 md:p-6">
            <div className="flex items-start justify-between gap-5">
              <h3 className="min-h-[3.5rem] text-xl font-medium leading-tight text-paper transition duration-500 group-hover:-translate-y-1 md:min-h-[4rem] md:text-2xl">{work.title}</h3>
              <span className="shrink-0 text-sm text-muted">{work.year}</span>
            </div>
            <div className="mt-auto pt-3">
              <p className="font-mono text-[10px] tracking-[0.14em] text-muted">
                {work.client} / {primaryRole} / {work.year}
              </p>
              <p className="mt-2 text-sm text-muted">{work.category}</p>
            </div>
          </div>
        </article>
      </button>

      {open && mounted ? createPortal(modal, document.body) : null}
    </>
  );
}
