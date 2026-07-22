export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  // {
  //   date: "March 2026",
  //   title: "Paper accepted at ...",
  //   description: "Our work on ... has been accepted at ...",
  //   link: "https://...",
  // },
];
