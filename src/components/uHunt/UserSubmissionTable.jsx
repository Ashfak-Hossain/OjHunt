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
  Tag,
} from '@chakra-ui/react';
import formatSubmissionTime from './mapSubmitTime';
import { mapVerdictToLabel, mapVerdictIDtoColor } from './mapUvaVerdict';
import mapLanguageToLabel from './mapLanguagetoLabel';
import PropTypes from 'prop-types';

const UserSubmissionTable = ({ subs, rowsPerPage, problems }) => {
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

                  const problem = problems.find(
                    (problem) => problem[0] === problemId
                  );

                  // eslint-disable-next-line no-unused-vars
                  const [id, number, title] = problem;

                  const formatRuntime = (Number(runtime) / 1000).toFixed(3);

                  return (
                    <Tr key={submissionId}>
                      <Td paddingX={0}>
                        <HStack justifyContent="space-between">
                          <Box>
                            {} - {title}
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
                      <Td>
                        <Tag
                          color={mapVerdictIDtoColor(verdictId)}
                          colorScheme="cyan"
                        >
                          {mapVerdictToLabel(verdictId)}
                        </Tag>
                      </Td>
                      <Td>{mapLanguageToLabel(languageId)}</Td>
                      <Td>{formatRuntime}</Td>
                      <Td>{formatSubmissionTime(submissionTime)}</Td>
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
