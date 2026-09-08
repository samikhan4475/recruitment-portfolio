import {About} from '@/ui/about/about'
import {Contact} from '@/ui/contact'
import {Home} from '@/ui/home'
import {Industries} from '@/ui/industries'
import {Services} from '@/ui/services'

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