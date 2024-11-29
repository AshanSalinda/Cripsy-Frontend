import React from 'react';
import TopNavbar from '@/components/TopNavbar/TopNavbar';
import Image from 'next/image';
import Button from '@/components/Button/CustomButton';
import QuantityInput from '@/components/Product/QuantityInput';
import RatingStar from '@/components/Product/RatingStar';

interface PropsType {
   // Add your prop types here
}

const Cart: React.FC<PropsType> = () => {
    const image = 'https://cdn0.it4profit.com/s3size/rt:fill/w:900/h:900/g:no/el:1/f:webp/plain/s3://cms/product/a4/50/a4509f1dfd41adc3da2c3416812fe0fc/201209150026197116.webp';
    const description = 'The sound quality is exceptional, offering a rich and detailed audio profile across a wide range of genres. Active noise cancellation.';

    return (
        <div className='h-[calc(100vh-5rem)]'>
            <TopNavbar />

                <div className="flex flex-wrap h-full md:space-x-2 overflow-y-auto mt-32 md:mt-20 p-2">
                    <div className='order-2 md:order-1 flex-1 space-y-1'>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                    </div>
                    <div className='order-1 md:order-2 md:sticky top-0 bg-white shadow-md h-1/2 w-full md:h-full md:w-1/3 mb-2 md:mb-0'>
                        <p>1HiiHiiHiiHiiHiiHii</p>
                    </div>
                </div>
        </div>
    );
};

const CartItem: React.FC = () => {
    const image = 'https://cdn0.it4profit.com/s3size/rt:fill/w:900/h:900/g:no/el:1/f:webp/plain/s3://cms/product/a4/50/a4509f1dfd41adc3da2c3416812fe0fc/201209150026197116.webp';
    const description = 'The sound quality is exceptional, offering a rich and detailed audio profile across a wide range of genres. Active noise cancellation.';
    return(
        <div className="flex items-center h-48 shadow-lg rounded">
            <Image
                src={image}
                alt={'alt'}
                width={400}
                height={400}
                className="bg-gray-100 rounded-md p-2 h-auto w-36 md:w-[35vw] lg:w-48"
            />

            <div className='flex md:justify-between flex-col md:flex-row pl-4'>
                <div className='md:flex-1'>
                    <h4 className='font-semibold'>Air pods Max</h4>
                    <p className='hidden md:block font-light text-sm mt-1'>{description}</p>
                    <div className='hidden md:flex items-center mt-2'>
                        <span className='font-extralight text-xl mr-2'>3.5</span>
                        <RatingStar small={true} value={3.5} />
                    </div>
                    <p className='hidden md:block font-light text-xs text-gray-400'>{`${60154} Ratings | ${452} Reviews`}</p>
                </div>

                <div className='h-36 w-px bg-slate-300 hidden md:block' />

                <div className='flex h-28 md:h-auto flex-col items-start md:items-center justify-around md:px-8'>
                    <h6 className='font-semibold'>Rs 64,025.35</h6>
                    <QuantityInput small={true} />
                    <p className='font-light text-xs'>{`Availability: ${50}`}</p>
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