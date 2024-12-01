"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer/Footer";

const FooterWrapper = () => {
    const pathname = usePathname();

    // Hide the footer for any route starting with "/auth"
    const hideFooter = pathname.startsWith("/auth");

    return !hideFooter ? <Footer /> : null;
}

export default FooterWrapper;
