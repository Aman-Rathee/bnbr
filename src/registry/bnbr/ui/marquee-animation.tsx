"use client"

import React, { useEffect, useState } from 'react'
import { animate, AnimationPlaybackControls, motion, useMotionValue } from "framer-motion"
import useMeasure from 'react-use-measure';

const cardsData = [
    {
        heading: "Responsive",
        paragraph: "Learn how to create responsive layouts that adapt seamlessly to various devices and screen sizes."
    },
    {
        heading: "Animations",
        paragraph: "Discover techniques to implement smooth animations and transitions to enhance user interactions."
    },
    {
        heading: "Accessibility",
        paragraph: "Explore the best practices to ensure your web applications are accessible to all users and devices."
    },
    {
        heading: "State",
        paragraph: "Master state management patterns that simplify data flow and ensure a maintainable codebase."
    },
    {
        heading: "Styling",
        paragraph: "Understand modern approaches to component styling for scalable, consistent design systems."
    },
    {
        heading: "Server-Side",
        paragraph: "Learn the benefits of server-side rendering and how it improves performance and SEO."
    },
    {
        heading: "API",
        paragraph: "Explore techniques for integrating APIs seamlessly into your web applications with ease."
    },
    {
        heading: "Testing",
        paragraph: "Understand different testing strategies to improve code quality and user experience consistently."
    }
];

export const Marquee = () => {
    let [containerRef, { width }] = useMeasure()
    const xTranslation = useMotionValue(0);
    let controls: AnimationPlaybackControls;
    let finalPosition = -width / 2 - cardsData.length;
    const fast_duration = 15;
    const slow_duration = 50;
    const [duration, setDuration] = useState(fast_duration)
    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
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
    }, [xTranslation, width, duration, rerender])

    return (
        <div className='relative w-11/12 mx-auto overflow-hidden' style={{ height: '300px' }}>
            <h1 className='text-center text-4xl font-bold'>Heading</h1>
            <div className='absolute inset-0 flex items-center'>
                <motion.div
                    className='flex gap-5'
                    ref={containerRef}
                    style={{ x: xTranslation }}
                    onHoverStart={() => {
                        setMustFinish(true)
                        setDuration(slow_duration)
                    }}
                    onHoverEnd={() => {
                        setMustFinish(true)
                        setDuration(fast_duration)
                    }}
                >
                    {[...cardsData, ...cardsData].map((card, index) => (
                        <Card heading={card.heading} paragraph={card.paragraph} key={index} />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}


interface CardProps {
    heading: string,
    paragraph: string
}
export function Card({ heading, paragraph }: CardProps) {
    return (
        <>
            <motion.div className='w-56 p-5 bg-slate-700 rounded-lg'>
                <h1 className='text-lg text-gray-200 font-bold'>{heading}</h1>
                <p className='text-gray-300'>{paragraph}</p>
            </motion.div>
        </>
    )
}