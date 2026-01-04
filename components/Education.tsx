'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-20 sm:py-28 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-center mb-12 text-text-primary dark:text-white"
          >
            Education
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-secondary"
          >
            <div className="flex items-start gap-4">
              <GraduationCap className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-text-primary dark:text-white mb-2">
                  B.Tech in Computer Science and Engineering
                </h3>
                <p className="text-lg text-secondary font-medium mb-2">
                  Bennett University, Greater Noida
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary dark:text-gray-400 mb-4">
                  <span>CGPA: 9.10</span>
                  <span>•</span>
                  <span>Sept 2021 – May 2025</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

