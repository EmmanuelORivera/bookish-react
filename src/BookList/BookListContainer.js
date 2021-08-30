import React from "react";
import BookList from ".";
import { useRemoteService } from "../hooks";

const BookListContainer = () => {
  const { data, error, loading } = useRemoteService(
    [],
    "http://localhost:8080/books"
  );
  return <BookList books={data} error={error} loading={loading} />;
};

export default BookListContainer;
