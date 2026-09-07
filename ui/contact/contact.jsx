import React from 'react'
import { Flex, Text } from "@radix-ui/themes";
import { ContactForm } from './contact-form';
import { ContactRightSide } from './contact-right-side';

const Contact = () => {
  return (
    <Flex gap='4' direction='column'>
      <Flex direction='column' gap='1'>
        <Text className='text-[#1e2761] text-4xl'>Let's Work Together</Text>
        <Text className='text-[#6b7280] text-[17px]'>Tell me about your hiring need and I'll get back to you within 24 hours.</Text>
      </Flex>
      <Flex gap='8' >
        <ContactForm />
        <ContactRightSide />
      </Flex>



    </Flex>
  )
}

export { Contact }
