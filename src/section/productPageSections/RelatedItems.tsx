import React from 'react';
import ProductCard, { ProductCardProps } from "@/components/Product/ProductCard";


interface RelatedItemsType {
    relatedItems: ProductCardProps[]
}


const RelatedItems: React.FC<RelatedItemsType> = ({ relatedItems }) => {
    return (
        <div className="px-3 py-7 md:p-7">
            <h3 className="font-medium">Related Items</h3>

            <div className="pt-5 pb-16 overflow-x-auto">
                <div className="flex w-fit mx-auto space-x-3 ">
                    {relatedItems.map((item, index) => (
                        <ProductCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RelatedItems;