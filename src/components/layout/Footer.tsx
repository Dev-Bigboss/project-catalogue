import { useRef } from "react";
import { motion, useInView, easeInOut } from "framer-motion";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeInOut,
      },
    },
  };

  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400/30 to-yellow-600/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-gray-700/30 to-gray-900/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "-2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              PROJECT CATALOGUE LIMITED
            </motion.h3>
          </motion.div>

          <motion.p
            className="text-gray-400 mb-6 text-lg max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Your preferred address for luxury real estate development
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
            variants={containerVariants}
          >
            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-yellow-400 font-semibold mb-4 text-lg">
                Quick Links
              </h4>
              <div className="space-y-2">
                <motion.a
                  href="#home"
                  className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Home
                </motion.a>
                <motion.a
                  href="#about"
                  className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  About Us
                </motion.a>
                <motion.a
                  href="#services"
                  className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Services
                </motion.a>
                <motion.a
                  href="#projects"
                  className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Projects
                </motion.a>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-yellow-400 font-semibold mb-4 text-lg">
                Our Services
              </h4>
              <div className="space-y-2">
                <motion.p
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  Project Management
                </motion.p>
                <motion.p
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  Construction Management
                </motion.p>
                <motion.p
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  Design Management
                </motion.p>
                <motion.p
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  Real Estate Development
                </motion.p>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-yellow-400 font-semibold mb-4 text-lg">
                Contact Info
              </h4>
              <div className="space-y-3">
                <motion.div
                  className="flex items-start justify-center md:justify-start space-x-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-300 text-sm text-left">
                    3A, Faramobi Ajike Street, Anthony Village, Maryland, Lagos
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-center justify-center md:justify-start space-x-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-300">+234 903 626 2519</p>
                </motion.div>
                <motion.div
                  className="flex items-center justify-center md:justify-start space-x-3"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-5 h-5 bg-yellow-400 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-300">
                    info@projectcataloguelimited.com
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="border-t border-gray-800 my-8"
            variants={itemVariants}
          />

          {/* Bottom Section */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            variants={itemVariants}
          >
            <motion.p
              className="text-gray-500 text-sm"
              whileHover={{ color: "#9CA3AF" }}
            >
              © 2025 Project Catalogue Limited. All rights reserved. | RC:
              1508332
            </motion.p>

            <motion.div className="flex space-x-6" variants={containerVariants}>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                Terms of Service
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Back to Top Button */}
          <motion.div className="mt-8" variants={itemVariants}>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300 mx-auto flex items-center space-x-2 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Back to Top</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
