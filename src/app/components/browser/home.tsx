import React from "react";
import Image from "next/image";

export const HomePage = () => {
  return (
    <div className="p- lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Featured Games Section */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 mb-6 lg:mb-0">
          <div className="bg-gray-900 text-white rounded-xl p-4 md:p-6 lg:p-8">
            <div className="mb-4">
              <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold">
                Featured <span className="text-pink-600">Games</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 ">
              {/* Featured Game Cards */}
              {["featured-01.jpg", "featured-02.jpg", "featured-03.jpg"].map((image, index) => (
                <div key={index} className="bg-gray-800 rounded-xl overflow-hidden">
                  <div className="relative w-full h-48 md:h-60 lg:h-72">
                    <Image
                      className="rounded-xl"
                      src={`/image/${image}`}
                      alt={`Featured game ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex justify-between mt-4 p-2">
                    <h6 className="text-xs sm:text-sm lg:text-base">Fortnite</h6>
                    <h6 className="flex items-center text-xs sm:text-sm lg:text-base">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-4 h-4 mr-1">
                        <path fill="#eee711" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>
                      4.8
                    </h6>
                  </div>
                  <div className="flex justify-between mt-2 p-2">
                    <h6 className="text-xs sm:text-sm lg:text-base flex items-center">Sandbox</h6>
                    <h6 className="flex items-center text-xs sm:text-sm lg:text-base">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-1">
                        <path fill="#ee11e7" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                      </svg>
                      2.3
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Downloaded Section */}
        <div className="bg-gray-900 text-white rounded-xl col-span-1 md:col-span-2 lg:col-span-1 ">
          <div className="p-4">
            <h1 className="text-lg md:text-xl lg:text-2xl font-extrabold">
              <span className="underline">Top</span>{" "}
              <span className="text-pink-600">Downloaded</span>
            </h1>
          </div>
          <div className="px-3 ">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-800 text-white rounded-xl mb-4">
                <div className="flex items-center p-3">
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-2xl"
                      src={`/image/game-0${i}.jpg`}
                      alt={`Top downloaded game ${i}`}
                      width={80}
                      height={80}
                      layout="fixed"
                    />
                  </div>
                  <div className="px-3 flex-grow">
                    <h6 className="font-extrabold text-sm md:text-base lg:text-lg">
                      Fortnite
                    </h6>
                    <p className="text-gray-400 text-xs md:text-sm lg:text-base">
                      Sandbox
                    </p>
                    <div className="flex items-center justify-between text-xs md:text-sm lg:text-base">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          className="w-4 h-4 text-yellow-400 mr-1"
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          />
                        </svg>
                        4.8
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 text-pink-600 mr-1"
                        >
                          <path
                            fill="currentColor"
                            d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                          />
                        </svg>
                        2.3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <hr className="border border-gray-800" />
            <div className="text-center mt-6">
              <p className="text-pink-500 font-bold cursor-pointer">View All Games</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
