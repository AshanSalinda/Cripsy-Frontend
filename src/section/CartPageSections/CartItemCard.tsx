import React, { useState} from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import Button from '@/components/Button/CustomButton';
import QuantityInput from '@/components/Product/QuantityInput';
import RatingStar from '@/components/Product/RatingStar';
import { updateCartQuantity } from '@/apis/productApi/productApi';

interface PropsType {
    productId: number;
    userId: number;
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
    const { productId, userId, imageUrl, name, price, description, avgRatings, ratingCount, reviewCount, stock, quantity } = props;
    const [isQuantityChanged, setIsQuantityChanged] = useState(false);

    const router = useRouter();

    const navigateToProduct = () => {
        router.push(`/product/${productId}`);
    }

    const onQuantityChange = (value: number) => {
        value !== quantity ? 
        setIsQuantityChanged(true) :
        setIsQuantityChanged(false);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const value = ((e.target as HTMLFormElement).elements.namedItem("quantity") as HTMLInputElement)?.value;
        const action = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement)?.value;

        if (action === "removeFromCart") {
            console.log("removeFromCart");
        } else if (action === "updateQuantity") {
            // updateCartQuantity(productId, userId, parseInt(value));
            console.log("updateQuantity", value);
        }
    };
    
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

            <div className='flex flex-col md:flex-row w-full pl-4'>
                <div className='md:flex-grow'>
                    <button onClick={navigateToProduct}>
                        <h4 className='font-semibold cursor-pointer'>{name}</h4>
                    </button>
                    <p className='hidden md:block font-light text-sm mt-1 max-h-10 overflow-hidden'>{description}</p>
                    <div className='hidden md:flex items-center mt-2'>
                        <span className='font-extralight text-xl mr-1'>{avgRatings?.toPrecision(2)}</span>
                        <RatingStar small={true} value={avgRatings} />
                    </div>
                    <p className='hidden md:block font-light text-xs text-gray-400'>{`${ratingCount} Ratings | ${reviewCount} Reviews`}</p>
                </div>

                <div className='h-36 w-px bg-slate-300 hidden md:block ml-5' />

                <form onSubmit={handleSubmit} className='flex h-28 md:h-auto flex-col items-start md:items-center justify-around md:px-10'>
                    <h6 className='font-semibold'>{`Rs ${price}`}</h6>
                    <QuantityInput value={quantity} max={stock} small={true} onChange={onQuantityChange} />
                    <p className='font-light text-xs'>{`Availability: ${stock}`}</p>
                    <Button 
                        buttonClassName='text-xs h-7 w-20 md:text-sm md:h-9 md:w-auto'
                        buttonLabel={isQuantityChanged ? "Update" : "Remove"}
                        variant={isQuantityChanged ? "outline" : "primary"}
                        value={isQuantityChanged ? "updateQuantity" : "removeFromCart"}
                    />
                </form>
            </div>
        </div>
    );
}

export default CartProductCard;