"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme()

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
