import { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core";

export const useRemoteService = (initialData, initialUrl) => {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(initialUrl);

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

  return { data, error, loading, setUrl };
};

export const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  name: {
    maxHeight: 30,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  description: {
    maxHeight: 40,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));
