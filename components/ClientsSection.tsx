const clients = [
  "支付宝",
  "蚂蚁森林",
  "吉利",
  "滴滴",
  "米村拌饭",
  "慕思",
  "海康威视",
  "浙江卫视",
  "百瑞信托",
  "1688",
  "网商银行",
  "阿里巴巴公益",
  "熊喵来了",
  "巴奴"
];

export default function ClientsSection() {
  return (
    <section id="clients" data-motion-section className="motion-section border-t border-white/10 bg-soft py-24 md:py-36">
      <div className="section-shell">
        <p data-motion-item className="section-kicker">合作客户</p>
        <div className="mt-5 grid gap-6 md:grid-cols-[.8fr_1fr] md:items-end">
          <h2 data-motion-heading className="section-title">曾合作过的品牌与机构。</h2>
          <p data-motion-copy className="section-copy md:max-w-md md:justify-self-end">
            与品牌方、公益组织、媒体平台及商业团队合作，完成从品牌叙事到新媒体传播的多类型影像项目。
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client}
              data-motion-item
              className="flex min-h-28 items-center justify-center border-b border-r border-white/10 px-4 text-center text-lg text-muted transition duration-300 hover:bg-white/[0.04] hover:text-paper md:min-h-36 md:text-2xl"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
