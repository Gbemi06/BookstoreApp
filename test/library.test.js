const addBookToLibrary = require("./library.js");
const getBook = require("./library.js");
const showAlert = require("./library.js");
const storeBook = require("./library.js");
const deleteBook = require("./library.js");
const showAllBooks = require("./library.js");
const clearForm = require("./library.js");
const displayBook = require("./library.js");

test("getBook is an object", () => {
  expect(typeof getBook).toBe("object");
});

test("addBookToLibrary is to add a book to the library", () => {
  const book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
    read: "Yes",
  };
  expect(addBookToLibrary(book)).toBe(book);
});

test("showAlert is to show an alert", () => {
  const message = "Book added";
  const className = "success";
  expect(showAlert(message, className)).toBe(message);
});
