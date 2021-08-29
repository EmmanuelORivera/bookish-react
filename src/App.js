import React from "react";
import { Route, Switch } from "react-router-dom";
import { Typography } from "@material-ui/core";

import BookListContainer from "./BookListContainer";
import BookDetailContainer from "./BookDetailContainer";
import "./App.css";

function App() {
  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <Switch>
        <Route exact path="/" component={BookListContainer} />
        <Route path="/books/:id" component={BookDetailContainer} />
      </Switch>
    </>
  );
}

export default App;
