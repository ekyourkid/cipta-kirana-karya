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
            name: "logo hotel mulia",
            image: "/images/client1.png",
            link: "/",
        },
        {
            id: 1,
            name: "logo gran melia",
            image: "/images/client2.jpg",
            link: "/",
        },
        {
            id: 2,
            name: "logo rumah perubahan",
            image: "/images/client3.png",
            link: "/",
        },
        {
            id: 3,
            name: "logo ionic office tower",
            image: "/images/client4.jpeg",
            link: "/",
        },
        {
            id: 4,
            name: "logo grand dukuh indah",
            image: "/images/client5.png",
            link: "/",
        },
        {
            id: 5,
            name: "logo swallow",
            image: "/images/client6.jpg",
            link: "/",
        },
        {
            id: 6,
            name: "logo gaga",
            image: "/images/client7.jpeg",
            link: "/",
        },
        {
            id: 7,
            name: "logo indomaret",
            image: "/images/client8.png",
            link: "/",
        },
        {
            id: 8,
            name: "logo apartement gading reiver view",
            image: "/images/client9.png",
            link: "/",
        },
        {
            id: 9,
            name: "logo glamping kancana mandira",
            image: "/images/client10.jpeg",
            link: "/",
        },
        {
            id: 10,
            name: "logo mitsubishi",
            image: "/images/client11.jpg",
            link: "/",
        },
        {
            id: 11,
            name: "logo ipb",
            image: "/images/client12.png",
            link: "/",
        },
        {
            id: 12,
            name: "logo mall of indonesia",
            image: "/images/client13.png",
            link: "/",
        },
        {
            id: 13,
            name: "logo wisma kds",
            image: "/images/client14.png",
            link: "/",
        },
    ];
    return (
        <section className="flex space-x-16 w-full 2xl:w-10/12 overflow-hidden">
            <Marquee pauseOnHover>
                <div className="flex  ">
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
