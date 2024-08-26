import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Navbar() {

    return (
        <>
            <header className='sticky top-0 h-16 flex justify-center backdrop-blur'>
                <div className="flex w-full items-center justify-between md:max-w-screen-xl">
                    <Link href={'/'} className='flex items-center space-x-3'>
                        <Image
                            src='/brand-logo.png'
                            alt="B"
                            className=""
                            height={30}
                            width={30}
                        />
                        <div className='text-xl font-bold'>Bnbr UI</div>
                    </Link>
                    <>
                        <nav className="flex text-gray-300/75">
                            <Link className='px-2 duration-100 hover:text-white hover:-translate-y-0.5 hover:translate-x-px hover:scale-105 ' href={'/components'}>Components</Link>
                            <Link className='px-2 duration-100 hover:text-white hover:-translate-y-0.5 hover:translate-x-px hover:scale-105 ' href={'/template'}>Template</Link>
                            <Link className='px-2 duration-100 hover:text-white hover:-translate-y-0.5 hover:translate-x-px hover:scale-105 ' href={'/docs'}>Docs</Link>
                            <Link className='px-2 duration-100 hover:text-white hover:-translate-y-0.5 hover:translate-x-px hover:scale-105 ' href={'/themes'}>Themes</Link>
                        </nav>
                        <div className="flex text-white/85 items-center space-x-2">
                            <Link className='px-2 duration-300 hover:opacity-60' href={'https://github.com/Aman-Rathee'} target='_blank'>Github</Link>
                            <Link className='px-2 duration-300 hover:opacity-60' href={'https://x.com/AmnRathee'} target='_blank'>Twitter</Link>
                        </div>
                    </>
                </div>
            </header>
        </>
    )
}

