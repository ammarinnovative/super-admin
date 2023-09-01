import {
  Box,
  Flex,
  FormControl,
  Img,
  FormLabel,
  Stack,
  useToast,
  Modal,
  Button,
  ModalContent,
  ModalHeader,
  Text,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
  Input,
  Textarea,
  Checkbox,
  Radio,
  RadioGroup,
  Select,
  Switch,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  FormHelperText,
} from '@chakra-ui/react';
import React from 'react';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import MainDashboard from '../MainDashboard';
import Cat1 from '../../../assets/images/menu/c1.jpg';
import menu1 from '../../../assets/images/menu/menu1.jpg';
import MenuItems from '../../../assets/images/menu/m1.jpg';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { GET, POST } from '../../../utilities/ApiProvider';
import { AiOutlineSearch, AiOutlinePlusCircle } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { imgUrl } from '../../../utilities/Config';
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Index() {
  const [categories, setCategories] = useState([]);
  const [promotion, setPromotion] = useState([]);
  const [catItems, setCatItems] = useState([]);
  const navigate = useNavigate();
  const toast = useToast();
  const [isLoading, setisLoading] = useState(false);

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  useEffect(() => {
    getCategories();
    getPromotion();
  }, []);

  const getCategories = async () => {
    var response = await GET('admin/parentCategory');
    setCategories(response.data);
  };
  const getPromotion = async () => {
    var response = await GET('promotion');

    setPromotion(response.data);
  };

  function itemExists(value) {
    return categories.some(function (el) {
      if (el.name === value) {
        setCatItems(el.items);
      }
    });
  }

  const [Fields, setFields] = useState({
    upload_document: {},
    menu: [],
  });

  let hastagArray = [];
  const submitForm = async () => {
    try {
      //

      let fromObject = moment(Fields.from + Fields.fromTime, 'YYYY-MM-DDLT');

      // conversion
      fromObject = fromObject.format('YYYY-MM-DDThh:mm:ssZ');

      let toObject = moment(Fields.to + Fields.toTime, 'YYYY-MM-DDLT');

      // conversion
      toObject = toObject.format('YYYY-MM-DDThh:mm:ssZ');

      const formData = new FormData();

      // if (Fields.title === '' && Fields.description === '') {
      //   toast({
      //     status: 'error',
      //     title: 'Please fill in all the fields to proceed further.',
      //     duration: 7000,
      //     isClosable: true,
      //     position: 'bottom-left',
      //   });
      //   return;
      // }

      formData.append('title', Fields.title);
      formData.append('from', fromObject);
      formData.append('to', toObject);
      formData.append('price', 5);
      formData.append('category', '63e42b9174085ec04658efe1');
      formData.append('repeat', true);
      formData.append('menu', JSON.stringify(Fields.menu));

      var response = await POST('/promotion', formData);

      console.log(response);
      debugger;

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

  const signupstyle = {
    outline: '1px solid #fff',
    py: '25px',
    bg: '#271623b5',
    color: '#fff',
  };

  const user = useSelector(state => state?.value);
  useEffect(() => {
    if (!user) {
      navigate('/dashboard/login');
    }
  }, [user]);

  return (
    <>
      <MainDashboard>
        <Modal size={'3xl'} isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent bg={'dashbg.100'}>
            <ModalHeader>
              <CustomPara marginBottom={'0'} fontSize={'20px'}>
                Add Promotion
              </CustomPara>
            </ModalHeader>
            <ModalCloseButton color={'#fff'} />
            <ModalBody>
              <Stack gap={'4'}>
                <Input
                  sx={signupstyle}
                  placeholder={'Title'}
                  type="Name"
                  _placeholder={{ color: '#fff' }}
                  value={Fields.title}
                  onChange={e => {
                    setFields({
                      ...Fields,
                      title: e.target.value,
                    });
                  }}
                />

                <Stack
                  gap={'2'}
                  direction={'row'}
                  justifyContent={'space-between'}
                >
                  <Stack direction={'row'}>
                    <Box w={'full'} position={'relative'}>
                      <FormLabel
                        fontWeight={'600'}
                        color={'#fff'}
                        zIndex={'1'}
                        fontSize={'13px'}
                      >
                        From
                      </FormLabel>
                      <Input
                        type={'date'}
                        bg={'#212121'}
                        pt={'7'}
                        pb={'6'}
                        w={'full'}
                        color={'#fff'}
                        outline={'1px solid #fff'}
                        onChange={e => {
                          setFields({
                            ...Fields,
                            from: e.target.value,
                          });
                        }}
                      />
                    </Box>
                    <Box w={'full'} position={'relative'}>
                      <FormLabel
                        fontWeight={'600'}
                        color={'#fff'}
                        zIndex={'1'}
                        fontSize={'13px'}
                      >
                        To
                      </FormLabel>
                      <Input
                        type={'date'}
                        bg={'#212121'}
                        pt={'7'}
                        pb={'6'}
                        w={'full'}
                        color={'#fff'}
                        outline={'1px solid #fff'}
                        onChange={e => {
                          setFields({
                            ...Fields,
                            to: e.target.value,
                          });
                        }}
                      />
                    </Box>
                  </Stack>
                  <Stack direction={'row'} gap={'2'}>
                    <Box w={'full'} position={'relative'}>
                      <FormLabel
                        fontWeight={'600'}
                        color={'#fff'}
                        zIndex={'1'}
                        fontSize={'13px'}
                      >
                        From
                      </FormLabel>
                      <Input
                        type={'time'}
                        bg={'#212121'}
                        pt={'7'}
                        pb={'6'}
                        w={'full'}
                        color={'#fff'}
                        outline={'1px solid #fff'}
                        onChange={e => {
                          setFields({
                            ...Fields,
                            fromTime: e.target.value,
                          });
                        }}
                      />
                    </Box>
                    <Box w={'full'} position={'relative'}>
                      <FormLabel
                        fontWeight={'600'}
                        color={'#fff'}
                        zIndex={'1'}
                        fontSize={'13px'}
                      >
                        To
                      </FormLabel>
                      <Input
                        type={'time'}
                        bg={'#212121'}
                        pt={'7'}
                        pb={'6'}
                        w={'full'}
                        color={'#fff'}
                        outline={'1px solid #fff'}
                        onChange={e => {
                          setFields({
                            ...Fields,
                            toTime: e.target.value,
                          });
                        }}
                      />
                    </Box>
                  </Stack>
                </Stack>
                <Stack
                  gap={'6'}
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                >
                  {/* <Box w={'full'} position={'relative'}>
                    <FormLabel
                      fontWeight={'600'}
                      color={'#fff'}
                      zIndex={'1'}
                      fontSize={'13px'}
                    >
                      $Price
                    </FormLabel>
                    <RangeSlider
                      aria-label={['min', 'max']}
                      colorScheme="pink"
                      defaultValue={[10, 30]}
                    >
                      <RangeSliderTrack>
                        <RangeSliderFilledTrack />
                      </RangeSliderTrack>
                      <RangeSliderThumb index={0} />
                      <RangeSliderThumb index={1} />
                    </RangeSlider>
                    <Box display={'flex'} justifyContent={'space-between'}>
                      <CustomPara fontSize={'12px'}>%10</CustomPara>
                      <CustomPara fontSize={'12px'}>%100</CustomPara>
                    </Box>
                  </Box> */}
                  <Box w={'full'} position={'relative'}>
                    <FormControl display="flex" alignItems="center">
                      <Switch colorScheme={'pink'} id="email-alerts" />{' '}
                      <FormLabel htmlFor="email-alerts" mb="0" color={"#fff"} pl={'5px'}>
                        Infinite Date
                      </FormLabel>
                    </FormControl>


                    <FormControl display="flex" alignItems="center" mt={'10px'}>
                      <Switch colorScheme={'pink'} id="email-alerts" />{' '}
                      <FormLabel htmlFor="email-alerts" mb="0" color={"#fff"} pl={'5px'}>
                        Repeat Promotion
                      </FormLabel>
                    </FormControl>

                

                  </Box>
                </Stack>

                <Box
                  display={'flex'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  gap={'4'}
                >
                  <CustomHeading
                    fontSize={'22px'}
                    color={'#fff'}
                    textAlign={'left'}
                  >
                    Choose Menu
                  </CustomHeading>
                  <FormControl w={'40%'} position={'relative'}>
                    <Input
                      color={'#fff'}
                      border={'1px solid #fff !important'}
                      _placeholder={{ color: '#fff' }}
                      placeholder="Search"
                    />
                    <Button
                      onClick={() => submitForm()}
                      bg={'transparent'}
                      right={'0'}
                      position={'absolute'}
                    >
                      <Icon
                        color={'white'}
                        fontSize={'20px'}
                        as={AiOutlineSearch}
                      />
                    </Button>
                  </FormControl>
                </Box>
                <Stack
                  direction={'row'}
                  gap={'3'}
                  spacing={'0'}
                  flexWrap={'wrap'}
                  color={'#fff'}
                >
                  {categories.map(e => {
                    return (
                      <RadioGroup
                        p={'3px'}
                        border={'0px solid #fff'}
                        position={'relative'}
                        borderRadius={'6'}
                        spacing={'0'}
                        className="chckbox"
                        value={e._id}
                        onChange={e => {
                          itemExists(e);
                          setFields({
                            ...Fields,
                            cat: e,
                          });
                        }}
                      >
                        <Stack
                          borderRadius={'6'}
                          justifyContent={'right'}
                          alignItems={'end'}
                          w={'120px'}
                          height={'100px'}
                          backgroundSize={'cover'}
                          backgroundImage={imgUrl + e.category_image}
                          direction={'row'}
                        >
                          <Radio value={e.name}>{e.name}</Radio>
                        </Stack>
                      </RadioGroup>
                    );
                  })}
                </Stack>
                <Stack
                  direction={'row'}
                  gap={'3'}
                  spacing={'0'}
                  flexWrap={'wrap'}
                  color={'#fff'}
                >
                  {catItems.map(e => {
                    return (
                      <Checkbox
                        p={'3px'}
                        border={'0px solid #fff'}
                        position={'relative'}
                        borderRadius={'6'}
                        spacing={'0'}
                        className="chckbox"
                        value={e._id}
                        onChange={e => {
                          setFields({
                            ...Fields,
                            menu: [...Fields.menu, { item: e.target.value }],
                          });
                        }}
                      >
                        <Stack
                          borderRadius={'6'}
                          justifyContent={'right'}
                          alignItems={'end'}
                          w={'120px'}
                          height={'100px'}
                          backgroundSize={'cover'}
                          backgroundImage={imgUrl + e.picture}
                          direction={'row'}
                        >
                          <Text>{e.name}</Text>
                        </Stack>
                      </Checkbox>
                    );
                  })}
                </Stack>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Stack direction={'row'} w={'full'} justifyContent={'center'}>
                <Button
                  onClick={() => submitForm()}
                  bg={'pHeading.100'}
                  color={'#fff'}
                  px={'14'}
                >
                  Post
                </Button>
                <Button onClick={onClose}>Discard</Button>
              </Stack>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Stack p={'4'} gap={'6'}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} gap={'4'}></Box>
            <Box>
              <Flex
                alignItems={'center'}
                direction={{ base: 'column', lg: 'row' }}
                gap={'3'}
              >
                <Box>
                  <FormControl display="flex" alignItems="center">
                    <Switch colorScheme="pink" id="email-alerts" />
                    <FormLabel
                      color={'white'}
                      pl={'4'}
                      htmlFor="email-alerts"
                      mb="0"
                      display={"flex"}
                       alignItems={"center"}
                    >
                      Send Free Ticket After First Visit{' '}
                      <Box width={"24px"} marginLeft={"10px"} display={"flex"} justifyContent={"center"} alignItems={"center"} height={"24px"} border={"1px solid pink"} rounded={'full'}>
                        i
                      </Box>
                    </FormLabel>
                  </FormControl>
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
                    color={'#fff'}
                    _hover={{
                      color: 'primaryText.200',
                    }}
                    onClick={() => {
                      setOverlay(<OverlayOne />);
                      onOpen();
                    }}
                  >
                    Create Promotion
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Stack>

          {promotion.map(e => {
            return (
              <Stack>
                <Box>
                  <CustomHeading
                    fontSize={'30px'}
                    color={'#fff'}
                    textAlign={'left'}
                  >
                    {e.name}
                  </CustomHeading>
                </Box>
                <Link to={'/dashboard/singlepromotion'} state={e}>
                  <Stack
                    flexWrap={'wrap'}
                    direction={'row'}
                    justifyContent={{ base: 'center', lg: 'left' }}
                    gap={'4'}
                    cursor={'pointer'}
                  >
                    {e.menu.map(item => {
                      return (
                        <Box w={{ base: '100%', lg: '242px' }}>
                          <Img width={'100%'} src={imgUrl + e.thumbnail} />
                          <Stack p={'3'} bg={'dashbg.100'}>
                            <CustomHeading
                              textAlign={'left'}
                              color={'#fff'}
                              fontSize={'16px'}
                            >
                              {item.title}
                            </CustomHeading>

                            <Box>
                              <Flex mb={'3'} justifyContent={'space-between'}>
                                <Box>
                                  <CustomHeading
                                    mb={'0'}
                                    color={'#fff'}
                                    fontSize={'15px'}
                                    textAlign={'left'}
                                  >
                                    Date:{' '}
                                  </CustomHeading>
                                  <CustomPara
                                    color={'pHeading.100'}
                                    fontSize={'13px'}
                                  >
                                    {' '}
                                    {moment(item.from).format(
                                      moment.HTML5_FMT.DATE
                                    )}
                                  </CustomPara>
                                </Box>
                                <Box>
                                  <CustomHeading
                                    mb={'0'}
                                    color={'#fff'}
                                    fontSize={'15px'}
                                    textAlign={'left'}
                                  >
                                    Timeframe:{' '}
                                  </CustomHeading>
                                  <CustomPara
                                    color={'pHeading.100'}
                                    fontSize={'13px'}
                                  >
                                    {' '}
                                    {moment(item.from).format(
                                      moment.HTML5_FMT.TIME
                                    )}
                                  </CustomPara>
                                </Box>
                              </Flex>

                              {/* <BorderButton w={'full'} Url={'./'} Btnctn={'$49.00'} /> */}
                            </Box>
                          </Stack>
                        </Box>
                      );
                    })}
                  </Stack>
                </Link>
              </Stack>
            );
          })}
        </Stack>
      </MainDashboard>
    </>
  );
}
