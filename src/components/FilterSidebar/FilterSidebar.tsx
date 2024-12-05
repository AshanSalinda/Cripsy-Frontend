"use client";

import { TbFilterHeart } from "react-icons/tb";
import CustomButton from "../Button/CustomButton";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";

interface PriceRange {
    min: number;
    max: number;
}

interface Filters {
    priceRange: PriceRange;
    ratings: string;
    warranty: string;
}

interface FilterSidebarProps {
    filters: Filters;
    setFilters: (filters: Filters) => void;
    applyFilters: () => void;
    clearFilters: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, setFilters, applyFilters, clearFilters }) => {
    const handleSliderChange = (values: number[]) => {
        setFilters({ ...filters, priceRange: { min: values[0], max: values[1] } });
    };

    const handleRatingsChange = (value: string) => {
        setFilters({ ...filters, ratings: value });
    };

    const handleWarrantyChange = (value: string) => {
        setFilters({ ...filters, warranty: value });
    };

    return (
        <div className="w-60 p-6 flex flex-col  bg-white shadow-lg min-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-lg">Filter</h2>
                <TbFilterHeart className="text-xl" />
            </div>

            {/* Price Section */}
            <div className="mb-6">
                <h4 className="font-semibold text-sm mb-3">Price</h4>
                <Slider
                    value={[filters.priceRange.min, filters.priceRange.max]}
                    onValueChange={handleSliderChange}
                    min={100}
                    max={2000000}
                    step={1000}
                    className="w-full"
                />
                <div className="flex justify-between text-sm">
                    <span>{`LKR ${filters.priceRange.min.toLocaleString()}`}</span>
                    <span>{`LKR ${filters.priceRange.max.toLocaleString()}`}</span>
                </div>
            </div>

            {/* Ratings Section */}
            <div className="mb-6">
                <h4 className="font-semibold text-sm mb-2">Ratings</h4>
                <RadioGroup
                    value={filters.ratings}
                    onValueChange={handleRatingsChange}
                    className="flex flex-col space-y-2"
                >
                    {["low-to-high", "high-to-low", "0 - 0.9", "1 - 1.9", "2 - 2.9", "3 - 3.9", "4 - 4.9"].map((option) => (
                        <label key={option} className="flex items-center space-x-2 text-sm">
                            <RadioGroupItem value={option} />
                            <span>{option.replace("-", " to ")}</span>
                        </label>
                    ))}
                </RadioGroup>
            </div>

            {/* Warranty Section */}
            <div className="mb-6">
                <h4 className="font-semibold text-sm mb-2">Warranty</h4>
                <RadioGroup
                    value={filters.warranty}
                    onValueChange={handleWarrantyChange}
                    className="flex flex-col space-y-2"
                >
                    {["low-to-high", "high-to-low", "3 Months", "6 Months", "1 Year", "5 Years+"].map((option) => (
                        <label key={option} className="flex items-center space-x-2 text-sm">
                            <RadioGroupItem value={option} />
                            <span>{option}</span>
                        </label>
                    ))}
                </RadioGroup>
            </div>

            {/* Buttons */}
            <div className="mt-auto flex justify-between gap-2">
                <CustomButton
                    buttonLabel="Apply"
                    variant="primary"
                    onClick={applyFilters}
                />
                <CustomButton
                    buttonLabel="Clear"
                    variant="outline"
                    onClick={clearFilters}
                />
            </div>
        </div>
    );
};

export default FilterSidebar;
