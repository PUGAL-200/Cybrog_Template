import Image from 'next/image';
import React from 'react';

export const PopularPage = () => {
    return (
        <div className="bg-gray-900 text-white mt-10 rounded-2xl relative p-4 sm:text-xs">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mt-5 p-4">
                <span className="text-white font-bold underline">MOST POPULAR</span>
                <span className="text-pink-400 font-bold"> RIGHT NOW</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 my-5">
                {['popular-01.jpg', 'popular-02.jpg', 'popular-03.jpg', 'popular-04.jpg', 'popular-05.jpg', 'popular-06.jpg', 'popular-07.jpg', 'popular-08.jpg'].map((src, index) => (
                    <div key={index} className="bg-gray-600 p-4 rounded-xl">
                        <Image 
                            className="rounded-xl w-full h-auto" 
                            src={`/image/${src}`} 
                            alt={`Popular game ${index + 1}`} 
                            width={400} 
                            height={225} 
                            layout="responsive" 
                            objectFit="cover" 
                        />
                        <div className="flex justify-between mt-5">
                            <h6 className="text-xs ">Fortnite</h6>
                            <h6 className="flex items-center text-xs gap-1 ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-4 h-4 ">
                                    <path fill="#eee711" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                </svg>
                            4.8
                            </h6>
                        </div>
                        <div className="flex justify-between mt-3">
                            <h6 className="text-xs flex items-center">Sandbox</h6>
                            <h6 className="flex items-center text-xs gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
                                    <path fill="#ee11e7" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                                </svg>
                                2.3
                            </h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularPage;
