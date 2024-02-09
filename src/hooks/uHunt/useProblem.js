import { useState, useEffect } from 'react';
import { uHuntClient } from '../../services/uHuntService';
import { CanceledError } from 'axios';

const useProblem = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    uHuntClient
      .get('/p', { signal: controller.signal })
      .then((response) => {
        setProblems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { problems, loading, error };
};

export default useProblem;
