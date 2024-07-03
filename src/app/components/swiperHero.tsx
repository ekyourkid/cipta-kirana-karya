"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { PiArrowSquareDown } from "react-icons/pi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const LIST_IMAGE = [
    {
        imgelink: "/images/image-comit.jpg",
    },
    {
        imgelink: "/images/cardComitment.jpeg",
    },

    {
        imgelink: "/images/comit2-image.jpg",
    },
];

const SwiperHero = () => {
    return (
        <Swiper
            spaceBetween={30}
            effect={"fade"}
            loop={true}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[EffectFade, Autoplay]}
        >
            {LIST_IMAGE?.map((item, index) => (
                <SwiperSlide key={index}>
                    <article
                        className="h-screen w-full overflow-hidden"
                        style={{
                            backgroundImage: `url(${item.imgelink})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "0px 40%",
                            backgroundPositionX: "center",
                            backgroundPositionY: "center",
                        }}
                    >
                        <article className="h-screen w-full bg-black/30 flex flex-col items-center space-y-20 justify-center">
                            <div className="w-full text-center flex flex-col items-center space-y-5 ">
                                <h1 className="text-2xl sm:text-3xl lg:text-5xl 2xl:text-6xl w-8/12 lg:w-6/12 uppercase text-white font-semibold">
                                    kontraktor aspal jalan
                                </h1>
                                <p className="text-xs sm:text-sm lg:text-base 2xl:text-lg text-white w-8/12 lg:w-7/12 2xl:w-5/12 font-light 2xl:font-normal">
                                    kontraktor jasa pengaspalan yang sudah
                                    berpengalaman sejak tahun 2000. Bidang
                                    keahlian mengerjakan jasa pengaspalan, jasa
                                    paving block, cor beton, cat marka, kanstin,
                                    saluran, cut and fill, suplayer matrial,
                                    dsb. Melayani wilayah Jabodetabek, Provinsi
                                    Banten, Jawa Barat, dan Jawa Tengah.
                                </p>
                            </div>
                            <button className="flex items-center text-lg sm:text-xl lg:text-2xl text-white cursor-pointer font-light duration-500 ease-in-out hover:text-xl sm:hover:text-2xl 2xl:hover:text-3xl space-x-2 border rounded-lg p-2 lg:px-5 transition-all">
                                <h1>Our Works</h1>
                                <PiArrowSquareDown />
                            </button>
                        </article>
                    </article>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperHero;
