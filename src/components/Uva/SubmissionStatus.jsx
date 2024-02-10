import {
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Box,
  StatHelpText,
  Link,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';
import { solvedProblems, countSubmissions, LinkStyles } from './utils';
import { problemPdfLink } from './uvaTable/userSubmissionTable/LinkConverter';
import binarySearch from './binarySearch';

const SubmissionStatus = ({ submissionProblems, problems }) => {
  const totalSolvedProblems = solvedProblems(submissionProblems);

  const triedButNotSolvedProblems = submissionProblems.filter(
    (problem) => !totalSolvedProblems.includes(problem[1])
  ).length;

  const renderProblemLinks = (problemIDs) => {
    return problemIDs.map((problemID) => {
      const problemNumber = binarySearch(problems, problemID);

      return (
        <Link
          key={problemID}
          href={problemPdfLink(problemNumber)}
          isExternal
          {...LinkStyles}
        >
          {problemNumber}
        </Link>
      );
    });
  };

  return (
    <Box background={'#1F2733'} borderRadius="lg" p="20px" my={5}>
      <StatGroup>
        <Stat>
          <StatLabel fontSize={20} fontWeight={'bold'} color={'darkcyan'}>
            Solved
          </StatLabel>
          <StatNumber>{totalSolvedProblems.length}</StatNumber>
        </Stat>

        <Stat>
          <StatLabel fontSize={20} fontWeight={'bold'} color={'darkcyan'}>
            Submissions
          </StatLabel>
          <StatNumber>{countSubmissions(submissionProblems)}</StatNumber>
        </Stat>

        <Stat>
          <StatLabel fontSize={20} fontWeight={'bold'} color={'darkcyan'}>
            Tried but not yet solved{' '}
          </StatLabel>
          <StatNumber>{triedButNotSolvedProblems}</StatNumber>
        </Stat>
      </StatGroup>

      <Box mt={5}>
        <Stat>
          <StatLabel>Solved Problems </StatLabel>
          <StatHelpText>{renderProblemLinks(totalSolvedProblems)}</StatHelpText>
        </Stat>
      </Box>
      <Box mt={5}>
        <Stat>
          Unsolved problems
          <StatHelpText>
            {renderProblemLinks(
              submissionProblems
                .filter((problem) => !totalSolvedProblems.includes(problem[1]))
                .map((problem) => problem[1])
            )}
          </StatHelpText>
        </Stat>
      </Box>
    </Box>
  );
};

SubmissionStatus.propTypes = {
  submissionProblems: PropTypes.array.isRequired,
  problems: PropTypes.array.isRequired,
};

export default SubmissionStatus;
