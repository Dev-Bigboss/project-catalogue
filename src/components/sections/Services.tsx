'use client';

import { motion, useInView, easeInOut } from 'framer-motion';
import { useRef } from 'react';
import { 
  ClipboardList, 
  Hammer, 
  PenTool, 
  CheckCircle,
  ArrowRight,
  HardHat,
  Users,
  Wrench,
  PaintBucket
} from 'lucide-react';

const services = [
  {
    icon: CheckCircle,
    title: 'Real Estate',
    description: 'Comprehensive real estate development and investment solutions for residential and commercial properties.',
    color: 'from-yellow-400 to-yellow-500',
    delay: 0,
  },
  {
    icon: ClipboardList,
    title: 'Project Management',
    description: 'End-to-end project management ensuring timely delivery and quality execution.',
    color: 'from-yellow-500 to-yellow-600',
    delay: 0.2,
  },
  {
    icon: Hammer,
    title: 'Construction Management',
    description: 'Expert oversight of construction projects with a focus on precision and quality.',
    color: 'from-yellow-600 to-yellow-700',
    delay: 0.4,
  },
  {
    icon: PenTool,
    title: 'Design Management',
    description: 'Innovative architectural designs blending functionality with aesthetic excellence.',
    color: 'from-yellow-500 to-amber-500',
    delay: 0.6,
  },
  {
    icon: Users,
    title: 'Client Representation',
    description: 'Advocating for clients to ensure their vision and interests are fully realized.',
    color: 'from-amber-500 to-amber-600',
    delay: 0.8,
  },
  {
    icon: HardHat,
    title: 'Engineering Services',
    description: 'Specialized engineering solutions for structural and civil project requirements.',
    color: 'from-amber-600 to-amber-700',
    delay: 1.0,
  },
  {
    icon: Wrench,
    title: 'Consultancy Services',
    description: 'Expert guidance on real estate, construction, and project development strategies.',
    color: 'from-yellow-400 to-amber-600',
    delay: 1.2,
  },
  {
    icon: PaintBucket,
    title: 'Renovation',
    description: 'Transforming existing spaces with modern, high-quality finishes and upgrades.',
    color: 'from-yellow-600 to-amber-500',
    delay: 1.4,
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 70, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: easeInOut, 
        bounce: 0.4,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: easeInOut,
      },
    },
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-yellow-100 to-yellow-200 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-yellow-600 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full opacity-20 animate-pulse" style={{ animationDuration: '5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <motion.h2
              className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Our{' '}
              <motion.span
                className="bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent inline-block"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                Services
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Discover our comprehensive real estate and construction services, designed to transform your vision into reality with elegance and precision.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                className="group relative"
                variants={cardVariants}
                whileHover={{ y: -12, scale: 1.04, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <motion.div
                  className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                  whileHover={{
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    initial={{ scale: 0, rotate: 45 }}
                    whileHover={{ scale: 1.6, rotate: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                  />

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      className="w-2 h-2 bg-yellow-500 rounded-full"
                      animate={{
                        y: [-8, 8, -8],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.div
                      className="w-1 h-1 bg-amber-500 rounded-full absolute top-2 right-2"
                      animate={{
                        y: [10, -10, 10],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 0.5,
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: [0, 360], scale: 1.15 }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.h3
                      className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-amber-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                      initial={{ opacity: 0.9 }}
                      whileHover={{ opacity: 1, scale: 1.05 }}
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-600 text-center leading-relaxed group-hover:text-gray-800 transition-colors duration-300"
                      initial={{ opacity: 0.9 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {service.description}
                    </motion.p>

                    <motion.div
                      className="mt-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      <motion.button
                        className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:text-amber-600 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                        <ArrowRight size={16} />
                      </motion.button>
                    </motion.div>

                    <motion.div
                      className="absolute inset-0 border-2 border-transparent rounded-2xl"
                      whileHover={{
                        borderColor: '#f59e0b',
                        boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)',
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-16"
            variants={itemVariants}
          >
            <motion.p
              className="text-lg text-gray-700 mb-8"
              whileHover={{ scale: 1.02 }}
            >
              Ready to transform your vision into reality?
            </motion.p>
            <motion.button
              className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3, boxShadow: '0 15px 30px rgba(245, 158, 11, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}