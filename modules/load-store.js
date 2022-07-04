import { displayBooks } from './display-books.js';

export const getLocalStorageData = (awesomeBook) => {
  const data = JSON.parse(localStorage.getItem('bookdata'));
  if (data != null && data.length > 0) {
    awesomeBook.style.display = 'block';
    displayBooks(data);
  } else {
    awesomeBook.style.display = 'none';
  }
};