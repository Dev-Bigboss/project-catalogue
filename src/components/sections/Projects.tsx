'use client';
import { motion, useInView, easeInOut } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Eye, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Euphoria Residence I',
    location: 'Victory Park Estate, Osapa London, Lekki, Lagos',
    description: 'A luxurious 5-bedroom detached house with BQ, featuring indoor/outdoor spatial flow, enchanting entry experience, and generous outdoor space.',
    image: '/image2.jpg',
    category: 'Luxury Residential',
    status: 'Completed',
    gradient: 'from-gold via-yellow-400 to-amber-500',
    delay: 0,
    extendedDescription: 'A one-of-a-kind luxurious 5-bedroom detached house plus a BQ on over 2 floors, located in Victory Park Estate, Lekki, Lagos. Characterized by indoor and outdoor spatial flow, an enchanting entry experience, and generous outdoor space that gives occupants a nice getaway experience. The Euphoria Residence infuses style and comfort with communal living, making it the perfect home for your family.',
    features: [
      '5-bedroom detached house with BQ',
      'Indoor/outdoor spatial flow',
      'Enchanting entry experience',
      'Generous outdoor space',
      'Communal living areas',
    ],
    gallery: [
      '/image2-1.jpg',
      '/image2-2.jpg',
      '/image2-3.jpg',
    ],
  },
  {
    id: 2,
    title: 'Euphoria Residence II',
    location: 'Victory Park Estate, Osapa London, Lekki, Lagos',
    description: 'A divine luxury contemporary 5-bedroom detached home with a reflecting pool, gym, cinema, and fully fitted kitchen.',
    image: '/image3.jpg',
    category: 'Luxury Residential',
    status: 'Completed',
    gradient: 'from-gold via-yellow-400 to-amber-500',
    delay: 0.6,
    extendedDescription: 'A divine luxury contemporary 5-bedroom detached home on 2 floors, located in Victory Park Estate, Lekki, Lagos. It boasts a reflecting pool at the ground floor, a fully equipped gym, a cinema, and a fully fitted kitchen. Designed to provide the comforts of peaceful living with modern-style architecture, making it a perfect environment for the lifestyle you deserve.',
    features: [
      '5-bedroom detached house',
      'Reflecting pool on ground floor',
      'Fully equipped gym',
      'Private cinema',
      'Fully fitted kitchen',
      'Modern-style architecture',
    ],
    gallery: [
      '/image3-1.jpg',
      '/image3-2.jpg',
      '/image3-3.jpg',
    ],
  },
  {
    id: 3,
    title: 'NT Apartments I',
    location: 'Thomas Estate, Ajah, Lagos',
    description: '4 units of modern 3-bedroom terrace houses with CCTV security, fitted kitchens, and 24hr backup power supply.',
    image: '/image4.jpg',
    category: 'Modern Residential',
    status: 'Completed',
    gradient: 'from-blue-600 to-purple-600 via-indigo-700',
    delay: 0.4,
    extendedDescription: 'The NT Apartment is a 4-unit development of 3-bedroom terrace houses plus BQ, crafted on ground and first floors with 2 car parking spaces per unit. The ground floor facilitates a living and dining area, a fully fitted kitchen with a store, a visitor\'s toilet, and a maid\'s room, while the upper floor has an en-suite master bedroom and 2 standard bedrooms. Attractions include CCTV security cameras, green areas, paved walkways, individual compounds, and a gatehouse.',
    features: [
      '4 units of 3-bedroom terrace houses',
      '2 car parking spaces per unit',
      'CCTV security cameras',
      'Fully fitted kitchen with store',
      'Green areas and paved walkways',
      'Individual compound and gatehouse',
    ],
    gallery: [
      '/image4-1.jpg',
      '/image4-2.jpg',
      '/image4-3.jpg',
    ],
  },
  {
    id: 4,
    title: 'NT Apartments II',
    location: 'Thomas Estate, Ajah, Lagos',
    description: '6 units of 3-bedroom terrace houses and 1 unit of 2-bedroom terrace with CCTV, fitted kitchens, and 24hr backup power.',
    image: '/VIEW1A.bmp',
    category: 'Modern Residential',
    status: 'Completed',
    gradient: 'from-blue-600 to-purple-600 via-indigo-700',
    delay: 0.8,
    extendedDescription: 'The NT Apartments II comprises 6 units of 3-bedroom terrace houses plus a BQ and 1 unit of a 2-bedroom terrace with 3 car parking spaces per unit. Designed with features like CCTV security cameras, fitted kitchens, 24hr backup power supply, children\'s play area, paved walkways, and green areas. Crafted at a serene location for a quality communal living experience.',
    features: [
      '6 units of 3-bedroom terraces, 1 unit of 2-bedroom terrace',
      '3 car parking spaces per unit',
      'CCTV security cameras',
      '24hr backup power supply',
      'Children\'s play area',
      'Paved walkways and green areas',
    ],
    gallery: [
      '/VIEW2A.bmp',
      '/VIEW3C.bmp',
      '/VIEW6A.bmp',
    ],
  },
  {
    id: 5,
    title: 'Grace Court Estate I',
    location: 'Kassim Oyofor Street, Ajah, Lagos',
    description: 'Mini residential development with 23 units of terrace houses featuring gym, bistro, and recreational areas.',
    image: '/image4.jpg',
    category: 'Estate Development',
    status: 'Completed',
    gradient: 'from-gray-700 to-gray-800 via-gray-900',
    delay: 0.2,
    extendedDescription: 'Grace Court Estate is a mini-residential development located in Ajah, Lagos. It includes a total of 6 blocks with 23 units of terrace houses, comprising 16 units of 4-bedroom terraces and 7 units of 2-bedroom terraces, each with a maid\'s room. Units are equipped with 2 parking spaces, a gym, bistro, outdoor recreation area, high-speed internet, and CCTV surveillance.',
    features: [
      '16 units of 4-bedroom terraces, 7 units of 2-bedroom terraces',
      '2 parking spaces per unit',
      'Gym and bistro facilities',
      'Outdoor recreation area',
      'High-speed internet and CCTV surveillance',
    ],
    gallery: [
      '/image6-1.jpg',
      '/image6-2.jpg',
      '/image6-3.jpg',
    ],
  },
  {
    id: 6,
    title: 'Grace Court Estate II',
    location: 'Kassim Oyofor Street, Ajah, Lagos',
    description: 'Continuation of the mini-residential development with additional terrace units and enhanced facilities.',
    image: '/image5.jpg',
    category: 'Estate Development',
    status: 'Ongoing',
    gradient: 'from-gray-700 via-gray-800 to-black',
    delay: 1.0,
    extendedDescription: 'Grace Court Estate II is the continuation of the successful mini-residential development in Ajah, Lagos. It features additional terrace units with the same high-quality standards as Grace Court Estate I, including 4-bedroom and 2-bedroom terraces with maid\'s rooms, 2 parking spaces per unit, and exclusive facilities like a gym, bistro, outdoor recreation area, high-speed internet, and CCTV surveillance.',
    features: [
      'Additional 4-bedroom and 2-bedroom terraces',
      '2 parking spaces per unit',
      'Gym and bistro facilities',
      'Outdoor recreation area',
      'High-speed internet and CCTV surveillance',
    ],
    gallery: [
      '/image7-1.jpg',
      '/image7-2.jpg',
      '/image7-3.jpg',
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: easeInOut,
      },
    },
  };

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden font-lora">
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
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-cinzel"
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
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
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
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative cursor-pointer"
                variants={cardVariants}
                
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <Link href={`/projects/${project.id}`} className="block">
                  <motion.div
                    className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700"
                    whileHover={{
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    {/* Image Container */}
                    <div className="relative h-64 lg:h-72 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Overlay Effects */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
                              : 'bg-yellow-500 text-gray-900'
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
                        <motion.div
                          className="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-white transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye size={18} />
                          View Project
                        </motion.div>
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
                          delay: project.delay,
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
                        className="text-gold font-semibold text-sm uppercase tracking-wider mb-2 block font-cinzel"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: project.delay + 0.4 }}
                      >
                        {project.category}
                      </motion.span>

                      {/* Title */}
                      <motion.h3
                        className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gold transition-colors duration-300 font-cinzel"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: project.delay + 0.5 }}
                      >
                        {project.title}
                      </motion.h3>

                      {/* Location */}
                      <motion.div
                        className="flex items-center gap-2 text-gray-700 mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: project.delay + 0.6 }}
                      >
                        <MapPin size={16} />
                        <span className="text-sm">{project.location}</span>
                      </motion.div>

                      {/* Description */}
                      <motion.p
                        className="text-gray-700 leading-relaxed mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: project.delay + 0.7 }}
                      >
                        {project.description}
                      </motion.p>

                      {/* Learn More Link */}
                      <motion.div
                        className="inline-flex items-center gap-2 text-gold font-semibold hover:text-yellow-500 transition-colors duration-200 group/btn font-cinzel"
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
                      </motion.div>
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
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Projects Button */}
          {/* <motion.div
            className="text-center mt-16"
            variants={itemVariants}
          >
            <motion.button
              className="bg-gradient-to-r from-gold to-yellow-400 text-gray-900 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-cinzel"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}