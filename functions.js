const myLibrary = [];

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