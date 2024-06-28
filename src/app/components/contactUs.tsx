"use client";
import React from "react";
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const ContactUs = () => {
    const checkoutTextGenerator = React.useMemo(() => {
        const textString = `Halo admin Magin, saya baru saja melakukan checkout melalui website, berikut keranjang saya,`;
        const textResult = `%0ADengan total sebesar 10000`;
        const reciverText = `Berikut alamat saya, Albar, Jlan h mando, Jakarta - Cilandak`;

        return (
            textString.replace(" ", "%20") +
            "%0A" +
            textResult.replace(" ", "%20") +
            "%0A" +
            reciverText.replace(" ", "%20") +
            "%0A"
        );
    }, []);
    return (
        <section className="w-full sm:w-11/12 md:w-10/12 2xl:w-7/12 rounded-2xl shadow-2xl grid grid-cols-1 lg:grid-cols-2 ">
            <div className="flex justify-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4110.773369625027!2d106.80767740065505!3d-6.321951540765012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee739923e0b7%3A0x6d05bb01da97915a!2sJl.%20H.%20Tohir%20II%2C%20RT.3%2FRW.4%2C%20Jagakarsa%2C%20Kec.%20Jagakarsa%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012620!5e0!3m2!1sid!2sid!4v1714634682673!5m2!1sid!2sid"
                    // width="506"
                    // height="300"
                    className="rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl w-full h-[300px] sm:h-[400px] lg:h-[450px] xl:h-[600px]"
                    // allowfullscreen=""
                    loading="lazy"
                    // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="flex flex-col w-full items-center justify-center py-5 xl:space-y-5 ">
                <div className="w-9/12 space-y-2 flex flex-col items-center">
                    <h1 className="uppercase text-center font-semibold text-xl sm:text-3xl lg:text-4xl ">
                        get in touch
                    </h1>
                    <p className="text-center text-xs sm:text-base md:text-base font-light md:w-10/12 lg:w-full">
                        Mari bekerja sama untuk menciptakan pengalaman yang
                        mengubah asphalt milik anda menjadi lebih berkualitas.
                    </p>
                </div>
                <div className="flex items-center gap-x-3">
                    <Link
                        className="bg-green-500 my-5 p-2 sm:px-3 sm:py-2 md:px-5 md:py-3 rounded-full hover:bg-white duration-500 ease-in-out transition-all hover:text-black text-white flex items-center gap-x-1 hover:border-2 hover:border-blue-400 text-xs sm:text-base xl:text-xl"
                        rel="nofollow"
                        href={`https://api.whatsapp.com/send?phone=6282113272557&text=${checkoutTextGenerator}`}
                        data-action="share/whatsapp/share"
                        title="WhatsApp"
                        target="_blank"
                    >
                        <IoIosCall className="text-base sm:text-lg xl:text-xl" />
                        WhatsApp
                    </Link>
                    <Link
                        className="bg-red-600 rounded-full hover:bg-white duration-500 ease-in-out transition-all hover:text-black my-5 p-2 sm:px-3 sm:py-2 md:px-5 md:py-3 text-white flex items-center gap-x-1 hover:border-2 hover:border-blue-400 text-xs sm:text-base xl:text-xl"
                        rel="nofollow"
                        href={"mailto:ciptakiranakarya@gmail.com"}
                        target="_blank"
                    >
                        <MdOutlineEmail className="text-base sm:text-lg xl:text-xl" />
                        Gmail
                    </Link>
                    <Link
                        className="bg-[#E1306C] rounded-full hover:bg-white duration-500 ease-in-out transition-all hover:text-black my-5 p-2 sm:px-3 sm:py-2 md:px-5 md:py-3 text-white flex items-center gap-x-1 hover:border-2 hover:border-blue-400 text-xs sm:text-base xl:text-xl"
                        href={"https://www.instagram.com/ciptakiranakarya/"}
                        target="_blank"
                    >
                        <FaInstagram className="text-base sm:text-lg xl:text-xl" />
                        Instagram
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
