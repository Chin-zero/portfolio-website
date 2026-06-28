"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export default function ResumeLanyard() {
  const rootRef = useRef<HTMLAnchorElement>(null);
  const cordRef = useRef<SVGPathElement>(null);
  const stateRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    dragging: false,
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    moved: false
  });

  useEffect(() => {
    const root = rootRef.current;
    const cord = cordRef.current;
    if (!root || !cord) return;

    let frame = 0;
    let lastTime = performance.now();

    const updateView = () => {
      const state = stateRef.current;
      const width = root.clientWidth;
      const anchorX = width / 2;
      const baseEndY = width < 110 ? 72 : 92;
      const clipX = state.x * 0.36;
      const clipY = state.y * 0.54;
      const endX = anchorX + clipX;
      const endY = baseEndY + clipY;
      const midX = anchorX + state.x * 0.2;
      const midY = (width < 110 ? 34 : 42) + Math.max(0, state.y * 0.2);
      const rotation = clamp(state.x * 0.1 + state.vx * 0.018, -16, 16);
      const tiltX = clamp(-state.y * 0.035 - state.vy * 0.003, -10, 10);
      const tiltY = clamp(state.x * 0.08 + state.vx * 0.006, -12, 12);

      root.style.setProperty("--lanyard-x", `${state.x.toFixed(2)}px`);
      root.style.setProperty("--lanyard-y", `${state.y.toFixed(2)}px`);
      root.style.setProperty("--clip-x", `${clipX.toFixed(2)}px`);
      root.style.setProperty("--clip-y", `${clipY.toFixed(2)}px`);
      root.style.setProperty("--lanyard-rotate", `${rotation.toFixed(2)}deg`);
      root.style.setProperty("--lanyard-tilt-x", `${tiltX.toFixed(2)}deg`);
      root.style.setProperty("--lanyard-tilt-y", `${tiltY.toFixed(2)}deg`);
      cord.ownerSVGElement?.setAttribute("viewBox", `0 0 ${width} 132`);
      cord.setAttribute("d", `M ${anchorX} 0 C ${anchorX - 22} ${midY}, ${midX - 18} ${midY}, ${endX} ${endY}`);
    };

    const tick = (time: number) => {
      const state = stateRef.current;
      const dt = Math.min((time - lastTime) / 1000, 0.032);
      lastTime = time;

      if (!state.dragging) {
        const spring = 16;
        const damping = 3.8;
        const gravity = 980;
        const restY = 18;
        const ax = -state.x * spring - state.vx * damping;
        const ay = -(state.y - restY) * spring + gravity * 0.34 - state.vy * damping;

        state.vx += ax * dt;
        state.vy += ay * dt;
        state.x += state.vx * dt;
        state.y += state.vy * dt;

        if (Math.abs(state.x) < 0.01 && Math.abs(state.vx) < 0.01) {
          state.x = 0;
          state.vx = 0;
        }
      }

      updateView();
      frame = requestAnimationFrame(tick);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      const state = stateRef.current;
      state.dragging = true;
      state.pointerX = event.clientX;
      state.pointerY = event.clientY;
      state.startX = event.clientX;
      state.startY = event.clientY;
      state.vx = 0;
      state.vy = 0;
      state.moved = false;
      root.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      const state = stateRef.current;
      if (!state.dragging) return;
      const dx = event.clientX - state.pointerX;
      const dy = event.clientY - state.pointerY;
      const totalDx = event.clientX - state.startX;
      const totalDy = event.clientY - state.startY;
      state.x = clamp(state.x + dx, -140, 140);
      state.y = clamp(state.y + dy, -60, 160);
      state.vx = dx * 72;
      state.vy = dy * 72;
      state.pointerX = event.clientX;
      state.pointerY = event.clientY;
      state.moved = state.moved || Math.hypot(totalDx, totalDy) > 6;
      updateView();
    };

    const onPointerUp = (event: PointerEvent) => {
      stateRef.current.dragging = false;
      if (root.hasPointerCapture(event.pointerId)) root.releasePointerCapture(event.pointerId);
    };

    const onResize = () => updateView();

    updateView();
    frame = requestAnimationFrame(tick);
    root.addEventListener("pointerdown", onPointerDown);
    root.addEventListener("pointermove", onPointerMove);
    root.addEventListener("pointerup", onPointerUp);
    root.addEventListener("pointercancel", onPointerUp);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      root.removeEventListener("pointerdown", onPointerDown);
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerup", onPointerUp);
      root.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <a
      ref={rootRef}
      href="/files/resume.pdf"
      className="resume-lanyard focus-ring"
      aria-label="打开张秦简历"
      onClick={(event) => {
        if (!stateRef.current.moved) return;
        event.preventDefault();
        stateRef.current.moved = false;
      }}
    >
      <svg className="resume-lanyard__cord" viewBox="0 0 118 132" preserveAspectRatio="none" aria-hidden="true">
        <path ref={cordRef} />
      </svg>
      <span className="resume-lanyard__clip" aria-hidden="true" />
      <span className="resume-lanyard__card">
        <span className="resume-lanyard__slot" aria-hidden="true" />
        <span className="resume-lanyard__media">
          <Image src="/images/portrait/portrait.jpg" alt="" fill sizes="96px" className="object-cover grayscale" />
        </span>
        <span className="resume-lanyard__content">
          <span className="resume-lanyard__eyebrow">简历</span>
          <span className="resume-lanyard__name">张秦</span>
          <span className="resume-lanyard__role">导演 / 摄影师</span>
        </span>
      </span>
    </a>
  );
}
