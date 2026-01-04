'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Eye } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import Image from 'next/image'

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
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const gradientVariants = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThemeToggle />
      
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        variants={gradientVariants}
        animate="animate"
        style={{
          background: 'linear-gradient(-45deg, #2563EB, #10B981, #0B1C2D, #2563EB)',
          backgroundSize: '400% 400%',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <Image
                src="/profile.png"
                alt="Mandeep Choudhary - Profile Photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-secondary dark:from-white dark:via-blue-300 dark:to-blue-400 bg-clip-text text-transparent"
          >
            Mandeep Choudhary
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl text-text-primary dark:text-gray-300 mb-4"
          >
            Graduate Engineer Trainee
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-text-primary dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Building reliable, monitored, and secure enterprise networks with strong hands-on experience in incident management, network monitoring, and first-level troubleshooting across global operations.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                scrollToProjects()
              }}
              className="flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-5 h-5" />
              View Projects
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-text-primary dark:text-gray-100 border-2 border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:border-secondary transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-text-secondary dark:text-gray-400" />
        </motion.div>
      </div>
    </section>
  )
}

