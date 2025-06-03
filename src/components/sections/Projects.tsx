'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { MapPin, Eye, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Euphoria Residence',
    location: 'Victory Park Estate, Lekki, Lagos',
    description: '5 Bedroom Detached house with BQ featuring indoor/outdoor spatial flow and enchanting entry experience.',
    image: '/api/placeholder/600/400',
    category: 'Luxury Residential',
    status: 'Completed',
    gradient: 'from-gold via-yellow-400 to-amber-500',
    delay: 0,
  },
  {
    id: 2,
    title: 'Grace Court Estate',
    location: 'Kassim Oyofor Street, Ajah, Lagos',
    description: 'Mini residential development with 23 units of Terrace houses featuring gym, bistro, and recreational areas.',
    image: '/api/placeholder/600/400',
    category: 'Estate Development',
    status: 'Ongoing',
    gradient: 'from-gray-700 via-gray-800 to-black',
    delay: 0.2,
  },
  {
    id: 3,
    title: 'NT Apartments',
    location: 'Thomas Estate, Ajah, Lagos',
    description: 'Modern terrace houses with CCTV security, fitted kitchens, and 24hr backup power supply.',
    image: '/api/placeholder/600/400',
    category: 'Modern Living',
    status: 'Completed',
    gradient: 'from-blue-600 via-purple-600 to-indigo-700',
    delay: 0.4,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

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
    hidden: { opacity: 0, y: 80, scale: 0.9 },
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
    hidden: { opacity: 0, y: 60, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gold to-yellow-400 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border-4 border-gold rounded-full animate-spin" style={{ animationDuration: '25s' }} />
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
              Featured{' '}
              <motion.span
                className="gradient-text inline-block"
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Projects
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Discover our portfolio of luxury developments that showcase our commitment to 
              excellence and innovation in real estate.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative"
                variants={cardVariants}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <motion.div
                  className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700"
                  whileHover={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {/* Image Container */}
                  <div className="relative h-64 lg:h-72 overflow-hidden">
                    {/* Gradient Background (placeholder for image) */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                      animate={{
                        scale: hoveredProject === project.id ? 1.1 : 1,
                        rotate: hoveredProject === project.id ? 2 : 0,
                      }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />

                    {/* Overlay Effects */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />

                    {/* Status Badge */}
                    <motion.div
                      className="absolute top-4 left-4 z-10"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: project.delay + 0.3 }}
                    >
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          project.status === 'Completed'
                            ? 'bg-green-500 text-white'
                            : 'bg-yellow-500 text-black'
                        }`}
                      >
                        {project.status}
                      </span>
                    </motion.div>

                    {/* View Project Button */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <motion.button
                        className="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-white transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye size={18} />
                        View Project
                      </motion.button>
                    </motion.div>

                    {/* Floating Elements */}
                    <motion.div
                      className="absolute top-1/2 right-6 w-3 h-3 bg-white/70 rounded-full"
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.5,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <motion.div
                    className="p-6 lg:p-8"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {/* Category */}
                    <motion.span
                      className="text-gold font-semibold text-sm uppercase tracking-wider mb-2 block"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: project.delay + 0.4 }}
                    >
                      {project.category}
                    </motion.span>

                    {/* Title */}
                    <motion.h3
                      className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gold transition-colors duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: project.delay + 0.5 }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Location */}
                    <motion.div
                      className="flex items-center gap-2 text-gray-600 mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: project.delay + 0.6 }}
                    >
                      <MapPin size={16} />
                      <span className="text-sm">{project.location}</span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      className="text-gray-600 leading-relaxed mb-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: project.delay + 0.7 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Learn More Link */}
                    <motion.button
                      className="inline-flex items-center gap-2 text-gold font-semibold hover:text-yellow-500 transition-colors duration-200 group/btn"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: project.delay + 0.8 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <ExternalLink size={16} />
                      </motion.div>
                    </motion.button>
                  </motion.div>

                  {/* Border Glow Effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent rounded-3xl"
                    whileHover={{
                      borderColor: '#d4af37',
                      boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Projects Button */}
          <motion.div
            className="text-center mt-16"
            variants={itemVariants}
          >
            <motion.button
              className="bg-gradient-to-r from-gold to-yellow-400 text-black px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}