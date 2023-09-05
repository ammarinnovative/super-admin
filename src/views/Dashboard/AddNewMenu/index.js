import {
  Box,
  Checkbox,
  Input,
  Link,
  Stack,
  Text,
<<<<<<< HEAD
  Button,
  Textarea,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
=======
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
>>>>>>> parent of 102f974 (lelo)
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import MainDashboard from '../MainDashboard';
import CategoryMenu from '../../../components/Dashboard/Menu/CategoryMenu.js';
import BorderButton from '../../../components/Website/Buttons/BorderButton';
import { MdKeyboardArrowDown } from 'react-icons/md';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import { Icon } from '@chakra-ui/icons';
import { POST } from '../../../utilities/ApiProvider';

export default function Menu() {
  const [fields, setFields] = useState({
    menu_name: '',
    description: '',
    categories: [{ parent: '', child: [] }],
    pictures: '',
  });
  const [user,setUser] = useState("");




  const submitData = async () => {
    console.log(fields);
    const formData = new FormData();
    for (const key in fields) {
      if (fields.hasOwnProperty(key)) {
        formData.append(key, fields[key]);
      }
    }

    console.log(fields);
  
    const res = await POST("admin/menu",formData,{
      authorization:`bearer ${user?.verificationToken}`
    });

    console.log(res);

  
  
  };


  const getMenuData = res => {
    setFields({
      ...fields,
      categories: [{ parent: res, ...fields.categories }],
    });
  };


  const getSubCatId = res => {
    setFields({
      ...fields,
      categories: [{ ...fields.categories, child: [res] }],
    });
  };

  const selector = useSelector(state=>state);
  

  useEffect(()=>{
    setUser(selector?.value);
  },[selector]);

  

=======
import { Icon } from '@chakra-ui/icons';


export default function Menu() {
>>>>>>> parent of 102f974 (lelo)
  return (
    <>
      <MainDashboard>
        <Stack p={'4'} gap={'8'}>
          {/* First Div Starts */}
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Box display={'flex'} alignItems={'center'} gap={'4'}>
              <CustomHeading
                fontSize={'30px'}
                color={'#fff'}
                textAlign={'left'}
              >
                Enter your menu details
              </CustomHeading>
            </Box>
            <Box>
              <BorderButton Url={'./'} Btnctn={'Continue'} />
            </Box>
          </Stack>
          {/* First Div Ends */}

          {/* Second Div Starts */}
<<<<<<< HEAD
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            verticalAlign={'top'}
          >
            <form id="form">
              <Box w={'60%'} alignItems={'center'} gap={'4'}>
                <Stack w={'100%'}>
                  <Box>
                    <Input
                      w={'100%'}
                      py={'6'}
                      placeholder={'Menu Name'}
                      type={'Text'}
                      fontSize={'14px'}
                      border={'1px solid #fff !important'}
                      borderRadius={'10px'}
                      onChange={e => {
                        setFields({ ...fields, menu_name: e.target.value });
                      }}
                      fontWeight={500}
                      color={'#fff !important'}
                      _focus={{
                        border: '2px solid #fff !important',
                        borderColor: '#fff !important',
                        outline: '0px !impoartant',
                      }}
                      _placeholder={{ color: '#fff' }}
                    />
                    <Textarea
                      mt={'15px'}
                      py={'4'}
                      color={'#fff'}
                      borderRadius={'10px'}
                      height={'100px'}
                      placeholder={'Description'}
                      onChange={e => {
                        setFields({ ...fields, description: e.target.value });
                      }}
                      fontSize={'14px'}
                      border={'1px solid #fff !important'}
                      fontWeight={500}
                      borderColor={'primaryBlue.100'}
                      resize={'none'}
                      _focus={{
                        borderColor: 'primaryOrange.100',
                        outline: 'none',
                      }}
                      _placeholder={{ color: '#fff' }}
                    ></Textarea>
                    <Input
                      color={'white'}
                      name=""
                      onChange={e => {
                        setFields({ ...fields, pictures: e.target.files[0] });
                      }}
                      borderColor="white"
                      border={'1px solid white'}
                      type="file"
                    />
                  </Box>
                </Stack>
              </Box>
              <Button onClick={submitData}>sub</Button>
            </form>
            <CategoryMenu getSubCatId={getSubCatId} getMenuData={getMenuData} />
=======
          <Stack direction={'row'} justifyContent={'space-between'} verticalAlign={'top'}>
            <Box w={'60%'} alignItems={'center'} gap={'4'}>
              <Stack w={'100%'}>
                <Box>
                  <Input
                    w={'100%'}
                    py={'6'}
                    placeholder={'Menu Name'}
                    type={'Text'}
                    fontSize={'14px'}
                    border={'1px solid #fff !important'}
                    borderRadius={'10px'}
                    fontWeight={500}
                    color={'#fff !important'}
                    _focus={{
                      border: '2px solid #fff !important',
                      borderColor: '#fff !important',
                      outline: '0px !impoartant',

                    }}
                    _placeholder={{ color: '#fff' }}
                  />
                  <Textarea
                    mt={'15px'}
                    py={'4'}
                    color={'#fff'}
                    borderRadius={'10px'}
                    height={'100px'}
                    placeholder={'Description'}
                    fontSize={'14px'}
                    border={'1px solid #fff !important'}
                    fontWeight={500}
                    borderColor={'primaryBlue.100'}
                    resize={'none'}
                    _focus={{
                      borderColor: 'primaryOrange.100',
                      outline: 'none',
                    }}
                    _placeholder={{ color: '#fff' }}
                  ></Textarea>
                </Box>
              </Stack>
            </Box>
            <CategoryMenu />
>>>>>>> parent of 102f974 (lelo)
          </Stack>
          {/* Second Div Ends */}
        </Stack>
      </MainDashboard>
    </>
  );
}
