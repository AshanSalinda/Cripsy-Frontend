"use client";

import { useState } from "react";
import { TbFilterHeart } from "react-icons/tb";
import CustomButton from "../Button/CustomButton";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";

interface PriceRange {
    min: number;
    max: number;
}

const FilterSidebar: React.FC = () => {
    const [priceRange, setPriceRange] = useState<PriceRange>({ min: 10000, max: 25000 });
    const [ratings, setRatings] = useState<string>("low-to-high");
    const [warranty, setWarranty] = useState<string>("low-to-high");

    const handleSliderChange = (values: number[]) => {
        setPriceRange({ min: values[0], max: values[1] });
    };

    const clearFilters = () => {
        setPriceRange({ min: 10000, max: 50000 });
        setRatings("low-to-high");
        setWarranty("low-to-high");
    };

    return (
        <div className="p-6 flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-lg">Filter</h2>
                <TbFilterHeart className="text-xl" />
            </div>

            {/* Price Section */}
            <div className="mb-6">
                <h4 className="font-semibold text-sm mb-3">Price</h4>
                <div className="flex flex-col space-y-4">
                    <Slider
                        value={[priceRange.min, priceRange.max]}
                        onValueChange={handleSliderChange}
                        min={0}
                        max={50000}
                        step={100}
                        className="w-full"
                    />
                    <div className="flex justify-between text-sm">
                        <span>{`LKR ${priceRange.min.toLocaleString()}`}</span>
                        <span>{`LKR ${priceRange.max.toLocaleString()}`}</span>
                    </div>
                </div>
            </div>

            {/* Ratings Section */}
            <div className="mb-6">
                <h4 className="font-semibold text-sm mb-2">Ratings</h4>
                <RadioGroup
                    value={ratings}
                    onValueChange={(value) => setRatings(value)}
                    className="flex flex-col space-y-2"
                >
                    {["low-to-high", "high-to-low", "0 - 0.9", "1 - 1.9", "2 - 2.9", "3 - 3.9", "4 - 4.9"].map(
                        (option) => (
                            <label key={option} className="flex items-center space-x-2 text-sm">
                                <RadioGroupItem value={option} />
                                <span>{option.replace("-", " to ")}</span>
                            </label>
                        )
                    )}
                </RadioGroup>
            </div>

            {/* Warranty Section */}
            <div className="mb-6">
                <h4 className="font-semibold text-sm mb-2">Warranty</h4>
                <RadioGroup
                    value={warranty}
                    onValueChange={(value) => setWarranty(value)}
                    className="flex flex-col space-y-2"
                >
                    {["low-to-high", "high-to-low", "3 Months", "6 Months", "1 Year", "5 Years+"].map(
                        (option) => (
                            <label key={option} className="flex items-center space-x-2 text-sm">
                                <RadioGroupItem value={option} />
                                <span>{option}</span>
                            </label>
                        )
                    )}
                </RadioGroup>
            </div>

            {/* Buttons */}
            <div className="mt-auto flex justify-between gap-2 ">
                <CustomButton
                    buttonLabel="Apply"
                    variant="primary"
                    onClick={() => console.log("Filters Applied", { priceRange, ratings, warranty })}
                />
                <CustomButton
                    buttonLabel="Clear"
                    variant="outline"
                    onClick={clearFilters}
                    buttonClassName="border border-red-500 text-red-500 hover:bg-gray-600 hover:border-none"
                />
            </div>
        </div>
    );
};

export default FilterSidebar;
