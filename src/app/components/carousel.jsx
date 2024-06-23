import { url } from "inspector";
import React from "react";
import cardPhoto from "../../../public/images/cardComitment.jpeg";
import Image from "next/image";

const CaraouselCard = () => {
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
        <section className="">
            <div className=" overflow-x-scroll no-scrollbar space-x-10 flex h-96  ">
                {LISTCARD.map((item, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                backgroundImage: `url(${item.img})`,
                            }}
                            className="rounded-md shadow-2xl w-[700px] flex flex-col justify-end pl-5 pb-5 bg-gradient-to"
                        >
                            <h1 className="text-3xl font-bold text-white">
                                {item.title}
                            </h1>
                            <p className="w-96 text-white">{item.text}</p>
                        </div>
                    );
                })}
                ;
            </div>
        </section>
    );
};

export default CaraouselCard;
