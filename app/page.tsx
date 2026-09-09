import {About} from '@/ui/about/about'
import {Contact} from '@/ui/contact'
import {Home} from '@/ui/home'
import {Industries} from '@/ui/industries'
import {Services} from '@/ui/services'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Freelance Recruitment Specialist',
  description: 'Freelance Recruitment Specialist',
}
export default function Page() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Industries />
      <Contact />
    </>
  )
}