"use client";

import React from 'react';
import TopNavbar from '@/components/TopNavbar/TopNavbar';
import Button from '@/components/Button/CustomButton';
import CartOrderItem from '@/section/CartPageSections/CartOrderItem';
import CartProductCard from '@/section/CartPageSections/CartItemCard';
import item  from '@/data/productIem.json';



const Cart: React.FC = () => {

    const cartItemProps = {
        image: item.imageUrls[0],
        name: item.name,
        price: item.price,
        description: item.description1,
        avgRating: item.rating,
        ratingCount: item.ratingCount,
        reviewCount: 564,
        stock: item.stock
    }

    const orderItemProps = {
        name: "Product Name",
        price: 525.50,
        quantity: 2,
        discount: 0,
        total: 1051
    }

    return (
        <div className='h-[calc(100vh-5rem)]'>
            <TopNavbar />

            <div className="flex flex-wrap h-full md:space-x-2 overflow-y-auto mt-32 md:mt-20 p-2">
                <div className='order-2 lg:order-1 flex-1 space-y-2'>
                    <CartProductCard {...cartItemProps}/>
                    <CartProductCard {...cartItemProps}/>
                    <CartProductCard {...cartItemProps}/>
                    <CartProductCard {...cartItemProps}/>
                    <CartProductCard {...cartItemProps}/>
                    <CartProductCard {...cartItemProps}/>
                </div>

                <div className='order-1 lg:order-2 lg:sticky top-0 shadow-custom-card rounded-sm py-5 px-10 h-fit w-full lg:h-full lg:w-[28rem] mb-2 lg:mb-0'>
                    <div className='flex flex-col h-full max-w-96 mx-auto'>
                        <h3 className='font-medium text-center mb-7 border-b'>Order Details</h3>

                        <div className='overflow-y-auto flex-1'>
                            <CartOrderItem {...orderItemProps}/>
                            <CartOrderItem {...orderItemProps}/>
                            <CartOrderItem {...orderItemProps}/>
                            <CartOrderItem {...orderItemProps}/>
                            <CartOrderItem {...orderItemProps}/>
                        </div>

                        <div className='pt-4'>
                            <div className='flex justify-between w-full mt-2'>
                                <p className='font-light'>Shipping</p>
                                <p className='font-light'>Rs 100</p>
                            </div>
                            <div className='flex justify-between w-full mt-2'>
                                <p className='text-xl font-semibold text-carnation-500'>Total Amount</p>
                                <p className='text-xl font-semibold text-carnation-500'>Rs 1200</p>
                            </div>
                            <Button buttonClassName='w-full mt-4 mx-auto' buttonLabel='Checkout' />
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    );
};

export default Cart;