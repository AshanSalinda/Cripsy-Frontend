"use client";

import React, { useEffect } from 'react';
import TopNavbar from '@/components/TopNavbar/TopNavbar';
import Button from '@/components/Button/CustomButton';
import CartOrderItem from '@/section/CartPageSections/CartOrderItem';
import CartProductCard from '@/section/CartPageSections/CartItemCard';
import { getCartItems } from '@/apis/productApi/productApi';


interface CartItemType {
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


const Cart: React.FC = () => {
    const [cartItems, setCartItems] = React.useState<CartItemType[]>([]);
    const [totalAmount, setTotalAmount] = React.useState(0);
    const ShippingCharge = 200;
    const userId = 1;

    useEffect(() => {
        const fetchCartItems = async () => {
            const cartItems = await getCartItems(userId);
            const total = cartItems.reduce((sum: number, item: CartItemType) => sum + item.total, 0);
            setTotalAmount(total + ShippingCharge);
            setCartItems(cartItems);
            console.log(cartItems);
        };

        fetchCartItems();
    }, []);



    const getCartItemProps = (item: CartItemType) => {
        return {
            productId: item?.productId,
            imageUrl: item?.imageUrl,
            name: item?.name,
            price: item?.price,
            description: item?.description,
            avgRatings: item?.avgRatings,
            ratingCount: item?.ratingCount,
            reviewCount: item?.reviewCount,
            stock: item?.stock,
            quantity: item?.quantity,
        }
    }


    const getOrderItemProps = (item: CartItemType) => {
        return {
            name: item?.name,
            price: item?.price,
            quantity: item?.quantity,
            discount: item?.discount,
            total: item?.total
        }
    }


    return (
        <div className='h-[calc(100vh-8rem)] md:h-[calc(100vh-5rem)]'>
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
                                <p className='font-light'>{`Rs ${totalAmount - ShippingCharge}`}</p>
                            </div>
                            <div className='flex justify-between w-full mt-2'>
                                <p className='font-light'>Shipping</p>
                                <p className='font-light'>{`Rs ${ShippingCharge}`}</p>
                            </div>
                            <div className='flex justify-between w-full mt-2'>
                                <p className='text-xl font-semibold text-carnation-500'>Total Amount</p>
                                <p className='text-xl font-semibold text-carnation-500'>
                                    {`Rs ${totalAmount?.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}
                                </p>
                            </div>
                            <Button buttonClassName='w-full mt-4 mx-auto' buttonLabel='Checkout' />
                        </div>
                    </div>                    
                </div>
                }
            </div>
        </div>
    );
};

export default Cart;