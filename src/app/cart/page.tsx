"use client";

import React, { useState } from 'react';
import TopNavbar from '@/components/TopNavbar/TopNavbar';
import Image from 'next/image';
import Button from '@/components/Button/CustomButton';
import QuantityInput from '@/components/Product/QuantityInput';
import RatingStar from '@/components/Product/RatingStar';
import item  from '@/data/productIem.json';
import { IoCaretForwardSharp, IoCaretDownSharp } from "react-icons/io5";


interface CartItemPropsType {
    image: string;
    name: string;
    price: number;
    description: string;
    avgRating: number;
    ratingCount: number;
    reviewCount: number;
    stock: number;
}

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

    return (
        <div className='h-[calc(100vh-5rem)]'>
            <TopNavbar />

            <div className="flex flex-wrap h-full md:space-x-2 overflow-y-auto mt-32 md:mt-20 p-2">
                <div className='order-2 md:order-1 flex-1 space-y-1'>
                    <CartItem {...cartItemProps}/>
                    <CartItem {...cartItemProps}/>
                    <CartItem {...cartItemProps}/>
                    <CartItem {...cartItemProps}/>
                    <CartItem {...cartItemProps}/>
                    <CartItem {...cartItemProps}/>
                </div>
                <div className='order-1 md:order-2 md:sticky top-0 shadow-custom-card rounded-sm py-4 px-10 h-fit w-full md:h-full md:w-1/3 mb-2 md:mb-0'>
                    <div className='flex flex-col h-full max-w-96 mx-auto'>
                        <h3 className='font-medium text-center mb-8 border-b'>Order Details</h3>

                        <div className='overflow-y-auto flex-1'>
                            <CartOrderItem />
                            <CartOrderItem />
                            <CartOrderItem />
                            <CartOrderItem />
                            <CartOrderItem />
                        </div>

                        <div className='pt-4'>
                            <div className='flex justify-between w-full mt-2'>
                                <p className='font-light'>Shipping</p>
                                <p className='font-light'>Rs 100</p>
                            </div>
                            <div className='flex justify-between w-full mt-2'>
                                <p className='font-bold text-carnation-500'>Total Amount</p>
                                <p className='font-bold text-carnation-500'>Rs 1200</p>
                            </div>
                            <Button buttonClassName='w-full mt-4 mx-auto' buttonLabel='Checkout' />
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    );
};



const CartOrderItem: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <div className="w-full mt-2 border-b pb-2" >
            <div className="flex justify-between cursor-pointer" onClick={toggleExpand} >

                <div className='flex items-center'>
                    { isExpanded ? <IoCaretDownSharp/> : <IoCaretForwardSharp/>  }
                    <p className="font-normal ml-2">Item Name</p>
                </div>
                { !isExpanded && <p className="font-light">Rs 100000</p> }
        
            </div>

            <div 
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isExpanded ? 'max-h-40' : 'max-h-0'}`}
            >
                <div className="flex justify-between pl-8 mt-2">
                    <p className="font-light">Price</p>
                    <p className="font-light">10000</p>
                </div> 
                <div className="flex justify-between pl-8">
                    <p className="font-light">Quantity</p>
                    <p className="font-light">10</p>
                </div>
                <div className="flex justify-between pl-8">
                    <p className="font-light">Discount</p>
                    <p className="font-light">10%</p>
                </div>
                <div className="flex justify-between pl-8">
                    <p className="font-medium">Subtotal</p>
                    <p className="font-medium">Rs 100000</p>
                </div>
            </div>
        </div>
    );
}


const CartItem: React.FC<CartItemPropsType> = (props) => {
    const { image, name, price, description, avgRating, ratingCount, reviewCount, stock } = props;
    
    return(
        <div className="flex items-center h-48 shadow-custom-card rounded">
            <Image
                src={image}
                alt={name}
                width={400}
                height={400}
                className="rounded-md p-2 md:p-5 h-auto w-36 md:w-[35vw] lg:w-48"
            />

            <div className='flex md:justify-between flex-col md:flex-row pl-4'>
                <div className='md:flex-1'>
                    <h4 className='font-semibold'>{name}</h4>
                    <p className='hidden md:block font-light text-sm mt-1'>{description}</p>
                    <div className='hidden md:flex items-center mt-2'>
                        <span className='font-extralight text-xl mr-1'>{avgRating}</span>
                        <RatingStar small={true} value={avgRating} />
                    </div>
                    <p className='hidden md:block font-light text-xs text-gray-400'>{`${ratingCount} Ratings | ${reviewCount} Reviews`}</p>
                </div>

                <div className='h-36 w-px bg-slate-300 hidden md:block ml-1' />

                <div className='flex h-28 md:h-auto flex-col items-start md:items-center justify-around md:px-8'>
                    <h6 className='font-semibold'>{`Rs ${price}`}</h6>
                    <QuantityInput small={true} />
                    <p className='font-light text-xs'>{`Availability: ${stock}`}</p>
                    <Button 
                        buttonClassName='text-xs h-7 w-20 md:text-sm md:h-9 md:w-auto'
                        buttonLabel="Remove"
                    />
                </div>
            </div>
            
        </div>
    );
}

export default Cart;