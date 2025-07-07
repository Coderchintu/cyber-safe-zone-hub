
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
    id: "phishing-awareness",
    title: "Phishing Explained: How to Identify and Avoid Attacks",
    description: "Learn about common phishing techniques and how to protect yourself.",
    embedId: "XBkzBpFHKp8",
    category: "Phishing Awareness",
    duration: "9:22",
    source: "YouTube"
  },
  {
    id: "password-security",
    title: "Password Security Best Practices",
    description: "Create strong passwords and manage them effectively.",
    embedId: "w68BBPDAWr8",
    category: "Password Security",
    duration: "7:15",
    source: "YouTube"
  },
  {
    id: "social-engineering-tactics",
    title: "Social Engineering: Common Tactics and Defenses",
    description: "Recognize and defend against psychological manipulation techniques.",
    embedId: "Vo1urF6S4u4",
    category: "Social Engineering",
    duration: "11:38",
    source: "YouTube"
  },
  {
    id: "ransomware-protection",
    title: "How to Protect Against Ransomware",
    description: "Understanding ransomware and implementing effective protection strategies.",
    embedId: "yjPO_G_1hjI",
    category: "Malware & Ransomware",
    duration: "15:47",
    source: "YouTube"
  },
  {
    id: "physical-security-basics",
    title: "Physical Security for IT Assets: Best Practices",
    description: "Learn how to protect your physical devices and infrastructure from threats.",
    embedId: "aSLEq7-Z3TY",
    category: "Physical Security",
    duration: "10:24",
    source: "YouTube"
  },
  {
    id: "public-wifi-safety",
    title: "Staying Safe on Public Wi-Fi Networks",
    description: "Essential precautions to take when using public wireless networks.",
    embedId: "inWWhr5tnEA",
    category: "Public Wi-Fi Risks",
    duration: "8:19",
    source: "YouTube"
  }
];
