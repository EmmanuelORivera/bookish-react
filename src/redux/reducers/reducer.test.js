import reducer from "./reducer";
import * as types from "../types";

describe("Reducer", () => {
  it("Show loading when request is sent", () => {
    const initialState = { loading: false };
    const action = { type: types.FETCH_BOOKS_PENDING };
    const state = reducer(initialState, action);

    expect(state.loading).toBeTruthy();
  });

  it("Add books to state when request successful", () => {
    const books = [
      { id: 1, name: "Refactoring" },
      { id: 2, name: "Domain-driven design" },
    ];

    const action = { type: types.FETCH_BOOKS_SUCCESS, books };
    const state = reducer([], action);

    expect(state.books).toBe(books);
  });
});