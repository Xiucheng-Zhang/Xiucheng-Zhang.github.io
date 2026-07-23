export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Xiucheng Zhang",
  title: "M.S. Student, Computer Science",
  institution: "New York University · Courant Institute",
  description:
    "I am a Master's student in Computer Science at <a href='https://cims.nyu.edu' target='_blank' rel='noopener noreferrer'>NYU Courant</a>, graduating in Fall 2027. I received my B.E. in Artificial Intelligence from <a href='https://www.sysu.edu.cn/sysuen/' target='_blank' rel='noopener noreferrer'>Sun Yat-sen University</a>. During undergrad I worked with <a href='https://zhenhuipeng.com' target='_blank' rel='noopener noreferrer'>Prof. Zhenhui Peng</a> and <a href='https://www.cse.ust.hk/~mxj/' target='_blank' rel='noopener noreferrer'>Prof. Xiaojuan Ma</a> (HKUST) on HCI research — building LLM-powered assistance to augment user workflows and experience.<br /><br />My current research interests center on: ① <b>Self-improving agents</b> — enabling LLMs and agents to continually learn, reason, and refine themselves in-context. ② <b>Human-centered AI</b> — strengthening LLM-driven interactive systems from the user's perspective.",
  email: "xz5473@nyu.edu",
  imageUrl: "/images/profile.jpg",
  cvUrl: "/uploads/AndyZhang_CV.pdf",
  githubUsername: "Xiucheng-Zhang",
  institutionUrl: "https://cims.nyu.edu",
  // TODO: paste your Google Scholar profile URL here:
  // googleScholarUrl: "https://scholar.google.com/citations?user=...",
  // Add these when ready:
  // linkedinUsername: "xiucheng-zhang-412b67330",
  // twitterUsername: "...",
  // blogUrl: "https://...",
};
