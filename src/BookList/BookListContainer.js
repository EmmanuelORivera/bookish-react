import React, { useEffect, useState } from "react";
import { apiDomain } from "../utils/apiDomain";
import BookList from ".";
import { useRemoteService } from "../hooks";
import SearchBox from "../SearchBox";

const BookListContainer = () => {
  const [term, setTerm] = useState("");
  const { data, error, loading, setUrl } = useRemoteService([], apiDomain());

  const onSearch = (e) => setTerm(e.target.value);

  useEffect(() => {
    setUrl(`${apiDomain()}?q=${term}`);
  }, [term, setUrl]);

  return (
    <>
      <SearchBox term={term} onSearch={onSearch} />
      <BookList books={data} error={error} loading={loading} />
    </>
  );
};

export default BookListContainer;
