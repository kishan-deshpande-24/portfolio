import { motion } from 'framer-motion';

const services = [
  {
    number: "01",
    title: "WEB APPLICATIONS",
    description: "Modern responsive applications built with React, JavaScript, and cutting-edge frontend technologies."
  },
  {
    number: "02",
    title: "FULL STACK SYSTEMS",
    description: "End-to-end solutions combining frontend, backend, and database for scalable digital products."
  },
  {
    number: "03",
    title: "AI PRODUCTS",
    description: "Intelligent applications leveraging AI and machine learning to solve real-world problems."
  },
  {
    number: "04",
    title: "DATABASE APPLICATIONS",
    description: "Structured data-driven systems with optimized queries, indexing, and robust architecture."
  },
  {
    number: "05",
    title: "CREATIVE PORTFOLIOS",
    description: "Premium interactive personal websites with cinematic animations and premium design."
  }
];

const Services = () => {
  return (
    <section id="services" className="w-full py-24 px-6 md:px-12 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            WHAT I CAN BUILD
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            From concept to deployment, I deliver complete digital solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#FF2A2A]/50 p-8 rounded-2xl transition-all duration-500"
            >
              <div className="text-5xl font-black text-[#FF2A2A] mb-4 opacity-30 group-hover:opacity-100 transition-opacity">
                {service.number}
              </div>
              <h3 className="text-white text-xl font-black mb-3 tracking-tight group-hover:text-[#FF2A2A] transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
