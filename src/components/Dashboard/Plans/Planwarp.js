import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Input,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  UnorderedList,
  useDisclosure,
  Link
} from '@chakra-ui/react';
import CustomHeading from '../../../components/Website/Headings/CustomHeading';
import CustomPara from '../../../components/Website/Paragraph/CustomPara';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Icon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';

const signupstyle = {
  outline: '1px solid #fff',
  py: '25px',
  bg: '#271623b5',
  color: '#fff',
};

export default function Planwarp() {

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );


  const { isOpen: isEditSubsOpen, onOpen: onEditSubsOpen, onClose: onEditSubsClose } = useDisclosure()
  // const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()
  // const { isOpen: isAddSubCategoryOpen, onOpen: onAddSubCategoryOpen, onClose: onAddSubCategoryClose } = useDisclosure()


  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      {/* Add Category Modal Starts */}
      <Modal size={'3xl'} isCentered isOpen={isEditSubsOpen} onClose={onEditSubsClose}>
        {overlay}
        <ModalContent bg={'dashbg.100'}>
          <ModalHeader>
            <CustomPara marginBottom={'0'} fontSize={'20px'}>
              Enter Subscription Details
            </CustomPara>
          </ModalHeader>
          <ModalCloseButton color={'#fff'} />
          <ModalBody>
            <Stack gap={'4'}>
              <Input
                sx={signupstyle}
                placeholder={'Category Name'}
                type="Name"
                _placeholder={{ color: '#fff' }}
              />
              <Input
                sx={signupstyle}
                placeholder={'Free Trial'}
                type="Name"
                _placeholder={{ color: '#fff' }}
              />

              <Stack
                w={'100%'}
                direction={'row'}
                justifyContent={'space-between'}
              >
                <Box>
                  <CustomPara marginBottom={'0'} fontSize={'20px'}>
                    Subscription Features
                  </CustomPara>
                </Box>
                <Box>
                  <Link as={ReactLink} color={'#fff'} to={"/"}> <Icon as={AiOutlinePlusCircle}/> Add List</Link>
                </Box>
              </Stack>

              <Input
                sx={signupstyle}
                placeholder={'Feature 1'}
                type="Name"
                _placeholder={{ color: '#fff' }}
              />
              <Input
                sx={signupstyle}
                placeholder={'Feature 2'}
                type="Name"
                _placeholder={{ color: '#fff' }}
              />
              <Input
                sx={signupstyle}
                placeholder={'Feature 3'}
                type="Name"
                _placeholder={{ color: '#fff' }}
              />


            </Stack>
          </ModalBody>
          <ModalFooter>
            <Stack direction={'row'} w={'full'} justifyContent={'center'}>
              <Button bg={'pHeading.100'} color={'#fff'} px={'14'}>
                Continue
              </Button>
              <Button onClick={onEditSubsClose}>Discard</Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Add Category Modal Ends */}
      <Stack direction={'row'} gap={'4'} w={'full'}>
        <Box
          justifyItems={'center'}
          py={'8'}
          w={'31%'}
          border={'1px solid #fff'}
          borderRadius={'6'}
          justifyContent={'center'}
          textAlign={'center'}
          bg={'dashbg.100'}
        >
          <Stack pb={'6'} mb={'4'} borderBottom={'1px solid #fff'}>
            <Box
              mt={'-50px !important'}
              mb={'5 !important'}
              p={'2'}
              borderRadius={'8'}
              m={'auto'}
              w={'100px'}
              bg={'pHeading.100'}
            >
              <CustomPara marginBottom={'0'} textAlign={'center'}>
                Free Trial
              </CustomPara>
            </Box>
            <CustomPara textAlign={'center'}>Lorem Ipsum</CustomPara>
            <CustomHeading color={'#fff'}>$10.00</CustomHeading>
          </Stack>
          <Stack mb={6} pr={'6'}>
            <UnorderedList listStyleType={'none'} spacing={'4'}>
              <ListItem>
                <Flex alignItems={'center'} gap={'2'}>
                  <Icon
                    color={'white'}
                    fontSize={'16px'}
                    as={AiOutlineCheck}
                  />
                  <CustomPara marginBottom={'0'}>
                    Lorem Ipsum is simply dummy text of
                  </CustomPara>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex alignItems={'center'} gap={'2'}>
                  <Icon
                    color={'white'}
                    fontSize={'16px'}
                    as={AiOutlineCheck}
                  />
                  <CustomPara marginBottom={'0'}>
                    Lorem Ipsum is simply dummy text of
                  </CustomPara>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex alignItems={'center'} gap={'2'}>
                  <Icon
                    color={'white'}
                    fontSize={'16px'}
                    as={AiOutlineCheck}
                  />
                  <CustomPara marginBottom={'0'}>
                    Lorem Ipsum is simply dummy text of
                  </CustomPara>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex alignItems={'center'} gap={'2'}>
                  <Icon
                    color={'white'}
                    fontSize={'16px'}
                    as={AiOutlineCheck}
                  />
                  <CustomPara marginBottom={'0'}>
                    Lorem Ipsum is simply dummy text of
                  </CustomPara>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex alignItems={'center'} gap={'2'}>
                  <Icon
                    color={'white'}
                    fontSize={'16px'}
                    as={AiOutlineCheck}
                  />
                  <CustomPara marginBottom={'0'}>
                    Lorem Ipsum is simply dummy text of
                  </CustomPara>
                </Flex>
              </ListItem>
            </UnorderedList>
          </Stack>
          <Stack>
            <Button
              bg={'#D6009A'}
              margin={'auto'}
              px={'12'}
              color={'#fff'}
              py={'6'}
              _hover={{
                bg: '#000',
              }}
              onClick={() => {
                setOverlay(<OverlayOne />);
                onEditSubsOpen();
              }}
            >
              Edit
            </Button>
          </Stack>
        </Box>
      </Stack>

    </>
  );
}
