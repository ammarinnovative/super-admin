import { React } from 'react';
import {
  Container,
  Img,
  Stack,
  UnorderedList,
  ListItem,
  Link,
  Box,
  Button,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { GET, POST } from '../../../utilities/ApiProvider.js';
import { Link as ReactLink, useLocation, useNavigate } from 'react-router-dom';
import Signupimg from '../../../assets/images/Banner/signup.jpg';
import logo from '../../../assets/images/Banner/signlogo.png';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import cat1 from '../../../assets/images/menu/c1.jpg';
import { useSelector } from 'react-redux';
import { baseUrl,imgUrl } from '../../../utilities/Config.js';
import Startermenu from '../../../components/Dashboard/Headers/Startermenu.js';

export default function ChooseCategory() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [menu, setmenu] = useState([]);
  const user = useSelector(state => state?.value);
 
 

  const getUserData = async () => {
    setIsLoading(true);
    let response = await GET(`admin/category`, {
      authorization: `Bearer ${user?.verificationToken}`,
    });
    setmenu(response.data);
  
  };

  useEffect(() => {
    getUserData();
    HeadFootEnabler(location);
  }, [location]);

  const tblist = {
    color: '#fff',
  };
  const [localItem, setLocalItem] = useState(false);

  const navigate = useNavigate();

  useEffect((user) => {
    if(!user){
      navigate("/dashboard/login")
    }
  }, [user]);


  return (
    <>
      <Stack
          backgroundRepeat={'no-repeat'}
          backgroundSize={'cover'}
          backgroundImage={Signupimg}
         minH={'100vh'}
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
                  <CustomHeading color={'#fff'}>Add Your Menu</CustomHeading>
                  <CustomPara textAlign={'center'}>
                    Select a menu category to get started
                  </CustomPara>
                </Stack>
                <Stack gap={'8'}>
                  {menu?.length > 0 &&
                    menu.map((v, i) => {
                      return (
                        <Stack key={i}>
                          <Box>
                            <CustomHeading
                              textAlign={'left'}
                              fontSize={'25px'}
                              color={'#fff'}
                            >
                              {v.description}
                            </CustomHeading>
                          </Box>
                          <Stack
                            direction={'row'}
                            gap={'4'}
                            flexWrap={'wrap'}
                            spacing={'0'}
                          >
                             {v.subcategories.map((item, i) => {
  
                              // adding Category to the item
                              item.parentCategory = v.description
                              item.parentID = v._id
  
                            
                        return (
  
                            <Link as={ReactLink} state={item} to={'/dashboard/Menu/Choosesubcategory'} key={i} marginLeft={'0'}>
                              <Box
                                position={'relative'}
                                pr={'4'}
                                display={'flex'}
                                justifyContent={'right'}
                                alignItems={'flex-end'}
                                borderRadius={'8px'}
                                h={'125px'}
                                w={'198px'}
                                zIndex={'1'}
                                backgroundImage={`${imgUrl}${item.category_image}`}
                                _before={{
                                  content: "''",
                                  w: '100%',
                                  h: '100%',
                                  position: 'absolute',
                                  bg: '#000',
                                  right: '0',
                                  left: '0',
                                  zIndex: '-1',
                                  borderRadius: '6px',
                                  opacity: '0.6',
                                }}
                              >
                                <CustomHeading
                                  fontSize={'20px'}
                                  fontWeight={'500'}
                                  color={'#fff'}
                                >
                                  {item.name}
                                </CustomHeading>
                              </Box>
                            </Link>
                             );
                            })}
                          </Stack>
                        </Stack>
                      );
                    })}
                </Stack>
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
