import { useEffect, React } from 'react';
import { Box, Button, Container, FormControl, Img, Input, Stack, Link, Checkbox} from '@chakra-ui/react';
import Signupimg from '../../../assets/images/Banner/signup.jpg';
import logo from '../../../assets/images/Banner/signlogo.png';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { HeadFootEnabler } from '../../../utilities/HeadFootEnabler';
import { AiOutlineSearch,AiOutlinePlusCircle } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import cat1 from '../../../assets/images/menu/c1.jpg';
import PrimaryBtn from '../../../components/Website/Buttons/PrimaryBtn';
import { useLocation, useNavigate } from "react-router-dom";
import { Link as ReactLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function ChooseSubcategory(props) {
  const location = useLocation();
  const [Fields,setFields] = useState(
      {
        parent : "",
        menu : []
      }
  );
  const [cart,setCart] = useState([])
  const state = location?.state;

  // store data in App Storage, should be utilized in Cart Menu Item


  useEffect(() => {
    HeadFootEnabler(location);
    
  }, [location]);

  const navigate = useNavigate();
  const user = useSelector(state=>state?.value)

  useEffect(() => {
    if(!user){
      navigate("/dashboard/login");
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
        <Container maxW={'6xl'} px={'14'}>
          <Stack>
            <Stack>
              <Img margin={'auto'} mb={'4'} w={'150px'} src={logo} />
              <CustomHeading color={'#fff'}>Add Your Menu</CustomHeading>
              <CustomPara textAlign={'center'}>
                Select a menu Sub category to get started
              </CustomPara>
            </Stack>
            <Stack>
              <Stack>
                <CustomHeading
                  mb={'0'}
                  textAlign={'left'}
                  fontSize={'25px'}
                  color={'#fff'}
                >
                  Bourbon
                </CustomHeading>
                <CustomPara color={'primaryText.200'}>Spirits</CustomPara>
              </Stack>
              <Stack gap={'6'}>
              <FormControl position={'relative'}>
                <Input
                  color={'#fff'}
                  border={'1px solid #fff !important'}
                  _placeholder={{ color: '#fff' }}
                  placeholder="Search"
                />
                <Button bg={'transparent'} right={'0'} position={'absolute'}>
                  <Icon
                    color={'white'}
                    fontSize={'20px'}
                    as={AiOutlineSearch}
                  />
                </Button>
              </FormControl>
              <Stack direction={'row'} flexWrap={'wrap'} spacing={'0'} gap={'3'}>
              {state?.items?.map((v, i) => {
               
                          return (

              <Checkbox
                p={'3px'}
                border={'0px solid #fff'}
                position={'relative'}
                borderRadius={'6'}
                spacing={'0'}
                className="chckbox"
                value={JSON.stringify(v)}
                onChange={ async (e) => {

                  let items =  await localStorage.getItem('menu')
                  items = JSON.parse(items);
        
                  
                
                  // if(items.length)
                  // { 
                
                    
                  //   items.find(obj =>{

              

                  //     if(Object.hasOwn(obj,"parentID"))
                  //     {
                  //       if( obj.parentID === v.category )
                  //       {
                  //           setFields({
                  //             parent : state.parentCategory,
                  //             parentID : state.parentID,
                  //             child : state.name,
                  //             menu : [...Fields.menu,v]
                  //           });
                  //           let data = JSON.parse(localStorage.getItem('menu'))
                  //           data.push(Fields)
                  //           data = JSON.stringify(data)
                  //           localStorage.setItem('menu',data)

                  //           console.log(JSON.parse(localStorage.getItem('menu')))
                  //       }
                 
                  //     }
                  //     else
                  //     {
                  //         setFields({
                  //           parent : state.parentCategory,
                  //           parentID : state.parentID,
                  //           child : state.name,
                  //           menu : [...Fields.menu,v]
                  //         });
                  //         let data = JSON.parse(localStorage.getItem('menu'))
                  //         data.push(Fields)
                  //         data = JSON.stringify(data)
                  //         localStorage.setItem('menu',data)
                  //     }
              
                  //     // if( obj.parentID === v.parentID )
                  //     // {
                  //     //   setFields({
                  //     //     ...Fields,
                  //     //     menu : [...Fields.menu,v]
                  //     //   });
                  //     // }
                  //   } 
                  //   );
                  // }
                  // else
                  // {
                    setFields({
                      parent : state.parentCategory,
                      parentID : state.parentID,
                      child : state.name,
                      menu : [...Fields.menu,v]
                    });
                    // let data = JSON.parse(localStorage.getItem('menu'))
                    // data.push(Fields)
                    // data = JSON.stringify(data)
                    // localStorage.setItem('menu',data)
       
                  // }
                  // setCart([...cart,Fields])

                  
                  // add item with Category to App Storage

                  // console.log(localStorage.getItem('menu'));

                  // setFields({
                  //   ...Fields,
                  //   username: e.target.value,
                  // });
                }}
                              
                            >
              <Link key={i} marginLeft={'0'}>
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
                      backgroundImage={cat1}
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
                        {v.menu_name}
                      </CustomHeading>
                    </Box>
                  </Link>
                  </Checkbox>
                 );
                })}
            <Link as={ReactLink} to={'/dashboard/Menu/choosecategory'}>
                  <Stack
                                
                                height={'125px'}
                                w={'150px'}
                                borderRadius={'6'}
                                border={'1px dashed #fff'}
                                display={'flex'}
                                alignItems={'center'}
                                textAlign={'center'}
                                justifyContent={'center'}
                              >
                                
                                  <Icon
                                    fontSize={'40px'}
                                    color={'#fff'}
                                    as={AiOutlinePlusCircle}
                                  />
                           
                              </Stack>
                              </Link>
              </Stack>
              </Stack>
            </Stack>
            <Stack>
               <Link as={ReactLink} state={Fields} to={'/dashboard/Bar/addfirstmenu'} color={'#fff'}>Continue</Link>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
