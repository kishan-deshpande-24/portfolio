import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';

const educationItems = [
    {
      title: education.degree,
      subtitle: education.institution,
      description: `Currently pursuing B.Tech in Computer Science & Engineering. Completed 2nd year with ${education.cgpa}.`,
      badge: "Engineering",
      period: education.graduation,
      logo: "/assets/education/acslogo.jpeg",
      logoAlt: "College Logo"
    },
    {
      title: "Pre-University Course (PUC)",
      subtitle: education.twelfth.school,
      description: `Completed PUC with ${education.twelfth.percentage} percentage.`,
      badge: "PUC",
      period: education.twelfth.year,
      logo: "/assets/education/vphlogo.jpeg",
      logoAlt: "College Logo"
    },
    {
      title: "SSLC (10th Standard)",
      subtitle: education.tenth.school,
      description: `Completed SSLC with ${education.tenth.percentage} percentage.`,
      badge: "School",
      period: education.tenth.year,
      logo: "/assets/education/sjslogo.jpeg",
      logoAlt: "School Logo"
    }
];

const Education = () => {
  return (
    <section id="education" className="w-full py-24 px-6 md:px-12 bg-[#FF2A2A] relative overflow-hidden">
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-black">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight uppercase">
            Education
          </h2>
          <p className="text-black/70 text-base md:text-lg max-w-lg mx-auto">
            Academic milestones that shaped my technical foundation.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative w-full">
          {/* Vertical central line */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-black via-black/50 to-black/10" />

          {/* Timeline Items */}
          <div className="w-full space-y-12 md:space-y-16">
            {educationItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-black rounded-full border-4 border-[#FF2A2A] z-10 shadow-[0_0_15px_#FF2A2A]" />

                {/* Card Content Side */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${
                  index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                }`}>
                  <div className="bg-black text-white p-6 rounded-2xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)] transition-all duration-500 group">
                    
                    {/* Logo placeholder */}
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-[#FF2A2A]/30 transition-all">
                        {item.logo ? (
                          <img src={item.logo} alt={item.logoAlt} className="w-6 h-6 object-contain" />
                        ) : (
                          <svg className="w-5 h-5 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                          </svg>
                        )}
                      </div>
                      <span className="bg-[#FF2A2A]/20 text-black text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-[#FF2A2A]/30">
                        {item.badge}
                      </span>
                    </div>
                    
                    <h3 className="text-white text-lg md:text-xl font-black mb-1 tracking-tight group-hover:text-[#FF2A2A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#FF2A2A] text-xs font-bold font-mono tracking-wider uppercase mb-2">
                      {item.subtitle}
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <p className="text-white/40 text-xs font-mono">
                      {item.period}
                    </p>
                  </div>
                </div>

                {/* Spacing spacer for desktop */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-16 left-6 md:left-16 text-black opacity-20 animate-pulse">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-20 right-8 md:right-24 text-black opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Education;
