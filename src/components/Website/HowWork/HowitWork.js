import {
  Container,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Image,
  Heading,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import Aboutbanner from '../../../assets/images/Banner/about.png';
import StepMobile from '../../../assets/images/shorts/stepmobile.png';
import Step1Mobile from '../../../assets/images/shorts/stepmobile1.png';
import React from 'react';
import CustomHeading from '../Headings/CustomHeading';
import CustomPara from '../Paragraph/CustomPara';

export default function HowitWork() {
  const tb = {
    color: '#fff',
    paddingLeft: '18px',
    _selected: {
      borderBottom: '2px solid transparent',
      borderLeft: '4px solid #dc0b9b',
    },
  };

  return (
    <>
      <Stack
        backgroundImage={Aboutbanner}
        bgSize={'cover'}
        bgRepeat={'no-repeat'}
        bgAttachment={{ base: 'inherit', md: 'fixed' }}
        py={{ base: '6', md: '24', xl: '14', '2xl': '24' }}
        position={'relative'}
        mt={'0 !important'}
      >
        <Container maxW={'6xl'} p={{ base: '15px !important', '2xl': 0 }}>
          <Tabs>
            <Stack direction={{base:"column",lg:"row"}} alignItems={'center'}>
              <Box w={{base:"100%",lg:"30%"}}>
                <CustomHeading textAlign={{base:"center",lg:"left"}} fontSize={'35px'}>
                  How It Works
                </CustomHeading>
                <TabList
                  borderLeft={'2px solid #fff'}
                  pl={'0 !important'}
                  borderBottom={'none'}
                  display={'block'}
                >
                  <Tab sx={tb}>Create A Profile</Tab>
                  <Tab sx={tb}>Choose Your Subscription Plan</Tab>
                  <Tab sx={tb}>Add Your Menu</Tab>
                  <Tab sx={tb}>Add Your Events</Tab>
                  <Tab sx={tb}>Add Your VIP</Tab>
                  <Tab sx={tb}>Customize</Tab>
                  <Tab sx={tb}>Launch</Tab>
                </TabList>
              </Box>

              <Box w={{base:"100%",lg:"70%"}}>
                <TabPanels>
                  <TabPanel>
                    <Stack
                      direction={{ base: 'column', lg: 'row' }}
                      gap={'6'}
                      alignItems={'center'}
                    >
                      <Box w={{ base: '100%', lg: '40%' }}>
                        <Image src={StepMobile} />
                      </Box>
                      <Box w={{base:"100%",lg:"60%"}}>
                        <Heading
                          color={'#fff'}
                          as="h2"
                          size="lg"
                          fontWeight={'500'}
                          mb={'3'}
                        >
                          Create a Profile
                        </Heading>
                        <CustomPara color={'#9b9999'}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat.
                        </CustomPara>
                        <Heading
                          as="h6"
                          size="xs"
                          color={'#dc0b9b'}
                          fontWeight={'500'}
                          mb={'3'}
                        >
                          Before you sign up, make sure you’re ready with the
                          following:
                        </Heading>
                        <UnorderedList className="listhow">
                          <ListItem>Lorem ipsum dolor sit amet</ListItem>
                          <ListItem>Consectetur adipiscing elit</ListItem>
                          <ListItem>Integer molestie lorem at massa</ListItem>
                          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                        </UnorderedList>
                      </Box>
                    </Stack>
                  </TabPanel>
                </TabPanels>
              </Box>
            </Stack>
          </Tabs>
        </Container>
      </Stack>
    </>
  );
}
