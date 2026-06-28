"use client";

import Image from "next/image";

const facts = [
  "常驻郑州",
  "5 年影像经验",
  "摄影 / 导演 / AIGC",
  "可承接项目合作"
];

export default function AboutSection() {
  return (
    <section id="about" data-motion-section className="motion-section border-t border-white/10 bg-soft py-24 md:py-36">
      <div className="section-shell grid gap-12 md:grid-cols-[1fr_.82fr] md:items-center">
        <div>
          <div data-motion-heading>
            <p className="section-kicker">关于我</p>
            <h2 className="section-title">镜头捕捉的不仅是影像，更是情感与灵魂。</h2>
          </div>
          <div data-motion-copy className="mt-9 space-y-5 section-copy">
            <p>我是张秦，一名常驻郑州的纪录片摄影师、导演与商业影像创作者。</p>
            <p>我主攻纪实纪录片与商业广告短片创作，熟悉商业项目标准化运作逻辑，擅长项目整体策划、团队统筹、前期摄制与后期剪辑全流程落地。</p>
            <p>
              我相信影像不只是展示信息，更是建立情绪、人物与品牌之间关系的方式。无论是雪山、公路、乡村、餐桌，还是城市中的普通人，我都希望用真实、有温度的镜头语言，把故事讲得更动人。
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact} data-motion-item className="border border-white/10 px-4 py-3 text-sm text-paper/80">
                {fact}
              </div>
            ))}
          </div>
        </div>

        <div data-motion-item className="photo-paper border border-white/10 bg-white/[0.04] p-2.5">
          <div data-image-reveal className="relative aspect-[4/5] overflow-hidden bg-[linear-gradient(135deg,#191919,#050505_58%,#2c2016)]">
            <Image
              src="/images/portrait/about-photo.jpg"
              alt="张秦肖像"
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              data-parallax-media
              className="object-cover object-center opacity-95 brightness-95 saturate-90"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-ember">摄影指导</p>
              <p className="mt-2 text-2xl font-medium text-paper">张秦 / CHIN</p>
            </div>
          </div>
          <p className="px-1 pt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/50">
            张秦 / 纪录片摄影师 / 郑州
          </p>
        </div>
      </div>
    </section>
  );
}
