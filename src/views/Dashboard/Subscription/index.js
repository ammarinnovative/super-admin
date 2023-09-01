import { Box, Flex, ListItem, Stack, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import MainDashboard from '../MainDashboard';
import { AiOutlineCheck } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import Planwarp from '../../../components/Dashboard/Plans/Planwarp';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

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
        <Stack p={'4'} gap={'8'}>
        <Stack>
              <CustomHeading
                textAlign={'left'}
                fontSize={'30px'}
                color={'#fff'}
              >
                Subscription Plans
              </CustomHeading>
            </Stack>
            <Stack direction={'row'} gap={'6'}>
            <Planwarp/>
            </Stack>
        </Stack>
      </MainDashboard>
      </>
  );
}
