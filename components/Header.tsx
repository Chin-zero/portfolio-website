"use client";

import { useState } from "react";
import ResumeLanyard from "@/components/ResumeLanyard";

const navItems = [
  { label: "作品", href: "#work" },
  { label: "AIGC", href: "#aigc" },
  { label: "关于", href: "#about" },
  { label: "服务", href: "#services" },
  { label: "客户", href: "#clients" },
  { label: "联系", href: "#contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <ResumeLanyard />
      <div className="section-shell flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="focus-ring text-sm font-medium tracking-[0.14em] text-paper">
          张秦
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="主导航">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring text-sm text-muted transition-colors duration-300 hover:text-paper"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="focus-ring rounded-full border border-paper/20 px-5 py-2 text-sm text-paper transition duration-300 hover:border-ember hover:bg-ember hover:text-ink"
          >
            一起创作
          </a>
        </nav>

        <button
          type="button"
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/15 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="打开菜单"
        >
          <span className="relative h-3.5 w-5">
            <span className={`absolute left-0 top-0 h-px w-5 bg-paper transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-px w-5 bg-paper transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[14px] h-px w-5 bg-paper transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-ink/95 md:hidden">
          <nav className="section-shell flex flex-col gap-1 py-4" aria-label="移动端导航">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring py-3 text-lg text-paper"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="focus-ring mt-3 rounded-full bg-paper px-5 py-3 text-center text-sm font-medium text-ink"
            >
              一起创作
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
