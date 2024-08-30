import React from 'react';
import Image from 'next/image';

export const PopularLivePage = () => {
    return (
        <>
            <div className='bg-gray-900 rounded-2xl text-white mt-8 py-5'>
                <div className='p-4'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl'>
                        <span className='font-extrabold underline'>Most Popular</span>
                        <span className='font-extrabold text-pink-600'> Live Stream</span>
                    </h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
                    <div className='p-4'>
                        <div>
                            <Image className='rounded-2xl' src="/image/stream-05.jpg" alt="image" width={500} height={300} layout="responsive" />
                        </div>
                        <div className='flex mt-3'>
                            <Image className='rounded-3xl w-10 h-10 md:w-12 md:h-12' src="/image/avatar-01.jpg" alt="avatar" width={40} height={40} layout="fixed" />
                            <div className='ml-4'>
                                <p className='text-pink-500 text-sm md:text-base'>kengan omeg</p>
                                <p className='font-extrabold text-sm md:text-base'>Just Talking With Friends</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div>
                            <Image className='rounded-2xl' src="/image/stream-06.jpg" alt="image" width={500} height={300} layout="responsive" />
                        </div>
                        <div className='flex mt-3'>
                            <Image className='rounded-3xl w-10 h-10 md:w-12 md:h-12' src="/image/avatar-02.jpg" alt="avatar" width={40} height={40} layout="fixed" />
                            <div className='ml-4'>
                                <p className='text-pink-500 text-sm md:text-base'>kengan omeg</p>
                                <p className='font-extrabold text-sm md:text-base'>Just Talking With Friends</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div>
                            <Image className='rounded-2xl' src="/image/stream-07.jpg" alt="image" width={500} height={300} layout="responsive" />
                        </div>
                        <div className='flex mt-3'>
                            <Image className='rounded-3xl w-10 h-10 md:w-12 md:h-12' src="/image/avatar-03.jpg" alt="avatar" width={40} height={40} layout="fixed" />
                            <div className='ml-4'>
                                <p className='text-pink-500 text-sm md:text-base'>kengan omeg</p>
                                <p className='font-extrabold text-sm md:text-base'>Just Talking With Friends</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div>
                            <Image className='rounded-2xl' src="/image/stream-08.jpg" alt="image" width={500} height={300} layout="responsive" />
                        </div>
                        <div className='flex mt-3'>
                            <Image className='rounded-3xl w-10 h-10 md:w-12 md:h-12' src="/image/avatar-01.jpg" alt="avatar" width={40} height={40} layout="fixed" />
                            <div className='ml-4'>
                                <p className='text-pink-500 text-sm md:text-base'>kengan omeg</p>
                                <p className='font-extrabold text-sm md:text-base'>Just Talking With Friends</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
                    <div className='p-4'>
                        <div>
                            <Image className='rounded-2xl' src="/image/stream-07.jpg" alt="image" width={500} height={300} layout="responsive" />
                        </div>
                        <div className='flex mt-3'>
                            <Image className='rounded-3xl w-10 h-10 md:w-12 md:h-12' src="/image/avatar-01.jpg" alt="avatar" width={40} height={40} layout="fixed" />
                            <div className='ml-4'>
                                <p className='text-pink-500 text-sm md:text-base'>kengan omeg</p>
                                <p className='font-extrabold text-sm md:text-base'>Just Talking With Friends</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div>
                            <Image className='rounded-2xl' src="/image/stream-05.jpg" alt="image" width={500} height={300} layout="responsive" />
                        </div>
                        <div className='flex mt-3'>
                            <Image className='rounded-3xl w-10 h-10 md:w-12 md:h-12' src="/image/avatar-02.jpg" alt="avatar" width={40} height={40} layout="fixed" />
                            <div className='ml-4'>
                                <p className='text-pink-500 text-sm md:text-base'>kengan omeg</p>
                                <p className='font-extrabold text-sm md:text-base'>Just Talking With Friends</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div>
                            <Image className='rounded-2xl' src="/image/stream-08.jpg" alt="image" width={500} height={300} layout="responsive" />
                        </div>
                        <div className='flex mt-3'>
                            <Image className='rounded-3xl w-10 h-10 md:w-12 md:h-12' src="/image/avatar-03.jpg" alt="avatar" width={40} height={40} layout="fixed" />
                            <div className='ml-4'>
                                <p className='text-pink-500 text-sm md:text-base'>kengan omeg</p>
                                <p className='font-extrabold text-sm md:text-base'>Just Talking With Friends</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div>
                            <Image className='rounded-2xl' src="/image/stream-06.jpg" alt="image" width={500} height={300} layout="responsive" />
                        </div>
                        <div className='flex mt-3'>
                            <Image className='rounded-3xl w-10 h-10 md:w-12 md:h-12' src="/image/avatar-01.jpg" alt="avatar" width={40} height={40} layout="fixed" />
                            <div className='ml-4'>
                                <p className='text-pink-500 text-sm md:text-base'>kengan omeg</p>
                                <p className='font-extrabold text-sm md:text-base'>Just Talking With Friends</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className=''>
                    <button className='p-1 rounded-2xl  bg-pink-500'>Load More Streams</button>
                   </div>  */}
                   {/* <div className="absolute left-1/2 transform -translate-x-1/2 -mt-1">
                <button className="bg-pink-600 text-white rounded-3xl
        py-1 px-1 text-sm
        sm:py-2 sm:px-4 sm:text-sm
        md:py-3 md:px-6 md:text-base
        lg:py-4 lg:px-8 lg:text-lg">

                    View your Library
                </button>
            </div>  */}
                           
                </div>
                <div className='text-center absolute left-1/2  transform -translate-x-1/2 -mt-1 '>
                    <button className="bg-pink-600 text-white  rounded-3xl
        py-2 px-1 text-sm
        md:py-2 md:px-6 md:text-base
        lg:py-1 lg:px-4 lg:text-lg
        xl:py-4 xl:px-10 xl:text-xl">
                        View your Library
                    </button>
                </div>

            </div>
        </>
    )
}
