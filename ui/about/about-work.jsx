import { AboutWorkData } from './about-work-data'
import { Flex, Grid, Text } from '@radix-ui/themes'

const AboutWork = () => {
    return (
        <Flex gap="2" direction="column">
            <Text
                className="text-[#1e2761] text-[20px]"
                weight="bold"
            >
                Why Work With Me
            </Text>

            <Grid columns={{
                initial: "1",
                xs: '2',
                sm: '2',
                md: "3",
                lg: "3",
            }} gap="6">
                {AboutWorkData.map((aboutWork, index) => {
                    const isImage = aboutWork.icon.startsWith('http')

                    return (
                        <Flex
                            key={index}
                            gap="5"
                            direction="column"
                            className="lg:p-7 md:p-7 md:py-5  sm:p-7 max-sm:px-0 max-sm:py-4"
                        >
                            <Flex align="center" gap="4">
                                <Flex
                                    align="center"
                                    justify="center"
                                    className="h-12 w-12 shrink-0 rounded-full bg-[#1e2761] text-white"
                                >
                                    {isImage ? (
                                        <img
                                            src={aboutWork.icon}
                                            alt={aboutWork.title}
                                            className="h-6 w-6 object-contain"
                                        />
                                    ) : (
                                        <span>{aboutWork.icon}</span>
                                    )}
                                </Flex>
                                <Flex direction='column' gap='3'>
                                    <Text className="text-[#1e2761] text-[15.3333px] font-bold">
                                        {aboutWork.title}
                                    </Text>
                                    <Text className="mt-1 text-[#6b7280] text-[12.6667px]">
                                        {aboutWork.description}
                                    </Text>
                                </Flex>
                            </Flex>


                        </Flex>
                    )
                })}
            </Grid>
        </Flex>
    )
}

export { AboutWork }
