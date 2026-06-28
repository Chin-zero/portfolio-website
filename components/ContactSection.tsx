export default function ContactSection() {
  return (
    <section id="contact" data-motion-section className="motion-section border-t border-white/10 bg-soft py-24 md:py-36">
      <div className="section-shell grid gap-12 md:grid-cols-[1fr_.86fr] md:items-start">
        <div>
          <div data-motion-heading>
            <p className="section-kicker">联系我</p>
            <h2 className="section-title contact-title uppercase">Let&apos;s complete the next work together!</h2>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-paper/55">
            摄影师<br />张秦 / CHIN
          </p>
          <p data-motion-copy className="mt-8 max-w-2xl section-copy">
            如果你正在寻找一位能够参与前期策划、现场拍摄与后期交付的影像创作者，欢迎联系我。
          </p>
          <div data-motion-item className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:1361357017@qq.com"
              className="focus-ring rounded-full bg-paper px-7 py-3.5 text-center text-sm font-medium text-ink transition duration-300 hover:bg-ember"
            >
              发送邮件
            </a>
            <a
              href="/files/resume.pdf"
              className="focus-ring rounded-full border border-paper/20 px-7 py-3.5 text-center text-sm font-medium text-paper transition duration-300 hover:border-paper hover:bg-paper/10"
            >
              下载简历
            </a>
            <a
              href="/files/portfolio.pdf"
              className="focus-ring rounded-full border border-paper/20 px-7 py-3.5 text-center text-sm font-medium text-paper transition duration-300 hover:border-paper hover:bg-paper/10"
            >
              下载作品集
            </a>
          </div>
        </div>

        <div data-motion-item className="border border-white/10 bg-ink/45 p-6 md:p-8">
          <dl className="grid gap-7">
            <div className="border-b border-white/10 pb-6">
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted">姓名</dt>
              <dd className="mt-2 text-xl text-paper">张秦</dd>
            </div>
            <div className="border-b border-white/10 pb-6">
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted">职责</dt>
              <dd className="mt-2 text-xl text-paper">摄影师</dd>
            </div>
            <div className="border-b border-white/10 pb-6">
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted">所在地</dt>
              <dd className="mt-2 text-xl text-paper">郑州</dd>
            </div>
            <div className="border-b border-white/10 pb-6">
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted">邮箱</dt>
              <dd className="mt-2 text-xl text-paper">
                <a className="focus-ring transition hover:text-ember" href="mailto:1361357017@qq.com">
                  1361357017@qq.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted">电话</dt>
              <dd className="mt-2 text-xl text-paper">
                <a className="focus-ring transition hover:text-ember" href="tel:19900921099">19900921099</a>
              </dd>
            </div>
          </dl>
          <p className="mt-10 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40">
            片尾 / 感谢观看
          </p>
        </div>
      </div>
    </section>
  );
}
