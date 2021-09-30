import axios from "axios";
import { apiDomain } from "../../utils/apiDomain";
import * as types from "../types";

export const fetchBooks = () => {
  return (dispatch, getState) => {
    dispatch({ type: types.FETCH_BOOKS_PENDING });
    const state = getState();
    return axios
      .get(`${apiDomain()}?q=${state.term || ""}`)
      .then((res) => {
        dispatch({ type: types.FETCH_BOOKS_SUCCESS, books: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.FETCH_BOOKS_FAILED, err: err.message });
      });
  };
};
export const setSearchTerm = (term) => ({ type: types.SET_SEARCH_TERM, term });
