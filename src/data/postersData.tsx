
export interface Poster {
  id: string;
  title: string;
  image: string;
  category: string;
}

export const posters: Poster[] = [
  {
    id: "phishing-awareness",
    title: "Spot the Phishing Email",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop",
    category: "Phishing"
  },
  {
    id: "password-strength",
    title: "Create Strong Passwords",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=600&auto=format&fit=crop",
    category: "Passwords"
  },
  {
    id: "public-wifi-safety",
    title: "Stay Safe on Public WiFi",
    image: "https://images.unsplash.com/photo-1596003906949-67221c37965c?q=80&w=600&auto=format&fit=crop",
    category: "Network Security"
  },
  {
    id: "data-protection",
    title: "Protect Your Personal Data",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
    category: "Data Protection"
  },
  {
    id: "social-media-privacy",
    title: "Social Media Privacy Tips",
    image: "https://images.unsplash.com/photo-1573152958734-1922c188fba3?q=80&w=600&auto=format&fit=crop",
    category: "Privacy"
  },
  {
    id: "malware-prevention",
    title: "Prevent Malware Infections",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=600&auto=format&fit=crop",
    category: "Malware"
  },
  {
    id: "device-security",
    title: "Secure Your Devices",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600&auto=format&fit=crop",
    category: "Device Security"
  },
  {
    id: "email-security",
    title: "Email Security Best Practices",
    image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=600&auto=format&fit=crop",
    category: "Email"
  }
];
