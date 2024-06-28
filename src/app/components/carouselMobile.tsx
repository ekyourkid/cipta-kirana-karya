"use client";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";

export function CarouselWithContent() {
    const LISTCARD = [
        {
            img: "/images/cardComitment.jpeg",
            title: "Lorem Ipsum Dolor",
            text: "It is a long established fact that a reader will be distracted by the readable",
        },
        {
            img: "/images/cardComitment.jpeg",
            title: "Lorem Ipsum Dolor",
            text: "It is a long established fact that a reader will be distracted by the readable",
        },
        {
            img: "/images/cardComitment.jpeg",
            title: "Lorem Ipsum Dolor",
            text: "It is a long established fact that a reader will be distracted by the readable",
        },
        {
            img: "/images/cardComitment.jpeg",
            title: "Lorem Ipsum Dolor",
            text: "It is a long established fact that a reader will be distracted by the readable",
        },
        {
            img: "/images/cardComitment.jpeg",
            title: "Lorem Ipsum Dolor",
            text: "It is a long established fact that a reader will be distracted by the readable",
        },
    ];

    return (
        <Carousel {...({} as any)} className="rounded-xl">
            {LISTCARD.map((item, index) => (
                <div key={index} className="relative h-96 w-full">
                    <Image
                        src={item.img}
                        alt="image 1"
                        width={500}
                        height={500}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-end bg-black/60">
                        <div className="w-full sm:w-11/12 pb-10 px-7 sm:pb-12 sm:px-10 md:w-2/4">
                            <Typography
                                {...({} as any)}
                                variant="h1"
                                color="white"
                                className="text-xl sm:text-3xl font-semibold"
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                {...({} as any)}
                                variant="lead"
                                color="white"
                                className="opacity-80 text-sm sm:text-lg"
                            >
                                {item.text}
                            </Typography>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}
