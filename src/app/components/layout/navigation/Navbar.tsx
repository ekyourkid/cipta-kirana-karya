import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";

const Navbar = () => {
    const checkoutTextGenerator = React.useMemo(() => {
        let itemText = "";
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
        <main className="w-full bg-[#3988D1] absolute px-20 py-2 ">
            <nav className="flex justify-between items-center ">
                <Link
                    className="flex items-center justify-center "
                    href={"/main/home"}
                >
                    <Image
                        src={"/images/logo.png"}
                        width={80}
                        height={80}
                        alt=""
                        className="w-20"
                    />
                    <div className="text-white mt-2 -space-y-2">
                        <h1 className="uppercase text-xl">
                            cipta kirana karya
                        </h1>
                        <h2 className="text-lg font-extralight">
                            indonesian asphalt
                        </h2>
                    </div>
                </Link>
                <div className="">
                    <ul className="flex items-center gap-[4vw]">
                        <li>
                            <Link
                                className="hover:text-white text-xl duration-500 ease-in-out hover:text-2xl"
                                href={"/main/home"}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-white text-xl duration-500 ease-in-out hover:text-2xl"
                                href={"/main/about"}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-white text-xl duration-500 ease-in-out hover:text-2xl"
                                href={"/main/portofolio"}
                            >
                                Portofolio
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <Link
                        className=""
                        rel="nofollow"
                        href={`https://api.whatsapp.com/send?phone=6282113272557&text=${checkoutTextGenerator}`}
                        data-action="share/whatsapp/share"
                        title="WhatsApp"
                        target="_blank"
                    >
                        <button className="bg-green-500 text-white font-semibold px-5 py-2 rounded-full flex items-center justify-center gap-x-2 hover:bg-green-600 duration-500 ease-in-out hover:text-xl">
                            <IoCallOutline className="text-2xl" />
                            Contact Me
                        </button>
                    </Link>
                </div>
            </nav>
        </main>
    );
};

export default Navbar;
