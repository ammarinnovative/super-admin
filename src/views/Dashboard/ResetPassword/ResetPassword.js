import React from 'react';
import {
  Box,
  Container,
  Image,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler.js';
import { useEffect } from 'react';
import signupImage from '../../../assets/images/Banner/signup.jpg';
import Logo from '../../../assets/images/Banner/signlogo.png';
import { useState } from 'react';

function ResetPassword() {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  useEffect(() => {
    HeadFootEnabler(location);
  }, [location]);
  return (
    <Box
      height={'100vh'}
      py={'70px'}
      backgroundRepeat={'no-repeat'}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      backgroundImage={signupImage}
    >
      <Box>
        <Stack>
          <Container>
            <Image margin={'auto'} src={Logo} alt="Logo image" />
            <Text fontSize={"35px"} mt="20px" color={"white"} textAlign={"center"}>Chnage Password</Text>
            <Box mt={'30px'}>
              <InputGroup
                size={'md'}
                rounded={'md'}
                color={'white'}
                border={'1px solid #f40095'}
              >
                <Input
                  type={show ? 'text' : 'password'}
                  _placeholder={{ color: 'white' }}
                  placeholder="Enter Your Password"
                />
                <InputRightElement width={'4.5rem'}>
                  <Button
                    color={'white'}
                    onClick={() => {
                      setShow(!show);
                    }}
                    h={'1.75rem'}
                    _hover={"none"}
                    backgroundColor={"#f40095"}
                    size={'sm'}
                  >
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <InputGroup
                size={'md'}
                rounded={'md'}
                color={'white'}
                marginTop={'10px'}
                border={'1px solid #f40095'}
              >
                <Input
                  placeholder="Confirm Your Password"
                  border={'1px solid white'}
                  _placeholder={{color:"white"}}
                  type={shows ? 'text' : 'password'}
                />
                <InputRightElement width={'4.5rem'}>
                  <Button
                    color={'white'}
                    h={'1.75rem'}
                    _hover={"none"}
                    backgroundColor={"#f40095"}
                    onClick={() => {
                      setShows(!shows);
                    }}
                    size={'sm'}
                  >
                    {shows ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button mt={"10px "} _hover={"none"} backgroundColor={"#f40095"} color={"white"} border={"1px solid #f40095"}  fontSize={"20px"} width={"100%"}>change</Button>
            </Box>
          </Container>
        </Stack>
      </Box>
    </Box>
  );
}

export default ResetPassword;
