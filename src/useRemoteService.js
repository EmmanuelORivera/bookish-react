import { useEffect, useState } from "react";
import axios from "axios";

export const useRemoteService = (initial, url) => {
  const [data, setData] = useState(initial);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setError(false);
      setLoading(true);

      try {
        const { data } = await axios.get(url);
        setData(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [url]);

  return { data, error, loading };
};
