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

addBookToLibrary("Kian", "Kian", 100, true);
addBookToLibrary("Kian", "Kian", 100, true);
addBookToLibrary("Kian", "Kian", 100, true);

// Write a function that loops through the array and displays each book on the page. 
// You can display them in some sort of table, or each on their own “card”. It might 
// help for now to manually add a few books to your array so you can see the display.
// While it might look easier to manipulate the display of the books directly rather 
// than store their data in an array first, from here forward, you should think of these
//  responsibilities separately. We’ll delve deeper into this concept later, but when developing 
//  applications, we want the flexibility to recreate elements (like our library and its books) 
//  in various ways using the same underlying data. Therefore, consider the logic for displaying 
//  books to the user and the book structures that hold all information as distinct entities. 
//  This separation will enhance the maintainability and scalability of your code

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