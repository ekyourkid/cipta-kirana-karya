import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import { SidebarWithBurgerMenu } from "../../drawer";
const Navbar = () => {
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
        <main className="w-full bg-[#3988D1] absolute p-3 sm:px-5 lg:px-7 xl:px-16 2xl:px-20 shadow-md">
            <nav className="flex justify-between items-center ">
                <Link
                    className="flex items-center justify-center -space-x-2 sm:-space-x-1 "
                    href={"/main/home"}
                >
                    <Image
                        src={"/images/logo.png"}
                        width={80}
                        height={80}
                        alt=""
                        className="w-16 sm:w-[66px] lg:w-[70px] 2xl:w-[80px]"
                    />
                    <div className="text-white mt-2 -space-y-1 lg:-space-y-2 ">
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
                                className="hover:text-white text-base lg:text-lg 2xl:text-xl duration-500 ease-in-out hover:text-lg lg:hover:text-xl 2xl:hover:text-2xl transition-all"
                                href={"/main/home"}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-white text-base lg:text-lg 2xl:text-xl duration-500 ease-in-out hover:text-lg lg:hover:text-xl 2xl:hover:text-2xl transition-all"
                                href={"/main/about"}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-white text-base lg:text-lg 2xl:text-xl duration-500 ease-in-out hover:text-lg lg:hover:text-xl 2xl:hover:text-2xl transition-all"
                                href={"/main/portofolio"}
                            >
                                Portofolio
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
