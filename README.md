D KISHANRAO — Full Stack Developer Portfolio
A premium, cinematic personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features a bold RED + BLACK + WHITE design language with smooth animations and a fully responsive layout.

Tech Stack
React — UI library
Vite — Build tool and dev server
Tailwind CSS — Utility-first CSS framework
Framer Motion — Animation library
React Router — Client-side routing
Formspree — Contact form backend (primary)
EmailJS — Contact form backend (optional backup)
Getting Started
Prerequisites
Node.js (v16 or higher)
npm or yarn
Installation
Clone the repository:
git clone <your-repo-url>
cd Portfolio-main/Portfolio-main
Install dependencies:
npm install
Copy environment variables:
cp .env.example .env.local
Update .env.local with your actual values:
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_RESUME_URL=/resume.pdf
VITE_LINKEDIN_URL=https://linkedin.com/in/yourprofile
VITE_INSTAGRAM_URL=https://instagram.com/yourprofile
VITE_GITHUB_URL=https://github.com/yourprofile
VITE_LEETCODE_URL=https://leetcode.com/yourprofile
VITE_CONTACT_EMAIL=your.email@example.com
Start the development server:
npm run dev
Open http://localhost:5173 in your browser.
Build for Production
npm run build
The production-ready files will be in the dist/ folder.

Project Structure
src/
├── components/
│   ├── Preloader.jsx      # Fullscreen red preloader with text fill animation
│   ├── Navbar.jsx         # Fixed navbar with scroll effects and mobile menu
│   ├── Hero.jsx           # Hero section with outlined typography and rotating text ring
│   ├── About.jsx          # Red section with hanging ID badge and floating tech chips
│   ├── Skills.jsx         # Skill categories with animated tags
│   ├── Statement.jsx      # Cinematic "TURNING IDEAS INTO REALITY" section
│   ├── Projects.jsx       # Filterable project grid with 3D tilt cards and modal
│   ├── Education.jsx      # Timeline-style education section with logo placeholders
│   ├── Achievements.jsx   # Achievement cards with large typography
│   ├── Certifications.jsx # Certification cards with credential details
│   ├── Services.jsx       # Service blocks with hover effects
│   ├── Contact.jsx        # Creative contact form with social cards and animations
│   ├── Resume.jsx         # Dedicated resume page with PDF viewer
│   ├── Footer.jsx         # Footer with navigation and social links
│   └── CustomCursor.jsx   # Desktop-only custom cursor
├── data/
│   ├── portfolioData.js   # Personal info, hero, about, skills, education data
│   ├── projects.js        # Project placeholders (edit this to add your projects)
│   ├── certifications.js  # Certification placeholders
│   └── socialLinks.js     # Social media URLs and email
├── assets/
│   ├── profile/           # Hero background and profile images
│   └── education/         # School and college logos
├── App.jsx                # Main app component with routing
├── main.jsx               # React entry point
└── index.css              # Global styles and custom animations
Customization Guide
Personal Information
Edit src/data/portfolioData.js:

export const personalInfo = {
  name: "D KISHANRAO",
  firstName: "D KISHANRAO",
  brandName: "D KISHANRAO",
  title: "Full Stack Developer",
  location: "India",
  phone: "",
  emails: {
    primary: "your.email@example.com",
    secondary: "",
  },
  summary: "Your summary here...",
  resumeUrl: "/resume.pdf",
};
Projects
Edit src/data/projects.js to add your projects:

export const projects = [
  {
    id: 1,
    number: "01",
    title: "Your Project Name",
    category: "FULL STACK",
    description: "Your project description",
    image: "/assets/projects/project-1.jpg",
    technologies: ["React", "Node.js", "MySQL"],
    github: "YOUR_GITHUB_URL",
    liveDemo: "YOUR_LIVE_DEMO_URL",
    problem: "Problem description",
    solution: "Solution description",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    longDescription: "Detailed project description for modal view"
  }
];
Social Links
Edit src/data/socialLinks.js:

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "YOUR_LINKEDIN_URL",
    description: "Professional journey & connections"
  },
  // Add more social links...
];

export const email = "your.email@example.com";
Certifications
Edit src/data/certifications.js:

export const certifications = [
  {
    id: 1,
    number: "01",
    title: "Your Certification Name",
    organization: "Organization Name",
    date: "Month Year",
    credentialId: "CREDENTIAL-ID",
    image: "/assets/certifications/certificate-1.jpg",
    skills: ["Skill 1", "Skill 2"],
    link: "YOUR_CERTIFICATE_URL"
  }
];
Images
Place your images in the public/assets/ folder:

public/assets/profile/hero.jpeg — Hero background image
public/assets/profile/profile.jpeg — Profile/ID badge image
public/assets/education/ — School and college logos
public/assets/certifications/ — Certificate images
public/assets/projects/ — Project screenshots
Resume PDF
Place your resume PDF at public/resume.pdf.

Features
Design
RED + BLACK + WHITE color palette with strong contrast
No gradients — pure flat colors only
Premium typography with tight letter spacing
Glassmorphism effects on cards and buttons
Torn-paper SVG dividers between sections
Animations
Fullscreen red preloader with water-fill text animation
Shutter reveal exit animation
Scroll-triggered fade-up and stagger animations
3D tilt effect on project cards
Infinite marquee for project category filters
Mouse-tracking background glows in contact section
Rotating text ring around profile image
Floating particles and geometric shapes
Custom cursor with context-aware text (desktop only)
Sections
Preloader — Red overlay with animated text fill and shutter reveal
Navbar — Fixed, transparent-to-glass on scroll, mobile hamburger menu
Hero — Outlined typography, CTA buttons, rotating text ring, scroll indicator
About — Red background, hanging ID badge, floating tech chips
Skills — Categorized skill tags with hover effects
Statement — Cinematic full-width black section with red accent
Projects — Filterable grid with 3D cards, hover animations, detail modal
Education — Timeline with alternating cards and logo placeholders
Achievements — Large typography achievement cards
Certifications — Image cards with credential details
Services — Service blocks with hover effects
Contact — Creative form with social cards and mouse-tracking background
Resume — Dedicated page with PDF viewer and experience timeline
Footer — Navigation, social links, animated red dot
Routing
/ — Main portfolio
/resume — Dedicated resume page
Mobile Responsive
Optimized for 320px to 1440px+
Mobile hamburger menu with staggered animations
Touch-friendly controls
No custom cursor on mobile
Reduced animations on small screens
Browser Support
Chrome (latest)
Firefox (latest)
Safari (latest)
Edge (latest)
Auto-Responsive Grids
The Projects and Certifications sections use auto-fit grids. You can add as many items as you want without touching any code — the layout automatically adjusts column count based on screen width and available space.

Section	Min Card Width	Mobile Columns	Tablet Columns	Desktop Columns
Projects	320px	1	1-2	2-3
Certifications	280px	1	1-2	2-4
If you add 20 projects or 15 certificates, the grid will simply create more rows and fit as many columns as the viewport allows.

Scripts
Command	Description
npm run dev	Start development server
npm run build	Build for production
npm run lint	Run ESLint
npm run preview	Preview production build
Deployment
Deploy the dist/ folder to any static hosting service:

Netlify — Drag and drop the dist/ folder
Vercel — Connect your repo and deploy
GitHub Pages — Use npm run build and push dist/ to gh-pages branch
License
MIT License — feel free to use this template for your own portfolio.

Credits
Built with React, Vite, Tailwind CSS, and Framer Motion.
