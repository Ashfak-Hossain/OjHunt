import { useState, useEffect } from 'react';
import { uHuntClient } from '../../services/uHuntService';
import { CanceledError } from 'axios';

const useProblem = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const fetchProblems = async () => {
      try {
        const storedProblems = localStorage.getItem('problems');

        if (storedProblems) {
          setProblems(JSON.parse(storedProblems));
          setLoading(false);
        } else {
          const response = await uHuntClient.get('/p', {
            signal: controller.signal,
          });
          setProblems(response.data);
          localStorage.setItem('problems', JSON.stringify(response.data));
          setLoading(false);
        }
      } catch (error) {
        if (error instanceof CanceledError) {
          setError(error.message);
          setLoading(false);
        }
      }
    };

    const fetchDataAndScheduleRefresh = async () => {
      await fetchProblems();

      const oneDay = 1000 * 60 * 60 * 24;

      const interval = setInterval(fetchProblems, oneDay);

      return () => clearInterval(interval);
    };

    fetchDataAndScheduleRefresh();

    return () => controller.abort();
  }, []);

  return { problems, loading, error };
};

export default useProblem;
