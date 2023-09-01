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
  Input,
  Button,
  useToast,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  Switch,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import React from 'react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import MainDashboard from '../MainDashboard';
import Teamone from '../../../assets/images/Team/t1.jpg';
import { Link as Reactlink, useNavigate } from 'react-router-dom';
import PrimaryBtn from '../../../components/Website/Buttons/PrimaryBtn';
import ContactFields from '../../../components/Website/Contact/ContactFields';
import { POST, PUT } from '../../../utilities/ApiProvider';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Index() {
  const toast = useToast();
  let token = ""
  const [isLoading, setisLoading] = useState(false);
  const profileImageRef = useRef(null);
  const [images, setImages] = useState({});
  const [theImage, setTheImage] = useState(null);
  const [local, setLocal] = useState({})

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [Fields, setFields] = useState({
    upload_document: {},
    menu: []
  });

  useEffect(() => {
    token = localStorage.getItem('user')
    token = JSON.parse(token);
    setLocal(token)
  }, [])

  const [localItem, setLocalItem] = useState(false);

  const navigate = useNavigate();
  const user = useSelector(state => state?.value);
  useEffect(() => {
    if (!user) {
      navigate("/dashboard/login");
    }
  }, [user]);


  const defaultSrc = Teamone;

  const imageConverter = file => {
    setImages(file);
    setTheImage(URL.createObjectURL(new Blob(file)));
  };

  const submitForm = async () => {
    try {

      const formData = new FormData();

      formData.append('firstname', Fields.name);
      formData.append('password', Fields.password);
      formData.append('confirmPassword', Fields.confirmPassword);
      formData.append('overviewReport', true);
      formData.append('email_notification', true);

      // get usertoken 



      var response = await PUT('/users', formData, {
        authorization: `Bearer ${local.verificationToken}`,
      });



      toast({
        description: response.message,
        status: response.status,
        isClosable: true,
        position: 'bottom-left',
        duration: 2500,
      });

      // setFields({
      //   username: '',
      //   password: '',
      // });

      setisLoading(false);
    } catch (err) {
      console.log(err);
      toast({
        description: 'Something went wrong!',
        status: 'error',
        isClosable: true,
        position: 'bottom-left',
        duration: 2500,
      });
    }
  };


  return (
    <>
      <MainDashboard>
        <Stack p={'4'} gap={'4'}>
          <Stack gap={'8'} bg={'dashbg.100'} p={'6'}>
            <Stack gap={'6'} direction={{ base: "column" }}>
              <Stack>
              <Stack direction={{base:"column",lg:"row"}} justifyContent={'space-between'}>
                  <Box>
                    <CustomHeading
                      fontSize={'30px'}
                      mb={'8'}
                      color={'#fff'}
                      textAlign={{ base: "center", lg: "left" }}
                    >
                      Profile Details
                    </CustomHeading>1
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
                      width={{ base: "100%", lg: "90%" }}
                      color={'#fff'}
                      _hover={{
                        color: 'primaryText.200',
                      }}
                      onClick={()=>navigate("/dashboard/teammembers")}  
                    >
                      My Team
                    </Button>
                  </Box>
                </Stack>  
                <Stack gap={'3'}>
                  <Box display={"flex"} flexDirection={"column"}>
                    <Box display={"flex"} justifyContent={{ base: "center", lg: "left" }}>
                      <Img
                        cursor={'pointer'}
                        w={'120px'}
                        h={'120px'}
                        objectFit={'cover'}
                        borderRadius={'50%'}
                        src={theImage ?? defaultSrc}
                        alt="preview"
                      />
                    </Box>
                    <Input
                      type={'file'}
                      display={'none'}
                      ref={profileImageRef}
                      onChange={e => imageConverter(e.target.files)}
                    />
                    <Button
                      color={'#fff'}
                      width={{ base: "100%", lg: "10%" }}
                      bg="#d53f8c"
                      mt="30px"
                      _hover={{
                        bg: 'transparent',
                        color: 'primaryText.200',
                      }}
                      onClick={() => profileImageRef?.current.click()}
                    >
                      Change Avatar
                    </Button>
                  </Box>
                </Stack>
              </Stack>
              <Stack w={{ base: "100%", lg: "80%" }}>
                <CustomHeading
                  fontSize={'30px'}
                  mb={'8'}
                  color={'#fff'}
                  textAlign={{ base: "center", lg: "left" }}
                >
                  Account Settings
                </CustomHeading>
                <Stack
                  direction={{ base: "column", lg: "row" }}
                  flexWrap={'wrap'}
                  spacing={'0'}
                  gap={8}
                  pb={'12'}
                >
                  <Input
                    type={'text'}
                    bg={'#212121'}
                    pt={'7'}
                    pb={'6'}
                    w={{ base: "100%", lg: "45%" }}
                    color={'#fff'}
                    outline={'1px solid #fff'}
                    placeholder={'Name'}
                    value={local?.username}
                    onChange={e => {
                      setLocal({
                        ...local,
                        username: e.target.value,
                      });
                    }}
                  />
                  <Input
                    type={'email'}
                    bg={'#212121'}
                    pt={'7'}
                    pb={'6'}
                    w={{ base: "100%", lg: "45%" }}
                    color={'#fff'}
                    outline={'1px solid #fff'}
                    placeholder={'Email'}
                    value={local?.email}
                    onChange={e => {
                      setFields({
                        ...Fields,
                        email: e.target.value,
                      });
                    }}
                  />
                  <InputGroup w={{ base: "100%", lg: "45%" }} size="md">
                    <Input
                      color={'#fff'}
                      pt={'7'}
                      pb={'6'}
                      outline={'1px solid #fff'}
                      pr="4.5rem"
                      type={show ? 'text' : 'password'}
                      placeholder="Enter password"
                      onChange={e => {
                        setFields({
                          ...Fields,
                          password: e.target.value,
                        });
                      }}
                    />
                    <InputRightElement top={'5px'} width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <InputGroup w={{ base: "100%", lg: "45%" }} size="md">
                    <Input
                      color={'#fff'}
                      pt={'7'}
                      pb={'6'}
                      outline={'1px solid #fff'}
                      pr="4.5rem"
                      type={show ? 'text' : 'password'}
                      placeholder="Confirm password"
                      onChange={e => {
                        setFields({
                          ...Fields,
                          confirmPassword: e.target.value,
                        });
                      }}
                    />
                    <InputRightElement top={'5px'} width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </Stack>
                <Box>
                  <CustomHeading
                    fontSize={'30px'}
                    mb={'8'}
                    color={'#fff'}
                    textAlign={{ base: "center", lg: "left" }}
                  >
                    Connected Account
                  </CustomHeading>
                  <Input
                    type={'number'}
                    bg={'#212121'}
                    pt={'7'}
                    pb={'6'}
                    w={{ base: "100%", lg: "45%" }}
                    color={'#fff'}
                    outline={'1px solid #fff'}
                    placeholder={'Example@icloud.com'}
                  />
                </Box>
              </Stack>
            </Stack>
            <Stack justifyContent={'space-between'} direction={{ base: "column", lg: "row" }} py={'6'} borderTop={'1px solid #717171'}>
              <Stack>
                <Box
                  fontSize={'22px'}
                  mb={'8'}
                  color={'#fff'}
                  textAlign={{ base: "center", lg: "left" }}
                  width="100%"
                >
                  Notifications
                </Box>
                <FormControl gap={'3'} display="flex" alignItems="center">
                  <Switch id="email-alerts" colorScheme={'pink'} />
                  <FormLabel color={'#fff'} htmlFor="email-alerts" mb="0">
                    Email me newsletters & Updates
                  </FormLabel>
                </FormControl>
                <FormControl gap={'3'} display="flex" alignItems="center">
                  <Switch id="email-alerts" colorScheme={'pink'} />
                  <FormLabel color={'#fff'} htmlFor="email-alerts" mb="0">
                    Nightly Overview Report
                  </FormLabel>
                </FormControl>
              </Stack>
              <Stack>
                <Button onClick={() => submitForm()} colorScheme='pink' px={'14'}>Save</Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </MainDashboard>
    </>
  );
}
