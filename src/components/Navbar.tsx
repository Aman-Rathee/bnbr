import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import MobileNav from './mobile-nav';
import { ThemeToggle } from './theme-toggle';

export default function Navbar() {

    const routes = [
        { title: 'Components', link: '/components' },
    ]

    return (
        <>
            <header className='sticky px-4 top-0 h-16 z-10 flex justify-center backdrop-blur-md'>
                <div className="flex w-full items-center justify-between md:max-w-screen-xl">
                    <Link href={'/'} className='flex items-center space-x-3'>
                        <Image
                            src='/brand-logo.png'
                            alt="Bnbr"
                            style={{ width: "auto", height: "auto" }}
                            height={30}
                            width={30}
                        />
                        <div className='text-xl font-bold'>Bnbr UI</div>
                    </Link>
                    <nav className="hidden sm:block">
                        {routes.map((route) => (
                            <Link key={route.title} className='px-2 duration-200 hover:font-bold hover:scale-105 ' href={route.link}>{route.title}</Link>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-2">
                        <Link className='px-2 duration-200 hover:opacity-60' href={'https://x.com/AmnRathee'} target='_blank'>Twitter</Link>
                        <ThemeToggle />
                        <MobileNav routes={routes} />
                    </div>
                </div>
            </header>
        </>
    )
}

