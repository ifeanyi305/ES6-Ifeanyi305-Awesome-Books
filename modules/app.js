import Store from './localStorage.js';

import page from './script.js';

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

document.querySelector('.book-input').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  if (title && author) {
    const book = new Book(title, author);
    page.bookList(book);
    Store.addBook(book);
  }

  // to clear fields
  e.target.reset();
});

// to remove a book
document.querySelector('#book-collection').addEventListener('click', (e) => {
  page.deleteBook(e.target);
  Store.removeBook();
});

(function render() {
  const books = Store.getBooks();
  books.forEach((book) => {
    page.bookList(book);
  });
}());
