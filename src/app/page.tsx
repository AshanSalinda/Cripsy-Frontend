"use client"
import { useRouter } from 'next/navigation';
import MainImageCarousel from "@/components/Carosel/MainImageCarousel";
import ProductCard from "@/components/Product/ProductCard";
import { useEffect, useState } from 'react';
import { getProducts } from "@/apis/productApi/productApi";

export default function Home() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/product/allProducts');
  };

  // Define the Product type
  type Product = {
    productId: number;
    name: string;
    price: number;
    description: string;
    ratingCount: number;
    avgRatings: number;
    imageUrl: string;
  };

  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className='max-h-fit'>
        <MainImageCarousel />
      </div>
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        {/* Best Deals Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center w-full">
            <hr className="flex-grow border-t border-gray-300" />
            <h2 className="text-2xl font-bold text-gray-700 mx-4 whitespace-nowrap">
              Best Choice
            </h2>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <button
            onClick={handleNavigation}
            className="text-carnation-500 text-sm font-medium ml-4 whitespace-nowrap hover:font-bold"
          >
            View All
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Display products fetched from the API */}
          {products.slice(0, 8).map((product) => (
            <div key={product.productId} className="w-full flex justify-center">
              <div className="w-full max-w-[300px]">
                <ProductCard
                  imageSrc={product.imageUrl}
                  title={product.name}
                  description={product.description}
                  rating={product.avgRatings}
                  reviews={product.ratingCount}
                  price={product.price}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
