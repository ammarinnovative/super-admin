import React, { ReactNode } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Stack,
  Heading,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import { AiOutlineDollar } from 'react-icons/ai';
import { Link as Reactlink } from 'react-router-dom';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import logo from '../../../assets/images/logo/logo2.png';

const LinkItems = [
  { name: 'Orders', icon: FiHome, url: '/Order' },
  { name: 'Tips Earned', icon: FiTrendingUp, url: '/Order/tips' },

];

export default function SidebarWithHeader({ children, title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box 
      minH="100vh" 
      bg={useColorModeValue('#121212', '#000')}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} title={title} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}
const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('#212121', '#212121')}
      borderRight="1px"
      borderRightColor={useColorModeValue('#212121', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        pt={'4'}
        alignItems="center"
        mb={'5'}
        justifyContent="center"
      >
        <Link  as={Reactlink} to="/dashboard"><Image w={'90px'} src={logo} m={'auto'} />
        <CloseButton
          color={'#7a7a7a'}
          display={{ base: 'flex', md: 'none' }}
          onClick={onClose}
        /></Link>
        
      </Flex>
      {LinkItems.map(link => (
        <NavItem key={link.name} icon={link.icon} url={link.url}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, url, children, ...rest }) => {
  return (
    <Link
      as={Reactlink}
      to={url ?? ''}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        color="#7a7a7a"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'pHeading.100',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            color={'#7a7a7a'}
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, title, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: '270px' }}
      mr={{ base: 0, md: 30 }}
      mt={{ base: 0, md: 6 }}
      px={{ base: 4, md: 4 }}
      display={{base: 'flex', md : 'none'}}
      height="20"
      alignItems="center"
      bg={useColorModeValue('#212121', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('#212121', '#212121')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        color={'#7a7a7a'}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Image display={{ base: 'flex', md: 'none' }}  w={'80px'} src={logo} />

      
    </Flex>
  );
};
