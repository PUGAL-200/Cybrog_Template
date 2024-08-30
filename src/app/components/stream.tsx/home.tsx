import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export const HomePage = () => {
    return (
        <>
            <div className='lg:flex  gap-10'>
            <div className='text-white bg-gray-950 rounded-xl'>
    <div>
        <div>
            <h1 className='p-2'>
                <span className='font-extrabold underline'>Live </span>
                <span className='font-extrabold text-pink-600'>Streams</span>
            </h1>
        </div>
        <div className='md:flex lg:flex justify-between'>
            {[
                { src: '/image/featured-01.jpg', alt: 'featured image 1' },
                { src: '/image/featured-02.jpg', alt: 'featured image 2' },
                { src: '/image/featured-03.jpg', alt: 'featured image 3' },
            ].map((image, index) => (
                <div key={index} className='p-4 rounded-xl'>
                    <img 
                        className="w-full h-auto rounded-xl object-cover"
                        src={image.src} 
                        alt={image.alt} 
                    />
                    <div className="flex justify-between mt-5">
                        <h6 className="text-xs">Fortnite</h6>
                        <h6 className="flex items-center text-xs gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-4 h-4">
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
</div>

                <div className='text-white bg-gray-950 rounded-xl flex-1 mt-5 md:mt-5   lg:mt-1'>
                    <div className='justify-between'>
                        <div className='p-2'>
                            <h1><span className='font-extrabold underline'>Top</span> <span className='text-pink-600 font-extrabold'>Streamers</span></h1>
                        </div>
                        <div className='p-4 flex justify-between'>
                            <div>
                                <p className='font-extrabold'>01</p>
                            </div>
                            <div>
                                <img className='rounded-3xl' src="/image/avatar-01.jpg" alt="" />
                            </div>
                            <div className='flex'>
                                <div >
                                    <svg className='w-3 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#e708b7" d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z" /></svg>
                                </div>
                                <div className='px-1'>
                                    <p className='text-pink-500'> LahutaN</p>
                                </div>

                            </div>
                            <div>
                                <button className='button rounded-xl bg-pink-500 p-2'>Follow</button>
                            </div>
                        </div>
                        <div className='p-4 flex justify-between'>
                            <div>
                                <p className='font-extrabold'>02</p>
                            </div>
                            <div>
                                <img className='rounded-3xl' src="/image/avatar-02.jpg" alt="" />
                            </div>
                            <div className='flex'>
                                <div >
                                    <svg className='w-3 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#e708b7" d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z" /></svg>
                                </div>
                                <div className='px-1'>
                                    <p className='text-pink-500'> LahutaN</p>
                                </div>

                            </div>
                            <div>
                                <button className='button rounded-xl bg-pink-500 p-2'>Follow</button>
                            </div>
                        </div>
                        <div className='p-4 flex justify-between'>
                            <div>
                                <p className='font-extrabold'>03</p>
                            </div>
                            <div>
                                <img className='rounded-3xl' src="/image/avatar-03.jpg" alt="" />
                            </div>
                            <div className='flex'>
                                <div >
                                    <svg className='w-3 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#e708b7" d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z" /></svg>
                                </div>
                                <div className='px-1'>
                                    <p className='text-pink-500'> LahutaN</p>
                                </div>

                            </div>
                            <div>
                                <button className='button rounded-xl bg-pink-500 p-2'>Follow</button>
                            </div>
                        </div>
                        <div className='p-4 flex justify-between'>
                            <div>
                                <p className='font-extrabold'>04</p>
                            </div>
                            <div>
                                <img className='rounded-3xl' src="/image/avatar-04.jpg" alt="" />
                            </div>
                            <div className='flex'>
                                <div >
                                    <svg className='w-3 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#e708b7" d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z" /></svg>
                                </div>
                                <div className='px-1'>
                                    <p className='text-pink-500'> LahutaN</p>
                                </div>

                            </div>
                            <div>
                                <button className='button rounded-xl bg-pink-500 p-2'>Follow</button>
                            </div>
                        </div>
                        <div className='p-4 flex justify-between'>
                            <div>
                                <p className='font-extrabold'>05</p>
                            </div>
                            <div>
                                <img className='rounded-3xl' src="/image/avatar-03.jpg" alt="" />
                            </div>
                            <div className='flex'>
                                <div>
                                    <svg className='w-3 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#e708b7" d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z" /></svg>
                                </div>
                                <div className='px-1'>
                                    <p className='text-pink-500'> LahutaN</p>
                                </div>

                            </div>
                            <div>
                                <button className='button rounded-xl bg-pink-500 p-2'>Follow</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}   