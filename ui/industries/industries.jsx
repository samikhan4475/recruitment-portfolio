import { Button, Flex, Grid, Text } from '@radix-ui/themes'
import { industriesData } from './industries-data'

const Industries = () => {
  return (
    <Flex gap="4" direction="column" mb='6'>
      <Flex direction="column" gap="1">
        <Text
          className="text-[#1e2761] xl:text-[37.3333px] md:text-[37.3333px] lg:text-[37.3333px] sm:text-[37.3333px] max-sm:text-[32px]"
          weight="bold"
        >
          Industries I Serve
        </Text>

        <Text className="text-[#6b7280] xl:text-[17.3333px] lg:text-[17.3333px] md:text-[17.3333px] sm:text-[17.3333px] max-sm:text-[15px]">
          Cross-sector recruitment expertise, built from real placements in
          each field.
        </Text>
      </Flex>

      <Grid columns={{
        initial: "1",
        xs: '2',
        sm: '2',
        md: "3",
        lg: "3",
      }} gap={{initial:'4',xs:'4',sm:"6"}}>
        {industriesData.map((industry, index) => {
          const isImage = industry.icon.startsWith('http')

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
                  {isImage ? (
                    <img
                      src={industry.icon}
                      alt={industry.title}
                      className="h-6 w-6 object-contain"
                    />
                  ) : (
                    <span>{industry.icon}</span>
                  )}
                </Flex>

                <Text className="text-[#1e2761] text-[16.6667px] font-bold">
                  {industry.title}
                </Text>
              </Flex>

              <Text className="mt-1 text-[#6b7280] text-[13.3333px]">
                {industry.description}
              </Text>
            </Flex>
          )
        })}
      </Grid>


      <Flex gap={{initial:'4',xs:'4',sm:"1"}} className='bg-[#1e2761] flex-nowrap max-sm:flex-wrap sm:mt-14 max-sm:mt-8 p-5 rounded-xl' justify='between' align='center'>
        <Text
          className="text-white xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[15px]"
        >
          Don't see your industry listed? Let's talk about your specific hiring need.
        </Text>

        <Button className='h-12! text-[15.3333px] bg-white! text-[#1e2761]! rounded-lg! sm:w-[20%]! max-sm:w-full!'>Contact Me</Button>

      </Flex>
    </Flex>
  )
}

export { Industries }