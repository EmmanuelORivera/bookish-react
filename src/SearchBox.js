import React from "react";
import { TextField } from "@material-ui/core";

const SearchBox = ({ term, onSearch }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    const isNotEmpty = (value) => !!value.trim();
    if (isNotEmpty(value)) {
      return onSearch(e);
    }
  };
  return (
    <TextField
      label="Search"
      value={term}
      data-test="search"
      onChange={handleChange}
      margin="normal"
      variant="outlined"
    />
  );
};

export default SearchBox;
