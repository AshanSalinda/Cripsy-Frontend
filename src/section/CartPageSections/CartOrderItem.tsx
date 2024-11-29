"use client";

import React, { useState } from 'react';
import { IoCaretForwardSharp, IoCaretDownSharp } from "react-icons/io5";


interface PropsType {
    name: string;
    price: number;
    quantity: number;
    discount: number;
    total: number;
}

const CartOrderItem: React.FC<PropsType> = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { name, price, quantity, discount, total } = props;
    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <div className="w-full mt-2 border-b pb-2" >

            <div className="flex justify-between cursor-pointer" onClick={toggleExpand} >
                <div className='flex items-center'>
                    { isExpanded ? <IoCaretDownSharp/> : <IoCaretForwardSharp/>  }
                    <p className="font-normal ml-2">{name}</p>
                </div>

                { !isExpanded && <p className="font-light">{`Rs ${total?.toLocaleString()}`}</p> }
        
            </div>

            <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isExpanded ? 'max-h-40' : 'max-h-0'}`} >
                <div className="flex justify-between pl-8 mt-2">
                    <p className="font-light">Price</p>
                    <p className="font-light">{price}</p>
                </div> 
                <div className="flex justify-between pl-8">
                    <p className="font-light">Quantity</p>
                    <p className="font-light">{quantity}</p>
                </div>
                <div className="flex justify-between pl-8">
                    <p className="font-light">Discount</p>
                    <p className="font-light">{`${discount}%`}</p>
                </div>
                <div className="flex justify-between pl-8">
                    <p className="font-medium">Subtotal</p>
                    <p className="font-medium">{`Rs ${total?.toLocaleString()}`}</p>
                </div>
            </div>
        </div>
    );
}

export default CartOrderItem;