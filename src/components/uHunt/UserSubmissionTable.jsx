import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
  Stack,
} from '@chakra-ui/react';
import { formatDistanceToNow } from 'date-fns';
import mapVerdictToLabel from './mapUvaVerdictToLabel';
import mapLanguageToLabel from './mapLanguagetoLabel';
import PropTypes from 'prop-types';

const UserSubmissionTable = ({ subs, rowsPerPage }) => {
  return (
    <Stack borderWidth="1px" borderRadius="lg" overflow="hidden">
      <TableContainer padding="20px">
        {subs && subs.length > 0 ? (
          <Table size="sm">
            <Thead backgroundColor="blue.900">
              <Tr>
                <Th fontSize={15} textTransform="none">
                  Problem
                </Th>
                <Th fontSize={15} textTransform="none">
                  Verdict
                </Th>
                <Th fontSize={15} textTransform="none">
                  Lang
                </Th>
                <Th fontSize={15} textTransform="none">
                  Time
                </Th>
                <Th fontSize={15} textTransform="none">
                  Submit Time
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {subs
                .slice(0, rowsPerPage === 'ALL' ? subs.length : rowsPerPage)
                .map((sub) => {
                  const [
                    submissionId,
                    problemId,
                    verdictId,
                    runtime,
                    submissionTime,
                    languageId,
                  ] = sub;

                  const submitTimeAgo = formatDistanceToNow(
                    new Date(submissionTime * 1000),
                    { addSuffix: true }
                  );

                  return (
                    <Tr key={submissionId}>
                      <Td>{problemId}</Td>
                      <Td>{mapVerdictToLabel(verdictId)}</Td>
                      <Td>{mapLanguageToLabel(languageId)}</Td>
                      <Td>{runtime}</Td>
                      <Td>{submitTimeAgo}</Td>
                    </Tr>
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
};

export default UserSubmissionTable;
