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

            {/* SidebarProvider and AppSidebar (uncomment if needed) */}
            {/* <SidebarProvider>
                <AppSidebar items={items} />
            </SidebarProvider> */}

            {/* Top Navbar Row */}
          
            {/* Main Content Row */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                {/* <div className="flex-shrink-0">
                    <AppSidebar items={items} />
                </div> */}

                {/* Main Content */}
                <main className="flex-1 p-6 overflow-y-auto mt-14">
                    {children}
                </main>
            </div>


        </div>
    );
}