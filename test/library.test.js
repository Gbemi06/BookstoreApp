const addBookToLibrary = require("./library.js");
const getBook = require("./library.js");
const showAlert = require("./library.js");
const storeBook = require("./library.js");
const deleteBook = require("./library.js");
const showAllBooks = require("./library.js");
const clearForm = require("./library.js");
const displayBook = require("./library.js");

test("addBookToLibrary is a function", () => {
  expect(typeof addBookToLibrary).toBe("function");
});

test("addBookToLibrary is adding a book to the localStorage", () => {
  const book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
    read: "Yes",
  };
  addBookToLibrary(book);
  expect(getBook()).toContain(book);
});

test("getBook is a function", () => {
  expect(typeof getBook).toBe("function");
});

test("getBook is getting a book from the localStorage", () => {
  const book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
    read: "Yes",
  };

  expect(getBook()).toContain(book);
});

test("showAlert is a function", () => {
  expect(typeof showAlert).toBe("function");
});
