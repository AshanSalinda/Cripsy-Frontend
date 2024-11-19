'use client';
import React from 'react';
import InputField from "@/components/InputField/InputField";
import CustomButton from "@/components/Button/CustomButton";
import ProductImgUploader from "@/components/Image/ProductImgUploader";
import TextEditor from "@/components/TextEditor/TextEditor";
import Dropdown from "@/components/Dropdown/Dropdown";

const page = () => {
    const options = [
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
        { label: 'System', value: 'system' },
    ];

    return (
        <div>
            <div className="rounded-lg shadow-lg p-4 grid grid-cols-1 w-full md:grid-cols-10 gap-7">
                <div className="md:col-span-6 pl-2">
                    <h2 className="text-2xl mb-4">General Information</h2>
                    <InputField id='name' type='text' placeholder='Name' label={true} labelName='Name'/>
                    <h2 className="text-2xl mt-2">Description</h2>
                    <TextEditor/>

                    <h2 className='text-2xl mt-5'>Pricing and Stock</h2>
                    <div className="grid grid-cols-1 w-full md:grid-cols-10 gap-7 mt-3">
                        <div className="md:col-span-5 ">
                            <InputField id='basePrice' type='text' placeholder='Base Pricing' label={true}
                                        labelName='Base Pricing' className='mb-5'/>
                            <InputField id='discountType' type='text' placeholder='Discount Type' label={true}
                                        labelName='Discount Type'/>
                        </div>
                        <div className="md:col-span-5 ">
                            <InputField id='stock' type='text' placeholder='Stock' label={true} labelName='Stock'
                                        className='mb-5'/>
                            <InputField id='discount' type='text' placeholder='Discount' label={true}
                                        labelName='Discount'/>
                        </div>
                    </div>
                    <h2 className="text-2xl mt-5">Category</h2>
                    <Dropdown options={options} placeholder="Theme"/>
                </div>

                <div className="md:col-span-4">
                    <ProductImgUploader/>
                </div>
                <div className="flex justify-between items-center">
                    <h2 className='text-2xl'> </h2>
                    <CustomButton buttonLabel='Add Product'/>
                </div>
            </div>

        </div>
    );
};

export default page;
