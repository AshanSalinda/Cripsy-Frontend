'use client';
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const ColorSelector: React.FC = () => {
    const [colors, setColors] = useState<string[]>([]);

    const handleAddColor = () => {
        const newColor = prompt("Enter a hex color code (e.g., #FF5733):");
        if (newColor && /^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(newColor)) {
            setColors([...colors, newColor]);
        } else if (newColor) {
            alert("Invalid color code. Please enter a valid hex color code.");
        }
    };

    return (
        <div>
            <h2 className="text-2xl mt-2">Colors</h2>
            <p className="text-gray-500 mb-2">Add a product available colors</p>
            <div className="flex space-x-2">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        style={{ backgroundColor: color }}
                        className="w-12 h-12 rounded-md"
                    ></div>
                ))}
                <button
                    onClick={handleAddColor}
                    className="w-12 h-12 border-2 border-dashed border-red-500 rounded-md flex items-center justify-center"
                >
                    <AiOutlinePlus size={24} className="text-red-500" />
                </button>
            </div>
        </div>
    );
};

export default ColorSelector;
