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
    return (
        <main>
            {/* hero section */}
            <section className="w-full h-screen bg-[url('/images/image-bg.jpg')]">
                <article className="h-screen w-full bg-black/30 flex flex-col items-center space-y-20 justify-center">
                    <div className="xs:w-full 2xl:w-1/2 text-center flex flex-col items-center space-y-5 xs:space-y-2">
                        <h1 className="text-3xl w-8/12 xs:text-3xl 2xl:text-6xl uppercase text-white font-semibold">
                            kontraktor jalan aspal
                        </h1>
                        <p className="text-xs xs:text-sm 2xl:text-lg text-white w-8/12 xs:w-9/12 xs:font-light">
                            kontraktor jasa pengaspalan yang sudah berpengalaman
                            sejak tahun 2000. Bidang keahlian mengerjakan jasa
                            pengaspalan, jasa paving block, cor beton, cat
                            marka, kanstin, saluran, cut and fill, suplayer
                            matrial, dsb. Melayani wilayah Jabodetabek, Provinsi
                            Banten, Jawa Barat, dan Jawa Tengah.
                        </p>
                    </div>
                    <button className="flex items-center xs:text-xl 2xl:text-3xl text-white cursor-pointer font-light duration-500 ease-in-out hover:text-xl space-x-2 border rounded-lg p-2">
                        <h1>Our Works</h1>
                        <PiArrowSquareDown />
                    </button>
                </article>
            </section>
            <article className="w-full py-20 ">
                <Comitment />
            </article>
            <article className="w-full pt-[1000px]">
                <Cover />
            </article>
            <article className="w-10/12 mx-auto">
                <CaraouselCard />
            </article>
            <OurClient />
            <article className="p-5">
                <ContactUs />
            </article>
        </main>
    );
};

export default HomePage;
