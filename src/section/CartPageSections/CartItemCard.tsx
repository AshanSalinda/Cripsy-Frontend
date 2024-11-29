import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import Button from '@/components/Button/CustomButton';
import QuantityInput from '@/components/Product/QuantityInput';
import RatingStar from '@/components/Product/RatingStar';

interface PropsType {
    productId: number;
    imageUrl: string;
    name: string;
    price: number;
    description: string;
    avgRatings: number;
    ratingCount: number;
    reviewCount: number;
    stock: number;
    quantity: number;
}

const CartProductCard: React.FC<PropsType> = (props) => {
    const { productId, imageUrl, name, price, description, avgRatings, ratingCount, reviewCount, stock, quantity } = props;

    const router = useRouter();

    const navigateToProduct = () => {
        router.push(`/product/${productId}`);
    }
    
    return(
        <div className="flex items-center h-48 shadow-custom-card rounded">
            <Image
                src={imageUrl}
                alt={name}
                width={400}
                height={400}
                className="cursor-pointer rounded-md p-2 md:p-5 h-auto w-36 md:w-48"
                onClick={navigateToProduct}
            />

            <div className='flex md:justify-between flex-col md:flex-row pl-4'>
                <div className='md:flex-1'>
                    <h4 className='font-semibold cursor-pointer' onClick={navigateToProduct}>{name}</h4>
                    <p className='hidden md:block font-light text-sm mt-1 max-h-10 overflow-hidden'>{description}</p>
                    <div className='hidden md:flex items-center mt-2'>
                        <span className='font-extralight text-xl mr-1'>{avgRatings}</span>
                        <RatingStar small={true} value={avgRatings} />
                    </div>
                    <p className='hidden md:block font-light text-xs text-gray-400'>{`${ratingCount} Ratings | ${reviewCount} Reviews`}</p>
                </div>

                <div className='h-36 w-px bg-slate-300 hidden md:block ml-3' />

                <div className='flex h-28 md:h-auto flex-col items-start md:items-center justify-around md:px-10'>
                    <h6 className='font-semibold'>{`Rs ${price}`}</h6>
                    <QuantityInput value={quantity} max={stock} small={true} />
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