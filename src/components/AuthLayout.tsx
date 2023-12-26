import Image from 'next/image'
import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid grid-cols-12 bg-white min-h-[calc(100vh-122px)]'>
      <div className='col-span-6 grid gap-4 justify-center'>
        {children}
      </div>
      <Image
        src='/auth.jpeg'
        alt='movies'
        width={1600}
        height={900}
        className='col-span-6 h-full w-full object-cover'
      />
    </div>
  )
}

export default AuthLayout
