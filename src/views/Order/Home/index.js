import { Icon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Link,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import React from 'react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import OrderDashboard from '../Orderdasboard';
import { AiOutlineSearch } from 'react-icons/ai';
import CurrentOrder from '../../../components/Order/CurrentOrder/index.js';
import OrderMenu from '../../../components/Order/OrderMenu/OrderMenu';
import CompleteOrder from '../../../components/Order/CompletedOrder/index.js';
import OrderDelived from '../../../components/Order/OrderDelivered/index.js';

export default function Index() {

    const tb = {
        fontSize : '20px',
        fontWeight : '700',
        borderBottom : '0px solid'
    }

  return (
    <div>
      <OrderDashboard>
        <Stack p={'6'} gap={'8'}>
          <Stack gap={'8'}>
            <Stack gap={'12'} direction={{base:"column",lg:"row"}}>
              <Stack>
                <CustomHeading
                  textAlign={{base:"center",lg:"left"}}
                  color={'#fff'}
                  fontWeight={'700'}
                  fontSize={'35px'}
                >
                  Orders
                </CustomHeading>
              </Stack>
              <Stack>
                <FormControl minW={'350px'} position={'relative'}>
                  <Input
                    boxShadow="lg"
                    color={'#fff'}
                    py={'6'}
                    borderRadius={'6'}
                    bg={'#242424'}
                    border={'0px solid #fff !important'}
                    _placeholder={{ color: '#fff' }}
                    placeholder="Search"
                  />
                  <Button
                    bg={'transparent'}
                    bottom={'3px'}
                    zIndex={'2'}
                    right={'0'}
                    position={'absolute'}
                  >
                    <Icon
                      color={'white'}
                      fontSize={'20px'}
                      as={AiOutlineSearch}
                    />
                  </Button>
                </FormControl>
              </Stack>
            </Stack>
           <OrderMenu/>
            <Stack>
              <Tabs colorScheme={'pink'} color={'primaryText.200'}>
                <TabList mb={'6'} display={"flex"} flexDirection={{base:"column",lg:"row"}} gap={'14'} borderBottom={'none'}>
                  <Tab sx={tb} _active={{bgColor:'transparent'}}>Current Orders</Tab>
                  <Tab sx={tb} _active={{bgColor:'transparent'}}>Completed Orders</Tab>
                  <Tab sx={tb} _active={{bgColor:'transparent'}}>Order Delivered</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                <CurrentOrder/>
                  </TabPanel>
                  <TabPanel>
                   <CompleteOrder/>
                  </TabPanel>
                  <TabPanel>
                   <OrderDelived/>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Stack>
          </Stack>
        </Stack>
      </OrderDashboard>
    </div>
  );
}
