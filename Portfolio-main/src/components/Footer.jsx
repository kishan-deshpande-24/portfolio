import { motion } from 'framer-motion';
import { socialLinks, email } from '../data/socialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Journey', 'Contact'];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="bg-black text-white py-20 px-6 md:px-12 w-full border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Logo and Tagline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="mb-16"
        >
          <h3 className="text-4xl md:text-6xl font-black text-white mb-4">
            Kishan<span className="text-[#FF2A2A]">.</span>
          </h3>
          <p className="text-white/60 text-lg max-w-2xl">
            BUILDING DIGITAL EXPERIENCES WITH CODE & CURIOSITY.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16 py-12 border-y border-white/10">
          
          {/* Navigation */}
          <div>
            <h4 className="font-black text-sm tracking-widest mb-6 text-[#FF2A2A]">NAVIGATE</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-black text-sm tracking-widest mb-6 text-[#FF2A2A]">SOCIAL</h4>
            <ul className="space-y-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-[#FF2A2A] transition-colors text-sm"
                  >
                    {social.name} →
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-sm tracking-widest mb-6 text-[#FF2A2A]">CONTACT</h4>
            <a 
              href={`mailto:${email}`}
              className="text-white/60 hover:text-white transition-colors text-sm break-all"
            >
              {email}
            </a>
            <p className="text-white/40 text-xs mt-4">
              Available for freelance projects and opportunities.
            </p>
          </div>

          {/* Quick Info */}
          <div>
            <h4 className="font-black text-sm tracking-widest mb-6 text-[#FF2A2A]">INFO</h4>
            <div className="space-y-3 text-sm">
              <p className="text-white/60">
                Based in India
              </p>
              <p className="text-white/60">
                CS Engineering Student
              </p>
              <p className="text-white/60">
                Full Stack Developer
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Copyright */}
          <p className="text-white/40 text-xs md:text-sm">
            © {currentYear} Kishan. All rights reserved.
          </p>

          {/* Decorative Dot */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="w-3 h-3 bg-[#FF2A2A] rounded-full"
          ></motion.div>

          {/* Scroll to Top */}
          <a 
            href="#home"
            className="text-white/60 hover:text-white transition-colors text-xs md:text-sm font-semibold uppercase tracking-wider"
          >
            ↑ Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
