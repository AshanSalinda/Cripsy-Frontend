"use client";
import React, {useEffect, useState} from 'react';
import TopNavbar from '@/components/TopNavbar/TopNavbar';
import Button from '@/components/Button/CustomButton';
import CartOrderItem from '@/section/CartPageSections/CartOrderItem';
import CartProductCard from '@/section/CartPageSections/CartItemCard';
import Script from "next/script";
import {getCustomerDetails} from "@/apis/customerAPIs/customerAPI";
import { getCartItems, initiateOrder, confirmOrder, cancelOrder, configurePayhere } from '@/apis/cartApi/cartApi';


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

export interface CustomerDetailsType {
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    country: string
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

declare global {
    interface Window {
        payhere: any;
    }
}

const Cart: React.FC = () => {
    const userId = 1;
    const shippingCharge = 200;
    const [cartItems, setCartItems] = useState<CartItemType[]>([]);
    const [customerDetails, setCustomerDetails] = useState<Partial<CustomerDetailsType>>({});
    const [totalAmount, setTotalAmount] = useState(shippingCharge);
 

    const toCurrency = (value: number = 0) => (
        "Rs " + value?.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})
    );

    const getCartItemProps = (item: CartItemType) => {
        return {
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
            setCartItems: setCartItems
        }
    }


    const getOrderItemProps = (item: CartItemType) => {
        return {
            name: item?.name,
            price: item?.price,
            quantity: item?.quantity,
            discount: item?.discount,
            total: item?.total,
            isError: item?.stock < item?.quantity
        }
    }


    const handleCheckout = async () => {
        if (typeof window === "undefined" || !window.payhere) {
            alert("Payment system not ready.");
            return;
        }

        const { merchant_id, hash } = await configurePayhere(customerDetails);

        if(!merchant_id || !hash){
            alert("Failed to fetch payment configuration");
            return;
        }

        const payment = {
            sandbox: true,
            merchant_id: merchant_id,
            return_url: "http://localhost:3000/payment/success",
            cancel_url: "http://localhost:3000/payment/cancel",
            notify_url: "https://b0e4-2407-c00-e004-ad2e-6415-20fb-c56a-4e74.ngrok-free.app/payment/notify",
            order_id: paymentDetails?.order_id,
            items: "Sample Item",
            amount: 100.00,
            currency: "LKR",
            first_name: customerDetails?.first_name,
            last_name: customerDetails?.last_name,
            email: customerDetails?.email,
            phone: customerDetails?.phone,
            address: customerDetails?.address,
            city: customerDetails?.city,
            country: customerDetails?.country,
            hash: hash
        };

        window.payhere.startPayment(payment);

        const orderItems = cartItems.map((item) => ({productId: item.productId, quantity: item.quantity}));

        try{
            const transactionId = await initiateOrder(orderItems);
            // Make the payment here

            if(transactionId){ // if Payment success
                const orderDetails = await confirmOrder(transactionId);
                // send request to order Service to place the order
                console.log("Order placed successfully", orderDetails);
            } else { // Else Cancel the order
                await cancelOrder(transactionId);
            }

        } catch (error) {
            const cartItems = await getCartItems(userId);
            setCartItems(cartItems);
        }
        
    }

    
    useEffect(() => {
        const fetchCartItems = async () => {
            const cartItems = await getCartItems(userId);
            setCartItems(cartItems);
        };

        const fetchCustomerDetails = async () => {
            const customerDetails = await getCustomerDetails(userId);
            setCustomerDetails(customerDetails);
            console.log(customerDetails);
        };

        fetchCartItems();
        fetchCustomerDetails();
    }, []);


    useEffect(() => {
        const total = cartItems.reduce((sum: number, item: CartItemType) => sum + item.total, 0);
        setTotalAmount(total + shippingCharge);
    }, [cartItems]);


    useEffect(() => {

    }, []);


    return (
        <div className='h-[calc(100vh-8rem)] md:h-[calc(100vh-5rem)]'>
            <Script
                src="https://www.payhere.lk/lib/payhere.js"
                strategy="afterInteractive"
            />

            <TopNavbar />

            <div className="flex flex-wrap h-full md:space-x-2 overflow-y-auto mt-32 md:mt-20 p-2">
                <div className='order-2 lg:order-1 flex-1 space-y-2'>
                    {cartItems.length > 0 ? cartItems.map((item) => (
                        <CartProductCard key={item?.productId} {...getCartItemProps(item)} />
                    )) : 
                        <div className='h-96 flex items-center justify-center'>
                            <p className='font-light text-gray-400 text-xl'>Your cart is empty</p>
                        </div>
                    }
                </div>

                { cartItems.length > 0 && 
                <div className='order-1 lg:order-2 lg:sticky top-0 shadow-custom-card rounded-sm py-5 px-10 h-fit w-full lg:h-full lg:w-[28rem] mb-2 lg:mb-0'>
                    <div className='flex flex-col h-full max-w-96 mx-auto'>
                        <h3 className='font-medium text-center mb-7 border-b'>Order Details</h3>

                        <div className='overflow-y-auto flex-1'>
                            { cartItems.map((item) => (
                                <CartOrderItem key={item?.productId} {...getOrderItemProps(item)} />
                            ))}
                        </div>

                        <div className='pt-4'>
                            <div className='flex justify-between w-full mt-2'>
                                <p className='font-light'>Subtotal</p>
                                <p className='font-light'>{toCurrency(totalAmount - shippingCharge)}</p>
                            </div>
                            <div className='flex justify-between w-full mt-2'>
                                <p className='font-light'>Shipping</p>
                                <p className='font-light'>{toCurrency(shippingCharge)}</p>
                            </div>
                            <div className='flex justify-between w-full mt-2'>
                                <p className='text-xl font-semibold text-carnation-500'>Total Amount</p>
                                <p className='text-xl font-semibold text-carnation-500'>{toCurrency(totalAmount)}</p>
                            </div>
                            
                            <Button buttonClassName='w-full mt-4 mx-auto' buttonLabel='Checkout' onClick={handleCheckout} />
                        </div>
                    </div>                    
                </div>
                }
            </div>
        </div>
    );
};

export default Cart;