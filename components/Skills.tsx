'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    category: 'Networking & Operations',
    skills: ['PRTG', 'ServiceNow (ITSM)', 'Cisco DNA Center', 'Wireless LAN Controller (WLC)', 'TCP/IP', 'DNS', 'PuTTY', 'CMD', 'Incident Lifecycle Management', 'SLA Compliance'],
  },
  {
    category: 'Supporting Technical Skills',
    skills: ['Python', 'SQL', 'Power BI', 'Git & GitHub', 'Linux', 'Jupyter Notebook'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-20 sm:py-28 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-center mb-16 text-text-primary dark:text-white"
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
              >
                <h3 className="text-2xl font-semibold mb-6 text-text-primary dark:text-white">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-4 py-2 bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-blue-400 rounded-lg text-sm font-medium"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(37, 99, 235, 0.2)' }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

