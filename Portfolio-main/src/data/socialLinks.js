export const socialLinks = [
  {
    name: "LinkedIn",
    url: import.meta.env.VITE_LINKEDIN_URL || "YOUR_LINKEDIN_URL",
    description: "Professional journey & connections"
  },
  {
    name: "Instagram",
    url: import.meta.env.VITE_INSTAGRAM_URL || "YOUR_INSTAGRAM_URL",
    description: "Life beyond the code"
  },
  {
    name: "GitHub",
    url: import.meta.env.VITE_GITHUB_URL || "YOUR_GITHUB_URL",
    description: "Code, experiments & projects"
  },
  {
    name: "LeetCode",
    url: import.meta.env.VITE_LEETCODE_URL || "YOUR_LEETCODE_URL",
    description: "DSA practice & problem solving"
  }
];

export const email = import.meta.env.VITE_CONTACT_EMAIL || "your.email@example.com";
