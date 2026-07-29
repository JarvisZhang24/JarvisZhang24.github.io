export type Locale = "en" | "zh";

type Project = {
  index: string;
  title: string;
  field: string;
  description: string;
  result: string;
  href?: string;
  linkLabel?: string;
};

type Experience = {
  years: string;
  institution: string;
  degree: string;
  place: string;
};

export type PageContent = {
  locale: Locale;
  htmlLang: string;
  localeLabel: string;
  alternateLabel: string;
  alternatePath: string;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    research: string;
    work: string;
    journey: string;
    contact: string;
    skip: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    statement: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    role: string;
    institution: string;
    photoCaption: string;
  };
  about: {
    kicker: string;
    heading: string;
    paragraphs: string[];
    noteLabel: string;
    note: string;
  };
  research: {
    kicker: string;
    heading: string;
    intro: string;
    items: Array<{
      index: string;
      title: string;
      description: string;
    }>;
  };
  work: {
    kicker: string;
    heading: string;
    intro: string;
    projects: Project[];
    viewProject: string;
  };
  journey: {
    kicker: string;
    heading: string;
    educationLabel: string;
    experiences: Experience[];
  };
  contact: {
    kicker: string;
    heading: string;
    intro: string;
    email: string;
  };
  footer: {
    note: string;
    backToTop: string;
  };
};

