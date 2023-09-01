import {
  Container,
  Img,
  Button,
  Stack,
  Box,
  UnorderedList,
  ListItem,
  Link,
  Input,
  useToast,
} from '@chakra-ui/react';
import { useState, React, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler.js';
import Signupimg from '../../../assets/images/Banner/signup.jpg';
import logo from '../../../assets/images/Banner/signlogo.png';
import profileimg from '../../../assets/images/other/profile.png';
import { useEffect } from 'react';
import { Link as ReactLink } from 'react-router-dom';

import { CirclePicker, SketchPicker } from 'react-color';
import reactCSS from 'reactcss';
import CustomHeading from '../../../components/Website/Headings/CustomHeading.js';
import PrimaryBtn from '../../../components/Website/Buttons/PrimaryBtn.js';
import Startermenu from '../../../components/Dashboard/Headers/Startermenu.js';
import { useDispatch, useSelector } from 'react-redux';
import { updateColor } from '../../../reducers/useReducers.js';
import { PUT } from '../../../utilities/ApiProvider.js';
import { baseUrl } from '../../../utilities/Config.js';

export default function Index() {
  const dispatch = useDispatch();
  const profileImageRef = useRef(null);
  const [images, setImages] = useState({});
  const [theImage, setTheImage] = useState(null);
  const toast = useToast();
  const [isLoading, setisLoading] = useState(false);
  const [Fields, setFields] = useState({
    color: '',
    upload_document: {},
  });

  const navigate = useNavigate();
  const user = useSelector(state => state?.value);

  useEffect(() => {
    if (!user) {
      navigate('/dashboard/login');
    }
  }, [user]);

  const location = useLocation();

  useEffect(() => {
    HeadFootEnabler(location);
  }, [location]);

  const defaultSrc = profileimg;

  const [blockPickerColor, setBlockPickerColor] = useState('');
  useEffect(() => {
    if (blockPickerColor !== '') {
      dispatch(updateColor(blockPickerColor));
    }
  }, [blockPickerColor]);

  const submitForm = async () => {
    const formData = new FormData();
    formData.set('color', blockPickerColor);
    formData.set('upload_document', images);
    let response = await PUT(`bar/allInfo/${user?.barInfo}`, formData, {
      authorization: `Bearer ${user?.verificationToken}`,
    });

    toast({
      description: response.message,
      status: response.status,
      isClosable: true,
      position: 'bottom-left',
      duration: 2500,
    });
  };

  const [displayColorPicker, setdisplayColorPicker] = useState(false);
  const handleClick = () => {
    setdisplayColorPicker(true);
  };
  const handleClose = () => {
    setdisplayColorPicker(false);
  };
  const handleChange = color => {
    this.setState({ color: color.rgb });
  };
  const popover = {
    position: 'absolute',
    zIndex: '2',
    bottom: '50px',
  };
  const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  };

  const imageConverter = file => {
    setImages(file[0]);
    setTheImage(URL.createObjectURL(new Blob(file)));
  };

  return (
    <>
      <Stack
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
        backgroundImage={Signupimg}
        py={'32'}
      >
        <Stack mb={'40px'}>
          <Img margin={'auto'} w={'150px'} src={logo} />
        </Stack>

        <Container maxW={'full'} px={'14'}>
          <Stack direction={{base:"column",lg:"row"}} alignItems={"center"} gap={'8'}>
            <Stack w={{base:"100%",lg:"350px"}}>
              <Startermenu />
            </Stack>
            <Stack w={'70%'}>
              <Stack gap={'20'}>
                <Stack>
                  <Img
                    cursor={'pointer'}
                    w={'120px'}
                    h={'120px'}
                    objectFit={'cover'}
                    m={'auto'}
                    borderRadius={'50%'}
                    src={theImage ?? defaultSrc}
                    alt="preview"
                  />
                  <Input
                    type={'file'}
                    display={'none'}
                    ref={profileImageRef}
                    onChange={e => imageConverter(e.target.files)}
                  />
                  <Button
                    bg={'transparent'}
                    color={'#fff'}
                    _hover={{
                      bg: 'transparent',
                      color: 'primaryText.200',
                    }}
                    onClick={() => profileImageRef?.current.click()}
                  >
                    Upload Avatar
                  </Button>
                </Stack>
                <Stack
                  direction={'row'}
                  alignItems={'flex-end'}
                  justifyContent={'space-between'}
                >
                  <Box>
                    <CustomHeading
                      color={'white'}
                      fontSize={'20px'}
                      textAlign={'left'}
                    >
                      Choose Your Color Preference
                    </CustomHeading>
                    <CirclePicker
                      onChange={color => setBlockPickerColor(color.hex)}
                      width={'60%'}
                    />
                  </Box>
                  <Box position={'relative'}>
                    <Button onClick={() => handleClick()}>
                      Custom Color Picker
                    </Button>
                    {displayColorPicker ? (
                      <div style={popover}>
                        <div style={cover} onClick={() => handleClose()} />
                        <SketchPicker
                          color={blockPickerColor}
                          onChange={color => {
                            setBlockPickerColor(color.hex);
                          }}
                        />
                      </div>
                    ) : null}
                  </Box>
                </Stack>
                <Stack>
                  <Button
                    onClick={() => submitForm()}
                    bgColor={'#dc0b9b'}
                    color={'#fff'}
                    w={{ base: 'fit-content', '2xl': '300px' }}
                    borderRadius={6}
                    margin={'auto'}
                    fontWeight={'600'}
                    px={'50px'}
                    py={6}
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
              </Stack>
            </Stack>
            <Stack w={'350px'}>
              <Button
                as={ReactLink}
                to={'/dashboard'}
                bgColor={'transparent'}
                w={{ base: 'fit-content', '2xl': '150px' }}
                color={'#fff'}
                borderRadius={6}
                fontWeight={'600'}
                margin={'0 auto'}
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
                Skip
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
