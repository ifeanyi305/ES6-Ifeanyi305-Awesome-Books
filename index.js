import './modules/navigation.js';
/* eslint-disable */
import {
  DateTime, Duration, FixedOffsetZone,
   IANAZone, Info, Interval, InvalidZone,
    Settings, SystemZone, VERSION, Zone,
} from './modules/luxon.js';
/* eslint-enable */
import './modules/dateTime.js';

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Validating form

// ====== Handle local Storage =====

const Store = {
  getBooks() {
    let bookInputs;
    if (localStorage.getItem('bookInputs') === null) {
      bookInputs = [];
    } else {
      bookInputs = JSON.parse(localStorage.getItem('bookInputs'));
    }
    return bookInputs;
  },

  addBook(book) {
    const bookInputs = Store.getBooks();
    bookInputs.push(book);
    localStorage.setItem('bookInputs', JSON.stringify(bookInputs));
  },

  removeBook(del) {
    const bookInputs = Store.getBooks();
    bookInputs.forEach((book, index) => {
      if (book.del === del) {
        bookInputs.splice(index, 1);
      }
    });

    localStorage.setItem('bookInputs', JSON.stringify(bookInputs));
  },
};

// ==== Handle UI ====

const page = {
  displayBooks() {
    const newBooks = Store.getBooks();
    newBooks.forEach((books) => page.bookList(books));
  },

  bookList(book) {
    const list = document.getElementById('book-collection');
    const create = document.createElement('div');
    create.className = 'list-control';

    const p = document.createElement('p');
    const b = document.createElement('b');
    b.textContent = ' By ';
    p.append(book.title, b, book.author);

    const btn = document.createElement('button');
    btn.classList.add('remove-btn');
    btn.textContent = 'Remove';

    create.append(p, btn);
    list.appendChild(create);
  },

  deleteBook(target) {
    if (target.classList.contains('remove-btn')) {
      target.parentElement.remove();
    }
  },
};

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
