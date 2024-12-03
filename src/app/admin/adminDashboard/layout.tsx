import React from "react";
import AdminTopNavbar from "@/components/Admin/AdminTopNavbar";
import AdminSidebar from "@/components/Admin/AdminSidebar";

export default function AllProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="w-60 fixed top-0 left-0 h-full bg-gray-50 shadow-md">
                <AdminSidebar />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 ml-60 flex flex-col">
                {/* Top Navbar */}
                <AdminTopNavbar />

                {/* Page Content */}
                <main className="flex-1 p-6 bg-gray-100 overflow-y-auto mt-10">
                    {children}
                </main>
            </div>
        </div>
    );
}
