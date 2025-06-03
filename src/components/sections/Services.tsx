'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  ClipboardList, 
  Hammer, 
  PenTool, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react'

const services = [
  {
    icon: ClipboardList,
    title: 'Project Management',
    description: 'End-to-end project management ensuring timely delivery and quality execution.',
    color: 'from-blue-500 to-blue-600',
    delay: 0,
  },
  {
    icon: Hammer,
    title: 'Construction Management',
    description: 'Professional construction oversight with attention to detail and quality.',
    color: 'from-red-500 to-red-600',
    delay: 0.2,
  },
  {
    icon: PenTool,
    title: 'Design Management',
    description: 'Innovative architectural design solutions that blend functionality with aesthetics.',
    color: 'from-purple-500 to-purple-600',
    delay: 0.4,
  },
  {
    icon: CheckCircle,
    title: 'Real Estate',
    description: 'Comprehensive real estate development and investment solutions.',
    color: 'from-green-500 to-green-600',
    delay: 0.6,
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-gold to-yellow-400 rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-gold rounded-full animate-spin" style={{ animationDuration: '30s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-30 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <motion.h2
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Our{' '}
              <motion.span
                className="gradient-text inline-block"
                whileHover={{ scale: 1.05, rotateY: 15 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Services
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              We offer comprehensive real estate development services to bring your vision to life 
              with unmatched quality and precision.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                className="group relative"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <motion.div
                  className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                  whileHover={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  {/* Background Gradient on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    initial={{ scale: 0, rotate: 45 }}
                    whileHover={{ scale: 1.5, rotate: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />

                  {/* Floating Particles */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      className="w-2 h-2 bg-gold rounded-full"
                      animate={{
                        y: [-5, 5, -5],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                      <service.icon className="w-8 h-8 text-black" />
                    </motion.div>

                    {/* Content */}
                    <motion.h3
                      className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-gold transition-colors duration-300"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1.05 }}
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Learn More Button - Appears on Hover */}
                    <motion.div
                      className="mt-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      <motion.button
                        className="inline-flex items-center gap-2 text-gold font-semibold hover:text-yellow-500 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                        <ArrowRight size={16} />
                      </motion.button>
                    </motion.div>

                    {/* Border Animation */}
                    <motion.div
                      className="absolute inset-0 border-2 border-transparent rounded-2xl"
                      whileHover={{
                        borderColor: '#d4af37',
                        boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            variants={itemVariants}
          >
            <motion.p
              className="text-lg text-gray-600 mb-8"
              whileHover={{ scale: 1.02 }}
            >
              Ready to start your next project?
            </motion.p>
            <motion.button
              className="bg-gradient-to-r from-gold to-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}