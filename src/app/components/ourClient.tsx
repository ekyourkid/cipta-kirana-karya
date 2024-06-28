import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

type PartnerType = {
    id: number | string;
    name: string;
    image: string;
    link: string;
};

const OurClient = () => {
    const PARTNER_LIST: PartnerType[] = [
        {
            id: 0,
            name: "Partner 1",
            image: "/images/c1.png",
            link: "/",
        },
        {
            id: 1,
            name: "Partner 2",
            image: "/images/c2.png",
            link: "/",
        },
        {
            id: 2,
            name: "Partner 2",
            image: "/images/c3.png",
            link: "/",
        },
        {
            id: 3,
            name: "Partner 3",
            image: "/images/c4.png",
            link: "/",
        },
    ];
    return (
        <section className="flex space-x-16 w-full 2xl:w-10/12 overflow-hidden">
            <Marquee pauseOnHover>
                <div className="flex grayscale ">
                    {PARTNER_LIST.map((partner) => (
                        <Image
                            key={partner.id}
                            src={partner?.image}
                            className="aspect-video w-52 md:w-56 lg:w-60 xl:w-64 2xl:w-72 object-contain grayscale hover:grayscale-0"
                            alt={partner.name}
                            width={200}
                            height={200}
                        />
                    ))}
                </div>
            </Marquee>
        </section>
    );
};

export default OurClient;
