import React from "react";
import NavbarWrapper from "@/components/LayoutWrapper/NavbarWrapper";
import FooterWrapper from "@/components/LayoutWrapper/FooterWrapper";
import FilterSidebar from "@/components/FilterSidebar/FilterSidebar";

export default function AllProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <NavbarWrapper />

      {/* Main Content Area */}
      <div className="flex flex-grow mt-10">
        {/* Filter Sidebar */}
        <aside className="w-60 bg-gray-50 border-r border-gray-300 h-[calc(100vh-4rem)] sticky top-16 pb-4">
          <div
            className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
          >
            <FilterSidebar />
          </div>
        </aside>

        {/* Page Content */}
        <main className="flex-grow p-6 overflow-y-auto bg-white">
          <div className="mt-6">{children}</div>
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full">
        <FooterWrapper />
      </footer>
    </div>
  );
}
