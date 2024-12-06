'use client';
import React, { useState, useEffect } from "react";
import InputField from "@/components/InputField/InputField";
import CustomButton from "@/components/Button/CustomButton";
import TextEditor from "@/components/TextEditor/TextEditor";
import Dropdown from "@/components/Dropdown/Dropdown";
import ProductImgUploader, { UploadedImage } from "@/components/Image/ProductImgUploader";
import { addProduct, getCategories, addCategory } from "@/apis/productApi/productApi";
import PopupContainer from "@/components/Popup/PopupContainer";
import { productSchema } from "@/schema/productSchema/productSchema";
import Toast, { showToast } from '@/components/Messages/showMessage';


const AddDeliverPersonForm = () => {
    const [images, setImages] = useState<UploadedImage[]>([]);
    const [editorContent, setEditorContent] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [stock, setStock] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);
    const [discount, setDiscount] = useState<number>(0);
    const [category, setCategory] = useState<number>(0);
    const [options, setOptions] = useState<{ label: string; value: string }[]>([]);
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [newCategory, setNewCategory] = useState<string>("");
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleEditorChange = (content: string) => {
        setEditorContent(content);
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories = await getCategories();
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

    const handleAddCategory = async () => {
        if (!newCategory.trim()) {
            alert("Category name cannot be empty.");
            return;
        }
        try {
            const addedCategory = await addCategory({ categoryName: newCategory });
            setOptions((prev) => [
                ...prev,
                { label: addedCategory.categoryName, value: addedCategory.categoryId },
            ]);
            setShowPopup(false);
            setNewCategory("");
            console.log("Category added successfully!");
        } catch (error) {
            console.error("Failed to add category:", error);
        }
    };


    const emptyFeilds = () => {
        setName('');
        setEditorContent('');
        setStock(0);
        setPrice(0);
        setDiscount(0);
        setCategory(0);
        setImages([]);
    }


    const handleSubmit = async () => {
        showToast({
            type: 'warning',
            message: 'Product added successfully!',
            description: 'Your product was added to the inventory.',
        });
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

        const validation = productSchema.safeParse(payload);

        console.log(validation)
        console.log(payload.imageUrls)

        if (!validation.success) {
            console.log(validation.success)
            const fieldErrors: Record<string, string> = {};
            validation.error.errors.forEach((err) => {
                fieldErrors[err.path[0]] = err.message;
            });
            setErrors(fieldErrors);
            return;
        }

        setErrors({});
        try {
            await addProduct(payload);
            emptyFeilds()
            console.log("Product added successfully!");
            showToast({
                type: 'success',
                message: 'Product added successfully!',
                description: 'Your product has been added to the database.',
            })
        } catch (error) {
            console.error("Failed to add product:", error);
            showToast({
                type: 'error',
                message: 'Product adding unsuccessful!',
                description: 'Please Try again.',
            })
        }
    };

    return (
        <div>
            <div className="rounded-lg shadow-lg p-4 grid grid-cols-1 w-full md:grid-cols-10 gap-7">
                <div className="md:col-span-6 pl-2">
                    <h2 className="text-2xl mb-4">Add Delivery Person</h2>
                    <InputField
                        id="deliveryPersonName"
                        type="text"
                        placeholder="First Name"
                        label={true}
                        labelName="First Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    <Toast />

                    <InputField
                        id="deliveryPersonName"
                        type="text"
                        placeholder="Last Name"
                        label={true}
                        labelName="Last Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    <Toast />

                    <InputField
                        id="email"
                        type="email"
                        placeholder="Email"
                        //value={formData.email || ''}
                        //onChange={(e) => handleInputChange(e, 'email')}
                        icon={undefined}
                        label={false}
                        labelName="email"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    <Toast />

                    <InputField
                        id="contactNo"
                        type="text"
                        placeholder="Contact No."
                        label={true}
                        labelName="Contact No."
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    <Toast />


                    <h2 className="text-2xl mt-2">Description</h2>
                    <TextEditor className="mb-4" onChange={handleEditorChange} />
                    {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}


                    <div className="flex items-center gap-2">
                        <Dropdown
                            options={options}
                            placeholder="Gender"
                            onChange={(value) => setCategory(Number(value))}
                        />
                        <CustomButton buttonLabel="+" onClick={() => setShowPopup(true)} variant={"primary"} />
                        {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
                    </div>
                </div>


            </div>

            <PopupContainer isOpen={showPopup} onClose={() => { setShowPopup(false) }}>
                <div className="bg-white rounded-lg p-6 w-96 ">
                    <h2 className="text-2xl mb-4">Add New Category</h2>
                    <InputField
                        id="newCategory"
                        type="text"
                        placeholder="Enter category name"
                        label={true}
                        labelName="Category Name"
                        onChange={(e) => setNewCategory(e.target.value)}
                    />
                    <div className="flex justify-end gap-2 mt-4">
                        <CustomButton buttonLabel="Cancel" onClick={() => setShowPopup(false)} variant={"outline"} />
                        <CustomButton buttonLabel="Add" onClick={handleAddCategory} variant={"primary"} />
                    </div>
                </div>
            </PopupContainer>

        </div>
    );
};

export default AddDeliverPersonForm;



// AdminFormSection.tsx
// import React from 'react';
// import { Path, UseFormRegister } from 'react-hook-form';
// import InputField from '@/components/InputField/InputField';

// interface AdminFormValues {
//   firstName: string;
//   lastName: string;
//   email: string;
//   contactNo: string;
//   birthday: string;
//   gender: string;
// }

// interface AdminFormSectionProps<T extends AdminFormValues> {
//   errors: Partial<Record<keyof T, string>>;
//   register: UseFormRegister<T>;
// }

// const AdminFormSection = <T extends AdminFormValues>({
//   errors,
//   register,
// }: AdminFormSectionProps<T>) => {
//   return (
//     <div className="space-y-4">
//       {/* Row 1: Admin Name and Email */}
//       <div className="flex flex-row space-x-4 mb-4">
//         <div className="w-1/2">
//           <InputField
//             id="fisrtName"
//             type="text"
//             placeholder="Enter Fisrt Name"
//             {...register("firstName" as Path<T>)}
//             aria-invalid={!!errors.firstName}
//             icon={undefined}
//             label={true}
//             labelName="Fisrt Name"
//           />
//           {errors.firstName && (
//             <p className="mt-1 text-sm error-message">{errors.firstName}</p>
//           )}
//         </div>

//         <div className="w-1/2">
//           <InputField
//             id="lastName"
//             type="text"
//             placeholder="Enter Last Name"
//             {...register("lastName" as Path<T>)}
//             aria-invalid={!!errors.lastName}
//             icon={undefined}
//             label={true}
//             labelName="Last Name"
//           />
//           {errors.lastName && (
//             <p className="mt-1 text-sm error-message">{errors.lastName}</p>
//           )}
//         </div>
//       </div>
//       {/* row 2 */}
//       <div className="flex flex-row space-x-4 mb-4">
//         <div className="w-1/2">
//           <InputField
//             id="email"
//             type="email"
//             placeholder="Enter Email"
//             {...register("email" as Path<T>)}
//             aria-invalid={!!errors.email}
//             icon={undefined}
//             label={true}
//             labelName="Email"
//           />
//           {errors.email && (
//             <p className="mt-1 text-sm error-message">{errors.email}</p>
//           )}
//         </div>

//         <div className="w-1/2">
//         <InputField
//                         id="contactNo"
//                         type="text"
//                         placeholder="Enter Contact No"
//                         {...register("contactNo" as Path<T>)}
//                         aria-invalid={!!errors.contactNo}
//                         icon={undefined}
//                         label={true}
//                         labelName="Contact No"
//                     />
//                     {errors.contactNo && (
//                         <p className="mt-1 text-sm error-message">{errors.contactNo}</p>
//                     )}
//         </div>
//       </div>
//       {/* Row 3*/}
//       <div className="flex flex-row space-x-4 mb-4">
//         <div className="w-1/2">
//           <InputField
//             id="birthday"
//             type="text"
//             placeholder="Enter Birthday"
//             {...register("birthday" as Path<T>)}
//             aria-invalid={!!errors.birthday}
//             icon={undefined}
//             label={true}
//             labelName="Birthday"
//           />
//           {errors.birthday && (
//             <p className="mt-1 text-sm error-message">{errors.birthday}</p>
//           )}
//         </div>

//         <div className="w-1/2">
//           <InputField
//             id="gender"
//             type="text"
//             placeholder="Enter Gender"
//             {...register("gender" as Path<T>)}
//             aria-invalid={!!errors.gender}
//             icon={undefined}
//             label={true}
//             labelName="Gender"
//           />
//           {errors.gender && (
//             <p className="mt-1 text-sm error-message">{errors.gender}</p>
//           )}
//         </div>
//       </div>


//     </div>
//   );
// };

// export default AdminFormSection;
