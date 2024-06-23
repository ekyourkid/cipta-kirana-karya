import React from "react";
import Image from "next/image";
const AboutPage = () => {
    return (
        <main className="w-9/12 flex mx-auto my-20">
            <section className="w-8/12 ">
                <div className="w-10/12 space-y-9 flex flex-col pt-7">
                    <h1 className="text-5xl font-bold">Cipta Karya Kirana</h1>
                    <h2 className="text-xl font-normal text-[#828282]">
                        Subheading for description or instructions
                    </h2>
                    <h3 className="text-lg font-normal">
                        Body text for your whole article or post. Well put in
                        some lorem ipsum to show how a filled-out page might
                        look:
                    </h3>
                    <h4 className="text-lg font-normal">
                        Excepteur efficient emerging, minim veniam anim aute
                        carefully curated Ginza conversation exquisite perfect
                        nostrud nisi intricate Content. Qui international
                        first-class nulla ut. Punctual adipisicing, essential
                        lovely queen tempor eiusmod irure. Exclusive izakaya
                        charming Scandinavian impeccable aute quality of life
                        soft power pariatur Melbourne occaecat discerning. Qui
                        wardrobe aliquip, et Porter destination Toto remarkable
                        officia Helsinki excepteur Basset hound. Zürich sleepy
                        perfect consectetur.
                    </h4>
                </div>
            </section>
            <section className="w-4/12 flex justify-center">
                <Image
                    src={"/images/cardComitment.jpeg"}
                    alt=""
                    width={350}
                    height={400}
                    className="rounded shadow"
                />
            </section>
        </main>
    );
};

export default AboutPage;
