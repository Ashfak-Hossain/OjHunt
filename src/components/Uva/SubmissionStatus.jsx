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
import { solvedProblems, countSubmissions } from './SolveAndSubmissionStats';
import { problemPdfLink } from './uvaTable/userSubmissionTable/LinkConverter';
import binarySearch from './binarySearch';

const SubmissionStatus = ({ submissionProblems, problems }) => {
  const totalSolvedProblems = solvedProblems(submissionProblems);

  return (
    <Box borderWidth="1px" borderRadius="lg" p="20px" my={5}>
      <StatGroup>
        <Stat>
          <StatLabel>Solved</StatLabel>
          <StatNumber>{totalSolvedProblems.length}</StatNumber>
        </Stat>

        <Stat>
          <StatLabel>Submissions</StatLabel>
          <StatNumber>{countSubmissions(submissionProblems)}</StatNumber>
        </Stat>
      </StatGroup>

      <Box mt={5}>
        <Stat>
          <StatLabel>Solved Problems </StatLabel>
          <StatHelpText>
            {totalSolvedProblems.map((problemID, index) => {
              //? Binary search to find the problem number in O(log n) time complexity
              const problemNumber = binarySearch(problems, problemID);

              if (problemNumber !== -1) {
                return (
                  <Link
                    key={index}
                    href={problemPdfLink(problemNumber)}
                    isExternal
                    _hover={{
                      textDecoration: 'none',
                      color: 'cyan.400',
                      fontWeight: 'extrabold',
                    }}
                    style={{ margin: '0.3em' }}
                  >
                    {problemNumber}
                  </Link>
                );
              }

              return (
                <span key={index} style={{ color: 'red' }}>
                  Problem {problemID} not found
                </span>
              );
            })}
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
