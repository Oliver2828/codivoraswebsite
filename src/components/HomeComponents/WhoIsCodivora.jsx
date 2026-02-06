import React, { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'

const Counter = ({ from = 0, to = 100, duration = 2 }) => {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  useEffect(() => {
    if (!isInView) return
    
    const controls = animate(count, to, {
      duration: duration,
      ease: "easeOut"
    })
    
    return () => controls.stop()
  }, [isInView, to, duration])
  
  return <motion.span ref={ref}>{rounded}</motion.span>
}

function WhoIsCodivora() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }
  
  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }
  
  const slideInRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }
  
  const scaleUpVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 font-poppins" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="inline-block relative">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight"
              variants={itemVariants}
            >
              Who is <span className="text-blue-600 relative">
                Codivora?
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
              </span>
            </motion.h1>
            <div className="hidden md:block absolute -top-4 -right-8 w-8 h-8 bg-blue-100 rounded-full"></div>
            <div className="hidden md:block absolute -bottom-4 -left-8 w-6 h-6 bg-blue-100 rounded-full"></div>
          </div>
          
          <motion.p 
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Codivora is a forward-thinking software development company that transforms business 
            challenges into innovative digital solutions. We blend technical expertise with 
            creative problem-solving to help you stay ahead in today's competitive landscape.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className="space-y-8"
            variants={slideInLeftVariants}
          >
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation at Core</h3>
                  <p className="text-gray-600">
                    We specialize in creating cutting-edge, efficient solutions that drive 
                    business growth and digital transformation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Dedicated Excellence</h3>
                  <p className="text-gray-600">
                    Committed to delivering high-quality software products and services that 
                    exceed client expectations and industry standards.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborative Team</h3>
                  <p className="text-gray-600">
                    Our experienced developers, designers, and project managers work together 
                    to deliver customized solutions tailored to your unique needs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-200">
              <p className="text-gray-700 italic font-medium">
                "At Codivora, we don't just write code — we build solutions that 
                empower businesses to thrive in the digital age."
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={slideInRightVariants}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:shadow-3xl hover:-translate-y-1"
              variants={scaleUpVariants}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-500 to-blue-700 relative">
                {/* Replace with your image */}
                <div className="absolute inset-0 bg-[url(/src/assets/codivora.jpeg)] bg-cover bg-center mix-blend-overlay opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Our Workspace</h3>
                  <p className="text-blue-100">Where innovation meets execution</p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full"></div>
            <div className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 bg-blue-50 rounded-full"></div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-20 pt-12 border-t border-gray-200"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2"><Counter to={100} duration={2.5} />%</div>
              <h4 className="font-semibold text-gray-900 mb-2">Client Satisfaction</h4>
              <p className="text-gray-600 text-sm">Committed to exceeding expectations</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2"><Counter to={24} duration={2.5} />/7</div>
              <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
              <p className="text-gray-600 text-sm">Always here when you need us</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              variants={itemVariants}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2"><Counter to={50} duration={2.5} />+</div>
              <h4 className="font-semibold text-gray-900 mb-2">Projects Delivered</h4>
              <p className="text-gray-600 text-sm">Proven track record of success</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhoIsCodivora