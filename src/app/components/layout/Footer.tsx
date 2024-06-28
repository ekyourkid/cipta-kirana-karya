import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
    const SECTION_LIST = [
        {
            label: "Comitment",
        },
        {
            label: "Experience",
        },
        {
            label: "Client",
        },
        {
            label: "Contact",
        },
    ];
    const NAVIGATION_LIST = [
        {
            label: "About",
        },
        {
            label: "Contact",
        },
        {
            label: "Portofolio",
        },
    ];
    return (
        <main className="w-full gap-x-10 pt-10 pb-5 sm:p-8 grid grid-cols-1 lg:grid-cols-3 bg-[#3988D1] lg:px-10 xl:px-16 2xl:px-24 2xl:gap-x-0 lg:space-y-10">
            <article className="space-y-5 lg:col-span-2 lg:flex lg:flex-col items-start lg:w-full">
                <div className="flex items-center -space-x-1">
                    <Image
                        src={"/images/logo.png"}
                        alt=""
                        width={100}
                        height={100}
                        className="w-16 sm:w-20 xl:w-24 rounded-xl"
                    />
                    <div className="text-white mt-2 -space-y-2">
                        <h1 className="uppercase text-base sm:text-lg xl:text-xl">
                            cipta kirana karya
                        </h1>
                        <h2 className="text-sm sm:text-base xl:text-lg font-extralight">
                            indonesian asphalt
                        </h2>
                    </div>
                </div>
                <div className="pl-7 lg:pl-0">
                    <p className="text-white text-xs sm:text-sm lg:text-base 2xl:text-lg font-light xl:w-11/12 2xl:w-10/12">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using Content here, content here,
                        making it look like readable English.
                    </p>
                </div>
                <div className="hidden lg:flex space-x-5 items-center justify-center ">
                    <FaFacebookF className="text-white hover:bg-blue-700 w-8 h-8 md:w-10 md:h-10 p-2 rounded-xl cursor-pointer" />
                    <FaInstagram className="text-white hover:bg-[#E1306C] w-8 h-8 md:w-10 md:h-10 p-1 rounded-xl cursor-pointer" />
                    <FaWhatsapp className="text-white hover:bg-green-500 w-8 h-8 md:w-10 md:h-10 p-1 rounded-xl cursor-pointer" />
                    <MdOutlineEmail className="text-white hover:bg-red-600 w-8 h-8 md:w-10 md:h-10 p-1 rounded-xl cursor-pointer" />
                </div>
            </article>
            <section className="flex justify-center py-7">
                <article className="flex flex-col w-1/2 items-center space-y-3">
                    <h1 className="text-lg md:text-xl font-normal text-white">
                        Navigate
                    </h1>
                    {NAVIGATION_LIST.map((value, index) => {
                        return (
                            <ul key={index}>
                                <li className="duration-500 text-sm md:text-base xl:text-lg ease-in-out hover:text-lg xl:hover:text-2xl hover:text-white hover:border-b-2 border-blue-800 cursor-pointer transition-all">
                                    {value.label}
                                </li>
                            </ul>
                        );
                    })}
                </article>
                <article className="flex flex-col w-1/2 items-center space-y-3">
                    <h1 className="text-lg md:text-xl font-normal text-white">
                        Section
                    </h1>
                    {SECTION_LIST.map((value, index) => {
                        return (
                            <ul key={index}>
                                <li className="duration-500 text-sm md:text-base xl:text-lg ease-in-out hover:text-lg xl:hover:text-2xl hover:text-white cursor-pointer hover:border-b-2 border-blue-800 transition-all">
                                    {value.label}
                                </li>
                            </ul>
                        );
                    })}
                </article>
            </section>
            <div className="lg:hidden flex space-x-5 items-center justify-center ">
                <FaFacebookF className="text-white hover:bg-blue-700 w-8 h-8 md:w-10 md:h-10 p-2 rounded-xl cursor-pointer" />
                <FaInstagram className="text-white hover:bg-[#E1306C] w-8 h-8 md:w-10 md:h-10 p-1 rounded-xl cursor-pointer" />
                <FaWhatsapp className="text-white hover:bg-green-500 w-8 h-8 md:w-10 md:h-10 p-1 rounded-xl cursor-pointer" />
                <MdOutlineEmail className="text-white hover:bg-red-600 w-8 h-8 md:w-10 md:h-10 p-1 rounded-xl cursor-pointer" />
            </div>
            <article className="flex lg:w-fit items-center justify-center lg:items-center lg:justify-center gap-x-1 text-xs pt-5">
                <FaRegCopyright className="text-white" />
                <h1 className="text-[8px] sm:text-xs lg:text-base lg:text-[10px] text-white">
                    Copyright Cipta Kirana Karya 2024 All rights reserved.
                </h1>
            </article>
        </main>
    );
};

export default Footer;
