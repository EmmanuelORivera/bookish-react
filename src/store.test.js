import axios from "axios";
import * as actions from "./redux/actions/actions";
import store from "./store";
import { apiDomain } from "./utils/apiDomain";

describe("Store", () => {
  const books = [{ id: 1, name: "Refactoring" }];
  const term = "domain";
  it("Fetch books from remote", () => {
    axios.get = jest.fn(() => Promise.resolve({ data: books }));

    return store.dispatch(actions.fetchBooks()).then(() => {
      const state = store.getState();
      expect(state.books.length).toEqual(1);
      expect(state.books).toEqual(books);
    });
  });

  it("Perform a search", () => {
    axios.get = jest.fn(() => Promise.resolve({ data: books }));
    store.dispatch(actions.setSearchTerm(term));

    return store.dispatch(actions.fetchBooks()).then(() => {
      const state = store.getState();

      expect(state.term).toEqual(term);
      expect(axios.get).toHaveBeenCalledWith(`${apiDomain()}?q=${term}`);
    });
  });
});
