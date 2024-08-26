import React from "react";
import Image from "next/image";
import { DefaultGallery } from "@/app/components/galery";
import CE_Swiper from "@/app/components/swiper";
import useDataFetcher from "@/app/components/useDataFetcher";

const PortofolioPage = () => {
    const data = useDataFetcher();
    console.log(data);
    const LIST_PARTNERS = [
        {
            id: 0,
            name: "Partner 1",
            image: "/images/c1.png",
        },
        {
            id: 1,
            name: "Partner 2",
            image: "/images/c2.png",
        },
        {
            id: 2,
            name: "Partner 2",
            image: "/images/c3.png",
        },
        {
            id: 3,
            name: "Partner 3",
            image: "/images/c4.png",
        },
        {
            id: 1,
            name: "Partner 2",
            image: "/images/c2.png",
        },
        {
            id: 2,
            name: "Partner 2",
            image: "/images/c3.png",
        },
    ];

    return (
        <main className=" w-full py-28 grid grid-cols-1 2xl:gap-y-5 justify-items-center">
            <section className="w-full sm:w-10/12 md:w-9/12 lg:w-8/12 2xl:w-7/12 lg:grid grid-cols-2 px-5">
                <div className="flex flex-col justify-center md:flex">
                    <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold">
                        Our Track Record
                    </h1>
                    <p className="text-xs sm:w-10/12 sm:text-sm lg:text-base 2xl:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Image
                        src={"/images/c1.png"}
                        width={300}
                        height={300}
                        alt="image"
                        className="lg:w-40 xl:w-60"
                    />
                </div>
                <div className="text-gray-800 xl:text-lg grid grid-cols-1 lg:col-span-2 lg:grid-cols-2 gap-x-7 2xl:gap-x-10">
                    <p className="pt-3 font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet, ipsam perspiciatis. Atque saepe aperiam
                        officiis voluptas magnam, quas consequuntur,
                        reprehenderit explicabo eligendi quia voluptatum
                        provident?
                    </p>
                    <p className="pt-3 font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam aperiam dolores perspiciatis ipsam quas,
                        perferendis nisi explicabo quam in quisquam optio,
                        tenetur officiis, dolor quo.
                    </p>
                </div>
            </section>
            <section className="w-full py-5 sm:w-10/12 md:w-9/12 lg:w-8/12 2xl:w-7/12 px-5">
                <article className="p-5 rounded-md lg:grid grid-cols-2 items-center gap-x-5 border border-black">
                    <div className="flex items-center pb-5 lg:pb-0 space-x-4 lg:space-x-1 2xl:space-x-5 ">
                        <h1 className="text-xl lg:text-2xl xl:text-3xl text-center 2xl:w-3/12">
                            30+ Partners
                        </h1>
                        <p className="text-sm lg:text-base xl:text-lg lg:w-8/12">
                            There are already many companies that have entrusted
                            us with paving their roads.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        {LIST_PARTNERS.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-300 py-1 rounded-md flex justify-center"
                            >
                                <Image
                                    src={item.image}
                                    width={200}
                                    height={200}
                                    alt={item.name}
                                    className="w-16 h-14 lg:w-16 object-cover grayscale"
                                />
                            </div>
                        ))}
                    </div>
                </article>
            </section>
            <section className="w-full sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:px-10 mt-10 p-5 sm:pb-8 rounded-lg ">
                <article className="w-full text-center py-5 text-xl xl:text-2xl font-medium">
                    <h1>Our Galery</h1>
                </article>
                <article className="w-full overflow-hidden">
                    <CE_Swiper />
                </article>
                <article className="pt-5">
                    <DefaultGallery />
                </article>
            </section>
        </main>
    );
};

export default PortofolioPage;
