import React from 'react';
import {
  Tr,
  Td,
  HStack,
  Box,
  Link,
  IconButton,
  Image,
  Tag,
} from '@chakra-ui/react';

import mapLanguageToLabel from './mapLanguageToLabel';
import formatSubmissionTime from './mapSubmitTime';
import { mapVerdictToLabel, mapVerdictIDtoColor } from './mapUvaVerdict';
import { problemPdfLink, problemUvaLink } from './LinkConverter';
import PropTypes from 'prop-types';

const SubmissionRow = ({ submission, problems }) => {
  const [
    submissionId,
    problemId,
    verdictId,
    runtime,
    submissionTime,
    languageId,
  ] = submission;

  const problem = problems.find((problem) => problem[0] === problemId);

  console.log(submission);

  // eslint-disable-next-line no-unused-vars
  const [id, number, title] = problem;

  const formatRuntime = (Number(runtime) / 1000).toFixed(3);

  return (
    <Tr key={submissionId}>
      <Td paddingX={0} paddingY={1}>
        <HStack justifyContent="space-between">
          <Box>
            <Link color="cyan.300" href={problemPdfLink(number)} isExternal>
              {number}
            </Link>{' '}
            -{' '}
            <Link href={problemUvaLink(id)} isExternal>
              {title}
            </Link>
          </Box>
          <IconButton
            aria-label="uDebug"
            variant="ghost"
            icon={<Image src="/udebug.webp" alt="uDebug" boxSize="20px" />}
            onClick={() => {
              window.open(`https://www.udebug.com/UVa/${number}`, '_blank');
            }}
          />
        </HStack>
      </Td>
      <Td>
        <Tag color={mapVerdictIDtoColor(verdictId)} colorScheme="cyan">
          {mapVerdictToLabel(verdictId)}
        </Tag>
      </Td>
      <Td>{mapLanguageToLabel(languageId).name}</Td>
      <Td>{formatRuntime}</Td>
      <Td>{formatSubmissionTime(submissionTime)}</Td>
    </Tr>
  );
};

SubmissionRow.propTypes = {
  submission: PropTypes.array.isRequired,
  problems: PropTypes.array,
};

export default SubmissionRow;
