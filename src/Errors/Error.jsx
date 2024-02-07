import { Alert, AlertIcon, AlertTitle, Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const ErrorAlert = ({ message }) => {
  return (
    <Box marginY="20px">
      <Alert status="error" borderRadius="base">
        <AlertIcon />
        <AlertTitle>{message}</AlertTitle>
      </Alert>
    </Box>
  );
};

ErrorAlert.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorAlert;
