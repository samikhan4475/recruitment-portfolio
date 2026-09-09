import { Metadata } from 'next'
import { Home } from '../../ui/home'
export const metadata: Metadata = {
  title: 'Home',
  description: 'Freelance Recruitment Specialist',
}
const HomePage = () => {
  return (
    <>
    <Home/>
    </>
  )
}

export default HomePage
