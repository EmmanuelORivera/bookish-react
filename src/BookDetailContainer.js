import React, { useEffect, useState } from "react";
import axios from "axios";

const BookDetailContainer = ({ match }) => {
  const [book, setBook] = useState({});
  useEffect(() => {
    const fetchBook = async () => {
      const { data } = await axios.get(
        `http://localhost:8080/books/${match.params.id}`
      );
      setBook(data);
    };
    fetchBook();
  }, [match.params.id]);
  return <h2 className="book-title">{book.name}</h2>;
};

export default BookDetailContainer;
