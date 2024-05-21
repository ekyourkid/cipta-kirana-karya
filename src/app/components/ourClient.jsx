import React from "react";
import Image from "next/image";
const OurClient = () => {
    return (
        <main>
            <h1 className="text-center text-7xl font-bold">Our Client</h1>
            <div className="flex space-x-16 overflow-hidden whitespace-nowrap group">
                <div className="flex animate-loop-scroll space-x-10 group-hover:paused ">
                    <img src="/images/c1.png" className="max-w-none" />
                    <img src="/images/c2.png" className="max-w-none" />
                    <img src="/images/c3.png" className="max-w-none" />
                    <img src="/images/c4.png" className="max-w-none" />
                </div>
                <div
                    className="flex animate-loop-scroll space-x-10 group-hover:paused"
                    aria-hidden="true"
                >
                    <img src="/images/c1.png" className="max-w-none" />
                    <img src="/images/c2.png" className="max-w-none" />
                    <img src="/images/c3.png" className="max-w-none" />
                    <img src="/images/c4.png" className="max-w-none" />
                </div>
            </div>
        </main>
    );
};

export default OurClient;
