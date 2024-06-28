import React from "react";

const Cover = () => {
    return (
        <main className="w-full h-96 xl:h-[500px] bg-red-200 bg-[url('/images/image-cover.png')] bg-no-repeat bg-cover flex flex-col items-center justify-center">
            <div className="text-white space-y-5 flex flex-col items-center text-center">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl w-8/12 font-semibold">
                    We are the most trusted
                </h1>
                <p className="text-sm lg:text-base w-10/12 lg:w-9/12 xl:w-8/12 font-normal">
                    Several companies have entrusted their paving to us. We
                    believe the best service is what makes this contractor able
                    to gain the trust of our clients.
                </p>
            </div>
            <button className="bg-white py-2 px-10 lg:px-12 lg:text-lg rounded-full hover:bg-green-600 duration-500 ease-in-out transition-all hover:text-xl hover:text-white mt-10">
                See More
            </button>
        </main>
    );
};

export default Cover;
