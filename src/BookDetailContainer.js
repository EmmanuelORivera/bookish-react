import React, { useEffect, useState } from "react";
import { useRemoteService } from "./useRemoteService";

const BookDetailContainer = ({ match }) => {
  const { data } = useRemoteService(
    {},
    `http://localhost:8080/books/${match.params.id}`
  );
  return <h2 className="book-title">{data.name}</h2>;
};

export default BookDetailContainer;
