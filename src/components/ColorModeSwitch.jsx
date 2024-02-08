import { HStack, IconButton, useColorMode } from '@chakra-ui/react';

import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <IconButton
        aria-label="toggle dark mode"
        variant="ghost"
        isRound={true}
        fontSize={25}
        icon={
          colorMode === 'dark' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />
        }
        onClick={toggleColorMode}
      />
    </HStack>
  );
};

export default ColorModeSwitch;
