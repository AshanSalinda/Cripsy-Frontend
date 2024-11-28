"use client";
import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from "@/utils/firebaseConfig";

export interface UploadedImage {
    file: File;
    preview: string;
    url: string;
    storagePath: string;
}

interface ProductImgUploaderProps {
    images: UploadedImage[];
    setImages: React.Dispatch<React.SetStateAction<UploadedImage[]>>;
}

const ProductImgUploader: React.FC<ProductImgUploaderProps> = ({ images, setImages }) => {
    const [uploading, setUploading] = useState(false);
    const [selectedImage, setSelectedImage] = useState<UploadedImage | null>(images[0] || null);

    const handleAddImages = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const files = Array.from(event.target.files);

            files.forEach(async (file) => {
                const preview = URL.createObjectURL(file);

                // Start uploading the image to Firebase
                const storagePath = `images/${file.name}-${Date.now()}`;
                const storageRef = ref(storage, storagePath);

                setUploading(true);
                const uploadTask = uploadBytesResumable(storageRef, file);

                uploadTask.on(
                    "state_changed",
                    null,
                    (error) => {
                        console.error("Upload error:", error);
                        setUploading(false);
                    },
                    async () => {
                        const url = await getDownloadURL(uploadTask.snapshot.ref);

                        const newImage = { file, preview, url, storagePath };
                        setImages((prevImages) => [...prevImages, newImage]);

                        // Set the first added image as the selected image if none is selected
                        if (!selectedImage) setSelectedImage(newImage);

                        setUploading(false);
                    }
                );
            });
        }
    };

    const handleDeleteImage = async (image: UploadedImage) => {
        try {
            // Delete image from Firebase Storage
            const storageRef = ref(storage, image.storagePath);
            await deleteObject(storageRef);

            // Remove image from the view
            setImages((prevImages) =>
                prevImages.filter((img) => img.storagePath !== image.storagePath)
            );

            // Update the selected image if the deleted image was the selected one
            if (selectedImage?.storagePath === image.storagePath) {
                setSelectedImage(images.length > 1 ? images[0] : null);
            }

            alert("Image deleted successfully!");
        } catch (error) {
            console.error("Error deleting image:", error);
            alert("Failed to delete the image!");
        }
    };

    const handleImageClick = (image: UploadedImage) => {
        setSelectedImage(image);
    };

    return (
        <div className="p-1">
            <h2 className="text-2xl mb-4">Upload Images</h2>

            <div className="rounded-lg shadow-lg w-full h-[22rem] p-3 mb-4">
                {selectedImage ? (
                    <Image
                        src={selectedImage.preview}
                        alt="Selected Preview"
                        width={500}
                        height={320}
                        className="w-full h-80 object-cover rounded-lg"
                    />
                ) : (
                    <div className="w-full h-80 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">No Image Selected</p>
                    </div>
                )}
            </div>

            <div className="flex space-x-4 mb-4 flex-wrap">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`relative w-20 h-20 mb-3 mr-0 border-2 rounded-lg overflow-hidden cursor-pointer ${
                            selectedImage?.storagePath === image.storagePath
                                ? "border-[#FF5757]"
                                : "border-gray-200"
                        }`}
                        onClick={() => handleImageClick(image)}
                    >
                        <Image
                            src={image.preview}
                            alt={`Preview ${index}`}
                            layout="fill"
                            objectFit="cover"
                        />
                        <button
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteImage(image);
                            }}
                        >
                            <AiOutlineClose size={16} />
                        </button>
                    </div>
                ))}
                {images.length < 5 && (
                    <label className="w-20 h-20 border-2 border-dashed border-[#FF5757] rounded-lg flex items-center justify-center cursor-pointer">
                        <AiOutlinePlus size={24} className="text-[#FF5757]" />
                        <input
                            type="file"
                            multiple
                            className="hidden"
                            onChange={handleAddImages}
                            accept="image/*"
                        />
                    </label>
                )}
            </div>

            {uploading && <p className="text-gray-500">Uploading...</p>}
        </div>
    );
};

export default ProductImgUploader;
