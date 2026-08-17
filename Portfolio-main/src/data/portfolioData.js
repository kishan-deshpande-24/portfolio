export const personalInfo = {
  name: "D KISHANRAO",
  firstName: "D KISHANRAO",
  brandName: "D KISHANRAO",
  title: "Full Stack Developer",
  location: "India",
  phone: "",
  emails: {
    primary: import.meta.env.VITE_CONTACT_EMAIL || "your.email@example.com",
    secondary: "",
  },
  summary:
    "Computer Science Engineering student and Full Stack Developer turning ideas into scalable digital products. I build modern web applications, AI-powered experiences and practical solutions that solve real problems.",
  resumeUrl: import.meta.env.VITE_RESUME_URL || "/resume.pdf",
};

export const heroContent = {
  greeting: "Hi, I'm a",
  subtitle:
    "Computer Science Engineering student and Full Stack Developer turning ideas into scalable digital products. I build modern web applications, AI-powered experiences and practical solutions that solve real problems.",
  ctaPrimary: { text: "VIEW MY WORK", href: "#projects" },
  ctaSecondary: {
    text: "CONTACT ME",
    href: "#contact",
  },
};

export const aboutContent = {
  heading: "HELLO!",
  bio: `I'm <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">D Kishanrao</span>. Curiosity started the journey. Building things turned it into a passion.`,
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "ACS COLLEGE OF ENGINEERING BENGALURU",
  cgpa: "8.6 SGPA (4th Sem)",
  graduation: "2024 - 2028",
  twelfth: {
    school: "Smt Vidya P Hanchinmani PU College, Dharwad",
    percentage: "90.05%",
    year: "2024"
  },
  tenth: {
    school: "Shree Jnana Sanjeevini School, Lingusgur",
    percentage: "94.75%",
    year: "2022"
  }
};

export const achievementsList = [
  {
    title: "CICADA HACKATHON",
    description: "Participated and showcased innovative solutions."
  },
  {
    title: "ANVESHANA 2K25",
    description: "Second Prize winner."
  },
  {
    title: "SIH PARTICIPATION",
    description: "College-level participation."
  },
  {
    title: "OPEN SOURCE",
    description: "Active contributions to open-source projects."
  }
];

export const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";
