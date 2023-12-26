'use client'

import pb from '@/db/db'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

const Page = () => {
  useEffect(() => {
    if (!pb.authStore.isValid) {
      toast.error('You must be logged in to view this page', {
        id: 'loginRequired'
      })
      redirect('/login')
    }
  }, [])

  return <>{pb.authStore.isValid && <div>page</div>}</>
}

export default Page
