import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

const TableRowSelector = ({ onChange, value }) => {
  const options = [5, 10, 25, 50, 100, 'ALL'];

  return (
    <Menu>
      <MenuButton
        borderRadius="md"
        borderWidth="1px"
        as={Button}
        rightIcon={<ChevronDownIcon />}
        bg="outlined"
      >
        {value}
      </MenuButton>
      <MenuList>
        {options.map((option) => (
          <MenuItem key={option} onClick={() => onChange(option)}>
            {option === 'ALL' ? 'ALL' : option}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

TableRowSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default TableRowSelector;
