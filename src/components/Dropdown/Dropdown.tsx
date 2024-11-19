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
}

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder = "Select an option" }) => {
    return (
        <div>
            <Select>
                <SelectTrigger className="w-72 mt-2 mb-3">
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
