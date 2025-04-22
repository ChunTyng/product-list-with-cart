import { useEffect, useState } from 'react';
import axios from 'axios';
import { Item } from '../components/Content';

const useFetchData = () => {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await axios.get('../../data.json');
        setData(response.data);
      } catch (error) {
        setError('Failed to fetch data');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return { data, loading, error };
};

export default useFetchData;
