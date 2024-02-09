import { Box, Center } from '@chakra-ui/react';
import React from 'react';

const NotFound = () => {
  return (
    <Box>
      <Center height={'100vh'} fontSize="7xl" fontWeight="bold" color="red.500">
        404: Route Not Found
      </Center>
    </Box>
  );
};

export default NotFound;
