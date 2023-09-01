import {
  Box,
  Checkbox,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import MainDashboard from '../MainDashboard';
import CategoryMenu from '../../../components/Dashboard/Menu/CategoryMenu.js';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Icon } from '@chakra-ui/icons';


export default function Menu() {
  return (
    <>
      <MainDashboard>
        <Stack p={'4'} gap={'8'}>
          {/* First Div Starts */}
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} gap={'4'}>
              <CustomHeading
                fontSize={'30px'}
                color={'#fff'}
                textAlign={'left'}
              >
                Enter your menu details
              </CustomHeading>
            </Box>
            <Box>
              <BorderButton Url={'./'} Btnctn={'Continue'} />
            </Box>
          </Stack>
          {/* First Div Ends */}

          {/* Second Div Starts */}
          <Stack direction={'row'} justifyContent={'space-between'} verticalAlign={'top'}>
            <Box w={'60%'} alignItems={'center'} gap={'4'}>
              <Stack w={'100%'}>
                <Box>
                  <Input
                    w={'100%'}
                    py={'6'}
                    placeholder={'Menu Name'}
                    type={'Text'}
                    fontSize={'14px'}
                    border={'1px solid #fff !important'}
                    borderRadius={'10px'}
                    fontWeight={500}
                    color={'#fff !important'}
                    _focus={{
                      border: '2px solid #fff !important',
                      borderColor: '#fff !important',
                      outline: '0px !impoartant',

                    }}
                    _placeholder={{ color: '#fff' }}
                  />
                  <Textarea
                    mt={'15px'}
                    py={'4'}
                    color={'#fff'}
                    borderRadius={'10px'}
                    height={'100px'}
                    placeholder={'Description'}
                    fontSize={'14px'}
                    border={'1px solid #fff !important'}
                    fontWeight={500}
                    borderColor={'primaryBlue.100'}
                    resize={'none'}
                    _focus={{
                      borderColor: 'primaryOrange.100',
                      outline: 'none',
                    }}
                    _placeholder={{ color: '#fff' }}
                  ></Textarea>
                </Box>
              </Stack>
            </Box>
            <CategoryMenu />
          </Stack>
          {/* Second Div Ends */}
        </Stack>
      </MainDashboard>
    </>
  );
}
