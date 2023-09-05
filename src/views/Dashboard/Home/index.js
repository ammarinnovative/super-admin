<<<<<<< HEAD
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
=======
import { Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
>>>>>>> parent of 102f974 (lelo)
import MainDashboard from '../MainDashboard';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import OrderBox from '../../../components/Dashboard/Order/OrderBox';
import OrderSalesCharts from '../../../components/Dashboard/Order/OrderSalesCharts';
import BarOwners from '../../../components/Dashboard/Order/BarOwners';
import NightlyReports from '../../../components/Dashboard/Order/NightlyReports';
<<<<<<< HEAD
import { AiFillPlusCircle } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/react';
import { imgUrl } from '../../../utilities/Config';
import { useSelector } from 'react-redux';
=======
import { AiFillPlusCircle } from 'react-icons/ai'
import { Icon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/react'
>>>>>>> parent of 102f974 (lelo)
import cat1 from '../../../assets/images/menu/c1.jpg';
import Users from '../../../assets/images/users.png';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import { Link as ReactLink } from 'react-router-dom';
<<<<<<< HEAD
import { GET } from '../../../utilities/ApiProvider';

export default function Index() {
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  const selector = useSelector(state => state);

  useEffect(() => {
    if (selector) {
      setUser(selector?.value);
    }
  }, [selector]);

  const getData = async () => {
    const res = await GET('admin/home', {
      authorization: `bearer ${user?.verificationToken}`,
    });
    setData(res?.data);
  };

  useEffect(() => {
    if (user) {
      getData();
    }
  }, [user]);
  console.log(data);

=======

export default function Index() {
>>>>>>> parent of 102f974 (lelo)
  return (
    <>
      <MainDashboard title={'Home'}>
        {/* First row stack starts */}
        <Stack p={'4'} direction={'row'}>
          <Stack mb={'6'} direction={'row'} w={'30%'}>
            {/* Upload menu icon div starts */}
            <Box>
<<<<<<< HEAD
              <CustomHeading
                textAlign={'left'}
                fontSize={'30px'}
                color={'#fff'}
              >
                Manage Your Menu <br /> Items
              </CustomHeading>
              <Text color={'#fff'} opacity={'0.4'}>
                Upload your menu to click on the <br /> plus icon
              </Text>
            </Box>
            <Box pl={'20px'}>
=======
              <CustomHeading textAlign={'left'} fontSize={'30px'} color={'#fff'}>
                Manage Your Menu <br /> Items
              </CustomHeading>
              <Text
                color={'#fff'}
                opacity={'0.4'}
              >
                Upload your menu to click on the <br /> plus icon
              </Text>
            </Box>
            <Box
              pl={'20px'}
            >
>>>>>>> parent of 102f974 (lelo)
              <Text
                p={'50px 30px'}
                border={'dotted 2px #fff'}
                borderRadius={'12px'}
              >
<<<<<<< HEAD
                <Link as={ReactLink} to={'/dashboard/AddNewMenu'}>
                  <Icon
                    color={'#fff'}
                    fontSize={'30px'}
                    as={AiFillPlusCircle}
=======
                <Link
                  as={ReactLink} 
                  to={'/dashboard/AddNewMenu'}
                >
                  <Icon
                    color={'#fff'}
                    fontSize={'30px'}
                    as={AiFillPlusCircle} 
>>>>>>> parent of 102f974 (lelo)
                  />
                </Link>
              </Text>
            </Box>
            {/* Upload menu icon div Ends */}
          </Stack>

          <Stack pb={'20'} pl={'25px'} gap={'6'}>
            {/* <OrderBox /> */}
            <Box w={'100%'} display={'inline-block'} direction={'row'}>
              <Flex>
                <Box display={'inline-block'} w={'79%'}>
<<<<<<< HEAD
                  <CustomHeading
                    textAlign={'left'}
                    fontSize={'20px'}
                    color={'#fff'}
                  >
                    Recenet Menu
                  </CustomHeading>
                </Box>
                <Box display={'inline-block'} w={'19%'}>
                  <BorderButton Url={'/'} flex="1" Btnctn={'View All Menu'} />
=======
                  <CustomHeading textAlign={'left'} fontSize={'20px'} color={'#fff'}>
                    Recenet Menu
                  </CustomHeading>
                </Box>
                <Box display={'inline-block'} w={'19%'} >
                  <BorderButton Url={'/'} flex='1' Btnctn={'View All Menu'} />
>>>>>>> parent of 102f974 (lelo)
                </Box>
              </Flex>
            </Box>
            <Stack direction={'row'} gap={'4'}>
<<<<<<< HEAD
              {data?.recentMenu?.length > 0 ? (
                data?.recentMenu?.map(item => {
                  return (
                    <Link>
                      <Box
                        key={item?._id}
                        position={'relative'}
                        pr={'4'}
                        display={'flex'}
                        justifyContent={'right'}
                        alignItems={'flex-end'}
                        borderRadius={'8px'}
                        h={'125px'}
                        w={'198px'}
                        zIndex={'1'}
                        backgroundImage={imgUrl + item?.category_image}
                        _before={{
                          content: "''",
                          w: '100%',
                          h: '100%',
                          position: 'absolute',
                          bg: '#000',
                          right: '0',
                          left: '0',
                          zIndex: '-1',
                          borderRadius: '6px',
                          opacity: '0.6',
                        }}
                      >
                        <CustomHeading
                          fontSize={'25px'}
                          fontWeight={'700'}
                          color={'#fff'}
                        >
                          {item?.name}
                        </CustomHeading>
                      </Box>
                    </Link>
                  );
                })
              ) : (
                <Text fontSize={'18px'} color={'white'}>
                  No Data Found
                </Text>
              )}
=======
              <Link>
                <Box
                  position={'relative'}
                  pr={'4'}
                  display={'flex'}
                  justifyContent={'right'}
                  alignItems={'flex-end'}
                  borderRadius={'8px'}
                  h={'125px'}
                  w={'198px'}
                  zIndex={'1'}
                  backgroundImage={cat1}
                  _before={{
                    content: "''",
                    w: '100%',
                    h: '100%',
                    position: 'absolute',
                    bg: '#000',
                    right: '0',
                    left: '0',
                    zIndex: '-1',
                    borderRadius: '6px',
                    opacity: '0.6'
                  }}
                >
                  <CustomHeading
                    fontSize={'25px'}
                    fontWeight={'700'}
                    color={'#fff'}
                  >
                    Spirits
                  </CustomHeading>
                </Box>
              </Link>
              <Link>
                <Box
                  position={'relative'}
                  pr={'4'}
                  display={'flex'}
                  justifyContent={'right'}
                  alignItems={'flex-end'}
                  borderRadius={'8px'}
                  h={'125px'}
                  w={'198px'}
                  zIndex={'1'}
                  backgroundImage={cat1}
                  _before={{
                    content: "''",
                    w: '100%',
                    h: '100%',
                    position: 'absolute',
                    bg: '#000',
                    right: '0',
                    left: '0',
                    zIndex: '-1',
                    borderRadius: '6px',
                    opacity: '0.6'
                  }}
                >
                  <CustomHeading
                    fontSize={'25px'}
                    fontWeight={'700'}
                    color={'#fff'}
                  >
                    Spirits
                  </CustomHeading>
                </Box>
              </Link>
              <Link>
                <Box
                  position={'relative'}
                  pr={'4'}
                  display={'flex'}
                  justifyContent={'right'}
                  alignItems={'flex-end'}
                  borderRadius={'8px'}
                  h={'125px'}
                  w={'198px'}
                  zIndex={'1'}
                  backgroundImage={cat1}
                  _before={{
                    content: "''",
                    w: '100%',
                    h: '100%',
                    position: 'absolute',
                    bg: '#000',
                    right: '0',
                    left: '0',
                    zIndex: '-1',
                    borderRadius: '6px',
                    opacity: '0.6'
                  }}
                >
                  <CustomHeading
                    fontSize={'25px'}
                    fontWeight={'700'}
                    color={'#fff'}
                  >
                    Spirits
                  </CustomHeading>
                </Box>
              </Link>
              <Link>
                <Box
                  position={'relative'}
                  pr={'4'}
                  display={'flex'}
                  justifyContent={'right'}
                  alignItems={'flex-end'}
                  borderRadius={'8px'}
                  h={'125px'}
                  w={'198px'}
                  zIndex={'1'}
                  backgroundImage={cat1}
                  _before={{
                    content: "''",
                    w: '100%',
                    h: '100%',
                    position: 'absolute',
                    bg: '#000',
                    right: '0',
                    left: '0',
                    zIndex: '-1',
                    borderRadius: '6px',
                    opacity: '0.6'
                  }}
                >
                  <CustomHeading
                    fontSize={'25px'}
                    fontWeight={'700'}
                    color={'#fff'}
                  >
                    Spirits
                  </CustomHeading>
                </Box>
              </Link>
>>>>>>> parent of 102f974 (lelo)
            </Stack>
          </Stack>
        </Stack>
        {/* First row stack Ends */}

        {/* Second row stack starts */}
<<<<<<< HEAD
        <Stack
          direction={'row'}
          alignItems={'flex-end'}
          justifyContent={'space-between'}
        >
=======
        <Stack direction={'row'} alignItems={'flex-end'} justifyContent={'space-between'}>
>>>>>>> parent of 102f974 (lelo)
          <Box w={'60%'} p={'0px 10px'}>
            <OrderSalesCharts />
          </Box>
          <Box w={'40%'} p={'0px 10px'}>
<<<<<<< HEAD
            <BarOwners data={data?.registeredBars} />
=======
            <BarOwners />
>>>>>>> parent of 102f974 (lelo)
          </Box>
        </Stack>
        {/* Second row stack Ends */}

<<<<<<< HEAD
=======

>>>>>>> parent of 102f974 (lelo)
        {/* Third row stack Starts */}
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
            w={'49%'}
            p={'0px 10px'}
          >
            <Box bg={'#212121'} p={'4'} w={'49%'}>
<<<<<<< HEAD
              <Text color={'#fff'} opacity={'0.4'} fontSize={'22px'}>
                Total Menu
              </Text>
              <Text color={'#f40095'} fontSize={'40px'}>
                45
              </Text>
              <Link as={ReactLink} to={'/dashboard/menu'} color={'#fff'}>
                View All
              </Link>
            </Box>
            <Box bg={'#212121'} p={'4'} w={'50%'}>
              <Text color={'#fff'} opacity={'0.4'} fontSize={'22px'}>
                Active User's
              </Text>
              <Text color={'#f40095'} fontSize={'40px'}>
                1,025
              </Text>
              <Link as={ReactLink} to={'/dashboard/users'} color={'#fff'}>
                View All
              </Link>
            </Box>
          </Stack>
          <Stack w={'49%'} p={'0px 10px'}>
            <Stack p={'4'}>
              <Text color={'#fff'} fontSize={'22px'}>
                User Activities
              </Text>
=======
              <Text color={'#fff'} opacity={'0.4'} fontSize={'22px'}>Total Menu</Text>
              <Text color={'#f40095'} fontSize={'40px'}>45</Text>
              <Link as={ReactLink} to={'/dashboard/menu'} color={'#fff'}>View All</Link>
            </Box>
            <Box bg={'#212121'} p={'4'} w={'50%'}>
              <Text color={'#fff'} opacity={'0.4'} fontSize={'22px'}>Active User's</Text>
              <Text color={'#f40095'} fontSize={'40px'}>1,025</Text>
              <Link as={ReactLink} to={'/dashboard/users'} color={'#fff'}>View All</Link>
            </Box>
          </Stack>
          <Stack
            w={'49%'}
            p={'0px 10px'}
          >
            <Stack
              p={'4'}
            >
              <Text color={'#fff'} fontSize={'22px'}>User Activities</Text>
>>>>>>> parent of 102f974 (lelo)
              <Stack
                alignItems={'center'}
                justifyContent={'space-between'}
                direction={'row'}
              >
<<<<<<< HEAD
                <AvatarGroup max={4}>
                  {data?.userActivities?.length > 0 ? (
                    data?.userActivities?.map(item => {
                      return (
                        <Avatar
                          key={item?._id}
                          name={item?.username}
                          src={`${imgUrl}${item?.profile_picture}`}
                        />
                      );
                    })
                  ) : (
                    <Text fontSize={'17px'} color={'white'}>
                      No Data Found
                    </Text>
                  )}
                </AvatarGroup>
                <Box>
                  <BorderButton
                    Url={'/dashboard/users'}
                    flex="1"
                    Btnctn={'View All Users'}
                  />
=======
                <Box>
                  <Image w={'70%'} mt={'10px'} src={Users} />
                </Box>
                <Box>
                  <BorderButton Url={'/dashboard/users'} flex='1' Btnctn={'View All Users'} />
>>>>>>> parent of 102f974 (lelo)
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        {/* Third row stack Ends */}
<<<<<<< HEAD
=======

>>>>>>> parent of 102f974 (lelo)
      </MainDashboard>
    </>
  );
}
