'use client'

import { motion, useInView, easeInOut } from 'framer-motion'
import { useRef } from 'react'

export default function TechnicalPartners() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  }

  const partners = [
    {
      name: 'City Catalogue Nigeria Limited',
      description: 'An architecture and project management outfit providing one-stop technical and administrative solutions globally, with Nigeria as the foundation.',
      projects: [
        'Architectural design of Independent Power Plant, Eko Electricity Distribution Company, Victoria Island, Lagos.',
        'Architectural design of Marcopolo Estate, Igbo Efon, Lekki, Lagos.',
      ],
    },
    {
      name: 'NIBS & Stones Limited',
      description: 'A team with extensive experience in interior design and office developments, redefining the built environment with functional, sustainable, and aesthetically pleasing spaces.',
      projects: [
        'Interior finishes of MTN Building for James Cubitt, Falomo, Ikoyi, Lagos.',
        'Clickatell office, Wings Building, Ozumba Mbadiwe Avenue, Victoria Island, Lagos.',
      ],
    },
   
    {
      name: 'Ethan Cole Limited',
      description: 'An interior design company specializing in top-notch finishing and fittings for residential and commercial developments worldwide.',
      projects: [
        'Interior finishes of Wema Bank, Sangotedo Branch, Lekki-Epe Expressway, Lagos.',
        'Interior finishes of Spicy Bay Restaurant, Lekki Phase 1, Lagos.',
      ],
    },
    {
      name: 'JB-ZAKEEM LTD',
      description: 'A one-stop shop delivering innovative, high-quality aluminum and glass products and services across Nigeria.',
      projects: [
        'Windows & Doors for 150 units Rainbow Town Estate, Port Harcourt.',
        'Aluminum and Glass works at Bayelsa Government House, Yenagoa, Bayelsa State.',
      ],
    },
  ]

  return (
    <section id="technical-partners" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 border-4 border-gradient-to-r from-yellow-400 to-gold rounded-full animate-spin" style={{ animationDuration: '25s' }} />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-r from-gold/30 to-transparent rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-extrabold text-center text-gray-900 mb-12"
            variants={cardVariants}
          >
            Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Technical Partners</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                variants={cardVariants}
                whileHover={{ scale: 1.03, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-2">{partner.name}</h3>
                  <p className="text-gray-700 text-sm mb-4">{partner.description}</p>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Notable Projects:</h4>
                  <ul className="text-gray-600 text-sm list-disc list-inside">
                    {partner.projects.map((project, idx) => (
                      <li key={idx}>{project}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}