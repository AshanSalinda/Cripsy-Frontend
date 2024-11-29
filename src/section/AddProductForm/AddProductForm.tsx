'use client';
import React, { useState, useEffect } from "react";
import InputField from "@/components/InputField/InputField";
import CustomButton from "@/components/Button/CustomButton";
import TextEditor from "@/components/TextEditor/TextEditor";
import Dropdown from "@/components/Dropdown/Dropdown";
import ProductImgUploader, { UploadedImage } from "@/components/Image/ProductImgUploader";
import { addProduct, getCategories } from "@/apis/productApi/productApi";

const AddProductForm = () => {
    const [images, setImages] = useState<UploadedImage[]>([]);
    const [editorContent, setEditorContent] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [stock, setStock] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [discount, setDiscount] = useState<number>(0);
    const [category, setCategory] = useState<number>(0);
    const [options, setOptions] = useState<{ label: string; value: string }[]>([]); // Dynamic options

    const handleEditorChange = (content: string) => {
        setEditorContent(content);
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories = await getCategories();
                console.log(categories)
                const categoryOptions = categories.map((cat: { categoryId: number; categoryName: string }) => ({
                    label: cat.categoryName,
                    value: cat.categoryId,
                }));
                setOptions(categoryOptions);
            } catch (error) {
                console.error("Failed to fetch categories:", error);
            }
        };
        fetchCategories();
    }, []);

    const handleSubmit = async () => {
        const payload = {
            productId: 0,
            name,
            description: editorContent,
            stock,
            price,
            discount,
            rating: 0,
            ratingCount: 0,
            category,
            imageUrls: images.map((image) => image.url),
        };

        console.log(payload)
        try {
            await addProduct(payload);
            console.log("Product added successfully!");
        } catch (error) {
            console.error("Failed to add product:", error);
        }
    };

    return (
        <div>
            <div className="rounded-lg shadow-lg p-4 grid grid-cols-1 w-full md:grid-cols-10 gap-7">
                <div className="md:col-span-6 pl-2">
                    <h2 className="text-2xl mb-4">General Information</h2>
                    <InputField
                        id="name"
                        type="text"
                        placeholder="Name"
                        label={true}
                        labelName="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <h2 className="text-2xl mt-2">Description</h2>
                    <TextEditor className="mb-4" onChange={handleEditorChange} />

                    <h2 className="text-2xl mt-5">Pricing and Stock</h2>
                    <div className="grid grid-cols-1 w-full md:grid-cols-10 gap-7 mt-3">
                        <div className="md:col-span-5">
                            <InputField
                                id="basePrice"
                                type="number"
                                placeholder="Base Pricing"
                                label={true}
                                labelName="Base Pricing"
                                className="mb-5"
                                onChange={(e) => setPrice(Number(e.target.value))}
                            />
                            <InputField
                                id="discount"
                                type="number"
                                placeholder="Discount"
                                label={true}
                                labelName="Discount"
                                onChange={(e) => setDiscount(Number(e.target.value))}
                            />
                        </div>
                        <div className="md:col-span-5">
                            <InputField
                                id="stock"
                                type="number"
                                placeholder="Stock"
                                label={true}
                                labelName="Stock"
                                className="mb-5"
                                onChange={(e) => setStock(Number(e.target.value))}
                            />
                        </div>
                    </div>
                    <h2 className="text-2xl mt-5">Category</h2>
                    <Dropdown
                        options={options}
                        placeholder="Select Category"
                        onChange={(value) => setCategory(value)}
                    />
                </div>

                <div className="md:col-span-4">
                    <ProductImgUploader images={images} setImages={setImages} />
                </div>
                <div className="flex justify-between items-center pl-2">
                    <CustomButton buttonLabel="Add Product" onClick={handleSubmit} />
                </div>
            </div>
        </div>
    );
};

export default AddProductForm;
