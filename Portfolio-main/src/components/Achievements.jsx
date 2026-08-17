import { motion } from 'framer-motion';
import { achievementsList } from '../data/portfolioData';

const Achievements = () => {
  return (
    <section id="achievements" className="w-full py-24 px-6 md:px-12 bg-[#FF2A2A] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-4 tracking-tight">
            ACHIEVEMENTS
          </h2>
          <p className="text-black/70 text-lg max-w-2xl mx-auto">
            Milestones that mark my journey in tech.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {achievementsList.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black text-white p-8 rounded-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl font-black text-[#FF2A2A]">0{index + 1}</div>
                <div>
                  <h3 className="text-xl font-black mb-2 tracking-tight group-hover:text-[#FF2A2A] transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 text-black opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-20 left-8 md:left-24 text-black opacity-20" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20 animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Achievements;
