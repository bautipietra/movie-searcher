import AuthLayout from '@/components/AuthLayout'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <AuthLayout>
      <div className='w-full flex flex-col items-center justify-center px-4'>
        <div className='max-w-sm w-full text-gray-600 space-y-5'>
          <div className='text-center pb-8'>
            <div className='mt-5'>
              <h3 className='text-gray-800 text-2xl font-bold sm:text-3xl'>
                Forgot your password?
              </h3>
            </div>
          </div>
          <form className='space-y-5'>
            <div>
              <label className='font-medium'>Email</label>
              <input
                type='email'
                required
                className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg'
              />
            </div>
            <button className='w-full px-4 py-2 text-white font-medium bg-blue-600 hover:bg-blue-500 active:bg-blue-600 rounded-lg duration-150'>
              Send recovery link
            </button>
          </form>
          <p className='text-center'>
            Back?{' '}
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

export default page
