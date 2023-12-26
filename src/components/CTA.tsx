import Image from 'next/image'
import React from 'react'

const CTA = () => {
  return (
    <section
      className='relative max-w-screen-xl mx-auto py-4 px-4 md:px-8'
      style={{ backgroundImage: 'url("/background-pattern.svg")' }}>
      <div className='absolute top-0 left-0 w-full h-full opacity-40'></div>
      <div className='relative z-10 gap-5 items-center flex max-lg:flex-col min-h-[calc(100vh-140px)]'>
        <div className='flex-1 py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left'>
          <h3 className='text-8xl text-gray-800 font-black max-xl:text-7xl max-sm:text-6xl'>
            Find your next{' '}
            <span className='text-blue-600'>movie</span>
          </h3>
          <p className='text-gray-500 leading-relaxed mt-3'>
            Discover the magic of cinema with your favorite
            characters. Explore, enjoy and immerse yourself in
            exciting stories that you will love.
          </p>
          <a
            className='mt-5 px-4 py-2 text-blue-600 font-medium bg-blue-50 rounded-full inline-flex items-center'
            href='javascript:void()'>
            Explore
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 ml-1 duration-150'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 7l5 5m0 0l-5 5m5-5H6'
              />
            </svg>
          </a>
        </div>
        <div className='flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto'>
          <Image
            src='/cta.png'
            alt=''
            className='w-full md:-translate-y-16'
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  )
}

export default CTA
