import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";

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
        <main className="bg-transparent bg-white">
            <nav className=" w-[92%] flex justify-between items-center mx-auto">
                <Link href={"/main/home"}>
                    <Image
                        src={"/images/logo.png"}
                        width={80}
                        height={80}
                        alt=""
                        className="w-20"
                    />
                </Link>
                <div className="">
                    <ul className="flex items-center gap-[4vw]">
                        <li>
                            <Link
                                className="hover:text-gray-500 text-xl"
                                href={"/main/home"}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-gray-500 text-xl"
                                href={"/main/about"}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-gray-500 text-xl"
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
                        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-full">
                            Contact Me
                        </button>
                    </Link>
                    <LuMenu className="text-3xl cursor-pointer" />
                </div>
            </nav>
        </main>
    );
};

export default Navbar;
