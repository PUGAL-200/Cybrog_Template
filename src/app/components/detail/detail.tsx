import React from 'react';

export const Detail = () => {
    return (
        <>
            <div className='mt-10'>
                <h1 className='font-extrabold text-center text-white text-xl lg:text-3xl'>
                    FORTNITE DETAILS
                </h1>
            </div>
            <div className='text-white p-5 bg-gray-900 rounded-2xl my-4 mt-9'>
                <div className='space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4'>
                    <div className='bg-gray-700 rounded-2xl p-5'>
                        <div className='flex justify-between'>
                            <h6 className='font-bold'>Fortnite</h6>
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
                        </div>
                        <div className='flex justify-between mt-2'>
                            <h6 className='text-gray-600'>SandBox</h6>
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-4 h-4 text-pink-500 mr-1"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v242.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-32c0-35.3-28.7-64-64-64H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                                    />
                                </svg>
                                2.3M
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-700 rounded-2xl flex flex-row md:flex-row justify-center md:justify-evenly items-center space-y-5 md:space-y-0 md:space-x-5 p-4'>
                        <div className='flex flex-row justify-center items-center gap-4 md:gap-8'>
                            <div className="flex flex-col items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                    className="w-6 h-6 md:w-4 md:h-4 text-yellow-400"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                    />
                                </svg>
                                <p className="text-sm md:text-base">4.8</p>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-6 h-6 md:w-4 md:h-4 text-pink-500"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v242.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-32c0-35.3-28.7-64-64-64H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                                    />
                                </svg>
                                <p className="text-sm md:text-base">2.3M</p>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                    className="w-6 h-6 md:w-4 md:h-4 text-yellow-400"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M64 64C28.7 64 0 92.7 0 128v7.4c0 6.8 4.4 12.6 10.1 16.3C23.3 160.3 32 175.1 32 192s-8.7 31.7-21.9 40.3C4.4 236 0 241.8 0 248.6V320h576v-71.4c0-6.8-4.4-12.6-10.1-16.3C552.7 223.7 544 208.9 544 192s8.7-31.7 21.9-40.3c5.7-3.7 10.1-9.5 10.1-16.3V128c0-35.3-28.7-64-64-64H64zm96 320H64c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h96c35.3 0 64-28.7 64-64v-32c0-35.3-28.7-64-64-64zm352 0h-96c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h96c35.3 0 64-28.7 64-64v-32c0-35.3-28.7-64-64-64z"
                                    />
                                </svg>
                                <p className="text-sm md:text-base">1.1M</p>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                    className="w-6 h-6 md:w-4 md:h-4 text-pink-500"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M416 352c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32h-32zm-352 0c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32H64zm480-320H32C14.3 32 0 46.3 0 64v224c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V96c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v192c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-64 400H64v-32h384v32zm64 32c17.7 0 32-14.3 32-32v-64H32v64c0 17.7 14.3 32 32 32h448z"
                                    />
                                </svg>
                                <p className="text-sm md:text-base">300K</p>
                            </div>
                        </div>
                    </div>


                </div>


                <div className='mt-5'>
    <div className='flex flex-col md:flex-row gap-4'>
        <div className='flex-1 p-2'>
            <img className='w-full h-auto rounded-2xl object-cover' src="/image/details-01.jpg" alt="" />
        </div>
        <div className='flex-1 p-2'>
            <img className='w-full h-auto rounded-2xl object-cover' src="/image/details-02.jpg" alt="" />
        </div>
        <div className='flex-1 p-2'>
            <img className='w-full h-auto rounded-2xl object-cover' src="/image/details-03.jpg" alt="" />
        </div>
    </div>
    <div className='mt-5'>
        <p className='text-gray-600'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus fuga libero sapiente est, officiis non iusto hic ipsum eius 
            <span className='text-white'>cupiditate culpa et sunt totam nam.</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Minima, ea pariatur? Iste possimus officia dolore maxime labore eos mollitia corrupti assumenda similique? Perspiciatis, magnam nostrum? 
        </p>
    </div>
    <div className='mt-9'>
        <button className='border p-2 border-pink-500 w-full rounded-2xl text-pink-500'>
            Download Fortnite Now 
        </button>
    </div>
</div>

            </div>
        </>
    );
};