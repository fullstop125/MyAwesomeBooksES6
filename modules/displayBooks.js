import Store from './localStorage.js';
import { DateTime } from './luxon.js';

class UI {
  static showDate = () => {
    const dateTime = DateTime.now();
    const dateTimeText = `${dateTime.c.year}-${dateTime.c.month}-${dateTime.c.day} ${dateTime.c.hour}:${dateTime.c.minute}:${dateTime.c.second}`;
    document.getElementById('date').innerText = dateTimeText;
  }

  static displayElement = (book) => {
    const bookList = document.getElementById('lists');
    bookList.insertAdjacentHTML(
      'beforeend',

      `<tr> <td>${book.title} by ${book.author}</td>
    <td> <button class="remove" type="button">Delete</button></td> </tr>`,
    );
  };

  static displayBooks = () => {
    const books = Store.getBooks();
    books.forEach((book) => UI.displayElement(book));
  };

  static removeBook = (e) => {
    if (e.target.classList.contains('remove')) {
      e.target.parentElement.parentElement.remove();
      Store.removeBook(e.target);
    }
  };

  static clearFields = () => {
    document.getElementById('atr').value = '';
    document.getElementById('ttl').value = '';
  };
}

export default UI;
