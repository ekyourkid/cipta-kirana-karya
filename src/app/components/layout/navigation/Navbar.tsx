"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "../../helper/cn";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import { SidebarWithBurgerMenu } from "../../drawer";

const Navbar = () => {
    const urlPathname = usePathname();
    const [scrollY, setScrollY] = useState(0);
    const checkoutTextGenerator = React.useMemo(() => {
        const textString = `Halo admin, saya ingin menanyakan lebih lanjut mengenai layanan pengaspalan jalan yang Anda tawarkan. Bisakah Anda memberikan informasi detail? Terima kasih.`;

        return textString.replace(" ", "%20");
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        // className="fixed top-0 z-10 w-full bg-[#3988D1] p-3 sm:px-5 lg:px-7 xl:px-16 2xl:px-20 shadow-md"
        <main
            className={cn(
                scrollY >= 100 || urlPathname !== "/"
                    ? "isolate bg-white/50 text-black shadow-sm backdrop-blur-sm"
                    : "bg-transparent text-white",
                "transform-gpu transition-all delay-100",
                "fixed top-0 z-50 w-full py-3 px-2 sm:px-10 xl:px-16 2xl:px-28 shadow-md "
            )}
        >
            <nav className="flex justify-between items-center ">
                <Link
                    className="flex items-center justify-center -space-x-2 sm:-space-x-1"
                    href={"/"}
                >
                    <Image
                        src={"/images/logo.png"}
                        width={80}
                        height={80}
                        alt=""
                        className="w-16 sm:w-[66px] lg:w-[70px] 2xl:w-[80px]"
                    />
                    <div className="mt-2 -space-y-1 lg:-space-y-2 ">
                        <h1 className="uppercase text-sm sm:text-base lg:text-lg 2xl:text-xl">
                            cipta kirana karya
                        </h1>
                        <h2 className="text-xs sm:text-sm lg:text-base 2xl:text-lg font-extralight">
                            indonesian asphalt
                        </h2>
                    </div>
                </Link>
                <div className="md:hidden">
                    <SidebarWithBurgerMenu />
                </div>
                <div className="hidden md:flex">
                    <ul className="flex items-center gap-[4vw]">
                        <li>
                            <Link
                                className="text-base lg:text-lg 2xl:text-xl duration-500 ease-in-out hover:text-lg lg:hover:text-xl 2xl:hover:text-2xl transition-all"
                                href={"/main/about"}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-base lg:text-lg 2xl:text-xl duration-500 ease-in-out hover:text-lg lg:hover:text-xl 2xl:hover:text-2xl transition-all"
                                href={"/main/portofolio"}
                            >
                                Track Records
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-base lg:text-lg 2xl:text-xl duration-500 ease-in-out hover:text-lg lg:hover:text-xl 2xl:hover:text-2xl transition-all"
                                href={"/assets/price.pdf"}
                                target="_blank"
                            >
                                Our Price
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="items-center gap-6 hidden md:flex">
                    <Link
                        className="bg-green-500 text-white text-base xl:text-lg 2xl:text-xl px-3 py-2 2xl:px-5 font-semibold rounded-full flex items-center justify-center gap-x-2 hover:bg-green-700 duration-500 ease-in-out hover:text-lg xl:hover:text-xl 2xl:hover:text-2xl transition-all"
                        rel="nofollow"
                        href={`https://api.whatsapp.com/send?phone=6282113272557&text=${checkoutTextGenerator}`}
                        data-action="share/whatsapp/share"
                        title="WhatsApp"
                        target="_blank"
                    >
                        <IoCallOutline className="text-lg" />
                        Contact Me
                    </Link>
                </div>
            </nav>
        </main>
    );
};

export default Navbar;
