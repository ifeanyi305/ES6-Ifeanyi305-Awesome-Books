const page = {

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

export default page;