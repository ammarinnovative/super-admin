import { Stack } from '@chakra-ui/react';
import { useEffect, React } from 'react';
import { useLocation } from 'react-router';
import SidebarWithHeader from '../../../components/Order/Header/Sidebar';



export default function OrderDashboard({ children, title }) {
    const location = useLocation();

    useEffect(() => {
      if (location.pathname.split('/')[1].toLowerCase() === 'order') {
        document.getElementById('Footer').style.display = 'none';
        document.getElementById('Header').style.display = 'none';
      } else {
        document.getElementById('Footer').style.display = 'block';
        document.getElementById('Header').style.display = 'block';
      }
    }, [location.pathname]);
  
    return (
      <Stack
        direction={'row'}
        gap={{ base: '3', md: '12' }}
        overflow={{ base: 'hidden', md: 'initial' }}
      >
        <Stack w={'100%'}>
          <SidebarWithHeader children={children} title={title} />
        </Stack>
       
      </Stack>
    );
  }
  