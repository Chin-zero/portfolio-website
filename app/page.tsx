import AboutSection from "@/components/AboutSection";
import AigcSection from "@/components/AigcSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import FeaturedWorks from "@/components/FeaturedWorks";
import Footer from "@/components/Footer";
import Grainient from "@/components/Grainient";
import Header from "@/components/Header";
import ImmersiveLaptop from "@/components/ImmersiveLaptop";
import MotionSystem from "@/components/MotionSystem";
import TextPressure from "@/components/TextPressure";
import Image from "next/image";

function HomeHero() {
  return (
    <section id="top" className="hero-opening film-grain relative min-h-screen overflow-hidden bg-ink text-paper">
      <div className="hero-opening__curtain" />
      <div className="hero-opening__wipe" />
      <div className="hero-opening__media absolute inset-0 z-100 bg-transparent">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/mobile/hero-preview-h264.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero/hero.jpg"
          preload="auto"
        />
        <Image
          src="/images/hero/hero.jpg"
          alt="张秦作品视觉片段"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ zIndex: -1 }}
        />
      </div>

      <div className="absolute inset-0 z-20 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

      <div className="hero-flicker z-30" />

      <div className="section-shell relative z-40 flex min-h-screen flex-col justify-end pb-12 pt-0">
        <div className="flex flex-col items-start">
          <div className="hero-opening__eyebrow inline-flex items-center gap-3 rounded-full border border-paper/15 bg-paper/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-paper/60">
              导演 / 摄影 / AIGC 视觉
            </span>
          </div>

          <div className="hero-opening__title mt-4 w-full text-paper">
            <TextPressure
              text="CHIN"
              width
              weight
              italic={false}
              alpha
              textColor="#FFFFFF"
              minFontSize={72}
            />
          </div>

          <p className="hero-opening__copy mt-4 max-w-xl text-[clamp(0.9rem,2vw,1.3rem)] font-light leading-[1.4] text-paper/80">
            镜头捕捉的不仅是影像，<br />更是稍纵即逝的情感与灵魂。
          </p>

          <div className="hero-opening__actions mt-6 flex flex-wrap items-center gap-3">
            <a 
              href="#work" 
              className="group inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3 text-sm font-medium text-ink transition-all duration-300 hover:bg-ember"
            >
              查看作品
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-7 py-3 text-sm font-medium text-paper transition-all duration-300 hover:border-paper hover:bg-paper/10"
            >
              联系我
            </a>
            <a 
              href="/files/resume.pdf" 
              className="inline-flex items-center gap-2 rounded-full border border-paper/15 px-7 py-3 text-sm font-medium text-paper/60 transition-all duration-300 hover:border-paper hover:text-paper"
            >
              简历
            </a>
          </div>
        </div>

        <div className="hero-opening__meta absolute bottom-6 left-6 font-mono text-[8px] uppercase tracking-[0.2em] text-paper/30">
          <p>录制 / CHIN_001</p>
          <p className="mt-1">24 帧 / 4K / 调色</p>
        </div>

        <div className="hero-opening__meta absolute bottom-6 right-6 font-mono text-[8px] uppercase tracking-[0.2em] text-paper/30 text-right">
          <p>纪录片 / 品牌短片</p>
          <p className="mt-1">郑州 / 中国</p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <MotionSystem />
      <Header />
      <HomeHero />
      <ImmersiveLaptop />
      <FeaturedWorks />
      <AigcSection />
      <AboutSection />
      <CapabilitiesSection />
      <ClientsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
