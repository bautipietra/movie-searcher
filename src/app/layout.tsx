import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'
const Nav = dynamic(() => import('@/components/Nav'), {
  ssr: false
})
import { Banner } from '@/components/Banner'
import { Footer } from '@/components/Footer'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '../context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movie Searcher',
  icons: {
    icon: '/logo.png'
  },
  description:
    'Discover magical adventures with your favorite heroes in every movie.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <Toaster position='bottom-center'></Toaster>
          <Banner></Banner>
          <Nav></Nav>
          {children}
          <Footer></Footer>
        </AuthProvider>
      </body>
    </html>
  )
}
