import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';

const Certifications = () => {
  return (
    <section id="certifications" className="w-full py-24 px-6 md:px-12 bg-black relative overflow-hidden">
      
      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#FF2A2A]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            CERTIFICATIONS
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            LEARNING NEVER STOPS.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-[#FF2A2A]/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden bg-gray-800">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/40 text-xs font-mono font-bold tracking-widest">
                    CERTIFICATION {cert.number}
                  </span>
                  <span className="text-[#FF2A2A] text-xs font-bold">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-white font-black text-lg mb-1 tracking-tight group-hover:text-[#FF2A2A] transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-white/60 text-sm font-semibold mb-4">
                  {cert.organization}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="text-xs bg-white/10 text-white/80 px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10">
                  {cert.link && cert.link !== 'YOUR_CERTIFICATE_URL' ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#FF2A2A] text-sm font-bold hover:text-white transition-colors group/link"
                    >
                      VIEW CERTIFICATE ↗
                      <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-white/40 text-sm font-bold">
                      CERTIFICATE — COMING SOON
                    </span>
                  )}
                </div>

                <p className="text-white/30 text-xs font-mono mt-2">
                  ID: {cert.credentialId}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
