import { Metadata } from 'next'
import { Industries } from '../../ui/industries'
export const metadata: Metadata = {
  title: 'Industries',
  description: 'Industries we serve',
}
const IndustriesPage = () => {
  return (
    <>
    <Industries/>
    </>
  )
}

export default IndustriesPage
