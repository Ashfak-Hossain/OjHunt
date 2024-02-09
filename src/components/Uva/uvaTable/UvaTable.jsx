import { Text, HStack } from '@chakra-ui/react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import UserSubmissionTable from './userSubmissionTable/UserSubmissionTable';
import TableRowSelector from './userSubmissionTable/TableRowSelector';

const UvaTable = ({ subs, problems }) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  return (
    <>
      <HStack
        background={'#1F2733'}
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
  problems: PropTypes.array.isRequired,
  subs: PropTypes.array.isRequired,
};

export default UvaTable;
