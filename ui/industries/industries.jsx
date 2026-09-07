import { Button, Flex, Grid, Text } from '@radix-ui/themes'
import { industriesData } from './industries-data'

const Industries = () => {
  return (
    <Flex gap="4" direction="column">
      <Flex direction="column" gap="1">
        <Text
          className="text-[#1e2761] text-[37.3333px]"
          weight="bold"
        >
          Industries I Serve
        </Text>

        <Text className="text-[#6b7280] text-[17.3333px]">
          Cross-sector recruitment expertise, built from real placements in
          each field.
        </Text>
      </Flex>

      <Grid columns="3" gap="6">
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


      <Flex  gap="1" className='bg-[#1e2761] mt-14 p-5 rounded-xl' justify='between' align='center'>
        <Text
          className="text-white text-[16px]"
        >
          Don't see your industry listed? Let's talk about your specific hiring need.
        </Text>

        <Button className='h-12! text-[15.3333px] bg-white! text-[#1e2761]! rounded-lg! w-[20%]!'>Contact Me</Button>

      </Flex>
    </Flex>
  )
}

export { Industries }