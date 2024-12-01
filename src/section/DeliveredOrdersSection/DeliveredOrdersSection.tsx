"use client";


import React from 'react'
import WatchlistCard from '@/components/Product/WatchlistCard';

const deliveredOrders = [
  {
    productId: 1,
    imageSrc: "/path/to/image1.jpg",
    title: "POLO Shirt - Original",
    description: "Comfortable cotton polo shirt in black color.",
    rating: 4.5,
    reviews: 120,
    price: 64099,
    availableItems: 10,
  },
  {
    productId: 2,
    imageSrc: "/path/to/image2.jpg",
    title: "POLO Shirt - Original",
    description: "Stylish cotton polo shirt in black color.",
    rating: 4.3,
    reviews: 95,
    price: 64099,
    availableItems: 15,
  },
];



export const DeliveredOrdersSection = () => {
  return (
    <div>
      {deliveredOrders.map((order) => (
        <WatchlistCard
          key={order.productId}
          productId={order.productId}
          imageSrc={order.imageSrc}
          title={order.title}
          description={order.description}
          rating={order.rating}
          reviews={order.reviews}
          price={order.price}
          availableItems={order.availableItems}
          hideHartIcon={true} // Hides the heart icon for delivered orders
          CardButtonlabel="Refund"
          onPreviewClick={() => console.log(`Refund request added: ${order.productId}`)}
        />
      ))}
    </div>

  )
}
