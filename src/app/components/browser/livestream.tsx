import React from "react";
import Image from "next/image";

export const LivePage = () => {
    return (
        <div className="mt-8 text-white">
            <div className="text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl">
                    <span className="font-extrabold underline">How To Start Your </span>
                    <span className="text-pink-600 font-extrabold">Live Stream</span>
                </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-6 mt-10">
                <div className="flex-1">
                    <div className="p-7 border border-stone-700 rounded-3xl">
                        <img className="rounded-3xl" src="/image/service-01.jpg" alt="" />
                        <h3 className="font-extrabold mt-4">Go To Your Profile</h3>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores natus placeat quasi, veritatis non libero deleniti fugiat eligendi repudiandae possimus.
                        </p>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="p-7 border border-stone-700 rounded-3xl">
                        <img className="rounded-3xl" src="/image/service-02.jpg" alt="" />
                        <h3 className="font-extrabold mt-4">Go To Your Profile</h3>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores natus placeat quasi, veritatis non libero deleniti fugiat eligendi repudiandae possimus.
                        </p>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="p-7 border border-stone-700 rounded-3xl">
                        <img className="rounded-3xl" src="/image/service-03.jpg" alt="" />
                        <h3 className="font-extrabold mt-4">Go To Your Profile</h3>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores natus placeat quasi, veritatis non libero deleniti fugiat eligendi repudiandae possimus.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex justify-center">
                <button className="bg-pink-600 text-white rounded-2xl px-6 py-2 text-lg">Go To Profile</button>
            </div>
        </div>
    )
}
