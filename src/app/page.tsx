import MainImageCarousel from "@/components/Carosel/MainImageCarousel";
import ProductCard from "@/components/Product/ProductCard";
import Link from "next/link";

const products = [
  {
    productId: "1",
    imageSrc: "/images/product1.jpg",
    title: "POLO Shirt",
    description: "The perfection of men's ware",
    rating: 4.5,
    reviews: 234,
    price: 2340,
  },
  {
    productId: "2",
    imageSrc: "/images/headphones.jpg",
    title: "Airpods Max",
    description: "High-quality audio and noise cancellation",
    rating: 4.0,
    reviews: 120,
    price: 2340,
  },
  {
    productId: "3",
    imageSrc: "/images/headphones.jpg",
    title: "Airpods Max",
    description: "High-quality audio and noise cancellation",
    rating: 3.8,
    reviews: 98,
    price: 2340,
  },
  {
    productId: "4",
    imageSrc: "/images/headphones.jpg",
    title: "Airpods Max",
    description: "High-quality audio and noise cancellation",
    rating: 4.8,
    reviews: 560,
    price: 80000,
  },
  {
    productId: "5",
    imageSrc: "/images/iphone.jpg",
    title: "iPhone 14",
    description: "The latest in iPhone technology",
    rating: 4.9,
    reviews: 1090,
    price: 150000,
  },
  {
    productId: "6",
    imageSrc: "/images/monitor.jpg",
    title: "Curved Gaming Monitor",
    description: "27-inch immersive experience",
    rating: 4.3,
    reviews: 432,
    price: 45000,
  },
];

export default function Home() {
  return (
    <>
      <MainImageCarousel />
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        {/* Super Deals Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-left md:text-center flex-grow">
            Super Deals
          </h2>
          <Link href="/all-deals" className="text-carnation-500 text-sm font-medium">
            View All
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.productId} className="w-full flex justify-center">
              <div className="w-full max-w-[300px]">
                <ProductCard {...product} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
