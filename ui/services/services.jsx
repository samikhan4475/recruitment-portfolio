import React from 'react'
import { ServiceOfferCard } from './service-offer-card'
import { Flex, Text } from '@radix-ui/themes'
import { ServiceWorkCard } from './service-work-card'

const Services = () => {
  return (
    <Flex gap="4" direction="column" mb='6'>
      <Flex direction="column" gap="1">
        <Text
          className="text-[#1e2761] xl:text-[37.3333px] md:text-[37.3333px] lg:text-[37.3333px] sm:text-[37.3333px] max-sm:text-[32px]"
          weight="bold"
        >
          What I Offer
        </Text>
        <Text className="text-[#6b7280] xl:text-[17.3333px] lg:text-[17.3333px] md:text-[17.3333px] sm:text-[17.3333px] max-sm:text-[15px]">
          End-to-end recruitment support across multiple industries, wherever you are in the world.
        </Text>
      </Flex>
      <ServiceOfferCard />
      <Flex direction='column' gap='3' className='mt-5'>
        <Text 
          className="text-[#1e2761] text-[20px]"
          weight="bold"
        >
          How It Works
        </Text>
        <ServiceWorkCard />
      </Flex>
    </Flex>


  )
}

export { Services }
