import { Brands } from '@/components/Brands'
import CTA from '@/components/CTA'
import { NewsLetter } from '@/components/NewsLetter'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='grid min-h-[calc(100vh-140px)] bg-white'>
      <CTA></CTA>
      <Brands></Brands>
      <NewsLetter></NewsLetter>
    </main>
  )
}
