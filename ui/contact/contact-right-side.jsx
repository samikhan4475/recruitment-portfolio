import React from 'react'
import { contactData } from './contact-data';
import { Button, Flex, Text } from '@radix-ui/themes';
import { Mail, MessageCircle } from 'lucide-react';

const ContactRightSide = () => {
    return (


        <Flex direction='column' gap='9' className='bg-[#1E2761]  md:w-[40%] sm:w-full p-7 rounded-xl'>
            <Flex direction='column' gap='5'>
                {contactData.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <Flex
                            key={index}
                            align="center"
                            gap="3"
                            className="text-white"
                        >
                            <Flex
                                align="center"
                                justify="center"
                                className="h-11 w-11 shrink-0 rounded-full bg-[#c9dafb] text-[#202b70]"
                            >
                                <Icon size={22} />
                            </Flex>



                            <Text className="mt-1 block text-[14px]">
                                {item.value}
                            </Text>
                        </Flex>
                    );
                })}
            </Flex>

            <Flex gap='2'>
                <Button className='h-12! sm:text-sm max-sm:text-[12px]! bg-white! text-[#1E2761]! rounded-lg! w-[50%]!'>
                  <Mail/>  Email Me</Button>
                <Button className='h-12! sm:text-sm max-sm:text-[12px]! bg-white! text-[#1E2761]! rounded-lg! w-[50%]!'><MessageCircle/> WhatsApp Me</Button>

            </Flex>
        </Flex>

    )
}

export { ContactRightSide }
