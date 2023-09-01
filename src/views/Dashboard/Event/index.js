import {
  Box,
  Stack,
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
  FormControl,
  Checkbox,
  useToast,
  FormLabel,
  Select,
  Switch,
  Link
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import Event1 from '../../../assets/images/event/e1.jpg';
import { Link as ReactLink, useNavigate } from 'react-router-dom';
import MainDashboard from '../MainDashboard';
import { AiOutlineSearch, AiOutlinePlusCircle } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import { GET, POST } from '../../../utilities/ApiProvider';
import moment from 'moment';
import { useSelector } from 'react-redux';

export default function Index() {
  
  const [events, setEvents] = useState([{
    "live" : [],
    "upcomming" : [],
    "today" : []
  }
    


  ]);
  const [Hashtags, setHashtags] = useState([]);
  const [hashtagData, sethashtagData] = useState([]);
  const [dj, setDj] = useState([]);
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
    getHastags();
    getEvents();
    getDJ();
  }, []);

  const getEvents = async () => {
    var response = await GET('event');
    setEvents(response.data);
  };
  const getHastags = async () => {
    var response = await GET('admin/hashtag');
    setHashtags(response.data);
  };
  const getDJ = async () => {
    var response = await GET('users/type/dj');

    setDj(response.data);
  };

  const [Fields, setFields] = useState({
    picture: {},
    repeat : true,
    venue : "450 Highland Ave, Salem, MA 1940"
  });
  let hastagArray = [];
  const submitForm = async () => {
    try {
      const formData = new FormData();


      formData.append('name', Fields.name);
      formData.append('description', Fields.description);
      formData.append('dj', Fields.dj);
      formData.append('price', Fields.price);
      formData.append('repeat', Fields.repeat);
      formData.append('stock', Fields.stock);
      formData.append('venue', Fields.venue);
      var momentObj = moment(Fields.date + Fields.time, 'YYYY-MM-DDLT');

      // conversion
      var dateTime = momentObj.format('YYYY-MM-DDThh:mm:ssZ');

      formData.append('date', dateTime);



      var response = await POST('/event', formData);


   

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
      <Modal size={'3xl'} isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent bg={'dashbg.100'}>
          <ModalHeader>
            <CustomPara marginBottom={'0'} fontSize={'20px'}>
              Add Events
            </CustomPara>
          </ModalHeader>
          <ModalCloseButton color={'#fff'} />
          <ModalBody>
            <Stack gap={'4'}>
              <Box
                position={'relative'}
                overflow={'hidden'}
                w={'full'}
                border={'1px dashed #fff'}
                py={'8'}
                textAlign={'center'}
                borderRadius={'6'}
              >
                <Button>Upload a file</Button>
                <Input
                  position={'absolute'}
                  left={'0'}
                  right={'0'}
                  bottom={'0'}
                  top={'0'}
                  h={'100%'}
                  cursor={'pointer'}
                  color={'white'}
                  py={'34px'}
                  type={'file'}
                  name={'file'}
                  onChange={e => {
                    setFields({
                      ...Fields,
                      picture : e.target.value,
                    });
                  }}
                />
              </Box>
              <Input
                sx={signupstyle}
                placeholder={'Title'}
                type="Name"
                _placeholder={{ color: '#fff' }}
                value={Fields.title}
                onChange={e => {
                  setFields({
                    ...Fields,
                    name: e.target.value,
                  });
                }}
              />
              <Textarea
                sx={signupstyle}
                placeholder={'Description'}
                type="Name"
                _placeholder={{ color: '#fff' }}
                value={Fields.description}
                onChange={e => {
                  setFields({
                    ...Fields,
                    description: e.target.value,
                  });
                }}
              ></Textarea>
              <Stack
                gap={'6'}
                direction={'row'}
                justifyContent={'space-between'}
              >
                <Box w={'full'} position={'relative'}>
                  <FormLabel
                    fontWeight={'600'}
                    color={'#fff'}
                    zIndex={'1'}
                    fontSize={'13px'}
                  >
                    Date
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
                        date: e.target.value,
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
                    Time
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
                        time: e.target.value,
                      });
                    }}
                  />
                </Box>
              </Stack>
              <Stack
                gap={'6'}
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Box w={'full'} position={'relative'}>
                  <Input
                    type={'number'}
                    bg={'#212121'}
                    pt={'7'}
                    pb={'6'}
                    w={'full'}
                    color={'#fff'}
                    outline={'1px solid #fff'}
                    placeholder={'Price'}
                    onChange={e => {
                      setFields({
                        ...Fields,
                        price: e.target.value,
                      });
                    }}
                  />
                </Box>
                <Box w={'full'} position={'relative'}>
                  <Select
                    size="lg"
                    color={'#fff'}
                    outline={'1px solid #fff'}
                    placeholder="Select option"
                    onChange={e => {
                      setFields({
                        ...Fields,
                        dj: e.target.value,
                      });
                    }}
                  >
                    

                    {dj.map(e => {
                      
                  return (
                    <option value={e._id}>{e.username}</option>
                  );
                })}    
                    
                    
                </Select>
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
                  Hashtags
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
                {
                Hashtags?.length > 0 &&
                Hashtags?.map(e => {
                  return (
                    <Checkbox
                      border={'1px solid #fff'}
                      position={'relative'}
                      px={'4'}
                      py={'1'}
                      borderRadius={'6'}
                      className="chckbox"
                      value={e._id}
                      onChange={e => {
                        hashtagData.push(e.target.value);
                        sethashtagData(hashtagData);
                      }}
                    >
                      <Stack direction={'row'}>
                        <Icon
                          color={'white'}
                          fontSize={'20px'}
                          as={AiOutlinePlusCircle}
                        />
                        <Text>{e.name}</Text>
                      </Stack>
                    </Checkbox>
                  );
                })}
              </Stack>
              <Stack
                borderTop={'1px solid #fff'}
                pt={'5'}
                pb={'6'}
                gap={'6'}
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Box w={'full'} position={'relative'}>
                  <FormControl display="flex" alignItems="center">
                    <Switch id="email-alerts" colorScheme="pink" onChange={e => {
                     setFields({
                        ...Fields,
                        repeat: Fields.repeat?true:false,
                      });
                    }} value={Fields.repeat} />
                    <FormLabel
                      ml={'2'}
                      color={'#fff'}
                      htmlFor="email-alerts"
                      mb="0"
                    >
                      List Event Automatically Every Week
                    </FormLabel>
                  </FormControl>
                </Box>
                <Box w={'full'} position={'relative'}>
                  <Select
                    size="md"
                    color={'#fff'}
                    outline={'1px solid #fff'}
                    onChange={e => {
                      setFields({
                        ...Fields,
                        stock: e.target.value,
                      });
                    }}
                  >
                    <option value="500">unlimited</option>
                    <option value='50 '>50</option>
                    <option value='500'>500</option>
                    
                  </Select>
                </Box>
              </Stack>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Stack direction={'row'} w={'full'} justifyContent={'center'}>
              <Button onClick={() => submitForm()}  bg={'pHeading.100'} color={'#fff'} px={'14'}>
                Post
              </Button>
              <Button onClick={onClose}>Discard</Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Stack p={'4'} gap={'8'}>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Box display={'flex'} alignItems={'center'} gap={'4'}>
            <CustomHeading
              fontSize={'30px'}
              color={'#fff'}
              textAlign={'left'}
            >
              Live Events
            </CustomHeading>
          </Box>\
          {/*  ADD EVENT HERE */}
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
              Add New Events
            </Button>
          </Box>
          
        </Stack>

       

        <Stack flexWrap={'wrap'} direction={{base:"column",lg:"row"}} alignItems={"center"} gap={'4'}>
        {events &&  events[0].live.map((e) =>{
          return (
           <Link state = {e} as={ReactLink} to={'/dashboard/singleevent'}>
            <Box backgroundImage={Event1} w={'346px'} py={'4'}>
          <Box bg={'pHeading.100'} w={'100px'} py={'1'} mb={'6'}>
            <CustomPara marginBottom={'0'} textAlign={'center'}>
              Today
            </CustomPara>
          </Box>
          <Stack px={'4'} mb={'24'}>
            <CustomHeading
              color={'#fff'}
              fontSize={'25px'}
              textAlign={'left'}
              mb={'0'}
            >
              {e.name}
            </CustomHeading>
            <CustomPara fontSize={'14px'}>
            {e.description}
            </CustomPara>
          </Stack>
          <Stack
            px={'4'}
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Box>
              <CustomHeading
                mb={'0'}
                color={'#fff'}
                fontSize={'20px'}
                textAlign={'left'}
              >
                Sold Out
              </CustomHeading>
            </Box>
            <Box bg={'#ff4764'} px={'2'}>
              <CustomPara marginBottom={'0'}>LIVE</CustomPara>
            </Box>
          </Stack>
        </Box></Link>
      )
        })}
        
        
        </Stack>
        
    
        {/* Up comming Event */}

        <Stack>
          <Box>
            <CustomHeading
              fontSize={'30px'}
              color={'#fff'}
              textAlign={'left'}
            >
             Today's Events
            </CustomHeading>
          </Box>
          <Stack  flexWrap={'wrap'} direction={{base:"column",lg:"row"}} alignItems={"center"}  gap={'4'}>
          {events && events[0].today.map((e) =>{
          return   (
            <Box backgroundImage={Event1} rounded={"10px"} w={'346px'} py={'4'}>
          <Box bg={'pink.500'} roundedRight={"5px"} p-5 w={'100px'} py={'1'} mb={'6'}>
            <CustomPara marginBottom={'0'}  textAlign={'center'}>
              Today
            </CustomPara>
          </Box>
          <Stack px={'4'} mb={'24'}>
            <CustomHeading
              color={'#fff'}
              fontSize={'25px'}
              textAlign={'left'}
              mb={'0'}
            >
              {e.name}
            </CustomHeading>
            <CustomPara fontSize={'14px'}>
            {e.description}
            </CustomPara>
          </Stack>
          <Stack
            px={'4'}
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Box>
              <CustomHeading
                mb={'0'}
                color={'#fff'}
                fontSize={'20px'}
                textAlign={'left'}
              >
                Sold Out
              </CustomHeading>
            </Box>
            <Box bg={'#ff4764'} px={'2'}>
              <CustomPara marginBottom={'0'}>LIVE</CustomPara>
            </Box>
          </Stack>
        </Box>
          )
        })}
          </Stack>
        </Stack>

        <Stack>
          <Box>
            <CustomHeading
              fontSize={'30px'}
              color={'#fff'}
              textAlign={'left'}
            >
              Upcomming Events
            </CustomHeading>
          </Box>
          <Stack  flexWrap={'wrap'}direction={{base:"column",lg:"row"}} alignItems={"center"}  gap={'4'}>
         
          {events && events[0].upcomming.map((e) =>{
          return   (
            <Box backgroundImage={Event1} w={'346px'} py={'4'}>
          <Box bg={'pHeading.100'} w={'100px'} py={'1'} mb={'6'}>
            <CustomPara marginBottom={'0'} textAlign={'center'}>
              Today
            </CustomPara>
          </Box>
          <Stack px={'4'} mb={'24'}>
            <CustomHeading
              color={'#fff'}
              fontSize={'25px'}
              textAlign={'left'}
              mb={'0'}
            >
              {e.name}
            </CustomHeading>
            <CustomPara fontSize={'14px'}>
            {e.description}
            </CustomPara>
          </Stack>
          <Stack
            px={'4'}
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Box>
              <CustomHeading
                mb={'0'}
                color={'#fff'}
                fontSize={'20px'}
                textAlign={'left'}
              >
                Sold Out
              </CustomHeading>
            </Box>
            <Box bg={'#ff4764'} px={'2'}>
              <CustomPara marginBottom={'0'}>LIVE</CustomPara>
            </Box>
          </Stack>
        </Box>
          )
        })}
          </Stack>
        </Stack>
      </Stack>
    </MainDashboard>
    </>
  );
}
