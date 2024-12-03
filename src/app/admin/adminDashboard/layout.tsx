import React from "react";
import AdminTopNavbar from "@/components/Admin/SideBars/AdminTopNavbar";
import AdminSidebar from "@/components/Admin/SideBars/AdminSidebar";

export default function AllProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
            {/* Admin Sidebar */}
            <div className="w-52 fixed top-0 left-0 h-ful shadow-md">
                <AdminSidebar />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 ml-52 flex flex-col">
                {/* Admin Top Navbar */}
                <AdminTopNavbar />

                {/* Page Content */}
                <main className="flex-1 p-4 overflow-y-auto mt-12 bg-gray-50">
                    {children}
                </main>
            </div>
        </div>
    );
}
