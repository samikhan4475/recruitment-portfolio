import { Metadata } from 'next'
import { Services } from '../../ui/services'
export const metadata: Metadata = {
  title: 'Services',
  description: 'Recruitment Services',
}

const ServicesPage = () => {
  return (
    <>
    <Services/>
    </>
  )
}

export default ServicesPage
