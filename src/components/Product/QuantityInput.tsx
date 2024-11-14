"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
    min?: number;
    max?: number;
    value?: number;
    onChange?: (quantity: number) => void;
}

const QuantityInput: React.FC<Props> = ({
    min = 1,
    max = 1000,
    value = 1,
    onChange,
}) => {
    const [quantity, setQuantity] = useState(value);

    const handleIncrement = () => {
        if (quantity < max) {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            onChange && onChange(newQuantity);
        }
    };

    const handleDecrement = () => {
        if (quantity > min) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onChange && onChange(newQuantity);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value >= min && value <= max) {
            setQuantity(value);
            onChange && onChange(value);
        }
    };

    return (
        <div className="flex items-center space-x-2">
            <Button
                variant="outline"
                type="button"
                size="sm"
                onClick={handleDecrement}
                disabled={quantity <= min}
            >
                -
            </Button>
            <Input
                type="number"
                name="quantity"
                value={quantity}
                onChange={handleChange}
                className="w-16 text-center"
            />
            <Button
                variant="outline"
                type="button"
                size="sm"
                onClick={handleIncrement}
                disabled={quantity >= max}
            >
                +
            </Button>
        </div>
    );

};

export default QuantityInput;
