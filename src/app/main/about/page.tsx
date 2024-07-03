import React from "react";
import Image from "next/image";
import { PiMoneyWavyLight } from "react-icons/pi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GrUserWorker } from "react-icons/gr";

const AboutPage = () => {
    return (
        <main className="w-full mx-auto sm:w-11/12 md:w-10/12 lg:w-11/12 2xl:w-11/12 grid grid-cols-1 py-32 px-12 gap-6 lg:gap-y-24 ">
            <section className="w-full space-y-10 lg:space-y-0 lg:flex lg:px-10 xl:px-16 2xl:px-32 lg:h-96">
                <div className="w-full flex flex-col xl:justify-start lg:pr-10">
                    <div>
                        <h1 className="text-3xl xl:text-4xl font-semibold">
                            Cipta Karya Kirana
                        </h1>
                        <h2 className="w-10/12 text-sm font-normal text-[#828282] 2xl:pt-2">
                            Solusi Terbaik untuk Pembuatan Aspal Jalan Anda
                        </h2>
                    </div>
                    <p className="text-sm xl:text-base font-normal pt-8 lg:pt-5 2xl:pt-10">
                        Didirikan pada tahun [tahun pendirian], perusahaan kami
                        telah berdedikasi dalam menyediakan layanan pengaspalan
                        jalan berkualitas tinggi. Dengan pengalaman
                        bertahun-tahun dan tim ahli di bidangnya, kami telah
                        sukses menyelesaikan berbagai proyek, mulai dari jalan
                        raya hingga area perumahan.
                    </p>
                    <p className="w-full text-sm xl:text-base font-normal pt-5">
                        Perusahaan kami adalah penyedia jasa pengaspalan jalan
                        yang berpengalaman dan terpercaya. Kami mengutamakan
                        kualitas dan ketahanan dalam setiap proyek, menggunakan
                        bahan terbaik dan teknologi terkini. Dengan tim
                        profesional yang ahli, kami memastikan setiap jalan yang
                        kami kerjakan memiliki hasil yang mulus, tahan lama, dan
                        mampu menghadapi berbagai kondisi cuaca. Pilih layanan
                        kami untuk solusi pengaspalan jalan yang cepat, rapi,
                        dan efisien.
                    </p>
                </div>
                <section className="w-full flex justify-center">
                    <Image
                        src={"/images/cardComitment.jpeg"}
                        alt=""
                        width={350}
                        height={500}
                        className="w-full h-60 lg:h-full 2xl:w-9/12 object-cover rounded shadow"
                    />
                </section>
            </section>
            <section className="w-full mx-auto lg:col-span-2 md:w-10/12 2xl:w-9/12 grid grid-cols-1 gap-1 lg:grid-cols-3">
                <article className="flex flex-col items-center p-5 xl:p-0 xl:pt-5 xl:px-2 2xl:px-5">
                    <PiMoneyWavyLight className="text-2xl xl:text-3xl 2xl:text-4xl text-blue-500" />
                    <div className="space-y-2 text-center pt-2 lg:pt-3 lg:space-y-5">
                        <h1 className="text-xl xl:text-2xl">
                            Affordable price
                        </h1>
                        <p className="font-light text-sm">
                            Dapatkan layanan pembuatan aspal berkualitas dengan
                            harga terjangkau hanya di tempat kami. Hubungi kami
                            sekarang untuk penawaran terbaik!
                        </p>
                    </div>
                </article>
                <article className="flex flex-col items-center p-5 xl:p-0 xl:pt-5 xl:px-2 2xl:px-5">
                    <VscWorkspaceTrusted className="text-2xl xl:text-3xl text-blue-500" />
                    <div className="space-y-2 text-center pt-2 lg:pt-3 lg:space-y-5">
                        <h1 className="text-xl xl:text-2xl">Asphalt Quality</h1>
                        <p className="font-light text-sm">
                            Dapatkan hasil aspal jalan berkualitas tinggi yang
                            tahan lama dan mampu menghadapi segala cuaca. Pilih
                            layanan kami untuk jalan yang kokoh dan awet!
                        </p>
                    </div>
                </article>
                <article className="flex flex-col items-center p-5 xl:p-0 xl:pt-5 xl:px-2 2xl:px-5">
                    <GrUserWorker className="text-2xl xl:text-3xl text-blue-500" />
                    <div className="space-y-2 text-center pt-2 lg:pt-3 lg:space-y-5">
                        <h1 className="text-xl">Work Process</h1>
                        <p className="font-light text-sm">
                            Dapatkan layanan pengerjaan aspal jalan dengan hasil
                            cepat dan rapi. Percayakan pada kami untuk jalan
                            yang mulus dan tahan lama!
                        </p>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default AboutPage;
