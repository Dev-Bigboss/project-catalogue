/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Project data (same as in projects/page.jsx)
const projects = [
  {
    id: 1,
    title: 'Euphoria Residence I',
    location: 'Victory Park Estate, Osapa London, Lekki, Lagos',
    description: 'A luxurious 5-bedroom detached house with BQ, featuring indoor/outdoor spatial flow, enchanting entry experience, and generous outdoor space.',
    image: '/api/placeholder/1200/600?text=Euphoria+Residence+I',
    category: 'Luxury Residential',
    status: 'Completed',
    gradient: 'from-gold via-yellow-400 to-amber-500',
    extendedDescription: 'A one-of-a-kind luxurious 5-bedroom detached house plus a BQ on over 2 floors, located in Victory Park Estate, Lekki, Lagos. Characterized by indoor and outdoor spatial flow, an enchanting entry experience, and generous outdoor space that gives occupants a nice getaway experience. The Euphoria Residence infuses style and comfort with communal living, making it the perfect home for your family.',
    features: [
      '5-bedroom detached house with BQ',
      'Indoor/outdoor spatial flow',
      'Enchanting entry experience',
      'Generous outdoor space',
      'Communal living areas',
    ],
    gallery: [
      '/api/placeholder/1200/800?text=Euphoria+Residence+I+Main',
      '/api/placeholder/1200/800?text=Euphoria+Residence+I+Interior',
      '/api/placeholder/1200/800?text=Euphoria+Residence+I+Exterior',
    ],
  },
  {
    id: 2,
    title: 'Euphoria Residence II',
    location: 'Victory Park Estate, Osapa London, Lekki, Lagos',
    description: 'A divine luxury contemporary 5-bedroom detached home with a reflecting pool, gym, cinema, and fully fitted kitchen.',
    image: '/api/placeholder/1200/600?text=Euphoria+Residence+II',
    category: 'Luxury Residential',
    status: 'Completed',
    gradient: 'from-gold via-yellow-400 to-amber-500',
    extendedDescription: 'A divine luxury contemporary 5-bedroom detached home on 2 floors, located in Victory Park Estate, Lekki, Lagos. It boasts a reflecting pool at the ground floor, a fully equipped gym, a private cinema, and a fully fitted kitchen. Designed to provide the comforts of peaceful living with modern-style architecture, making it a perfect environment for the lifestyle you deserve.',
    features: [
      '5-bedroom detached house',
      'Reflecting pool on ground floor',
      'Fully equipped gym',
      'Private cinema',
      'Fully fitted kitchen',
      'Modern-style architecture',
    ],
    gallery: [
      '/api/placeholder/1200/800?text=Euphoria+Residence+II+Main',
      '/api/placeholder/1200/800?text=Euphoria+Residence+II+Pool',
      '/api/placeholder/1200/800?text=Euphoria+Residence+II+Gym',
    ],
  },
  {
    id: 3,
    title: 'NT Apartments I',
    location: 'Thomas Estate, Ajah, Lagos',
    description: '4 units of modern 3-bedroom terrace houses with CCTV security, fitted kitchens, and 24hr backup power supply.',
    image: '/api/placeholder/1200/600?text=NT+Apartments+I',
    category: 'Modern Residential',
    status: 'Completed',
    gradient: 'from-blue-600 via-purple-600 to-indigo-700',
    extendedDescription: 'The NT Apartment is a 4-unit development of 3-bedroom terrace houses plus BQ, crafted on ground and first floors with 2 car parking spaces per unit. The ground floor facilitates a living and dining area, a fully fitted kitchen with a store, a visitor’s toilet, and a maid’s room, while the upper floor has an en-suite master bedroom and 2 standard bedrooms. Attractions include CCTV security cameras, green areas, paved walkways, individual compounds, and a gatehouse.',
    features: [
      '4 units of 3-bedroom terrace houses',
      '2 car parking spaces per unit',
      'CCTV security cameras',
      'Fully fitted kitchen with store',
      'Green areas and paved walkways',
      'Individual compound and gatehouse',
    ],
    gallery: [
      '/api/placeholder/1200/800?text=NT+Apartments+I+Main',
      '/api/placeholder/1200/800?text=NT+Apartments+I+Living',
      '/api/placeholder/1200/800?text=NT+Apartments+I+Exterior',
    ],
  },
  {
    id: 4,
    title: 'NT Apartments II',
    location: 'Thomas Estate, Ajah, Lagos',
    description: '6 units of 3-bedroom terrace houses and 1 unit of 2-bedroom terrace with CCTV, fitted kitchens, and 24hr backup power.',
    image: '/api/placeholder/1200/600?text=NT+Apartments+II',
    category: 'Modern Residential',
    status: 'Completed',
    gradient: 'from-blue-600 via-purple-600 to-indigo-700',
    extendedDescription: 'The NT Apartments II comprises 6 units of 3-bedroom terrace houses plus a BQ and 1 unit of a 2-bedroom terrace with 3 car parking spaces per unit. Designed with features like CCTV security cameras, fitted kitchens, 24hr backup power supply, children’s play area, paved walkways, and green areas. Crafted at a serene location for a quality communal living experience.',
    features: [
      '6 units of 3-bedroom terraces, 1 unit of 2-bedroom terrace',
      '3 car parking spaces per unit',
      'CCTV security cameras',
      '24hr backup power supply',
      'Children’s play area',
      'Paved walkways and green areas',
    ],
    gallery: [
      '/api/placeholder/1200/800?text=NT+Apartments+II+Main',
      '/api/placeholder/1200/800?text=NT+Apartments+II+Play+Area',
      '/api/placeholder/1200/800?text=NT+Apartments+II+Exterior',
    ],
  },
  {
    id: 5,
    title: 'Grace Court Estate I',
    location: 'Kassim Oyofor Street, Ajah, Lagos',
    description: 'Mini residential development with 23 units of terrace houses featuring gym, bistro, and recreational areas.',
    image: '/api/placeholder/1200/600?text=Grace+Court+Estate+I',
    category: 'Estate Development',
    status: 'Completed',
    gradient: 'from-gray-700 via-gray-800 to-black',
    extendedDescription: 'Grace Court Estate is a mini-residential development located in Ajah, Lagos. It includes a total of 6 blocks with 23 units of terrace houses, comprising 16 units of 4-bedroom terraces and 7 units of 2-bedroom terraces, each with a maid’s room. Units are equipped with 2 parking spaces, a gym, bistro, outdoor recreation area, high-speed internet, and CCTV surveillance.',
    features: [
      '16 units of 4-bedroom terraces, 7 units of 2-bedroom terraces',
      '2 parking spaces per unit',
      'Gym and bistro facilities',
      'Outdoor recreation area',
      'High-speed internet and CCTV surveillance',
    ],
    gallery: [
      '/api/placeholder/1200/800?text=Grace+Court+Estate+I+Main',
      '/api/placeholder/1200/800?text=Grace+Court+Estate+I+Gym',
      '/api/placeholder/1200/800?text=Grace+Court+Estate+I+Recreation',
    ],
  },
  {
    id: 6,
    title: 'Grace Court Estate II',
    location: 'Kassim Oyofor Street, Ajah, Lagos',
    description: 'Continuation of the mini-residential development with additional terrace units and enhanced facilities.',
    image: '/api/placeholder/1200/600?text=Grace+Court+Estate+II',
    category: 'Estate Development',
    status: 'Ongoing',
    gradient: 'from-gray-700 via-gray-800 to-black',
    extendedDescription: 'Grace Court Estate II is the continuation of the successful mini-residential development in Ajah, Lagos. It features additional terrace units with the same high-quality standards as Grace Court Estate I, including 4-bedroom and 2-bedroom terraces with maid’s rooms, 2 parking spaces per unit, and exclusive facilities like a gym, bistro, outdoor recreation area, high-speed internet, and CCTV surveillance.',
    features: [
      'Additional 4-bedroom and 2-bedroom terraces',
      '2 parking spaces per unit',
      'Gym and bistro facilities',
      'Outdoor recreation area',
      'High-speed internet and CCTV surveillance',
    ],
    gallery: [
      '/api/placeholder/1200/800?text=Grace+Court+Estate+II+Main',
      '/api/placeholder/1200/800?text=Grace+Court+Estate+II+Bistro',
      '/api/placeholder/1200/800?text=Grace+Court+Estate+II+Exterior',
    ],
  },
];

