"use client";

import {
  motion,
  easeInOut,
  AnimatePresence,
} from "framer-motion";
// import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from "react";

export default function Hero() {
  // const y1 = useTransform(scrollY, [0, 300], [0, 100]);

  // Slideshow state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg",
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [images.length]);

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
    enter: {
      opacity: 0,
      transition: {
        duration: 1.2,
        ease: easeInOut,
      },
    },
    center: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1.2,
        ease: easeInOut,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 bg-gray-900">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
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
                ? "bg-gold shadow-lg"
                : "bg-white/50 hover:bg-white/70"
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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent pointer-events-none z-10" />
    </section>
  );
}
