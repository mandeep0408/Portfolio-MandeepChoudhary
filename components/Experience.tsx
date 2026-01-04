'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase } from 'lucide-react'

interface ExperienceItem {
  company: string
  role: string
  duration: string
  points: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: 'HCL Technologies',
    role: 'Graduate Engineer Trainee – Network L1 Engineer',
    duration: 'Aug 2024 – Present',
    points: [
      'Act as the first point of contact for enterprise network incidents and service requests',
      'Monitor network infrastructure using PRTG to ensure optimal performance and uptime',
      'Manage complete incident lifecycle through ServiceNow, ensuring SLA compliance and timely resolution',
      'Perform initial network diagnostics using Cisco DNA Center, WLC, PuTTY, AVD for troubleshooting',
      'Execute first-level troubleshooting using standard network commands (ping, tracert, nslookup, ipconfig)',
      'Ensure accurate ticket updates, professional communication, and clean escalation to L2/L3 teams',
      'Support global operations across APAC, UK, US, and Night shifts maintaining 24/7 network availability',
    ],
  },
  {
    company: 'TechCurators',
    role: 'Growth & Strategy Analyst Intern',
    duration: 'Aug 2024 – Feb 2025',
    points: [
      'Conducted data-driven analysis to support AI and technology initiatives',
      'Worked on market and product analysis relevant to enterprise tech offerings',
      'Supported client coordination and strategic planning',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const itemVariantsRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-20 sm:py-28 bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary dark:text-white mb-4">
            Experience
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative" ref={ref}>
          {/* Timeline line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-accent to-secondary/20 hidden md:block"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: 'top' }}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-12"
          >
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0
              const variants = isEven ? itemVariants : itemVariantsRight

              return (
                <motion.div
                  key={index}
                  variants={variants}
                  className="relative md:pl-24"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-8 top-6 w-4 h-4 bg-secondary rounded-full border-4 border-white dark:border-gray-900 z-10 hidden md:block" />

                  <div className="bg-light-bg dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <Briefcase className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-2xl font-semibold text-text-primary dark:text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-secondary font-medium mb-2">
                          {exp.company}
                        </p>
                        <p className="text-sm text-text-secondary dark:text-gray-400">
                          {exp.duration}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-3 mt-6">
                      {exp.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-start gap-3 text-text-secondary dark:text-gray-300"
                        >
                          <span className="text-accent flex-shrink-0 mt-0.5">•</span>
                          <span className="flex-1">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

