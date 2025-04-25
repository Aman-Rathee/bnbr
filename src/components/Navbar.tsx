import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { ThemeToggle } from './theme-toggle';

export default function Navbar() {

    const routes = [
        { title: 'Components', link: '/components' },
    ]

    return (
        <>
            <header className='sticky px-2 border-b top-0 h-12 z-10 flex justify-center backdrop-blur-md'>
                <div className="flex w-full items-center justify-between md:max-w-[85rem]">
                    <div className='flex items-center gap-10'>
                        <Link href={'/'} className='flex items-center space-x-3'>
                            <Image
                                src='/brand-logo.png'
                                alt="Bnbr"
                                style={{ width: "auto", height: "auto" }}
                                height={20}
                                width={20}
                            />
                            <div className='text-xl font-bold'>Bnbr UI</div>
                        </Link>
                        <nav className="hidden sm:flex gap-4">
                            {routes.map((route) => (
                                <Link key={route.title} className='text-foreground/80 hover:text-foreground hover:scale-105 transition-all' href={route.link}>{route.title}</Link>
                            ))}
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link className='text-foreground/80 hover:text-foreground hover:scale-105 transition-all' href={'https://x.com/AmnRathee'} target='_blank'>Twitter</Link>
                        <Link className='text-foreground/80 hover:text-foreground hover:scale-105 transition-all' href={'https://github.com/Aman-Rathee/bnbr'} target='_blank'>GitHub</Link>
                        <ThemeToggle />
                    </div>
                </div>
            </header>
        </>
    )
}

