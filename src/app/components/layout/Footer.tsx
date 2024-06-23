import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <main className="bg-[#3988D1] h-[700px]">
            <div className="p-8 space-y-5">
                <section className="flex items-center space-x-3">
                    <Image
                        src={"/images/logo.png"}
                        alt=""
                        width={100}
                        height={100}
                        className="w-16 rounded-xl"
                    />
                    <h1 className="text-2xl font-bold text-white">
                        Cipta Kirana Karya
                    </h1>
                </section>
                <section className="space-y-5">
                    <div>
                        <p className="text-white text-base">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using Content
                            here, content here, making it look like readable
                            English.
                        </p>
                    </div>
                    <div className="flex space-x-5 items-center">
                        <FaFacebookF className="text-white text-3xl hover:bg-[#F77E53] w-10 h-10 p-2 rounded-xl cursor-pointer" />
                        <FaInstagram className="text-white text-3xl hover:bg-[#F77E53] w-10 h-10 p-1 rounded-xl cursor-pointer" />
                        <FaWhatsapp className="text-white text-3xl hover:bg-[#F77E53] w-10 h-10 p-1 rounded-xl cursor-pointer" />
                        <MdOutlineEmail className="text-white text-3xl hover:bg-[#F77E53] w-10 h-10 p-1 rounded-xl cursor-pointer" />
                    </div>
                </section>
                <section className="flex justify-around pt-10">
                    <div className="space-y-5 flex flex-col items-center ">
                        <h1 className="text-2xl font-semibold text-white">
                            Section
                        </h1>
                        <h2>Comitment</h2>
                        <h2>Experienced</h2>
                        <h2>Client</h2>
                        <h2>Contact</h2>
                    </div>
                    <div className="space-y-5 flex flex-col items-center">
                        <h1 className="text-2xl font-semibold text-white">
                            Navigate
                        </h1>
                        <h2>About</h2>
                        <h2>Contact</h2>
                        <h2>Portofolio Detail</h2>
                        <h2>Portofolio Title</h2>
                    </div>
                </section>
                <div className="flex pt-10 space-x-1">
                    <FaRegCopyright className="text-white" />
                    <h1 className="text-[10px] text-white">
                        Copyright Cipta Kirana Karya 2024 All rights reserved.
                    </h1>
                </div>
            </div>
        </main>
    );
};

export default Footer;
