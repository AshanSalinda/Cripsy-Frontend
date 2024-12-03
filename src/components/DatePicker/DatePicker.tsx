"use client";

import React, { useState, useRef, useEffect } from 'react';

interface DatePickerProps {
    id?: string;
    labelName?: string;
    onDateChange: (date: string) => void;
    width?: string;
    placeholder?: string;
    defaultDate?: string;
    label?: boolean;
}

export const DatePicker: React.FC<DatePickerProps> = ({
    id,
    labelName,
    onDateChange,
    width = 'w-full',
    label = false,
    placeholder = '',
    defaultDate = '',
}) => {
    const [selectedDate, setSelectedDate] = useState<string>(defaultDate || '');
    const dateInputRef = useRef<HTMLInputElement>(null);


    useEffect(() => {
        setSelectedDate(defaultDate || '');
    }, [defaultDate]);

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const date = e.target.value;
        setSelectedDate(date);
        onDateChange(date);
    };

    const openDatePicker = () => {
        if (dateInputRef.current) {
            dateInputRef.current.showPicker?.();
            dateInputRef.current.focus();
        }
    };

    return (
        <div className={`relative ${width} flex flex-col`}>
            {label && (
                <label
                    htmlFor={id || 'date-picker-input'}
                    className={`absolute z-10 px-1 text-xs font-semibold bg-white text-blue_light -top-2 left-3 ${selectedDate ? '' : 'hidden'
                        }`}
                >
                    {labelName}
                </label>
            )}
            <div className="relative border border-gray-400 rounded-md focus-within:border-carnation-550">
                <input
                    id={id || 'date-picker-input'}
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    placeholder={placeholder}
                    ref={dateInputRef}
                    onClick={openDatePicker}
                    className="w-full px-2 py-2 text-sm text-gray-700 rounded-md cursor-pointer focus:outline-none"
                    aria-label={labelName || 'Date Picker'}
                />
                {!selectedDate && placeholder && (
                    <span className="absolute text-sm text-gray-400 top-2 left-2">
                        {placeholder}
                    </span>
                )}
            </div>
        </div>
    );
};
