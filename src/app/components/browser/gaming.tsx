import React from "react";
import Image from "next/image";

export const GamingPage = () => {
  return (
    <>
      <div className='bg-gray-900 rounded-2xl text-white mt-8 '>
        <div className='p-4'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl'>
            <span className='font-extrabold underline'>Most Popular</span>
            <span className='font-extrabold text-pink-600'> Live Stream</span>
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
          <div className='p-4'>
            <div>
              <Image
                className='rounded-2xl'
                src="/image/stream-01.jpg"
                alt="stream-01"
                width={500}
                height={300}
                layout="responsive"
              />
            </div>
            <div className='flex mt-3'>
              <Image
                className='rounded-3xl w-10 h-10 md:w-12 md:h-12'
                src="/image/avatar-01.jpg"
                alt="avatar-01"
                width={48}
                height={48}
              />
              <div className='ml-4'>
                <p className='text-pink-500 text-sm md:text-base'>kengan omeg</p>
                <p className='font-extrabold text-sm md:text-base'>Just Talking With Friends</p>
              </div>
            </div>
          </div>
          <div className='p-4'>
            <div>
              <Image
                className='rounded-2xl'
                src="/image/stream-02.jpg"
                alt="stream-02"
                width={500}
                height={300}
                layout="responsive"
              />
            </div>
            <div className='flex mt-3'>
              <Image
                className='rounded-3xl w-10 h-10 md:w-12 md:h-12'
                src="/image/avatar-02.jpg"
                alt="avatar-02"
                width={48}
                height={48}
              />
              <div className='ml-4'>
                <p className='text-pink-500 text-sm md:text-base'>kengan omeg</p>
                <p className='font-extrabold text-sm md:text-base'>Just Talking With Friends</p>
              </div>
            </div>
          </div>
          <div className='p-4'>
            <div>
              <Image
                className='rounded-2xl'
                src="/image/stream-03.jpg"
                alt="stream-03"
                width={500}
                height={300}
                layout="responsive"
              />
            </div>
            <div className='flex mt-3'>
              <Image
                className='rounded-3xl w-10 h-10 md:w-12 md:h-12'
                src="/image/avatar-03.jpg"
                alt="avatar-03"
                width={48}
                height={48}
              />
              <div className='ml-4'>
                <p className='text-pink-500 text-sm md:text-base'>kengan omeg</p>
                <p className='font-extrabold text-sm md:text-base'>Just Talking With Friends</p>
              </div>
            </div>
          </div>
          <div className='p-4'>
            <div>
              <Image
                className='rounded-2xl'
                src="/image/stream-04.jpg"
                alt="stream-04"
                width={500}
                height={300}
                layout="responsive"
              />
            </div>
            <div className='flex mt-3'>
              <Image
                className='rounded-3xl w-10 h-10 md:w-12 md:h-12'
                src="/image/avatar-01.jpg"
                alt="avatar-01"
                width={48}
                height={48}
              />
              <div className='ml-4'>
                <p className='text-pink-500 text-sm md:text-base'>kengan omeg</p>
                <p className='font-extrabold text-sm md:text-base'>Just Talking With Friends</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
