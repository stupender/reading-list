// DOM VARIABLES
let addBook = document.querySelector(".add");
let removeAllBooks = document.querySelector(".remove-all");

let confirmRemovalForm = document.querySelector(".remove-book-confirmation");
let cancelRemoval = document.querySelector(".cancel-remove-all");

let newBookForm = document.querySelector(".add-book-form");
let titleForm = document.querySelector(".title-form");
let authorForm = document.querySelector(".author-form");
let imageURLForm = document.querySelector(".image-url-form");
let submitButton = document.querySelector(".submit");

let filterAll = document.querySelector(".filter-all");
let filterRead = document.querySelector(".filter-read");
let filterUnread = document.querySelector(".filter-unread");

let toggleRead = document.querySelectorAll(".toggle-read");
let toggleUnread = document.querySelectorAll(".toggle-unread");
let removeBook = document.querySelectorAll(".remove-book");



// EVENT LISTENERS
addBook.addEventListener("click", formActive);
removeAllBooks.addEventListener("click", confirmRemovalToggle);
cancelRemoval.addEventListener("click", confirmRemovalToggle);

// submitButton.addEventListener("click", );
// filterAll.addEventListener("click", );
// filterRead.addEventListener("click", );
// filterUnread.addEventListener("click", );

toggleRead.addEventListener("click", toggleReadClass);
toggleUnread.addEventListener("click", toggleUnreadClass);
removeBook.addEventListener("click", hideBook);



// FUNCTIONS
function formActive() {
    newBookForm.classList.toggle("show");
    // confirmRemovalForm.classList.remove("show")
    // removeAllBooks.classList.remove("red-box")
    addBook.classList.toggle("green-box")
}

function confirmRemovalToggle() {
    confirmRemovalForm.classList.toggle("show");
    removeAllBooks.classList.toggle("red-box");
}

function toggleReadClass() {
    // this.classList.toggle("read-active");
    console.log("test!");
}
function toggleUnreadClass() {
    // this.classList.toggle("unread-active");
    console.log("test!");
}

function hideBook() {
    // this.prototype.classList.toggle("hide");
    console.log("test!");
}



// 1. Write a function that loops through the array and displays each book on the page. 
// You can display them in some sort of table, or each on their own “card”. 
// It might help for now to manually add a few books to your array so you can see the display.

// 2. Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: 
// author, title, number of pages, whether it’s been read and anything else you might want.

// 3. Add a button on each book’s display to remove the book from the library.
// 3a. You will need to associate your DOM elements with the actual book objects in some way. 
// One easy solution is giving them a data-attribute that corresponds to the index of the library array.

// 4. Add a button on each book’s display to change its read status.
// 4a. To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

let library = [];

function Book() {
    // the constructor...loops through the array to display each book on the page
}

function addBookToList() {
    // do stuff here...
}
