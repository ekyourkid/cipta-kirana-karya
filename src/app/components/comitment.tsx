import React from "react";
import Image from "next/image";

const Comitment = () => {
    return (
        <main className="w-full h-screen flex flex-col items-center">
            <div className="w-8/12 text-center flex flex-col items-center">
                <h1 className="uppercase text-center font-semibold text-xl sm:text-2xl lg:text-3xl 2xl:text-5xl w-11/12 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-5/12 ">
                    our commitment for our road
                </h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-light pt-5 w-full lg:w-10/12 xl:w-8/12 2xl:w-7/12">
                    kontraktor jasa pengaspalan yang sudah berpengalaman sejak
                    tahun 2000. Bidang keahlian mengerjakan jasa pengaspalan.
                </p>
            </div>
            <article className="w-11/12 lg:w-9/12 grid justify-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-16 gap-4 lg:gap-0 lg:gap-y-5 xl:gap-3">
                <div className="space-y-4 grid justify-items-center w-11/12 sm:w-10/12 xl:w-full">
                    <div className="w-full h-60 bg-[#939393] rounded-2xl p-5 sm:p-8 space-y-3 ">
                        <p className="text-white text-sm md:text-base w-full md:w-9/12 lg:w-11/12">
                            Kontraktor jasa Pengaspalan dengan bahan aspal
                            terbaik.
                        </p>
                        <h1 className="text-4xl sm:text-5xl lg:text-3xl 2xl:text-4xl w-full text-white font-semibold">
                            100% asphalt durability in any weather
                        </h1>
                    </div>
                    <Image
                        src={"/images/image-comit.jpg"}
                        width={500}
                        height={500}
                        alt=""
                        className="w-full h-96 rounded-2xl object-cover"
                    />
                </div>
                <div
                    style={{
                        backgroundImage: `url('/images/comit2-image.jpg')`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "700px 1200px",
                        borderRadius: 16,
                        objectFit: "cover",
                    }}
                    className="w-11/12 sm:w-10/12 xl:w-full flex flex-col p-8 justify-between text-white space-y-3"
                >
                    <h1 className="text-4xl lg:text-3xl 2xl:text-4xl font-semibold">
                        More affordable prices in each package
                    </h1>
                    <p className="text-sm xl:text-lg">
                        Harga bisa menyesuaikan dengan project yang dikerjakan.
                    </p>
                </div>
                <div className="space-y-4 w-11/12 sm:w-10/12 lg:w-11/12 xl:w-full lg:col-span-2 xl:col-span-1 ">
                    <Image
                        src={"/images/image-comit.jpg"}
                        width={500}
                        height={500}
                        alt=""
                        className="w-full h-96 rounded-2xl object-cover"
                    />
                    <div className="w-full h-60 bg-[#939393] rounded-2xl p-5 space-y-3">
                        <h1 className="text-4xl xl:text-3xl lg:w-11/12 xl:w-full text-white font-semibold">
                            The most experienced contractor in Indonesia
                        </h1>
                        <p className="text-white text-sm lg:text-base lg:w-9/12 xl:w-11/12">
                            Kontraktor jasa Pengaspalan yang sudah
                            berpengalaman.
                        </p>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default Comitment;
