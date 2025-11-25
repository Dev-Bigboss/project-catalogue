/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { MapPin, ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Project {
  id: number;
  title: string;
  location: string;
  description: string;
  image: string;
  category: string;
  status: string;
  gradient: string;
  delay: number;
  extendedDescription: string;
  features: string[];
  gallery: string[];
}


const projects = [
  {
    id: 1,
     title: 'NT Apartments I',
    location: 'Thomas Estate, Ajah, Lagos',
    description: '4 units of modern 3-bedroom terrace houses with CCTV security, fitted kitchens, and 24hr backup power supply.',
    image: '/NTAI1.jpg',
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
      '/NTAI1.jpg',
      '/NTAI2.jpg',
      '/NTAI3.jpg',
      '/NTAI4.jpg',
      '/NTAI5.jpg',
      '/NTAI6.jpg',
      '/NTAI7.jpg',
    ],
  },
  {
    id: 2,
    title: 'NT Apartments II',
    location: 'Thomas Estate, Ajah, Lagos',
    description: '6 units of 3-bedroom terrace houses and 1 unit of 2-bedroom terrace with CCTV, fitted kitchens, and 24hr backup power.',
    image: '/NTAII1.jpg',
    category: 'Modern Residential',
    status: 'Ongoing',
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
      '/NTAII1.jpg',
      '/NTAII2.jpg',
      '/NTAII3.jpg',
      '/NTAII4.jpg',
      '/NTAII5.jpg',
      '/NTAII6.jpg',
      '/NTAII7.jpg',
      '/NTAII8.jpg',
    ],
  },
  {
    id: 3,
    title: 'NT Apartments II (ANNEX)',
    location: 'Thomas Estate, Ajah, Lagos',
    description: '3units of 3 Bedroom Terrace + BQ and 2 units of 3 Bedroom Semi-detached + BQ',
    image: '/NTANNEXII1.jpg',
    category: 'Modern Residential',
    status: 'Ongoing',
    gradient: 'from-blue-600 to-purple-600 via-indigo-700',
    delay: 0.4,
    extendedDescription: 'The NT Apartment is a 3-unit development of 3-bedroom terrace houses plus BQ, crafted on ground and first floors with 2 car parking spaces per unit. The ground floor facilitates a living and dining area, a fully fitted kitchen with a store, a visitor\'s toilet, and a maid\'s room, while the upper floor has an en-suite master bedroom and 2 standard bedrooms. Attractions include CCTV security cameras, green areas, paved walkways, individual compounds, and a gatehouse.',
    features: [
      '3 units of 3-bedroom terrace houses',
      '2 car parking spaces per unit',
      'CCTV security cameras',
      'Fully fitted kitchen with store',
      'Green areas and paved walkways',
      'Individual compound and gatehouse',
    ],
    gallery: [
      '/NTANNEXII1.jpg',
      '/NTANNEXII2.bmp',
      '/NTANNEXII3.bmp',
      '/NTANNEXII4.bmp',
      '/NTANNEXII5.bmp',
      '/NTANNEXII6.bmp',
    ],
  },
  {
    id: 4,
    title: 'NT Court',
    location: 'Thomas Estate, Ajah, Lagos',
    description: ' 5 units of Exclusive 2 Bedroom Terrace',
    image: '/NTC.jpg',
    category: 'Modern Residential',
    status: 'Ongoing',
    gradient: 'from-blue-600 to-purple-600 via-indigo-700',
    delay: 0.8,
    extendedDescription: 'The Court comprises 5 units of Exclusive 2 Bedroom Terrace. Designed with features like CCTV security cameras, fitted kitchens, 24hr backup power supply, children\'s play area, paved walkways, and green areas. Crafted at a serene location for a quality communal living experience.',
    features: [
      ' 5 units of Exclusive 2 Bedroom Terrace',
      'CCTV security cameras',
      '24hr backup power supply',
      'Children\'s play area',
      'Paved walkways and green areas',
    ],
    gallery: [
      '/NTC.jpg',
      '/NTC2.jpg',
      '/NTC3.jpg',
      '/NTC4.jpg',
      '/NTC5.jpg',
    ],
  },
  {
    id: 5,
    title: 'Grace Court Estate I',
    location: 'Kassim Oyofor Street, Ajah, Lagos',
    description: 'Mini residential development with 23 units of terrace houses featuring gym, bistro, and recreational areas.',
    image:'/GCI1.jpg',
    category: 'Estate Development',
    status: 'Ongoing',
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
     '/GCI1.jpg',
     '/GCI2.jpg',
     '/GCI3.jpg',
     '/GCI4.jpg',
     '/GCI5.jpg',
     '/GCI6.jpg',
     '/GCI7.jpg',
     '/GCI8.jpg',
     '/GCI9.jpg'   
    ],
  },
  {
    id: 6,
    title: 'Abimbola Court',
    location: 'Sawyerr Close, Anthony, Lagos.',
    description: ' 4 Bedroom Duplex and 3 Bedroom Terrace + BQ.',
    image: '/abimb1.jpg',
    category: 'Modern Residential',
    status: 'Coming soon',
    gradient: 'from-gray-700 via-gray-800 to-black',
    delay: 1.0,
    extendedDescription: 'Abimbola Court is a premium luxury mini-estate houses four (4) units of exclusive 3 Bedroom Terrace + BQ and one (1) unit of 4 Bedroom Duplex + BQ with two car parking spaces per unit located at Sawyerr Close, Anthony, Lagos.',
    features: [
      'Basic and standard facilities of a residential development',
      'Estate attractions such as unique layout design',
      'Children play area',
      '24hrs security',
      'Green areas and paved walkways',
    ],
    gallery: [
      '/abimb1.jpg',
      '/abimb2.jpg',
      '/abimb3.jpg',
    ],
  },
];

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {

   const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [projectId, setProjectId] = useState<string | null>(null);
  const ref = useRef(null);

useEffect(() => {
  const resolveParams = async () => {
    const resolvedParams = await params;
    setProjectId(resolvedParams.id);
  };
  
  resolveParams();
}, [params]);

useEffect(() => {
  if (!projectId) return;
  
  const foundProject = projects.find(
    (p) => p.id === parseInt(projectId)
  );

  if (!foundProject) {
    notFound();
    return;
  }

  setProject(foundProject);
  setIsLoading(false);
}, [projectId]);

// Handle keyboard navigation for modal
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImage === null || !project) return;
    
    if (e.key === 'Escape') {
      setSelectedImage(null);
    } else if (e.key === 'ArrowLeft') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : project.gallery.length - 1);
    } else if (e.key === 'ArrowRight') {
      setSelectedImage(selectedImage < project.gallery.length - 1 ? selectedImage + 1 : 0);
    }
  };

  if (selectedImage !== null) {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
  }

  return () => {
    document.removeEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'unset';
  };
}, [selectedImage, project]);

