"use client";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

interface CheckBoxProps {
    id: string;
    checkboxLabel?: string;
    checkboxClassName?: string;
    isChecked?: boolean;
    onChange?: (checked: boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
                                               id,
                                               checkboxLabel,
                                               checkboxClassName,
                                               isChecked = false,
                                               onChange,
                                           }) => {

    return (
        <div className="flex items-center space-x-2">
            <Checkbox
                id={id}
                checked={isChecked}
                onCheckedChange={onChange}
                className={checkboxClassName}
            />
            <label
                htmlFor={id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {checkboxLabel}
            </label>
        </div>
    );
};

export default CheckBox;
