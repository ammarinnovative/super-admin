import { Box, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import MainDashboard from '../MainDashboard';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import OrderBox from '../../../components/Dashboard/Order/OrderBox';
import OrderSalesCharts from '../../../components/Dashboard/Order/OrderSalesCharts';
import NightlyReports from '../../../components/Dashboard/Order/NightlyReports';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Index() {
  // console.log(JSON.parse(localStorage.getItem('user')));
  const navigate = useNavigate();

  const user = useSelector(state => state?.value);

  useEffect(() => {
    console.log(user);
    if (!user) {
      navigate('/dashboard/login');
    }
  }, [user]);

  return (
    <>
      <MainDashboard title={'Home'}>
        <Stack p={'4'} gap={'8'}>
          <Stack>
            <CustomHeading textAlign={'left'} fontSize={'30px'} color={'#fff'}>
              Orders
            </CustomHeading>
          </Stack>
          <Stack
            flexWrap={'wrap'}
            spacing={'0'}
            direction={'row'}
            // gap={{ '2xl': '6', md: '4',lg:"6" }}
            gap={"20px"}
          >
            <OrderBox />
            <OrderBox />
            <OrderBox />
            <OrderBox />
            <OrderBox />
          </Stack>
          <Stack
            direction={{base:"column",lg:"row"}}
            gap={'4'}
            display={{base:"none",lg:"block"}}
          >
            <Stack w={{ '2xl': '50%', lg: '100%' }}>
              <NightlyReports />
            </Stack>
            <Stack w={"100%"}>
              <OrderSalesCharts />
            </Stack>
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
