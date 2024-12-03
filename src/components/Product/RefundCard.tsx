"use client";
import React from 'react'
import Image from 'next/image'
import { Separator } from '@radix-ui/react-separator'
import { FaRegCircleCheck } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import { Icon } from 'lucide-react';


export interface RefundCardProps {
    productName: string;
    orderId: string;
    price: number;
    imageSrc: string;
    reason: string;
    orderDate: string;
    title: string;
    deliveredDate: string;
    customerName: string;
}
const RefundCard: React.FC<RefundCardProps> = ({
    productName,
    orderId,
    price,
    reason,
    imageSrc,
    orderDate,
    deliveredDate,
    title,
    customerName,
}) => {
    function acsseptClick(): void {
        throw new Error('Function not implemented.');
    }

    return (

        <div className='p-8 rounded-lg mx-auto w-5/6 shadow-custom-dark transition-transform  transform hover:scale-105 hover:shadow-lg '>
            {/* Image */}
            {/* <div className='flex  bg-slate-300   w-fit  h-auto '>
                <Image
                    className="w-full h-fit object-cover"
                    src={imageSrc}
                    width={300}
                    height={200}
                    priority
                    alt={title}
                />
            </div> */}

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
                <div className=''>
                <p>Order ID : <span className='text-carnation-400'>{orderId}</span> </p>
                </div>
                <div>
                <p className='text-2xl'>Price : <span className='text-carnation-400 font-bold text-2xl'>{price}</span></p> 
                </div>
            </div>

            <div className='pb-4 '>
                <p>Reason: </p>
                <p className='break-words'>{reason}</p>
            </div>

            <div className='flex '>
                <div className='flex  gap-10'>
                <p>Order Date :  <span className='text-carnation-400'>{orderDate}</span> </p>
                <p>Delivered Date:  <span className='text-carnation-400'>{deliveredDate}</span> </p>
                <p>Customer Name :  <span className='text-carnation-400'>{customerName}</span> </p>
                </div>
            </div>
        </div>
    )
}

export default RefundCard;
