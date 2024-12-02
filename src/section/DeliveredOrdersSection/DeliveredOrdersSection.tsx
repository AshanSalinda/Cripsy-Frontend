"use client";

import React, { useState } from "react";
import WatchlistCard from "@/components/Product/WatchlistCard";
import PopupContainer from "@/components/Popup/PopupContainer"; // Import your existing popup component
import RatingStar from "@/components/Product/RatingStar";
import CustomButton from "@/components/Button/CustomButton";

const deliveredOrders = [
  {
    productId: 1,
    imageSrc:
      "https://us.mavi.com/cdn/shop/products/c9f3fe9c0b28b40afe2c255b9e45c3a7d5b55ae1ab4cdaec5914cb329f422110.jpg?v=1674634752",
    title: "POLO Shirt - Original",
    description: "Comfortable cotton polo shirt in black color.",
    rating: 4.5,
    reviews: 120,
    price: 64099,
    availableItems: 10,
  },
  {
    productId: 2,
    imageSrc:
      "https://us.mavi.com/cdn/shop/products/c9f3fe9c0b28b40afe2c255b9e45c3a7d5b55ae1ab4cdaec5914cb329f422110.jpg?v=1674634752",
    title: "POLO2 Shirt - Original",
    description: "Stylish cotton polo shirt in black color.",
    rating: 4.3,
    reviews: 95,
    price: 64099,
    availableItems: 15,
  },
];

export const DeliveredOrdersSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

  const openPopup = (order: any) => {
    setSelectedOrder(order);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedOrder(null);
  };

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
            hideHartIcon={true}
            CardButtonlabel="Refund"
            onPreviewClick={() => openPopup(order)}
          />
        </div>
      ))}

      {/* Enhanced Popup */}
      {isPopupOpen && selectedOrder && (
        <PopupContainer isOpen={isPopupOpen} onClose={closePopup}>
          <div className="p-6">
            {/* Header Section */}
            <div className="flex items-start gap-6">
              {/* Product Image */}
              <img
                src={selectedOrder.imageSrc}
                alt={selectedOrder.title}
                className="w-36 h-46 object-cover rounded-md"
              />

              {/* Product Details */}
              <div className="flex-1 p-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {selectedOrder.title}
                </h3>
                <p className="text-sm text-gray-600">{selectedOrder.description}</p>
                {/* Product Rating */}
                <div className="flex gap-3 text-left mr-36">
                            <span className="text-black ml-0 text-lg">{selectedOrder.reviews}</span>
                            <RatingStar value={selectedOrder.rating} readOnly={true} small={true} />
                </div>
                <div className="mt-2 text-sm text-black space-y-1">
                  <p className="text-sm">
                    <strong className="text-carnation-400">Order Date:</strong> 03.11.2024
                  </p>
                  <p className="text-sm">
                    <strong className="text-carnation-400">Delivered Date:</strong> 03.12.2024
                  </p>
                  <p className="text-sm">
                    <strong className="text-carnation-400">Quantity:</strong> {selectedOrder.availableItems}
                  </p>
                  <p className="text-sm">
                    <strong className="text-carnation-400">Size:</strong> M
                  </p>
                  <p className="text-sm">
                    <strong className="text-carnation-400">Color:</strong> Black
                  </p>
                </div>
              </div>
            </div>

            {/* Refund Section */}
            <div className="mt-6">
              <label
                htmlFor="refundReason"
                className="block text-sm font-semibold text-gray-800 mb-2"
              >
                Refund Reason
              </label>
              <textarea
                id="refundReason"
                className="w-full h-24 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="Enter the reason for refund..."
              ></textarea>
            </div>

            {/* Footer Section */}
            <div className="mt-6 flex justify-end">
              
              <CustomButton
                                buttonLabel="Submit" 
                                variant="primary"
                                buttonClassName="rounded-5 px-2  py-2    items-center transition "
                                onClick={() => {
                                  console.log("Refund reason submitted");
                                  closePopup();
                                }} 
                            
               />
            </div>
          </div>
        </PopupContainer>
      )}
    </div>
  );
};
