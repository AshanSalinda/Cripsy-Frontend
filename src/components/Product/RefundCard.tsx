import React from 'react'
import Image from 'next/image'
import CustomButton from '../Button/CustomButton'
import { Separator } from '@radix-ui/react-separator'
import { FaRegCircleCheck } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";


export interface RefundCardProps {
    productName: string;
    orderId: string;
    price: number;
    reason: string;
    orderDate: string;
    deliveredDate: string;
    customerName: string;
}
const RefundCard: React.FC<RefundCardProps> = ({
    productName,
    orderId,
    price,
    reason,
    orderDate,
    deliveredDate,
    customerName,
}) => {
  return (
    
    <div className='flex items-start gap-3'>
        {/* Image */}
        <div>
            <Image src="/images/Refund.png" alt="Refund" width={100} height={100} />
        </div>

        
        {/* Action */}
        <div >
            <CustomButton 
            buttonLabel=""
            variant='outline'
            icon={<FaRegCircleCheck className='text-green-800'/>}
            />
            
            <Separator orientation="vertical" className='w-1 h-5 bg-opacity-15 bg-slate-700'/>

            <CustomButton 
            buttonLabel=''
            variant='outline'
            icon={<RxCrossCircled className='text-red-800'/>}
            />

        </div>

        {/* Product Details */}
        <div>
            <div>
                <h2 className='text-3xl font-bold'>{productName}</h2>
                <div>
                <p>Order ID : </p> <span className='text-carnation-400'>{orderId}</span>
                <p className='text-xl'>Price : </p> <span className='text-carnation-400 text-xl'>{price}</span>
                </div>

                <div>
                <p>Reason: </p>
                <p>{reason}</p>
                </div>

                <div>
                <p>Order Date : </p> <span className='text-carnation-400'>{orderDate}</span>
                <p>Delivered Date: </p> <span className='text-carnation-400'>{deliveredDate}</span>
                <p>Customer Name : </p> <span className='text-carnation-400'>{customerName}</span>
                </div>

            </div>
        </div>





    </div>
  )
}

export default RefundCard;
