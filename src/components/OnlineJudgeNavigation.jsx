import { Button, List, ListItem, Stack, Box, Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import onlineJudges from '../data/onlineJudges';

const OnlineJudgeNavigation = ({ onClose, isDrawer }) => {
  const handleClick = (id, isDrawer) => {
    if (isDrawer) {
      onClose();
    }
  };

  return (
    <Stack>
      <List spacing={3}>
        <ListItem>
          <Button
            as={Link}
            to="/"
            background={'#1F2733'}
            w="90%"
            leftIcon={<IoHome />}
            onClick={() => handleClick(null, isDrawer)}
          >
            Home
          </Button>
        </ListItem>
        {onlineJudges.map((judge) => (
          <ListItem key={judge.id}>
            <Button
              as={Link}
              to={`/${judge.name.toLowerCase()}`}
              background={'#1F2733'}
              w="90%"
              leftIcon={
                <Box boxSize="25px" as="span" mr="2" display="inline-block">
                  <Image src={judge.icon} alt={`${judge.name} Icon`} />
                </Box>
              }
              onClick={() => handleClick(judge.id, isDrawer)}
            >
              {judge.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

OnlineJudgeNavigation.propTypes = {
  onClose: PropTypes.func,
  isDrawer: PropTypes.bool,
};

export default OnlineJudgeNavigation;
