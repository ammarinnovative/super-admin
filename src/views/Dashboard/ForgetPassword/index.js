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
  Text,
  useToast,
  HStack,
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
import { PinInput, PinInputField } from '@chakra-ui/react';
export default function Index() {
  const user = useSelector(state => state.value);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [remember, setRemember] = useState(false);

  const [show, setShow] = React.useState(false);
  const [state, setState] = useState(false);
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
    email: '',
  });
  const [OTP,setOTP] = useState("");

  const VerifyOTP = async ()=>{
    try {
      const formData = new FormData();
      setisLoading(true);
      if(OTP===""){
        toast({
          status: 'error',
          title: 'Please fill the fields to proceed further.',
          duration: 7000,
          isClosable: true,
          position: 'bottom-left',
        });
        setisLoading(false);
        return;
      }
      formData.append('OTP',OTP);
      var response = await POST("users/verify-otp",OTP);
      console.log(response);
      if(response.status === 200){
      }
      toast({
        description: response.message,
        status: 'success',
        isClosable: true,
        position: 'bottom-left',
        duration: 2500,
      });
      setisLoading(false);
      navigate("/dashboard/resetPassword")

    } catch (error) {
      
    }

  }

  console.log(OTP);
  const getPin = (event)=>{
    console.log(event.target)
  }
  const submitForm = async () => {
    try {
      setisLoading(true);
      const formData = new FormData();

      if(!state){
        
      if (Fields.email === '') {
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
      }
      formData.append('email', Fields.email);

      var response = await POST(`users/forget-password`, formData);
      console.log(response)

      if (response.status === 200) {
        
      toast({
        description: response.message,
        status: 'success',
        isClosable: true,
        position: 'bottom-left',
        duration: 2500,
      });
      }
      setisLoading(false);
      setState(true);
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

  return (
    <div>
      <Stack
        backgroundRepeat={'no-repeat'}
        backgroundImage={Signupimg}
        py={'28'}
      >
        <Container maxW={'6xl'}>
          <Stack mb={'12'}>
            <Img margin={'auto'} mb={'4'} w={'150px'} src={logo} />
            <CustomHeading color={'#fff'}>
              {state ? 'Verify Your OTP' : 'Reset Password'}
            </CustomHeading>
            <CustomPara textAlign={'center'}>
              {state ? '' : 'Enter your details'}
            </CustomPara>
          </Stack>
          <Stack
            mb={'2'}
            flexWrap={'wrap'}
            spacing={'0'}
            direction={'row'}
            gap={'6'}
            px={{base:"none",lg:"28px"}}
            justifyContent={'center'}
          >
            {state ? (
              <Input
              sx={signupstyle}
              placeholder={'Enter 4 digit OTP  number'}
              width={{base:"100%",lg:"48%"}}
              type="number"
              _placeholder={{ color: '#fff' }}
              value={OTP}
              onChange={(e)=>{setOTP(e.target.value)}}
            />
            ) : (
              <Input
                sx={signupstyle}
                placeholder={'Enter Your Email Address'}
                type="email"
                width={{base:"100%",lg:"48%"}}
                _placeholder={{ color: '#fff' }}
                value={Fields?.email}
                onChange={e => {
                  setFields({
                    ...Fields,
                    email: e.target.value,
                  });
                }}
              />
            )}
          </Stack>
          {state ? (
            <Stack mb={'12'}>
              <Box mb={'4'} textAlign={'center'}>
                <Button
                  onClick={() => VerifyOTP()}
                  bgColor={'#dc0b9b'}
                  w={{base:"100%",lg:"46%"}}
                  color={'#fff'}
                  borderRadius={6}
                  fontWeight={'600'}
                  margin={'auto'}
                  py={5}
                  fontSize={'17px'}
                  border={'2px solid #fff'}
                  borderColor={'#dc0b9b'}
                  _hover={{
                    bgColor: 'transparent',
                    color: '#fff',
                  }}
                  isLoading={isLoading}
                >
                  Verify
                </Button>
              </Box>
            </Stack>
          ) : (
            <Stack mb={'12'}>
              <Box mb={'4'} textAlign={'center'}>
                <Button
                  onClick={() => submitForm()}
                  bgColor={'#dc0b9b'}
                  // width={{base:'100%',lg:"40%"}}
                  color={'#fff'}
                  borderRadius={6}
                  fontWeight={'600'}
                  margin={'auto'}
                  w={{base:"100%",lg:"46%"}}
                  py={5}
                  fontSize={'17px'}
                  border={'2px solid #fff'}
                  borderColor={'#dc0b9b'}
                  _hover={{
                    bgColor: 'transparent',
                    color: '#fff',
                  }}
                  isLoading={isLoading}
                >
                  Submit
                </Button>
              </Box>
            </Stack>
          )}
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
    </div>
  );
}
