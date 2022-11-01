const contact = document.querySelector('#contact');
const bookLibrary = document.querySelector('#book-library');
const newBook = document.querySelector('#new-book');
const list = document.querySelector('.list');
const add = document.querySelector('.add');
const contactMe = document.querySelector('.contact-me');

list.addEventListener('click', (e) => {
  e.preventDefault();
  bookLibrary.style.display = 'block';
  contact.style.display = 'none';
  newBook.style.display = 'none';
});

add.addEventListener('click', (e) => {
  e.preventDefault();
  bookLibrary.style.display = 'none';
  contact.style.display = 'none';
  newBook.style.display = 'flex';
});

contactMe.addEventListener('click', (e) => {
  e.preventDefault();
  bookLibrary.style.display = 'none';
  contact.style.display = 'block';
  newBook.style.display = 'none';
});
