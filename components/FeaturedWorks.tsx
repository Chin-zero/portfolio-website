import Grainient from "@/components/Grainient";
import WorkCard from "@/components/WorkCard";
import FilmStrip from "@/components/FilmStrip";
import { works } from "@/data/works";

export default function FeaturedWorks() {
  return (
    <section id="work" data-motion-section className="motion-section relative overflow-hidden py-24 md:py-36">
      <Grainient
        className="absolute inset-0 z-0 opacity-80"
        color1="#c90000"
        color2="#000000"
        color3="#7b7b7b"
        timeSpeed={0.55}
        colorBalance={0.1}
        warpStrength={0.72}
        warpFrequency={4.2}
        warpSpeed={0.72}
        warpAmplitude={34.0}
        blendSoftness={0.2}
        rotationAmount={260.0}
        noiseScale={0.9}
        grainAmount={0.05}
        grainScale={1}
        grainAnimated={false}
        contrast={1.2}
        gamma={1.0}
        saturation={0.32}
        zoom={1.55}
      />
      <div className="section-shell relative z-10">
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-[1fr_.8fr] md:items-end">
          <div data-motion-heading>
            <p className="section-kicker">精选作品</p>
            <h2 className="section-title">纪录片、商业广告与品牌影像作品。</h2>
          </div>
          <p data-motion-copy className="section-copy md:max-w-md md:justify-self-end">
            以真实人物、场景行动与品牌情绪为核心的影像项目。点击作品可查看项目摘要与替换视频入口。
          </p>
        </div>

        <div data-motion-item className="mb-8 md:mb-10">
          <FilmStrip />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work, index) => (
            <WorkCard key={work.slug} work={work} index={index} priority={index < 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
