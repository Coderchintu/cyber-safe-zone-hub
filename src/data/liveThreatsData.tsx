export interface LiveThreat {
  id: string;
  title: string;
  description: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  type: 'Data Breach' | 'Malware' | 'Phishing Campaign' | 'Ransomware' | 'Vulnerability';
  affectedRegions: string[];
  timestamp: string;
  source: string;
  affectedSectors: string[];
  status: 'Active' | 'Contained' | 'Resolved';
}

export const liveThreats: LiveThreat[] = [
  {
    id: "1",
    title: "Major Banking Phishing Campaign Detected",
    description: "Sophisticated phishing emails targeting major bank customers with fake login pages. Over 10,000 attempts blocked in the last 24 hours.",
    severity: "High",
    type: "Phishing Campaign",
    affectedRegions: ["North America", "Europe"],
    timestamp: "2024-01-15T14:30:00Z",
    source: "CyberThreat Intelligence",
    affectedSectors: ["Banking", "Finance"],
    status: "Active"
  },
  {
    id: "2",
    title: "Healthcare Data Breach - 50,000 Records Exposed",
    description: "A healthcare provider suffered a data breach exposing patient records including names, addresses, and medical information.",
    severity: "Critical",
    type: "Data Breach",
    affectedRegions: ["United States"],
    timestamp: "2024-01-15T10:15:00Z",
    source: "Healthcare Security Alert",
    affectedSectors: ["Healthcare"],
    status: "Contained"
  },
  {
    id: "3",
    title: "New Ransomware Variant Targeting Small Businesses",
    description: "A new ransomware strain is specifically targeting small and medium businesses through compromised remote desktop connections.",
    severity: "High",
    type: "Ransomware",
    affectedRegions: ["Global"],
    timestamp: "2024-01-15T08:45:00Z",
    source: "Malware Research Lab",
    affectedSectors: ["Small Business", "Retail"],
    status: "Active"
  },
  {
    id: "4",
    title: "Social Media Account Takeover Campaign",
    description: "Coordinated attack targeting social media accounts using credential stuffing and password spraying techniques.",
    severity: "Medium",
    type: "Data Breach",
    affectedRegions: ["Global"],
    timestamp: "2024-01-15T06:20:00Z",
    source: "Social Media Security",
    affectedSectors: ["Social Media", "Entertainment"],
    status: "Active"
  },
  {
    id: "5",
    title: "Critical Vulnerability in Popular Web Framework",
    description: "Zero-day vulnerability allows remote code execution. Patch available, immediate action required.",
    severity: "Critical",
    type: "Vulnerability",
    affectedRegions: ["Global"],
    timestamp: "2024-01-14T22:10:00Z",
    source: "Security Research",
    affectedSectors: ["Technology", "Web Development"],
    status: "Resolved"
  }
];

export interface ThreatStats {
  totalThreats: number;
  activeCampaigns: number;
  blockedAttempts: number;
  affectedOrganizations: number;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
}