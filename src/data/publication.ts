export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  projectUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
  tags?: string[]; // research areas, used by the filter above the publication list
}

export const publicationData: Publication[] = [
  {
    year: "2026",
    conference: "arXiv",
    title:
      "ANIMASK: What the Model Contributes to Role Play in Simulated Story Worlds",
    authors:
      "Xiucheng Zhang, Zhuoning Xu, Hanjun Luo†, Yankai Chen, Hanan Salam, Xue Liu",
    paperUrl: "https://arxiv.org/abs/2609.16667",
    codeUrl: "https://github.com/Xiucheng-Zhang/ANIMASK",
    projectUrl: "https://xiucheng-zhang.github.io/ANIMASK/",
    tldr: "A simulation framework that replays frozen stories with LLM role-playing agents and separates, at each decision point, what the persona contributes from what the actor model's own defaults contribute.",
    imageUrl: "/images/animask_fig2.png",
    tags: ["LLM"],
  },
  {
    year: "2026",
    conference: "Under Review",
    title: "MisPlan: When Plans Hurt Coding Agents",
    authors:
      "Hanjun Luo, Zhimu Huang, Alyssa Wu, Xiucheng Zhang, Zhuoning Xu, Jialin Li, Zhaolu Kang, Richeng Xuan, Zhichao Hu, Hanan Salam",
    tldr: "A benchmark from 125K real coding-agent sessions showing that goal-scope errors in plans sharply hurt issue resolution, while implementation-detail errors barely matter.",
    imageUrl: "/images/misplan_fig1.png",
    tags: ["LLM"],
  },
  {
    year: "2026",
    conference: "arXiv",
    title:
      "MasDrift: Benchmarking Authorization Preservation Across Multi-Agent Architectures",
    authors:
      "Zhuoning Xu*, Xiucheng Zhang*, Hanjun Luo*, Yingbin Jin, Yinpeng Dong†, Hanan Salam",
    paperUrl: "https://arxiv.org/abs/2608.07556",
    codeUrl: "https://github.com/ZhuoningXu/MasDrift",
    tldr: "A 600-task benchmark showing that multi-agent systems keep task goals across handoffs but let authorization constraints drift, most of all under centralized architectures.",
    imageUrl: "/images/masdrift_fig1.png",
    tags: ["LLM"],
  },
  {
    year: "2025",
    conference: "ICHEC",
    title:
      "Exploring Community-Powered Conversational Agent for Health Knowledge Acquisition: A Case Study in Colorectal Cancer",
    authors:
      "Yiwei Yuan, Zhiqing Wang, Xiucheng Zhang, Yichao Luo, Shuya Lin, Yang Bai, Zhenhui Peng†",
    paperUrl: "https://doi.org/10.1145/3786995.3787015",
    tldr: "A community-powered conversational agent that helps young adults learn about colorectal cancer.",
    imageUrl: "/images/cananswer_fig1.png",
    tags: ["HCI", "LLM"],
  },
  {
    year: "2025",
    conference: "CHI",
    title:
      "ACKnowledge: A Computational Framework for Human-Compatible Affordance-based Interaction Planning in Real-world Contexts",
    authors:
      "Ziqi Pan, Xiucheng Zhang, Zisu Li, Zhenhui Peng, Mingming Fan, Xiaojuan Ma†",
    paperUrl: "https://doi.org/10.1145/3706598.3713791",
    tldr: "A framework for planning human-compatible, affordance-based agent interactions in real-world contexts.",
    imageUrl: "/images/acknowledge_cover.png",
    tags: ["HCI", "LLM"],
  },
  {
    year: "2025",
    conference: "Int. J. Appl. Earth Obs. Geoinf.",
    title:
      "Low Saturation Confidence Distribution-based Test-Time Adaptation for Cross-Domain Remote Sensing Image Classification",
    authors:
      "Yu Liang, Shilei Cao, Juepeng Zheng†, Xiucheng Zhang, Jianxi Huang, Haohuan Fu",
    paperUrl: "https://doi.org/10.1016/j.jag.2025.104463",
    tldr: "A test-time adaptation method for cross-domain remote sensing image classification that needs no source or target training data.",
    imageUrl: "/images/lscd_tta_overview.png",
    tags: ["CV"],
  },
  {
    year: "2024",
    conference: "MobileHCI Adjunct",
    title:
      "DesignWatch: Analyzing Users' Operations of Mobile Apps Based on Screen Recordings",
    authors:
      "Xiucheng Zhang, Yixin Zeng*, Qichang Li*, Guanyi Chen, Qianyao Xu, Xiaozhu Hu, Zhenhui Peng†",
    paperUrl: "https://doi.org/10.1145/3640471.3680231",
    codeUrl: "https://github.com/Xiucheng-Zhang/DesignWatch",
    tldr: "A visual analytics tool for exploring users' mobile-app operation paths from screen recordings.",
    imageUrl: "/images/designwatch_fig1.png",
    tags: ["HCI"],
  },
];
