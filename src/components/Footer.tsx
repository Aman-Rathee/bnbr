'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

function Footer() {
    return (
        <>
            <footer className='border-t border-border px-8 py-20 mt-20'>
                <div className='max-w-7xl mx-auto flex sm:flex-row flex-col justify-between items-start'>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className='mr-4 md:flex mb-4'>
                            <Link href={'/'} className='flex items-center space-x-3'>
                                <Image
                                    src='/brand-logo.png'
                                    alt="Bnbr"
                                    style={{ width: "auto", height: "auto" }}
                                    height={25}
                                    width={25}
                                />
                                <div className='text-xl font-bold'>Bnbr UI</div>
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className='leading-8 text-base text-gray-400 font-bold'>
                            <div className=''>Built by <Link className='underline text-blue-600' href={'https://x.com/AmnRathee'} target='_blank'>Aman Rathee</Link></div>
                            <a className='' href='mailto:ratheeaman65@gmail.com'>Contact</a>
                        </motion.div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer