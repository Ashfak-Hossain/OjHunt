import { Text, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import useSubmissions from '../../hooks/uHunt/useSubmissions';
import ErrorAlert from '../../Errors/error';
import UserSubmissionTable from './userSubmissionTable';
import TableRowsPerPage from './TableRowsPerPage';

const UHunt = ({ userid }) => {
  const { subs, loading, error } = useSubmissions(userid);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  return (
    <>
      {error && <ErrorAlert message={error} />}
      {loading && <Text>Loading...</Text>}
      <HStack
        borderWidth="1px"
        borderRadius="base"
        padding="10px"
        justifyContent="space-between"
      >
        <Text fontSize="2xl">UVa Last Submissions</Text>
        <HStack>
          <Text fontSize="md">Rows per page: </Text>
          <TableRowsPerPage onChange={setRowsPerPage} value={rowsPerPage} />
        </HStack>
      </HStack>
      <br />

      <UserSubmissionTable subs={subs} rowsPerPage={rowsPerPage} />
    </>
  );
};

UHunt.propTypes = {
  userid: PropTypes.number.isRequired,
};

export default UHunt;
