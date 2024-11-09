import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Navbar() {

    const routes = [
        { title: 'Components', link: '/components' },
        { title: 'Template', link: '/template' },
        { title: 'Docs', link: '/docs' },
        { title: 'Themes', link: '/themes' },
    ]

    return (
        <>
            <header className='sticky top-0 h-16 z-10 flex justify-center backdrop-blur'>
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
                    <nav className="flex">
                        {routes.map((route) => (
                            <Link key={route.title} className='px-2 duration-100 text-gray-400 hover:font-bold hover:text-white hover:scale-105 ' href={route.link}>{route.title}</Link>
                        ))}
                    </nav>
                    <div className="flex text-white items-center space-x-2">
                        <Link className='px-2 duration-300 hover:opacity-60' href={'https://github.com/Aman-Rathee'} target='_blank'>Github</Link>
                        <Link className='px-2 duration-300 hover:opacity-60' href={'https://x.com/AmnRathee'} target='_blank'>Twitter</Link>
                    </div>
                </div>
            </header>
        </>
    )
}

