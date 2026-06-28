export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-10">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-lg font-medium tracking-[0.12em] text-paper">CHIN / 张秦</p>
          <p className="mt-3 text-sm text-muted">纪录片摄影师 / 导演</p>
          <p className="mt-6 text-xs text-paper/45">© 2026 张秦。保留所有权利。</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted" aria-label="页脚导航">
          <a className="focus-ring transition hover:text-paper" href="mailto:1361357017@qq.com">
            邮箱
          </a>
          <a className="focus-ring transition hover:text-paper" href="tel:19900921099">
            电话
          </a>
          <a className="focus-ring transition hover:text-paper" href="#top">
            回到顶部
          </a>
        </nav>
      </div>
    </footer>
  );
}
