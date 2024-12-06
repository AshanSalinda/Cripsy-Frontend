"use client";
import React from 'react'
import Image from 'next/image'
import { Separator } from '@radix-ui/react-separator'
import { FaRegCircleCheck } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import { Icon } from 'lucide-react';


export interface RefundCardProps {
    productName: string;
    refoundId: string;
    price: number;
    reason: string;
    orderDate: string;
    deliveredDate: string;
    customerName: string;
}
const RefundCard: React.FC<RefundCardProps> = ({
    productName,
    refoundId,
    price,
    reason,
    orderDate,
    deliveredDate,
    customerName,
}) => {
    function acsseptClick(): void {
        throw new Error('Function not implemented.');
    }

    return (

        <div className='p-8 rounded-lg mx-auto w-5/6 shadow-custom-dark transition-transform  transform hover:scale-105 hover:shadow-lg '>
           

            <div className='flex justify-between w-full'>
                <h2 className='text-2xl font-bold '>{productName}</h2>

                 {/* Action */}
                 <div className='flex'>
                    <div className=' flex gap-3'>
                        <div className='flex w-fit  '>
                            <FaRegCircleCheck onClick={acsseptClick} className='text-green-600 shadow-xl shadow-gray-500 rounded-full hover:text-green-500 text-3xl' />
                        </div>

                        <Separator orientation="vertical" className='w-1 h-7 bg-opacity-15 bg-slate-700 rounded-full flex' />

                        <div className='w-fit flex '>
                            <RxCrossCircled className='text-carnation-550 shadow-xl shadow-gray-500 rounded-full hover:text-carnation-600 text-3xl ' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-between pt-5'>
                {/* Refound ID */}
                <div className=''>
                <p>Refound ID : <span className='text-carnation-400'>{refoundId}</span> </p>
                </div>
                <div>
                    {/* Price */}
                <p className='text-2xl'>Price : <span className='text-carnation-400 font-bold text-2xl'>{price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></p> 
                </div>
            </div>

            <div className='pb-4 '>
                {/* Reason */}
                <p>Reason: </p>
                <p className='break-words'>{reason}</p>
            </div>

            <div className='flex '>
                <div className='flex  gap-10'>
                {/* Order Date */}
                <p>Order Date :  <span className='text-carnation-400'>{orderDate}</span> </p>
                {/* Delivered Date */}
                <p>Delivered Date:  <span className='text-carnation-400'>{deliveredDate}</span> </p>
                {/* Customer Name */}
                <p>Customer Name :  <span className='text-carnation-400'>{customerName}</span> </p>
                </div>
            </div>
        </div>
    )
}

export default RefundCard;
