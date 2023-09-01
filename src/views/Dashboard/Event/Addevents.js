import { Box, Button,Text, Checkbox, Container, FormControl, FormLabel, Img, Input, Select, Stack, Switch, Textarea, useToast } from '@chakra-ui/react';
import Signupimg from '../../../assets/images/Banner/signup.jpg';
import logo from '../../../assets/images/Banner/signlogo.png';
import React from 'react';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { Icon } from '@chakra-ui/icons';
import { GET, POST } from '../../../utilities/ApiProvider';
import { AiOutlineSearch, AiOutlinePlusCircle } from 'react-icons/ai';
import { Link as ReactLink } from 'react-router-dom';
import { useState } from 'react';
import moment from 'moment';
import { baseUrl } from '../../../utilities/Config';
import Startermenu from '../../../components/Dashboard/Headers/Startermenu';
import { useSelector } from 'react-redux';

export default function Addevents() {


    const [posts, setPost] = useState([]);
    const [Hashtags, setHashtags] = useState([]);
    const [hashtagData, sethashtagData] = useState([]);
    const toast = useToast();
    const [dj, setDj] = useState([]);

    const [isLoading, setisLoading] = useState(false);

    const location = useLocation();

    useEffect(() => {
      HeadFootEnabler(location);
    }, [location]);


  const navigate = useNavigate();

 
  const user = useSelector(state=>state?.value);
  useEffect(() => {
    if(!user){
      navigate("/dashboard/login");
    }
  }, [user]);


    useEffect(() => {

        getHastags();
        getPosts();
        getDJ();
      }, []);
    
      const getPosts = async () => {
        var response = await GET('post');
        setPost(response.data);
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
        upload_document: {},
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
    
    
    
          var response = await POST('event', formData);
    
    
       
    
          toast({
            description: response.message,
            status: "success",
            isClosable: true,
            position: 'bottom-left',
            duration: 2500,
          });
          
    
      
          setisLoading(false);
        } catch (err) {
         
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
    
      const signupstyle = {
        outline: '1px solid #fff',
        py: '25px',
        bg: '#271623b5',
        color: '#fff',
      };
    


  return (
    <>
  
      <Stack
        backgroundRepeat={'no-repeat'}
        backgroundSize={'cover'}
        backgroundImage={Signupimg}
        py={'32'}
      >
        <Container maxW={'full'} px={'14'}>
        <Stack direction={'row'} gap={'8'}>
        <Stack w={'350px'}>
              <Startermenu />
            </Stack>
            <Stack w={'70%'} gap={'8'}>
          <Stack>
              <Img margin={'auto'} mb={'4'} w={'150px'} src={logo} />
              <CustomHeading color={'#fff'}>Add Your Events</CustomHeading>
              <CustomPara  textAlign={'center'}>Enter your details</CustomPara>
            </Stack>
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
                     
                      { dj?.length > 0 && dj?.map(e => {
                      
                        
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
              <Button onClick={() => submitForm()}  bg={'pHeading.100'} color={'#fff'} px={'14'}>
                  Post
                </Button>
          </Stack>
          <Stack w={'350px'}>
          <Button
             as={ReactLink} to={'/dashboard'}
              bgColor={'transparent'}
              w={{base : 'fit-content', '2xl' : '150px' }}
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
