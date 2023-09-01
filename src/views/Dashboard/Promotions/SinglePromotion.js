import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Img,
  Stack,
  Switch,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import menu1 from '../../../assets/images/menu/menu1.jpg';
import MainDashboard from '../MainDashboard';
import { useLocation, useNavigate } from 'react-router-dom';
import { imgUrl } from '../../../utilities/Config';
import { useSelector } from 'react-redux';

export default function SinglePromotion(props) {

  const location = useLocation();
  


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

          <CustomHeading fontSize={'30px'} color={'#fff'} textAlign={{base:"center",lg:"left"}}>
            Tito's Handmade Vodka
          </CustomHeading>
        </Stack>
        <Stack direction={{base:"column",lg:"row"}} justifyContent={{base:"center",lg:"space-between"}}>
          <Box display={'flex'} flexDirection={{base:"column",lg:"row"}} alignItems={'center'} gap={'6'}>
            <Box>
              <CustomPara color={'primaryText.200'} marginBottom={0}>
                Category:
              </CustomPara>
              <CustomPara>Spirits</CustomPara>
            </Box>
            <Box>
              <CustomPara color={'primaryText.200'} marginBottom={0}>
                Date:
              </CustomPara>
              <CustomPara>11/8/2022</CustomPara>
            </Box>
            <Box>
              <CustomPara color={'primaryText.200'} marginBottom={0}>
                Category:
              </CustomPara>
              <CustomPara>2:00 PM - 3hrs</CustomPara>
            </Box>
          </Box>
          <Box>
            <CustomHeading fontSize={'25px'}>$45.00</CustomHeading>
          </Box>
        </Stack>
        <Stack>
          <Box>
            <CustomHeading fontSize={'30px'} color={'#fff'} textAlign={'left'}>
              {location.state?.name ?? 'loading...'}
            </CustomHeading>
          </Box>
          <Stack gap={'3'} direction={'row'} justifyContent={{base:"center",lg:"left"}} alignItems={'center'} flexWrap={'wrap'}>
            {
              location.state?.menu?.length > 0 &&
              location.state?.menu?.map((v, i) => {
                return (
                  <Box w={{base:"100%",lg:"242px"}} key={i} >
                    <Img src={imgUrl + v?.thumbnail} />
                    <Stack p={'3'} bg={'dashbg.100'}>
                      <CustomHeading
                        textAlign={'left'}
                        color={'#fff'}
                        fontSize={'16px'}
                      >
                        {v?.title ?? 'loading...'}
                      </CustomHeading>


                    </Stack>
                  </Box>
                )
              })
            }
          </Stack>

        </Stack>

      </Stack>
    </MainDashboard>
      </>
  );
}
