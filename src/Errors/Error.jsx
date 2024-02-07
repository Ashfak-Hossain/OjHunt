import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const ErrorAlert = ({ message }) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>{message}</AlertTitle>
    </Alert>
  );
};

ErrorAlert.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorAlert;
