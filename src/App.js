import { useState } from 'react';
import BookForm from './components/BookForm';
import Book from './components/Book';

function App() {
  const [books, setBooks] = useState([]);

  const submitBook = (book) => {
    const newBooks = books.concat(book);
    setBooks(newBooks);
  }

  return (
    <div className="App">
      <BookForm submitBook={submitBook}/>
      <br/>
      {books.map(book => {
        return <Book book={book} key={book.isbn} ></Book>
      })}
    </div>
  );
}

export default App;
