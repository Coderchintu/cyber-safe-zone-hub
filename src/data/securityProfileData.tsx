export interface SecurityScore {
  overall: number;
  categories: {
    passwordSecurity: number;
    phishingAwareness: number;
    deviceSecurity: number;
    privateInformation: number;
    socialEngineering: number;
  };
  improvements: string[];
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  dateEarned?: string;
  progress?: number;
  maxProgress?: number;
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  type: 'quiz_completed' | 'threat_learned' | 'achievement_earned' | 'security_improved' | 'warning_heeded';
  timestamp: string;
  scoreChange: number;
  category: string;
}

export const mockSecurityScore: SecurityScore = {
  overall: 78,
  categories: {
    passwordSecurity: 85,
    phishingAwareness: 72,
    deviceSecurity: 80,
    privateInformation: 75,
    socialEngineering: 68
  },
  improvements: [
    "Enable two-factor authentication on more accounts",
    "Complete advanced phishing recognition training",
    "Update device security settings",
    "Review social media privacy settings"
  ],
  achievements: [
    {
      id: "1",
      title: "Phishing Detective",
      description: "Successfully identified 10 phishing attempts",
      icon: "shield",
      dateEarned: "2024-01-10T14:30:00Z",
      progress: 10,
      maxProgress: 10
    },
    {
      id: "2",
      title: "Password Master",
      description: "Created 25 strong, unique passwords",
      icon: "zap",
      dateEarned: "2024-01-08T09:15:00Z",
      progress: 25,
      maxProgress: 25
    },
    {
      id: "3",
      title: "Security Scholar",
      description: "Completed 5 security training modules",
      icon: "check",
      progress: 3,
      maxProgress: 5
    },
    {
      id: "4",
      title: "Threat Hunter",
      description: "Reported 3 potential security threats",
      icon: "alert-triangle",
      progress: 1,
      maxProgress: 3
    }
  ]
};

export const mockTimeline: TimelineEvent[] = [
  {
    id: "1",
    title: "Completed Advanced Phishing Quiz",
    description: "Scored 90% on the advanced phishing recognition test",
    type: "quiz_completed",
    timestamp: "2024-01-15T10:30:00Z",
    scoreChange: 5,
    category: "Phishing Awareness"
  },
  {
    id: "2",
    title: "Earned 'Phishing Detective' Badge",
    description: "Successfully identified 10 phishing attempts",
    type: "achievement_earned",
    timestamp: "2024-01-10T14:30:00Z",
    scoreChange: 8,
    category: "Achievements"
  },
  {
    id: "3",
    title: "Learned about Social Engineering",
    description: "Completed social engineering awareness training",
    type: "threat_learned",
    timestamp: "2024-01-08T16:45:00Z",
    scoreChange: 6,
    category: "Social Engineering"
  },
  {
    id: "4",
    title: "Improved Password Security",
    description: "Updated 15 accounts with strong, unique passwords",
    type: "security_improved",
    timestamp: "2024-01-05T12:20:00Z",
    scoreChange: 10,
    category: "Password Security"
  },
  {
    id: "5",
    title: "Heeded Ransomware Warning",
    description: "Avoided clicking suspicious email attachment after learning about ransomware",
    type: "warning_heeded",
    timestamp: "2024-01-03T09:15:00Z",
    scoreChange: 4,
    category: "Malware Prevention"
  }
];

export interface UserProgress {
  totalScore: number;
  level: number;
  experiencePoints: number;
  nextLevelThreshold: number;
  weeklyGoals: {
    quizzesCompleted: number;
    threatsLearned: number;
    securityActionsCompleted: number;
  };
  streak: {
    current: number;
    longest: number;
    lastActivity: string;
  };
}