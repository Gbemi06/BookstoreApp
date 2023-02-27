let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
console.log(myLibrary);

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
  } else if (myLibrary.includes(book)) {
    showAlert("Book already exists", "error");
  } else {
    myLibrary.push(book);
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

  setTimeout(() => document.querySelector(".alert").remove(), 5000);
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
  <button class="remove"><i class="fa-solid fa-trash"></i></button>
  </div>`;

  let library = document.querySelector(".result-div");
  library.innerHTML += code;

  let removeButton = document.querySelector(".remove");
  removeButton.addEventListener("click", removeBook);
}

//   let getBook = document.querySelector(".book");
//   let bookTitle = document.createElement("h3");
//   bookTitle.textContent = title;
//   let bookAuthor = document.createElement("p");
//   bookAuthor.textContent = author;
//   let bookPages = document.createElement("p");
//   bookPages.textContent = pages;
//   let bookRead = document.createElement("p");
//   bookRead.textContent = read;
//   let removeButton = document.createElement("button");
//   removeButton.textContent = "Remove";
//   removeButton.classList.add("remove");
//   removeButton.addEventListener("click", removeBook);
//   book.appendChild(bookTitle);
//   book.appendChild(bookAuthor);
//   book.appendChild(bookPages);
//   book.appendChild(bookRead);
//   book.appendChild(removeButton);
//   let library = document.querySelector(".library");
//   library.appendChild(book);
// }

function removeBook(e) {
  if (e.target.classList.contains("remove")) {
    e.target.parentElement.remove();
  }
}

function getBook() {
  if (localStorage.getItem("myLibrary") === null) {
    myLibrary = [];
  } else {
    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
  }
}

function storeBook() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

// function  () {
//   if(localStorage.getItem('myLibrary') === null) {
//     myLibrary = [];
//   } else {
//     myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
//   }
//   let book = new Book(title, author, pages, read);

//   myLibrary.push(book);
//   localStorage.setItem('myLibrary', JSON.stringify(myLibrary));

// }

// function getBook() {
//   let book = new Book(title, author, pages, read);
//   myLibrary.push(book);
//   localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
// }

// let getBook = document.querySelector(".book");
// getBook.addEventListener("click", getBook);

let newBook = document.querySelector(".new-book");
newBook.addEventListener("click", addBookToLibrary);

window.onload = function () {
  // displayBook(book);
};
