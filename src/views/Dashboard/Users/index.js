import { Box, Button, Stack, Table, TableContainer, Tbody, Td, Text, Tr } from '@chakra-ui/react';
import React from 'react';
import MainDashboard from '../MainDashboard';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import OrderSalesCharts from '../../../components/Dashboard/Order/OrderSalesCharts';
import BorderButton from '../../../components/Website/Buttons/BorderButton';

export default function Index() {
  return (
    <>
      <MainDashboard title={'Home'}>

        {/* First row stack Starts */}
        <Stack
          alignItems={'center'}
          justifyContent={'space-between'}
          direction={'row'}
          mt={'25px'}
        >
          <Stack
            alignItems={'center'}
            justifyContent={'space-between'}
            direction={'row'}
            w={'100%'}
            p={'0px 10px'}
          >
            <Box bg={'#212121'} p={'4'} w={'49%'}>
              <Text color={'#f40095'} fontSize={'22px'}>Today Earn</Text>
              <Text color={'#fff'} fontSize={'40px'}>45</Text>
            </Box>
            <Box bg={'#212121'} p={'4'} w={'50%'}>
              <Text color={'#f40095'} fontSize={'22px'}>Total Revenue</Text>
              <Text color={'#fff'} fontSize={'40px'}>$24,251.00</Text>
            </Box>
            <Box bg={'#212121'} p={'4'} w={'50%'}>
              <Text color={'#f40095'} fontSize={'22px'}>Total Bar Registered Owners</Text>
              <Text color={'#fff'} fontSize={'40px'}>432</Text>
            </Box>
          </Stack>
        </Stack>
        {/* First row stack Ends */}


        {/* Second row stack starts */}
        <Stack mt={"20px"}>
          <Box w={'100%'} p={'0px 10px'} mb={'20px'}>
            <CustomHeading
              mb={'0'}
              textAlign={'left'}
              fontSize={'23px'}
              color={'#fff'}
            >
              Members Activities
            </CustomHeading>
            <Text color={'#fff'} fontSize={'18px'} opacity={'0.5'}>Manage, Total users, courses, tiers and their progress</Text>
          </Box>
          <Stack direction={'row'} w={'full'}>
            <Button bg={'pHeading.100'} color={'#fff'} px={'14'}>
              Team Members
            </Button>
            <Button>Blocked Members</Button>
          </Stack>
        </Stack>
        {/* Second row stack Ends */}


        {/* Third row stack starts */}
        <Stack mt={"30px"}>
          <Box w={'100%'} p={'0px 10px'}>
            <CustomHeading
              mb={'0'}
              textAlign={'left'}
              fontSize={'23px'}
              color={'#fff'}
            >
              4 Total Members
            </CustomHeading>
          </Box>

          <Box>

            <TableContainer>
              <Table variant='simple'>
                <Tbody>
                  <Tr>
                    <Td color={'#fff'} opacity={'0.5'}>Name:</Td>
                    <Td color={'#fff'} opacity={'0.5'}>Date:</Td>
                    <Td color={'#fff'} opacity={'0.5'}>Item</Td>
                    <Td color={'#fff'} opacity={'0.5'}>Pay:</Td>
                    <Td>
                      <BorderButton Url={'/dashboard/Users/usersdetails'} flex='1' Btnctn={'View Details'} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td color={'#fff'} opacity={'0.5'}>Name:</Td>
                    <Td color={'#fff'} opacity={'0.5'}>Date:</Td>
                    <Td color={'#fff'} opacity={'0.5'}>Item</Td>
                    <Td color={'#fff'} opacity={'0.5'}>Pay:</Td>
                    <Td>
                      <BorderButton Url={'/dashboard/Users/usersdetails'} flex='1' Btnctn={'View Details'} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td color={'#fff'} opacity={'0.5'}>Name:</Td>
                    <Td color={'#fff'} opacity={'0.5'}>Date:</Td>
                    <Td color={'#fff'} opacity={'0.5'}>Item</Td>
                    <Td color={'#fff'} opacity={'0.5'}>Pay:</Td>
                    <Td>
                      <BorderButton Url={'/dashboard/Users/usersdetails'} flex='1' Btnctn={'View Details'} />
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>

          </Box>


        </Stack>
        {/* Third row stack Ends */}




      </MainDashboard>
    </>
  );
}
