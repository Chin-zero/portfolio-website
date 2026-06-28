const experiences = [
  {
    date: "2024.06 - 2026.03",
    timecode: "TC 00:01:24:06",
    title: "叙述方式｜摄像 & 编导",
    text: "主导商业视频项目全案，负责从创意策划、脚本撰写到现场拍摄执行的完整流程。曾为阿里巴巴、支付宝、滴滴出行、吉利汽车、米村拌饭等品牌提供视频解决方案，涵盖品牌宣传片、TVC 广告及社交媒体短片。"
  },
  {
    date: "2023.04 - 2024.05",
    timecode: "TC 00:00:43:12",
    title: "郑州天中画室｜新媒体视频负责人",
    text: "负责画室新媒体视频内容的策划、拍摄与剪辑，主导制作招生宣传片、教学口播、学生活动纪实、画室开放日等内容。独立完成大型外出写生活动影像记录，结合无人机航拍与地面机位，高效产出纪实与宣传素材。"
  }
];

export default function ExperienceSection() {
  return (
    <section data-motion-section className="motion-section border-t border-white/10 bg-ink py-24 md:py-36">
      <div className="section-shell grid gap-12 md:grid-cols-[.62fr_1fr]">
        <div data-motion-heading>
          <p className="section-kicker">项目经历</p>
          <h2 className="section-title">现场拍摄、品牌影像与纪录片实践。</h2>
        </div>

        <div data-motion-copy>
          <div className="space-y-0 border-t border-white/10">
            {experiences.map((item) => (
              <article key={item.date} data-motion-item className="group grid gap-4 border-b border-white/10 py-8 md:grid-cols-[180px_1fr]">
                <div>
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">{item.timecode}</p>
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-ember/55 transition group-hover:bg-ember" />
                    <time className="text-sm text-ember">{item.date}</time>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-paper">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted md:text-base md:leading-8">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
