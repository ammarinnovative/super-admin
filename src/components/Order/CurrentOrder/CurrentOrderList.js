import React, { useState } from 'react';
import { Avatar, Box, Stack, Text } from '@chakra-ui/react';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import CustomHeading from '../../Website/Headings/CustomHeading';
import axios from 'axios';
import { useEffect } from 'react';
import { baseUrl } from '../../../utilities/Config';
import { GET } from '../../../utilities/ApiProvider';
import { useSelector } from 'react-redux';
import { current } from '@reduxjs/toolkit';

export default function CurrentOrderList() {
  const user = useSelector(state => state?.value);
  const [order, setOrder] = useState([{
    "current":[],
    "completed":[],
    "delivered":[],
  }]);

  const fetchCurrentOrder = async () => {
    const res = await GET(`bar/orders`, {
      authorization: `Bearer ${user?.verificationToken}`,
    });
    setOrder(res.data);
    console.log(res.data[1])
  };

  useEffect(() => {
    if (user) fetchCurrentOrder();
  }, [user]);

  console.log(order[0].current);
  return (
    <div>
      {order && order[0].current?.map((e)=>{
       return(
       <Stack
       py={'2'}
       px={'6'}
       borderRadius={'12'}
       border={'1px solid #dc0b9b'}
       direction={'row'}
       alignItems={'center'}
       justifyContent={'space-between'}
       mb={"10px"}
       key={e._id}
     >
       
       <Stack gap={'3'} alignItems={'center'} direction={'row'}>
         <Avatar
           size="lg"
           name="Prosper Otemuyiwa"
           src="https://bit.ly/prosper-baba"
         />
         <Stack>
           <Stack>
             <CustomHeading
               color={'white'}
               textAlign={'left'}
               mb={'0'}
               fontSize={'16px'}
             >
               
             </CustomHeading>
             <CustomPara color={'primaryText.200'}>{e.customer.username}</CustomPara>
           </Stack>
         </Stack>
       </Stack>
       <Box>
         <CustomPara fontWeight={'900'} marginBottom={0} color={'#fff'}>
           Product Name
         </CustomPara>
         <CustomHeading
           textAlign={'left'}
           color={'brand.800'}
           fontSize={'15px'}
         >
           Pale Alee
         </CustomHeading>
       </Box>
       <Box>
         <CustomPara fontWeight={'900'} marginBottom={0} color={'#fff'}>
           Order Type
         </CustomPara>
         <CustomHeading
           textAlign={'left'}
           color={'brand.800'}
           fontSize={'15px'}
         >
           Beer
         </CustomHeading>
       </Box>
       <Box>
         <CustomPara fontWeight={'900'} marginBottom={0} color={'#fff'}>
           Order ID
         </CustomPara>
         <CustomHeading
           textAlign={'left'}
           color={'brand.800'}
           fontSize={'15px'}
         >
           #51252
         </CustomHeading>
       </Box>

       <Box>
         <CustomPara fontWeight={'900'} marginBottom={0} color={'brand.800'}>
           {' '}
           ={' '}
           <Text as={'span'} color={'pHeading.100'} fontSize={'20px'}>
             {' '}
             ${e.totalPrice}
           </Text>{' '}
         </CustomPara>
       </Box>
     </Stack>
      )})}
      
    </div>
  );
}
