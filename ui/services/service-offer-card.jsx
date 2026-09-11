import React from 'react'
import { servicesOfferData } from './service-offer-data'
import { Flex, Grid, Text } from '@radix-ui/themes'

const ServiceOfferCard = () => {
    return (
        <Grid columns={{
        initial: "1",
        xs: '2',
        sm: '3',
        md: "4",
        lg: "4",
      }} gap="6">
            {servicesOfferData.map((servicesOffer, index) => {
                const Icon = servicesOffer.icon

                return (
                    <Flex
                        key={index}
                        gap="5"
                        direction="column"
                        className="bg-[#f4f6fb]! p-7 rounded-lg"
                    >
                        <Flex align="center" gap="4">
                            <Flex
                                align="center"
                                justify="center"
                                className="h-12 w-12 shrink-0 rounded-full bg-[#1e2761] text-white"
                            >
                               <Icon/>
                            </Flex>


                        </Flex>
                        <Flex direction='column' gap='3'>

                            <Text className="text-[#1e2761] text-[16.6667px] font-bold">
                                {servicesOffer.title}
                            </Text>
                            <Text className="mt-1 text-[#6b7280] text-[13.3333px]">
                                {servicesOffer.description}
                            </Text>
                        </Flex>
                    </Flex>
                )
            })}
        </Grid>
    )
}

export { ServiceOfferCard }
