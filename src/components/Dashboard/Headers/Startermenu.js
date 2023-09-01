import { Link, ListItem, Stack, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import CustomHeading from '../../Website/Headings/CustomHeading';
import { Link as ReactLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export default function Startermenu() {

  const location = useLocation();
  useEffect(() => {
  
  console.log(location.pathname);
    
  }, [location])
  

    const tblist = 
    {
      color : '#fff',
    }

    const colorCode = useSelector(state => state.colorCode);
    useEffect(() => {
     
    }, [colorCode])
    

  return (
    <>
      <Stack position={'fixed'}>
        <CustomHeading color={'pHeading.100'} textAlign={'left'} fontSize={'23px'}>
          Complete the following steps
        </CustomHeading>
        <UnorderedList  listStyleType={'none'} spacing={'3'}>
          <ListItem>
            <Link color={location.pathname === '/dashboard/profile' ? 'wcolor.100' : '#fff'}   as={ReactLink} to={'/dashboard/profile'}>
              Customize Your Profile
            </Link>
          </ListItem>
          <ListItem>
            <Link color={location.pathname === '/dashboard/profile/barinformation' ? 'wcolor.100' : '#fff'} as={ReactLink} to={'/dashboard/profile/barinformation'}>
              Add Your Bar’s Information
            </Link>
          </ListItem>
          <ListItem>
            <Link  color={location.pathname === '/dashboard/Menu/choosecategory' ? 'wcolor.100' : '#fff'} as={ReactLink} to={'/dashboard/Menu/choosecategory'}>
              Add Your Menu
            </Link>
          </ListItem>
          <ListItem>
            <Link color={location.pathname === '/Dashboard/Event/Addevents' ? 'wcolor.100' : '#fff'} as={ReactLink} to={'/Dashboard/Event/Addevents'}>
              Add Your Events
            </Link>
          </ListItem>
        </UnorderedList>
      </Stack>
    </>
  );
}
