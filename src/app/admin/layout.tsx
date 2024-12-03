import { AppSidebar } from "@/components/NavBar/AppSidebar";
import { Clock9,Heart, Inbox, User,Gift,ShieldX,Archive, Calendar,Truck,MessagesSquare } from "lucide-react";
import TopNavbar from "@/components/TopNavbar/TopNavbar";

const acitems = [
    {
        title: "Dashboard",
        url: "#",
        icon: User,
    },
    {
        title: "Orders",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Products",
        url: "#",
        icon: Archive,
    },
    {
        title: "Refunds",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Delivery",
        url: "#",
        icon: Truck,
    },
    {
        title: "Messages",
        url: "#",
        icon: MessagesSquare,
    },
];

const oritems =[
    {
        title: "Awaiting",
        url: "#",
       icon: Clock9,
    },
    {
        title: "Delivered",
        url: "#",
       icon: Gift,
    },
    {
        title: "Return",
        url: "#",
        icon: Truck,
    },

    {
        title: "Cancellation",
        url: "#",
        icon: ShieldX,
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
                    <AppSidebar accountItems={acitems} orderItems ={oritems} showOrders={false}/>
                </div>

                <main className="flex-1 p-6 overflow-y-auto mt-20">
                    {children}
                </main>
            </div>

        </div>
    );
}