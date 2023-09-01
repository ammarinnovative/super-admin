import { Box, Container, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import FeaturedBar from '../Featured/FeaturedBar'
import CustomHeading from '../Headings/CustomHeading'

export default function AllBars() {
  return (
    <>
    <Stack
        py={36}
        mt={'0 !important'}
      >
        <Container 
          maxW={'6xl'}
          p={{ base: '15px !important', '2xl': 0 }}
        >
            <Stack>
                <Box mb={'10'}>
                    <CustomHeading  color={'wcolor.100'}>All Bars</CustomHeading>
                </Box>
                <Flex alignItems={"center"} direction={{base:"column",lg:"row"}} gap={'4'}>
                    <FeaturedBar/>
                    <FeaturedBar/>
                </Flex>
            </Stack>
        </Container>
        </Stack>
    </>
  )
}
