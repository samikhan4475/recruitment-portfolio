import React from 'react'
import { HomeCard } from './home-card'
import { MainHomeSection } from './main-home-section'
import { Flex } from '@radix-ui/themes'

const Home = () => {
  return (
    <Flex gap='4' direction='column' my='6'>
      <MainHomeSection/>
      <HomeCard/>
    </Flex>
  )
}

export  {Home}
