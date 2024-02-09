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
  HStack,
  IconButton,
  Image,
  Box,
} from '@chakra-ui/react';
import { formatDistanceToNow } from 'date-fns';
import mapVerdictToLabel from './mapUvaVerdictToLabel';
import mapLanguageToLabel from './mapLanguagetoLabel';
import PropTypes from 'prop-types';

const UserSubmissionTable = ({ subs, rowsPerPage, problems }) => {
  console.log(problems);

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

                  const problem = problems.find(
                    (problem) => problem[0] === problemId
                  );

                  // eslint-disable-next-line no-unused-vars
                  const [id, number, title] = problem;

                  return (
                    <Tr key={submissionId}>
                      <Td paddingX={0}>
                        <HStack justifyContent="space-between">
                          <Box>
                            {number} - {title}
                          </Box>
                          <IconButton
                            aria-label="uDebug"
                            variant="ghost"
                            icon={
                              <Image
                                src="/udebug.webp"
                                alt="uDebug"
                                boxSize="20px"
                              />
                            }
                            onClick={() => {
                              window.open(
                                `https://www.udebug.com/UVa/${number}`,
                                '_blank'
                              );
                            }}
                          />
                        </HStack>
                      </Td>
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
  problems: PropTypes.array.isRequired,
};

export default UserSubmissionTable;
