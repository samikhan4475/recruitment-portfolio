import { Contact } from '../../ui/contact'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Freelance Recruitment Specialist',
}

const ContactPage = () => {

  return (
    <>
    <Contact/>
    </>
  )
}

export default ContactPage
