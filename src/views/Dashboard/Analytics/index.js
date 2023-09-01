import {
  Box,
  Flex,
  Image,
  Link,
  ListItem,
  Stack,
  UnorderedList,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { AiFillStar } from 'react-icons/ai';
import React, { useState } from 'react';
import MainDashboard from '../MainDashboard';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import OrderBox from '../../../components/Dashboard/Order/OrderBox';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import M1 from '../../../assets/images/menu/m1.jpg';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import Event1 from '../../../assets/images/event/e1.jpg';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      position: 'right',
      rtl: true,
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        padding: 20,
      },
    },
  },
};

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        '#B94F65',
        '#319FEA',
        '#776438',
        '#448484',
        '#694AA5',
        '#A56D36',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function Index() {
  const [localItem, setLocalItem] = useState(false);

  const navigate = useNavigate();

  const user = useSelector(state=>state?.value);
  useEffect(() => {
    if(!user){
      navigate("/dashboard/login");
    }
  }, [user]);

  return (
    <>
      <MainDashboard>
        <Stack p={'4'} gap={'6'}>
          <Stack>
            <CustomHeading textAlign={'left'} fontSize={'30px'} color={'pink.500'}>
              Overview
            </CustomHeading>
          </Stack>
          <Stack
            pb={'6'}
            spacing={'0'}
            flexWrap={'wrap'}
            direction={'row'}
            gap={'6'}
          >
            <OrderBox />
            <OrderBox />
            <OrderBox />
            <OrderBox />
            <OrderBox />
          </Stack>
          <Stack gap={'6'} direction={{base:"column",lg:"row"}}>
            <Stack w={{base:"100%",lg:"60%"}} gap={'6'}>
              <Stack>
                <Box>
                  <CustomHeading
                    textAlign={{base:"center",lg:"left"}}
                    fontSize={'25px'}
                    color={'pink.500'}
                  >
                    Events Analytics
                  </CustomHeading>
                </Box>
                <Stack
                  gap={'14'}
                  direction={{base:"column",lg:"row"}}
                  bg={'dashbg.100'}
                  px={'8'}
                  py={'4'}
                  alignItems={'center'}
                >
                  <Stack w={{base:"100%",lg:"50%"}}>
                    <CustomHeading
                      textAlign={{base:"center",lg:"left"}}
                      fontSize={'20px'}
                      color={'pink.500'}
                    >
                      Best Selling Menu
                    </CustomHeading>
                    <Pie options={options} data={data} />
                  </Stack>
                  <Stack w={{base:"100%",lg:"50%"}} alignItems={"center"} gap={'2'}>
                    <Box>
                      <CustomHeading
                        textAlign={'left'}
                        fontSize={{base:"17px",lg:"20px"}}
                        color={'pink.500'}
                      >
                        Most Popular Menu Category
                      </CustomHeading>
                      <Flex gap={'6'} alignItems={'center'}>
                        <Image src={M1} />
                        <CustomHeading fontSize={'19px'} textAlign={'left'}>
                          Seltzer
                        </CustomHeading>
                      </Flex>
                    </Box>
                    <Box>
                      <CustomHeading
                        textAlign={'left'}
                        fontSize={{base:"17px",lg:"20px"}}
                        color={'pink.500'}
                      >
                        Most Popular Menu Category
                      </CustomHeading>
                      <Flex gap={'6'} alignItems={'center'}>
                        <Image src={M1} />
                        <CustomHeading fontSize={'19px'} textAlign={'left'}>
                          Seltzer
                        </CustomHeading>
                      </Flex>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
              <Stack>
                <Stack
                  mb={'4'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  direction={{base:"column",lg:"row"}}
                >
                  <CustomHeading
                    mb={'0'}
                    textAlign={{base:"center",lg:"left"}}
                    fontSize={'23px'}
                    color={'#fff'}
                  >
                    Total Sales
                  </CustomHeading>
                  <Box>
                    <BorderButton width={{base:"100%",lg:"40%"}} Url={'/'} Btnctn={'View Past Report'} />
                  </Box>
                </Stack>
                <Stack
                  gap={'14'}
                  direction={{base:"column",lg:"row"}}
                  bg={'dashbg.100'}
                  px={'8'}
                  py={'4'}
                  alignItems={'center'}
                >
                  <Stack w={{base:"100%",lg:"row"}}>
                    <CustomHeading
                      textAlign={{base:"center",lg:"left"}}
                      fontSize={'20px'}
                      color={'pink.500'}
                    >
                      Best Selling Menu
                    </CustomHeading>
                    <Pie options={options} data={data} />
                  </Stack>
                  <Stack w={{base:"100%",lg:"row"}}>
                    <CustomHeading
                      textAlign={'left'}
                      fontSize={'20px'}
                      color={'pink.500'}
                    >
                      Best Selling Menu
                    </CustomHeading>
                    <Pie options={options} data={data} />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack w={{base:"100%",lg:"40%"}}>
              <Box>
                <CustomHeading
                  textAlign={'left'}
                  fontSize={'25px'}
                  color={'pink.500'}
                >
                  Events Analytics
                </CustomHeading>
              </Box>
              <Stack p={'4'} bg={'dashbg.100'}>
                <Box
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  display={'flex'}
                >
                  <CustomHeading
                    textAlign={'left'}
                    mb={'0'}
                    fontSize={'20px'}
                    color={'pink.500'}
                  >
                    Events
                  </CustomHeading>
                  <Link color={'pink.500'} to={'/'}>
                    View All
                  </Link>
                </Box>
                <UnorderedList>
                  <ListItem>
                    <Stack
                      pb={'3'}
                      mt={'4'}
                      borderBottom={'1px solid #fff'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      direction={'row'}
                    >
                      <Box gap={'4'} alignItems={'center'} display={'flex'}>
                        <Image w={'100px'} src={Event1} />
                        <Box>
                          <CustomHeading
                            textAlign={'left'}
                            color={'pink.500'}
                            fontSize={{base:"18px",lg:"25px"}}
                          >
                            Friday Event
                          </CustomHeading>
                          <CustomPara color={'pHeading.100'}>
                            Total Attendance : 11
                          </CustomPara>
                        </Box>
                      </Box>
                      <Box alignItems={'center'} display={'flex'}>
                        <CustomPara fontSize={'19px'}>4.5</CustomPara>
                        <UnorderedList display={'flex'}>
                          <ListItem>
                            <Icon
                              color={'pink.500'}
                              fontSize={'16px'}
                              as={AiFillStar}
                            />
                          </ListItem>
                          <ListItem>
                            <Icon
                              color={'pink.500'}
                              fontSize={'16px'}
                              as={AiFillStar}
                            />
                          </ListItem>
                          <ListItem>
                            <Icon
                              color={'pink.500'}
                              fontSize={'16px'}
                              as={AiFillStar}
                            />
                          </ListItem>
                          <ListItem>
                            <Icon
                              color={'#ffee37'}
                              fontSize={'16px'}
                              as={AiFillStar}
                            />
                          </ListItem>
                        </UnorderedList>
                      </Box>
                    </Stack>
                  </ListItem>
                  <ListItem>
                    <Stack
                      pb={'3'}
                      mt={'4'}
                      borderBottom={'1px solid #fff'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      direction={'row'}
                    >
                      <Box gap={'4'} alignItems={'center'} display={'flex'}>
                        <Image w={'100px'} src={Event1} />
                        <Box>
                          <CustomHeading
                            textAlign={'left'}
                            color={'pink.500'}
                            fontSize={{base:"18px",lg:"25px"}}
                          >
                            Friday Event
                          </CustomHeading>
                          <CustomPara color={'pHeading.100'}>
                            Total Attendance : 11
                          </CustomPara>
                        </Box>
                      </Box>
                      <Box alignItems={'center'} display={'flex'}>
                        <CustomPara fontSize={'19px'}>4.5</CustomPara>
                        <UnorderedList display={'flex'}>
                          <ListItem>
                            <Icon
                              color={'#ffee37'}
                              fontSize={'16px'}
                              as={AiFillStar}
                            />
                          </ListItem>
                          <ListItem>
                            <Icon
                              color={'#ffee37'}
                              fontSize={'16px'}
                              as={AiFillStar}
                            />
                          </ListItem>
                          <ListItem>
                            <Icon
                              color={'#ffee37'}
                              fontSize={'16px'}
                              as={AiFillStar}
                            />
                          </ListItem>
                          <ListItem>
                            <Icon
                              color={'#ffee37'}
                              fontSize={'16px'}
                              as={AiFillStar}
                            />
                          </ListItem>
                        </UnorderedList>
                      </Box>
                    </Stack>
                  </ListItem>
                </UnorderedList>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
