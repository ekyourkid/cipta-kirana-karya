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
        <main className="w-full space-y-8 pt-10">
            <section className="w-full flex flex-col items-center space-y-10">
                <div className="w-9/12 text-center space-y-10">
                    <h1 className="uppercase text-center font-semibold text-xl">
                        experience to always give our best
                    </h1>
                </div>
                <div className="grid grid-cols-2 gap-x-1 gap-y-5 w-full">
                    <div className="flex flex-col items-center space-y-1">
                        <h1 className="text-3xl font-medium">11</h1>
                        <h1 className="text-sm text-center font-light">
                            Years Experience
                        </h1>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                        <h1 className="text-3xl font-medium">7</h1>
                        <h1 className="text-sm text-center font-light">
                            Countries Served
                        </h1>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                        <h1 className="text-3xl font-medium">99%</h1>
                        <h1 className="text-sm text-center font-light">
                            Satisfied Consumer
                        </h1>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                        <h1 className="text-3xl font-medium">20</h1>
                        <h1 className="text-sm text-center font-light">
                            Support Staff
                        </h1>
                    </div>
                </div>
            </section>
            <section className="overflow-x-scroll no-scrollbar space-x-10 flex ">
                {LISTCARD.map((item, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                backgroundImage: `url(${item.img})`,
                            }}
                            className="rounded-md w-[300px] h-[200px] flex flex-col justify-end"
                        >
                            <span className="w-96 pt-1 pb-3 px-5 text-white">
                                <h1 className="text-xl font-bold ">
                                    {item.title}
                                </h1>
                                <p className="w-9/12 text-sm">{item.text}</p>
                            </span>
                        </div>
                    );
                })}
                ;
            </section>
        </main>
    );
};

export default CaraouselCard;
