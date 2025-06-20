'use client'

import { motion, useInView, easeInOut } from 'framer-motion'
import { useRef } from 'react'
// import AnimatedSection from '@/components/animations/AnimatedSection'

export default function About() {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  }

  const statsVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeInOut,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, rotateY: -15, z: -100 },
    visible: {
      opacity: 1,
      rotateY: 0,
      z: 0,
      transition: {
        duration: 1,
        ease: easeInOut,
      },
    },
  }

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 border-4 border-gold rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-gold to-transparent rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <motion.h2
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
              variants={itemVariants}
            >
              About{' '}
              <motion.span
                className="gradient-text inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Us
              </motion.span>
            </motion.h2>

            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.p
                className="text-gray-600 text-lg leading-relaxed"
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Project Catalogue Limited (RC: 1508332) is a progressive real estate development 
                company and subsidiary of City Catalogue Nigeria Limited. We are an architectural 
                & construction outfit with an energetic team committed to providing{' '}
                <motion.span
                  className="text-gold font-semibold"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  one-stop housing solutions
                </motion.span>{' '}
                to our clientele across the world with Nigeria as the foundation.
              </motion.p>

              <motion.p
                className="text-gray-600 text-lg leading-relaxed"
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                We transform landscapes with effective presence in Nigeria, Africa and 
                internationally by transmitting concepts and ideas into substantial realities. 
                We create worlds where our clients live life in{' '}
                <motion.span
                  className="text-gold font-semibold"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  style and elegance
                </motion.span>
                .
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-8 mt-12"
              variants={itemVariants}
            >
              <motion.div
                className="text-center group cursor-default"
                variants={statsVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-4xl lg:text-5xl font-bold gradient-text mb-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 2, ease: 'easeOut' }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  >
                    50+
                  </motion.span>
                </motion.div>
                <div className="text-gray-600 font-medium group-hover:text-gold transition-colors duration-300">
                  Projects Completed
                </div>
              </motion.div>

              <motion.div
                className="text-center group cursor-default"
                variants={statsVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-4xl lg:text-5xl font-bold gradient-text mb-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 2, ease: 'easeOut' }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 2, delay: 0.7 }}
                  >
                    15+
                  </motion.span>
                </motion.div>
                <div className="text-gray-600 font-medium group-hover:text-gold transition-colors duration-300">
                  Years Experience
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Vision/Mission Card */}
          <motion.div
            className="relative perspective-1000"
            variants={cardVariants}
          >
            <motion.div
              className="relative transform-gpu"
              whileHover={{
                rotateY: 5,
                rotateX: 5,
                scale: 1.02,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Card Shadow/Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-yellow-400 rounded-2xl transform rotate-3 scale-105 opacity-20" />
              
              {/* Main Card */}
              <motion.div
                className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 lg:p-12 text-white shadow-2xl overflow-hidden"
                whileHover={{ boxShadow: '0 25px 50px -12px rgba(212, 175, 55, 0.3)' }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 border-2 border-gold rounded-full" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gold/20 rounded-full" />
                </div>

                <div className="relative z-10 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 gradient-text">
                      Our Vision
                    </h3>
                    <p className="leading-relaxed text-gray-300">
                      To be clear leaders in the housing industry and be Nigeria&apos;s First Choice 
                      Real Estate Consortium.
                    </p>
                  </motion.div>

                  <motion.div
                    className="h-px bg-gradient-to-r from-transparent via-gold to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 gradient-text">
                      Our Mission
                    </h3>
                    <p className="leading-relaxed text-gray-300">
                      To be true to our name by providing the best real estate services possible 
                      by transmitting concepts and ideas into substantial realities.
                    </p>
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-1/2 right-8 w-2 h-2 bg-gold rounded-full"
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="absolute bottom-1/4 right-12 w-1 h-1 bg-white rounded-full"
                  animate={{
                    y: [10, -10, 10],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}