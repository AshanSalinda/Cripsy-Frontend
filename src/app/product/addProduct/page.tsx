'use client';
import React from 'react';
import InputField from "@/components/InputField/InputField";
import CustomButton from "@/components/Button/CustomButton";
import ProductImgUploader from "@/components/Image/ProductImgUploader";
import ColorSelector from "@/components/Product/ColorSelector";

const page = () => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h2 className='text-2xl'>Product Details</h2>
                <CustomButton buttonLabel='Add'/>
            </div>
            <div className="rounded-lg shadow-lg p-4 grid grid-cols-1 w-full md:grid-cols-10 gap-7">

                <div className="md:col-span-6 pl-2">
                    <h2 className="text-2xl mb-4">General Information</h2>
                    <InputField id='name' type='text' placeholder='Name'/>
                    <ColorSelector/>
                </div>

                <div className="md:col-span-4">
                    <ProductImgUploader/>
                </div>
            </div>
        </div>
    );
};

export default page;
