import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button/CustomButton';
import QuantityInput from '@/components/Product/QuantityInput';
import RatingStar from '@/components/Product/RatingStar';

interface PropsType {
    image: string;
    name: string;
    price: number;
    description: string;
    avgRating: number;
    ratingCount: number;
    reviewCount: number;
    stock: number;
}

const CartProductCard: React.FC<PropsType> = (props) => {
    const { image, name, price, description, avgRating, ratingCount, reviewCount, stock } = props;
    
    return(
        <div className="flex items-center h-48 shadow-custom-card rounded">
            <Image
                src={image}
                alt={name}
                width={400}
                height={400}
                className="rounded-md p-2 md:p-5 h-auto w-36 md:w-48"
            />

            <div className='flex md:justify-between flex-col md:flex-row pl-4'>
                <div className='md:flex-1'>
                    <h4 className='font-semibold'>{name}</h4>
                    <p className='hidden md:block font-light text-sm mt-1 max-h-10 overflow-hidden'>{description}</p>
                    <div className='hidden md:flex items-center mt-2'>
                        <span className='font-extralight text-xl mr-1'>{avgRating}</span>
                        <RatingStar small={true} value={avgRating} />
                    </div>
                    <p className='hidden md:block font-light text-xs text-gray-400'>{`${ratingCount} Ratings | ${reviewCount} Reviews`}</p>
                </div>

                <div className='h-36 w-px bg-slate-300 hidden md:block ml-3' />

                <div className='flex h-28 md:h-auto flex-col items-start md:items-center justify-around md:px-10'>
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

export default CartProductCard;