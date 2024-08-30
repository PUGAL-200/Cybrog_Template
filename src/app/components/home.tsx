import React from 'react';
import Image from 'next/image';

export const HomePage = () => {
    return (
        <div className="text-white">
            <div className="relative rounded-2xl overflow-hidden ">
                {/* <img
                    src="/image/banner-bg.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-2xl"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 rounded-2xl "></div>
                <div className="relative z-10 p-14 rounded-4xl bg-home_img bg-no-repeat">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl">Welcome to Cybrog</h3>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mt-4 sm:mt-5 md:mt-7 lg:mt-8">
                        <span className="block sm:inline">BROWSE</span> OUR POPULAR
                    </h1>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mt-2 sm:mt-3 md:mt-4 lg:mt-5">
                        GAMES HERE
                    </h1>
                    <button className="bg-pink-500 text-white px-4 py-2 sm:px-6 md:px-8 lg:px-10 rounded-full mt-4 sm:mt-6 md:mt-8 lg:mt-10 transition duration-300 ease-in-out hover:bg-pink-600">
                        Browse Now
                    </button>
                </div>
            </div>
        </div>
    );
};
