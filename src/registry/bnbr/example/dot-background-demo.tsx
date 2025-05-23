import React from 'react'

function DotBackgroundDemo() {
    return (
        <div className="h-[25rem] w-full bg-white dark:bg-black bg-dot-green-500/50 relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white dark:bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-green-600 py-8">
                Dots Background
            </p>
        </div>
    )
}

export default DotBackgroundDemo