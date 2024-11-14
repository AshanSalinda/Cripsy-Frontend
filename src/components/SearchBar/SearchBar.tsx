import React, { useState, ChangeEvent } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

interface SearchBarProps {
    id: string;
    type?: string;
    value: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSuggestionSelect: (suggestion: string) => void;
    suggestions: string[];
    width?: string;
    showIcon?: boolean;
    label?: boolean;
    labelName?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
    id,
    type = 'text',
    value,
    placeholder,
    onChange,
    onSuggestionSelect,
    suggestions,
    width = 'w-full',
    showIcon = true,
    label = false,
    labelName,
}) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [isFocused, setIsFocused] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const userInput = e.target.value;
        onChange(e);

        const filtered = suggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(userInput.toLowerCase())
        );

        setFilteredSuggestions(filtered);
        setShowSuggestions(true);
        setActiveIndex(-1);
    };

    const handleSuggestionClick = (suggestion: string) => {
        onSuggestionSelect(suggestion);
        setShowSuggestions(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && activeIndex >= 0 && filteredSuggestions.length > 0) {
            onSuggestionSelect(filteredSuggestions[activeIndex]);
            setShowSuggestions(false);
        } else if (e.key === 'ArrowDown') {
            if (activeIndex < filteredSuggestions.length - 1) {
                setActiveIndex(activeIndex + 1);
            }
        } else if (e.key === 'ArrowUp') {
            if (activeIndex > 0) {
                setActiveIndex(activeIndex - 1);
            }
        }
    };

    const handleClearInput = () => {
        onChange({ target: { value: '' } } as ChangeEvent<HTMLInputElement>);
        setShowSuggestions(false);
    };

    const getHighlightedText = (text: string, highlight: string) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (
            <>
                {parts.map((part, index) =>
                    part.toLowerCase() === highlight.toLowerCase() ? (
                        <span key={index} className="font-bold text-carnation-500">
                            {part}
                        </span>
                    ) : (
                        part
                    )
                )}
            </>
        );
    };

    return (
        <div className={`relative ${width}`}>
            {label && (isFocused || value !== '') && (
                <label
                    htmlFor={id}
                    className={`absolute left-3 transition-all duration-200 text-xs ${isFocused || value !== ''
                        ? '-top-3 text-carnation-400 bg-white px-1 font-medium z-[1]'
                        : 'top-2 text-gray-400'
                        }`}
                >
                    {labelName || placeholder}
                </label>
            )}
            <div className="flex items-center">
                <input
                    id={id}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleInputChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onKeyDown={handleKeyDown}
                    className={`h-10 block py-2 pl-3 pr-10 text-sm text-black border rounded-md border-carnation-400 focus:outline-none focus:ring-1 focus:ring-carnation-500 focus:border-carnation-500 ${width}`}
                />
                {showIcon && !value && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <FiSearch style={{ opacity: 0.5 }} />
                    </div>
                )}
                {value && (
                    <button
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                        onClick={handleClearInput}
                    >
                        <FiX className="text-gray-500" />
                    </button>
                )}
            </div>

            {showSuggestions && value && (
                <ul
                    className={`absolute z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto ${width} scrollbar-thin scrollbar-thumb-carnation-300 scrollbar-track-transparent`}
                >
                    {filteredSuggestions.length > 0 ? (
                        filteredSuggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                className={`px-4 py-2 text-sm cursor-pointer ${index === activeIndex ? 'bg-carnation-300 font-bold' : 'hover:bg-carnation-250'
                                    }`}
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {getHighlightedText(suggestion, value)}
                            </li>
                        ))
                    ) : (
                        <li className="px-4 py-2 text-sm text-red-500">No results found</li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
