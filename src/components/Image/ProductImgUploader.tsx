"use client";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/utils/firebaseConfig";

const ProductImgUploader: React.FC = () => {
    const [images, setImages] = useState<{ file: File; preview: string }[]>([]);
    const [uploading, setUploading] = useState(false);
    const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);

    const handleAddImages = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const files = Array.from(event.target.files).map((file) => ({
                file,
                preview: URL.createObjectURL(file),
            }));
            setImages((prevImages) => [...prevImages, ...files]);
        }
    };

    const handleUploadImages = async () => {
        if (images.length === 0) {
            alert("No images to upload!");
            return;
        }

        setUploading(true);

        const uploadPromises = images.map(({ file }) => {
            const storageRef = ref(storage, `images/${file.name}-${Date.now()}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            return new Promise<string>((resolve, reject) => {
                uploadTask.on(
                    "state_changed",
                    null,
                    (error) => reject(error),
                    async () => {
                        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
                        resolve(downloadUrl);
                    }
                );
            });
        });

        try {
            const urls = await Promise.all(uploadPromises);
            setUploadedUrls(urls);
            alert("Images uploaded successfully!");
        } catch (error) {
            console.error("Error uploading images:", error);
            alert("Failed to upload images!");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="p-1">
            <h2 className="text-2xl mb-4">Upload Images</h2>
            <div className="rounded-lg shadow-lg w-full h-[22rem] p-3 mb-4">
                {images.length > 0 ? (
                    <Image
                        src={images[0].preview}
                        alt="Uploaded Preview"
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
            <div className="flex space-x-4 mb-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative w-20 h-20 border-2 border-gray-200 rounded-lg overflow-hidden"
                    >
                        <Image
                            src={image.preview}
                            alt={`Preview ${index}`}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                ))}
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
            </div>
            <button
                onClick={handleUploadImages}
                className={`px-4 py-2 text-white rounded-lg ${
                    uploading ? "bg-gray-500 cursor-not-allowed" : "bg-[#FF5757]"
                }`}
                disabled={uploading}
            >
                {uploading ? "Uploading..." : "Upload Images"}
            </button>
            {uploadedUrls.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Uploaded Image URLs:</h3>
                    <ul>
                        {uploadedUrls.map((url, index) => (
                            <li key={index}>
                                <a href={url} target="_blank" rel="noopener noreferrer">
                                    {url}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProductImgUploader;
