export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  {
    year: "2025—Present",
    institution: "New York University, Courant Institute",
    degree: "M.S. in Computer Science (expected Fall 2027)",
  },
  {
    year: "2021—2025",
    institution: "Sun Yat-sen University",
    degree: "B.E. in Artificial Intelligence",
  },
];
