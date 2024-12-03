"use client";
import React, { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AdminSidebarData } from "./AdminSidebarData";

const AdminSidebar: FC = () => {
    const pathname = usePathname();

    return (
        <div className="bg-white h-screen p-4 mt-16">
            <h2 className="text-lg font-bold font-inter">Admin</h2>
            <nav>
                <ul className="space-y-2 list-none text-sm mt-2">
                    {AdminSidebarData.map((item, index) => {
                        const isActive = pathname === item.path;
                        return (
                            <li key={index}>
                                <Link
                                    href={item.path || "#"}
                                    className={`group flex items-center p-2 space-x-3 rounded-lg transition duration-200 ease-in-out ${isActive
                                            ? "text-carnation-600"
                                            : "text-gray-700 hover:text-carnation-550"
                                        }`}
                                >
                                    {item.icon && (
                                        <item.icon
                                            className={`text-lg transition duration-200 ease-in-out ${isActive
                                                    ? "text-carnation-600"
                                                    : "text-gray-500 group-hover:text-carnation-550"
                                                }`}
                                        />
                                    )}
                                    <span className="font-medium">{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default AdminSidebar;
