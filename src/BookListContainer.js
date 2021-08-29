import React from "react";
import BookList from "./BookList";
import { useRemoteService } from "./useRemoteService";

const BookListContainer = () => {
  const { data, error, loading } = useRemoteService([]);
  return <BookList books={data} error={error} loading={loading} />;
};

export default BookListContainer;
