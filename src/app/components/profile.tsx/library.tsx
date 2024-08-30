import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export const Library = () => {
    return (
        <>
            <div className='bg-gray-900 rounded-lg text-white relative p-5 mt-20'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl f font-bold '>
                    <span className='text-white underline'>YOUR GAMING </span>
                    <span className='text-pink-400'>LIBRARY</span>
                </h1>

                <div className='space-y-5 md:space-y-1 md:space-x-7 md:text-sm'>
                    <div className='flex flex-col md:flex-row justify-between items-center p-3 rounded-lg md:space-x-7'>
                        <div className='flex items-center space-x-5'>
                            <Image className='rounded-3xl' src="/image/game-01.jpg" alt="image" width={75} height={80} />
                            <div className='md:px-2'>
                                <p className='font-bold'>Data 2</p>
                                <p className='text-gray-500'>sandbox</p>
                            </div>
                        </div>
                        <div className='mt-5 md:mt-0 text-center md:'>
                            <p className='font-bold'>Date Added</p>
                            <p className='text-gray-500'>12/09/2023</p>
                        </div>
                        <div className='mt-5 md:mt-0 text-center'>
                            <p className='font-bold'>Hours Played</p>
                            <p className='text-gray-500'>643hrs 22min</p>
                        </div>
                        <div className='mt-5 md:mt-0 text-center'>
                            <p className='font-bold'>Currently</p>
                            <p className='text-gray-500'>Downloaded</p>
                        </div>
                        <div className='mt-5 md:mt-0 text-center'>
                            <button className='rounded-3xl border border-gray-700 p-2 text-gray-500'>Downloaded</button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center p-5 rounded-lg md:space-x-7 md:text-sm'>
                    <div className='flex items-center space-x-5'>
                        <Image className='rounded-3xl' src="/image/game-02.jpg" alt="image" width={75} height={80} />
                        <div className='sm:flex-rows'>
                            <p className='font-bold'>Data 2</p>
                            <p className='text-gray-500'>sandbox</p>
                        </div>
                    </div>
                    <div className='mt-5 md:mt-0 text-center'>
                        <p className='font-bold'>Date Added</p>
                        <p className='text-gray-500'>12/09/2023</p>
                    </div>
                    <div className='mt-5 md:mt-0 text-center'>
                        <p className='font-bold'>Hours Played</p>
                        <p className='text-gray-500'>643hrs 22min</p>
                    </div>
                    <div className='mt-5 md:mt-0 text-center'>
                        <p className='font-bold'>Currently</p>
                        <p className='text-gray-500'>Downloaded</p>
                    </div>
                    <div className='mt-5 md:mt-0 text-center'>
                        <button className='rounded-3xl border border-gray-700 bg-gray-800 p-2 text-gray-500'>Downloaded</button>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center p-5 rounded-lg md:space-x-7 md:text-sm'>
                    <div className='flex items-center space-x-5'>
                        <Image className='rounded-3xl' src="/image/game-03.jpg" alt="image" width={75} height={80} />
                        <div>
                            <p className='font-bold'>Data 2</p>
                            <p className='text-gray-500'>sandbox</p>
                        </div>
                    </div>
                    <div className='mt-5 md:mt-0 text-center'>
                        <p className='font-bold'>Date Added</p>
                        <p className='text-gray-500'>12/09/2023</p>
                    </div>
                    <div className='mt-5 md:mt-0 text-center'>
                        <p className='font-bold'>Hours Played</p>
                        <p className='text-gray-500'>643hrs 22min</p>
                    </div>
                    <div className='mt-5 md:mt-0 text-center'>
                        <p className='font-bold'>Currently</p>
                        <p className='text-gray-500'>Downloaded</p>
                    </div>
                    <div className='mt-5 md:mt-0 text-center'>
                        <button className='rounded-3xl border border-gray-700 p-2 text-gray-500'>Downloaded</button>
                    </div>
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