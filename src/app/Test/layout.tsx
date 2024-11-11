import {SidebarProvider} from "@/components/ui/sidebar"
import {AppSidebar} from "@/components/NavBar/AppSidebar"
import {Heart, Inbox, User} from "lucide-react"

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
]

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar items={items}/>
            <main>
                {children}
            </main>
        </SidebarProvider>
    )
}
