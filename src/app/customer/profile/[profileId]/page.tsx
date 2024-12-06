import React, {use} from "react";
import { CreateProfileSection } from "@/section/CreateProtileSection/CreateProfileSection";

interface ProductItemProps {
    params: Promise<{ profileId: number }>
}

const Page: React.FC<ProductItemProps> = ({params}) => {
    const customerId = Number(use(params).profileId);
    console.log(customerId)
    return (
        <div>
            <CreateProfileSection customerId={customerId} />
        </div>
    );
};

export default Page;
