import {  HomeData } from './home-data'
import { Flex, Grid, Text } from '@radix-ui/themes'

const HomeCard = () => {
    return (
       <Grid columns="4" gap="6">
            {HomeData.map((homeData, index) => {
                const isImage = homeData.icon.startsWith('http')

                return (
                    <Flex
                        key={index}
                        gap="3"
                        direction="column"
                        className="bg-[#f4f6fb]! p-7 rounded-lg"
                    >
                        <Flex align="center" gap="2">
                            <Flex
                                align="center"
                                justify="center"
                                className="h-12 w-12 shrink-0 rounded-full bg-[#1e2761] text-white"
                            >
                                {isImage ? (
                                    <img
                                        src={homeData.icon}
                                        alt={homeData.title}
                                        className="h-6.25 w-6.25 object-contain"
                                    />
                                ) : (
                                    <span>{homeData.icon}</span>
                                )}
                            </Flex>


                        </Flex>
                        <Flex direction='column' gap='1'>

                            <Text className="text-[#1e2761] text-[24px] font-bold">
                                {homeData.title}
                            </Text>
                            <Text className="mt-1 text-[#6b7280] text-[13.3333px]">
                                {homeData.description}
                            </Text>
                        </Flex>
                    </Flex>
                )
            })}
        </Grid>
    )
}

export { HomeCard }
