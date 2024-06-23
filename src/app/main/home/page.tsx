import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
import { IoIosCall } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const HomePage = () => {
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

    const LIST_CARD = [
        {
            imgUrl: "/images/cardComitment.jpeg",
            label: "Kualitas Aspal",
            text: "orem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dignissimos.",
        },
        {
            imgUrl: "/images/cardComitment.jpeg",
            label: "Kualitas Aspal",
            text: "orem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dignissimos.",
        },
        {
            imgUrl: "/images/cardComitment.jpeg",
            label: "Kualitas Aspal",
            text: "orem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dignissimos.",
        },
        {
            imgUrl: "/images/cardComitment.jpeg",
            label: "Kualitas Aspal",
            text: "orem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dignissimos.",
        },
        {
            imgUrl: "/images/cardComitment.jpeg",
            label: "Kualitas Aspal",
            text: "orem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dignissimos.",
        },
        {
            imgUrl: "/images/cardComitment.jpeg",
            label: "Kualitas Aspal",
            text: "orem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dignissimos.",
        },
    ];

    const LIST_EXPERIENCE = [
        {
            label: "11",
            text: "Years Experience",
        },
        {
            label: "7",
            text: "Contries Served",
        },
        {
            label: "99.99%",
            text: "Satisfied Customer",
        },
        {
            label: "20",
            text: "Support Staff",
        },
    ];
    const LISTCARD = [
        {
            img: "/images/cardComitment.jpeg",
            title: "Lorem Ipsum Dolor",
            text: "It is a long established fact that a reader will be distracted by the readable",
        },
        {
            img: "/images/cardComitment.jpeg",
            title: "Lorem Ipsum Dolor",
            text: "It is a long established fact that a reader will be distracted by the readable",
        },
        {
            img: "/images/cardComitment.jpeg",
            title: "Lorem Ipsum Dolor",
            text: "It is a long established fact that a reader will be distracted by the readable",
        },
        {
            img: "/images/cardComitment.jpeg",
            title: "Lorem Ipsum Dolor",
            text: "It is a long established fact that a reader will be distracted by the readable",
        },
        {
            img: "/images/cardComitment.jpeg",
            title: "Lorem Ipsum Dolor",
            text: "It is a long established fact that a reader will be distracted by the readable",
        },
    ];
    return (
        <main>
            {/* hero section */}
            <section
                style={{
                    backgroundImage: `url('/images/heroBg.jpeg')`,
                    backgroundRepeat: "no-repeat",
                }}
                className="bg-cover flex w-ful h-screen items-center text-center justify-center "
            >
                <div className="container mx-auto flex flex-col items-center w-full space-y-20 px-10 2xl:px-40">
                    <div className="space-y-20">
                        <h1 className="text-5xl text-slate-100 font-semibold 2xl:text-7xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                        </h1>
                        <p className="px-14 text-stone-200 text-base lg:text-lg lg:px-32 2xl:text-2xl">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quas voluptates nulla quisquam non commodi
                            nihil tenetur amet provident in dolorem hic quaerat
                            voluptate explicabo unde iusto optio repellendus,
                            ipsa illo!
                        </p>
                    </div>
                    <div className="space-y-5 xl:flex xl:items-center xl:space-x-8 xl:space-y-0">
                        <Link
                            className=""
                            rel="nofollow"
                            href={`https://api.whatsapp.com/send?phone=6282113272557&text=${checkoutTextGenerator}`}
                            data-action="share/whatsapp/share"
                            title="WhatsApp"
                            target="_blank"
                        >
                            <button className="w-full bg-green-500 px-20 flex gap-2 items-center justify-center text-center py-5 rounded-full font-medium text-white text-lg hover:bg-green-600 duration-500 ease-in-out hover:text-xl xl:h-16 xl:px-5 xl:w-96 xl:py-1 ">
                                Hubungi Kami
                                <HiArrowRight className="text-lg font-semibold" />
                            </button>
                        </Link>
                        <button className="w-full bg-transparent outline px-20 flex gap-2 items-center justify-center text-center py-5 rounded-full font-medium text-white text-lg hover:outline-green-600 duration-500 ease-in-out hover:text-xl xl:h-14 xl:px-5 xl:w-96 xl:py-1 xl:text-base">
                            Rekam Jejak Kami
                            <HiArrowRight className="text-lg font-semibold" />
                        </button>
                    </div>
                </div>
            </section>
            {/* comitment section */}
            <section className="w-full h-11/12">
                <div className="">
                    <div className="p-10 2xl:py-14"></div>
                    <div className="flex justify-center">
                        <div className="flex flex-wrap gap-5 bg-red-400 justify-evenly 2xl:w-9/12 2xl:gap-y-14">
                            {LIST_CARD.map((input, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col justify-center items-center w-60 rounded-lg bg-white space-y-3 shadow-xl 2xl:w-96 2xl:h-96"
                                >
                                    <Image
                                        src={input.imgUrl}
                                        alt=""
                                        width={150}
                                        height={100}
                                        className="w-full h-48 object-cover object-top rounded-t-lg 2xl:h-64 "
                                    />
                                    <h1 className="text-3xl 2xl:text-4xl 2xl:font-semibold text-slate-700">
                                        {input.label}
                                    </h1>
                                    <p className="text-center text-sm xl:text-base 2xl:text-lg px-5 py-5 2xl:pb-12 2xl:pt-5 text-slate-500">
                                        {input.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center py-10 sm:py-16 lg:py-20 ">
                    <div>
                        <div className="">
                            <h1 className="flex justify-center py-10 text-3xl font-semibold lg:text-4xl 2xl:text-5xl">
                                Experienced
                            </h1>
                        </div>
                        <div className="flex justify-center gap-6">
                            {LIST_EXPERIENCE.map((input, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center "
                                >
                                    <h1 className="text-3xl lg:text-5xl font-semibold">
                                        {input.label}
                                    </h1>
                                    <h2 className="text-base lg:text-xl font-light">
                                        {input.text}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <Image
                            src="/images/fotoHero.png"
                            alt=""
                            width={500}
                            height={200}
                        />
                        <svg
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute -bottom-12 left-14 -z-10"
                        >
                            <path
                                fill="#FF0066"
                                d="M61.4,-46.9C77.4,-28.9,86.8,-3.5,78.3,11.5C69.8,26.6,43.5,31.2,23,37C2.4,42.8,-12.5,49.8,-25.1,46C-37.8,42.3,-48.2,27.8,-56.6,8C-65.1,-11.8,-71.5,-36.9,-61.7,-53.6C-51.9,-70.2,-26,-78.3,-1.6,-77C22.7,-75.7,45.4,-65,61.4,-46.9Z"
                                transform="translate(100 100)"
                            />
                        </svg>
                    </div>
                </div>
            </section>
            {/* comitment carousel section */}
            <section className="">
                <div className=" overflow-x-scroll no-scrollbar space-x-10 flex h-96  ">
                    {LISTCARD.map((item, index) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    backgroundImage: `url(${item.img})`,
                                }}
                                className="rounded-md shadow-2xl w-[700px] flex flex-col justify-end pl-5 pb-5 bg-gradient-to"
                            >
                                <h1 className="text-3xl font-bold text-white">
                                    {item.title}
                                </h1>
                                <p className="w-96 text-white">{item.text}</p>
                            </div>
                        );
                    })}
                    ;
                </div>
            </section>
            {/* our client section */}
            <section>
                <h1 className="text-center text-7xl font-bold">Our Client</h1>
                <div className="flex space-x-16 overflow-hidden whitespace-nowrap group">
                    <div className="flex animate-loop-scroll space-x-10 group-hover:paused ">
                        <Image
                            src="/images/c1.png"
                            className="max-w-none"
                            alt=""
                            width={300}
                            height={300}
                        />
                        <Image
                            src="/images/c2.png"
                            className="max-w-none"
                            alt=""
                            width={300}
                            height={300}
                        />
                        <Image
                            src="/images/c3.png"
                            className="max-w-none"
                            alt=""
                            width={300}
                            height={300}
                        />
                        <Image
                            src="/images/c4.png"
                            className="max-w-none"
                            alt=""
                            width={300}
                            height={300}
                        />
                    </div>
                    <div
                        className="flex animate-loop-scroll space-x-10 group-hover:paused"
                        aria-hidden="true"
                    >
                        <Image
                            src="/images/c1.png"
                            className="max-w-none"
                            alt=""
                            width={300}
                            height={300}
                        />
                        <Image
                            src="/images/c2.png"
                            className="max-w-none"
                            alt=""
                            width={300}
                            height={300}
                        />
                        <Image
                            src="/images/c3.png"
                            className="max-w-none"
                            alt=""
                            width={300}
                            height={300}
                        />
                        <Image
                            src="/images/c4.png"
                            className="max-w-none"
                            alt=""
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </section>
            {/* contact section */}
            <section>
                <div className=" bg-white rounded-[16px] h-full w-full  flex flex-col">
                    <div className="flex justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4110.773369625027!2d106.80767740065505!3d-6.321951540765012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee739923e0b7%3A0x6d05bb01da97915a!2sJl.%20H.%20Tohir%20II%2C%20RT.3%2FRW.4%2C%20Jagakarsa%2C%20Kec.%20Jagakarsa%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012620!5e0!3m2!1sid!2sid!4v1714634682673!5m2!1sid!2sid"
                            width="506"
                            height="600"
                            className="rounded-2xl shadow-2xl
                    "
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className=" p-5">
                        <div className="py-5">
                            <h1 className="text-4xl font-semibold">
                                get in touch
                            </h1>
                            <p className="pt-3">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Laudantium similique ad
                                explicabo obcaecati natus reiciendis esse
                                asperiores error exercitationem non.
                            </p>
                        </div>
                        <hr />
                        <div className=" space-y-5 pt-5">
                            <div className="flex space-x-5  ">
                                <IoIosCall
                                    style={{
                                        width: 50,
                                        height: 50,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: 5,
                                        color: "white",
                                    }}
                                    className="bg-orange-500 text-center rounded-full"
                                />
                                <div className="flex flex-col justify-center">
                                    <h1 className="text-lg font-bold">
                                        Phone Number
                                    </h1>
                                    <p className="text-slate-500">
                                        +62 821-1327-2557
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-5  ">
                                <IoLocationOutline
                                    style={{
                                        width: 50,
                                        height: 50,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: 5,
                                        color: "white",
                                    }}
                                    className="bg-orange-500 text-center rounded-full"
                                />
                                <div className="flex flex-col justify-center">
                                    <h1 className="text-lg font-bold">
                                        Address
                                    </h1>
                                    <p className="text-slate-500">
                                        Jakarta Selatan 12620, Indonesia
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-5  ">
                                <MdOutlineEmail
                                    style={{
                                        width: 50,
                                        height: 50,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: 5,
                                        color: "white",
                                    }}
                                    className="bg-orange-500 text-center rounded-full"
                                />
                                <div className="flex flex-col justify-center">
                                    <h1 className="text-lg font-bold">
                                        E-Mail
                                    </h1>
                                    <p className="text-slate-500">
                                        ciptakiranakarya@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-5  ">
                                <FaInstagram
                                    style={{
                                        width: 50,
                                        height: 50,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: 5,
                                        color: "white",
                                    }}
                                    className="bg-orange-500 text-center rounded-full"
                                />
                                <div className="flex flex-col justify-center">
                                    <h1 className="text-lg font-bold">
                                        Instagram
                                    </h1>
                                    <p className="text-slate-500">
                                        ciptakiranakarya
                                    </p>
                                </div>
                            </div>
                            <div className="flex space-x-5  ">
                                <FaFacebookF
                                    style={{
                                        width: 50,
                                        height: 50,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: 5,
                                        color: "white",
                                    }}
                                    className="bg-orange-500 text-center rounded-full"
                                />
                                <div className="flex flex-col justify-center">
                                    <h1 className="text-lg font-bold">
                                        Instagram
                                    </h1>
                                    <p className="text-slate-500">
                                        ciptakiranakarya
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
