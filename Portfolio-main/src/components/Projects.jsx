import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '../data/projects';

const marqueeVariants = {
  animate: {
    x: [0, -1920],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40,
        ease: "linear"
      }
    }
  }
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter(p => p.category === projectCategories.find(c => c.id === selectedCategory)?.value);
  }, [selectedCategory]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <section id="projects" className="w-full py-24 px-6 md:px-12 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF2A2A]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#FF2A2A]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tight">
                SELECTED <span className="text-[#FF2A2A]">WORK</span>
              </h2>
              <p className="text-white/60 text-lg">
                Ideas turned into working products.
              </p>
            </div>
            <motion.div
              className="text-6xl md:text-8xl font-black text-white/5"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              05
            </motion.div>
          </div>
        </motion.div>

        {/* Category Filter with Marquee */}
        <div className="mb-16 space-y-6">
          {/* Desktop: Horizontal marquee */}
          <div className="hidden md:block relative">
            <div className="overflow-hidden relative">
              <motion.div
                className="flex gap-3 whitespace-nowrap"
                variants={marqueeVariants}
                animate="animate"
              >
                {[...projectCategories, ...projectCategories].map((cat, idx) => (
                  <motion.button
                    key={`${cat.id}-${idx}`}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-6 py-3 rounded-full font-bold text-sm tracking-wider transition-all duration-300 ${
                      selectedCategory === cat.id
                        ? 'bg-[#FF2A2A] text-white shadow-lg shadow-[#FF2A2A]/50'
                        : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {cat.label}
                  </motion.button>
                ))}
              </motion.div>
            </div>
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          </div>

          {/* Mobile: Static filter */}
          <motion.div
            className="flex md:hidden flex-wrap gap-3"
          >
            {projectCategories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-bold text-sm tracking-wider transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-[#FF2A2A] text-white shadow-lg shadow-[#FF2A2A]/50'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 md:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
                onMouseMove={handleMouseMove}
              >
                <motion.div
                  animate={{
                    rotateX: mousePos.y * 5,
                    rotateY: mousePos.x * 5,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative h-full rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-md border border-white/10 hover:border-[#FF2A2A]/50 transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative w-full h-80 overflow-hidden bg-black">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {/* Animated overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 0.8 }}
                    />
                    
                    {/* Floating project number */}
                    <motion.div
                      className="absolute top-4 left-4 text-white font-black text-6xl md:text-7xl opacity-10"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {project.number}
                    </motion.div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#FF2A2A]/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                    {/* View Details Button on Hover */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.button
                        className="px-8 py-3 bg-[#FF2A2A] text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-lg flex items-center gap-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        VIEW DETAILS
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 relative">
                    {/* Category Badge with pulse */}
                    <div className="flex items-center gap-2 mb-3">
                      <motion.span 
                        className="inline-block px-3 py-1 bg-[#FF2A2A]/20 text-[#FF2A2A] text-xs font-bold rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.category}
                      </motion.span>
                      <span className="text-white/30 text-xs font-mono">#{project.number}</span>
                    </div>

                    {/* Title with hover effect */}
                    <motion.h3 
                      className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight group-hover:text-[#FF2A2A] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-white/70 text-sm md:text-base mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies with stagger */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="text-xs bg-white/10 text-white/80 px-3 py-1.5 rounded-full hover:bg-[#FF2A2A]/20 hover:text-[#FF2A2A] transition-all cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links with arrow animation */}
                    <div className="flex gap-3 pt-6 border-t border-white/10">
                      <motion.a
                        href={project.github || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2.5 bg-white/5 hover:bg-[#FF2A2A] text-white text-sm font-bold rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-2 group/link"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => {
                          if (!project.github || project.github === 'YOUR_GITHUB_URL') {
                            e.preventDefault();
                          }
                        }}
                      >
                        <span>GITHUB</span>
                        <svg className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.a>
                      <motion.a
                        href={project.liveDemo || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2.5 bg-[#FF2A2A] hover:bg-white hover:text-black text-white text-sm font-bold rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-2 group/link"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => {
                          if (!project.liveDemo || project.liveDemo === 'YOUR_LIVE_DEMO_URL') {
                            e.preventDefault();
                          }
                        }}
                      >
                        <span>LIVE DEMO</span>
                        <svg className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.a>
                    </div>
                  </div>

                  {/* Bottom glow */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[#FF2A2A]/5 rounded-full blur-[60px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20 relative"
            >
              {/* Modal Header Image */}
              <div className="relative w-full h-96 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/10 hover:bg-[#FF2A2A] text-white p-3 rounded-full transition-all backdrop-blur-sm"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-12 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-5xl md:text-6xl font-black text-[#FF2A2A]">{selectedProject.number}</h2>
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#FF2A2A]/20 text-[#FF2A2A] text-xs font-bold rounded-full mb-2">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black">{selectedProject.title}</h3>
                  </div>
                </div>

                <p className="text-white/70 text-lg mb-8 leading-relaxed">{selectedProject.longDescription}</p>

                {/* Problem & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h4 className="text-xl font-black text-[#FF2A2A] mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#FF2A2A] rounded-full"></span>
                      PROBLEM
                    </h4>
                    <p className="text-white/70 leading-relaxed">{selectedProject.problem}</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h4 className="text-xl font-black text-[#FF2A2A] mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#FF2A2A] rounded-full"></span>
                      SOLUTION
                    </h4>
                    <p className="text-white/70 leading-relaxed">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-xl font-black text-[#FF2A2A] mb-4">KEY FEATURES</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 text-white/70"
                      >
                        <span className="text-[#FF2A2A] font-bold mt-1 text-lg">▸</span>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-xl font-black text-[#FF2A2A] mb-4">TECHNOLOGIES USED</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-white/10 text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-[#FF2A2A]/20 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-8 border-t border-white/20">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-white/10 hover:bg-[#FF2A2A] text-white font-bold rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      if (!selectedProject.github || selectedProject.github === 'YOUR_GITHUB_URL') {
                        e.preventDefault();
                      }
                    }}
                  >
                    <span>{!selectedProject.github || selectedProject.github === 'YOUR_GITHUB_URL' ? 'GITHUB — COMING SOON' : 'VIEW ON GITHUB'}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-[#FF2A2A] hover:bg-white hover:text-black text-white font-bold rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      if (!selectedProject.liveDemo || selectedProject.liveDemo === 'YOUR_LIVE_DEMO_URL') {
                        e.preventDefault();
                      }
                    }}
                  >
                    <span>{!selectedProject.liveDemo || selectedProject.liveDemo === 'YOUR_LIVE_DEMO_URL' ? 'LIVE DEMO — COMING SOON' : 'LIVE DEMO'}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
