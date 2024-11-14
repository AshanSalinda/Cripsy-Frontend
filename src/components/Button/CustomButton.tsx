"use client";
import React, { useState, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface CustomButtonProps {
    variant?: 'primary' | 'outline' | 'ghost',
    name?: string,
    value?: string,
    buttonLabel?: string;
    buttonClassName?: string;
    modalContent?: ReactNode;
    modalClassName?: string;
    onClick?: () => void;
    showIcon?: boolean;
    icon?: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
                                                       variant = 'primary',
                                                       name = '',
                                                       value = '',
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

    const theme = {
        'primary': 'bg-carnation-400 hover:bg-carnation-500 text-white',
        'outline': 'bg-transparent hover:bg-carnation-400 hover:text-white border border-carnation-400 text-carnation-400',
        'ghost': 'bg-transparent hover:bg-neutral-900 text-white'
    }

    return (
        <>
            <Button
                className={`min-w-1/5 min-h-6 shadow-xl rounded flex flex-row items-center py-5 space-x-2 clickEffect
                    ${theme[variant]} ${buttonClassName}`}
                name={name}
                value={value}
                onClick={handleButtonClick}
            >
                <span className={'text-xs md:text-base font-sans tracking-wide w-full'}>{buttonLabel}</span>
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