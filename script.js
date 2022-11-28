const bookContainer = document.querySelector('.books-container');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const addBtn = document.querySelector('.add-btn');

let bookList = [];

function bookUpload() {
  bookContainer.innerHTML = '';
  for (let i = 0; i < bookList.length; i += 1) {
    bookContainer.innerHTML += `
    <div class="books">
    <h3>${bookList[i].bookTitle}</h3>
    <h3>${bookList[i].bookAuthor}</h3>
    <button onclick="deleted(${i})">Remove</button>
    <hr />
  </div>
   `;
    bookTitle.value = '';
    bookAuthor.value = '';
  }
}

function deleted(index) {
  bookList.splice(index, 1);
  bookUpload();
  localStorage.setItem('bookList', JSON.stringify(bookList));
}
deleted();

window.onload = () => {
  if (localStorage.getItem('bookList')) {
    bookList = JSON.parse(localStorage.getItem('bookList'));
  }
  bookUpload();
};

addBtn.addEventListener('click', () => {
  const books = {
    bookTitle: bookTitle.value,
    bookAuthor: bookAuthor.value,
  };
  bookList.push(books);
  bookUpload();
  localStorage.setItem('bookList', JSON.stringify(bookList));
});