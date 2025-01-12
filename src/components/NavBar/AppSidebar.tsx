import {LucideIcon} from "lucide-react";
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
    accountItems: SidebarItem[];
    orderItems: SidebarItem[];
    showOrders: boolean;
}

export function AppSidebar({accountItems, orderItems, showOrders}: AppSidebarProps) {
    if ((!accountItems || accountItems.length === 0) && (!orderItems || orderItems.length === 0)) {
        throw new Error("AppSidebar requires an 'items' prop with at least one item.");
    }

    return (
        <SidebarProvider className='bg-white'>
            <Sidebar className="h-full mt-14 w-64 flex-shrink-0 overflow-y-auto bg-white border-r border-gray-200">
                <SidebarContent className="flex flex-col p-8 mt-5 h-full bg-white">
                    <SidebarGroup>
                        <SidebarGroupLabel className="text-xl text-black pb-5 w-1/3">Account</SidebarGroupLabel>
                        <SidebarGroupContent className="flex-grow">
                            <SidebarMenu>
                                {accountItems.map((acitem) => (
                                    <SidebarMenuItem className="p-1 text-[#6F6F6F]" key={acitem.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={acitem.url}
                                               className="hover:text-[#f83b3b] rounded-md transition-colors duration-200">
                                                <acitem.icon/>
                                                <span>{acitem.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>


                    {showOrders && (
                        <SidebarGroup>
                            <SidebarGroupLabel className="text-xl text-black pb-5 w-1/3">Orders</SidebarGroupLabel>
                            <SidebarGroupContent className="flex-grow">
                                <SidebarMenu>
                                    {orderItems.map((oritem) => (
                                        <SidebarMenuItem className="p-1 text-[#6F6F6F]" key={oritem.title}>
                                            <SidebarMenuButton asChild>
                                                <a href={oritem.url}
                                                   className="hover:text-[#f83b3b] rounded-md transition-colors duration-200">
                                                    <oritem.icon/>
                                                    <span>{oritem.title}</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    )}


                </SidebarContent>
            </Sidebar>
        </SidebarProvider>
    );
}
