import { Stack } from '@chakra-ui/react'
import React from 'react'
import CurrentOrderList from './CurrentOrderList'

export default function Index() {
  return (
    <div>
          <Stack maxH={'500px'} overflow={'scroll'} pr={'4'} gap={'3'}>
         <CurrentOrderList/>  
          </Stack>
    </div>
  )
}
