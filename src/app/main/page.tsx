import React from "react";
import SwiperHero from "../components/swiperHero";
import Comitment from "@/app/components/comitment";
import Cover from "@/app/components/cover";
import CaraouselCard from "@/app/components/carousel";
import OurClient from "@/app/components/ourClient";
import ContactUs from "@/app/components/contactUs";

const HomePage = () => {
    return (
        <main className="">
            {/* hero section */}
            <section>
                <SwiperHero />
            </section>
            <article className="w-full py-20 ">
                <Comitment />
            </article>
            <article className="w-full pt-[1000px] sm:pt-[900px] md:pt-[800px] lg:pt-[700px] xl:pt-[200px] 2xl:pt-[10px]">
                <Cover />
            </article>
            <article className="w-10/12 mx-auto py-20">
                <CaraouselCard />
            </article>
            <article className="flex justify-center">
                <OurClient />
            </article>
            <article className="py-28 px-5 flex justify-center">
                <ContactUs />
            </article>
        </main>
    );
};

export default HomePage;
