"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

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

const CE_Swiper = () => {
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
                        className="h-96 w-full overflow-hidden"
                        style={{
                            backgroundImage: `url(${item.imgelink})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "0px 40%",
                            backgroundPositionX: "center",
                            backgroundPositionY: "center",
                        }}
                    ></article>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CE_Swiper;
