"use client";


import React, { useState } from "react"
import WatchlistCard from '@/components/Product/WatchlistCard';


const deliveredOrders = [
  {
    productId: 1,
    imageSrc: "https://us.mavi.com/cdn/shop/products/c9f3fe9c0b28b40afe2c255b9e45c3a7d5b55ae1ab4cdaec5914cb329f422110.jpg?v=1674634752",
    title: "POLO Shirt - Original",
    description: "Comfortable cotton polo shirt in black color.",
    rating: 4.5,
    reviews: 120,
    price: 64099,
    availableItems: 10,
  },
  {
    productId: 2,
    imageSrc: "https://us.mavi.com/cdn/shop/products/c9f3fe9c0b28b40afe2c255b9e45c3a7d5b55ae1ab4cdaec5914cb329f422110.jpg?v=1674634752",
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

      <h2 className="text-2xl font-semibold text-gray-800">Orders / Delivered</h2>
     
      {deliveredOrders.map((order) => (
        <div className="px-10 py-5" key={order.productId}>
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
        </div>
      ))}
    </div>




  )
}
