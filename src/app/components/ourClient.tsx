import React from "react";
import Image from "next/image";
const OurClient = () => {
    return (
        <section>
            <div className="flex space-x-16 overflow-hidden whitespace-nowrap group">
                <div className="flex animate-loop-scroll space-x-10 group-hover:paused ">
                    <Image
                        src="/images/c1.png"
                        className="max-w-none"
                        alt=""
                        width={200}
                        height={200}
                    />
                    <Image
                        src="/images/c2.png"
                        className="max-w-none"
                        alt=""
                        width={200}
                        height={200}
                    />
                    <Image
                        src="/images/c3.png"
                        className="max-w-none"
                        alt=""
                        width={200}
                        height={200}
                    />
                    <Image
                        src="/images/c4.png"
                        className="max-w-none"
                        alt=""
                        width={200}
                        height={200}
                    />
                </div>
                <div
                    className="flex animate-loop-scroll space-x-10 group-hover:paused"
                    aria-hidden="true"
                >
                    <Image
                        src="/images/c1.png"
                        className="max-w-none"
                        alt=""
                        width={200}
                        height={200}
                    />
                    <Image
                        src="/images/c2.png"
                        className="max-w-none"
                        alt=""
                        width={200}
                        height={200}
                    />
                    <Image
                        src="/images/c3.png"
                        className="max-w-none"
                        alt=""
                        width={200}
                        height={200}
                    />
                    <Image
                        src="/images/c4.png"
                        className="max-w-none"
                        alt=""
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </section>
    );
};

export default OurClient;
