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
                    <InputField id='name' type='text' placeholder='Name' label={true} labelName='Name'/>
                    <ColorSelector/>

                    <h2 className='text-2xl mt-5'>Pricing and Stock</h2>
                    <div className="grid grid-cols-1 w-full md:grid-cols-10 gap-7 mt-3">
                        <div className="md:col-span-5 ">
                            <InputField id='basePrice' type='text' placeholder='Base Pricing' label={true} labelName='Base Pricing' className='mb-5'/>
                            <InputField id='discountType' type='text' placeholder='Discount Type' label={true} labelName='Discount Type'/>
                        </div>
                        <div className="md:col-span-5 ">
                            <InputField id='stock' type='text' placeholder='Stock' label={true} labelName='Stock' className='mb-5'/>
                            <InputField id='discount' type='text' placeholder='Discount' label={true} labelName='Discount'/>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-4">
                    <ProductImgUploader/>
                </div>
            </div>
        </div>
    );
};

export default page;
