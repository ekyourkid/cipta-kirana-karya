import React from "react";

const Cover = () => {
    return (
        <main className="w-full h-[600px] bg-red-200 bg-[url('/images/image-cover.png')] bg-no-repeat bg-cover p-48">
            <div className="text-white space-y-5">
                <h1 className="text-5xl font-semibold">
                    We are the most trusted
                </h1>
                <p className="text-lg w-1/2 font-light">
                    Several companies have entrusted their paving to us. We
                    believe the best service is what makes this contractor able
                    to gain the trust of our clients.
                </p>
            </div>
            <button className="bg-white py-2 px-10 rounded-full hover:bg-green-600 duration-500 ease-in-out hover:text-xl hover:text-white mt-10">
                See More
            </button>
        </main>
    );
};

export default Cover;
