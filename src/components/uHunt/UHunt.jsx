import UvaTable from './UvaTable';
import PropTypes from 'prop-types';

const UHunt = ({ userid }) => {
  return (
    <>
      <UvaTable userid={userid} />
    </>
  );
};

UHunt.propTypes = {
  userid: PropTypes.number.isRequired,
};

export default UHunt;
