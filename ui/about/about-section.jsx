import { Flex, Text } from '@radix-ui/themes'
import { Users } from 'lucide-react'

const AboutSection = () => {
    return (
        <Flex align='center' gap='6' className='md:flex-row sm:flex-col max-sm:flex-col'>
            <Flex align='center' justify='center' className='bg-[#cadcfc]! p-14 rounded-lg  lg:w-[25%] md:w-[25%] sm:w-full max-sm:w-full'>
                <Flex gap='3' direction='column' align='center'>
                    <Users width='86px' height='86px' color='#1e2761' />
                    <Text className='text-sm font-bold text-[#1e2761]'>YOUR PHOTO HERE</Text>
                </Flex>
            </Flex>
            <Flex direction='column' gap='3' className='lg:w-[70%] md:w-[70%] sm:w-full max-sm:w-full' >
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
