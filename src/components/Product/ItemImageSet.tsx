"use client"

import React, { useState } from 'react';
import Image from 'next/image';

type ItemImageSetProps = Readonly<{
    images: string[],
    alt: string,
}>;


function ItemImageSet({ images, alt }: ItemImageSetProps) {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <div className="flex flex-col items-center w-2/3">
            <div className='w-fit'>
                {images.length > 0 &&
                    <Image
                        src={images[activeImage]}
                        alt={alt}
                        width={400}
                        height={400}
                        className="bg-neutral-700 rounded-3xl p-6 mx-auto"
                    />
                }

                <div className="flex justify-between w-full min-w-fit mt-10">
                    {images.map((image, index) => (
                        <Image
                            key={image + index}
                            src={image}
                            alt={alt}
                            width={60}
                            height={60}
                            className={"bg-neutral-700 rounded-md p-1 mx-2 cursor-pointer transition-transform duration-100 ease-out" + (index === activeImage ? " border-2 border-carnation-500 scale-110" : "scale-100")}
                            onClick={() => setActiveImage(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ItemImageSet