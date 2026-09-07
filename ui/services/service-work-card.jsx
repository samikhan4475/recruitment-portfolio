import { Flex, Grid, Text } from '@radix-ui/themes'
import { ServicesWorksData } from './service-work-data'

const ServiceWorkCard = () => {
    return (
        <Grid columns="4" gap="6">
            {ServicesWorksData.map((servicesWork, index) => {
                const isImage = servicesWork.icon
                return (
                    <Flex
                        key={index}
                        gap="5"
                        direction="column"
                        className="p-7"
                    >
                        <Flex align="center" gap="4">
                            <Flex
                                align="center"
                                justify="center"
                                className="h-12 w-12 shrink-0 rounded-full bg-[#1e2761] text-white"
                            >
                                {isImage ? (
                                    <img
                                        src={servicesWork.icon}
                                        alt={servicesWork.title}
                                        className="h-6 w-6 object-contain"
                                    />
                                ) : (
                                    <span>{servicesWork.step}</span>
                                )}
                            </Flex>


                        </Flex>
                        <Flex direction='column' gap='4'>

                            <Text className="text-[#1e2761] text-[16.6667px] font-bold">
                                {servicesWork.title}
                            </Text>
                            <Text className="mt-1 text-[#6b7280] text-[13.3333px]">
                                {servicesWork.description}
                            </Text>
                        </Flex>
                    </Flex>
                )
            })}
        </Grid>
    )
}

export { ServiceWorkCard }
