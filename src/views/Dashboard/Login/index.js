import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Img,
  Input,
  InputGroup,
  InputRightElement,
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
import { useEffect } from 'react';
import CustomPara from '../../../components/Website/Paragraph/CustomPara.js';
import { Link as ReactLink } from 'react-router-dom';
import { useState } from 'react';
import { POST, SetAccessToken } from '../../../utilities/ApiProvider.js';
import { Icon } from '@chakra-ui/icons';
import {
  AiOutlineGoogle,
  AiFillFacebook,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadUser,
  updateColor,
  updateUser,
} from '../../../reducers/useReducers.js';
import { baseUrl } from '../../../utilities/Config.js';

export default function Index() {
  const user = useSelector(state => state.value);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [remember, setRemember] = useState(false);

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  useEffect(() => {
    HeadFootEnabler(location);
  }, [location]);

  const signupstyle = {
    outline: '1px solid #fff',
    py: '25px',
    bg: '#271623b5',
    color: '#fff',
  };

  const toast = useToast();
  const [isLoading, setisLoading] = useState(false);
  const [Fields, setFields] = useState({
    username: '',
    password: '',
  });

  const submitForm = async () => {
    try {
      setisLoading(true);
      const formData = new FormData();

      if (Fields.username === '' && Fields.password === '') {
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

      formData.append('username', Fields.username);
      formData.append('password', Fields.password);

      var response = await POST(`users/login`, formData);

      if (response.status === 'success') {
        if (remember) {
          localStorage.setItem('userCreds', JSON.stringify(Fields));
        }
        dispatch(loadUser(response.data));
        if (response.data.barDetails) {
          dispatch(updateColor(response.data.barDetails.color));
        }
        //
        localStorage.setItem('user', JSON.stringify(response.data));
      }

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
      debugger;
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

  useEffect(() => {
    let creds = localStorage.getItem('userCreds');
    if (creds) {
      setFields(JSON.parse(creds));
    } else {
      setFields({
        username: '',
        password: '',
      });
    }

    if (user === undefined || user === null) {
      navigate('/dashboard/login');
    } else if (user.membership === null) {
      navigate('/dashboard/Plan');
      SetAccessToken(user.verificationToken);
      console.log('usermembership=>', user.membership);
      console.log('user=>', user);
    } else {
      navigate('/dashboard');
      console.log(user.verificationToken);
      SetAccessToken(user.verificationToken);
    }
  }, [user]);

  return (
    <>
      <Stack
        backgroundRepeat={'no-repeat'}
        backgroundImage={Signupimg}
        py={'48'}
      >
        <Container maxW={'6xl'}>
          <Stack mb={'12'}>
            <Img margin={'auto'} mb={'4'} w={'150px'} src={logo} />
            <CustomHeading color={'#fff'}>Welcome Back</CustomHeading>
            <CustomPara textAlign={'center'}>Enter your details</CustomPara>
          </Stack>
          <Stack
            mb={'8'}
            flexWrap={'wrap'}
            spacing={'0'}
            direction={'row'}
            gap={'6'}
            px={{ base: 'none', lg: '28px' }}
            justifyContent={'space-between'}
          >
            <Input
              sx={signupstyle}
              width={{ base: '100%', lg: '48%' }}
              placeholder={'Email Address'}
              type="email"
              _placeholder={{ color: '#fff' }}
              value={Fields?.username}
              onChange={e => {
                setFields({
                  ...Fields,
                  username: e.target.value,
                });
              }}
            />
            <Input
              sx={signupstyle}
              placeholder={'Password'}
              width={{ base: '100%', lg: '48%' }}
              type="password"
              _placeholder={{ color: '#fff' }}
              value={Fields?.password}
              onChange={e => {
                setFields({
                  ...Fields,
                  password: e.target.value,
                });
              }}
            />
            <Box display={"flex"} width={"100%"} justifyContent={{base:"center",lg:"space"}} flexDirection={{base:"column",lg:"row"}  }>
              <Checkbox
                color={'#fff'}
                colorScheme="green"
                onChange={e => setRemember(e.target.checked)}
                defaultValue={remember}
              >
                Remember Password
              </Checkbox>
              <Link
                w={{base:"100%",lg:"48%"}}
                color={'#fff'}
                as={ReactLink}
                to={'/dashboard/forgetPassword'}
              >
                Forgot Password?
              </Link>
            </Box>
          </Stack>
          <Stack mb={'12'}>
            <Box mb={'4'} textAlign={'center'}>
              <Button
                onClick={() => submitForm()}
                bgColor={'#dc0b9b'}
                w={{base:"100%",lg:"48%"}}
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
                isLoading={isLoading}
              >
                Login
              </Button>
            </Box>
            <Box textAlign={'center'}>
              <Button
                as={ReactLink}
                to={'/dashboard/signup'}
                bgColor={'transparent'}
                w={{base:"100%",lg:"48%"}}     
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
                SignUp
              </Button>
            </Box>
          </Stack>
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
