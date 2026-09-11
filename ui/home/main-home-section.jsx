import { Button, Flex, Text } from '@radix-ui/themes'
import { Users } from 'lucide-react'
import React from 'react'
const mainSectionList = [{
    title: 'Oil & Gas',
}, {
    title: 'Petrochemical',
}, {
    title: 'IT & Non-IT',
}, {
    title: 'Facility Management',
},
    , {
    title: 'F&B',
},
]
const MainHomeSection = () => {
    return (
        <Flex gap='3' className='lg:flex-row md:flex-row sm:flex-col max-sm:flex-col'>
            <Flex direction='column' gap={{
                initial: "5",
                xs: '5',
                sm: '6',
                md: "7",
                lg: "7",
            }} >
                <Text className='lg:text-[40px]! md:text-[30px]! sm:text-[35px]! max-sm:text-[35px]! text-[#1e2761] w-[60%]! xl:w-[70%]! lg:w-[70%]! md:w-full! sm:w-full! max-sm:w-full! font-bold '>
                    Connecting World-Class Talent with Global Opportunities
                </Text>
                <Text className='lg:text-[18.6667px] md:text-[16.6667px] text-[#6b7280] xl:w-[69%]! lg:w-[45%]! md:w-[64%]! sm:w-full! max-sm:w-full!'>
                    Freelance Recruitment Specialist helping companies across multiple industries and regions hire top talent, faster.
                </Text>
                <Flex gap='2'>
                    <Button className='h-12! text-sm bg-[#1E2761]! text-white! rounded-lg! lg:w-[20%]! md:w-[30%]! sm:w-[40%]! max-sm:w-[50%]!'>
                        Hire Me</Button>
                    <Button className='h-12! text-sm bg-white! border-[3px]! border-solid! border-[#1E2761]! hover:bg-[#1E2761]! hover:text-white! text-[#1E2761]! rounded-lg!  lg:w-[20%]! md:w-[30%] sm:w-[40%]! max-sm:w-[50%]!'> View Services</Button>

                </Flex>
                <Flex gap='4' className='lg:flex-nowrap md:flex-wrap sm:flex-wrap  max-sm:flex-wrap'>
                    {mainSectionList.map((el, index) => (
                        <Flex className='bg-[#f4f6fb] p-2 px-5 rounded-xl  border-2! border-solid! border-[#cadcfc]!' key={index}>
                            <span className='text-[#1e2761] text-xs font-bold'>
                                {el.title}
                            </span>
                        </Flex>
                    ))}

                </Flex>
            </Flex>



            <Flex align='center' justify='center'  className='bg-[#cadcfc]! text-center! h-68.25! p-10 rounded-lg md:w-[35%] sm:w-full max-sm:w-full!'   >
                <Flex gap='6' direction='column' align='center'>
                   
                    <Users width='86px' height='86px' color='#1e2761' />
                    <Text className='text-sm font-bold text-[#1e2761]'>YOUR PHOTO / BRAND VISUAL</Text>
                </Flex>
            </Flex>

        </Flex>
    )
}

export { MainHomeSection }
