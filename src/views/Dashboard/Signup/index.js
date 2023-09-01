import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Img,
  Input,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler.js';
import Signupimg from '../../../assets/images/Banner/signup.jpg';
import CustomHeading from '../../../components/Website/Headings/CustomHeading.js';
import logo from '../../../assets/images/Banner/signlogo.png';
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
import axios from 'axios';
import { baseUrl } from '../../../utilities/Config.js';

export default function Index() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    HeadFootEnabler(location);
  }, [location]);

  // console.log(baseUrl);

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
    email: '',
    password: '',
    confirm_password: '',
    role: 'bouncer',
  });

  const [agreement, setagreement] = useState(false);

  const submitForm = async () => {
    try {
      setisLoading(true);
      const formData = new FormData();

      if (
        Fields.username === '' ||
        Fields.email === '' ||
        Fields.password === '' ||
        Fields.confirm_password === ''
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

      if (agreement === false) {
        toast({
          status: 'error',
          title: 'Please agree to term and condition for proceed further.',
          duration: 7000,
          isClosable: true,
          position: 'bottom-left',
        });
        setisLoading(false);
        return;
      }

      Fields.role = 'bouncer';

      let data = Fields;

      if (Fields.username !== Fields.username.toLowerCase()) {
        toast({
          description: 'User name should be in lower case',
          status:"error",
          isClosable: true,
          position: 'bottom-left',
          duration: 2500,
        });
        setisLoading(false);
        return;
      }
      if(Fields.password !==Fields.confirm_password){
        toast({
          description: "Password and Confirm Password doesn't match",
          status: "error",
          isClosable: true,
          position: 'bottom-left',
          duration: 2500,
        });
        setisLoading(false);
        return;
      }

      let response = await POST(`users`, Fields);

      if(response.status!=="success"){
        toast({
          description: response.message,
          status: response.status,
          isClosable: true,
          position: 'bottom-left',
          duration: 2500,
        });
        setisLoading(false);
        return;
      }
      navigate('/dashboard/login');

      toast({
        description: response.message,
        status: response.status,
        isClosable: true,
        position: 'bottom-left',
        duration: 2500,
      });
      

      // setFields({
      //   username: '',
      //   email: '',
      //   password: '',
      //   confirm_password: ''
      // });

      // setagreement(false);
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
            <CustomHeading fontSize={{base:"25px",lg:"40px"}} color={'#fff'}>
              Welcome to Night District
            </CustomHeading>
            <CustomPara textAlign={'center'}>Enter your details</CustomPara>
          </Stack>
          <Stack
            mb={'8'}
            px={{base:"none",lg:"12px"}}
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
              value={Fields.username}
              onChange={e => {
                setFields({
                  ...Fields,
                  username: e.target.value,
                });
              }}
            />
            <Input
              sx={signupstyle}
              placeholder={'Email Address'}
              type="email"
              _placeholder={{ color: '#fff' }}
              value={Fields.email}
              onChange={e => {
                setFields({
                  ...Fields,
                  email: e.target.value,
                });
              }}
            />
            <Input
              sx={signupstyle}
              placeholder={'Password'}
              type="Password"
              _placeholder={{ color: '#fff' }}
              value={Fields.password}
              onChange={e => {
                setFields({
                  ...Fields,
                  password: e.target.value,
                });
              }}
            />
            <Input
              sx={signupstyle}
              placeholder={'Confirm Password'}
              type="ConfirmPassword"
              _placeholder={{ color: '#fff' }}
              value={Fields.confirm_password}
              onChange={e => {
                setFields({
                  ...Fields,
                  confirm_password: e.target.value,
                });
              }}
            />
            <Checkbox
              color={'#fff'}
              colorScheme="green"
              isChecked={agreement}
              onChange={e => {
                setagreement(e.target.checked);
              }}
            >
              I agree to the{' '}
              <Link sx={lnk} as={ReactLink} to={'./'}>
                Terms of Service
              </Link>{' '}
              &{' '}
              <Link sx={lnk} as={ReactLink} to={'./'}>
                Privacy Policy
              </Link>
              of Night District.
            </Checkbox>
            <Box>
              <Text>dcd</Text>
            </Box>
          </Stack>
          <Stack mb={'12'}>
            <Button
              onClick={() => submitForm()}
              bgColor={'#dc0b9b'}
              w={"100%"}
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
              Submit
            </Button>
          </Stack>
          <Stack textAlign={'center'} mb={'4'}>
            <Text color={'#fff'}>
              Already A Member?{' '}
              <Link as={ReactLink} to={'/dashboard/login'}>
                Login
              </Link>
            </Text>
          </Stack>
          <Stack>
            <Stack mb={'6'} alignItems={'center'} direction={'row'}>
              <Divider />
              <Text textAlign={'center'} w={'400px'} color={'#fff'}>
                Or continue with
              </Text>
              <Divider />
            </Stack>

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
