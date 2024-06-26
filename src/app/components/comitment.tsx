import React from "react";
import Image from "next/image";

const Comitment = () => {
    return (
        <main className="w-full h-screen flex flex-col items-center">
            <div className="w-8/12 text-center">
                <h1 className="uppercase text-center font-semibold text-xl">
                    our commitment for our road
                </h1>
                <p className="text-sm pt-5">
                    kontraktor jasa pengaspalan yang sudah berpengalaman sejak
                    tahun 2000. Bidang keahlian mengerjakan jasa pengaspalan.
                </p>
            </div>
            <article className="w-11/12 grid grid-cols-1 mt-16 gap-4">
                <div className=" space-y-4">
                    <div className="w-full h-60 bg-[#939393] rounded-2xl p-5 space-y-3 ">
                        <p className="text-white text-sm">
                            Kontraktor jasa Pengaspalan dengan bahan aspal
                            terbaik.
                        </p>
                        <h1 className="text-4xl text-white font-semibold">
                            100% asphalt durability in any weather
                        </h1>
                    </div>
                    <Image
                        src={"/images/image-comit.jpg"}
                        width={500}
                        height={500}
                        alt=""
                        className="w-full h-96 rounded-2xl"
                    />
                </div>
                <div
                    style={{
                        backgroundImage: `url('/images/comit2-image.jpg')`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "700px 1200px",
                        borderRadius: 16,
                    }}
                    className="flex flex-col p-8 justify-between text-white space-y-3"
                >
                    <h1 className="text-4xl font-semibold">
                        More affordable prices in each package
                    </h1>
                    <p className="text-sm">
                        Harga bisa menyesuaikan dengan project yang dikerjakan.
                    </p>
                </div>
                <div className="space-y-4">
                    <Image
                        src={"/images/image-comit.jpg"}
                        width={500}
                        height={500}
                        alt=""
                        className="w-full h-96 rounded-2xl"
                    />
                    <div className="w-full h-60 bg-[#939393] rounded-2xl p-5 space-y-3">
                        <h1 className="text-4xl text-white font-semibold">
                            The most experienced contractor in Indonesia
                        </h1>
                        <p className="text-white text-sm">
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
