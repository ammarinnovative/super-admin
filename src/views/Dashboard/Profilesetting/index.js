import {
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Img,
  Flex,
  Box,
  useToast,
} from '@chakra-ui/react';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======
import { useState } from 'react';
>>>>>>> parent of 102f974 (lelo)
import React from 'react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import MainDashboard from '../MainDashboard';
import Teamone from '../../../assets/images/Team/t1.jpg';
import { Link as Reactlink } from 'react-router-dom';
import PrimaryBtn from '../../../components/Website/Buttons/PrimaryBtn';
import ContactFields from '../../../components/Website/Contact/ContactFields';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
=======
>>>>>>> parent of 102f974 (lelo)
import { POST } from '../../../utilities/ApiProvider';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';

export default function Index() {
<<<<<<< HEAD
  
  const toast = useToast();
  const [isLoading, setisLoading] = useState(false);
  const [user,setUser] = useState({});
=======
  const toast = useToast();
  const [isLoading, setisLoading] = useState(false);
>>>>>>> parent of 102f974 (lelo)
  const [Fields, setFields] = useState({
    name: '',
    city: '',
    email: '',
    phone: '',
    overviewReport:"true",
    email_notification:"true"
  });

<<<<<<< HEAD


  const selector = useSelector(state=>state);
  const submitForm = async () => {
    try {
      setisLoading(true);
      
      const objData = {
        name:Fields.name,
        city:Fields.city,
        phone:Fields.phone
      }

      if(Fields.name.length == 0){
        delete objData.name
      }
      if(Fields.city.length == 0){
        delete objData.city
      }
      if(Fields.phone == 0){
        delete objData.phone
      }


      let response = await POST('/mailtest/emailer.php', objData, {
=======
  const submitForm = async () => {
    try {
      setisLoading(true);
      const formData = new FormData();

      if (
        Fields.name === '' &&
        Fields.city === '' &&
        Fields.email === '' &&
        Fields.phone === '' &&
        Fields.message === ''
      ) {
        toast({
          status: 'error',
          title: 'Please fill in all the fields to proceed further.',
          duration: 7000,
          isClosable: true,
          position: 'bottom-left',
        });
        setisLoading(false);
        return;
      }

      formData.append('action', 'CONTACT');
      formData.append('name', Fields.name);
      formData.append('city', Fields.city);
      formData.append('email', Fields.email);
      formData.append('phone', Fields.phone);
      formData.append('message', Fields.message);

      let response = await POST('/mailtest/emailer.php', formData, {
>>>>>>> parent of 102f974 (lelo)
        'Content-Type': 'application/x-www-form-urlencoded',
      });

      toast({
        description: response.message,
        status: response.status,
        isClosable: true,
        position: 'bottom-left',
        duration: 2500,
      });
<<<<<<< HEAD
=======

      setFields({
        name: '',
        city: '',
        email: '',
        phone: '',
        message: '',
      });

>>>>>>> parent of 102f974 (lelo)
      setisLoading(false);
    } catch (err) {
      toast({
        description: 'Something went wrong!',
        status: 'error',
        isClosable: true,
        position: 'bottom-left',
        duration: 2500,
      });
<<<<<<< HEAD
      setisLoading(false);
    }
  };


  useEffect(()=>{
    if(selector){
      setUser(selector?.value)
    }
  },[selector]);


  console.log(user);

=======
    }
  };

>>>>>>> parent of 102f974 (lelo)
  const settb = {
    bg: 'pHeading.100',
    color: '#fff',
    px: '8',
    borderRadius: '6',
  };

<<<<<<< HEAD


useEffect(()=>{
  setFields({
    ...Fields,
    name:user?.username,
    city: user?.address,
    email:user?.email,
    phone:user?.phone??"No phone number"
  })
},[user]);

=======
>>>>>>> parent of 102f974 (lelo)
  return (
    <>
      <MainDashboard>
        <Stack p={'4'} gap={'4'}>
          <Stack bg={'dashbg.100'} p={'6'}>
            <Tabs>
              <TabList mb={'6'} gap={'4'} borderBottom={'0px solid'}>
                <Tab sx={settb}>Profile Setting</Tab>
                <Tab sx={settb}>My Team</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Stack gap={'16'}>
                    <Stack>
                      <CustomHeading
                        fontSize={'30px'}
                        mb={'8'}
                        color={'#fff'}
                        textAlign={'left'}
                      >
                        Profile Details
                      </CustomHeading>
                      <Stack gap={'3'} alignItems={'center'} direction={'row'}>
                      <Box textAlign={'center'}>
                        <Img
                          src={Teamone}
                          mb={'4'}
                         
                          w={'120px'}
                        />
                        
                      </Box>
                      <Box>
                          <Flex mb={'4'} gap={'4'}>
                          <PrimaryBtn fontSize={'15px'} px={'5'} value={'Upload New Photo'} />
                          <PrimaryBtn fontSize={'15px'} px={'5'}  value={'Reset'} />
                          </Flex>
                          <CustomPara>Allowed JPG, GIF or PNG. Max size of 800K</CustomPara>
                        </Box>
                      </Stack>
                     
                    </Stack>
                    <Stack>
                      <CustomHeading
                        fontSize={'30px'}
                        mb={'8'}
                        color={'#fff'}
                        textAlign={'left'}
                      >
                        Account Settings
                      </CustomHeading>
                      <Box
                        display={'flex'}
                        flexWrap={'wrap'}
                        gap={5}
                        pb={'12'}
                        justifyContent={'space-between'}
                      >
                        <ContactFields
                          type={'text'}
                          placeholder={'Name'}
                          name={'name'}
                          value={Fields.name}
                          setFields={name => setFields({ ...Fields, name })}
                        />
                        <ContactFields
                          type={'text'}
                          placeholder={'City'}
                          name={'city'}
                          value={Fields.city}
                          setFields={city => setFields({ ...Fields, city })}
                        />
                        <ContactFields
                          type={'text'}
                          placeholder={'email'}
                          name={'email'}
                          value={Fields.email}
                        />
                        <ContactFields
                          type={'text'}
                          placeholder={'phone'}
                          name={'phone'}
                          value={Fields.phone}
                          setFields={phone => setFields({ ...Fields, phone })}
                        />
                      </Box>
                      <Box>
                        <CustomHeading
                          fontSize={'30px'}
                          mb={'8'}
                          color={'#fff'}
                          textAlign={'left'}
                        >
                          Connected Account
                        </CustomHeading>
                        <ContactFields
                          type={'text'}
                          placeholder={'Name'}
                          name={'name'}
                          value={Fields.name}
                          setFields={name => setFields({ ...Fields, name })}
                        />
                      </Box>
                    </Stack>
                  </Stack>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
