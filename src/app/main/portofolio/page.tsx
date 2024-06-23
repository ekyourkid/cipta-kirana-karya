import React from "react";
import Image from "next/image";
import Link from "next/link";

const PortofolioPage = () => {
    const LIST_CARD_PORTO = [
        {
            id: "1",
            imgUrl: "/images/heroBg.jpeg",
            title: "Project Title 1",
            description: "Description of your first project",
        },
        {
            id: "2",
            imgUrl: "/images/heroBg.jpeg",
            title: "Project Title 2",
            description: "Description of your first project",
        },
        {
            id: "3",
            imgUrl: "/images/heroBg.jpeg",
            title: "Project Title 3",
            description: "Description of your first project",
        },
        {
            id: "4",
            imgUrl: "/images/heroBg.jpeg",
            title: "Project Title 4",
            description: "Description of your first project",
        },
    ];

    return (
        <main className="w-10/12 gap-y-10 my-20 mx-auto  flex flex-col">
            <section className="space-y-5">
                <h1 className="text-5xl font-semibold">Portofolio Title</h1>
                <h1 className="text-lg w-4/12 text-[#828282]">
                    A subheading with a brief description of you, your work, and
                    what you`re all about—no biggie
                </h1>
            </section>
            <div className="flex pt-10">
                <div className="flex flex-wrap gap-x-0  justify-evenly 2xl:w-full 2xl:gap-y-10">
                    {LIST_CARD_PORTO.map((item, index) => (
                        <Link
                            href={`/main/portofolio/${item?.id} `}
                            key={index}
                            className="flex flex-col justify-start items-start rounded-lg shadow-xl w-[700px] h-[370px] hover:bg-slate-200 duration-500 ease-in-out "
                        >
                            <Image
                                src={item.imgUrl}
                                alt=""
                                width={150}
                                height={300}
                                className="w-full h-72 object-cover object-top rounded-t-lg"
                            />
                            <span className="flex flex-col justify-center w-full h-full px-5 rounded-b-lg">
                                <h1 className=" text-slate-700 font-semibold">
                                    {item.title}
                                </h1>
                                <p className=" text-slate-500">
                                    {item.description}
                                </p>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default PortofolioPage;
