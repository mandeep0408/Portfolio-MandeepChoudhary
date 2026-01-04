'use client'

import { motion } from 'framer-motion'
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react'

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/mandeepchoudhary1', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/mandeep0408', label: 'GitHub' },
  { icon: Mail, href: 'mailto:mandeepchoudhary0408@gmail.com', label: 'Email' },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Mandeep Choudhary. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                className="text-text-secondary dark:text-gray-400 hover:text-secondary dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-text-secondary dark:text-gray-400 hover:text-secondary dark:hover:text-blue-400 transition-colors text-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

