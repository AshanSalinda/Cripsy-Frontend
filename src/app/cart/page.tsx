import React from 'react';
import TopNavbar from '@/components/TopNavbar/TopNavbar';

interface PropsType {
   // Add your prop types here
}

const Cart: React.FC<PropsType> = () => {
    return (
        <div className='h-[calc(100vh-5rem)] bg-slate-50'>
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
    return(
        <div className="flex flex-col space-y-2 bg-white shadow-md rounded p-3">
            <div className='flex justify-between'>
                <div className="flex items-center space-x-1">
                    <span className='text-carnation-400'>Hii</span>
                    <span className="text-neutral-600 text-lg font-semibold">{ "user" }</span>
                </div>
            </div>
            <p className="text-sm text-neutral-700 text-justify">{ "comment" }</p>
            <p className='text-xs text-neutral-600 text-right font-light'>{ "ratedDate" }</p>
        </div>
    );
}

export default Cart;