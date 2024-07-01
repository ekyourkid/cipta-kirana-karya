"use client";
import React from "react";
import Image from "next/image";
export function FeaturedImageGallery() {
    const data = [
        {
            imgelink: "/images/image-comit.jpg",
        },
        {
            imgelink: "/images/image-comit.jpg",
        },
        {
            imgelink: "/images/cardComitment.jpeg",
        },
        {
            imgelink: "/images/fotoHero.png",
        },
        {
            imgelink: "/images/comit2-image.jpg",
        },
        {
            imgelink: "/images/image-comit.jpg",
        },
        {
            imgelink: "/images/image-comit.jpg",
        },
        {
            imgelink: "/images/cardComitment.jpeg",
        },
        {
            imgelink: "/images/fotoHero.png",
        },
        {
            imgelink: "/images/comit2-image.jpg",
        },
    ];

    const [active, setActive] = React.useState("/images/image-comit.jpg");

    return (
        <div className="grid gap-4">
            <div>
                <Image
                    className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                    width={500}
                    height={500}
                    src={active}
                    alt=""
                />
            </div>
            <div className="grid grid-cols-5 gap-4">
                {data.map(({ imgelink }, index) => (
                    <div key={index}>
                        <Image
                            onClick={() => setActive(imgelink)}
                            src={imgelink}
                            width={500}
                            height={500}
                            className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                            alt="gallery-image"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
