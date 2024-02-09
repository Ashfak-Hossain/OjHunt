import useProblem from '../../../hooks/uHunt/useProblem';
import UvaTable from '../uvaTable/UvaTable';
import PropTypes from 'prop-types';

const UHunt = ({ userid }) => {
  const { problems, loading, error } = useProblem();
  if (loading) return 'Loading...';
  if (error) return `Error! ${error}`;

  return (
    <>
      <UvaTable userid={userid} problems={problems} />
    </>
  );
};

UHunt.propTypes = {
  userid: PropTypes.number.isRequired,
};

export default UHunt;
