export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
  tags?: string[]; // research areas, used by the filter above the publication list
}

export const publicationData: Publication[] = [
  {
    year: "2025",
    conference: "CHEC",
    title:
      "Exploring Community-Powered Conversational Agent for Health Knowledge Acquisition: A Case Study in Colorectal Cancer",
    authors:
      "Yiwei Yuan, Zhiqing Wang, Xiucheng Zhang, Yichao Luo, Shuya Lin, Yang Bai, Zhenhui Peng",
    paperUrl: "https://doi.org/10.1145/3786995.3787015",
    tldr: "A community-powered conversational agent (CanAnswer) that helps young adults acquire health knowledge, with colorectal cancer as a case study.",
    imageUrl: "/images/cananswer_fig1.png",
    tags: ["HCI", "LLM"],
  },
  {
    year: "2025",
    conference: "CHI",
    title:
      "ACKnowledge: A Computational Framework for Human-Compatible Affordance-based Interaction Planning in Real-world Contexts",
    authors:
      "Ziqi Pan, Xiucheng Zhang, Zisu Li, Zhenhui Peng, Mingming Fan, Xiaojuan Ma",
    paperUrl: "https://doi.org/10.1145/3706598.3713791",
    tldr: "A framework that plans human-compatible affordance-based interactions for agents in real-world contexts.",
    imageUrl: "/images/acknowledge_cover.png",
    tags: ["HCI", "HRI", "LLM"],
  },
  {
    year: "2025",
    conference: "Int. J. Appl. Earth Obs. Geoinf.",
    title:
      "Low Saturation Confidence Distribution-based Test-Time Adaptation for Cross-Domain Remote Sensing Image Classification",
    authors:
      "Yu Liang, Shilei Cao, Juepeng Zheng, Xiucheng Zhang, Jianxi Huang, Haohuan Fu",
    paperUrl: "https://doi.org/10.1016/j.jag.2025.104463",
    tldr: "A test-time adaptation method that adapts a source-trained model to cross-domain remote sensing image classification on the fly, without source or target training data.",
    imageUrl: "/images/lscd_tta_overview.png",
    tags: ["CV", "Remote Sensing"],
  },
  {
    year: "2024",
    conference: "MobileHCI Adjunct",
    title:
      "DesignWatch: Analyzing Users' Operations of Mobile Apps Based on Screen Recordings",
    authors:
      "Xiucheng Zhang, Yixin Zeng, Qichang Li, Guanyi Chen, Qianyao Xu, Xiaozhu Hu, Zhenhui Peng",
    paperUrl: "https://doi.org/10.1145/3640471.3680231",
    codeUrl: "https://github.com/Xiucheng-Zhang/DesignWatch",
    tldr: "A visual analytics tool that helps designers explore users' mobile-app operation paths from screen recordings.",
    imageUrl: "/images/designwatch_fig1.png",
    tags: ["HCI", "Visualization"],
  },
];
