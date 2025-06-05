"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

function ShinyEffect({ children, className, ...props }: { children: React.ReactNode, className?: string }) {
    return (
        <>
            <motion.div className={cn("relative", className)}
                initial={{ "--x": "100%" }}
                animate={{ "--x": "-100%" }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    repeatDelay: 1,
                    type: 'spring',
                    stiffness: 8,
                    damping: 5,
                }}
                {...props}
            >
                <span className="block relative linear-mask">
                    {children}
                </span>
                <span className="absolute inset-0 rounded-md p-px linear-overlay" />
            </motion.div>
        </>
    )
}

export { ShinyEffect }