const openModal = (index: number) => {
  setSelectedImage(index);
};

const closeModal = () => {
  setSelectedImage(null);
};

const navigateImage = (direction: 'prev' | 'next') => {
  if (!project || selectedImage === null) return;
  
  if (direction === 'prev') {
    setSelectedImage(selectedImage > 0 ? selectedImage - 1 : project.gallery.length - 1);
  } else {
    setSelectedImage(selectedImage < project.gallery.length - 1 ? selectedImage + 1 : 0);
  }
};

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center font-lora">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gold"></div>
      </div>
    );
  }

  if (!project) {
    return null;
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
    <>
      <section className="py-24 bg-gray-200 relative overflow-hidden font-lora">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
            className="absolute inset-0"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"
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
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4 font-cinzel">
              {project.title}
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <MapPin size={20} />
              <span>{project.location}</span>
            </div>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Content Container */}
          <div ref={ref}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Back Button */}
              <motion.div variants={itemVariants}>
                <Link href="/" className="inline-flex items-center gap-2 text-gold hover:text-yellow-500 font-semibold mb-8 font-cinzel">
                  <ArrowLeft size={20} />
                  Back 
                </Link>
              </motion.div>

              {/* Project Details */}
              <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-12" variants={containerVariants}>
                {/* Main Content */}
                <motion.div className="lg:col-span-2" variants={itemVariants}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 font-cinzel">Project Overview</h2>
                  <p className="text-gray-700 leading-relaxed mb-8">{project.extendedDescription}</p>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-cinzel">Key Features</h3>
                  <ul className="list-disc pl-6 mb-8 text-gray-700">
                    {project.features.map((feature, index) => (
                      <li key={index} className="mb-2">{feature}</li>
                    ))}
                  </ul>
                </motion.div>

                {/* Sidebar */}
                <motion.div variants={itemVariants}>
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 font-cinzel">Project Details</h3>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-cinzel">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.gallery.map((img, index) => (
                    <motion.div
                      key={index}
                      className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      onClick={() => openModal(index)}
                    >
                      <Image
                        src={img}
                        alt={`${project.title} gallery image ${index + 1}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <motion.div
                        className="absolute inset-0 bg-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        whileHover={{ opacity: 1 }}
                      >
                        <motion.button
                          className="text-white px-4 py-2 rounded-full bg-gray-900/50 font-cinzel pointer-events-none"
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
                  className="bg-gradient-to-r from-gold to-yellow-400 text-gray-900 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-cinzel"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us for More Info
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Navigation Buttons */}
              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={() => navigateImage('prev')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={() => navigateImage('next')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Image */}
              <div className="relative w-full h-full max-w-full max-h-full">
                <Image
                  src={project.gallery[selectedImage]}
                  alt={`${project.title} gallery image ${selectedImage + 1}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-lg"
                />
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
                {selectedImage + 1} / {project.gallery.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}