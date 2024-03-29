import useProblem from '../../hooks/uHunt/useProblem';
import UvaTable from './uvaTable/UvaTable';
import PropTypes from 'prop-types';
import SubmissionStatus from './SubmissionStatus';
import useSubmissions from '../../hooks/uHunt/useSubmissions';
import VerdictRateDoughnut from './uvaCharts/VerdictRateDoughnut';

const UHunt = ({ userid }) => {
  const { problems, loading, _error } = useProblem();
  const { subs, error } = useSubmissions(userid);

  if (error) return `use Submission Error! ${error}`;
  if (_error) return `use Problem Error! ${_error}`;

  return (
    <>
      <UvaTable
        subs={subs}
        problems={problems}
        loading={loading}
      />
      <SubmissionStatus submissionProblems={subs} problems={problems} />
      <VerdictRateDoughnut submissionProblems={subs} />
    </>
  );
};

UHunt.propTypes = {
  userid: PropTypes.number.isRequired,
};

export default UHunt;
