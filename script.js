const book = document.querySelector('.books-container');
const bookTitle = document.querySelector('.title');
const author = document.querySelector('#author');
const addBtn = document.querySelector('.add-btn');

let booklist = [
  {
    title: '',
    author: '',
  },
];

if (localStorage.getItem('books')) {
  booksData = JSON.parse(localStorage.getItem('books'));
}
