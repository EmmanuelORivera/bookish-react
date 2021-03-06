import axios from "axios";
import { apiDomain } from "../../src/utils/apiDomain";

export const checkAppTitle = () => {
  cy.get('h2[data-test="heading"]').contains("Bookish");
};

export const checkBookDetail = () => {
  cy.get("h2.book-title").contains("Refactoring");
};

export const checkBookListWith = (expectation = []) => {
  cy.get('div[data-test="book-list"]').should("exist");
  cy.get("div.book-item").should((books) => {
    expect(books).to.have.length(expectation.length);

    const titles = [...books].map((x) => x.querySelector("h2").innerHTML);

    expect(titles).to.deep.equal(expectation);
  });
};

export const checkBookList = () => {
  checkBookListWith([
    "Refactoring",
    "Domain-driven design",
    "Building Microservices",
  ]);
};
export const cleanUpStubBooks = () => {
  return axios.delete(`${apiDomain()}?_cleanup=true`).catch((err) => err);
};

export const feedStubBooks = () => {
  const books = [
    { name: "Refactoring", id: 1 },
    { name: "Domain-driven design", id: 2 },
    { name: "Building Microservices", id: 3 },
  ];

  return books.map((book) =>
    axios.post(`${apiDomain()}`, book, {
      headers: { "Content-Type": "application/json" },
    })
  );
};

export const gotoApp = () => {
  cy.visit("http://localhost:3000/");
};

export const gotoNthBookInTheList = (nth) => {
  cy.get("div.book-item").contains("View Details").eq(nth).click();
};

export const performSearch = (term) => {
  cy.get('[data-test="search"] input').type(term);
};