export default function ProjectDetail({ params }: PageProps) {
  const { id } = params;
  const project = projects.find((p) => p.id === parseInt(id));
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  if (!project) {
    notFound();
  }

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
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <MapPin size={20} />
            <span>{project.location}</span>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Back Button */}
          <motion.div variants={itemVariants}>
            <Link href="/projects" className="inline-flex items-center gap-2 text-gold hover:text-yellow-500 font-semibold mb-8">
              <ArrowLeft size={20} />
              Back to Projects
            </Link>
          </motion.div>

          {/* Project Details */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-12" variants={containerVariants}>
            {/* Main Content */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{project.extendedDescription}</p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="list-disc pl-6 mb-8 text-gray-600">
                {project.features.map((feature, index) => (
                  <li key={index} className="mb-2">{feature}</li>
                ))}
              </ul>
            </motion.div>

            {/* Sidebar */}
            <motion.div variants={itemVariants}>
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-500 font-medium">Category:</span>
                    <p className="text-gray-900">{project.category}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium">Status:</span>
                    <p className="text-gray-900">{project.status}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium">Location:</span>
                    <p className="text-gray-900">{project.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div className="mt-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.gallery.map((img, index) => (
                <motion.div
                  key={index}
                  className="relative h-64 rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${img})` }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center"
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.button
                      className="text-white px-4 py-2 rounded-full bg-gray-900/50"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Zoom
                    </motion.button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div className="text-center mt-16" variants={itemVariants}>
            <motion.button
              className="bg-gradient-to-r from-gold to-yellow-600 text-black px-10 py-4 rounded-full font-bold text-lg shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us for More Info
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}