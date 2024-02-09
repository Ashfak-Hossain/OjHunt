import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Text,
  Stack,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import SubmissionRow from './SubmissionTableRow';

const UserSubmissionTable = ({ subs, rowsPerPage, problems }) => {
  return (
    <Stack borderWidth="1px" borderRadius="lg" overflow="hidden">
      <TableContainer padding="20px">
        {subs && subs.length > 0 ? (
          <Table size="sm">
            <Thead backgroundColor="blue.900">
              <Tr>
                {['Problem', 'Verdict', 'Lang', 'Time', 'Submit Time'].map(
                  (head) => (
                    <Th key={head} fontSize={15} textTransform="none">
                      {head}
                    </Th>
                  )
                )}
              </Tr>
            </Thead>
            <Tbody>
              {subs
                .slice(0, rowsPerPage === 'ALL' ? subs.length : rowsPerPage)
                .map((sub) => {
                  return (
                    <SubmissionRow
                      key={sub[0]}
                      submission={sub}
                      problems={problems}
                    />
                  );
                })}
            </Tbody>
          </Table>
        ) : (
          <Text>No Submissions</Text>
        )}
      </TableContainer>
    </Stack>
  );
};

UserSubmissionTable.propTypes = {
  subs: PropTypes.array.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  problems: PropTypes.array.isRequired,
};

export default UserSubmissionTable;
