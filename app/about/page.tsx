import { Metadata } from 'next'
import { About } from '../../ui/about'
export const metadata: Metadata = {
  title: 'About',
  description: 'About Freelance Recruitment Specialist',
}

const AboutPage = () => {
  return (
    <>
    <About/>
    </>
  )
}

export default AboutPage
