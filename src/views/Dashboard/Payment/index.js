import {
  Button,
  Checkbox,
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Img,
  Input,
  Link,
  ListItem,
  Stack,
  UnorderedList,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler.js';
import Signupimg from '../../../assets/images/Banner/signup.jpg';
import CustomHeading from '../../../components/Website/Headings/CustomHeading.js';
import logo from '../../../assets/images/Banner/signlogo.png';
import Cards from '../../../assets/images/other/cards.png';
import { useEffect } from 'react';
import CustomPara from '../../../components/Website/Paragraph/CustomPara.js';
import { Link as ReactLink } from 'react-router-dom';
import { useState } from 'react';
import { POST } from '../../../utilities/ApiProvider.js';
import { Icon } from '@chakra-ui/icons';
import {
  AiOutlineGoogle,
  AiFillFacebook,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { BsCreditCard } from 'react-icons/bs';
import  {FaPaypal} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



export default function Index() {
  const location = useLocation();

  const user = useSelector(state=>state?.value);
  const navigate = useNavigate();

  useEffect(() => {
    if(!user){
      navigate("/dashboard.login");
    }
  }, [user]);

  const signupstyle = {
    outline: '1px solid #fff',
    py: '25px',
    bg: '#271623b5',
    color: '#fff',
  };

  const toast = useToast();
  const [isLoading, setisLoading] = useState(false);
  const [Fields, setFields] = useState({
    name: '',
    city: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const submitForm = async () => {
    try {
      setisLoading(true);
      const formData = new FormData();

      if (
        Fields.name === '' &&
        Fields.email === '' &&
        Fields.password === '' &&
        Fields.confirmpassword === ''
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
      formData.append('email', Fields.email);
      formData.append('password', Fields.password);
      formData.append('confirmpassword', Fields.confirmpassword);

      let response = await POST('/mailtest/emailer.php', formData, {
        'Content-Type': 'application/x-www-form-urlencoded',
      });

      toast({
        description: response.message,
        status: response.status,
        isClosable: true,
        position: 'bottom-left',
        duration: 2500,
      });

      setFields({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
      });

      setisLoading(false);
    } catch (err) {
      toast({
        description: 'Something went wrong!',
        status: 'error',
        isClosable: true,
        position: 'bottom-left',
        duration: 2500,
      });
    }
  };

  const lnk = {
    color: 'pHeading.100',
  };

  const socialink = {
    bg: '#fff',
    w: '50px',
    h: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '6px',
  };
  const socialicn = {
    fontSize: '20px',
    color: 'dashbg.100',
  };

  const settb = {
    bg: 'transparent',
    color: '#fff',
    px: '14',
    py: '3',
    fontSize: '18px',
    borderRadius: '6',
    borderBottom: '0',
    _selected: {
      bg: 'pHeading.100',
    },
  };
  const cards = {
    fontSize: '23px',
    color: '#fff ',
    mr: '4',
  };

  return (
    <>
      <Stack
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
        backgroundImage={Signupimg}
        py={'48'}
      >
        <Container maxW={'6xl'}>
          <Stack mb={'12'}>
            <Img margin={'auto'} mb={'4'} w={'150px'} src={logo} />
            <CustomHeading fontSize={{base:"25px",md:"30px",lg:"40px"}} color={'#fff'}>
              Choose Your Payment Method
            </CustomHeading>
          </Stack>
          <Tabs >
            <TabList
              borderRadius={'6'}
              border={'1px solid #fff'}
              w={{base:"full",lg:"fit-content"}}
              justifyContent={'center'}
              margin={'auto'}
              mb={'10'}
              borderBottom={'0px solid'}
              flexDirection={{base:"column",lg:"row"}}
            >
              <Tab sx={settb}>
                <Icon sx={cards} as={BsCreditCard} /> Cards
              </Tab>
              <Tab sx={settb}>
               
                <Icon sx={cards} as={FaPaypal} /> Paypal
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Stack mb={4} direction={{base:"column",lg:"row"}} alignItems={'center'} gap={'8'}>
                  <CustomPara fontSize={{base:"20px",md:"25px"}} marginBottom={0}>
                    We accpet these payment methods
                  </CustomPara>
                  <Img src={Cards} />
                </Stack>
                <Stack
                  mb={'8'}
                  flexWrap={'wrap'}
                  spacing={'0'}
                  direction={'row'}
                  gap={'6'}
                  justifyContent={'space-between'}
                >
                  <Input
                    sx={signupstyle}
                    placeholder={'Name'}
                    type="Name"
                    _placeholder={{ color: '#fff' }}
                    w={{base:"100%",lg:"48%"}}
                    value={Fields.name}
                    setFields={name => setFields({ ...Fields, name })}
                  />
                  <Input
                    sx={signupstyle}
                    placeholder={'Email Address'}
                    type="email"
                    _placeholder={{ color: '#fff' }}
                    value={Fields.email}
                    w={{base:"100%",lg:"48%"}}
                    setFields={email => setFields({ ...Fields, email })}
                  />
                  <Input
                    sx={signupstyle}
                    placeholder={'Password'}
                    type="Password"
                    _placeholder={{ color: '#fff' }}
                    value={Fields.password}
                    w={{base:"100%",lg:"48%"}}
                    setFields={password => setFields({ ...Fields, password })}
                  />
                  <Input
                    sx={signupstyle}
                    placeholder={'Confirm Password'}
                    type="ConfirmPassword"
                    _placeholder={{ color: '#fff' }}
                    value={Fields.confirmpassword}
                    w={{base:"100%",lg:"48%"}}
                    setFields={confirmpassword =>
                      setFields({ ...Fields, confirmpassword })
                    }
                  />
                  <Checkbox color={'#fff'} colorScheme="green">
                    I agree to the{' '}
                    <Link sx={lnk} as={ReactLink} to={'./'}>
                      Terms of Service
                    </Link>{' '}
                    &{' '}
                    <Link sx={lnk} as={ReactLink} to={'./'}>
                      Privacy Policy{' '}
                    </Link>
                    of Night District.
                  </Checkbox>
                </Stack>
                <Stack mb={'12'} textAlign={'center'}>
                
            <Button
                 as={ReactLink} to={'/dashboard/profile'}
                 bgColor={'#dc0b9b'}
                 w={{base : 'fit-content', '2xl' : '350px' }}
                 color={'#fff'}
                 borderRadius={6}
                 fontWeight={'600'}
                 margin={'auto'}
                 py={6}
                 px={'12'}
                 fontSize={'17px'}
                 border={'2px solid #fff'}
                 borderColor={'#dc0b9b'}
                 _hover={{
                   bgColor: 'transparent',
                   color: '#fff',
                 }}
                  >
                    Complete Purchase
                  </Button>
          
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack mb={4} direction={'row'} alignItems={'center'} gap={'8'}>
                  <CustomPara marginBottom={0} fontSize={{base:"20px",md:"25px"}}>
                    We are accpet these payment methods
                  </CustomPara>
                  <Img src={Cards} />
                </Stack>
                <Stack
                  mb={'8'}
                  flexWrap={'wrap'}
                  spacing={'0'}
                  direction={'row'}
                  gap={'6'}
                  justifyContent={'space-between'}
                >
                  <Input
                    sx={signupstyle}
                    placeholder={'Name'}
                    type="Name"
                    _placeholder={{ color: '#fff' }}
                    value={Fields.name}
                    setFields={name => setFields({ ...Fields, name })}
                  />
                  <Input
                    sx={signupstyle}
                    placeholder={'Email Address'}
                    type="email"
                    _placeholder={{ color: '#fff' }}
                    value={Fields.email}
                    setFields={email => setFields({ ...Fields, email })}
                  />
                  <Input
                    sx={signupstyle}
                    placeholder={'Password'}
                    type="Password"
                    _placeholder={{ color: '#fff' }}
                    value={Fields.password}
                    setFields={password => setFields({ ...Fields, password })}
                  />
                  <Input
                    sx={signupstyle}
                    placeholder={'Confirm Password'}
                    type="ConfirmPassword"
                    _placeholder={{ color: '#fff' }}
                    value={Fields.confirmpassword}
                    setFields={confirmpassword =>
                      setFields({ ...Fields, confirmpassword })
                    }
                  />
                  <Checkbox color={'#fff'} colorScheme="green">
                    I agree to the
                    <Link sx={lnk} as={ReactLink} to={'./'}>
                      Terms of Service
                    </Link>
                    &
                    <Link sx={lnk} as={ReactLink} to={'./'}>
                      Privacy Policy
                    </Link>
                    of Night District.
                  </Checkbox>
                </Stack>
                <Stack mb={'12'}>
                <Stack mb={'12'} textAlign={'center'}>
                
                <Button
                     as={ReactLink} to={'/dashboard/profile'}
                     bgColor={'#dc0b9b'}
                     w={{base : 'fit-content', '2xl' : '350px' }}
                     color={'#fff'}
                     borderRadius={6}
                     fontWeight={'600'}
                     margin={'auto'}
                     py={6}
                     px={'12'}
                     fontSize={'17px'}
                     border={'2px solid #fff'}
                     borderColor={'#dc0b9b'}
                     _hover={{
                       bgColor: 'transparent',
                       color: '#fff',
                     }}
                      >
                        Complete Purchase
                      </Button>
              
                    </Stack>
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <Stack>
            <CustomPara textAlign={'center'}>Or continue with</CustomPara>
            <UnorderedList
              justifyContent={'center'}
              listStyleType={'none'}
              display={'flex'}
              gap={'4'}
            >
              <ListItem>
                <Link sx={socialink} as={ReactLink} to={'/'}>
                  <Icon sx={socialicn} as={AiOutlineGoogle} />
                </Link>
              </ListItem>
              <ListItem>
                <Link sx={socialink} as={ReactLink} to={'/'}>
                  <Icon sx={socialicn} as={AiFillFacebook} />
                </Link>
              </ListItem>
              <ListItem>
                <Link sx={socialink} as={ReactLink} to={'/'}>
                  <Icon sx={socialicn} as={AiOutlineTwitter} />
                </Link>
              </ListItem>
            </UnorderedList>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
