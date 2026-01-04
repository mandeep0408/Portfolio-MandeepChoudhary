'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'

interface Project {
  name: string
  description: string
  solution: string
  tech: string[]
  category: 'AI' | 'Data' | 'Dashboard'
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    name: 'Air Pulse – AQI Prediction System',
    description: 'Need for accurate air quality prediction for public health awareness',
    solution: 'Built a real-time prediction system with high accuracy using machine learning models',
    tech: ['Python', 'Machine Learning', 'Streamlit'],
    category: 'AI',
    github: 'https://github.com/mandeep0408',
  },
  {
    name: 'E-Commerce Sales Dashboard',
    description: 'Lack of centralized view of sales performance and KPIs',
    solution: 'Designed interactive dashboards with DAX for comprehensive sales analytics and insights',
    tech: ['Power BI', 'DAX'],
    category: 'Dashboard',
    github: 'https://github.com/mandeep0408',
  },
  {
    name: 'Customer Behaviour Analysis',
    description: 'Understanding customer patterns and trends for business insights',
    solution: 'Performed exploratory data analysis to identify key customer behavior patterns',
    tech: ['Python', 'Pandas', 'NumPy'],
    category: 'Data',
    github: 'https://github.com/mandeep0408',
  },
  {
    name: 'Collatio Shopper',
    description: 'Need for an integrated shopping comparison and recommendation system',
    solution: 'Developed an end-to-end application showcasing data processing and system integration',
    tech: ['Python', 'TensorFlow', 'Streamlit'],
    category: 'AI',
    github: 'https://github.com/mandeep0408',
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

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState<string>('All')

  const categories = ['All', 'AI', 'Data', 'Dashboard']
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-20 sm:py-28 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary dark:text-white mb-8">
            Featured Projects
          </h2>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  filter === category
                    ? 'bg-secondary text-white'
                    : 'bg-white dark:bg-gray-800 text-text-secondary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              whileHover={{ y: -8 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-primary dark:text-white mb-3">
                  {project.name}
                </h3>

                <div className="mb-4">
                  <p className="text-sm text-text-secondary dark:text-gray-400 mb-2">
                    <span className="font-medium">Problem: </span>
                    {project.description}
                  </p>
                  <p className="text-sm text-text-secondary dark:text-gray-300">
                    <span className="font-medium">Solution: </span>
                    {project.solution}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-blue-400 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons that appear on hover */}
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-text-primary dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex-1 justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-blue-600 transition-colors flex-1 justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

