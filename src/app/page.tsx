'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Team from '@/components/sections/Team'
import Contact from '@/components/sections/Contact'
import TechnicalPartners from '@/components/sections/TechnicalPartners'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  // const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%'])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Background Elements */}
      <motion.div 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-gold rounded-full mix-blend-multiply filter blur-xl animate-floating" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-floating [animation-delay:-1s]" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-floating [animation-delay:-2s]" />
      </motion.div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Team />
        <TechnicalPartners />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}