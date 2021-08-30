import React, { useEffect, useState } from "react";
import BookList from ".";
import { useRemoteService } from "../hooks";
import SearchBox from "../SearchBox";

const BookListContainer = () => {
  const [term, setTerm] = useState("");
  const { data, error, loading, setUrl } = useRemoteService(
    [],
    "http://localhost:8080/books"
  );

  const onSearch = (e) => setTerm(e.target.value);

  useEffect(() => {
    setUrl(`http://localhost:8080/books?q=${term}`);
  }, [term, setUrl]);

  return (
    <>
      <SearchBox term={term} onSearch={onSearch} />
      <BookList books={data} error={error} loading={loading} />
    </>
  );
};

export default BookListContainer;
