import { Button, Flex, TextField } from '@radix-ui/themes'
import React from 'react'
import InputField from '../../app/text-field'

const ContactForm = () => {
    return (
        <Flex direction='column' gap='3' className='w-[60%]'>
            <InputField label='Full Name' />
            <InputField label='Email Address' />
            <InputField label='Company (optional)' />
            <InputField label='Message' className="h-32!" />
            <Button className='h-12! text-base bg-[#1e2761]! rounded-lg!'>Send Message</Button>
        </Flex>
    )
}

export { ContactForm }
