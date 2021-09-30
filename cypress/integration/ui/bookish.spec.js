import axios from "axios";
import { apiDomain } from "../../../src/utils/apiDomain";
import {
  checkAppTitle,
  checkBookDetail,
  checkBookList,
  checkBookListWith,
  cleanUpStubBooks,
  feedStubBooks,
  gotoApp,
  gotoNthBookInTheList,
  performSearch,
} from "../../helpers";
describe("Bookish application", () => {
  before(() => {
    return axios.delete(`${apiDomain}?_cleanup=true`).catch((err) => err);
  });

  afterEach(() => {
    cleanUpStubBooks();
  });

  beforeEach(() => {
    feedStubBooks();
    gotoApp();
  });

  it("Visits the bookish!!", () => {
    checkAppTitle();
  });

  it("Shows a book list", () => {
    checkBookList();
  });

  it("Goes to the detail page", () => {
    gotoNthBookInTheList(0);
    cy.url().should("include", "/books/1");
    checkBookDetail();
  });

  it("Searches for a title", () => {
    checkBookListWith([
      "Refactoring",
      "Domain-driven design",
      "Building Microservices",
    ]);
    performSearch("design");
    checkBookListWith(["Domain-driven design"]);
  });
});
