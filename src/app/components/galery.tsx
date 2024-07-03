"use client";
import React from "react";
import Image from "next/image";

export function DefaultGallery() {
    const data = [
        {
            imageLink: "/images/comit2-image.jpg",
        },
        {
            imageLink: "/images/comit2-image.jpg",
        },
        {
            imageLink: "/images/comit2-image.jpg",
        },
        {
            imageLink: "/images/comit2-image.jpg",
        },
        {
            imageLink: "/images/comit2-image.jpg",
        },
        {
            imageLink: "/images/comit2-image.jpg",
        },
        {
            imageLink: "/images/comit2-image.jpg",
        },
        {
            imageLink: "/images/comit2-image.jpg",
        },
    ];

    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {data.map(({ imageLink }, index) => (
                <div key={index}>
                    <Image
                        className="h-40 w-full max-w-full rounded object-cover object-center"
                        src={imageLink}
                        width={400}
                        height={400}
                        alt="gallery-photo"
                    />
                </div>
            ))}
        </div>
    );
}
