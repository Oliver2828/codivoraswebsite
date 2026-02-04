import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, CheckCircle, ArrowRight } from 'lucide-react';

function CodivoraHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
    hover: {
      scale: 1.02,
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 1 + i * 0.1, duration: 0.6 },
    }),
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const gradientVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' },
    },
    animate: {
      backgroundPosition: ['0% center', '100% center', '0% center'],
      transition: { duration: 6, repeat: Infinity, ease: 'linear' },
    },
  };

  return (
    <div className='min-h-screen pt-20 lg:pt-0 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob'></div>
        <div className='absolute top-40 -left-20 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000'></div>
        <div className='absolute -bottom-40 left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000'></div>
      </div>

      <div className='relative container mx-auto px-4 h-screen flex items-center'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
          
          {/* Left Column */}
          <div className='space-y-2 '>
            {/* Badge */}
            {/* <div className='inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-gray-200'>
              <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></div>
              <span className='text-sm font-medium text-gray-700'>New Platform Update</span>
            </div> */}

            {/* Main Heading */}
            <motion.h1 
              className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={headingVariants}
            >
              Transform Your
              <motion.span 
                className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500'
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Digital Experience
              </motion.span>
            </motion.h1>

            {/* Description */}
            <p className='text-[15px] text-gray-600 max-w-lg'>
              Codivora delivers cutting-edge solutions that merge innovative design 
              with powerful technology. Experience the future of digital interaction.
            </p>

            {/* Features List */}
            <div className='space-y-3'>
              {['Real-time analytics', 'Inventory Tools',  '24/7 support'].map((feature, index) => (
                <div key={index} className='flex items-center gap-3'>
                  <CheckCircle className='w-5 h-5 text-blue-500' />
                  <span className='text-gray-700'>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-wrap gap-4 pt-4'>
              <button className='px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2'>
                Get Started Free
                <ArrowRight className='w-5 h-5' />
              </button>
              {/* <button className='px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-200 shadow-sm'>
                Schedule Demo
              </button> */}
            </div>
          </div>

          {/* Right Column - Video Section */}
          <motion.div 
            className='relative'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Video Container */}
            <motion.div 
              className='relative rounded-2xl overflow-hidden shadow-2xl video-container'
              variants={videoVariants}
              whileHover="hover"
              style={{ perspective: 1200 }}
            >
              {/* Video Element */}
              <video 
                className='w-full h-[400px] lg:h-[500px] object-cover'
                autoPlay
                muted
                loop
              >
                <source src='/src/assets/codivoravid.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </motion.div>

            {/* Stats overlay */}
            <motion.div 
              className='absolute -bottom-6 left-8 right-8 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-gray-200'
              variants={statsVariants}
              custom={0}
            >
              <div className='grid grid-cols-3 gap-4'>
                {[
                  { value: '99.9%', label: 'Uptime' },
                  { value: '500+', label: 'Users' },
                  { value: '24h', label: 'Response' }
                ].map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className='text-center'
                    custom={index}
                    variants={statsVariants}
                  >
                    <motion.div 
                      className='text-xl font-bold text-gray-900'
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className='text-sm text-gray-600'>{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default CodivoraHero;