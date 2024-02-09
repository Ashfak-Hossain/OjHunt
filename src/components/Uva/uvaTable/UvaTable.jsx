import { Text, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import useSubmissions from '../../../hooks/uHunt/useSubmissions';
import ErrorAlert from '../../../Errors/error';
import UserSubmissionTable from './userSubmissionTable/UserSubmissionTable';
import TableRowSelector from './userSubmissionTable/TableRowSelector';

const UvaTable = ({ userid, problems }) => {
  const { subs, error } = useSubmissions(userid);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  return (
    <>
      {error && <ErrorAlert message={error} />}

      <HStack
        borderWidth="1px"
        borderRadius="base"
        padding="10px"
        justifyContent="space-between"
      >
        <Text fontSize="2xl">UVa Last Submissions</Text>
        <HStack>
          <Text fontSize="md">Rows per page: </Text>
          <TableRowSelector onChange={setRowsPerPage} value={rowsPerPage} />
        </HStack>
      </HStack>
      <br />

      <UserSubmissionTable
        subs={subs}
        rowsPerPage={rowsPerPage}
        problems={problems}
      />
    </>
  );
};

UvaTable.propTypes = {
  userid: PropTypes.number.isRequired,
  problems: PropTypes.array.isRequired,
};

export default UvaTable;
