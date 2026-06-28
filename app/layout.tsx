import type { Metadata } from "next";
import FilmGrain from "@/components/FilmGrain";
import FilmVignette from "@/components/FilmVignette";
import Grainient from "@/components/Grainient";
import "./globals.css";

export const metadata: Metadata = {
  title: "张秦 CHIN | 纪录片摄影师与导演",
  description:
    "张秦，纪录片摄影师、导演与商业影像创作者，专注纪录片、品牌短片、TVC、新媒体视频与商业影像创作。",
  keywords: [
    "张秦",
    "CHIN",
    "纪录片摄影师",
    "摄影师",
    "导演",
    "商业短片",
    "品牌影像",
    "郑州摄影师",
    "纪录片摄影师",
    "摄影指导"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <Grainient
          className="grainient-background"
          color1="#0A0A0A"
          color2="#2A1708"
          color3="#050505"
          timeSpeed={0.08}
          colorBalance={0.15}
          warpStrength={0.6}
          warpFrequency={3.5}
          warpSpeed={0.4}
          warpAmplitude={35}
          blendSoftness={0.35}
          rotationAmount={200}
          noiseScale={1.2}
          grainAmount={0.06}
          grainScale={1.5}
          grainAnimated={false}
          contrast={1.15}
          gamma={1.1}
          saturation={0.25}
          zoom={1.4}
        />
        {children}
        <FilmGrain />
        <FilmVignette />
      </body>
    </html>
  );
}
