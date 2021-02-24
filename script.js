// DOM Variables
let addBook = document.querySelector(".add");
let removeAllBooks = document.querySelector(".remove-all");

let confirmRemovalForm = document.querySelector(".remove-book-confirmation");
let cancelRemoval = document.querySelector(".cancel-remove-all");

let newBookForm = document.querySelector(".add-book-form");
let titleForm = document.querySelector(".title-form");
let authorForm = document.querySelector(".author-form");
let pagesForm = document.querySelector(".pages-form");;
let imageURLForm = document.querySelector(".image-url-form");
let submitButton = document.querySelector(".submit");

let addConfirmation = document.querySelector(".add-confirmation");
// let filterAll = document.querySelector(".filter-all");
// let filterRead = document.querySelector(".filter-read");
// let filterUnread = document.querySelector(".filter-unread");

let toggleRead = document.querySelectorAll(".toggle-read");
let toggleUnread = document.querySelectorAll(".toggle-unread");
let removeBook = document.querySelectorAll(".remove-book");

let bookList = document.querySelectorAll(".book-item");

// Event Listeners
addBook.addEventListener("click", formActive);
removeAllBooks.addEventListener("click", confirmRemovalToggle);
cancelRemoval.addEventListener("click", confirmRemovalToggle);
submitButton.addEventListener("click", submitNewBook);


// DOM Functions
function formActive() {
    addConfirmation.classList.remove("show-confirmation");
    newBookForm.classList.toggle("show");
    // confirmRemovalForm.classList.remove("show")
    // removeAllBooks.classList.remove("red-box")
    addBook.classList.toggle("green-box")
}

function confirmRemovalToggle() {
    addConfirmation.classList.remove("show-confirmation");
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



// Array to hold all Book Objects.
let myLibrary = [];

// Object Constructor using ES6 Class Constructor.
class Book {
    constructor(title, author, pages, image, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.image = image;
        this.read = read;
    }
}

// Push binding with new book information to myLibrary.
function addBookToLibrary(title, author, pages, image, read) {
    let newBook = new Book(title, author, pages, image, read);
    myLibrary.push(newBook);
}

// Takes text from the form, creates a new Book object, and adds it to myLibrary.
function submitNewBook() {
    let title = titleForm.value;
    let author = authorForm.value;
    let pages = pagesForm.value;
    let image = imageURLForm.value;
    let read = false;

    if (title == "" || author == "" || pages == "" || image == "") {
        alert("Please fill out all forms!");

    } else {
        addBookToLibrary(title, author, pages, image, read);
        titleForm.value = "";
        authorForm.value = "";
        pagesForm.value = "";
        imageURLForm.value = "";    

        newBookForm.classList.toggle("show");
        addBook.classList.toggle("green-box")
        addConfirmation.classList.add("show-confirmation");
    }
}

