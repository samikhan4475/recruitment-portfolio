import React from 'react'
import { Flex, Text } from "@radix-ui/themes";
import { ContactForm } from './contact-form';
import { ContactRightSide } from './contact-right-side';

const Contact = () => {
  return (
    <Flex gap='4' direction='column' my='6'>
      <Flex direction='column' gap='1'>
        <Text className='text-[#1e2761] text-4xl'>Let's Work Together</Text>
        <Text className='text-[#6b7280] text-[17px]'>Tell me about your hiring need and I'll get back to you within 24 hours.</Text>
      </Flex>
      <Flex gap={{initial:'4',xs:'4',sm:'4',md:'4',lg:'8'}} direction={{initial:'column',xs:'column',sm:'row',md:'row',lg:'row'}} >
        <ContactForm />
        <ContactRightSide />
      </Flex>



    </Flex>
  )
}

export { Contact }
