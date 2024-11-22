import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import Button from "@/components/button"
import { CheckIcon, ClipboardIcon } from "lucide-react"



export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
}



interface CopyButtonProps extends ButtonProps {
    value: string
}


export async function copyToClipboardWithMeta(value: string) {
    navigator.clipboard.writeText(value)
}


export function CopyButton({ value, className, ...props }: CopyButtonProps) {
    const [hasCopied, setHasCopied] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }, [hasCopied])

    return (
        <Button
            className={cn("relative px-1 py-1 text-muted-foreground hover:bg-muted bg-transparent", className)}
            onClick={() => {
                copyToClipboardWithMeta(value)
                setHasCopied(true)
            }}
            {...props}
        >
            <span className="sr-only">Copy</span>
            {hasCopied ? <CheckIcon height={'20px'} width={'20px'} /> : <ClipboardIcon height={'20px'} width={'20px'} />}
        </Button>
    )
}