import { useState, useRef } from 'react'
import { motion, useInView, easeInOut } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

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
  }

  const handleInputChange = (e: { target: { name: string; value: string } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear any previous submit status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error' as const)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call - replace with your actual submission logic
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically make an API call to submit the form
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // })
      
      setSubmitStatus('success')
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@projectcatalogueltd.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+234 903 626 2519',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '3A, Faramobi Ajike Street, Anthony Village, Maryland, Lagos',
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-black/30 to-gray-800/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-white/20 to-gray-100/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="text-5xl lg:text-6xl font-bold text-black mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Let&apos;s Build Your{' '}
              <motion.span
                className="text-gray-800 inline-block"
                whileHover={{ rotateY: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Dream
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-gray-800 text-xl max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Ready to transform your vision into reality? Get in touch with our team today 
              and let&apos;s create something extraordinary together.
            </motion.p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
          >
            {contactInfo.map((info) => {
              const IconComponent = info.icon
              return (
                <motion.div
                  key={info.title}
                  className="text-center group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    className={`w-20 h-20 rounded-full bg-gradient-to-r ${info.gradient} flex items-center justify-center mx-auto mb-4 shadow-xl`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-black mb-3">{info.title}</h3>
                  <p className="text-gray-800 text-lg leading-relaxed max-w-xs mx-auto">
                    {info.details}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="max-w-2xl mx-auto"
            variants={itemVariants}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="bg-black/10 backdrop-blur-lg rounded-3xl p-8 border border-black/20 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-800 text-center font-semibold"
                >
                  Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-800 text-center font-semibold"
                >
                  Please fill in all required fields with valid information.
                </motion.div>
              )}

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <label className="block text-black font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-black/20 bg-white/80 text-black placeholder-gray-600 focus:border-black focus:outline-none focus:bg-white transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <label className="block text-black font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-black/20 bg-white/80 text-black placeholder-gray-600 focus:border-black focus:outline-none focus:bg-white transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <label className="block text-black font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-black/20 bg-white/80 text-black placeholder-gray-600 focus:border-black focus:outline-none focus:bg-white transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <label className="block text-black font-semibold mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-black/20 bg-white/80 text-black placeholder-gray-600 focus:border-black focus:outline-none focus:bg-white transition-all duration-300 resize-none"
                    placeholder="Tell us about your project requirements, budget, timeline, and any specific needs..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-yellow-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-xl"
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-yellow-400" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Start Your Project</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}