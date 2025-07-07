export interface PhishingExample {
  id: string;
  title: string;
  description: string;
  emailContent: {
    from: string;
    subject: string;
    body: string;
    attachments?: string[];
  };
  redFlags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Banking' | 'Social Media' | 'Work Email' | 'Shopping' | 'Government';
  isPhishing: boolean;
  explanation: string;
}

export const phishingExamples: PhishingExample[] = [
  {
    id: "1",
    title: "Urgent Bank Account Verification",
    description: "A suspicious email claiming to be from a major bank requesting account verification.",
    emailContent: {
      from: "security@b4nk-alerts.com",
      subject: "URGENT: Your Account Will Be Suspended in 24 Hours",
      body: `Dear Valued Customer,

We have detected suspicious activity on your account. To prevent unauthorized access, your account will be temporarily suspended in 24 hours unless you verify your information immediately.

Click here to verify your account: [Verify Account]

If you do not complete this verification, your account will be permanently closed and you will lose access to your funds.

Thank you for your immediate attention to this matter.

Security Team
First National Bank`,
      attachments: []
    },
    redFlags: [
      "Suspicious sender email domain (b4nk-alerts.com instead of legitimate bank domain)",
      "Creates false urgency with 24-hour deadline",
      "Threatens account closure and loss of funds",
      "Generic greeting 'Dear Valued Customer'",
      "Requests clicking on unverified link",
      "Poor grammar and unprofessional tone"
    ],
    difficulty: "Beginner",
    category: "Banking",
    isPhishing: true,
    explanation: "This is a classic phishing email. Banks never ask customers to verify accounts via email links. The sender domain is fake, and the email uses fear tactics to pressure quick action."
  },
  {
    id: "2",
    title: "LinkedIn Connection Request",
    description: "A legitimate LinkedIn connection request from a professional contact.",
    emailContent: {
      from: "invitations@linkedin.com",
      subject: "Sarah Johnson wants to connect on LinkedIn",
      body: `Hi there,

I'd like to add you to my professional network on LinkedIn.

Sarah Johnson
Marketing Manager at TechCorp Solutions

Accept Sarah's invitation:
[Accept] [View Sarah's profile]

You are receiving Invitation emails. Unsubscribe
Learn why we included this.

LinkedIn Corporation, 1000 W Maude Ave, Sunnyvale, CA 94085`,
      attachments: []
    },
    redFlags: [],
    difficulty: "Beginner",
    category: "Social Media",
    isPhishing: false,
    explanation: "This is a legitimate LinkedIn invitation. It comes from the official LinkedIn domain, has proper unsubscribe options, and includes LinkedIn's actual address."
  },
  {
    id: "3",
    title: "CEO Urgent Wire Transfer Request",
    description: "An email appearing to be from the company CEO requesting an urgent wire transfer.",
    emailContent: {
      from: "ceo@company-mail.net",
      subject: "CONFIDENTIAL - Urgent Wire Transfer Required",
      body: `I need you to process an urgent wire transfer immediately. This is for a confidential acquisition deal that must be completed today.

Transfer Details:
Amount: $50,000
Account: 1234567890
Routing: 021000021
Beneficiary: Global Consulting LLC

Please process this immediately and do not discuss with anyone as this is highly confidential. I'm in meetings all day so handle this ASAP.

Thanks,
Robert Smith
CEO`,
      attachments: []
    },
    redFlags: [
      "Sender domain doesn't match company domain",
      "Creates false urgency and secrecy",
      "Requests large money transfer via email",
      "Claims to be too busy to verify personally",
      "No proper verification process mentioned",
      "Generic signature without contact information"
    ],
    difficulty: "Intermediate",
    category: "Work Email",
    isPhishing: true,
    explanation: "This is a Business Email Compromise (BEC) attack. The attacker impersonates a CEO to trick employees into transferring money. Always verify large financial requests through multiple channels."
  },
  {
    id: "4",
    title: "Package Delivery Notification",
    description: "A notification about a package delivery that requires additional information.",
    emailContent: {
      from: "delivery-info@shipp1ng-update.com",
      subject: "Package Delivery Failed - Action Required",
      body: `Your package delivery attempt failed due to incomplete address information.

Tracking Number: 1Z999AA1234567890
Delivery Date: Today
Status: Failed Delivery

To reschedule delivery, please confirm your address and payment information:
[Confirm Delivery Details]

If you don't complete this within 48 hours, your package will be returned to sender.

Customer Service
Shipping Solutions`,
      attachments: []
    },
    redFlags: [
      "Generic sender without specific shipping company name",
      "Suspicious domain with number substitution (shipp1ng)",
      "Asks for payment information for delivery",
      "Creates urgency with 48-hour deadline",
      "No specific company branding or contact info",
      "Vague tracking number format"
    ],
    difficulty: "Intermediate",
    category: "Shopping",
    isPhishing: true,
    explanation: "This is a fake delivery notification. Legitimate shipping companies have specific domains, branding, and don't ask for payment info via email for regular deliveries."
  },
  {
    id: "5",
    title: "Two-Factor Authentication Code",
    description: "A legitimate 2FA code from a service you actually use.",
    emailContent: {
      from: "noreply@accounts.google.com",
      subject: "Your Google verification code",
      body: `Your Google verification code is: 847392

This code will expire in 10 minutes.

If you didn't request this code, someone else might be trying to access your account. You should change your password immediately.

Google Accounts Team

This email was sent to protect your account security.`,
      attachments: []
    },
    redFlags: [],
    difficulty: "Advanced",
    category: "Social Media",
    isPhishing: false,
    explanation: "This is a legitimate 2FA code from Google. It comes from the official Google domain, has appropriate security warnings, and follows standard 2FA practices."
  }
];

export interface PhishingStats {
  totalExamples: number;
  userScore: number;
  correctAnswers: number;
  totalAttempts: number;
  averageTime: number;
}