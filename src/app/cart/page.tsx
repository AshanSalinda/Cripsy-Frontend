"use client";

import React, { useEffect, useState } from "react";
import TopNavbar from '@/components/TopNavbar/TopNavbar';
import Button from '@/components/Button/CustomButton';
import CartOrderItem from '@/section/CartPageSections/CartOrderItem';
import CartProductCard from '@/section/CartPageSections/CartItemCard';
import { getCartItems } from '@/apis/cartApi/cartApi';
import Script from "next/script";

export interface CartItemType {
    productId: number;
    imageUrl: string;
    name: string;
    price: number;
    discount: number;
    total: number;
    quantity: number;
    description: string;
    avgRatings: number;
    ratingCount: number;
    reviewCount: number;
    stock: number;
}

declare global {
    interface Window {
        payhere?: any;
    }
}


const paymentDetails = {
    order_id: "12345",
    items: "Sample Item",
    amount: "100.00",
    currency: "LKR",
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    phone: "0771234567",
    address: "123 Main Street",
    city: "Colombo",
    country: "Sri Lanka"
};

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = React.useState<CartItemType[]>([]);
    const [totalAmount, setTotalAmount] = React.useState(0);
    const [scriptError, setScriptError] = React.useState<string | null>(null);
    const [isPayhereLoaded, setIsPayhereLoaded] = useState(false);
    const ShippingCharge = 200;
    const userId = 1;

    const getCartItemProps = (item: CartItemType) => ({
        productId: item?.productId,
        userId: userId,
        imageUrl: item?.imageUrl,
        name: item?.name,
        price: item?.price,
        description: item?.description,
        avgRatings: item?.avgRatings,
        ratingCount: item?.ratingCount,
        reviewCount: item?.reviewCount,
        stock: item?.stock,
        quantity: item?.quantity,
        setCartItems: setCartItems,
    });

    const getOrderItemProps = (item: CartItemType) => ({
        name: item?.name,
        price: item?.price,
        quantity: item?.quantity,
        discount: item?.discount,
        total: item?.total,
        isError: item?.stock < item?.quantity,
    });

    // useEffect(() => {
    //     const fetchCustomerDetails = async () => {
    //         const cartItems = await getCartItems(userId);
    //         setCartItems(cartItems);
    //     };
    //
    //     fetchCartItems();
    // }, []);

    useEffect(() => {
        const fetchCartItems = async () => {
            const cartItems = await getCartItems(userId);
            setCartItems(cartItems);
        };

        fetchCartItems();
    }, []);

    useEffect(() => {
        const total = cartItems.reduce((sum: number, item: CartItemType) => sum + item.total, 0);
        setTotalAmount(total + ShippingCharge);
    }, [cartItems]);

    useEffect(() => {
        const checkPayhere = () => {
            if (typeof window !== "undefined" && window.payhere) {
                setIsPayhereLoaded(true);
            } else {
                setTimeout(checkPayhere, 1000);
            }
        };
        checkPayhere();
    }, []);

    const handleCheckout = async () => {
        if (!isPayhereLoaded) {
            alert("Payment system not ready.");
            return;
        }


        try {
            // Call backend to get merchant_id and hash
            const response = await fetch("http://localhost:8083/payment/start", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(paymentDetails),
            });

            if (!response.ok) {
                throw new Error("Failed to fetch payment configuration");
            }

            const { merchant_id, hash } = await response.json();

            // Add dynamic merchant_id and hash to payment details
            const payment = {
                sandbox: true,
                merchant_id: merchant_id,
                return_url: "http://localhost:3000/payment/success",
                cancel_url: "http://localhost:3000/payment/cancel",
                notify_url: "https://b0e4-2407-c00-e004-ad2e-6415-20fb-c56a-4e74.ngrok-free.app/payment/notify",
                order_id: paymentDetails.order_id,
                items: "Sample Item",
                amount: 100.00,
                currency: paymentDetails.currency,
                first_name: paymentDetails.first_name,
                last_name: paymentDetails.last_name,
                email: paymentDetails.email,
                phone: paymentDetails.phone,
                address: paymentDetails.address,
                city: paymentDetails.city,
                country: paymentDetails.country,
                hash: hash
            };

            window.payhere.startPayment(payment);
        } catch (error) {
            alert("Error initiating payment: " + error.message);
        }
    };

    return (
        <>
            <Script
                src="https://www.payhere.lk/lib/payhere.js"
                strategy="afterInteractive"
            />
            <div className='h-[calc(100vh-8rem)] md:h-[calc(100vh-5rem)]'>
                <TopNavbar/>

                {scriptError && (
                    <div className="bg-red-100 text-red-800 p-4 text-center">{scriptError}</div>
                )}

                <div className="flex flex-wrap h-full md:space-x-2 overflow-y-auto mt-32 md:mt-20 p-2">
                    <div className='order-2 lg:order-1 flex-1 space-y-2'>
                        {cartItems.length > 0 ? cartItems.map((item) => (
                            <CartProductCard key={item?.productId} {...getCartItemProps(item)} />
                        )) : (
                            <div className='h-96 flex items-center justify-center'>
                                <p className='font-light text-gray-400 text-xl'>Your cart is empty</p>
                            </div>
                        )}
                    </div>

                    {cartItems.length > 0 && (
                        <div
                            className='order-1 lg:order-2 lg:sticky top-0 shadow-custom-card rounded-sm py-5 px-10 h-fit w-full lg:h-full lg:w-[28rem] mb-2 lg:mb-0'>
                            <div className='flex flex-col h-full max-w-96 mx-auto'>
                                <h3 className='font-medium text-center mb-7 border-b'>Order Details</h3>

                                <div className='overflow-y-auto flex-1'>
                                    {cartItems.map((item) => (
                                        <CartOrderItem key={item?.productId} {...getOrderItemProps(item)} />
                                    ))}
                                </div>

                                <div className='pt-4'>
                                    <div className='flex justify-between w-full mt-2'>
                                        <p className='font-light'>Subtotal</p>
                                        <p className='font-light'>{`Rs ${totalAmount - ShippingCharge}`}</p>
                                    </div>
                                    <div className='flex justify-between w-full mt-2'>
                                        <p className='font-light'>Shipping</p>
                                        <p className='font-light'>{`Rs ${ShippingCharge}`}</p>
                                    </div>
                                    <div className='flex justify-between w-full mt-2'>
                                        <p className='text-xl font-semibold text-carnation-500'>Total Amount</p>
                                        <p className='text-xl font-semibold text-carnation-500'>
                                            {`Rs ${totalAmount?.toLocaleString('en-US', {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2
                                            })}`}
                                        </p>
                                    </div>
                                    <Button buttonClassName='w-full mt-4 mx-auto' buttonLabel='Checkout'
                                            onClick={handleCheckout}/>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Cart;
