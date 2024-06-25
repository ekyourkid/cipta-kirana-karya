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
        <main className="w-full gap-x-10 px-20 pt-10 pb-32 grid grid-cols-4 bg-[#3988D1]">
            <article className="space-y-10">
                <div className="flex items-center">
                    <Image
                        src={"/images/logo.png"}
                        alt=""
                        width={100}
                        height={100}
                        className="w-20 rounded-xl"
                    />
                    <div className="text-white mt-2 -space-y-2">
                        <h1 className="uppercase text-xl">
                            cipta kirana karya
                        </h1>
                        <h2 className="text-lg font-extralight">
                            indonesian asphalt
                        </h2>
                    </div>
                </div>
                <div className="">
                    <p className="text-white text-base font-light">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using Content here, content here,
                        making it look like readable English.
                    </p>
                </div>
                <div className="flex space-x-5 items-center ">
                    <FaFacebookF className="text-white text-3xl hover:bg-[#F77E53] w-10 h-10 p-2 rounded-xl cursor-pointer" />
                    <FaInstagram className="text-white text-3xl hover:bg-[#F77E53] w-10 h-10 p-1 rounded-xl cursor-pointer" />
                    <FaWhatsapp className="text-white text-3xl hover:bg-[#F77E53] w-10 h-10 p-1 rounded-xl cursor-pointer" />
                    <MdOutlineEmail className="text-white text-3xl hover:bg-[#F77E53] w-10 h-10 p-1 rounded-xl cursor-pointer" />
                </div>
            </article>
            <article className="space-y-5 flex flex-col w-1/2 items-start pt-10 pl-32">
                <h1 className="text-2xl font-semibold text-white">Navigate</h1>
                {NAVIGATION_LIST.map((value, index) => {
                    return (
                        <ul key={index}>
                            <li className="duration-500 ease-in-out hover:text-xl hover:text-white hover:border-b-2 border-blue-800 cursor-pointer">
                                {value.label}
                            </li>
                        </ul>
                    );
                })}
            </article>
            <article className="space-y-5 flex flex-col w-1/2 items-start pt-10 ">
                <h1 className="text-2xl font-semibold text-white">Section</h1>
                {SECTION_LIST.map((value, index) => {
                    return (
                        <ul key={index}>
                            <li className="duration-500 ease-in-out hover:text-xl hover:text-white cursor-pointer hover:border-b-2 border-blue-800">
                                {value.label}
                            </li>
                        </ul>
                    );
                })}
            </article>
            <article className="flex items-end justify-end gap-x-1">
                <FaRegCopyright className="text-white" />
                <h1 className="text-[10px] text-white">
                    Copyright Cipta Kirana Karya 2024 All rights reserved.
                </h1>
            </article>
        </main>
    );
};

export default Footer;
