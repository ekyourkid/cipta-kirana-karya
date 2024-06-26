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
        <main className="w-full gap-x-10 pt-10 pb-5 grid grid-cols-1 bg-[#3988D1]">
            <article className="space-y-5">
                <div className="flex items-center -space-x-1">
                    <Image
                        src={"/images/logo.png"}
                        alt=""
                        width={100}
                        height={100}
                        className="w-16 rounded-xl"
                    />
                    <div className="text-white mt-2 -space-y-2">
                        <h1 className="uppercase text-base">
                            cipta kirana karya
                        </h1>
                        <h2 className="text-sm font-extralight">
                            indonesian asphalt
                        </h2>
                    </div>
                </div>
                <div className="px-7">
                    <p className="text-white text-xs font-light">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using Content here, content here,
                        making it look like readable English.
                    </p>
                </div>
            </article>
            <section className="flex justify-center py-7">
                <article className="flex flex-col w-1/2 items-center space-y-3">
                    <h1 className="text-lg font-normal text-white">Navigate</h1>
                    {NAVIGATION_LIST.map((value, index) => {
                        return (
                            <ul key={index}>
                                <li className="duration-500 text-sm ease-in-out hover:text-lg hover:text-white hover:border-b-2 border-blue-800 cursor-pointer">
                                    {value.label}
                                </li>
                            </ul>
                        );
                    })}
                </article>
                <article className="flex flex-col w-1/2 items-center space-y-3">
                    <h1 className="text-lg font-normal text-white">Section</h1>
                    {SECTION_LIST.map((value, index) => {
                        return (
                            <ul key={index}>
                                <li className="duration-500 text-sm ease-in-out hover:text-lg hover:text-white cursor-pointer hover:border-b-2 border-blue-800">
                                    {value.label}
                                </li>
                            </ul>
                        );
                    })}
                </article>
            </section>
            <div className="flex space-x-5 items-center justify-center ">
                <FaFacebookF className="text-white text-3xl hover:bg-blue-700 w-8 h-8 p-2 rounded-xl cursor-pointer" />
                <FaInstagram className="text-white text-3xl hover:bg-[#E1306C] w-8 h-8 p-1 rounded-xl cursor-pointer" />
                <FaWhatsapp className="text-white text-3xl hover:bg-green-500 w-8 h-8 p-1 rounded-xl cursor-pointer" />
                <MdOutlineEmail className="text-white text-3xl hover:bg-red-600 w-8 h-8 p-1 rounded-xl cursor-pointer" />
            </div>
            <article className="flex items-center justify-center gap-x-1 text-xs pt-5">
                <FaRegCopyright className="text-white" />
                <h1 className="text-[8px] text-white">
                    Copyright Cipta Kirana Karya 2024 All rights reserved.
                </h1>
            </article>
        </main>
    );
};

export default Footer;
