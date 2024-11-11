import { cn } from "@/lib/utils"

function BgGradient({ children, className }: { children: React.ReactNode, className: string }) {
    return (
        <>
            <div className='relative p-[4px] max-w-sm group'>
                <div className="absolute inset-0 rounded-3xl z-[1] bg-gradient-to-bl from-pink-500 to-purple-700"></div>
                <div className="absolute bg-gradient-to-bl from-pink-500 to-purple-700 blur-3xl inset-0 z-0 opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className={cn('relative z-[1] rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900', className)}>
                    {children}
                </div>
            </div>
        </>
    )
}


export { BgGradient }
