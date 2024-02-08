import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import {
  HStack,
  Image,
  Show,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
} from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import { FaHamburger } from 'react-icons/fa';
import OnlineJudgeNavigation from './OnlineJudgeNavigation';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack justifyContent="space-between" paddingY="10px">
      <HStack>
        <Show below="lg">
          <IconButton
            variant="outline"
            aria-label="menu"
            icon={<FaHamburger />}
            onClick={onOpen}
          />
        </Show>
        <Image src={logo} alt="logo" boxSize="50px" borderRadius="full" />
        <Text fontSize="2xl" fontWeight="bold">
          OJ Hunt
        </Text>
      </HStack>

      <ColorModeSwitch />

      <Drawer isOpen={isOpen} onClose={onClose} placement="left" size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Online Judges</DrawerHeader>
          <DrawerBody>
            <OnlineJudgeNavigation onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export default NavBar;
