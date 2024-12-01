import { DeliveredOrdersSection } from "@/section/DeliveredOrdersSection/DeliveredOrdersSection";


export default function page({ children }: { children: React.ReactNode }) {
    return (
    <div>
        <DeliveredOrdersSection />
    </div>   
    );
}