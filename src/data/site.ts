export type Locale = "en" | "zh";

/**
 * Shared, locale-independent identity. Set `cv` or `scholar` to a real URL and
 * the corresponding link appears automatically in the header and profile row.
 */
export const profile = {
  email: "z.yichen@outlook.com",
  github: "https://github.com/JarvisZhang24",
  linkedin: "https://www.linkedin.com/in/yichen-zhang-a0077b2b3",
  cv: "" as string,
  scholar: "" as string,
  /** Files in `public` are served from the site root. */
  portrait: "/images/InkPunk.png",
} as const;

type Fact = {
  label: string;
  value: string;
};

type ResearchArea = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

type Project = {
  id: string;
  title: string;
  field: string;
  description: string;
  outcome: string;
  tags: string[];
  href?: string;
  linkLabel?: string;
};

type Publication = {
  authors: string;
  title: string;
  venue: string;
  href?: string;
};

type Education = {
  years: string;
  institution: string;
  degree: string;
  place: string;
};

type ToolkitGroup = {
  label: string;
  items: string[];
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
    projects: string;
    education: string;
    writing: string;
    contact: string;
    skip: string;
    theme: string;
  };
  profile: {
    name: string;
    monogram: string;
    role: string;
    affiliation: string;
    tagline: string;
    bio: string[];
    status: string;
    facts: Fact[];
    emailLabel: string;
    cvLabel: string;
    scholarLabel: string;
  };
  sections: {
    about: string;
    research: string;
    projects: string;
    writing: string;
    publications: string;
    education: string;
    toolkit: string;
    contact: string;
  };
  blog: {
    meta: {
      title: string;
      description: string;
    };
    title: string;
    lead: string;
    empty: string;
    homeLead: string;
    viewAll: string;
    backToIndex: string;
    minutesLabel: string;
    draftLabel: string;
    updatedLabel: string;
    newer: string;
    older: string;
  };
  research: {
    lead: string;
    areas: ResearchArea[];
  };
  projects: {
    lead: string;
    viewProject: string;
    items: Project[];
  };
  publications: {
    lead: string;
    items: Publication[];
  };
  education: {
    lead: string;
    items: Education[];
  };
  toolkit: {
    lead: string;
    groups: ToolkitGroup[];
  };
  contact: {
    lead: string;
    cta: string;
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
      title: "Yichen Zhang — Generative AI for Scientific Discovery",
      description:
        "Yichen Zhang is a research student at Osaka University working on generative AI for drug discovery, biological foundation models, and multimodal intelligence.",
    },
    nav: {
      about: "About",
      research: "Research",
      projects: "Projects",
      education: "Education",
      writing: "Writing",
      contact: "Contact",
      skip: "Skip to content",
      theme: "Toggle colour theme",
    },
    profile: {
      name: "Yichen Zhang",
      monogram: "YZ",
      role: "Research Student",
      affiliation: "Osaka University",
      tagline:
        "Generative models for molecules, genomes, and scientific discovery.",
      bio: [
        "I am a research student at Osaka University preparing for doctoral work in generative AI for drug discovery. I build generative and foundation models for molecules and biological sequences under real scientific constraints.",
        "My path into AI began in finance and continued through computer engineering at NYU, where I worked on multimodal systems and genomic foundation models. It shaped the question I pursue now: how can generative intelligence make scientific discovery faster and more reliable?",
      ],
      status:
        "Open to doctoral positions and research collaborations in generative AI for the life sciences.",
      facts: [
        { label: "Based in", value: "Osaka, Japan" },
        { label: "Focus", value: "Generative AI for Science" },
        { label: "Previously", value: "NYU · M.S. Computer Engineering" },
      ],
      emailLabel: "Email",
      cvLabel: "CV",
      scholarLabel: "Scholar",
    },
    sections: {
      about: "About",
      research: "Research Interests",
      projects: "Selected Projects",
      writing: "Writing",
      publications: "Publications",
      education: "Education",
      toolkit: "Toolkit",
      contact: "Contact",
    },
    blog: {
      meta: {
        title: "Writing — Yichen Zhang",
        description:
          "Notes on generative AI for scientific discovery, biological foundation models, and the engineering behind them.",
      },
      title: "Writing",
      lead: "Notes on generative models, biological data, and the engineering it takes to make them useful.",
      empty: "No posts published yet — the first notes are on their way.",
      homeLead: "Recent notes from the lab notebook.",
      viewAll: "All posts",
      backToIndex: "All writing",
      minutesLabel: "min read",
      draftLabel: "Draft",
      updatedLabel: "Updated",
      newer: "Newer",
      older: "Older",
    },
    research: {
      lead: "Three connected directions — from learning biological structure to generating candidates that hold up under evaluation.",
      areas: [
        {
          id: "01",
          title: "Generative AI for Drug Discovery",
          description:
            "Controllable molecular generation, scaffold-aware design, and evaluation that measures whether a candidate is actually useful.",
          tags: ["Molecular generation", "Scaffold-aware design", "Evaluation"],
        },
        {
          id: "02",
          title: "Biological Foundation Models",
          description:
            "Long-context models for genomic sequences, variant effect analysis, and representations that transfer across biological tasks.",
          tags: ["Genomics", "Long context", "Variant effect"],
        },
        {
          id: "03",
          title: "Multimodal Intelligence",
          description:
            "Vision-language systems that turn complex inputs into reliable, structured, machine-readable output.",
          tags: ["Vision-language", "Structured output", "Fine-tuning"],
        },
      ],
    },
    projects: {
      lead: "Research through building — across AI for science, multimodal learning, and compute-aware reasoning.",
      viewProject: "View project",
      items: [
        {
          id: "01",
          title: "GeneLM · Evo2",
          field: "AI for Science · Genomics",
          description:
            "A zero-shot genomic variant scoring workflow built around the Evo2 biological foundation model.",
          outcome:
            "Long-context likelihood scoring on H100, evaluated against ClinVar across reference genomes.",
          tags: ["Evo2", "Genomics", "H100", "ClinVar"],
          href: "https://github.com/JarvisZhang24/GeneLM-Evo2",
          linkLabel: "GitHub",
        },
        {
          id: "02",
          title: "Schema-Constrained VLM",
          field: "Multimodal AI · Structured Generation",
          description:
            "Fine-tuning a compact vision-language model to produce deterministic, schema-valid food understanding.",
          outcome:
            "1,500 instruction samples, parameter-efficient SFT, and a reproducible validation pipeline.",
          tags: ["Vision-language", "PEFT", "JSON Schema"],
          href: "https://github.com/JarvisZhang24/llm-fine-tune-jarvis",
          linkLabel: "GitHub",
        },
        {
          id: "03",
          title: "Tiny Recursive Models",
          field: "Reasoning · Efficiency",
          description:
            "A compute-aware study of recursive reasoning and adaptive computation on Sudoku-Extreme.",
          outcome:
            "Characterised an overthinking regime and identified a stronger shallow fixed-budget configuration.",
          tags: ["Recursive reasoning", "Ablation study", "Efficiency"],
        },
        {
          id: "04",
          title: "IL-10 Optimal Control",
          field: "Control Systems · Immunology",
          description:
            "A continuous-time model of immune modulation under physiological noise.",
          outcome:
            "Designed and evaluated a Kalman filter with an LQR controller in MATLAB and Simulink.",
          tags: ["Kalman filter", "LQR", "MATLAB", "Simulink"],
        },
      ],
    },
    publications: {
      lead: "Manuscripts in preparation.",
      items: [],
    },
    education: {
      lead: "An interdisciplinary route into AI research.",
      items: [
        {
          years: "2026 —",
          institution: "Osaka University",
          degree: "Research Student · Pre-doctoral",
          place: "Osaka, Japan",
        },
        {
          years: "2024 — 26",
          institution: "New York University",
          degree: "M.S. in Computer Engineering",
          place: "New York, USA",
        },
        {
          years: "2021 — 23",
          institution: "Beijing Jiaotong University",
          degree: "B.S. in Communication Engineering",
          place: "Beijing, China",
        },
        {
          years: "2017 — 21",
          institution: "Beijing Normal University, Zhuhai",
          degree: "B.S. in Finance",
          place: "Zhuhai, China",
        },
      ],
    },
    toolkit: {
      lead: "Tools I reach for most often.",
      groups: [
        {
          label: "Modelling",
          items: ["PyTorch", "Hugging Face", "LoRA / PEFT", "Transformers"],
        },
        {
          label: "Scientific",
          items: ["Evo2", "ClinVar", "Sequence analysis", "MATLAB / Simulink"],
        },
        {
          label: "Systems",
          items: ["Python", "CUDA · H100", "Git", "Linux"],
        },
      ],
    },
    contact: {
      lead: "I am glad to talk about doctoral opportunities, research collaborations, or anything at the intersection of generative AI and the life sciences.",
      cta: "Write to me",
    },
    footer: {
      note: "Built with Astro in Osaka.",
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
      title: "Yichen Zhang — 面向科学发现的生成式人工智能",
      description:
        "Yichen Zhang 现于大阪大学从事生成式人工智能研究，关注 AI 药物发现、生物基础模型与多模态智能。",
    },
    nav: {
      about: "关于",
      research: "研究方向",
      projects: "项目",
      education: "教育经历",
      writing: "写作",
      contact: "联系",
      skip: "跳至正文",
      theme: "切换配色主题",
    },
    profile: {
      name: "Yichen Zhang",
      monogram: "YZ",
      role: "研究生",
      affiliation: "大阪大学",
      tagline: "用生成模型理解分子、基因组，并加速科学发现。",
      bio: [
        "我目前在大阪大学为生成式人工智能与药物发现方向的博士研究做准备，关注能在真实科学约束下设计分子与生物序列的生成模型与基础模型。",
        "我从金融与量化建模进入人工智能，并在纽约大学攻读计算机工程硕士期间转向多模态系统和基因组基础模型。现在我关注的问题是：生成式智能如何让科学发现更快、更可靠？",
      ],
      status: "正在寻找生成式人工智能与生命科学交叉方向的博士机会与研究合作。",
      facts: [
        { label: "所在地", value: "日本 · 大阪" },
        { label: "研究方向", value: "面向科学的生成式 AI" },
        { label: "此前", value: "纽约大学 · 计算机工程硕士" },
      ],
      emailLabel: "邮箱",
      cvLabel: "简历",
      scholarLabel: "学术主页",
    },
    sections: {
      about: "关于",
      research: "研究方向",
      projects: "精选项目",
      writing: "写作",
      publications: "论文",
      education: "教育经历",
      toolkit: "技术栈",
      contact: "联系",
    },
    blog: {
      meta: {
        title: "写作 — Yichen Zhang",
        description:
          "关于面向科学发现的生成式人工智能、生物基础模型，以及背后工程实现的记录。",
      },
      title: "写作",
      lead: "关于生成模型、生物数据，以及让它们真正可用所需要的工程细节的记录。",
      empty: "还没有公开的文章，第一篇正在路上。",
      homeLead: "最近的研究笔记。",
      viewAll: "全部文章",
      backToIndex: "全部文章",
      minutesLabel: "分钟阅读",
      draftLabel: "草稿",
      updatedLabel: "更新于",
      newer: "更新的",
      older: "更早的",
    },
    research: {
      lead: "三个彼此关联的方向：从理解生物结构，到生成经得起验证的候选方案。",
      areas: [
        {
          id: "01",
          title: "生成式 AI 与药物发现",
          description:
            "研究可控分子生成、基于骨架的设计，以及能真正衡量候选化合物是否有用的评估方法。",
          tags: ["分子生成", "骨架感知设计", "评估方法"],
        },
        {
          id: "02",
          title: "生物基础模型",
          description:
            "面向基因组序列、变异效应分析与跨任务生物表征学习的长上下文模型。",
          tags: ["基因组学", "长上下文", "变异效应"],
        },
        {
          id: "03",
          title: "多模态智能",
          description:
            "将复杂视觉与语言输入转化为可靠、结构化、机器可读结果的多模态系统。",
          tags: ["视觉语言模型", "结构化输出", "模型微调"],
        },
      ],
    },
    projects: {
      lead: "在构建中推进研究，覆盖科学智能、多模态学习与计算效率导向的推理。",
      viewProject: "查看项目",
      items: [
        {
          id: "01",
          title: "GeneLM · Evo2",
          field: "科学智能 · 基因组学",
          description: "基于 Evo2 生物基础模型构建的零样本基因组变异评分流程。",
          outcome:
            "在 H100 上实现长上下文似然评分，并基于 ClinVar 与参考基因组完成评估。",
          tags: ["Evo2", "基因组学", "H100", "ClinVar"],
          href: "https://github.com/JarvisZhang24/GeneLM-Evo2",
          linkLabel: "GitHub",
        },
        {
          id: "02",
          title: "Schema-Constrained VLM",
          field: "多模态 AI · 结构化生成",
          description:
            "微调紧凑型视觉语言模型，生成确定且符合 Schema 的食物理解结果。",
          outcome: "构建 1,500 条指令样本、参数高效微调方案与可复现验证流程。",
          tags: ["视觉语言模型", "PEFT", "JSON Schema"],
          href: "https://github.com/JarvisZhang24/llm-fine-tune-jarvis",
          linkLabel: "GitHub",
        },
        {
          id: "03",
          title: "Tiny Recursive Models",
          field: "推理 · 计算效率",
          description: "在 Sudoku-Extreme 上研究递归推理与自适应计算的效率边界。",
          outcome: "识别出过度思考现象，并找到表现更优的浅层固定预算结构。",
          tags: ["递归推理", "消融实验", "计算效率"],
        },
        {
          id: "04",
          title: "IL-10 Optimal Control",
          field: "控制系统 · 免疫学",
          description: "在生理噪声下建立免疫调节的连续时间控制模型。",
          outcome: "在 MATLAB 与 Simulink 中设计并评估卡尔曼滤波与 LQR 控制器。",
          tags: ["卡尔曼滤波", "LQR", "MATLAB", "Simulink"],
        },
      ],
    },
    publications: {
      lead: "论文撰写中。",
      items: [],
    },
    education: {
      lead: "一条跨学科的人工智能研究路径。",
      items: [
        {
          years: "2026 —",
          institution: "大阪大学",
          degree: "研究生 · 博士预备阶段",
          place: "日本大阪",
        },
        {
          years: "2024 — 26",
          institution: "纽约大学",
          degree: "计算机工程硕士",
          place: "美国纽约",
        },
        {
          years: "2021 — 23",
          institution: "北京交通大学",
          degree: "通信工程学士",
          place: "中国北京",
        },
        {
          years: "2017 — 21",
          institution: "北京师范大学珠海分校",
          degree: "金融学学士",
          place: "中国珠海",
        },
      ],
    },
    toolkit: {
      lead: "日常最常用的工具。",
      groups: [
        {
          label: "建模",
          items: ["PyTorch", "Hugging Face", "LoRA / PEFT", "Transformers"],
        },
        {
          label: "科学计算",
          items: ["Evo2", "ClinVar", "序列分析", "MATLAB / Simulink"],
        },
        {
          label: "工程",
          items: ["Python", "CUDA · H100", "Git", "Linux"],
        },
      ],
    },
    contact: {
      lead: "欢迎就博士机会、研究合作，或任何生成式人工智能与生命科学交叉的话题与我交流。",
      cta: "给我写信",
    },
    footer: {
      note: "于大阪，用 Astro 构建。",
      backToTop: "回到顶部",
    },
  },
};
