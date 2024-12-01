import { AppSidebar } from "@/components/NavBar/AppSidebar";
import { Clock9,Heart, Inbox, User,Gift,Truck,ShieldX } from "lucide-react";
import TopNavbar from "@/components/TopNavbar/TopNavbar";
import { DeliveredOrdersSection } from "@/section/DeliveredOrdersSection/DeliveredOrdersSection";
import Footer from "@/components/Footer/Footer";

const acitems = [
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


export default function page({ children }: { children: React.ReactNode }) {
    return (

        <div className="min-h-screen flex flex-col">
        <TopNavbar />
        <AppSidebar accountItems={acitems} orderItems={oritems} />
        <div className="flex flex-grow">
        
           
<div className="min-h-screen bg-white">
 <h2 className="text-2xl font-semibold text-gray-800 mb-6">Orders / Delivered</h2>
     <DeliveredOrdersSection />
  </div>
            
        </div>
        <Footer />
    </div>
        
    );
}