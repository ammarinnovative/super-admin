import React, { useEffect } from 'react';
import {
  Container,
  Stack,
  Img,
  ListItem,
  UnorderedList,
  Radio,
  Link,
  Text,
  Box,
} from '@chakra-ui/react';
import Signupimg from '../../../assets/images/Banner/signup.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler';
import logo from '../../../assets/images/Banner/signlogo.png';
import CustomHeading from '../../../components/Website/Headings/CustomHeading.js';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import Ipod from '../../../assets/images/menu/ipod.jpg';
import HoverIpod from '../../../assets/images/menu/ipadstand.jpg';
import semobile from '../../../assets/images/menu/ipodSE.jpg';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import { Link as ReactLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Index() {
  const location = useLocation();


  const navigate = useNavigate();

  const user = useSelector(state => state?.value);
  useEffect(() => {
    console.log(user);
    if (!user) {
      navigate('/dashboard/login');
    }
  }, [user]);

  useEffect(() => {
    HeadFootEnabler(location);
  }, [location]);

  return (
    <>
     
        <Box>
          <Stack
            backgroundRepeat={'no-repeat'}
            backgroundSize={'cover'}
            backgroundImage={Signupimg}
            py={'28'}
          >
            <Container maxW={'6xl'}>
              <Stack mb={'12'}>
                <Img margin={'auto'} mb={'4'} w={'150px'} src={logo} />
                <CustomHeading color={'#fff'}>Choose Your Plan</CustomHeading>
              </Stack>
              <Stack mb={'14'}>
                <UnorderedList listStyleType={'none'} spacing={'6'}>
                  <ListItem>
                    <Stack gap={4}>
                      <Stack>
                        <CustomPara
                          fontSize={'18px'}
                          fontWeight={'700'}
                          color={'primaryText.200'}
                        >
                          Would you like to add an iPad?
                        </CustomPara>
                        <Radio colorScheme="green" value="2">
                          <Text width={"100%"} textAlign={{base:"center",lg:"left"}} color={'#fff'}>No, I already have an iPad</Text>
                        </Radio>
                      </Stack>
                      <Stack
                        py={6}
                        borderBottom={'1px solid #fff'}
                        borderTop={'1px solid #fff'}
                        gap={3}
                      >
                        <Radio colorScheme="green" value="2">
                          <Text color={'#fff'}>
                            10.2-inch iPad Buy iPad - Apple
                          </Text>
                        </Radio>
                        <Stack
                          alignItems={'center'}
                          flexDirection={{base:"column",lg:"row"}}
                          justifyContent={'space-between'}
                        >
                          <Box display={'flex'} flexDirection={{base:"column",lg:"row"}} gap={'6'} alignItems={'center'}>
                            <Img src={Ipod}width={{base:"100%",lg:"40%"}} alt="" borderRadius={'6'} />
                            <CustomHeading color={'#fff'} fontSize={'25px'}>
                              Purchase Equipment
                            </CustomHeading>
                          </Box>
                          <Box>
                            <Link
                              border={'1px solid #fff'}
                              borderRadius={'6'}
                              px={'6'}
                              py={'3'}
                              color={'#fff'}
                              target={'_blank'}
                              href={'https://www.apple.com/shop/buy-ipad'}
                            >
                              View Specification
                            </Link>
                          </Box>
                        </Stack>
                      </Stack>
                    </Stack>
                  </ListItem>
                  <ListItem>
                    <Stack gap={4}>
                      <Stack>
                        <CustomPara
                          fontSize={'18px'}
                          fontWeight={'700'}
                          color={'primaryText.200'}
                        >
                          Would you like to add a stand for your Tablet?
                          HoverBar Duo for iPad
                        </CustomPara>
                        <Radio colorScheme="green" value="2">
                          <Text color={'#fff'}>
                            No, I already have an Tablet
                          </Text>
                        </Radio>
                      </Stack>
                      <Stack
                        py={6}
                        borderBottom={'1px solid #fff'}
                        borderTop={'1px solid #fff'}
                        gap={3}
                      >
                        <Radio colorScheme="green" value="2">
                          <Text color={'#fff'}>HoverBar Duo for iPad</Text>
                        </Radio>
                        <Stack
                          alignItems={'center'}
                          flexDirection={{base:"column",lg:"row"}}
                          justifyContent={'space-between'}
                        >
                          <Box display={'flex'}  flexDirection={{base:"column",lg:"row"}} gap={'6'} alignItems={'center'}>
                            <Img src={HoverIpod} width={{base:"100%",lg:"40%"}} alt="" borderRadius={'6'} />
                            <CustomHeading color={'#fff'} fontSize={'25px'}>
                              Purchase Equipment
                            </CustomHeading>
                          </Box>
                          <Box>
                            <Link
                              border={'1px solid #fff'}
                              borderRadius={'6'}
                              px={'6'}
                              py={'3'}
                              color={'#fff'}
                              target={'_blank'}
                              href={
                                'https://www.amazon.com/Twelve-South-HoverBar-Adjustable-Attachments/dp/B08VYLQS9F/ref=sr_1_3?%5D'
                              }
                            >
                              View Specification
                            </Link>
                          </Box>
                        </Stack>
                      </Stack>
                    </Stack>
                  </ListItem>
                  <ListItem>
                    <Stack gap={4}>
                      <Stack>
                        <CustomPara
                          fontSize={'18px'}
                          fontWeight={'700'}
                          color={'primaryText.200'}
                        >
                          Would you like to add a stand for your Tablet?
                          HoverBar Duo for iPad
                        </CustomPara>
                        <Radio colorScheme="green" value="2">
                          <Text color={'#fff'}>
                            No, I already have an Tablet
                          </Text>
                        </Radio>
                      </Stack>
                      <Stack
                        py={6}
                        borderBottom={'1px solid #fff'}
                        borderTop={'1px solid #fff'}
                        gap={3}
                      >
                        <Radio colorScheme="green" value="2">
                          <Text color={'#fff'}>
                            iPhone SE Buy iPhone SE - Apple
                          </Text>
                        </Radio>
                        <Stack
                          alignItems={'center'}
                          flexDirection={{base:"column",lg:"row"}}
                          justifyContent={'space-between'}
                        >
                          <Box display={'flex'}  flexDirection={{base:"column",lg:"row"}} gap={'6'} alignItems={'center'}>
                            <Img src={semobile} width={{base:"100%",lg:"40%"}}  alt="" borderRadius={'6'} />
                            <CustomHeading color={'#fff'} fontSize={'25px'}>
                              Purchase Equipment
                            </CustomHeading>
                          </Box>
                          <Box>
                            <Link 
                              border={'1px solid #fff'}
                              borderRadius={'6'}
                              px={'6'}
                              py={'3'}
                              color={'#fff'}
                              target={'_blank'}
                              href={
                                'https://www.amazon.com/Twelve-South-HoverBar-Adjustable-Attachments/dp/B08VYLQS9F/ref=sr_1_3?%5D'
                              }
                            >
                              View Specification
                            </Link>
                          </Box>
                        </Stack>
                      </Stack>
                    </Stack>
                  </ListItem>
                </UnorderedList>
              </Stack>
              <Stack textAlign={'center'}>
                <Link
                  as={ReactLink}
                  to={'/dashboard/payment'}
                  w={{ base: '120px', xl: '200px' }}
                  display={{ base: 'none', lg: 'inline-block' }}
                  bg={'wcolor.100'}
                  color={'#fff'}
                  margin={'auto'}
                  textAlign={'center'}
                  border={'1px solid #dc0b9b'}
                  px={'8'}
                  py={'3'}
                  borderRadius={'6'}
                  _hover={{
                    bg: 'transparent',
                    boxShadow: 'none',
                    transform: 'translateY(2px)',
                  }}
                >
                  Continue
                </Link>
              </Stack>
            </Container>
          </Stack>
        </Box>
    
    </>
  );
}
