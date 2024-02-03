'use client'

import AuthLayout from '@/components/AuthLayout'
import pb from '@/db/db'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'

const Page = () => {
  const { isLoggedIn, AuthRefresh } = useAuth()
  const router = useRouter()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/')
    }
  }, [])

  const register = async (e: any) => {
    e.preventDefault()
    console.log(form)

    const record = await pb.collection('users').create({
      email: form.email,
      password: form.password,
      passwordConfirm: form.password
    })
    await pb.collection('users').requestVerification(form.email)
    toast.success('Account created', {
      id: 'accountCreated'
    })
    const authData = await pb
      .collection('users')
      .authWithPassword(form.email, form.password)
    if (pb.authStore.isValid) {
      AuthRefresh()
      router.push('/')
    }
  }

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <AuthLayout>
      <div className='w-full  flex flex-col items-center justify-center px-4'>
        <div className='max-w-sm w-full text-gray-600 space-y-5'>
          <div className='text-center pb-8'>
            <div className='mt-5'>
              <h3 className='text-gray-800 text-2xl font-bold sm:text-3xl'>
                Register your account
              </h3>
            </div>
          </div>
          <form className='space-y-5'>
            <div>
              <label className='font-medium'>Email</label>
              <input
                type='email'
                name='email'
                onChange={handleChange}
                required
                className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg'
              />
            </div>
            <div>
              <label className='font-medium'>Password</label>
              <input
                type='password'
                name='password'
                onChange={handleChange}
                required
                className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg'
              />
            </div>
            <button
              onClick={register}
              className='w-full px-4 py-2 text-white font-medium bg-blue-600 hover:bg-blue-500 active:bg-blue-600 rounded-lg duration-150'>
              Sign Up
            </button>
          </form>
          <p className='text-center'>
            Already have an account?{' '}
            <Link
              href='/login'
              className='font-medium text-blue-600 hover:text-blue-500'>
              Log In
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}

export default Page
