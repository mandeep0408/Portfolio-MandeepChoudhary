'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'

interface Publication {
  title: string
  journal: string
  year: string
  doi?: string
}

const publications: Publication[] = [
  {
    title: 'A Web-Based Supervised Machine Learning Model for Air Quality Index and Respiratory Care Prediction',
    journal: 'Procedia Computer Science (Elsevier)',
    year: 'Nov 2024',
    doi: '10.1016/j.procs.2025.04.426',
  },
]

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

export function Research() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="research" className="py-20 sm:py-28 bg-white dark:bg-gray-900">
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
            Research & Publications
          </motion.h2>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-light-bg dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-secondary"
              >
                <h3 className="text-lg font-semibold text-text-primary dark:text-white mb-2">
                  {pub.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary dark:text-gray-400">
                  <span>{pub.journal}</span>
                  <span className="text-text-primary dark:text-gray-300 font-medium">
                    {pub.year}
                  </span>
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-secondary hover:text-blue-600 transition-colors"
                    >
                      DOI: {pub.doi}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

