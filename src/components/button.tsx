import React, { ReactNode, } from 'react';
import { cn } from '@/lib/utils';

const Button = ({ children, className, ...props }: { children: ReactNode, className?: string }) => {
    return (
        <>
            <button className={cn('bg-white text-black px-4 py-1 rounded-md', className)} {...props}>{children}</button>
        </>
    );
};

export default Button;

