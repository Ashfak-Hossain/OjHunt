import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} alt="logo" boxSize="60px" borderRadius="full" />
      <Text>Online Judge Hunt</Text>
    </HStack>
  );
};

export default NavBar;
