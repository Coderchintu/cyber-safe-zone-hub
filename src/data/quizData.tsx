
export interface Quiz {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  correctAnswerId: string;
  explanation: string;
}

interface Option {
  id: string;
  text: string;
}

export const quizzes: Quiz[] = [
  {
    id: "phishing",
    title: "Phishing Awareness",
    description: "Test your knowledge about phishing attacks and how to avoid them.",
    difficulty: "Beginner",
    estimatedTime: "5-10 minutes",
    questions: [
      {
        id: "phishing-1",
        text: "What is phishing?",
        options: [
          { id: "p1a", text: "A type of fishing sport" },
          { id: "p1b", text: "A cybercrime where targets are contacted by email, phone or text by someone posing as a legitimate institution" },
          { id: "p1c", text: "A method to recover forgotten passwords" },
          { id: "p1d", text: "A technique to improve network performance" }
        ],
        correctAnswerId: "p1b",
        explanation: "Phishing is a cybercrime where attackers pose as legitimate institutions to trick victims into providing sensitive data."
      },
      {
        id: "phishing-2",
        text: "Which of these is a warning sign of a phishing email?",
        options: [
          { id: "p2a", text: "The email comes from someone in your contact list" },
          { id: "p2b", text: "The email has perfect grammar and spelling" },
          { id: "p2c", text: "The email creates a sense of urgency or threatening language" },
          { id: "p2d", text: "The email has the company's correct logo" }
        ],
        correctAnswerId: "p2c",
        explanation: "Creating urgency or fear is a common tactic in phishing emails to pressure you into taking immediate action without thinking."
      },
      {
        id: "phishing-3",
        text: "What should you do if you suspect an email is a phishing attempt?",
        options: [
          { id: "p3a", text: "Click on links to check if they're legitimate" },
          { id: "p3b", text: "Reply to the sender to confirm if it's real" },
          { id: "p3c", text: "Forward it to all your colleagues to warn them" },
          { id: "p3d", text: "Don't click any links and report it to IT security" }
        ],
        correctAnswerId: "p3d",
        explanation: "Never click links in suspicious emails. Report the email to your IT security team and delete it."
      }
    ]
  },
  {
    id: "password-security",
    title: "Password Security",
    description: "Test your knowledge about creating and managing secure passwords.",
    difficulty: "Beginner",
    estimatedTime: "5 minutes",
    questions: [
      {
        id: "password-1",
        text: "Which of these is the strongest password?",
        options: [
          { id: "pw1a", text: "password123" },
          { id: "pw1b", text: "Birthday1990" },
          { id: "pw1c", text: "P@$$w0rd" },
          { id: "pw1d", text: "j7K#9Lp!2sQ" }
        ],
        correctAnswerId: "pw1d",
        explanation: "Strong passwords contain a mix of uppercase and lowercase letters, numbers, and special characters without forming common words or patterns."
      },
      {
        id: "password-2",
        text: "What is a good practice for password management?",
        options: [
          { id: "pw2a", text: "Using the same password for all accounts" },
          { id: "pw2b", text: "Writing down passwords on sticky notes" },
          { id: "pw2c", text: "Using a secure password manager" },
          { id: "pw2d", text: "Sharing passwords with trusted colleagues" }
        ],
        correctAnswerId: "pw2c",
        explanation: "Password managers securely store unique, complex passwords for all your accounts."
      }
    ]
  },
  {
    id: "social-engineering",
    title: "Social Engineering",
    description: "Learn about various social engineering techniques and how to defend against them.",
    difficulty: "Advanced",
    estimatedTime: "15-20 minutes",
    questions: [
      {
        id: "se-1",
        text: "What is social engineering?",
        options: [
          { id: "se1a", text: "The process of designing social media campaigns" },
          { id: "se1b", text: "A type of network configuration" },
          { id: "se1c", text: "Psychological manipulation to trick people into making security mistakes" },
          { id: "se1d", text: "Software for managing social networks" }
        ],
        correctAnswerId: "se1c",
        explanation: "Social engineering uses psychological manipulation to trick people into revealing information or performing actions that compromise security."
      },
      {
        id: "se-2",
        text: "Which of these is NOT a common social engineering technique?",
        options: [
          { id: "se2a", text: "Phishing" },
          { id: "se2b", text: "Pretexting" },
          { id: "se2c", text: "Baiting" },
          { id: "se2d", text: "Fireproofing" }
        ],
        correctAnswerId: "se2d",
        explanation: "Fireproofing is not a social engineering technique; it's related to physical building safety. Phishing, pretexting, and baiting are all social engineering methods."
      }
    ]
  },
  {
    id: "malware-ransomware",
    title: "Malware & Ransomware Protection",
    description: "Learn about different types of malware and how to protect your systems.",
    difficulty: "Intermediate",
    estimatedTime: "10-15 minutes",
    questions: [
      {
        id: "malware-1",
        text: "What is ransomware?",
        options: [
          { id: "m1a", text: "Software that displays unwanted advertisements" },
          { id: "m1b", text: "Malicious software that encrypts your files and demands payment for decryption" },
          { id: "m1c", text: "Software that creates a backdoor into your system" },
          { id: "m1d", text: "A type of firewall protection" }
        ],
        correctAnswerId: "m1b",
        explanation: "Ransomware encrypts a victim's files and demands payment to restore access to the data."
      },
      {
        id: "malware-2",
        text: "Which of these actions can help prevent malware infections?",
        options: [
          { id: "m2a", text: "Opening all email attachments to scan them" },
          { id: "m2b", text: "Disabling your antivirus when installing new software" },
          { id: "m2c", text: "Keeping your operating system and applications updated" },
          { id: "m2d", text: "Downloading free software from any website" }
        ],
        correctAnswerId: "m2c",
        explanation: "Regular updates patch security vulnerabilities that malware could exploit."
      }
    ]
  },
  {
    id: "physical-security",
    title: "Physical Security",
    description: "Test your knowledge about protecting physical devices and spaces.",
    difficulty: "Beginner",
    estimatedTime: "8 minutes",
    questions: [
      {
        id: "ps-1",
        text: "Which of the following is NOT a good physical security practice?",
        options: [
          { id: "ps1a", text: "Locking your computer when you leave your desk" },
          { id: "ps1b", text: "Allowing tailgating to be polite to colleagues" },
          { id: "ps1c", text: "Securing server rooms with access control systems" },
          { id: "ps1d", text: "Using privacy screens on monitors in public spaces" }
        ],
        correctAnswerId: "ps1b",
        explanation: "Tailgating (allowing someone to follow you through a secure door) compromises physical security, even if they appear to be colleagues."
      },
      {
        id: "ps-2",
        text: "What should you do with sensitive documents you no longer need?",
        options: [
          { id: "ps2a", text: "Throw them in the regular trash" },
          { id: "ps2b", text: "Recycle them with other paper" },
          { id: "ps2c", text: "Shred them completely" },
          { id: "ps2d", text: "Keep them indefinitely" }
        ],
        correctAnswerId: "ps2c",
        explanation: "Shredding sensitive documents prevents dumpster diving and information theft."
      }
    ]
  },
  {
    id: "public-wifi",
    title: "Public Wi-Fi Security",
    description: "Learn about the risks of public Wi-Fi networks and how to stay safe.",
    difficulty: "Intermediate",
    estimatedTime: "7-10 minutes",
    questions: [
      {
        id: "wifi-1",
        text: "Which of these is the safest way to use public Wi-Fi?",
        options: [
          { id: "w1a", text: "Connect to any free network available" },
          { id: "w1b", text: "Use a VPN to encrypt your connection" },
          { id: "w1c", text: "Turn off your firewall to speed up the connection" },
          { id: "w1d", text: "Share your login credentials with others to save bandwidth" }
        ],
        correctAnswerId: "w1b",
        explanation: "A VPN (Virtual Private Network) encrypts your internet traffic, protecting your data while using public Wi-Fi."
      },
      {
        id: "wifi-2",
        text: "What is an 'evil twin' attack in the context of Wi-Fi security?",
        options: [
          { id: "w2a", text: "When twins hack into a network together" },
          { id: "w2b", text: "When a hacker creates a rogue access point that mimics a legitimate network" },
          { id: "w2c", text: "A virus that duplicates itself on your device" },
          { id: "w2d", text: "When two devices have the same MAC address" }
        ],
        correctAnswerId: "w2b",
        explanation: "An 'evil twin' attack occurs when an attacker sets up a fake Wi-Fi hotspot that looks identical to a legitimate one to intercept user data."
      }
    ]
  }
];
