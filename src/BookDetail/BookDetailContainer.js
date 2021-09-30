import React from "react";
import { useRemoteService } from "../hooks";
import BookDetail from ".";
import { apiDomain } from "../utils/apiDomain";

const BookDetailContainer = ({ match }) => {
  const { data } = useRemoteService({}, `${apiDomain()}/${match.params.id}`);
  return <BookDetail book={data} />;
};

export default BookDetailContainer;
