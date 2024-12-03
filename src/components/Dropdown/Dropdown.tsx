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
    value?: string; // Add value prop
    onChange?: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder = "Select an option", value, onChange }) => {
    const handleSelectChange = (selectedValue: string) => {
        if (onChange) {
            onChange(selectedValue);
        }
    };

    return (
        <div>
            <Select onValueChange={handleSelectChange} value={value}> {/* Bind the value */}
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
