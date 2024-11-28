'use client';
import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface DropdownProps {
    options: { label: string; value: string }[];
    placeholder?: string;
    onChange?: (value: string) => void; // Add the onChange prop
}

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder = "Select an option", onChange }) => {

    const handleSelectChange = (value: string) => {
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div>
            <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-72 mt-2 mb-1">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export default Dropdown;
