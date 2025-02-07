const myLibrary = [];
const library = document.querySelector(".library");

function Book(title, author, pages, isRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.isRead = isRead;
	this.info = function() {
		if (isRead) {
			return this.title + " by " + this.author + ", " + this.pages + " pages, read";
		} else {
			return this.title + " by " + this.author + ", " + this.pages + " pages, not read yet";
		}
	};
};

function addBookToLibrary(title, author, pages, isRead) {
  var newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
};

addBookToLibrary("Alex Rider", "Kian", 150, true);
addBookToLibrary("Harry Potter", "Kian", 700, true);
addBookToLibrary("Bible", "Kian", 20, false);

function addBook() {

};

// Add a “New Book” button that brings up a form allowing users to input the details 
// for the new book and add it to the library: author, title, number of pages, whether 
// it’s been read and anything else you might want. How you decide to display this form 
// is up to you. For example, you may wish to have a form show in a sidebar 

// document.getElementById("add-book-btn").addEventListener("click", addBook);

function displayBooks() {
    library.innerHTML = "";
    myLibrary.forEach(book => {
        // Create a new card for each book
        const libBook = document.createElement("div");
        libBook.setAttribute("class", "library-book");

        // Add info about book to the card
        const title = document.createElement("div");
        title.setAttribute("class", "title");
        title.textContent = "Title: " + book.title;
        libBook.appendChild(title);

        const author = document.createElement("div");
        author.setAttribute("class", "author");
        author.textContent = "Author: " + book.author;
        libBook.appendChild(author);

        const pages = document.createElement("div");
        pages.setAttribute("class", "pages");
        pages.textContent = "Number of Pages: " + book.pages;
        libBook.appendChild(pages);
        
        const readOrNot = document.createElement("div");
        readOrNot.setAttribute("class", "isRead");
        if (book.isRead) {
            readOrNot.textContent = "Has been read!";
        } else {
            readOrNot.textContent = "Has not been read!";
        };

        libBook.appendChild(readOrNot);

        // Add the book into the library
        library.appendChild(libBook)
    })
};

displayBooks();