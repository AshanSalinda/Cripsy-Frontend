import React from 'react';
import { Tooltip as ShadCnTooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


interface TooltipPropsType {
    label: string,
    side?: 'top' | 'right' | 'bottom' | 'left',
    className?: string,
    children: React.ReactNode,
    onClick?: () => void,
}

const Tooltip: React.FC<TooltipPropsType> = ({ 
    label = 'label', 
    side = 'bottom', 
    className,
    children,
    onClick = () => {}
}) => {

    return (
        <TooltipProvider>
            <ShadCnTooltip>
                <TooltipTrigger onClick={onClick} className={className} >
                    { children }
                </TooltipTrigger>
                <TooltipContent side={side}>
                    <p className='text-sm'>{ label }</p>
                </TooltipContent>
            </ShadCnTooltip>
        </TooltipProvider>
    );
};

export default Tooltip;