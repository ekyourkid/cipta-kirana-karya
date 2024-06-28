import React from "react";
import { CarouselWithContent } from "@/app/components/carouselMobile";

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
    const STATISTIK_LIST = [
        {
            id: 0,
            value: "11",
            label: "Years Experience",
        },
        {
            id: 1,
            value: "7",
            label: "Contries Served",
        },
        {
            id: 2,
            value: "99%",
            label: "Satisfied Consumer",
        },
        {
            id: 3,
            value: "20",
            label: "Support Staff",
        },
    ];
    return (
        <main className="w-full space-y-8 pt-10">
            <section className="w-full flex flex-col items-center space-y-10">
                <div className="w-9/12 text-center flex justify-center space-y-10">
                    <h1 className="uppercase text-center font-semibold text-lg sm:text-2xl lg:text-3xl 2xl:text-5xl w-11/12 sm:w-8/12 md:w-7/12">
                        experience to always give our best
                    </h1>
                </div>
                <div className="grid grid-cols-2 py-16 pt-5 lg:pt-10 xl:pt-16 md:grid-cols-4 gap-x-1 gap-y-5 w-full md:w-10/12 lg:w-9/12 xl:w-7/12 ">
                    {STATISTIK_LIST.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center space-y-1"
                        >
                            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium">
                                {item.value}
                            </h1>
                            <h1 className="text-sm lg:text-base 2xl:text-lg text-center font-light">
                                {item.label}
                            </h1>
                        </div>
                    ))}
                </div>
            </section>
            <article>
                <section className="hidden overflow-x-scroll no-scrollbar space-x-10 md:flex">
                    {LISTCARD.map((item, index) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    backgroundImage: `url(${item.img})`,
                                }}
                                className="rounded-md w-[400px] h-[300px] lg:w-[400px] lg:h-[300px] 2xl:w-[500px] 2xl:h-[400px] flex flex-col justify-end "
                            >
                                <span className="w-96 pt-2 pb-5 px-5 lg:pb-5 2xl:pb-8 bg-black/60 rounded-b-md text-white">
                                    <h1 className="text-xl lg:text-2xl 2xl:text-3xl font-bold ">
                                        {item.title}
                                    </h1>
                                    <p className="w-9/12 lg:w-10/12 text-sm lg:text-base">
                                        {item.text}
                                    </p>
                                </span>
                            </div>
                        );
                    })}
                    ;
                </section>
                <section className="md:hidden">
                    <CarouselWithContent />
                </section>
            </article>
        </main>
    );
};

export default CaraouselCard;
