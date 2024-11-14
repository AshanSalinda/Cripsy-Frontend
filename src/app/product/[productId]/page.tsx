import React from "react";
import item from "@/data/productIem.json";
import Overview from "@/components/Product/SingleProduct/Overview";
import TopNavbar from "@/components/TopNavbar/TopNavbar";
import Footer from "@/components/Footer/Footer";


const ProductItem : React.FC = () => {
    const productData = {
        name: item.name,
        price: item.price,
        rating: item.rating,
        ratingCount: item.ratingCount,
        stock: item.stock,
        images: item.images
    }
    
    return (
        <div>
            <TopNavbar />
            <Overview {...productData} />
            <Footer />
        </div>
    );
};

export default ProductItem;
