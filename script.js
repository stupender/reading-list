// DOM Variables
let addBook = document.querySelector(".add");
let removeAllBooks = document.querySelector(".remove-all");

let confirmRemovalForm = document.querySelector(".remove-book-confirmation");
let cancelRemoval = document.querySelector(".cancel-remove-all");
let removeAll = document.querySelector(".confirm-remove-all");

let submitIncomplete = document.querySelector(".submit-incomplete-box");
let pagesIncomplete = document.querySelector(".pages-incomplete-box")

let newBookForm = document.querySelector(".add-book-form");
let titleForm = document.querySelector(".title-form");
let authorForm = document.querySelector(".author-form");
let pagesForm = document.querySelector(".pages-form");;
let imageURLForm = document.querySelector(".image-url-form");
let submitButton = document.querySelector(".submit");

let addConfirmation = document.querySelector(".add-confirmation");
let filterAll = document.querySelector(".filter-all");
let filterRead = document.querySelector(".filter-read");
let filterUnread = document.querySelector(".filter-unread");

let toggleRead = document.querySelectorAll(".toggle-read");
let toggleUnread = document.querySelectorAll(".toggle-unread");
let removeBook = document.querySelectorAll(".remove-book");

let booksContainer = document.querySelector(".books-container");
let bookItem = document.querySelectorAll(".book-item");

// Event Listeners
addBook.addEventListener("click", formActive);
removeAllBooks.addEventListener("click", confirmRemovalToggle);
cancelRemoval.addEventListener("click", confirmRemovalToggle);
submitButton.addEventListener("click", submitNewBook);
removeAll.addEventListener("click", clearAll);

filterAll.addEventListener("click", filterShowAll);
filterRead.addEventListener("click", filterByRead);
filterUnread.addEventListener("click", filterByUnread);

// DOM Functions
function formActive() {
    addConfirmation.classList.remove("show-confirmation");
    newBookForm.classList.toggle("show");
    // confirmRemovalForm.classList.remove("show")
    // removeAllBooks.classList.remove("red-box")
    addBook.classList.toggle("green-box")
    titleForm.value = "";
    authorForm.value = "";
    pagesForm.value = "";
    imageURLForm.value = "";    
    pagesIncomplete.classList.remove("show-pages-incomplete-box");
    submitIncomplete.classList.remove("show-submit-incomplete-box");
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

// Array to hold the default Book Objects.
let libraryDefaults = [];

// Clears all items from myLibrary. 
function clearAll() {
    myLibrary = [];
    confirmRemovalForm.classList.toggle("show");
    removeAllBooks.classList.toggle("red-box");
}

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
    let pages = parseInt(pagesForm.value);
    let image = imageURLForm.value;
    let read = false;

    if (title == "" || author == "" || pages == "" || image == "") {
        // alert("Please fill out all forms!");
        submitIncomplete.classList.add("show-submit-incomplete-box");
        pagesIncomplete.classList.remove("show-pages-incomplete-box");
    } else if (typeof pages !== "number" || isNaN(pages)) {
        // alert("Number of Pages must be a number.");
        pagesIncomplete.classList.add("show-pages-incomplete-box");
        submitIncomplete.classList.remove("show-submit-incomplete-box");
    } else {
        addBookToLibrary(title, author, pages, image, read);
        // addDOMBookItem(title, author, pages, image, read);

        titleForm.value = "";
        authorForm.value = "";
        pagesForm.value = "";
        imageURLForm.value = "";    

        pagesIncomplete.classList.remove("show-pages-incomplete-box");
        submitIncomplete.classList.remove("show-submit-incomplete-box");
        newBookForm.classList.toggle("show");
        addBook.classList.toggle("green-box")
        addConfirmation.classList.add("show-confirmation");
    }
}

// Adds the newly submitted book to the DOM.
// function addDOMBookItem(title, author, pages, image, read) {
//     let node = booksContainer.createElement("div").classList.add("book-item vertical-padding border-box default");

// }

// add a data-key for the index of myLibrary to each new item, so you can later reference the specifc index.


// Filter visible DOM list by: all, read, unread.
function filterShowAll() {
    for (i = 0; i < myLibrary.length; i++) {
        this.classList.remove("hide");
    }
}

function filterByRead() {
    for (i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].read == false) {
            this.classList.add("hide");
        } else {
            this.classList.remove("hide");
        }
    }
}

function filterByUnread() {
    for (i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].read == true) {
            this.classList.add("hide");
        } else {
            this.classList.remove("hide");
        }
    }
}

