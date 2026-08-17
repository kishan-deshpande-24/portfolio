export const projects = [
  {
    id: 1,
    number: "01",
    title: "MARGADARSHAK-AI",
    category: "FULL STACK",
    description: "Margadarshak AI is an AI-powered career development and interview preparation platform",
    longDescription: "The platform combines artificial intelligence, real-time communication, analytics, resume evaluation, career guidance, and collaborative learning into a single ecosystem. Users can assess their interests, generate personalized roadmaps, analyze resumes, practice company-specific interviews, improve English communication, collaborate with teams, and track their progress through an interactive dashboard.",
    problem: "Students struggle with choosing the right career, identifying required skills, building resumes, preparing for interviews, and tracking placement readiness. Existing solutions are scattered and mostly provide generic guidance.",
    solution: "Margadarshak AI is an AI-powered personal career mentor that provides career guidance, skill assessment, personalized learning roadmaps, resume analysis, interview preparation, and placement readiness tracking — all in one platform.",
    image: "/assets/projects/project-1.jpeg",
    technologies: ["HTML", "CSS", "JS", "NODE.JS", "EXPRESS.JS", "MONGOOSE", "etc...."],
    features: [
      "AI Career Guidance – Personalized career recommendations.",

"Skill Assessment – Identifies strengths and skill gaps.",

"AI Roadmap – Creates personalized learning paths.",

 "Resume Analyzer – Improves resume and ATS score.",

"AI Interview Simulator – Practice technical and HR interviews.",

 "AI Career Chatbot – 24/7 career assistance.",

 "Learning Recommendations – Suggests skills, courses and projects.",

"Company Tracker – Tracks company requirements and readiness.",

 "Team Finder – Finds teammates based on skills.",

"Student Community – Connect, share and collaborate.",
    ],
    github: "https://github.com/kishan-deshpande-24/margadarshak-ai.git",
    liveDemo: "https://margadarshak-ai-one.vercel.app/"
  },
  {
    id: 2,
    number: "02",
    title: "CampusVerse",
    category: "FULL STACK",
    description: "An unofficial virtual digital campus platform for college students.",
    longDescription: "CampusVerse is an unofficial digital campus platform designed to bring students, clubs, events, study resources, communication, and campus activities into one centralized platform. It creates a connected student community where students can share information, find teammates, access notes, report lost items, discover events, buy and sell items, communicate in real time, and participate in clubs. An admin system helps manage users, content, clubs, events, and approval workflows.",
    problem: "Students often depend on multiple disconnected platforms for notes, announcements, events, communication, lost and found, buying and selling, team formation, and club activities. Important campus information can be missed, and there is no single platform that connects these activities in an organized and student-friendly way.",
    solution: "CampusVerse provides a single digital campus ecosystem where students can manage their academic and social campus activities from one platform. It combines student communication, resource sharing, events, clubs, marketplace, team finding, and administration with real-time features and secure authentication.",
    image: "/assets/projects/project-2.jpeg",
    technologies: ["React.js", "Vite", "Tailwind CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "JWT Authentication", "bcrypt.js", "Socket.IO",  "Nodemailer", "React Router", "Framer Motion", "Chart.js", "Git", "GitHub"],
    features: [
     "Student Feed", 
     "Anonymous Confessions",
      "Notes Sharing", "Lost & Found", 
      "Classroom Reviews", "Team Finder",
       "Event Hub", "Student Marketplace", 
       "Real-Time Chat", "Club Management", 
       "Club Member ID Cards", "Club Events", 
       "Admin Dashboard", "User Management", 
       "Content Approval", "Event Management", 
       "Notifications", "Student Profiles", 
       "Search and Filtering", "Secure Login and Registration"
    ],
    github: "https://github.com/kishan-deshpande-24/CampusVerse.git",
    liveDemo: "comming soon"
  },
 
];

export const projectCategories = [
  { id: "all", label: "ALL" },
  { id: "full-stack", label: "FULL STACK", value: "FULL STACK" },
  { id: "ai", label: "AI", value: "AI" },
  { id: "web", label: "WEB", value: "WEB" },
  { id: "dbms", label: "DBMS", value: "DBMS" },
  { id: "hackathon", label: "HACKATHON", value: "HACKATHON" }
];
