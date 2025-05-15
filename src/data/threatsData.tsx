
export interface Threat {
  id: string;
  title: string;
  description: string;
  image: string;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  fullDescription: string;
  preventionTips: string[];
}

export const threats: Threat[] = [
  {
    id: "phishing",
    title: "Phishing Awareness",
    description: "Learn to identify and avoid deceptive attempts to steal sensitive information through emails and fake websites.",
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142d79c?q=80&w=300&auto=format&fit=crop",
    riskLevel: "High",
    fullDescription: "Phishing is a type of social engineering attack often used to steal user data, including login credentials and credit card numbers. It occurs when an attacker, masquerading as a trusted entity, dupes a victim into opening an email, instant message, or text message. The recipient is then tricked into clicking a malicious link, which can lead to the installation of malware, the freezing of the system as part of a ransomware attack, or the revealing of sensitive information. Phishing attacks are increasingly sophisticated and often hard to identify. Attackers often use real company logos, create legitimate-looking email addresses, and personalize messages using information gathered from social media.",
    preventionTips: [
      "Be suspicious of unsolicited emails and text messages",
      "Check the sender's email address carefully",
      "Don't click on links or download attachments from unknown senders",
      "Use multi-factor authentication",
      "Keep your software and systems updated",
      "Use email filtering and anti-phishing solutions",
      "Verify requests for sensitive information by contacting the company directly"
    ]
  },
  {
    id: "password-security",
    title: "Password Security",
    description: "Best practices for creating and managing strong passwords to protect your accounts and personal information.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=300&auto=format&fit=crop",
    riskLevel: "High",
    fullDescription: "Password security is the practice of creating, using, and managing strong passwords to protect digital identities and data. Weak passwords are one of the most common entry points for cybercriminals. A strong password is your first line of defense against unauthorized access to your accounts and personal information. Using unique, complex passwords for each account helps ensure that if one account is compromised, others remain secure. Password managers can help generate and store strong, unique passwords for all your accounts, eliminating the need to remember them all.",
    preventionTips: [
      "Use long passwords (at least 12 characters)",
      "Include a mix of uppercase and lowercase letters, numbers, and symbols",
      "Avoid using personal information in passwords",
      "Don't reuse passwords across different accounts",
      "Change passwords immediately if a breach is suspected",
      "Use a reputable password manager",
      "Enable multi-factor authentication wherever possible"
    ]
  },
  {
    id: "social-engineering",
    title: "Social Engineering",
    description: "Psychological manipulation techniques used to trick users into making security mistakes and revealing sensitive information.",
    image: "https://images.unsplash.com/photo-1572059224598-742c3bc6396d?q=80&w=300&auto=format&fit=crop",
    riskLevel: "High",
    fullDescription: "Social engineering is the art of manipulating people so they give up confidential information or perform actions that compromise security. The types of information these attackers are seeking can vary, but when individuals are targeted the criminals are usually trying to trick you into giving them your passwords or bank information, or access your computer to secretly install malicious software. Social engineering attacks use human psychology, emotions, and social behavior to exploit victims. Techniques include pretexting, baiting, quid pro quo, tailgating, and creating a sense of urgency or fear. Unlike technical hacking methods, social engineering relies heavily on human interaction and often involves tricking people into breaking normal security procedures.",
    preventionTips: [
      "Verify the identity of anyone requesting sensitive information",
      "Be suspicious of unsolicited communications",
      "Don't be swayed by appeals to fear, urgency, or authority",
      "When in doubt, verify through official channels",
      "Implement multi-factor authentication",
      "Train staff to recognize and report social engineering attempts",
      "Establish clear procedures for sensitive operations"
    ]
  },
  {
    id: "malware-ransomware",
    title: "Malware & Ransomware",
    description: "Understanding harmful software threats that can damage systems, steal data, or lock access to files for ransom.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=300&auto=format&fit=crop",
    riskLevel: "Critical",
    fullDescription: "Malware is any software intentionally designed to cause damage to computers, servers, or networks. Ransomware is a specific type of malware that encrypts a victim's files and demands payment for their release. These threats can enter systems through various means including phishing emails, malicious downloads, exploited vulnerabilities, or infected external devices. Once installed, malware can steal sensitive data, corrupt files, monitor user activity, or take control of computer systems. Ransomware attacks can be devastating for businesses and individuals alike, leading to financial losses, data loss, and operational disruption.",
    preventionTips: [
      "Install and maintain reputable antivirus and anti-malware software",
      "Keep all software and operating systems updated",
      "Be cautious about downloading files or clicking on links",
      "Only download software from trusted sources",
      "Regularly back up important data",
      "Use strong passwords and enable multi-factor authentication",
      "Configure your firewall to block suspicious connections"
    ]
  },
  {
    id: "physical-security",
    title: "Physical Security",
    description: "Protecting hardware, physical spaces, and preventing unauthorized access to devices containing sensitive information.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=300&auto=format&fit=crop",
    riskLevel: "Medium",
    fullDescription: "Physical security involves protecting hardware, facilities, personnel, and other tangible assets from physical actions and events that could cause serious loss or damage. In the context of cybersecurity, physical security focuses on preventing unauthorized physical access to IT systems, equipment, and the spaces that house them. Even with the most robust digital security measures in place, physical vulnerabilities can expose organizations to significant risks. Lost or stolen devices, unauthorized access to server rooms, or visual hacking (shoulder surfing) can all lead to data breaches and security incidents. A comprehensive approach to physical security involves multiple layers of protection including access controls, surveillance, and security policies.",
    preventionTips: [
      "Use secure access controls for physical spaces containing sensitive equipment",
      "Lock devices when not in use and use screen privacy filters",
      "Store backup media in secure, off-site locations",
      "Properly dispose of electronic media and paper documents",
      "Maintain an inventory of all hardware assets",
      "Implement CCTV and alarm systems in sensitive areas",
      "Train employees on physical security best practices"
    ]
  },
  {
    id: "public-wifi-risks",
    title: "Public Wi-Fi Risks",
    description: "Understanding and mitigating the security risks of using public wireless networks in airports, cafes, and other locations.",
    image: "https://images.unsplash.com/photo-1596003906949-67221c37965c?q=80&w=300&auto=format&fit=crop",
    riskLevel: "Medium",
    fullDescription: "Public Wi-Fi networks, while convenient, pose significant security risks to users. These networks often lack proper security measures, making them prime targets for cybercriminals. Common threats on public Wi-Fi include man-in-the-middle attacks, where attackers intercept data between your device and the destination server; evil twin attacks, where hackers set up rogue access points mimicking legitimate networks; and packet sniffing, where unencrypted data is captured and analyzed. Using public Wi-Fi without proper precautions can expose your sensitive information, including login credentials, financial details, and personal communications.",
    preventionTips: [
      "Use a Virtual Private Network (VPN) when connecting to public Wi-Fi",
      "Verify network names before connecting to avoid fake hotspots",
      "Disable automatic Wi-Fi connection features on your devices",
      "Avoid accessing sensitive accounts or conducting financial transactions on public Wi-Fi",
      "Ensure websites use HTTPS encryption when browsing",
      "Keep your device's software and security tools updated",
      "Consider using your mobile data connection instead of public Wi-Fi for sensitive activities"
    ]
  }
];
