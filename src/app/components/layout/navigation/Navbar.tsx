import Image from "next/image";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
    return (
        <main className="bg-transparent bg-white">
            <nav className=" w-[92%] flex justify-between items-center mx-auto">
                <div>
                    <img
                        src="./images/logo.png
            "
                        alt=""
                        className="w-20"
                    />
                </div>
                <div className="">
                    <ul className="flex items-center gap-[4vw]">
                        <li>
                            <a className="hover:text-gray-500 text-xl" href="">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500 text-xl" href="">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500 text-xl" href="">
                                Portofolio
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-full">
                        Contact Me
                    </button>
                    <LuMenu className="text-3xl cursor-pointer" />
                </div>
            </nav>
        </main>
    );
};

export default Navbar;
