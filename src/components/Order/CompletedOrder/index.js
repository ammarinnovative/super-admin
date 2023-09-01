import { Stack } from '@chakra-ui/react'
import React from 'react'
import CompleteOrderList from './CompleteOrderList'

export default function index() {
  return (
    <div>
    <Stack maxH={'500px'} overflow={'scroll'} pr={'4'} gap={'3'}>
   <CompleteOrderList/>
   {/* <CompleteOrderList/>
   <CompleteOrderList/>
   <CompleteOrderList/>
   <CompleteOrderList/> */}
   
  

  
    </Stack>
</div>
  )
}
