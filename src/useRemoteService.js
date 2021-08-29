import { useEffect, useState } from "react";
import axios from "axios";

export const useRemoteService = (initial) => {
  const [data, setData] = useState(initial);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setError(false);
      setLoading(true);

      try {
        const { data } = await axios.get("http://localhost:8080/books");
        setData(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return { data, error, loading };
};
