let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function getBook() {
  if (localStorage.getItem("myLibrary") === null) {
    myLibrary = [];
  } else {
    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
  }
  return myLibrary;
}

function storeBook(myLibrary) {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function deleteBook(title) {
  myLibrary.forEach((book, index) => {
    if (book.title === title) {
      myLibrary.splice(index, 1);
    }
  });
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

document
  .querySelector(".form-div")
  .addEventListener("submit", addBookToLibrary);

function addBookToLibrary(e) {
  e.preventDefault();
  let title = document.querySelector("#title").value;
  console.log(title);
  let author = document.querySelector("#author").value;
  console.log(author);
  let pages = document.querySelector("#pages").value;
  console.log(pages);
  let read = document.querySelector("#read").value;
  console.log(read);

  let book = new Book(title, author, pages, read);

  if (title === "" || author === "" || pages === "" || read === "") {
    showAlert("Please fill in all fields", "error");
  } else if (isNaN(pages)) {
    showAlert("Please enter a number for pages", "error");
  } else if (myLibrary.some((book) => book.title === title)) {
    showAlert("Book already exists", "error");
  } else {
    myLibrary.push(book);
    storeBook(myLibrary);
    displayBook(book);
    showAlert("Book added", "success");
    // clearForm();
  }
}

function showAllBooks() {
  myLibrary.forEach((book) => {
    displayBook(book);
  });
}

function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const formTitle = document.querySelector(".form-section");
  const form = document.querySelector(".form-div");
  formTitle.insertBefore(div, form);

  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// function clearForm() {
//   document.querySelector("#title").value = "";
//   document.querySelector("#author").value = "";
//   document.querySelector("#pages").value = "";
//   document.querySelector("#read").value = "";
// }

function displayBook(book) {
  let title = book.title;
  let author = book.author;
  let pages = book.pages;
  let read = book.read;

  let code = `<div class="book">
  <h3>${title}</h3>
  <p>${author}</p>
  <p>${pages}</p>
  <p>${read}</p>
  <button ><i class="fa-solid fa-trash remove"></i></button>
  </div>`;

  let library = document.querySelector(".result-div");
  library.innerHTML += code;

  let removeBtn = document.querySelectorAll(".remove");
  removeBtn.forEach((btn) => {
    btn.addEventListener("click", removeBook);
  });
}

function removeBook(e) {
  if (e.target.classList.contains("remove")) {
    e.target.parentElement.parentElement.remove();
    deleteBook(e.target.parentElement.parentElement.children[0].textContent);
    showAlert("Book deleted successfully", "success");
    console.log(e.target.parentElement.parentElement);
  }
}

window.onload = function () {
  getBook();
  showAllBooks();
};

// module.exports = {
//   Book,
//   getBook,
//   storeBook,
//   deleteBook,
//   addBookToLibrary,
//   showAllBooks,
//   showAlert,
//   displayBook,
//   removeBook,
//   myLibrary,
// };
