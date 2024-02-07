import { useState, useEffect } from 'react';
import { uHuntClient } from '../../services/uHuntService';

const useSubmissions = (userid) => {
  const [problemSubmission, setProblemSubmission] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    uHuntClient
      .get(`/subs-user/${userid}`, { signal: controller.signal })
      .then((response) => {
        setProblemSubmission(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error && error.message ? error.message : 'An error occurred');
        setLoading(false);
      });
  }, [userid]);

  let { subs } = problemSubmission;

  subs = subs ? subs.sort((a, b) => b[4] - a[4]) : [];

  return { subs, loading, error };
};

export default useSubmissions;
