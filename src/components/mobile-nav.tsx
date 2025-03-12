'use client'

import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface Route {
    title: string;
    link: string;
}
interface RoutesProp { routes: Route[] }

export default function MobileNav({ routes }: RoutesProp) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className="sm:hidden">
                <div className="flex items-center">
                    <button onClick={toggleMenu} className="outline-hidden" aria-label='Open menu'>
                        <Menu />
                    </button>
                </div>
                {isOpen && (
                    <header className='fixed top-0 left-0 w-full h-screen bg-black text-white z-50'>
                        <div className="flex px-4  h-16 w-full items-center justify-between">
                            <Link href={'/'} className='flex items-center space-x-3'>
                                <Image
                                    src='/brand-logo.png'
                                    alt="Bnbr"
                                    style={{ width: "auto", height: "auto" }}
                                    height={30}
                                    width={30}
                                />
                                <div className='text-xl font-bold '>Bnbr UI</div>
                            </Link>
                            <div className="flex items-center space-x-2">
                                <Link className='px-2' href={'https://github.com/Aman-Rathee'} target='_blank'>Github</Link>
                                <Link className='px-2' href={'https://x.com/AmnRathee'} target='_blank'>Twitter</Link>
                                <button onClick={toggleMenu} className="outline-hidden pl-1" aria-label='Close menu'>
                                    <X size={24} />
                                </button>
                            </div>
                        </div>
                        <div className='bg-black flex flex-col text-gray-200 text-2xl p-5 gap-3 h-screen w-full'>
                            {routes.map((route) => (
                                <Link key={route.title} className='border-b-2 border-border' href={route.link}>{route.title}</Link>
                            ))}
                        </div>
                    </header>
                )}
            </nav>
        </>
    )
}


function Menu() {
    return (
        <>
            <div className="mr-2">
                <svg
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                >
                    <path
                        d="M3 5H11"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M3 12H16"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    <path
                        d="M3 19H21"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
                <span className="sr-only">Toggle Menu</span>
            </div>
        </>
    )
}
