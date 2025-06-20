'use client'

import { motion, useInView, easeInOut } from 'framer-motion'
import { useRef } from 'react'
import { Award, Star, Briefcase } from 'lucide-react'

// Team Component
export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: easeInOut,
      },
    },
  }

  const teamMembers = [
    {
      name: 'Alh. Najeem Adewale Awodele',
      position: 'Chairman',
      description: 'Former Minister of State for Agriculture and Water Resources, accomplished teacher and consultant with extensive leadership experience.',
      expertise: ['Strategic Leadership', 'Government Relations', 'Business Development', 'Policy Advisory'],
      icon: Award,
      gradient: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'Taiwo Adisa',
      position: 'Managing Director',
      description: 'M.Arch, ARCON - Certified Architect and Project Manager with 11+ years of experience in real estate development.',
      expertise: ['Architectural Design', 'Project Management', 'Urban Planning', 'Construction Oversight'],
      icon: Briefcase,
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      name: 'Abiodun Okunola',
      position: 'Executive Director',
      description: 'Building Technology graduate with MBA, extensive experience in construction management and business finance.',
      expertise: ['Construction Tech', 'Financial Management', 'Operations', 'Business Strategy'],
      icon: Star,
      gradient: 'from-green-600 to-teal-600'
    }
  ]

  return (
    <section id="team" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-yellow-400/20 rounded-full animate-spin" style={{ animationDuration: '60s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <motion.h2
              className="text-5xl lg:text-6xl font-bold mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Leadership{' '}
              <motion.span
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent inline-block"
                whileHover={{ rotateY: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Team
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Meet the experienced professionals driving our vision forward with expertise, 
              innovation, and unwavering commitment to excellence.
            </motion.p>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {teamMembers.map((member) => {
              const IconComponent = member.icon
              return (
                <motion.div
                  key={member.name}
                  className="group relative"
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
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
                    {/* Card Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl" />
                    
                    {/* Card Content */}
                    <div className="relative p-8 h-full">
                      {/* Icon */}
                      <motion.div
                        className={`w-20 h-20 rounded-full bg-gradient-to-r ${member.gradient} flex items-center justify-center mb-6 mx-auto shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </motion.div>

                      {/* Name & Position */}
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {member.name}
                        </h3>
                        <p className={`text-lg font-medium bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                          {member.position}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-center mb-6 leading-relaxed">
                        {member.description}
                      </p>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.expertise.map((skill) => (
                          <motion.span
                            key={skill}
                            className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                            transition={{ type: 'spring', stiffness: 400 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Floating particles effect */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-2 h-2 bg-gradient-to-r ${member.gradient} rounded-full opacity-30`}
                          style={{
                            top: `${20 + i * 30}%`,
                            left: `${10 + i * 20}%`,
                          }}
                          animate={{
                            y: [-10, 10, -10],
                            opacity: [0.3, 0.7, 0.3],
                          }}
                          transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}