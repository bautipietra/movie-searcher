'use client'

import pb from '@/db/db'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useAuth } from '@/context/AuthContext'

const Page = () => {
  const router = useRouter()
  const { isLoggedIn, AuthRefresh } = useAuth()

  const logout = async () => {
    await pb.authStore.clear()
    AuthRefresh()
  }

  useEffect(() => {
    if (isLoggedIn) {
      logout()
      toast.success('Logged out', {
        id: 'loggedOut'
      })
    }
    router.push('/login')
  }, [])
}

export default Page
