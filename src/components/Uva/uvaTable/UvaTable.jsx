import { Text, HStack } from '@chakra-ui/react';
import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import UserSubmissionTable from './userSubmissionTable/UserSubmissionTable';
import TableRowSelector from './userSubmissionTable/TableRowSelector';
import Loading from '../../Loading';

const UvaTable = ({ subs, problems, loading }) => {
  console.log('uvaTable component', loading);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const memoizedUserSubmissionTable = useMemo(
    () => (
      <UserSubmissionTable
        subs={subs}
        problems={problems}
        rowsPerPage={rowsPerPage}
      />
    ),
    [subs, problems, rowsPerPage]
  );

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
      {loading ? <Loading /> : memoizedUserSubmissionTable}
    </>
  );
};

UvaTable.propTypes = {
  problems: PropTypes.array.isRequired,
  subs: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default UvaTable;
