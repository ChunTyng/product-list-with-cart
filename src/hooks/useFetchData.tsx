import { useEffect, useState } from 'react';
import axios from 'axios';

// type
import { Item } from '../datatypes/item';
import { Status } from '../datatypes/status';

const useFetchData = () => {
  const [data, setData] = useState<Item[]>([]);
  const [status, setStatus] = useState<Status>({ loading: true, error: null });

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await axios.get(
          'https://raw.githubusercontent.com/ChunTyng/product-list-with-cart/refs/heads/main/data.json',
        );
        setData(response.data);
      } catch (error) {
        setStatus((prev) => ({ ...prev, loading: false }));
        console.error(error);
      } finally {
        setStatus((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchData();
  }, []);
  return { data, status };
};

export default useFetchData;
