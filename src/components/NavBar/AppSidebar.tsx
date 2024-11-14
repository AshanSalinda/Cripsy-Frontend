import { LucideIcon } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
} from "@/components/ui/sidebar";

interface SidebarItem {
    title: string;
    url: string;
    icon: LucideIcon;
}

interface AppSidebarProps {
    items: SidebarItem[];
}

export function AppSidebar({ items }: AppSidebarProps) {
    if (!items || items.length === 0) {
        throw new Error("AppSidebar requires an 'items' prop with at least one item.");
    }

    return (
        <SidebarProvider>
            <Sidebar className="h-full mt-14 w-64 flex-shrink-0 overflow-y-auto border-r border-gray-200">
                <SidebarContent className="flex flex-col p-7 h-full">
                    <SidebarGroup>
                        <SidebarGroupLabel className="text-xl text-black pb-5 w-1/3">Account</SidebarGroupLabel>
                        <SidebarGroupContent className="flex-grow">
                            <SidebarMenu>
                                {items.map((item) => (
                                    <SidebarMenuItem className="p-1 text-[#6F6F6F]" key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url} className="hover:text-[#f83b3b] rounded-md transition-colors duration-200">
                                                <item.icon />
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
        </SidebarProvider>
    );
}
