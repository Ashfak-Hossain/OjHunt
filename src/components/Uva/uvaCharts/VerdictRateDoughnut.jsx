import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Flex,
  Stat,
  StatLabel,
  List,
  ListItem,
  Center,
} from '@chakra-ui/react';
import { calculateVerdictData } from './chartData';
import PropTypes from 'prop-types';

ChartJS.register(ArcElement, Tooltip);

const VerdictRateDoughnut = ({ submissionProblems }) => {
  const data = calculateVerdictData(submissionProblems);

  return (
    <Box background={'#1F2733'} borderRadius="lg" p="20px" my={5}>
      <Stat mb={8}>
        <StatLabel fontSize={20} fontWeight={'bold'} color={'darkcyan'}>
          Verdict Rate
        </StatLabel>
      </Stat>
      <Flex direction="column" alignItems="center">
        <Flex alignItems="center">
          <Box mr={8}>
            <Center>
              <Doughnut data={data} />
            </Center>
          </Box>
          <Box>
            <List spacing={3}>
              {data.labels.map((label, i) => {
                return (
                  <ListItem key={i}>
                    {label} : {data.datasets[0].data[i]}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

VerdictRateDoughnut.propTypes = {
  submissionProblems: PropTypes.array.isRequired,
};

export default VerdictRateDoughnut;
