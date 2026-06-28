export type AigcVideo = {
  slug: string;
  title: string;
  prompt: string;
  videoUrl: string;
  poster?: string;
  year: string;
  tags: string[];
};

import { videoUrl } from "@/lib/media";

export const aigcVideos: AigcVideo[] = [
  {
    slug: "japanese-short-film",
    title: "日系小短片",
    prompt: "日系影像风格的 AI 短片实验，探索人物、氛围与轻叙事的生成影像表达。",
    videoUrl: videoUrl("https://player.bilibili.com/player.html?isOutside=true&aid=116828009400676&bvid=BV1C6Tu6HEN8&cid=39484066647&p=1"),
    year: "2026",
    tags: ["AIGC", "AI 影像", "日系风格"]
  },
  {
    slug: "glasses-ad",
    title: "眼镜广告",
    prompt: "以眼镜产品为核心的 AI 广告短片实验，探索产品质感、人物状态与商业氛围的生成表达。",
    videoUrl: videoUrl("https://player.bilibili.com/player.html?isOutside=true&aid=116828009467352&bvid=BV1A6Tu6pEGa&cid=39484132462&p=1"),
    year: "2026",
    tags: ["AIGC", "AI 广告", "产品短片"]
  },
  {
    slug: "ai-video-03",
    title: "AI 影像实验 03",
    prompt: "使用 AI 生成的品牌氛围片实验。",
    videoUrl: "",
    year: "2026",
    tags: ["AIGC", "品牌氛围", "AI 短片"]
  }
];
