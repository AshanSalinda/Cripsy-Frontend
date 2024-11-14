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
        <div className="flex flex-[55%] flex-col items-center">
            <div className='w-fit'>
                {images.length > 0 &&
                    <Image
                        src={images[activeImage]}
                        alt={alt}
                        width={400}
                        height={400}
                        className="bg-neutral-700 rounded-3xl p-6 mx-auto h-auto w-[80vw] md:w-[35vw] lg:w-[28vw]"
                    />
                }

                <div className="flex justify-between w-full py-3 min-w-fit mt-10 overflow-x-auto">
                    {images.map((image, index) => (
                        <Image
                            key={image + index}
                            src={image}
                            alt={alt}
                            width={60}
                            height={60}
                            className={"bg-neutral-700 rounded-md p-1 mx-2 h-auto w-[12vw] md:w-[6vw] lg:w-[4vw] cursor-pointer transition-transform duration-100 ease-out" + (index === activeImage ? " border-2 border-carnation-500 scale-110" : "scale-100")}
                            onClick={() => setActiveImage(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ItemImageSet