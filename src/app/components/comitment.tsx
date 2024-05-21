import React from "react";
import Image from "next/image";
import { url } from "inspector";

const Comitment = () => {
    const LISTCARD = [
        {
            imgUrl: "/images/cardComitment.jpeg",
            label: "Kualitas Aspal",
            text: "orem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dignissimos.",
        },
        {
            imgUrl: "/images/cardComitment.jpeg",
            label: "Kualitas Aspal",
            text: "orem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dignissimos.",
        },
        {
            imgUrl: "/images/cardComitment.jpeg",
            label: "Kualitas Aspal",
            text: "orem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dignissimos.",
        },
        {
            imgUrl: "/images/cardComitment.jpeg",
            label: "Kualitas Aspal",
            text: "orem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dignissimos.",
        },
        {
            imgUrl: "/images/cardComitment.jpeg",
            label: "Kualitas Aspal",
            text: "orem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dignissimos.",
        },
        {
            imgUrl: "/images/cardComitment.jpeg",
            label: "Kualitas Aspal",
            text: "orem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dignissimos.",
        },
    ];

    const LISTEXP = [
        {
            label: "11",
            text: "Years Experience",
        },
        {
            label: "7",
            text: "Contries Served",
        },
        {
            label: "99.99%",
            text: "Satisfied Customer",
        },
        {
            label: "20",
            text: "Support Staff",
        },
    ];
    return (
        <main className="w-full h-11/12">
            <section className="">
                <div className="p-10 2xl:py-14">
                    <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
                        Our Comitment
                    </h1>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-wrap gap-5 justify-evenly 2xl:w-9/12 2xl:gap-y-14">
                        {LISTCARD.map((input, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-center items-center w-60 rounded-lg bg-white space-y-3 shadow-xl 2xl:w-96 2xl:h-96"
                            >
                                <Image
                                    src={input.imgUrl}
                                    alt=""
                                    width={150}
                                    height={100}
                                    className="w-full h-48 object-cover object-top rounded-t-lg 2xl:h-64 "
                                />
                                <h1 className="text-3xl 2xl:text-4xl 2xl:font-semibold text-slate-700">
                                    {input.label}
                                </h1>
                                <p className="text-center text-sm xl:text-base 2xl:text-lg px-5 py-5 2xl:pb-12 2xl:pt-5 text-slate-500">
                                    {input.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-center py-10 sm:py-16 lg:py-20 ">
                <div>
                    <div className="">
                        <h1 className="flex justify-center py-10 text-3xl font-semibold lg:text-4xl 2xl:text-5xl">
                            Experienced
                        </h1>
                    </div>
                    <div className="flex justify-center gap-6">
                        {LISTEXP.map((input, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center "
                            >
                                <h1 className="text-3xl lg:text-5xl font-semibold">
                                    {input.label}
                                </h1>
                                <h2 className="text-base lg:text-xl font-light">
                                    {input.text}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <Image
                        src="/images/fotoHero.png"
                        alt=""
                        width={500}
                        height={200}
                    />
                    <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute -bottom-12 left-14 -z-10"
                    >
                        <path
                            fill="#FF0066"
                            d="M61.4,-46.9C77.4,-28.9,86.8,-3.5,78.3,11.5C69.8,26.6,43.5,31.2,23,37C2.4,42.8,-12.5,49.8,-25.1,46C-37.8,42.3,-48.2,27.8,-56.6,8C-65.1,-11.8,-71.5,-36.9,-61.7,-53.6C-51.9,-70.2,-26,-78.3,-1.6,-77C22.7,-75.7,45.4,-65,61.4,-46.9Z"
                            transform="translate(100 100)"
                        />
                    </svg>
                </div>
            </section>
        </main>
    );
};

export default Comitment;
