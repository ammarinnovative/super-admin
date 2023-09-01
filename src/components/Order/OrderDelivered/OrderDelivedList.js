import React from 'react';
import { Avatar, Box, Img, Stack, Text } from '@chakra-ui/react';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import CustomHeading from '../../Website/Headings/CustomHeading';
import { Icon } from '@chakra-ui/icons';
import { AiOutlineCheck } from 'react-icons/ai';
import Beer from '../../../assets/images/menu/beer.png'


export default function OrderDelivedList() {
  return (
    <>
     <div>
      <Stack
        py={'2'}
        px={'6'}
        borderRadius={'12'}
        border={'1px solid #B92122'}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Stack gap={'3'} alignItems={'center'} direction={'row'}>
         <Img src={Beer} w={'45px'} />
          {/* <Stack>
            <Stack>
              <CustomHeading
                color={'white'}
                textAlign={'left'}
                mb={'0'}
                fontSize={'16px'}
              >
                Micheal Farwada
              </CustomHeading>
              <CustomPara color={'primaryText.200'}>Wilson</CustomPara>
            </Stack>
          </Stack> */}
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
            Time/Day
          </CustomPara>
          <CustomHeading
            textAlign={'left'}
            color={'brand.800'}
            fontSize={'15px'}
          >
            4:00 am | Thu
          </CustomHeading>
        </Box>

        <Box>
        <Text   fontWeight={'900'} marginBottom={0} color={'brand.800'}>
        <Icon  pr={'1'} fontSize={'20px'} as={AiOutlineCheck} color={'#79C126'} />
            <Text verticalAlign={'bottom'} as={'span'} color={'#B92122'} fontSize={'20px'}>
              Delivered
            </Text>
        </Text>
         
        </Box>
      </Stack>
    </div>
    </>
  )
}
