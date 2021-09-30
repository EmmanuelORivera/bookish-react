export function apiDomain() {
  const production = process.env.NODE_ENV === "production";
  return production
    ? "https://bookishreact-json-server.herokuapp.com/books"
    : "http://localhost:8080/books";
}
