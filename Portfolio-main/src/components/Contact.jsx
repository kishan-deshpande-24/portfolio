import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { email, socialLinks } from '../data/socialLinks';
import { formspreeEndpoint } from '../data/portfolioData';

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const bgX = useTransform(springX, [0, 1], [-20, 20]);
  const bgY = useTransform(springY, [0, 1], [-20, 20]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;

    if (formspreeEndpoint && formspreeEndpoint.trim() !== '' && !formspreeEndpoint.includes('your_')) {
      try {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _subject: `Portfolio Contact: ${formData.subject || 'New Message'}`
          })
        });

        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setStatus('idle'), 4000);
          return;
        }
      } catch (error) {
        console.error('Formspree Error:', error);
      }
    }

    window.location.href = mailtoLink;
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  const socialLinksList = [
    { name: "LinkedIn", url: socialLinks.find(s => s.name === "LinkedIn")?.url || "", description: "Professional journey & connections", icon: "in" },
    { name: "Instagram", url: socialLinks.find(s => s.name === "Instagram")?.url || "", description: "Life beyond the code", icon: "ig" },
    { name: "GitHub", url: socialLinks.find(s => s.name === "GitHub")?.url || "", description: "Code, experiments & projects", icon: "gh" },
    { name: "LeetCode", url: socialLinks.find(s => s.name === "LeetCode")?.url || "", description: "DSA practice & problem solving", icon: "lc" }
  ];

  return (
    <section id="contact" className="w-full py-24 px-6 md:px-12 bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        onMouseMove={handleMouseMove}
      >
        <motion.div style={{ x: bgX, y: bgY }} className="absolute top-20 left-20 w-96 h-96 bg-[#FF2A2A]/10 rounded-full blur-[120px]"></motion.div>
        <motion.div style={{ x: bgX, y: bgY }} className="absolute bottom-20 right-20 w-96 h-96 bg-[#FF2A2A]/5 rounded-full blur-[100px]"></motion.div>
        <motion.div style={{ x: bgX, y: bgY }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2A2A]/5 rounded-full blur-[150px]"></motion.div>
        
        {/* Floating geometric shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-40 w-32 h-32 border border-white/5 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-40 w-24 h-24 border border-[#FF2A2A]/10 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#FF2A2A]/30 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-white/10 rounded-full"
        ></motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header with typing effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <motion.span 
            className="inline-block px-4 py-1.5 bg-[#FF2A2A]/10 text-[#FF2A2A] text-xs font-black tracking-widest uppercase rounded-full mb-6 border border-[#FF2A2A]/20"
            whileHover={{ scale: 1.05 }}
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            LET'S BUILD <span className="text-[#FF2A2A]">SOMETHING</span>
          </motion.h2>
          <motion.p 
            className="text-white/60 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Have an idea, project, collaboration or opportunity? Let's turn it into something real.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Side: Creative Layout */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                LET'S BUILD
                <br />
                SOMETHING
                <br />
                <span className="text-[#FF2A2A]">GREAT.</span>
              </h3>
            </motion.div>

            {/* Social Cards with hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {socialLinksList.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#FF2A2A]/50 hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)] transition-all duration-500 relative overflow-hidden"
                >
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF2A2A]/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <h4 className="text-white font-black text-lg mb-1 group-hover:text-[#FF2A2A] transition-colors">
                        {social.name}
                      </h4>
                      <p className="text-white/50 text-xs font-medium">
                        {social.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#FF2A2A] text-xs font-black opacity-0 group-hover:opacity-100 transition-opacity">
                        {social.icon}
                      </span>
                      <svg className="w-6 h-6 text-white/30 group-hover:text-[#FF2A2A] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Email Card with pulse */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-4"
            >
              <motion.a
                href={`mailto:${email}`}
                className="group flex items-center justify-between bg-[#FF2A2A]/10 backdrop-blur-md border border-[#FF2A2A]/20 rounded-2xl p-6 hover:bg-[#FF2A2A]/20 transition-all duration-500 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                {/* Animated pulse */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-[#FF2A2A]/10 rounded-2xl"
                ></motion.div>
                
                <div className="relative z-10">
                  <h4 className="text-[#FF2A2A] font-black text-lg mb-1">
                    EMAIL ME
                  </h4>
                  <p className="text-white/60 text-sm font-medium">
                    {email}
                  </p>
                </div>
                <svg className="w-6 h-6 text-[#FF2A2A] group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side: Creative Contact Form */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-[#FF2A2A]/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF2A2A]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#FF2A2A]/5 rounded-full blur-xl translate-y-1/2 -translate-x-1/2"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-white/60 text-xs font-bold tracking-widest uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF2A2A] focus:bg-white/10 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-white/60 text-xs font-bold tracking-widest uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF2A2A] focus:bg-white/10 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-white/60 text-xs font-bold tracking-widest uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF2A2A] focus:bg-white/10 transition-all"
                    placeholder="Let's work together"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-white/60 text-xs font-bold tracking-widest uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF2A2A] focus:bg-white/10 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full px-8 py-4 rounded-xl font-bold text-sm tracking-wider transition-all duration-300 relative overflow-hidden ${
                    status === 'sending'
                      ? 'bg-white/10 text-white/50 cursor-not-allowed'
                      : status === 'success'
                      ? 'bg-green-600 text-white'
                      : 'bg-[#FF2A2A] text-white hover:bg-white hover:text-black shadow-lg shadow-[#FF2A2A]/30'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === 'sending' ? 'SENDING...' : status === 'success' ? 'MESSAGE SENT ✓' : 'SEND MESSAGE'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
