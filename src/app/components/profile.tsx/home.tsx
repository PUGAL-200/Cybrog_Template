import React from 'react';

export const HomePage = () => {
    return (
        <div className='bg-gray-800 text-white p-4 rounded-2xl md:p-8 lg:p-12'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 items-center'>
                {/* Profile Image Section */}
                <div className='flex justify-center md:justify-start'>
                    <div className='p-5 w-full md:w-auto'>
                        <img className='rounded-2xl w-full object-cover' src="/image/profile.jpg" alt="Profile" />
                    </div>
                </div>

                {/* Information Section */}
                <div className='flex-1 p-3'>
                    <div className='flex flex-col items-center md:items-start'>
                        <button className='rounded-2xl p-2 px-5 bg-pink-600 text-xs md:text-sm lg:text-base'>
                            Offline
                        </button>
                        <h1 className='font-extrabold text-lg md:text-2xl lg:text-3xl mt-3'>
                            Alan Smithee
                        </h1>
                        <div className='text-gray-400 text-sm md:text-base lg:text-lg mt-4 text-center md:text-left'>
                            <p>Lorem ipsum, dolor sit, labore.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className='mt-4'>
                            <button className='border p-2 rounded-3xl text-pink-500 border-pink-500 text-xs md:text-sm lg:text-base'>
                                Start Live Stream
                            </button>
                        </div>
                    </div>
                </div>

                {/* Additional Information Section */}
                <div className='bg-gray-700 p-4 rounded-2xl'>
                    <div className='flex justify-between items-center mt-3'>
                        <p className='text-sm md:text-base lg:text-lg'>Games Download</p>
                        <p className='text-pink-500 text-sm md:text-base lg:text-lg'>3</p>
                    </div>
                    <hr className='border-gray-600 mt-3' />
                    <div className='flex justify-between items-center mt-6'>
                        <p className='text-sm md:text-base lg:text-lg'>Friends Online</p>
                        <p className='text-pink-500 text-sm md:text-base lg:text-lg'>16</p>
                    </div>
                    <hr className='border-gray-600 mt-3' />
                    <div className='flex justify-between items-center mt-6'>
                        <p className='text-sm md:text-base lg:text-lg'>Live Streams</p>
                        <p className='text-pink-500 text-sm md:text-base lg:text-lg'>None</p>
                    </div>
                    <hr className='border-gray-600 mt-3' />
                    <div className='flex justify-between items-center mt-6'>
                        <p className='text-sm md:text-base lg:text-lg'>Clips</p>
                        <p className='text-pink-500 text-sm md:text-base lg:text-lg'>29</p>
                    </div>
                </div>
            </div>

            <hr className='w-full border-gray-600 mt-5' />

            {/* Clips Section */}
            <div className='mt-5 text-white'>
                <h1 className='font-extrabold text-xl md:text-2xl lg:text-3xl'>
                    Your Most Popular <span className='text-pink-600'>Clips</span>
                </h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-4'>
                    {/* Clip Item */}
                    <div className='bg-gray-700 p-4 rounded-2xl'>
                        <img className='rounded-2xl w-full h-auto' src="/image/clip-01.jpg" alt="Clip" />
                        <div className='flex justify-between items-center mt-3'>
                            <p className='font-bold text-sm md:text-base lg:text-lg'>First Clip</p>
                            <div className='flex items-center'>
                                <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#f410a0" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" /></svg>
                                <span className='ml-1 text-pink-500 text-sm md:text-base lg:text-lg'>250</span>
                            </div>
                        </div>
                    </div>

                    {/* Other Clips */}
                    <div className='bg-gray-700 p-4 rounded-2xl'>
                        <img className='rounded-2xl w-full h-auto' src="/image/clip-02.jpg" alt="Clip" />
                        <div className='flex justify-between items-center mt-3'>
                            <p className='font-bold text-sm md:text-base lg:text-lg'>Second Clip</p>
                            <div className='flex items-center'>
                                <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#f410a0" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" /></svg>
                                <span className='ml-1 text-pink-500 text-sm md:text-base lg:text-lg'>250</span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-700 p-4 rounded-2xl'>
                        <img className='rounded-2xl w-full h-auto' src="/image/clip-04.jpg" alt="Clip" />
                        <div className='flex justify-between items-center mt-3'>
                            <p className='font-bold text-sm md:text-base lg:text-lg'>Second Clip</p>
                            <div className='flex items-center'>
                                <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#f410a0" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" /></svg>
                                <span className='ml-1 text-pink-500 text-sm md:text-base lg:text-lg'>250</span>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-700 p-4 rounded-2xl'>
                        <img className='rounded-2xl w-full h-auto' src="/image/clip-03.jpg" alt="Clip" />
                        <div className='flex justify-between items-center mt-3'>
                            <p className='font-bold text-sm md:text-base lg:text-lg'>Second Clip</p>
                            <div className='flex items-center'>
                                <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#f410a0" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" /></svg>
                                <span className='ml-1 text-pink-500 text-sm md:text-base lg:text-lg'>250</span>
                            </div>
                        </div>
                    </div>

                    {/* Additional Clip Items */}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
