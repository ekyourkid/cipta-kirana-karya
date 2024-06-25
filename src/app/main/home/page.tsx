import React from "react";
import { PiArrowSquareDown } from "react-icons/pi";
import Comitment from "@/app/components/comitment";
import Cover from "@/app/components/cover";
import CaraouselCard from "@/app/components/carousel";
import OurClient from "@/app/components/ourClient";
import ContactUs from "@/app/components/contactUs";

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
            <section className="w-full h-screen bg-[url('/images/image-bg.jpg')]">
                <article className="h-screen w-full bg-black/30 flex flex-col items-center justify-evenly">
                    <div className="w-1/2 text-center space-y-5">
                        <h1 className="text-6xl uppercase text-white font-semibold">
                            kontraktor jalan aspal
                        </h1>
                        <p className="text-lg text-white">
                            kontraktor jasa pengaspalan yang sudah berpengalaman
                            sejak tahun 2000. Bidang keahlian mengerjakan jasa
                            pengaspalan, jasa paving block, cor beton, cat
                            marka, kanstin, saluran, cut and fill, suplayer
                            matrial, dsb. Melayani wilayah Jabodetabek, Provinsi
                            Banten, Jawa Barat, dan Jawa Tengah
                        </p>
                    </div>
                    <button className="flex items-center text-3xl text-white cursor-pointer font-light duration-500 ease-in-out hover:text-4xl space-x-2 border rounded-lg p-2">
                        <h1>Our Works</h1>
                        <PiArrowSquareDown />
                    </button>
                </article>
            </section>
            <article className="w-10/12 mx-auto pt-32 pb-10">
                {/* comitment section */}
                <Comitment />
            </article>
            <article className="">
                <Cover />
            </article>
            <article className="w-10/12 mx-auto pt-28">
                <CaraouselCard />
            </article>
            <OurClient />
            <article className="w-10/12 mx-auto py-32 flex items-center justify-center">
                <ContactUs />
            </article>
        </main>
    );
};

export default HomePage;
