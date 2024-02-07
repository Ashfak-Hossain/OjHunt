import { useState, useEffect } from 'react';
import { uHuntClient } from '../../services/uHuntService';
import { CanceledError } from 'axios';

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
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [userid]);

  let { subs } = problemSubmission;

  subs = subs ? subs.sort((a, b) => b[4] - a[4]) : [];

  return { subs, loading, error };
};

export default useSubmissions;
