import { motion } from 'framer-motion';
import { aboutContent, personalInfo } from '../data/portfolioData';

const techStack = [
  "React", "JavaScript", "Node.js", "Python", "MySQL", "MongoDB", "Git", "GitHub", "Tailwind CSS"
];

const About = () => {
  return (
    <section id="about" className="bg-[#FF2A2A] pt-24 pb-40 px-6 md:px-12 w-full relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex justify-center w-full"
          >
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 transition-transform duration-500"
            >
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src="/assets/profile/profile.jpeg" 
                  alt=" D Kishanrao — Full Stack Developer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Card Info */}
              <div className="p-4 text-center">
                <h3 className="text-white font-black text-lg">{personalInfo.name}</h3>
                <p className="text-white/60 text-xs font-bold uppercase tracking-wider">Full Stack Developer</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: Info Content */}
        <div className="flex-1 text-black mt-8 md:mt-0 relative z-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-4 tracking-tight"
          >
            {aboutContent.heading}
          </motion.h2>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-black mb-8"
          >
            I'm D Kishanrao.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-semibold mb-8 leading-relaxed max-w-2xl"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-base md:text-lg font-medium mb-12 leading-relaxed max-w-2xl text-black/80"
          >
            Computer Science Engineering student with a passion for full-stack development, AI, database systems, and problem solving. I build real-world products and continuously learn new technologies.
          </motion.p>

          {/* Creative Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl font-black tracking-tight">
              I DON'T JUST WRITE CODE.
            </p>
            <p className="text-2xl md:text-3xl font-black tracking-tight mt-2">
              I BUILD <span className="text-white">EXPERIENCES.</span>
            </p>
          </motion.div>

          {/* Floating Tech Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-black text-white text-sm font-bold rounded-full shadow-lg hover:shadow-xl transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-20">
        <svg className="w-16 h-16 animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-20" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20 animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
