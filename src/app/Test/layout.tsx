import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/NavBar/AppSidebar";
import { Heart, Inbox, User } from "lucide-react";
import Footer from "@/components/Footer/Footer";

const items = [
    {
        title: "My Profile",
        url: "#",
        icon: User,
    },
    {
        title: "Address Book",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Watch List",
        url: "#",
        icon: Heart,
    },
];

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* SidebarProvider and AppSidebar (uncomment if needed) */}
            {/* <SidebarProvider>
                <AppSidebar items={items} />
            </SidebarProvider> */}

            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
