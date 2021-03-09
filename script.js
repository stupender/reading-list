// DOM Variables
let addBook = document.querySelector(".add");
let removeAllBooks = document.querySelector(".remove-all");
let restoreDefaultsButton = document.querySelector(".restore-defaults");

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

let booksContainer = document.querySelector(".books-container");
let defaultItems = document.querySelectorAll(".default");

let toggleRead = document.querySelectorAll(".toggle-read");
let toggleUnread = document.querySelectorAll(".toggle-unread");
let removeBook = document.querySelectorAll(".remove-book");

// Event Listeners
addBook.addEventListener("click", formActive);
removeAllBooks.addEventListener("click", confirmRemovalToggle);
cancelRemoval.addEventListener("click", confirmRemovalToggle);
submitButton.addEventListener("click", submitNewBook);
removeAll.addEventListener("click", clearAll);

filterAll.addEventListener("click", filterShowAll);
filterRead.addEventListener("click", filterByRead);
filterUnread.addEventListener("click", filterByUnread);
restoreDefaultsButton.addEventListener("click", restoreDefaults);

// HTML Collection Event Listeners
// let toggleRead = document.querySelectorAll(".toggle-read"), i;
// toggleRead.forEach((book) => {
//     book.addEventListener("click", () => {
//         console.log("Read Worked!");
//     });
// });

// let toggleUnread = document.querySelectorAll(".toggle-unread"), i;
// toggleUnread.forEach((book) => {
//     book.addEventListener("click", () => { 
//         console.log("Unead Worked!");
//     });
// });

// let removeBook = document.querySelectorAll(".remove-book"), i;
// removeBook.forEach((book) => {
//     book.addEventListener("click", () => {
//         console.log("Remove Worked!");
//     });
// });

document.addEventListener("DOMContentLoaded", restoreDefaults);

// Array to hold all Book Objects.
let myLibrary = [];

// Clears all items from myLibrary. 
function clearAll() {
    for (let i = 0; i < myLibrary.length; i++) {
        booksContainer.childNodes.forEach(e => e.remove());
    }
    myLibrary = [];
    confirmRemovalForm.classList.toggle("show");
    removeAllBooks.classList.toggle("red-box");
}

// Restore defaults.
function restoreDefaults() {
    // if (myLibrary[0].title == "Silences So Deep" && myLibrary[1].title == "Kafka on the Shore" && myLibrary[2].title == "The Overstory" && myLibrary[3].title == "Why We Sleep: Unlocking the Power of Sleep and Dreams") {
    //     return;
    // } else {
        let default1 = new Book("Silences So Deep", "John Luther Adams", 0, "https://images-na.ssl-images-amazon.com/images/I/71GYqNj8LNL.jpg", false);
        myLibrary.push(default1);
        addDOMBookItem(default1.title, default1.author, default1.pages, default1.image, default1.read); 
        for (let i = 0; i < myLibrary.length; i++) {
            booksContainer.childNodes.forEach(e => e.remove());
        }
        let default2 = new Book("Kafka on the Shore", "Haruki Murakami", 0, "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1429638085l/4929.jpg", false);
        myLibrary.push(default2);
        addDOMBookItem(default2.title, default2.author, default2.pages, default2.image, default2.read); 
        for (let i = 0; i < myLibrary.length; i++) {
            booksContainer.childNodes.forEach(e => e.remove());
        }
        let default3 = new Book("The Overstory", "Richard Powers", 0, "https://images-na.ssl-images-amazon.com/images/I/91o8IJKS8PL.jpg", false);
        myLibrary.push(default3);
        addDOMBookItem(default3.title, default3.author, default3.pages, default3.image, default3.read); 
        for (let i = 0; i < myLibrary.length; i++) {
            booksContainer.childNodes.forEach(e => e.remove());
        }
        let default4 = new Book("Why We Sleep: Unlocking the Power of Sleep and Dreams", "Matthew Walker", 0, "https://images-na.ssl-images-amazon.com/images/I/8174kfNgcwL.jpg", false);
        myLibrary.push(default4);
        addDOMBookItem(default4.title, default4.author, default4.pages, default4.image, default4.read);     
    // }
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
    removeBook () {
        this.remove();
    }
}

