import React from "react";
import { Typography } from "@material-ui/core";

import BookListContainer from "./BookListContainer";
import "./App.css";

function App() {
  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <BookListContainer />
    </>
  );
}

export default App;
