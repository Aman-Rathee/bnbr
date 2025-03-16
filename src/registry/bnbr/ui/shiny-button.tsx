"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

function ShinyButton({ children, className, ...props }: { children: React.ReactNode, className?: string }) {
    return (
        <>
            <motion.button
                className={cn("px-5 py-2 rounded-md relative cursor-pointer radial-gradient", className)}
                initial={{ "--x": "100%", scale: 1 }}
                animate={{ "--x": "-100%" }}
                whileTap={{ scale: 0.90 }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    repeatDelay: 1,
                    type: 'spring',
                    stiffness: 20,
                    damping: 15,
                    scale: {
                        type: 'spring',
                        stiffness: 30,
                        damping: 5,
                        mass: 0.1,
                    }
                }}
                {...props}
            >
                <span className="text-neutral-100 tracking-tight h-full w-full block relative linear-mask">
                    {children}
                </span>
                <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
            </motion.button>
        </>
    )
}

export { ShinyButton }