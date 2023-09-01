import React from 'react'
import { Box, Stack, Text } from '@chakra-ui/react';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';


export default function Tiplist() {
  return (
    <div>
         <Stack py={'3'} px={'5'} borderRadius={'12'} border={'1px solid #717171'} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Box>
                <CustomPara fontWeight={'900'} marginBottom={0} color={'#fff'}>Ross Emery Given you</CustomPara>
              
            </Box>
            <Box>
                <CustomPara fontWeight={'900'} marginBottom={0} color={'brand.800'}>Order ID # 4215</CustomPara>
                
            </Box>
            <Box>
                <CustomPara fontWeight={'900'} marginBottom={0} color={'brand.800'}><Text color={'pHeading.100'} as={'span'}>10%</Text> of $2.35</CustomPara>
            </Box>
           
            <Box>
                <CustomPara fontWeight={'900'} marginBottom={0} color={'brand.800'}> = <Text as={'span'} color={'#75BA26'}>$1.21</Text> </CustomPara>
               
            </Box>
            
          </Stack>
    </div>
  )
}
