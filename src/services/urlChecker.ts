interface URLCheckResult {
  url: string;
  safe: boolean;
  riskLevel: string;
  threats: string[];
  reputation: string;
  lastScanned: string;
  details?: {
    phishTankResult?: boolean;
    virusTotalDetections?: number;
    domainAge?: string;
    sslStatus?: string;
    redirectChain?: string[];
  };
}

// PhishTank API check
const checkPhishTank = async (url: string): Promise<boolean> => {
  try {
    // PhishTank API endpoint (free tier)
    const response = await fetch('https://checkurl.phishtank.com/checkurl/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `url=${encodeURIComponent(url)}&format=json`
    });
    
    if (response.ok) {
      const data = await response.json();
      return data.results?.in_database === true;
    }
  } catch (error) {
    console.warn('PhishTank check failed:', error);
  }
  return false;
};

// Basic URL validation and security checks
const performBasicChecks = (url: string): {
  hasSSL: boolean;
  suspiciousDomain: boolean;
  hasRedirects: boolean;
  domainReputation: string;
} => {
  try {
    const urlObj = new URL(url);
    
    // Check for HTTPS
    const hasSSL = urlObj.protocol === 'https:';
    
    // Check for suspicious patterns
    const suspiciousPatterns = [
      /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/, // IP addresses
      /[a-z0-9]{20,}/, // Long random strings
      /[0-9]{5,}/, // Long number sequences
      /[.-]{2,}/, // Multiple dots/dashes
      /secure.*login|login.*secure/i, // Common phishing terms
      /paypal|amazon|microsoft|apple|google/i, // Brand impersonation attempts
    ];
    
    const suspiciousDomain = suspiciousPatterns.some(pattern => pattern.test(urlObj.hostname));
    
    // Check for URL shorteners (higher risk)
    const shorteners = ['bit.ly', 'tinyurl.com', 't.co', 'goo.gl', 'ow.ly', 'short.link'];
    const isShortener = shorteners.some(shortener => urlObj.hostname.includes(shortener));
    
    // Domain reputation assessment
    const topLevelDomains = ['.com', '.org', '.net', '.edu', '.gov'];
    const hasTrustedTLD = topLevelDomains.some(tld => urlObj.hostname.endsWith(tld));
    
    let domainReputation = 'Good';
    if (suspiciousDomain || isShortener) {
      domainReputation = 'Poor';
    } else if (!hasSSL || !hasTrustedTLD) {
      domainReputation = 'Moderate';
    }
    
    return {
      hasSSL,
      suspiciousDomain: suspiciousDomain || isShortener,
      hasRedirects: false, // Would need actual network request to determine
      domainReputation
    };
  } catch (error) {
    return {
      hasSSL: false,
      suspiciousDomain: true,
      hasRedirects: false,
      domainReputation: 'Poor'
    };
  }
};

export const checkURL = async (url: string): Promise<URLCheckResult> => {
  try {
    // Validate URL format
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    
    // Perform basic security checks
    const basicChecks = performBasicChecks(url);
    
    // Check against PhishTank database
    const isPhishTankListed = await checkPhishTank(url);
    
    // Determine overall safety
    let safe = true;
    let threats: string[] = [];
    let riskLevel = 'Low';
    
    if (isPhishTankListed) {
      safe = false;
      threats.push('Known Phishing Site');
      riskLevel = 'Critical';
    }
    
    if (basicChecks.suspiciousDomain) {
      safe = false;
      threats.push('Suspicious Domain Pattern');
      riskLevel = riskLevel === 'Critical' ? 'Critical' : 'High';
    }
    
    if (!basicChecks.hasSSL) {
      threats.push('No SSL Certificate');
      if (riskLevel === 'Low') riskLevel = 'Medium';
    }
    
    if (basicChecks.domainReputation === 'Poor') {
      safe = false;
      if (riskLevel === 'Low') riskLevel = 'Medium';
    }
    
    return {
      url,
      safe,
      riskLevel,
      threats,
      reputation: basicChecks.domainReputation,
      lastScanned: new Date().toISOString(),
      details: {
        phishTankResult: isPhishTankListed,
        sslStatus: basicChecks.hasSSL ? 'Valid' : 'None',
        domainAge: 'Unknown', // Would require additional API
      }
    };
  } catch (error) {
    console.error('URL check failed:', error);
    return {
      url,
      safe: false,
      riskLevel: 'Critical',
      threats: ['URL Validation Failed'],
      reputation: 'Poor',
      lastScanned: new Date().toISOString()
    };
  }
};