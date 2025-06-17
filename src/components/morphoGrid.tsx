import { Plus } from 'lucide-react';
import React from 'react'

export const MorphoGrid = () => {
    const gridSize = 20;
    const gridItems = Array.from({ length: gridSize * gridSize });

    return (
        <>
            <div className='xl:flex flex-col h-[650px] m-0 overflow-hidden hidden'>
                <div className="grid place-items-center static">
                    <div className="grid rotate-x-[55deg] -translate-x-1/12 -translate-y-3/12 -rotate-y-[10deg] scale-[130%] rotate-z-[35deg] border-t border-r border-black/15 dark:border-white/15 grid-cols-20 grid-rows-20">
                        <svg width="120" height="240" viewBox="0 0 42 84" className="row-start-8 col-start-4 z-[1] absolute fill-black dark:fill-gray-300">
                            <path d="M0 0V84H24C33.9411 84 42 75.9411 42 66V54C42 48.4772 38.5228 43.8509 33.7254 42.3375C37.4126 40.3458 40 36.4796 40 32V18C40 8.05887 31.9411 0 22 0H0ZM16 16H22C23.1046 16 24 16.8954 24 18V32C24 33.1046 23.1046 34 22 34H16V16ZM16 50H24C25.1046 50 26 50.8954 26 52V66C26 67.1046 25.1046 68 24 68H16V50Z" />
                        </svg>
                        <svg width="120" height="240" viewBox="0 0 42 84" className="row-start-8 col-start-6 z-[1] absolute fill-black dark:fill-gray-300">
                            <path d="M26 0H0V84H19V38C19 36.8954 19.8954 36 21 36C22.1046 36 23 36.8954 23 38V84H42V16C42 7.16344 34.8366 0 26 0Z"></path>
                        </svg>
                        <svg width="120" height="240" viewBox="0 0 42 84" className="row-start-8 col-start-8 z-[1] absolute fill-black dark:fill-gray-300">
                            <path d="M0 0V84H24C33.9411 84 42 75.9411 42 66V54C42 48.4772 38.5228 43.8509 33.7254 42.3375C37.4126 40.3458 40 36.4796 40 32V18C40 8.05887 31.9411 0 22 0H0ZM16 16H22C23.1046 16 24 16.8954 24 18V32C24 33.1046 23.1046 34 22 34H16V16ZM16 50H24C25.1046 50 26 50.8954 26 52V66C26 67.1046 25.1046 68 24 68H16V50Z" />
                        </svg>
                        <svg width="120" height="240" viewBox="0 0 42 84" className="row-start-8 col-start-10 z-[1] absolute fill-black dark:fill-gray-300">
                            <path d="M21 0H0V84H19V56.8514C19 55.7469 19.8954 54.8514 21 54.8514C22.1046 54.8514 23 55.7469 23 56.8514V84H42V57.3659C42 49.4471 36.5181 42.84 29.2297 41.3097C36.7373 38.0305 42 30.4009 42 21.5122C42 9.63134 32.598 0 21 0Z"></path>
                        </svg>
                        <svg width="120" height="240" viewBox="0 0 42 84" className="row-start-7 col-start-12 z-[1] absolute fill-black dark:fill-gray-300">
                            <path d="M0 0V62C0 74.1503 9.84974 84 22 84H24C36.1503 84 46 74.1503 46 62V0H27V62C27 63.1046 26.1046 64 25 64H21C19.8954 64 19 63.1046 19 62V0H0Z" />
                        </svg>
                        <svg width="120" height="240" viewBox="0 0 42 84" className="row-start-7 col-start-[14] z-[1] absolute fill-black dark:fill-gray-300">
                            <path d="M0 0V16H11V68H0V84H42V68H31V16H42V0H0Z" />
                        </svg>
                        {gridItems.map((_, index) => (
                            <div key={index} className="border border-t-0 border-r-0 grid grid-cols-2 grid-rows-2 w-20 h-20 relative select-none border-black/15 dark:border-white/15">
                                <div className='bg-transparent hover:bg-cyan-400 transition-colors duration-[1s] hover:duration-[0s] border-r border-black/15 dark:border-white/15'></div>
                                <div className='bg-transparent hover:bg-red-500 transition-colors duration-[1s] hover:duration-[0s]'></div>
                                <div className='bg-transparent hover:bg-green-500 transition-colors duration-[1s] hover:duration-[0s] border-t border-r border-black/15 dark:border-white/15'></div>
                                <div className='bg-transparent hover:bg-purple-500 transition-colors duration-[1s] hover:duration-[0s] border-t border-black/15 dark:border-white/15'></div>
                                <Plus className='absolute text-black/40 dark:text-white/40 mt-[28px] ml-[27px]' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
