import { Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import Tiplist from '../../../components/Order/Tips/Tiplist';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';

import OrderDashboard from '../Orderdasboard';

export default function Tips() {
  return (
    <>
      <OrderDashboard>
        <Stack p={'6'} gap={'8'}>
          <Stack gap={'5'}>
          <CustomHeading
            textAlign={'left'}
            color={'#fff'}
            fontWeight={'700'}
            fontSize={'35px'}
          >
            Tips Earned
          </CustomHeading>
          <Stack maxH={'700px'} overflow={'scroll'} pr={'4'} gap={'3'}>
         <Tiplist/>
         <Tiplist/>
         <Tiplist/>
         <Tiplist/>
         <Tiplist/>
         <Tiplist/>
         <Tiplist/>
         <Tiplist/>
         <Tiplist/>
          </Stack>
          <Stack>
            <Flex justifyContent={'right'} gap={'4'} alignItems={'center'}>
              <CustomPara color={'brand.800'} fontWeight={'700'} fontSize={'20px'}>Total Earning</CustomPara>
              <CustomHeading fontSize={'30px'} fontWeight={'700'}>$65.21</CustomHeading>
            </Flex>
          </Stack>
          </Stack>
        </Stack>
      </OrderDashboard>
    </>
  );
}
