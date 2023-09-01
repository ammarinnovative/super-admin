import React from 'react';
import { Box, Image, Stack, Link } from '@chakra-ui/react';
import CustomHeading from '../Headings/CustomHeading';
import CustomPara from '../Paragraph/CustomPara';
import Mobile from '../../../assets/images/shorts/mobile.png';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import { useNavigate } from 'react-router';
export default function AboutSilder() {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems={'center'}>
          <Box w={'30%'}>
            <Image src={Mobile} />
          </Box>
          <Box w={{base:"100%",lg:"55%"}} pb={"70px"}>
            <CustomHeading textAlign={'left'} color={'#fff'} fontSize={'35px'}>
              Queue Management System
            </CustomHeading>
            <CustomPara>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostr ud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </CustomPara>
            <CustomPara marginBottom={'20px'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CustomPara>
            <Link
              w={{ base: '120px', xl: 'auto' }}
              display={{ base: 'none', '2xl': 'inline-block' }}
              onClick={() => navigate('/dashboard/login')}
              bg={'wcolor.100'}
              color={'#fff'}
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
              Get Started
            </Link>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
