
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
    category: "Phishing Awareness"
  },
  {
    id: "password-strength",
    title: "Create Strong Passwords",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=600&auto=format&fit=crop",
    category: "Password Security"
  },
  {
    id: "social-engineering-signs",
    title: "Recognize Social Engineering",
    image: "https://images.unsplash.com/photo-1572059224598-742c3bc6396d?q=80&w=600&auto=format&fit=crop",
    category: "Social Engineering"
  },
  {
    id: "ransomware-prevention",
    title: "Prevent Ransomware Infections",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
    category: "Malware & Ransomware"
  },
  {
    id: "physical-security-tips",
    title: "Secure Your Physical Space",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=600&auto=format&fit=crop",
    category: "Physical Security"
  },
  {
    id: "public-wifi-safety",
    title: "Stay Safe on Public WiFi",
    image: "https://images.unsplash.com/photo-1596003906949-67221c37965c?q=80&w=600&auto=format&fit=crop",
    category: "Public Wi-Fi Risks"
  },
  {
    id: "phishing-red-flags",
    title: "Phishing Email Red Flags",
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142d79c?q=80&w=600&auto=format&fit=crop",
    category: "Phishing Awareness"
  },
  {
    id: "device-security",
    title: "Secure Your Devices",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=600&auto=format&fit=crop",
    category: "Physical Security"
  }
];
