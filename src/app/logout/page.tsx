'use client'

import pb from '@/db/db'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

const Page = () => {
  useEffect(() => {
    if (pb.authStore.isValid) {
      toast.success('Logged out')
      pb.authStore.clear()
      redirect('/login')
    } else {
      redirect('/login')
    }
  }, [])
}

export default Page
