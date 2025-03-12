"use client"

import React, { useEffect, useState } from 'react'
import { animate, AnimationPlaybackControls, motion, useMotionValue } from "framer-motion"
import useMeasure from 'react-use-measure';
import { cn } from '@/lib/utils';

interface cardProps {
    heading: string,
    paragraph: string
}

function Marquee({ cardsData, className }: { cardsData: cardProps[], className: string }) {
    let [containerRef, { width }] = useMeasure()
    const xTranslation = useMotionValue(0);
    let finalPosition = -width / 2 - cardsData.length;
    const fast_duration = 15;
    const slow_duration = 50;
    const [duration, setDuration] = useState(fast_duration)
    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        let controls: AnimationPlaybackControls;
        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: 'linear',
                duration: duration * (1 - xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender);
                }
            })
        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: 'linear',
                duration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0
            })
        }

        return () => controls && controls.stop();
    }, [xTranslation, width, duration, rerender, finalPosition, mustFinish])

    return (
        <div className={cn('relative w-full mx-auto overflow-hidden h-52', className)}>
            <div className='absolute inset-0 flex items-center'>
                <motion.div
                    onHoverStart={() => {
                        setMustFinish(true)
                        setDuration(slow_duration)
                    }}
                    onHoverEnd={() => {
                        setMustFinish(true)
                        setDuration(fast_duration)
                    }}
                    className='before:h-full before:w-44 before:z-2 before:absolute before:bg-linear-to-r before:from-white dark:before:from-black before:to-transparent before:top-0 before:left-0 after:h-full after:w-44 after:z-2 after:absolute after:bg-linear-to-l after:from-white dark:after:from-black after:to-transparent after:top-0 after:right-0'>
                    <motion.div
                        className='flex gap-5'
                        ref={containerRef}
                        style={{ x: xTranslation }}
                    >
                        {[...cardsData, ...cardsData].map((card, index) => (
                            <Card heading={card.heading} paragraph={card.paragraph} key={index} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}


function Card({ heading, paragraph }: cardProps) {
    return (
        <>
            <motion.div className='w-56 h-52 p-5 bg-gray-300 dark:bg-zinc-900 border-2 border-gray-500 rounded-lg'>
                <h1 className='text-lg text-gray-900 dark:text-gray-200 font-bold'>{heading}</h1>
                <p className='text-gray-800 dark:text-gray-300'>{paragraph}</p>
            </motion.div>
        </>
    )
}

export { Marquee, Card }