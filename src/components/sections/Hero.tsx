'use client';

import { motion, useScroll, useTransform, easeInOut, AnimatePresence } from 'framer-motion';
// import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const { scrollY } = useScroll();
  // const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Slideshow state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/image1.jpg', '/image2.jpg', '/image3.jpg', '/image4.jpg', '/image5.jpg', '/image6.jpg'];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  };

  // const buttonVariants = {
  //   hidden: { opacity: 0, scale: 0.8 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       duration: 0.6,
  //       ease: easeInOut,
  //     },
  //   },
  //   hover: {
  //     scale: 1.05,
  //     transition: {
  //       duration: 0.2,
  //       ease: easeInOut,
  //     },
  //   },
  //   tap: {
  //     scale: 0.95,
  //   },
  // };

  const slideVariants = {
    enter: () => ({
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    }),
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    },
    exit: () => ({
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" custom={currentImageIndex}>
          <motion.div
            key={currentImageIndex}
            custom={currentImageIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
          />
        </AnimatePresence>
      </div>

      {/* Slideshow Indicators */}
      <div className="absolute top-8 right-8 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-gold shadow-lg'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Animated Background Elements */}
      {/* <motion.div
        className="absolute inset-0 opacity-30 z-10"
        style={{ y: y1 }}
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-gold to-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-floating" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-floating [animation-delay:-1s]" />
        <div className="absolute bottom-20 left-1/2 w-88 h-88 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-floating [animation-delay:-2s]" />
      </motion.div> */}

      {/* Geometric Shapes */}
      <motion.div
        className="absolute inset-0 opacity-10 z-10"
        style={{ y: y2 }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-gold rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-gray-800 rotate-12 animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-gold to-transparent rounded-full animate-bounce" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
          >
            PROJECT{' '}
            <motion.span
              className="gradient-text inline-block"
              initial={{ rotateX: -90 }}
              animate={{ rotateX: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: easeInOut,
              }}
            >
              CATALOGUE
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-white mb-12 max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Transforming concepts into{' '}
          <motion.span
            className="text-gold font-semibold"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            substantial realities
          </motion.span>
          . Creating worlds of{' '}
          <motion.span
            className="text-gold font-semibold"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            style, luxury, and elegance
          </motion.span>
          .
        </motion.p>

        {/* <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <motion.button
            className="bg-gradient-to-r from-gold to-yellow-400 text-gray-900 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.span
              className="flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              Explore Projects
              <ArrowDown size={20} />
            </motion.span>
          </motion.button>

          <motion.button
            className="border-2 border-gray-800 text-gray-800 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 hover:text-white transition-all duration-300 backdrop-blur-sm"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </motion.button>
        </motion.div> */}

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-gray-800/50 rounded-full flex justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1 h-3 bg-gray-800/70 rounded-full mt-4"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: easeInOut,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent pointer-events-none z-10" />
    </section>
  );
}