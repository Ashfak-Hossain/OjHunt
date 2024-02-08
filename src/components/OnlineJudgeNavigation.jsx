import {
  Button,
  List,
  ListItem,
  Stack,
  useColorModeValue,
  Box,
  Image,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import onlineJudges from '../data/onlineJudges';

const OnlineJudgeNavigation = () => {
  const [activeJudge, setActiveJudge] = useState(null);
  const buttonColor = useColorModeValue('gray');
  return (
    <Stack>
      <List spacing={3}>
        <ListItem>
          <Button
            as={Link}
            to="/"
            colorScheme={activeJudge === null ? buttonColor : 'gray'}
            variant={activeJudge === null ? 'solid' : 'outline'}
            w="90%"
            leftIcon={<IoHome />}
            onClick={() => setActiveJudge(null)}
          >
            Home
          </Button>
        </ListItem>
        {onlineJudges.map((judge) => (
          <ListItem key={judge.id}>
            <Button
              as={Link}
              to={`/${judge.name.toLowerCase()}`}
              colorScheme={activeJudge === judge.id ? buttonColor : 'gray'}
              variant={activeJudge === judge.id ? 'solid' : 'outline'}
              w="90%"
              leftIcon={
                <Box boxSize="25px" as="span" mr="2" display="inline-block">
                  <Image src={judge.icon} alt={`${judge.name} Icon`} />
                </Box>
              }
              onClick={() => setActiveJudge(judge.id)}
            >
              {judge.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default OnlineJudgeNavigation;
