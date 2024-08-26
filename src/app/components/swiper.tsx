"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { WITH_CLIENT_IMAGE } from "@/utils/data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

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
            {WITH_CLIENT_IMAGE?.map((item, index) => (
                <SwiperSlide key={index}>
                    <article
                        className="h-[500px] w-full overflow-hidden"
                        style={{
                            backgroundImage: `url(${item.img})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "0px 25%",
                            backgroundPositionX: "center",
                            backgroundPositionY: "center",
                            borderRadius: 10,
                        }}
                    ></article>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CE_Swiper;
