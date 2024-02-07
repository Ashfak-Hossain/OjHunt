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
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import useSubmissions from '../../hooks/uHunt/useSubmissions';
import mapVerdictToLabel from '../../services/mapUvaVerdictToLabel';
import ErrorAlert from '../../Errors/error';

const UHunt = ({ userid }) => {
  const { subs, loading, error } = useSubmissions(userid);
  return (
    <>
      {error && <ErrorAlert status={error} />}
      {loading && <Text>Loading...</Text>}
      <HStack borderWidth="1px" borderRadius="base" padding="10px">
        <Text fontSize="2xl">UVa Last Submissions</Text>
      </HStack>
      <br />
      <Stack borderWidth="1px" borderRadius="lg" overflow="hidden">
        <TableContainer padding="20px">
          {subs && subs.length > 0 ? (
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>Problem</Th>
                  <Th>Verdict</Th>
                  <Th> Lang</Th>
                  <Th isNumeric> Time</Th>
                  <Th>Submit Time</Th>
                </Tr>
              </Thead>
              <Tbody>
                {subs.map((sub) => {
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
                      <Td>{languageId}</Td>
                      <Td isNumeric>{runtime}</Td>
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
    </>
  );
};

UHunt.propTypes = {
  userid: PropTypes.number.isRequired,
};

export default UHunt;
