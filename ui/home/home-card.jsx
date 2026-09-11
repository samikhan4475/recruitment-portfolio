import {  HomeData } from './home-data'
import { Flex, Grid, Text } from '@radix-ui/themes'

const HomeCard = () => {
    return (
       <Grid columns={{
		initial: "1",
        xs:'2',
        sm:'2',
		md: "3",
		lg: "4",
	}} gap="6">
            {HomeData.map((homeData, index) => {
                const Icon = homeData.icon

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
                          <Icon/>
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
