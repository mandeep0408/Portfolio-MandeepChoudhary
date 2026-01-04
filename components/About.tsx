'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Code, Wrench, Globe } from 'lucide-react'

const stats = [
    { icon: Briefcase, label: 'Years Experience', value: '1+' },
    { icon: Code, label: 'Projects Completed', value: '4+' },
    { icon: Wrench, label: 'Technologies', value: '15+' },
    { icon: Globe, label: 'Global Shifts', value: '4' },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

export function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="about" className="py-20 sm:py-28 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="max-w-4xl mx-auto"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl font-bold text-center mb-12 text-text-primary dark:text-white"
                    >
                        About Me
                    </motion.h2>

                    <motion.div
                        variants={itemVariants}
                        className="text-lg sm:text-xl text-text-secondary dark:text-gray-300 text-left mb-16 leading-relaxed max-w-4xl mx-auto space-y-4"
                    >
                        <p>
                            I am a Computer Science Engineer and Graduate Network Engineer at HCL Technologies, currently working as a Network L1 Engineer supporting enterprise network operations across global shifts (APAC, UK, US).
                        </p>
                        <p>
                            My core expertise lies in network monitoring, incident handling, SLA adherence, and structured troubleshooting using industry tools like PRTG, ServiceNow, Cisco DNA Center, and WLC. I work closely with L2/L3 teams to ensure quick resolution, clean escalations, and stable network operations.
                        </p>
                        <p>
                            Alongside networking, I have a strong analytical background in Python and Power BI, which I use to support reporting, analysis, and operational insights—adding value to network operations beyond traditional troubleshooting.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-light-bg dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                                whileHover={{ scale: 1.03, y: -5 }}
                            >
                                <stat.icon className="w-8 h-8 text-secondary mb-4 mx-auto" />
                                <div className="text-3xl font-bold text-text-primary dark:text-white text-center mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-text-secondary dark:text-gray-400 text-center">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

