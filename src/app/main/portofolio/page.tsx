import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FeaturedImageGallery } from "@/app/components/galeryMobile";
import { MasonryGridGallery } from "@/app/components/galery";
import CE_Swiper from "@/app/components/swiper";

const PortofolioPage = () => {
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
    // const LIST_CARD_PORTO = [
    //     {
    //         id: "1",
    //         imgUrl: "/images/heroBg.jpeg",
    //         title: "Project Title 1",
    //         description: "Description of your first project",
    //     },
    //     {
    //         id: "2",
    //         imgUrl: "/images/heroBg.jpeg",
    //         title: "Project Title 2",
    //         description: "Description of your first project",
    //     },
    //     {
    //         id: "3",
    //         imgUrl: "/images/heroBg.jpeg",
    //         title: "Project Title 3",
    //         description: "Description of your first project",
    //     },
    //     {
    //         id: "4",
    //         imgUrl: "/images/heroBg.jpeg",
    //         title: "Project Title 4",
    //         description: "Description of your first project",
    //     },
    // ];

    return (
        <main className=" w-full py-28 grid grid-cols-1 justify-items-center">
            <section className="w-full sm:w-11/12 h-fit px-5">
                <h1 className="text-3xl font-semibold">
                    Track Record Pekerjaan Kami
                </h1>
                <p className="pt-3 font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo sunt quaerat sint ipsa sapiente mollitia quae
                    praesentium expedita, quo nulla!
                </p>
            </section>
            <section className="w-full overflow-hidden my-10">
                <CE_Swiper />
            </section>
            <section className="w-full pt-5 space-y-3">
                <article className="flex items-start sm:items-center justify-between w-full sm:w-8/12 pt-5 px-5 space-x-4 ">
                    <h1 className="text-xl text-center">30+ Partners</h1>
                    <p className="text-sm">
                        There are already many companies that have entrusted us
                        with paving their roads.
                    </p>
                </article>
                <article className="grid grid-cols-3 gap-2 pt-3 px-5 overflow-x-scroll no-scrollbar ">
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
                                className="w-16 h-14 object-cover grayscale"
                            />
                        </div>
                    ))}
                </article>
            </section>
            <section className="mt-10 p-5 rounded-lg bg-blue-gray-100 bg-blur">
                <h1 className="text-center text-xl">Our Galery</h1>
                <article className="pt-5">
                    <MasonryGridGallery />
                </article>
            </section>
        </main>
    );
};

export default PortofolioPage;

// <main className="w-10/12 gap-y-10 py-40 mx-auto flex flex-col">
//     <section className="space-y-5">
//         <h1 className="text-5xl font-semibold">Portofolio Title</h1>
//         <h1 className="text-lg w-4/12 text-[#828282]">
//             A subheading with a brief description of you, your work, and
//             what you`re all about—no biggie
//         </h1>
//     </section>
//     <div className="flex">
//         <div className="flex flex-wrap gap-x-0  justify-evenly 2xl:w-full 2xl:gap-y-10">
//             {LIST_CARD_PORTO.map((item, index) => (
//                 <Link
//                     href={`/main/portofolio/${item?.id} `}
//                     key={index}
//                     className="flex flex-col justify-start items-start rounded-lg shadow-xl w-[700px] h-[370px] hover:bg-slate-200 duration-500 ease-in-out "
//                 >
//                     <Image
//                         src={item.imgUrl}
//                         alt=""
//                         width={150}
//                         height={300}
//                         className="w-full h-72 object-cover object-top rounded-t-lg"
//                     />
//                     <span className="flex flex-col justify-center w-full h-full px-5 rounded-b-lg">
//                         <h1 className=" text-slate-700 font-semibold">
//                             {item.title}
//                         </h1>
//                         <p className=" text-slate-500">
//                             {item.description}
//                         </p>
//                     </span>
//                 </Link>
//             ))}
//         </div>
//     </div>
// </main>
