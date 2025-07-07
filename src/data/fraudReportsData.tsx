export interface FraudReport {
  id: string;
  title: string;
  description: string;
  category: 'Phishing' | 'Romance Scam' | 'Investment Fraud' | 'Tech Support Scam' | 'Online Shopping' | 'Cryptocurrency' | 'Other';
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  reportedBy: string;
  timestamp: string;
  status: 'Pending' | 'Verified' | 'False Positive' | 'Under Investigation';
  location: string;
  financialLoss?: number;
  affectedPlatforms: string[];
  warningLevel: number; // 1-5 scale
  verifiedReports: number;
  tags: string[];
}

export const fraudReports: FraudReport[] = [
  {
    id: "1",
    title: "Fake Amazon Customer Service Calls",
    description: "Scammers calling claiming to be Amazon customer service, asking for account verification and payment details for fake refunds.",
    category: "Tech Support Scam",
    severity: "High",
    reportedBy: "Anonymous User",
    timestamp: "2024-01-15T12:30:00Z",
    status: "Verified",
    location: "United States",
    financialLoss: 2500,
    affectedPlatforms: ["Phone Calls", "Amazon"],
    warningLevel: 4,
    verifiedReports: 23,
    tags: ["phone-scam", "impersonation", "amazon", "refund-fraud"]
  },
  {
    id: "2",
    title: "Cryptocurrency Investment Ponzi Scheme",
    description: "Website promising 300% returns on Bitcoin investments, using fake testimonials and celebrity endorsements.",
    category: "Investment Fraud",
    severity: "Critical",
    reportedBy: "Financial Watchdog",
    timestamp: "2024-01-15T09:15:00Z",
    status: "Under Investigation",
    location: "Global",
    financialLoss: 150000,
    affectedPlatforms: ["Website", "Social Media", "Telegram"],
    warningLevel: 5,
    verifiedReports: 45,
    tags: ["cryptocurrency", "ponzi-scheme", "fake-returns", "celebrity-endorsement"]
  },
  {
    id: "3",
    title: "Romance Scam on Dating Apps",
    description: "Profiles using stolen photos to build romantic relationships, eventually asking for money for fake emergencies.",
    category: "Romance Scam",
    severity: "High",
    reportedBy: "Dating App User",
    timestamp: "2024-01-14T18:45:00Z",
    status: "Verified",
    location: "Multiple Countries",
    financialLoss: 8500,
    affectedPlatforms: ["Tinder", "Match.com", "Facebook Dating"],
    warningLevel: 4,
    verifiedReports: 12,
    tags: ["romance-scam", "dating-apps", "stolen-photos", "emergency-money"]
  },
  {
    id: "4",
    title: "Fake Online Store - Electronics Scam",
    description: "Professional-looking website selling electronics at extremely low prices, taking payments but never delivering products.",
    category: "Online Shopping",
    severity: "Medium",
    reportedBy: "Consumer Protection",
    timestamp: "2024-01-14T14:20:00Z",
    status: "Verified",
    location: "Europe",
    financialLoss: 450,
    affectedPlatforms: ["Website", "Google Ads"],
    warningLevel: 3,
    verifiedReports: 8,
    tags: ["fake-store", "electronics", "too-good-to-be-true", "payment-fraud"]
  },
  {
    id: "5",
    title: "LinkedIn Job Offer Money Laundering",
    description: "Fake job postings offering work-from-home positions that involve receiving and forwarding packages or money transfers.",
    category: "Other",
    severity: "High",
    reportedBy: "Job Seeker",
    timestamp: "2024-01-13T11:30:00Z",
    status: "Pending",
    location: "United States",
    affectedPlatforms: ["LinkedIn", "Indeed", "Email"],
    warningLevel: 4,
    verifiedReports: 6,
    tags: ["job-scam", "money-laundering", "work-from-home", "package-forwarding"]
  }
];

export interface FraudStats {
  totalReports: number;
  verifiedReports: number;
  totalLoss: number;
  activeScams: number;
  topCategories: Array<{ category: string; count: number }>;
}