import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const Resume = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-[#FF2A2A] py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="/assets/profile/profile.jpeg"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-black text-black mb-2 tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-black/80 text-lg md:text-xl font-semibold">
                {personalInfo.title}
              </p>
              <p className="text-black/60 text-sm mt-2">
                {personalInfo.location} • {personalInfo.emails.primary}
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 text-black opacity-20">
          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left Column */}
          <div className="md:col-span-1 space-y-12">
            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[#FF2A2A] text-sm font-black tracking-widest uppercase mb-4">
                Contact
              </h3>
              <div className="space-y-3 text-sm">
                <p className="text-white/80">
                  <span className="text-white/40 block text-xs uppercase tracking-wider mb-1">Email</span>
                  {personalInfo.emails.primary}
                </p>
                {personalInfo.phone && (
                  <p className="text-white/80">
                    <span className="text-white/40 block text-xs uppercase tracking-wider mb-1">Phone</span>
                    {personalInfo.phone}
                  </p>
                )}
                <p className="text-white/80">
                  <span className="text-white/40 block text-xs uppercase tracking-wider mb-1">Location</span>
                  {personalInfo.location}
                </p>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-[#FF2A2A] text-sm font-black tracking-widest uppercase mb-4">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'Node.js', 'Python', 'MySQL', 'MongoDB', 'Git', 'Tailwind CSS', 'AI/ML'].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-[#FF2A2A] text-sm font-black tracking-widest uppercase mb-4">
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-bold text-sm">B.Tech Computer Science</p>
                  <p className="text-white/60 text-xs">ACS college of engineering, Bengaluru</p>
                  <p className="text-white/40 text-xs">2024 - 2028</p>
                </div>
              </div>
            </motion.div>

            {/* Resume PDF Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#FF2A2A] text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg w-full justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Resume PDF
              </a>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-12">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-[#FF2A2A] text-sm font-black tracking-widest uppercase mb-4">
                About Me
              </h3>
              <p className="text-white/80 leading-relaxed">
                {personalInfo.summary}
              </p>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-[#FF2A2A] text-sm font-black tracking-widest uppercase mb-6">
                Experience
              </h3>
              <div className="space-y-8">
                <div className="border-l-2 border-[#FF2A2A] pl-6 relative">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[#FF2A2A] rounded-full"></div>
                  <p className="text-white/40 text-xs font-mono mb-1">2025 - Present</p>
                  <h4 className="text-white font-bold">Full Stack Developer</h4>
                  <p className="text-white/60 text-sm">Building scalable web applications and AI-powered solutions.</p>
                </div>
                <div className="border-l-2 border-white/20 pl-6 relative">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 bg-white/40 rounded-full"></div>
                  <p className="text-white/40 text-xs font-mono mb-1">2024 - 2025</p>
                  <h4 className="text-white font-bold">Web Development Intern</h4>
                  <p className="text-white/60 text-sm">Developed responsive frontend interfaces and REST APIs.</p>
                </div>
              </div>
            </motion.div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-[#FF2A2A] text-sm font-black tracking-widest uppercase mb-6">
                Key Projects
              </h3>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h4 className="text-white font-bold text-sm">MARGADARSHAK-AI</h4>
                  <p className="text-white/60 text-xs mt-1">student learning platform</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['html', 'css', 'JS', 'express.js', 'moongose',].map((tech, i) => (
                      <span key={i} className="text-[10px] bg-[#FF2A2A]/20 text-[#FF2A2A] px-2 py-1 rounded-full font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h4 className="text-white font-bold text-sm">CampusVerse</h4>
                  <p className="text-white/60 text-xs mt-1">unofficial student platform</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['React', 'Node.js', 'MySQL', 'Express'].map((tech, i) => (
                      <span key={i} className="text-[10px] bg-[#FF2A2A]/20 text-[#FF2A2A] px-2 py-1 rounded-full font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
