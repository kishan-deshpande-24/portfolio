import { useRef } from 'react';
import { motion } from 'framer-motion';
import { heroContent } from '../data/portfolioData';

const Hero = () => {
  const containerRef = useRef(null);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Background Image with subtle animation */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full z-0"
      >
        <img
          src="/assets/profile/hero.jpeg"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center pt-16 md:pt-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row justify-between items-center">
          
          {/* Left Side: Text */}
          <div className="flex flex-col items-start text-left max-w-2xl w-full md:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white/80 text-lg md:text-xl font-medium mb-4"
            >
              {heroContent.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6"
            >
              <span className="text-transparent [-webkit-text-stroke:2px_white] md:[-webkit-text-stroke:3px_white]">
                FULL STACK
              </span>
              <br />
              <span className="text-transparent [-webkit-text-stroke:2px_white] md:[-webkit-text-stroke:3px_white]">
                DEVELOPER
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/70 text-base md:text-lg font-medium mb-8 max-w-md leading-relaxed"
            >
              {heroContent.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-row flex-wrap items-center gap-4"
            >
              <a 
                href={heroContent.ctaPrimary.href}
                className="px-8 py-3 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-all duration-300 shadow-lg"
              >
                {heroContent.ctaPrimary.text}
              </a>
              
              <a 
                href={heroContent.ctaSecondary.href}
                className="px-8 py-3 rounded-full bg-black/40 border border-white text-white font-bold text-sm hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
              >
                {heroContent.ctaSecondary.text}
              </a>
            </motion.div>
          </div>

          {/* Right Side: Image with rotating text */}
          <div className="mt-12 md:mt-0 flex flex-col items-center gap-4 md:gap-6 self-start md:self-auto relative w-full md:w-auto">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Rotating text SVG */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="absolute w-full h-full"
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 200 200"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                      fill="none"
                    />
                  </defs>
                  <text
                    fontSize="14"
                    fontWeight="bold"
                    fill="white"
                    opacity="0.9"
                    letterSpacing="6"
                  >
                    <textPath href="#circlePath" startOffset="0%">
                      BUILD • CREATE • SOLVE • REPEAT •
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* Central Image - NO rotation, just subtle scale */}
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl"
              >
                <img
                  src="/assets/profile/profile.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex-col items-center gap-2"
      >
        <span className="text-white/60 text-xs font-bold tracking-widest uppercase">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg 
            className="w-5 h-5 text-white" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
