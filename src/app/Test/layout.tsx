import {SidebarProvider} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/NavBar/AppSidebar";
import {Heart, Inbox, User} from "lucide-react";
import Footer from "@/components/Footer/Footer";
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

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
            {/* Top Navbar Row */}
            <div className="row-span-1">
                <TopNavbar/>
            </div>

            {/* Middle Content Row */}
            <div className="grid grid-cols-[auto,1fr] row-span-1">
                <div className='h-14'>
                    <AppSidebar items={items}/>
                </div>

                <main className="p-6">
                    {children}
                </main>
            </div>

            {/* Footer Row */}
            <div className="row-span-1">
                <Footer/>
            </div>
        </div>
    );
}
