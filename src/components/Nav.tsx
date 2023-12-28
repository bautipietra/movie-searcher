'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import pb from '../db/db'
import { useAuth } from '@/context/AuthContext'

// Profile Dropdown
const ProfileDropDown = (props: any) => {
  const [state, setState] = useState(false)
  const profileRef: any = useRef()

  const navigation = [{ title: 'Log out', path: '/logout' }]

  useEffect(() => {
    const handleDropDown = (e: any) => {
      if (!profileRef.current.contains(e.target)) setState(false)
    }
    document.addEventListener('click', handleDropDown)
  }, [])

  return (
    <div className={`relative ${props.class}`}>
      <div className='flex items-center space-x-4 z-10'>
        <button
          ref={profileRef}
          className='w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-blue-600'
          onClick={() => setState(!state)}>
          <Image
            alt='user'
            width={40}
            height={40}
            src='/user.png'
            className='w-full h-full rounded-full'
          />
        </button>
        <div className='lg:hidden'>
          <span className='block'>Micheal John</span>
          <span className='block text-sm text-gray-500'>
            john@gmail.com
          </span>
        </div>
      </div>
      <ul
        className={`bg-white top-12 z-10 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? '' : 'lg:hidden'
        }`}>
        {navigation.map((item, idx) => (
          <li key={idx}>
            <a
              key={idx}
              className='block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5'
              href={item.path}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Nav = () => {
  const { isLoggedIn } = useAuth()
  const [menuState, setMenuState] = useState(false)

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: 'Home', path: '/' },
    { title: 'Movies', path: '/movies' },
    { title: 'Favorites', path: '/favorites' }
  ]

  return (
    <nav className='bg-white border-b'>
      <div className='flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8'>
        <div className='flex-none lg:flex-initial z-30'>
          <a href='/'>
            <Image
              src='/logo.png'
              width={50}
              height={50}
              alt='Float UI logo'
            />
          </a>
        </div>
        <div className='flex-1 flex items-center justify-between'>
          <div
            className={`bg-white absolute w-fit top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${
              menuState ? '' : 'hidden'
            }`}>
            <ul className='mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0'>
              {navigation.map((item, idx) => (
                <li
                  key={idx}
                  className='text-gray-600 hover:text-gray-900'>
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </ul>
            <ProfileDropDown class='mt-5 pt-5 border-t lg:hidden' />
          </div>
          <div className='flex-1 flex items-center justify-end space-x-2 sm:space-x-6'>
            {isLoggedIn ? (
              <>
                <form className='flex items-center space-x-2 border rounded-md p-2  z-30'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 flex-none text-gray-300'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                  </svg>
                  <input
                    className='w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto'
                    type='text'
                    placeholder='Search'
                  />
                </form>
                <ProfileDropDown class='hidden lg:block' />
                <button
                  className='outline-none text-gray-400 block lg:hidden'
                  onClick={() => setMenuState(!menuState)}>
                  {menuState ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16m-7 6h7'
                      />
                    </svg>
                  )}
                </button>
              </>
            ) : (
              <div className='flex-1 gap-x-6 items-center justify-end flex space-y-0 mt-0'>
                <a
                  href='/login'
                  className='block text-gray-700 hover:text-gray-900'>
                  Log in
                </a>
                <a
                  href='/register'
                  className='flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-blue-600 hover:bg-blue-700 active:bg-blue-900 rounded-full md:inline-flex'>
                  Sign up
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5'>
                    <path
                      fillRule='evenodd'
                      d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
