"use client";
import React, { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface CustomButtonProps {
    variant?: "primary" | "outline" | "ghost";
    name?: string;
    value?: string;
    buttonLabel?: string;
    buttonClassName?: string;
    modalContent?: ReactNode;
    modalClassName?: string;
    onClick?: () => void;
    showIcon?: boolean;
    icon?: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    variant = "primary",
    name = "",
    value = "",
    buttonLabel = "",
    buttonClassName = "",
    modalContent,
    modalClassName = "",
    onClick,
    showIcon = true,
    icon = "",
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
        primary: "bg-carnation-400 hover:bg-carnation-500 text-white",
        outline:
            "bg-transparent hover:bg-carnation-400 hover:text-white border border-carnation-400 text-carnation-400",
        ghost: "bg-transparent hover:bg-neutral-900 text-white",
    };

    return (
        <>
            <Button
                className={`flex items-center text-center justify-center gap-0 px-6 py-3 rounded-md clickEffect
                    ${theme[variant]} ${buttonClassName}`}
                name={name}
                value={value}
                onClick={handleButtonClick}
            >
                <span className="text-sm font-medium">{buttonLabel}</span>
                {showIcon && <span className="text-base">{icon}</span>}
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
