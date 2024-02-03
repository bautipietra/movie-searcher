'use client'

import AuthLayout from '@/components/AuthLayout'
import pb from '@/db/db'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useAuth } from '@/context/AuthContext'

const Page = () => {
  const router = useRouter()
  const { isLoggedIn, AuthRefresh } = useAuth()

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/')
    }
  }, [])

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const login = async (e: any) => {
    e.preventDefault()

    try {
      await pb
        .collection('users')
        .authWithPassword(form.email, form.password)
      if (pb.authStore.isValid) {
        AuthRefresh()
        toast.success('Logged in', {
          id: 'logged'
        })
        router.push('/')
      }
    } catch (error) {
      toast.error('Wrong email or password', {
        id: 'wrong'
      })
    }
  }

  return (
    <AuthLayout>
      <div className='w-full flex flex-col items-center justify-center px-4'>
        <div className='max-w-sm w-full text-gray-600 space-y-5'>
          <div className='text-center pb-8'>
            <div className='mt-5'>
              <h3 className='text-gray-800 text-2xl font-bold sm:text-3xl'>
                Log in to your account
              </h3>
            </div>
          </div>
          <form className='space-y-5'>
            <div>
              <label className='font-medium'>Email</label>
              <input
                type='email'
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                required
                className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg'
              />
            </div>
            <div>
              <label className='font-medium'>Password</label>
              <input
                type='password'
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                required
                className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg'
              />
            </div>
            <div className='flex items-center justify-between text-sm'>
              <div className='flex items-center gap-x-3'>
                <input
                  type='checkbox'
                  id='remember-me-checkbox'
                  className='checkbox-item peer hidden'
                />
                <label
                  htmlFor='remember-me-checkbox'
                  className='relative flex w-5 h-5 bg-white peer-checked:bg-blue-600 rounded-md border ring-offset-2 ring-blue-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45'></label>
                <span>Remember me</span>
              </div>
              <a
                href='/recovery'
                className='text-center text-blue-600 hover:text-blue-500'>
                Forgot password?
              </a>
            </div>
            <button
              onClick={login}
              className='w-full px-4 py-2 text-white font-medium bg-blue-600 hover:bg-blue-500 active:bg-blue-600 rounded-lg duration-150'>
              Sign in
            </button>
          </form>
          <p className='text-center'>
            Don’t have an account?{' '}
            <Link
              href='/register'
              className='font-medium text-blue-600 hover:text-blue-500'>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Page
