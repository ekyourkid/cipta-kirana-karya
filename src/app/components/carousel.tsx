import React from "react";

const CaraouselCard = () => {
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
        <main className="w-full space-y-20 py-10">
            <section className="w-full flex flex-col items-center space-y-20">
                <div className="w-5/12 text-center space-y-10">
                    <h1 className="uppercase text-center font-semibold text-5xl">
                        experience to always give our best
                    </h1>
                </div>
                <div className="grid grid-cols-4">
                    <div className="flex flex-col items-center">
                        <h1 className="text-5xl font-medium">11</h1>
                        <h1 className="text-2xl font-light">
                            Years Experience
                        </h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-5xl font-medium">7</h1>
                        <h1 className="text-2xl font-light">Contries Served</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-5xl font-medium">99.99%</h1>
                        <h1 className="text-2xl font-light">
                            Satisfied Consumer
                        </h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-5xl font-medium">20</h1>
                        <h1 className="text-2xl font-light">Support Staff</h1>
                    </div>
                </div>
            </section>
            <section className=" overflow-x-scroll no-scrollbar space-x-10 flex h-96  ">
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
            </section>
        </main>
    );
};

export default CaraouselCard;
