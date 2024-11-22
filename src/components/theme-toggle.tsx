"use client"

import { Moon, Sun, Square } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) {
        return (
            <div className="flex items-center">
                <button onClick={() => setTheme('dark')}>
                    <Square strokeWidth={1.5} className="h-5 w-5" />
                </button>
            </div>
        )
    }

    return (
        <>
            <div className="flex items-center">
                {resolvedTheme === 'light' ? (
                    <button onClick={() => setTheme('dark')}>
                        <Moon className="h-5 w-5" />
                    </button>
                ) : (
                    <button onClick={() => setTheme('light')}>
                        <Sun className="h-5 w-5" />
                    </button>
                )}
                <span className="sr-only">Toggle theme</span>
            </div>
        </>
    )
}
