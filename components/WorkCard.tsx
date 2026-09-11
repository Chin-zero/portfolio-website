"use client";

import Image from "next/image";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Work } from "@/data/works";

type WorkCardProps = {
  work: Work;
  index: number;
};

function getBilibiliEmbedUrl(url: string) {
  const match = url.match(/BV[a-zA-Z0-9]+/);
  return match ? `https://player.bilibili.com/player.html?isOutside=true&bvid=${match[0]}&p=1&autoplay=0` : "";
}

function getEmbedUrl(url: string) {
  if (url.includes("player.xinpianchang.com")) return url;
  return getBilibiliEmbedUrl(url);
}

function getWatchUrl(url: string) {
  try {
    const source = new URL(url);
    if (source.hostname === "player.xinpianchang.com") {
      const aid = source.searchParams.get("aid");
      if (aid && /^\d+$/.test(aid)) return `https://www.xinpianchang.com/a${aid}`;
    }
    if (source.hostname === "player.bilibili.com") {
      const bvid = source.searchParams.get("bvid");
      if (bvid && /^BV[a-zA-Z0-9]+$/.test(bvid)) return `https://www.bilibili.com/video/${bvid}/`;
    }
  } catch {
    // Local video paths do not need an external watch URL.
  }
  return url;
}

export default function WorkCard({ work, index }: WorkCardProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [playerAttempt, setPlayerAttempt] = useState(0);
  const [playerStatus, setPlayerStatus] = useState<"loading" | "loaded" | "slow" | "error">("loading");
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const hasVideo = work.videoUrl && work.videoUrl !== "#";
  const embedUrl = hasVideo ? getEmbedUrl(work.videoUrl) : "";
  const isXinpianchangVideo = embedUrl.includes("player.xinpianchang.com");
  const watchUrl = hasVideo ? getWatchUrl(work.videoUrl) : "";
  const frameNumber = `作品 ${String(index + 1).padStart(3, "0")}`;

  useEffect(() => {
    if (!open || !hasVideo) return;
    setPlayerStatus("loading");
    const timer = window.setTimeout(() => {
      setPlayerStatus((status) => status === "loading" ? "slow" : status);
    }, 12000);
    return () => window.clearTimeout(timer);
  }, [open, hasVideo, playerAttempt]);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.classList.add("work-video-open");
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);
    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleEscape);
      document.body.classList.remove("work-video-open");
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [open]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDialogKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab" || !dialogRef.current) return;

    const focusable = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], iframe, video[controls], [tabindex]:not([tabindex="-1"])'
      )
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const modal = (
    <div className="fixed inset-0 z-[999] flex items-end bg-black/80 p-0 backdrop-blur-md md:items-center md:p-8">
      <button className="absolute inset-0 cursor-default" type="button" tabIndex={-1} aria-label="关闭作品详情" onClick={() => setOpen(false)} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`work-modal-${work.slug}`}
        tabIndex={-1}
        onKeyDown={handleDialogKeyDown}
        className="relative mx-auto max-h-[92vh] w-full max-w-5xl overscroll-contain overflow-y-auto border border-white/12 bg-[#080808] shadow-glow md:max-h-[86vh]"
      >
        <div className="flex min-h-14 items-center justify-between gap-4 border-b border-white/10 px-4">
          <p className="min-w-0 text-xs text-muted">{frameNumber}</p>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setOpen(false)}
            className="focus-ring h-10 w-10 shrink-0 rounded-full border border-white/20 bg-black/50 text-xl leading-none text-paper transition hover:bg-paper hover:text-ink"
            aria-label="关闭作品详情"
          >
            ×
          </button>
        </div>
        <div className="relative aspect-video overflow-hidden bg-black">
          {embedUrl ? (
            <iframe
              key={playerAttempt}
              className="absolute inset-0 block h-full w-full border-0"
              src={embedUrl}
              title={`${work.title} player`}
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-presentation"
              onLoad={() => setPlayerStatus("loaded")}
              onError={() => setPlayerStatus("error")}
            />
          ) : hasVideo ? (
            <video
              key={playerAttempt}
              className="h-full w-full object-contain"
              src={work.videoUrl}
              controls
              preload="metadata"
              playsInline
              poster={work.cover}
              onLoadedMetadata={() => setPlayerStatus("loaded")}
              onError={() => setPlayerStatus("error")}
            />
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
        {hasVideo ? (
          <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2 border-b border-white/10 px-4 py-3 text-xs sm:px-6">
            <p role="status" className="min-w-0 text-muted">
              {playerStatus === "loading" ? "正在加载播放器…" :
                playerStatus === "slow" ? "加载较慢，可重试或前往原站观看。" :
                  playerStatus === "error" ? "视频暂时无法加载，可重试或前往原站观看。" :
                    isXinpianchangVideo ? "新片场视频" : embedUrl ? "哔哩哔哩视频" : null}
            </p>
            <div className="flex shrink-0 items-center gap-5">
              <button
                type="button"
                onClick={() => setPlayerAttempt((attempt) => attempt + 1)}
                className="focus-ring min-h-10 text-muted underline underline-offset-4 transition hover:text-paper"
              >
                重新加载
              </button>
              <a
                href={watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-10 items-center text-paper underline underline-offset-4 transition hover:text-ember"
              >
                {isXinpianchangVideo ? "在新片场观看" : embedUrl ? "在哔哩哔哩观看" : "单独打开视频"}
              </a>
            </div>
          </div>
        ) : null}
        <div className="grid gap-8 p-6 md:grid-cols-[1.4fr_.8fr] md:p-9">
          <div>
            <p className="section-kicker">{work.client}</p>
            <h3 id={`work-modal-${work.slug}`} className="mt-4 text-3xl font-medium leading-tight text-paper md:text-5xl">{work.title}</h3>
            <p className="mt-5 section-copy">{work.description}</p>
          </div>
          <dl className="grid content-start gap-5 border-t border-white/10 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            {work.recognition ? (
              <div className="border-l-2 border-ember pl-4">
                <dt className="text-xs text-muted">作品荣誉 · {work.recognition.status}</dt>
                <dd className="mt-2 text-sm leading-relaxed">
                  <p className="font-medium text-ember">{work.recognition.title}</p>
                  <p className="mt-1 text-paper/80">{work.recognition.category}</p>
                  <a
                    href={work.recognition.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring mt-3 inline-block text-xs text-muted underline underline-offset-4 transition hover:text-paper"
                  >
                    查看入围报道
                  </a>
                </dd>
              </div>
            ) : null}
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
        <article className="work-card flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.03] transition duration-500 hover:border-white/25">
          <div className="work-card__perforation" aria-hidden="true" />
          <div data-image-reveal className="work-image-frame relative aspect-video shrink-0 overflow-hidden border-y border-white/[0.08] bg-[linear-gradient(135deg,#171717,#050505_56%,#2b2119)] transition duration-500 group-hover:border-white/[0.18]">
            <Image
              src={work.cover}
              alt={`${work.title} cover`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              data-parallax-media
              className="object-cover opacity-90 brightness-90 saturate-90 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100 group-hover:brightness-100 group-hover:contrast-[1.06] group-hover:saturate-[1.05]"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-70 transition group-hover:opacity-95" />
            <div className="pointer-events-none absolute inset-3 border border-white/12" />
            <div className="absolute left-4 top-4 z-10 border border-white/15 bg-black/45 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/76 backdrop-blur-sm">
              {frameNumber}
            </div>
            <div className="absolute right-4 top-4 z-10 hidden border border-white/10 bg-black/35 px-2 py-1 font-mono text-[10px] tracking-[0.16em] text-paper/54 backdrop-blur-sm sm:block">
              {work.year}
            </div>
          </div>
          <div className="flex flex-1 flex-col p-5 md:p-6">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div className="min-w-0">
                <p className="font-mono text-[10px] tracking-[0.18em] text-ember">{work.client}</p>
                <h3 className="mt-3 text-[clamp(1.35rem,4.8vw,1.7rem)] font-medium leading-tight text-paper transition duration-500 group-hover:-translate-y-0.5 md:text-2xl">
                  {work.title}
                </h3>
              </div>
              <span className="shrink-0 font-mono text-xs tracking-[0.14em] text-muted">{work.year}</span>
            </div>

            {work.recognition ? (
              <div className="mt-4 border-l-2 border-ember pl-3 text-xs leading-relaxed">
                <p className="font-medium text-ember">
                  {work.recognition.title} · {work.recognition.status}
                </p>
                <p className="mt-1 text-paper/70">{work.recognition.category}</p>
              </div>
            ) : null}

            <dl className="mt-4 grid gap-3 text-sm">
              <div className="grid grid-cols-[3.8rem_1fr] gap-3">
                <dt className="font-mono text-[10px] tracking-[0.16em] text-muted">类型</dt>
                <dd className="text-paper/78">{work.category}</dd>
              </div>
              <div className="grid grid-cols-[3.8rem_1fr] gap-3">
                <dt className="font-mono text-[10px] tracking-[0.16em] text-muted">职责</dt>
                <dd className="text-paper/78">{work.role.join(" / ")}</dd>
              </div>
            </dl>

            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              {work.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="work-card__perforation is-bottom" aria-hidden="true" />
        </article>
      </button>

      {open && mounted ? createPortal(modal, document.body) : null}
    </>
  );
}
