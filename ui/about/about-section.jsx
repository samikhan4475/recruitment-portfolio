import { Flex, Text } from '@radix-ui/themes'
import React from 'react'

const AboutSection = () => {
    return (
        <Flex align='center' gap='3'>
            <Flex align='center' justify='center' className='bg-[#cadcfc]! p-14 rounded-lg' width='25%'>
                <Flex gap='3' direction='column' align='center'>
                    <img src="https://api.groupdocs.app/files/Source/067f9386-0dfe-41c3-ab1b-023b359c1c96/1/Image%200.png?AWSAccessKeyId=588NCTLK5ZPFUYEA2E4A&Expires=1788812483&Signature=WABEf2AlfUern5k5Ao46FysKYD4%3D" alt="" height='86px' width='86px' />
                    <Text className='text-sm font-bold text-[#1e2761]'>YOUR PHOTO HERE</Text>
                </Flex>
            </Flex>
            <Flex direction='column' gap='3' width='70%'>
                <Text className='text-[16.6667px] text-[#6b7280]'>
                    I'm a freelance recruitment specialist with 5+ years of experience placing candidates across Oil & Gas, Petrochemical, IT, Non-IT, Facility Management, F&B and Corporate functions — for startups and enterprises worldwide. I work as an extension of your internal team, managing sourcing, screening and coordination end-to-end so you only meet candidates worth interviewing.
                </Text>
                <Text className='text-[16.6667px] text-[#6b7280]'>

                    Based remotely and working across time zones, I've supported hiring teams in the US, UK, Europe and the GCC region, combining local market knowledge with a fast, transparent process.
                </Text>
            </Flex>
        </Flex>
    )
}

export { AboutSection }
