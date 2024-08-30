import React from 'react';
import Image from 'next/image';

export const Home = () => {
    return (
        <div className='text-white'>
            <div className='flex'>
                <div className=''>
                    <img
                        className='rounded-xl'
                        src="/image/feature-left.jpg"
                        alt="Feature Left"
                        // width={640}  // Adjust width as needed
                        // height={360} // Adjust height as needed
                        // layout="responsive"
                    />
                </div>
                <div className='relative px-4'>
                    {/* Image with Play Button */}
                    <div className='relative'>
                        <img
                            className='rounded-xl'
                            src="/image/feature-right.jpg"
                            alt="Feature Right"
                            // width={640}  // Adjust width as needed
                            // height={360} // Adjust height as needed
                            // layout="responsive"
                        />
                        {/* Play Button */}
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <button className='bg-white bg-opacity-50  rounded-full hover:bg-opacity-70 transition-opacity duration-300'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className='w-12 h-12 text-white'
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
