export type Work = {
  slug: string;
  title: string;
  client: string;
  category: string;
  role: string[];
  year: string;
  cover: string;
  videoUrl: string;
  description: string;
  tags: string[];
};

import { videoUrl } from "@/lib/media";

export const works: Work[] = [
  {
    slug: "under-the-hanging-lake",
    title: "悬湖之下",
    client: "海康威视",
    category: "纪录片 / 品牌短片",
    role: ["摄影", "现场执行"],
    year: "2025",
    cover: "/images/works/under-the-hanging-lake-cover.png",
    videoUrl: videoUrl("https://player.xinpianchang.com/?aid=13520309&mid=bKG8Qd32Xb54RJMy"),
    description: "以高海拔自然环境、人物探索与真实行动为核心的品牌纪录短片。",
    tags: ["纪录片", "品牌短片", "户外"]
  },
  {
    slug: "echoes-of-yiming",
    title: "衣明的回响",
    client: "吉利",
    category: "纪录片 / 品牌故事",
    role: ["摄影", "影像创作"],
    year: "2025",
    cover: "/images/works/echoes-of-yiming-cover.png",
    videoUrl: videoUrl("https://player.xinpianchang.com/?aid=13367650&mid=dkzZQK0pM037vNVe"),
    description: "围绕人物、运动与情感展开的品牌纪录短片，强调真实人物与情绪表达。",
    tags: ["纪录片", "人物故事", "真实人物"]
  },
  {
    slug: "mobile-hospital",
    title: "车轮上的巡回医院",
    client: "吉利",
    category: "纪录片 / 公益影像",
    role: ["摄影", "航拍", "现场执行"],
    year: "2025",
    cover: "/images/works/mobile-hospital-cover.jpg",
    videoUrl: videoUrl("https://player.xinpianchang.com/?aid=13424882&mid=n2k9QAmVGoeQ18MZ"),
    description: "以公路、车辆与公益行动为主线的纪录短片，展现大场景调度与纪实表达能力。",
    tags: ["纪录片", "航拍", "公益"]
  },
  {
    slug: "zeekr-8x",
    title: "ZEEKR 8X 抛飞机载人故事",
    client: "吉利",
    category: "商业影像 / 品牌短片",
    role: ["摄影", "现场执行"],
    year: "2025",
    cover: "/images/works/zeekr-8x-cover.png",
    videoUrl: videoUrl("https://player.xinpianchang.com/?aid=13671059&mid=yM1l43LEVgpQod2V"),
    description: "结合车辆、飞机与真实测试场景的商业影像项目，强调速度、力量与技术感。",
    tags: ["商业影像", "汽车", "技术感"]
  },
  {
    slug: "corn-journey",
    title: "一粒玉米的旅程",
    client: "米村拌饭",
    category: "商业影像 / 食品短片",
    role: ["摄影", "商业短片创作"],
    year: "2025",
    cover: "/images/works/corn-journey-cover.png",
    videoUrl: videoUrl("https://player.xinpianchang.com/?aid=13732123&mid=GmOEQG2kYbb418bn"),
    description: "从农田到餐桌的食品品牌短片，展现食材质感、自然光线与商业视觉表达。",
    tags: ["商业影像", "食品", "品牌内容"]
  },
  {
    slug: "ant-public-welfare",
    title: "蚂蚁公益 x 理想人声乐团",
    client: "蚂蚁公益",
    category: "公益影像 / 音乐影像",
    role: ["摄影", "影像创作"],
    year: "2025",
    cover: "/images/works/ant-public-welfare-cover.png",
    videoUrl: videoUrl("https://player.xinpianchang.com/?aid=13419691&mid=KdRx7b009jx4b2N3"),
    description: "结合公益、音乐、人物与舞台表达的影像项目，展现多场景拍摄与情绪表达能力。",
    tags: ["公益", "音乐", "人物"]
  },
  {
    slug: "ant-forest-spring-planting",
    title: "飞阅蚂蚁森林 春种篇",
    client: "蚂蚁森林",
    category: "公益影像 / 品牌短片",
    role: ["摄影", "影像创作"],
    year: "2025",
    cover: "/images/works/ant-forest-spring-planting-cover.png",
    videoUrl: videoUrl("https://player.xinpianchang.com/?aid=13368711&mid=xv5YwjnPEgxw60PX"),
    description: "围绕蚂蚁森林春种行动展开的公益品牌影像，以自然场景与行动记录呈现生态公益表达。",
    tags: ["公益", "自然", "品牌短片"]
  },
  {
    slug: "tianyi-day-and-night",
    title: "天一人的日与夜",
    client: "天一",
    category: "纪录片 / 品牌故事",
    role: ["摄影", "影像创作"],
    year: "2025",
    cover: "/images/works/tianyi-day-and-night-cover.png",
    videoUrl: videoUrl("https://player.xinpianchang.com/?aid=13368731&mid=dkzZQK0pV897vNVe"),
    description: "以真实人物的工作与生活节奏为线索，呈现日夜流转中的人物状态与品牌故事。",
    tags: ["纪录片", "人物", "故事"]
  },
  {
    slug: "our-babies",
    title: "我们和我们的宝贝",
    client: "公益项目",
    category: "纪录片 / 公益故事",
    role: ["摄影", "影像创作"],
    year: "2025",
    cover: "/images/works/our-babies-cover.png",
    videoUrl: videoUrl("https://player.xinpianchang.com/?aid=13369402&mid=yM1l43AxYel7od2V"),
    description: "围绕人物关系、陪伴与守护展开的纪实影像，呈现真实情感与公益叙事。",
    tags: ["纪录片", "公益", "人物"]
  },
  {
    slug: "mother-rescue",
    title: "一个妈妈的限时营救",
    client: "吉利",
    category: "纪录片 / 公益故事",
    role: ["摄影", "影像创作"],
    year: "2025",
    cover: "/images/works/mother-rescue-cover.png",
    videoUrl: videoUrl("https://player.xinpianchang.com/?aid=13368569&mid=DA96Qee1PGxQj5N0"),
    description: "以真实人物与家庭处境为核心的公益纪实短片，呈现现实困境中的行动、守护与情感力量。",
    tags: ["纪录片", "公益", "人物"]
  },
  {
    slug: "xingyi-dessert-shop",
    title: "星姨糖水铺",
    client: "星姨糖水铺",
    category: "商业影像 / 食品短片",
    role: ["摄影", "商业短片创作"],
    year: "2025",
    cover: "/images/works/xingyi-dessert-shop-cover.png",
    videoUrl: videoUrl("https://player.xinpianchang.com/?aid=13729987&mid=GmOEQG2eOKR418bn"),
    description: "围绕糖水铺空间、食物质感与日常烟火气展开的商业短片，呈现温暖、真实的品牌氛围。",
    tags: ["商业影像", "食品", "品牌内容"]
  }
];
