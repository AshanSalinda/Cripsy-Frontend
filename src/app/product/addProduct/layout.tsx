import { AppSidebar } from "@/components/NavBar/AppSidebar";
import { Heart, Inbox, User } from "lucide-react";
import TopNavbar from "@/components/TopNavbar/TopNavbar";

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

            <div className="flex-shrink-0 z-50">
                <TopNavbar />
            </div>

            <div className="flex flex-1 overflow-hidden">

                <div className="flex-shrink-0">
                    <AppSidebar items={items} />
                </div>

                <main className="flex-1 p-6 overflow-y-auto mt-20">
                    {children}
                </main>
            </div>

        </div>
    );
}