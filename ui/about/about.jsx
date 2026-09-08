import React from 'react'
import { AboutWork } from './about-work'
import { Flex, Text } from '@radix-ui/themes'
import { AboutSection } from './about-section'

const About = () => {
  return (
    <Flex gap='4' direction='column' mb='6'>
      <Flex direction="column" gap="1">
        <Text
          className="text-[#1e2761] text-[37.3333px]"
          weight="bold"
        >
         About Me
        </Text>
        <Text className="text-[#6b7280] text-[17.3333px]">
        Freelance Recruitment Specialist with a global, multi-industry reach.
        </Text>
      </Flex>

      <AboutSection/>
      <AboutWork />
    </Flex>
  )
}

export { About }
