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
    "I am a Master's student in Computer Science at <a href='https://cims.nyu.edu' target='_blank' rel='noopener noreferrer'>NYU Courant</a>, graduating in Spring 2027. I received my B.E. in Artificial Intelligence from <a href='https://www.sysu.edu.cn/sysuen/' target='_blank' rel='noopener noreferrer'>Sun Yat-sen University</a>. My background is in human-computer interaction: during undergrad I worked with <a href='https://zhenhuipeng.com' target='_blank' rel='noopener noreferrer'>Prof. Zhenhui Peng</a> and <a href='https://www.cse.ust.hk/~mxj/' target='_blank' rel='noopener noreferrer'>Prof. Xiaojuan Ma</a> (HKUST) on HCI research, building LLM-powered assistance to augment user workflows and experience. Since starting my Master's, I have been moving toward <b>Agentic AI</b> and <b>Trustworthy AI</b>, working with <a href='https://nyuad.nyu.edu/en/academics/divisions/science/faculty/hanan-salam.html' target='_blank' rel='noopener noreferrer'>Prof. Hanan Salam</a> (NYU Abu Dhabi) and <a href='https://dongyp13.github.io/' target='_blank' rel='noopener noreferrer'>Prof. Yinpeng Dong</a> (Tsinghua University).<br /><br />My current research bridges human-AI interaction and agentic AI, along two threads: ① <b>Human-agent interaction</b> — designing interaction and feedback mechanisms that make LLM agents more capable and better aligned with user intent. ② <b>Trustworthy AI</b> — evaluating and improving the robustness and safety of LLMs and agents.",
  email: "xz5473@nyu.edu",
  imageUrl: "/images/profile.jpg",
  cvUrl: "/uploads/AndyZhang_CV.pdf",
  githubUsername: "Xiucheng-Zhang",
  institutionUrl: "https://cims.nyu.edu",
  googleScholarUrl: "https://scholar.google.com/citations?user=FUu-C2oAAAAJ&hl=en",
  // Add these when ready:
  // linkedinUsername: "xiucheng-zhang-412b67330",
  // twitterUsername: "...",
  // blogUrl: "https://...",
};
