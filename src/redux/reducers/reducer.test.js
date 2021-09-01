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

  it("Add term to state when set search term", () => {
    const term = "domain";

    const action = { type: types.SET_SEARCH_TERM, term };
    const state = reducer([], action);

    expect(state.term).toBe(term);
  });

  it("Returns the same state when type is not found", () => {
    const type = "SOME_TYPE";

    const action = { type, term: "" };
    const state = reducer([], action);

    expect(state).toEqual([]);
  });

  it("Should have an empty array as initialState when undefined is passed", () => {
    const type = "SOME_TYPE";

    const action = { type, term: "" };
    const state = reducer(undefined, action);

    expect(state).toEqual([]);
  });
});
