import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Stack,
  Switch,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Img,
  useNumberInput,
  Input,
  HStack,
  Divider,
  Center,
  Wrap,
  WrapItem,
  Avatar,
  Badge,
  Tag,
} from '@chakra-ui/react';
import React from 'react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import MainDashboard from '../MainDashboard';
import Eventimg from '../../../assets/images/event/e1.jpg';
import M1 from '../../../assets/images/menu/m1.jpg';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { AiFillStar, AiOutlineFieldTime, AiOutlineStar } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@chakra-ui/icons';
import { imgUrl } from '../../../utilities/Config';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function SingleEvent(props) {
  const location = useLocation();

  console.log(location.state);
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      defaultValue: 1,
      min: 1,
      max: 100,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const navigate = useNavigate();

  const user = useSelector(state => state?.value);
  useEffect(() => {
    if (!user) {
      navigate('/dashboard/login');
    }
  }, [user]);

  return (
    <>
      <MainDashboard>
        <Stack p={{base:"none",lg:"p-4"}} gap={'6'}>
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            alignItems={'center'}
            justifyContent={{ base: 'center', lg: 'space-between' }}
          >
            <Box display={'flex'} alignItems={'center'} gap={'4'}>
              <CustomHeading
                fontSize={'30px'}
                color={'#fff'}
                textAlign={'left'}
              >
                {location.state.name}
              </CustomHeading>
            </Box>
            <Box>
              <Flex
                alignItems={'center'}
                direction={{ base: 'column', lg: 'row' }}
                gap={'3'}
              >
                <Box>
                  <FormControl display="flex" alignItems="center">
                    <Switch colorScheme="pink" id="email-alerts" />
                    <FormLabel
                      color={'#fff'}
                      pl={'4'}
                      htmlFor="email-alerts"
                      mb="0"
                    >
                      List Event Automatically Everay Week
                    </FormLabel>
                  </FormControl>
                </Box>
                <Box>
                  <Button
                    bg={'transparent'}
                    textAlign={'center'}
                    margin={'auto'}
                    py={'10px'}
                    px={'8'}
                    lineHeight={'inherit'}
                    border={'1px solid #fff'}
                    borderRadius={'6px'}
                    color={'#fff'}
                    _hover={{
                      color: 'primaryText.200',
                    }}
                  >
                    Edit Event
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Stack>
          <Stack gap={'6'} direction={{ base: 'column', lg: 'row' }}>
            <Stack max-width={{ base: '80%', lg: '370px' }}>
              <Img src={imgUrl + location.state.picture} />
            </Stack>
            <Stack gap={'6'}>
              <CustomHeading
                textAlign={'left'}
                fontSize={'25px'}
                color={'#fff'}
                mb={'0'}
              >
                {location.state.name}{' '}
                <Badge ml="1" bg={'red'} color={'white'}>
                  live
                </Badge>
              </CustomHeading>
              <CustomPara color={'primaryText.200'}>
                {/* {location.state.description} */}
              </CustomPara>
              <Box display={'flex'} alignItems={'center'} gap={'2'}>
                <Icon
                  color={'primaryText.200'}
                  fontSize={'20px'}
                  as={AiOutlineFieldTime}
                />
                <CustomPara color={'primaryText.200'} marginBottom={'0'}>
                  {location.state.date}
                </CustomPara>
              </Box>

              <Box display={'flex'} alignItems={'center'} gap={'2'}>
                <Icon
                  color={'primaryText.200'}
                  fontSize={'20px'}
                  as={HiOutlineLocationMarker}
                />
                <CustomPara color={'primaryText.200'} marginBottom={'0'}>
                  {location.state.venue}
                </CustomPara>
              </Box>
              <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Box>
                  <CustomPara color="pink.500"  marginBottom={0}>
                    <span >#Price</span>
                  </CustomPara>
                  <CustomHeading textAlign={'left'} fontSize={'25px'} mb={'0'}>
                    #{location.state.price}
                  </CustomHeading>
                </Box>
                <Box>
                  <FormControl display="flex" alignItems="center">
                    <Switch
                      colorScheme="pink"
                      id="email-alerts"
                      defaultValue={location.state.repeat}
                    />
                    <FormLabel
                      color={'#fff'}
                      pl={'4'}
                      htmlFor="email-alerts"
                      mb="0"
                    >
                      Tickets Sold
                    </FormLabel>
                  </FormControl>
                </Box>
              </Stack>
              <HStack gap={'6'}>
                {location.state.hashtagsdetail.map(e => {
                  return (
                    <Tag
                      bg={'dashbg.100'}
                      color={'pHeading.100'}
                      p={'4'}
                      borderRadius={'50px'}
                    >
                      {e.name}
                    </Tag>
                  );
                })}
              </HStack>
            </Stack>
          </Stack>
          <Stack
            gap={'16'}
            direction={'row'}
            pt={'14'}
            borderTop={'1px solid #717171'}
          >
            <Stack w={{base:"100%",lg:"50%"}}>
              <CustomHeading textAlign={'left'} fontSize={'20px'}>
                Customer Review:
              </CustomHeading>
              <Wrap spacing={'6'}>
                <WrapItem>
                  <Stack gap={'6'} direction={'row'}>
                    <Avatar
                      size="lg"
                      name="Prosper Otemuyiwa"
                      src="https://bit.ly/prosper-baba"
                    />
                    <Stack gap={'4'}>
                      <Stack>
                        <CustomHeading
                          color={'white'}
                          textAlign={'left'}
                          mb={'0'}
                          fontSize={'22px'}
                        >
                          Micheal Farwada
                        </CustomHeading>
                        <CustomPara color={'pink.500'}>
                          Lorem ipsum dolor sit amet, consectetur elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna
                          aliqua.
                        </CustomPara>
                        <Wrap>
                          <WrapItem>
                            <Icon color={'#ff9000'} as={AiFillStar} />
                          </WrapItem>
                          <WrapItem>
                            <Icon color={'#ff9000'} as={AiFillStar} />
                          </WrapItem>
                          <WrapItem>
                            <Icon color={'#ff9000'} as={AiFillStar} />
                          </WrapItem>
                          <WrapItem>
                            <Icon color={'#ff9000'} as={AiOutlineStar} />
                          </WrapItem>
                          <WrapItem>
                            <Icon color={'#ff9000'} as={AiOutlineStar} />
                          </WrapItem>
                        </Wrap>
                      </Stack>
                    </Stack>
                  </Stack>
                </WrapItem>
                <WrapItem>
                  <Stack gap={'6'} direction={'row'}>
                    <Avatar
                      size="lg"
                      name="Prosper Otemuyiwa"
                      src="https://bit.ly/prosper-baba"
                    />
                    <Stack gap={'4'}>
                      <Stack>
                        <CustomHeading
                          color={'white'}
                          textAlign={'left'}
                          mb={'0'}
                          fontSize={'22px'}
                        >
                          Micheal Farwada
                        </CustomHeading>
                        <CustomPara color={'pink.500'}>
                          Lorem ipsum dolor sit amet, consectetur elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna
                          aliqua.
                        </CustomPara>
                        <Wrap>
                          <WrapItem>
                            <Icon color={'#ff9000'} as={AiFillStar} />
                          </WrapItem>
                          <WrapItem>
                            <Icon color={'#ff9000'} as={AiFillStar} />
                          </WrapItem>
                          <WrapItem>
                            <Icon color={'#ff9000'} as={AiFillStar} />
                          </WrapItem>
                          <WrapItem>
                            <Icon color={'#ff9000'} as={AiOutlineStar} />
                          </WrapItem>
                          <WrapItem>
                            <Icon color={'#ff9000'} as={AiOutlineStar} />
                          </WrapItem>
                        </Wrap>
                      </Stack>
                    </Stack>
                  </Stack>
                </WrapItem>
              </Wrap>
            </Stack>
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
