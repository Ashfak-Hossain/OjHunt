import { Stat, StatLabel, StatNumber, StatGroup, Box } from '@chakra-ui/react';

const SubmissionStatus = () => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p="20px" my={5}>
      <StatGroup>
        <Stat>
          <StatLabel>Solved</StatLabel>
          <StatNumber>100</StatNumber>
        </Stat>

        <Stat>
          <StatLabel>Submissions</StatLabel>
          <StatNumber>200</StatNumber>
        </Stat>
      </StatGroup>
    </Box>
  );
};

export default SubmissionStatus;
