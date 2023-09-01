import { Stack } from '@chakra-ui/react'
import React from 'react'
import OrderDelivedList from './OrderDelivedList'

export default function index() {
  return (
    <div>
    <Stack maxH={'500px'} overflow={'scroll'} pr={'4'} gap={'3'}>
   <OrderDelivedList/>
   <OrderDelivedList/>
   <OrderDelivedList/>
   <OrderDelivedList/>
   <OrderDelivedList/>
   <OrderDelivedList/>
   <OrderDelivedList/>
  
  

  
    </Stack>
</div>
  )
}
