'use client'

import { motion, useInView, easeInOut } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.8 
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: easeInOut,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}