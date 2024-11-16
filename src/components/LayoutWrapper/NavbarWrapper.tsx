"use client";

import { usePathname } from "next/navigation";
import TopNavbar from "@/components/TopNavbar/TopNavbar";

const NavbarWrapper = () => {
    const pathname = usePathname();

    // Hide the navbar for any route starting with "/auth"
    const hideNavbar = pathname.startsWith("/auth");

    return !hideNavbar ? <TopNavbar /> : null;
}

export default NavbarWrapper;
