
export interface Video {
  id: string;
  title: string;
  description: string;
  embedId: string;
  category: string;
  duration: string;
  source: string;
}

export const videos: Video[] = [
  {
    id: "cyber-basics",
    title: "Cybersecurity Basics: What You Need to Know",
    description: "An introduction to cybersecurity fundamentals and why they matter for everyone.",
    embedId: "inWWhr5tnEA",
    category: "Basics",
    duration: "12:34",
    source: "YouTube"
  },
  {
    id: "phishing-explained",
    title: "Phishing Explained: How to Identify and Avoid Attacks",
    description: "Learn about common phishing techniques and how to protect yourself.",
    embedId: "XBkzBpFHKp8",
    category: "Threats",
    duration: "9:22",
    source: "YouTube"
  },
  {
    id: "password-security",
    title: "Password Security Best Practices",
    description: "Create strong passwords and manage them effectively.",
    embedId: "w68BBPDAWr8",
    category: "Protection",
    duration: "7:15",
    source: "YouTube"
  },
  {
    id: "ransomware-protection",
    title: "How to Protect Against Ransomware",
    description: "Understanding ransomware and implementing effective protection strategies.",
    embedId: "yjPO_G_1hjI",
    category: "Threats",
    duration: "15:47",
    source: "YouTube"
  },
  {
    id: "social-engineering-tactics",
    title: "Social Engineering: Common Tactics and Defenses",
    description: "Recognize and defend against psychological manipulation techniques.",
    embedId: "Vo1urF6S4u4",
    category: "Threats",
    duration: "11:38",
    source: "YouTube"
  },
  {
    id: "mobile-security",
    title: "Mobile Device Security Essentials",
    description: "Secure your smartphones and tablets from cyber threats.",
    embedId: "aSLEq7-Z3TY",
    category: "Protection",
    duration: "8:54",
    source: "YouTube"
  }
];
