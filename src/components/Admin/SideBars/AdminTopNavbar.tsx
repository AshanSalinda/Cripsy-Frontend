"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineLogout } from 'react-icons/hi';
import Tooltip from '@/components/Tooltip/Tooltip';

const AdminTopNavbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full px-6 py-1 bg-white shadow-md z-50">
            <div className="flex items-center justify-between">
                {/* Logo Section */}
                <LogoSection />

                {/* Icons Section */}
                <IconsSection />
            </div>
        </nav>
    );
};

const LogoSection: React.FC = () => (
    <div className="flex items-center">
        <Link href="/" className="flex items-center text-2xl font-bold text-black">
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

const IconsSection: React.FC = () => (
    <div className="flex items-center space-x-6">
        {/* Profile Image */}
        <Link href="/admin/profile" className="group">
            <div className="w-10 h-10 overflow-hidden bg-gray-200 rounded-full cursor-pointer hover:ring-2 hover:ring-carnation-400 transition duration-200">
                <Image
                    src="/AdminDp.jpg"
                    alt="Profile Image"
                    width={40}
                    height={40}
                    className="object-cover"
                />
            </div>
        </Link>

        {/* Logout Icon with Tooltip */}
        <Tooltip label="Logout" side="bottom">
            <Link href="/" className="group">
                <HiOutlineLogout className="text-2xl text-red-500 group-hover:text-carnation-400 transition duration-200" />
            </Link>
        </Tooltip>
    </div>
);

export default AdminTopNavbar;