export const siteContent: Record<Locale, PageContent> = {
  en: {
    locale: "en",
    htmlLang: "en",
    localeLabel: "EN",
    alternateLabel: "中文",
    alternatePath: "/zh/",
    meta: {
      title: "Yichen Zhang — Generative AI Researcher",
      description:
        "Yichen Zhang is a research student at Osaka University working on generative AI for drug discovery, biological foundation models, and multimodal intelligence.",
    },
    nav: {
      about: "About",
      research: "Research",
      work: "Work",
      journey: "Journey",
      contact: "Contact",
      skip: "Skip to content",
    },
    hero: {
      eyebrow: "Researcher · Osaka, Japan",
      name: "Yichen Zhang.",
      statement: "Building generative systems for scientific discovery.",
      intro:
        "I study how foundation models can design molecules and biological sequences while staying grounded in scientific constraints.",
      primaryCta: "Selected work",
      secondaryCta: "About me",
      role: "Research Student",
      institution: "Osaka University",
      photoCaption: "San Francisco · 2026",
    },
    about: {
      kicker: "01 · About",
      heading: "A path from quantitative thinking to intelligent discovery.",
      paragraphs: [
        "I am a research student at Osaka University, preparing for doctoral study in generative AI for drug discovery. My work focuses on using generative and foundation models to design molecules and biological sequences.",
        "My route into AI began in finance, where quantitative models first showed me how computation can reveal hidden structure. During my master’s at NYU, I moved deeper into engineering and machine learning—building multimodal systems and genomic foundation-model pipelines. That transition shaped the question I work on now: how can generative intelligence accelerate scientific progress?",
      ],
      noteLabel: "Currently",
      note:
        "Exploring controllable molecular generation, biological representation learning, and reliable evaluation for AI-designed candidates.",
    },
    research: {
      kicker: "02 · Research",
      heading: "Intelligence shaped by scientific constraints.",
      intro:
        "Three connected directions guide my current work—from learning biological structure to generating useful candidates.",
      items: [
        {
          index: "01",
          title: "Generative AI for Drug Discovery",
          description:
            "Controllable molecular generation, scaffold-aware design, and evaluation methods for useful chemical candidates.",
        },
        {
          index: "02",
          title: "Biological Foundation Models",
          description:
            "Long-context models for genomic sequences, variant analysis, and representations that transfer across biological tasks.",
        },
        {
          index: "03",
          title: "Multimodal Intelligence",
          description:
            "Vision-language systems that turn complex inputs into reliable, structured, and machine-readable outputs.",
        },
      ],
    },
    work: {
      kicker: "03 · Selected Work",
      heading: "Research through building.",
      intro:
        "A selection of projects spanning AI for science, multimodal learning, and compute-aware reasoning.",
      viewProject: "View project",
      projects: [
        {
          index: "01",
          title: "GeneLM—Evo2",
          field: "AI for Science · Genomics",
          description:
            "A zero-shot genomic variant scoring workflow built around the Evo2 biological foundation model.",
          result:
            "H100 inference, long-context likelihood scoring, and ClinVar-based evaluation across reference genomes.",
          href: "https://github.com/JarvisZhang24/GeneLM-Evo2",
          linkLabel: "GitHub",
        },
        {
          index: "02",
          title: "Schema-Constrained VLM",
          field: "Multimodal AI · Structured Generation",
          description:
            "Fine-tuning a compact vision-language model to produce deterministic, schema-valid food understanding.",
          result:
            "1,500 instruction samples, parameter-efficient SFT, and a reproducible validation pipeline.",
          href: "https://github.com/JarvisZhang24/llm-fine-tune-jarvis",
          linkLabel: "GitHub",
        },
        {
          index: "03",
          title: "Tiny Recursive Models",
          field: "Reasoning · Efficiency",
          description:
            "A compute-aware study of recursive reasoning and adaptive computation on Sudoku-Extreme.",
          result:
            "Characterized an overthinking regime and identified a stronger shallow fixed-budget configuration.",
        },
        {
          index: "04",
          title: "IL-10 Optimal Control",
          field: "Control Systems · Immunology",
          description:
            "A continuous-time model of immune modulation under physiological noise.",
          result:
            "Designed and evaluated a Kalman filter with an LQR controller in MATLAB and Simulink.",
        },
      ],
    },
    journey: {
      kicker: "04 · Journey",
      heading: "An interdisciplinary route into AI research.",
      educationLabel: "Education",
      experiences: [
        {
          years: "2026—",
          institution: "Osaka University",
          degree: "Research Student · Pre-doctoral",
          place: "Osaka, Japan",
        },
        {
          years: "2024—26",
          institution: "New York University",
          degree: "M.S. in Computer Engineering",
          place: "New York, USA",
        },
        {
          years: "2021—23",
          institution: "Beijing Jiaotong University",
          degree: "B.S. in Communication Engineering",
          place: "Beijing, China",
        },
        {
          years: "2017—21",
          institution: "Beijing Normal University, Zhuhai",
          degree: "B.S. in Finance",
          place: "Zhuhai, China",
        },
      ],
    },
    contact: {
      kicker: "05 · Contact",
      heading: "Let’s make useful ideas move.",
      intro:
        "I am open to research conversations and collaborations across generative AI and the life sciences.",
      email: "Start a conversation",
    },
    footer: {
      note: "Designed and built with care in Osaka.",
      backToTop: "Back to top",
    },
  },
  zh: {
    locale: "zh",
    htmlLang: "zh-CN",
    localeLabel: "中文",
    alternateLabel: "EN",
    alternatePath: "/",
    meta: {
      title: "Yichen Zhang — 生成式人工智能研究",
      description:
        "Yichen Zhang 现于大阪大学从事生成式人工智能研究，关注 AI 药物发现、生物基础模型与多模态智能。",
    },
    nav: {
      about: "关于",
      research: "研究",
      work: "项目",
      journey: "经历",
      contact: "联系",
      skip: "跳至正文",
    },
    hero: {
      eyebrow: "研究者 · 日本大阪",
      name: "Yichen Zhang.",
      statement: "构建服务于科学发现的生成式智能。",
      intro:
        "我关注如何让基础模型在科学约束下，设计分子与生物序列，并产出真正有意义的候选方案。",
      primaryCta: "精选项目",
      secondaryCta: "了解我",
      role: "研究生",
      institution: "大阪大学",
      photoCaption: "旧金山 · 2026",
    },
    about: {
      kicker: "01 · 关于",
      heading: "从量化思维出发，走向智能驱动的科学发现。",
      paragraphs: [
        "我目前是大阪大学的研究生，正在为生成式人工智能与药物发现方向的博士研究做准备。我的研究聚焦于用生成模型和基础模型设计分子与生物序列。",
        "我最初从金融领域接触量化模型，并由此看到计算方法揭示隐藏结构的力量。在纽约大学攻读硕士期间，我逐渐转向工程与机器学习，构建多模态系统和基因组基础模型流程。这段跨学科经历最终形成了我现在关注的问题：生成式智能如何真正加速科学进展？",
      ],
      noteLabel: "当前方向",
      note:
        "探索可控分子生成、生物表征学习，以及面向 AI 设计候选物的可靠评估方法。",
    },
    research: {
      kicker: "02 · 研究",
      heading: "让智能遵循科学约束。",
      intro:
        "当前工作由三个彼此关联的方向展开：理解生物结构、生成候选方案，并建立可靠的验证方式。",
      items: [
        {
          index: "01",
          title: "生成式 AI 与药物发现",
          description:
            "研究可控分子生成、基于骨架的设计，以及能够衡量候选化合物实用性的评估方法。",
        },
        {
          index: "02",
          title: "生物基础模型",
          description:
            "面向基因组序列、变异分析与跨任务生物表征学习的长上下文模型。",
        },
        {
          index: "03",
          title: "多模态智能",
          description:
            "将复杂视觉与语言输入转化为可靠、结构化、机器可读结果的多模态系统。",
        },
      ],
    },
    work: {
      kicker: "03 · 精选项目",
      heading: "在构建中推进研究。",
      intro:
        "以下项目覆盖科学智能、多模态学习与计算效率导向的推理研究。",
      viewProject: "查看项目",
      projects: [
        {
          index: "01",
          title: "GeneLM—Evo2",
          field: "科学智能 · 基因组学",
          description:
            "基于 Evo2 生物基础模型构建的零样本基因组变异评分流程。",
          result:
            "实现 H100 推理、长上下文似然评分，并基于 ClinVar 与参考基因组开展评估。",
          href: "https://github.com/JarvisZhang24/GeneLM-Evo2",
          linkLabel: "GitHub",
        },
        {
          index: "02",
          title: "Schema-Constrained VLM",
          field: "多模态 AI · 结构化生成",
          description:
            "微调紧凑型视觉语言模型，生成确定且符合 Schema 的食物理解结果。",
          result:
            "构建 1,500 条指令样本、参数高效微调方案与可复现验证流程。",
          href: "https://github.com/JarvisZhang24/llm-fine-tune-jarvis",
          linkLabel: "GitHub",
        },
        {
          index: "03",
          title: "Tiny Recursive Models",
          field: "推理 · 计算效率",
          description:
            "在 Sudoku-Extreme 上研究递归推理与自适应计算的效率边界。",
          result:
            "识别过度思考现象，并找到表现更优的浅层固定预算结构。",
        },
        {
          index: "04",
          title: "IL-10 Optimal Control",
          field: "控制系统 · 免疫学",
          description:
            "在生理噪声下建立免疫调节的连续时间控制模型。",
          result:
            "在 MATLAB 与 Simulink 中设计并评估卡尔曼滤波与 LQR 控制器。",
        },
      ],
    },
    journey: {
      kicker: "04 · 经历",
      heading: "一条跨学科的人工智能研究路径。",
      educationLabel: "教育经历",
      experiences: [
        {
          years: "2026—",
          institution: "大阪大学",
          degree: "研究生 · 博士预备阶段",
          place: "日本大阪",
        },
        {
          years: "2024—26",
          institution: "纽约大学",
          degree: "计算机工程硕士",
          place: "美国纽约",
        },
        {
          years: "2021—23",
          institution: "北京交通大学",
          degree: "通信工程学士",
          place: "中国北京",
        },
        {
          years: "2017—21",
          institution: "北京师范大学珠海分校",
          degree: "金融学学士",
          place: "中国珠海",
        },
      ],
    },
    contact: {
      kicker: "05 · 联系",
      heading: "让有价值的想法流动起来。",
      intro:
        "欢迎围绕生成式人工智能、生命科学与跨学科研究进行交流与合作。",
      email: "发起对话",
    },
    footer: {
      note: "于大阪，认真设计与构建。",
      backToTop: "回到顶部",
    },
  },
};
