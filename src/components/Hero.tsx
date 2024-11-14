'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Zap, Package, Sparkles } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {

    const features = [
        { icon: <Zap className="h-6 w-6" />, title: 'High Performance', description: 'Optimized animations out of the box' },
        { icon: <Code className="h-6 w-6" />, title: 'Flexible Integration', description: 'Copy, paste, and customize with ease' },
        { icon: <Package className="h-6 w-6" />, title: 'Zero Dependencies', description: 'No package to install, no bloat' },
        { icon: <Sparkles className="h-6 w-6" />, title: 'Fully Customizable', description: 'Tailor every component to your needs' },
    ]

    return (
        <>
            <div className="bg-black text-white">
                <main className="container mx-auto px-4 py-16 md:py-32">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-4xl md:text-6xl font-bold text-center mb-8"
                    >
                        Bring Your websites to Life with <span className='text-violet-600'> BnbrUI </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-xl text-center text-gray-400 mb-12"
                    >
                        Copy and paste beautifully animated components into your website, styled with Tailwind CSS and Framer Motion for a seamless user experience.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="flex justify-center space-x-4 mb-16"
                    >
                        <Link
                            href={"/components"}
                            className="bg-violet-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-violet-800 transition-colors"
                        >
                            Components
                        </Link>
                        <Link
                            href="https://x.com/AmnRathee"
                            target="_blank"
                            className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-violet-500 transition-colors"
                        >
                            Follow on X
                        </Link>
                    </motion.div>

                    <div id="features" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white bg-opacity-10 p-6 rounded-lg"
                            >
                                <div className="text-purple-400 mb-4">{feature.icon}</div>
                                <h3 className="text-xl text-purple-200 font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </main>
            </div>
        </>
    )
}

export default Hero