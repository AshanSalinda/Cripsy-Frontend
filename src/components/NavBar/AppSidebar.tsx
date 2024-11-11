import {LucideIcon} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

interface SidebarItem {
    title: string;
    url: string;
    icon: LucideIcon;
}

interface AppSidebarProps {
    items: SidebarItem[];
}

export function AppSidebar({items}: AppSidebarProps) {
    if (!items || items.length === 0) {
        throw new Error("AppSidebar requires an 'items' prop with at least one item.");
    }

    return (
        <Sidebar>
            <SidebarContent className="p-7">
                <SidebarGroup>
                    <SidebarGroupLabel className="text-xl text-black pb-5">Account</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem className="p-1 text-[#6F6F6F]" key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url} className='hover:text-[#FF5757] rounded-md transition-colors duration-200'>
                                            <item.icon/>
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
