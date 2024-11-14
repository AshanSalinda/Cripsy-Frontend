"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingCart, FiUser, FiMessageSquare } from 'react-icons/fi';
import SearchBar from '@/components/SearchBar/SearchBar';
import jsonData from '@/data/data.json';

const TopNavbar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSuggestionSelect = (suggestion: string) => {
        setSearchQuery(suggestion);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-2 bg-white shadow-md">
            <LogoSection />
            <NavigationLinks />
            <SearchBarSection
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSuggestionSelect={handleSuggestionSelect}
                suggestions={jsonData.searchBarSuggestions} // Pass suggestions from JSON data
            />
            <IconsSection />
        </nav>
    );
};


const LogoSection: React.FC = () => (
  <div className="flex items-center space-x-2">
    <Link href="/" className="flex items-center space-x-1 text-2xl font-bold text-black">
      <Image
        src="/CripsyLogo.png"
        alt="Cripsy Logo"
        width={64}
        height={60}
        priority
      />
    </Link>
  </div>
);

const NavigationLinks: React.FC = () => (
  <div className="hidden md:flex space-x-6 font-normal">
    <Link href="/categories" className="text-black hover:text-gray-700">
      Categories
    </Link>
    <Link href="/deals" className="text-black hover:text-gray-700">
      Deals
    </Link>
    <Link href="/whats-new" className="text-black hover:text-gray-700">
      {"What's New"}
    </Link>
  </div>
);

interface SearchBarSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSuggestionSelect: (suggestion: string) => void;
  suggestions: string[];
}

const SearchBarSection: React.FC<SearchBarSectionProps> = ({ searchQuery, setSearchQuery, handleSuggestionSelect, suggestions }) => (
  <div className="flex items-center w-full max-w-xs md:max-w-md">
    <div className="relative w-full">
      <SearchBar
        id="mainSearchBar"
        placeholder="Search in Cripsy"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        suggestions={suggestions}
        onSuggestionSelect={handleSuggestionSelect}
      />
    </div>
  </div>
);

const IconsSection: React.FC = () => (
  <div className="flex items-center space-x-6">
    <Link href="/cart">
      <FiShoppingCart className="text-xl text-black hover:text-gray-700" />
    </Link>
    <Link href="/profile">
      <FiUser className="text-xl text-black hover:text-gray-700" />
    </Link>
    <Link href="/chat">
      <FiMessageSquare className="text-xl text-black hover:text-gray-700" />
    </Link>
  </div>
);

export default TopNavbar;
