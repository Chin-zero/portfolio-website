const capabilities = [
  {
    title: "纪录片叙事",
    cn: "纪录片叙事",
    text: "人物观察、真实情绪捕捉、故事结构、现场纪实表达。",
    meta: "ISO 800 / 24 帧 / 自然光"
  },
  {
    title: "商业影像创作",
    cn: "商业影像创作",
    text: "品牌短片、TVC、广告短片、新媒体视频内容。",
    meta: "4K / 25 帧 / 品牌短片"
  },
  {
    title: "摄影与视觉执行",
    cn: "摄影与视觉执行",
    text: "构图、运镜、布光、曝光控制、机位调度、航拍执行。",
    meta: "FX3 / A7M4 / MAVIC 4 PRO"
  },
  {
    title: "后期制作",
    cn: "后期制作",
    text: "剪辑、调色、声音处理、基础特效包装、AIGC 辅助创作与成片交付。",
    meta: "PR / AE / 达芬奇 / 调色"
  }
];

const workflow = [
  "创意策划",
  "脚本撰写",
  "现场拍摄",
  "航拍执行",
  "剪辑包装",
  "调色交付"
];

export default function CapabilitiesSection() {
  return (
    <section id="services" data-motion-section className="motion-section border-t border-white/10 bg-ink py-24 md:py-36">
      <div className="section-shell">
        <div className="mb-12 grid gap-6 md:grid-cols-[1fr_.8fr] md:items-end">
          <div data-motion-heading>
            <p className="section-kicker">服务能力</p>
            <h2 className="section-title">从创意到成片交付。</h2>
          </div>
          <p data-motion-copy className="section-copy md:max-w-md md:justify-self-end">
            从创意、脚本、拍摄到交付，保持影像表达与商业目标之间的清晰关系。
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <article key={item.title} data-motion-item className="group flex bg-ink p-6 transition duration-300 hover:bg-white/[0.06] md:min-h-64">
              <div className="flex min-h-full flex-col">
                <p className="text-xs uppercase tracking-[0.16em] text-ember">{item.title}</p>
                <h3 className="mt-5 text-2xl font-medium text-paper">{item.cn}</h3>
                <p className="mt-5 text-sm leading-7 text-muted">{item.text}</p>
                <p className="mt-auto pt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35 transition group-hover:text-white/55">
                  {item.meta}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-10">
          <h3 data-motion-item className="text-2xl font-medium text-paper md:text-3xl">项目流程</h3>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {workflow.map((item, index) => (
              <div key={item} data-motion-item className="flex items-center gap-5 border-b border-white/10 pb-4">
                <span className="text-sm text-ember">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm text-paper/85 md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
