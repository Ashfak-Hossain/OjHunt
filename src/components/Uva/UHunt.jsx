import useProblem from '../../hooks/uHunt/useProblem';
import UvaTable from './uvaTable/UvaTable';
import PropTypes from 'prop-types';
import SubmissionStatus from './SubmissionStatus';
import useSubmissions from '../../hooks/uHunt/useSubmissions';

const UHunt = ({ userid }) => {
  const { problems, loading, _error } = useProblem();
  const { subs, error } = useSubmissions(userid);

  if (loading) return 'Loading...';
  if (error) return `use Submission Error! ${error}`;
  if (_error) return `use Problem Error! ${_error}`;

  return (
    <>
      <UvaTable subs={subs} problems={problems} />
      <SubmissionStatus submissionProblems={subs} problems={problems} />
    </>
  );
};

UHunt.propTypes = {
  userid: PropTypes.number.isRequired,
};

export default UHunt;
