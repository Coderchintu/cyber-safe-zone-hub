
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
    title: "Phishing Attacks",
    description: "Deceptive attempts to steal sensitive information by masquerading as trustworthy entities.",
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
    id: "malware",
    title: "Malware",
    description: "Malicious software designed to disrupt, damage, or gain unauthorized access to computer systems.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=300&auto=format&fit=crop",
    riskLevel: "High",
    fullDescription: "Malware (malicious software) refers to any program or file that is harmful to a computer user. Types of malware include computer viruses, worms, Trojan horses, ransomware, spyware, adware, and more. Malware can be distributed through infected email attachments, software downloads, or vulnerabilities in outdated software. Once installed, malware can steal sensitive data, corrupt files, monitor user activity, or take control of computer systems. Some malware is designed to remain hidden and persistent, operating in the background without the user's knowledge.",
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
    id: "ransomware",
    title: "Ransomware",
    description: "Malware that encrypts files and demands payment for decryption keys, effectively holding data hostage.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=300&auto=format&fit=crop",
    riskLevel: "Critical",
    fullDescription: "Ransomware is a type of malicious software that encrypts a victim's files. The attacker then demands a ransom from the victim to restore access to the data upon payment. Users are shown instructions for how to pay a fee to get the decryption key. The costs can range from a few hundred dollars to thousands, payable to cybercriminals in cryptocurrency. Ransomware attacks are typically carried out using a Trojan that is disguised as a legitimate file that the user is tricked into downloading or opening when it arrives as an email attachment. Ransomware attacks can be devastating for businesses and individuals alike, leading to financial losses, data loss, and operational disruption.",
    preventionTips: [
      "Maintain regular, secure backups of your important data",
      "Keep your systems and software updated",
      "Use strong spam filters and be cautious with email attachments and links",
      "Implement robust security solutions",
      "Train employees to recognize suspicious emails and websites",
      "Create a security plan for ransomware incidents",
      "Consider cybersecurity insurance for your business"
    ]
  },
  {
    id: "data-breach",
    title: "Data Breaches",
    description: "Incidents where sensitive, protected, or confidential information is accessed, stolen, or exposed.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=300&auto=format&fit=crop",
    riskLevel: "High",
    fullDescription: "A data breach is an incident where information is stolen or taken from a system without the knowledge or authorization of the system's owner. Data breaches can involve personal health information (PHI), personally identifiable information (PII), trade secrets, intellectual property, or other confidential information. Breaches can occur due to weak passwords, application vulnerabilities, malware, or human error. The consequences of data breaches can include financial loss, damage to reputation, legal action, and regulatory penalties. Organizations are increasingly subject to strict regulations regarding the protection of sensitive data and notification requirements in the event of a breach.",
    preventionTips: [
      "Encrypt sensitive data at rest and in transit",
      "Implement strong access controls and authentication",
      "Regularly update and patch systems",
      "Train employees on data security best practices",
      "Conduct regular security assessments and audits",
      "Have an incident response plan ready",
      "Monitor systems for suspicious activities"
    ]
  },
  {
    id: "social-engineering",
    title: "Social Engineering",
    description: "Psychological manipulation to trick users into making security mistakes or giving away sensitive information.",
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
    id: "ddos-attacks",
    title: "DDoS Attacks",
    description: "Attempts to disrupt normal traffic to servers, services or networks by overwhelming the target with a flood of traffic.",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=300&auto=format&fit=crop",
    riskLevel: "Medium",
    fullDescription: "A Distributed Denial of Service (DDoS) attack is an attempt to make an online service unavailable by overwhelming it with traffic from multiple sources. They target a wide variety of important resources, from banks to news websites, and present a major challenge to making sure people can publish and access important information. The attackers build networks of infected computers (botnets) through malware or other forms of compromise, then coordinate these botnets to send large volumes of traffic or requests to the target server, exceeding its capacity to handle traffic and preventing normal users from accessing the service. DDoS attacks can last from a few hours to several days, causing significant operational disruption and financial damage.",
    preventionTips: [
      "Use a content delivery network (CDN) to distribute traffic",
      "Implement DDoS protection services",
      "Configure network hardware against spoofed IP addresses",
      "Ensure you have sufficient bandwidth and server capacity",
      "Have a DDoS response plan ready",
      "Understand your normal traffic patterns to quickly identify attacks",
      "Consider cloud-based mitigation solutions"
    ]
  }
];
