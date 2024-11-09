"use client";
import React, { useState, ReactNode } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CustomButtonProps {
    buttonLabel?: string;
    buttonClassName?: string;
    buttonLableClassName?: string;
    modalContent?: ReactNode;
    modalClassName?: string;
    onClick?: () => void;
    showIcon?: boolean; 
    icon?: ReactNode; 
}

const CustomButton: React.FC<CustomButtonProps> = ({
    buttonLabel = 'New',
    buttonClassName = '',
    buttonLableClassName= '',
    modalContent,
    modalClassName = '',
    onClick,
    showIcon = true, 
    icon = <Plus className="w-4" />, 
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        if (onClick) {
            onClick();
        }
        else {
            setIsModalOpen(true);
        }
    };

    return (
        <>
            <Button
                variant={'outline'}
                className={`border bg-carnation-400 shadow-xl hover:bg-carnation-450  hover:text-black
                      w-20 text-customSlate font-semibold py-4 flex flex-row items-center space-x-2 font-inter ${buttonClassName}`} 
                onClick={handleButtonClick}
            >
                <span className={`text-xs xl:text-sm text-white hover:text-black w-full ${buttonLableClassName} `}>{buttonLabel}</span>
                {showIcon && icon} 
            </Button>
            {isModalOpen && modalContent && (
                <div className={modalClassName}>
                    {React.cloneElement(modalContent as React.ReactElement, {
                        onClose: () => setIsModalOpen(false),
                    })}
                </div>
            )}
        </>
    );
};

export default CustomButton;