// Takes text from the form, creates a new Book object, and adds it to myLibrary.
function submitNewBook() {
    let title = titleForm.value;
    let author = authorForm.value;
    let pages = parseInt(pagesForm.value);
    let image = imageURLForm.value;
    let read = false;

    if (title == "" || author == "" || pages == "" || image == "") {
        submitIncomplete.classList.add("show-submit-incomplete-box");
        pagesIncomplete.classList.remove("show-pages-incomplete-box");
    } else if (typeof pages !== "number" || isNaN(pages)) {
        pagesIncomplete.classList.add("show-pages-incomplete-box");
        submitIncomplete.classList.remove("show-submit-incomplete-box");
    } else {

        addBookToLibrary(title, author, pages, image, read);
        for (let i = 0; i < myLibrary.length; i++) {
            booksContainer.childNodes.forEach(e => e.remove());
        }
        addDOMBookItem(); 

        // CLEARS FORM FOR NEXT USE
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

// Push binding with new book information to myLibrary.
function addBookToLibrary(title, author, pages, image, read) {
    let newBook = new Book(title, author, pages, image, read);
    myLibrary.push(newBook);
}

// This loops over the entire myLibrary - make sure to clear the DOM before running.
function addDOMBookItem() {
    for (let i = 0; i < myLibrary.length; i++) {
        // BOOK CONTAINER
        let bookDivDOM = document.createElement("div");
        bookDivDOM.setAttribute("data-index", i);
        bookDivDOM.classList.add("book-item");
        bookDivDOM.classList.add("vertical-padding");
        bookDivDOM.classList.add("border-box");
        bookDivDOM.classList.add("show");

        booksContainer.appendChild(bookDivDOM);

        // LEFT SIDE IMAGE
        let imageDOM = document.createElement("img");
        imageDOM.src = myLibrary[i].image;
        bookDivDOM.appendChild(imageDOM);

        // RIGHT SIDE CONTAINER
        let textDivDOM = document.createElement("div");
        textDivDOM.classList.add("item-text-container");
        bookDivDOM.appendChild(textDivDOM);

        // TITLE AND TEXT
        let titleDivDOM = document.createElement("div");
        titleDivDOM.classList.add("title-container");
        textDivDOM.appendChild(titleDivDOM);

        let h2DOM = document.createElement("h2");
        h2DOM.classList.add("book-title");
        let titleText = document.createTextNode(myLibrary[i].title);
        h2DOM.appendChild(titleText);
        titleDivDOM.appendChild(h2DOM);

        let h3DOM = document.createElement("h3");
        h3DOM.classList.add("author");
        let authorText = document.createTextNode(myLibrary[i].author);
        h3DOM.appendChild(authorText);
        titleDivDOM.appendChild(h3DOM);

        // BUTTONS
        let buttonDivDOM = document.createElement("div");
        buttonDivDOM.classList.add("item-buttons");
        textDivDOM.appendChild(buttonDivDOM);

        let readButtonDOM = document.createElement("a");
        readButtonDOM.setAttribute("data-index", i);
        readButtonDOM.classList.add("toggle-read");
        let readButtonText = document.createTextNode("Read");
        readButtonDOM.appendChild(readButtonText);
        buttonDivDOM.appendChild(readButtonDOM);

        let unreadButtonDOM = document.createElement("a");
        unreadButtonDOM.setAttribute("data-index", i);
        unreadButtonDOM.classList.add("toggle-unread");
        let unreadButtonText = document.createTextNode("Unread");
        unreadButtonDOM.appendChild(unreadButtonText);
        buttonDivDOM.appendChild(unreadButtonDOM);

        let removeButtonDOM = document.createElement("a");
        removeButtonDOM.setAttribute("data-index", i);
        removeButtonDOM.classList.add("remove-book");
        let removeButtonText = document.createTextNode("Remove From List");
        removeButtonDOM.appendChild(removeButtonText);
        buttonDivDOM.appendChild(removeButtonDOM);

        // Update DOM Buttons
        toggleRead = document.querySelectorAll(".toggle-read");
        toggleUnread = document.querySelectorAll(".toggle-unread");
        removeBook = document.querySelectorAll(".remove-book");
        bookItem = document.querySelectorAll(".book-item");
        
        // DOM Button Looped NodeList Event Listeners
        for (let i = 0; i < toggleRead.length; i++) {
            toggleRead[i].addEventListener("click", function() {
                toggleRead[i].classList.add("read-active");
                toggleUnread[i].classList.remove("unread-active");
                console.log("Read Worked!");
            });
        }
        for (let i = 0; i < toggleUnread.length; i++) {
            toggleUnread[i].addEventListener("click", function() {
                toggleUnread[i].classList.add("unread-active");
                toggleRead[i].classList.remove("read-active");
                console.log("Unread Worked!");
            });
        }
        for (let i = removeBook.length - 1; i >= 0; --i) { 
            removeBook[i].addEventListener("click", function() {
                myLibrary.splice(i, 1); // Why doesn't splice work properly!?!?!?
                bookItem[i].remove();
                return;
                // addDOMBookItem();
            }); 
        }
    }
}

// DOM Functions
function formActive() {
    addConfirmation.classList.remove("show-confirmation");
    newBookForm.classList.toggle("show");
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
    alert("test!");
}
function toggleUnreadClass() {
    // this.classList.toggle("unread-active");
    alert("test!");
}





// Learned: you need to update querySelectorAll when you have new content generated on the page.
// You need to have your for loops in a function for when that new content is being generated also.
// Could add a for loop that prevents duplicates from being added.






// Filter visible DOM list by: all, read, unread.
function filterShowAll() {
    for (i = 0; i < myLibrary.length; i++) {
        this.classList.remove("hide");
    }
}

function filterByRead() {
    for (i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].read == false) {
            myLibrary[i].classList.add("hide");
        } else {
            myLibrary[i].classList.remove("hide");
        }
    }
}

function filterByUnread() {
    for (i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].read == true) {
            myLibrary[i].classList.add("hide");
        } else {
            myLibrary[i].classList.remove("hide");
        }
    }
}
