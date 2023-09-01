import { Box, Link, Stack, Tag } from '@chakra-ui/react';
import React from 'react'
import order1 from '../../../assets/images/menu/order1.jpg';
import order2 from '../../../assets/images/menu/order2.jpg';
import order3 from '../../../assets/images/menu/order3.jpg';
import order4 from '../../../assets/images/menu/order4.jpg';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';

export default function OrderMenu() {
  return (
    <div>
         <Stack direction={{base:"column",lg:"row"}} alignItems={"center"} gap={'4'}>
              <Link>
                <Box
                  position={'relative'}
                  pr={'4'}
                  display={'flex'}
                  justifyContent={'right'}
                  alignItems={'flex-end'}
                  borderRadius={'8px'}
                  h={'120px'}
                  w={'190px'}
                  zIndex={'1'}
                  backgroundImage={order1}
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
                    opacity: '0.4',
                  }}
                >
                  <Tag bg={'pHeading.100'} color={'#fff'} position={'absolute'} top={'-2'} right={'0'}>6</Tag>
                  <CustomHeading
                    fontSize={'22px'}
                    fontWeight={'600'}
                    color={'#fff'}
                  >
                    Beer
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
                  h={'120px'}
                  w={'190px'}
                  zIndex={'1'}
                  backgroundImage={order2}
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
                    opacity: '0.4',
                  }}
                >
                  <Tag bg={'pHeading.100'} color={'#fff'} position={'absolute'} top={'-2'} right={'0'}>10</Tag>

                  <CustomHeading
                    fontSize={'22px'}
                    fontWeight={'600'}
                    color={'#fff'}
                  >
                    Cocktails
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
                  h={'120px'}
                  w={'190px'}
                  zIndex={'1'}
                  backgroundImage={order3}
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
                    opacity: '0.4',
                  }}
                >
                  <Tag bg={'pHeading.100'} color={'#fff'} position={'absolute'} top={'-2'} right={'0'}>1</Tag>

                  <CustomHeading
                    fontSize={'22px'}
                    fontWeight={'600'}
                    color={'#fff'}
                  >
                    Seltzer
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
                  h={'120px'}
                  w={'190px'}
                  zIndex={'1'}
                  backgroundImage={order4}
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
                    opacity: '0.4',
                  }}
                >
                  <Tag bg={'pHeading.100'} color={'#fff'} position={'absolute'} top={'-2'} right={'0'}>8</Tag>

                  <CustomHeading
                    fontSize={'22px'}
                    fontWeight={'600'}
                    color={'#fff'}
                  >
                    Wine
                  </CustomHeading>
                </Box>
              </Link>
            </Stack>
    </div>
  )
}
