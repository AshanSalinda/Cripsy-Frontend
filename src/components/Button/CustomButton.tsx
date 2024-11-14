"use client";
import React, { useState, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface CustomButtonProps {
    buttonLabel?: string;
    buttonClassName?: string;
    modalContent?: ReactNode;
    modalClassName?: string;
    onClick?: () => void;
    showIcon?: boolean;
    icon?: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    buttonLabel = '',
    buttonClassName = '',
    modalContent,
    modalClassName = '',
    onClick,
    showIcon = true,
    icon = '',
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        if (onClick) {
            onClick();
        } else {
            setIsModalOpen(true);
        }
    };

    return (
        <>
            <Button
                variant={'outline'}
                className={`min-w-1/5 min-h-10 rounded-md bg-carnation-400 shadow-xl hover:bg-[#F05151] hover:text-white 
                    text-customSlate font-medium hover:font-semibold py-4 flex flex-row items-center space-x-2 font-inter ${buttonClassName}`}
                onClick={handleButtonClick}
            >
                <span className={`text-xs text-white xl:text-sm w-full ${buttonClassName}`}>{buttonLabel}</span>
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
