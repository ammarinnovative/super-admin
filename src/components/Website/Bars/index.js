import { Box, Container, Flex, Image, Link, Stack } from '@chakra-ui/react';
import Aboutbanner from '../../../assets/images/Banner/about.png';
import React from 'react';
import CustomHeading from '../Headings/CustomHeading';
import Topbar from '../../../assets/images/shorts/topbar.jpg';
import TB1 from '../../../assets/images/shorts/tb1.jpg';
import { Link as ReactLink } from 'react-router-dom';
import TopBars from './TopBars';

export default function index() {
  return (
    <>
      <Stack
        bgImg={Aboutbanner}
        py={36}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgAttachment={{ base: 'inherit', md: 'fixed' }}
        mt={'0 !important'}
      >
        <Container maxW={'6xl'} p={{ base: '15px !important', '2xl': 0 }}>
          <Stack>
            <Box mb={'10'}>
              <CustomHeading color={'wcolor.100'}>Top Rated Bars</CustomHeading>
            </Box>
            <Stack
              justifyContent={{ base: 'center', md: 'left' }}
              w={'100%'}
              direction={{ base: 'column', md: 'row' }}
              gap={'4'}
            >
              <Box w={"100%"} textAlign={{base:"center",lg:"left"}} >
                <Image width={{base:"80%",lg:"40%"}} margin={{base:"auto",lg:"2"}} src={Topbar} borderRadius={'12'} mb={'14px'} />
                <CustomHeading
                  fontSize={'20px'}
                  textAlign={{base:"center",lg:"left"}}
                  color={'#fff'}
                >
                  Amsterdam Club
                </CustomHeading>
                <Link fontSize={'14px'} color={'#fff'} to={'/'}>
                  View Store
                </Link>
              </Box>
              <Box w={'100%'} textAlign={{base:"center",lg:"left"}} >
                <Image src={TB1} width={{base:"80%",lg:"40%"}} margin={{base:"auto",lg:"2"}} borderRadius={'12'} mb={'14px'} />
                <CustomHeading
                  fontSize={'20px'}
                  textAlign={{base:"center",lg:"left"}}
                  color={'#fff'}
                >
                  Paradise Club
                </CustomHeading>
                <Link fontSize={'14px'} color={'#fff'} to={'/'}>
                  View Store
                </Link>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
