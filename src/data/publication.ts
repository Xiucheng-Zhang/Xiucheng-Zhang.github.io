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
}

export const publicationData: Publication[] = [
  {
    year: "2025",
    conference: "CHI",
    title:
      "ACKnowledge: A Computational Framework for Human-Compatible Affordance-based Interaction Planning in Real-world Contexts",
    authors:
      "Ziqi Pan, Xiucheng Zhang, Zisu Li, Zhenhui Peng, Mingming Fan, Xiaojuan Ma",
    paperUrl: "https://doi.org/10.1145/3706598.3713791",
    tldr: "A framework that plans human-compatible affordance-based interactions for agents in real-world contexts.",
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
  },
];
