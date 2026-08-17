import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: "FRONTEND",
      items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
    },
    {
      category: "BACKEND",
      items: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      category: "DATABASE",
      items: ["MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      category: "PROGRAMMING",
      items: ["C", "C++", "Java", "Python", "JavaScript", "SQL"]
    },
    {
      category: "TOOLS",
      items: ["Git", "GitHub", "VS Code", "Postman"]
    }
  ];

  return (
    <section id="skills" className="w-full py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            WHAT I BUILD WITH
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning frontend, backend, databases, and tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full">
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#FF2A2A]/50 p-8 rounded-lg transition-all duration-500 h-full flex flex-col">
                  
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-[#FF2A2A] rounded-full"></div>
                    <h3 className="text-white font-black text-lg tracking-wider">
                      {skillGroup.category}
                    </h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + i * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 bg-white/10 hover:bg-[#FF2A2A] text-white text-sm font-semibold rounded-full transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
