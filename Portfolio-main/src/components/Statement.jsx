import { motion } from 'framer-motion';

const Statement = () => {
  const words = ['TURNING', 'IDEAS', 'INTO', 'REALITY.'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      }
    }
  };

  return (
    <section className="w-full bg-black py-24 px-6 md:px-12 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        <motion.div
          className="flex flex-col items-center justify-center text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          
          {/* Main Statement Words */}
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 md:gap-12 mb-8">
            {words.map((word, idx) => (
              <motion.div key={idx} variants={wordVariants}>
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none">
                  {idx === words.length - 1 ? (
                    <span className="text-[#FF2A2A]">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </h2>
              </motion.div>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-white/60 mt-12 max-w-2xl mx-auto leading-relaxed"
          >
            Every project is an opportunity to create something meaningful.
            <br />
            From concept to deployment, I craft digital experiences that matter.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
            className="w-32 h-1 bg-[#FF2A2A] mt-12 origin-center"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statement;
