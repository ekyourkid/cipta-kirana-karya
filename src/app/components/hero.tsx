import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import Link from "next/link";

const HeroSection = () => {
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
        <main
            style={{
                backgroundImage: `url('/images/heroBg.jpeg')`,
                backgroundRepeat: "no-repeat",
            }}
            className="bg-cover flex w-ful h-screen items-center text-center justify-center "
        >
            <section className="container mx-auto flex flex-col items-center w-full space-y-20 px-10 2xl:px-40">
                <div className="space-y-20">
                    <h1 className="text-5xl text-slate-100 font-semibold 2xl:text-7xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </h1>
                    <p className="px-14 text-stone-200 text-base lg:text-lg lg:px-32 2xl:text-2xl">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quas voluptates nulla quisquam non commodi nihil
                        tenetur amet provident in dolorem hic quaerat voluptate
                        explicabo unde iusto optio repellendus, ipsa illo!
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
                        <button className="w-full bg-green-500 px-20 flex gap-2 items-center justify-center text-center py-5 rounded-full font-medium text-white text-lg hover:bg-green-600 xl:h-16 xl:px-5 xl:w-96 xl:py-1 ">
                            Hubungi Kami
                            <HiArrowRight className="text-lg font-semibold" />
                        </button>
                    </Link>
                    <button className="w-full bg-transparent outline px-20 flex gap-2 items-center justify-center text-center py-5 rounded-full font-medium text-white text-lg hover:text-green-800 xl:h-14 xl:px-5 xl:w-96 xl:py-1 xl:text-base">
                        Rekam Jejak Kami
                        <HiArrowRight className="text-lg font-semibold" />
                    </button>
                </div>
            </section>
        </main>
    );
};
export default HeroSection;
