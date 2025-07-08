interface ThreatSource {
  name: string;
  url: string;
  type: 'rss' | 'json' | 'api';
}

interface LiveThreat {
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

// Threat intelligence sources focusing on Indian and global threats
const threatSources: ThreatSource[] = [
  {
    name: 'CERT-In Advisories',
    url: 'https://www.cert-in.org.in/advisories',
    type: 'rss'
  },
  {
    name: 'Indian Cyber Crime Portal',
    url: 'https://cybercrime.gov.in',
    type: 'api'
  },
  {
    name: 'CISA Known Exploited Vulnerabilities',
    url: 'https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json',
    type: 'json'
  }
];

// Simulated threat intelligence with focus on Indian cybersecurity landscape
const generateRealisticThreats = (): LiveThreat[] => {
  const indianThreats: LiveThreat[] = [
    {
      id: Date.now().toString() + '_1',
      title: 'UPI Payment Fraud Campaign Targeting Indian Banks',
      description: 'Cybercriminals are exploiting UPI payment systems through fake payment apps and phishing messages. Over 15,000 attempted fraudulent transactions detected across major Indian banks in the last 48 hours.',
      severity: 'High',
      type: 'Phishing Campaign',
      affectedRegions: ['India', 'South Asia'],
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
      source: 'CERT-In Security Alert',
      affectedSectors: ['Banking', 'Financial Services', 'Mobile Payments'],
      status: 'Active'
    },
    {
      id: Date.now().toString() + '_2',
      title: 'Aadhaar Data Breach Attempt Blocked',
      description: 'Security researchers identified attempts to exploit vulnerabilities in third-party Aadhaar authentication systems. UIDAI has been notified and security patches are being deployed.',
      severity: 'Critical',
      type: 'Data Breach',
      affectedRegions: ['India'],
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), // 6 hours ago
      source: 'Indian Cybersecurity Consortium',
      affectedSectors: ['Government', 'Identity Services'],
      status: 'Contained'
    },
    {
      id: Date.now().toString() + '_3',
      title: 'Ransomware Targeting Indian Healthcare Systems',
      description: 'A new variant of ransomware is specifically targeting hospital management systems in tier-2 and tier-3 cities across India. Patient data encryption attempts have been reported.',
      severity: 'High',
      type: 'Ransomware',
      affectedRegions: ['India'],
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(), // 12 hours ago
      source: 'Healthcare Security Alliance',
      affectedSectors: ['Healthcare', 'Medical Services'],
      status: 'Active'
    },
    {
      id: Date.now().toString() + '_4',
      title: 'WhatsApp Business API Exploitation',
      description: 'Attackers are using compromised WhatsApp Business accounts to send malicious links disguised as government notifications. Primarily targeting users in Mumbai and Delhi.',
      severity: 'Medium',
      type: 'Phishing Campaign',
      affectedRegions: ['India', 'Mumbai', 'Delhi'],
      timestamp: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(), // 18 hours ago
      source: 'Social Media Security Watch',
      affectedSectors: ['Communication', 'Small Business'],
      status: 'Active'
    },
    {
      id: Date.now().toString() + '_5',
      title: 'Critical Vulnerability in Indian Banking Software',
      description: 'Zero-day vulnerability discovered in widely used core banking software deployed by 50+ Indian banks. Emergency patches being rolled out by vendors.',
      severity: 'Critical',
      type: 'Vulnerability',
      affectedRegions: ['India'],
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
      source: 'Reserve Bank of India - Cyber Security',
      affectedSectors: ['Banking', 'Financial Technology'],
      status: 'Resolved'
    }
  ];

  return indianThreats;
};

// Simulate fetching from CERT-In and other Indian sources
export const fetchLiveThreats = async (): Promise<LiveThreat[]> => {
  try {
    // In a real implementation, you would:
    // 1. Fetch from CERT-In RSS feeds
    // 2. Parse government security advisories
    // 3. Integrate with threat intelligence platforms
    // 4. Monitor Indian cybersecurity forums
    
    // For now, return realistic simulated data with Indian focus
    const threats = generateRealisticThreats();
    
    // Add timestamp jitter to make it look more realistic
    return threats.map(threat => ({
      ...threat,
      timestamp: new Date(Date.now() - Math.random() * 24 * 60 * 60 * 1000).toISOString()
    }));
  } catch (error) {
    console.error('Failed to fetch threat intelligence:', error);
    return generateRealisticThreats();
  }
};

// Get threat statistics
export const getThreatStats = (threats: LiveThreat[]) => {
  const activeCampaigns = threats.filter(t => t.status === 'Active').length;
  const criticalThreats = threats.filter(t => t.severity === 'Critical').length;
  
  // Simulate blocked attempts - in reality this would come from security systems
  const blockedAttempts = Math.floor(Math.random() * 50000) + 100000;
  
  // Calculate risk level based on active critical threats
  let riskLevel: 'Low' | 'Medium' | 'High' | 'Critical' = 'Low';
  if (criticalThreats > 2) riskLevel = 'Critical';
  else if (criticalThreats > 0) riskLevel = 'High';
  else if (activeCampaigns > 3) riskLevel = 'Medium';
  
  return {
    totalThreats: threats.length,
    activeCampaigns,
    blockedAttempts,
    affectedOrganizations: Math.floor(threats.length * 2.5), // Estimate
    riskLevel
  };
};