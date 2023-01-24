import { useState } from 'react';
import BookForm from './components/BookForm';
import Book from './components/Book';

function App() {
  const [books, setBooks] = useState([]);

  const submitBook = (book) => {
    const newBooks = books.concat(book);
    setBooks(newBooks);
  }

  const handleDeletion = async (book) => {
    const response = book;
    const newBooks = books.filter(book => {
      return book.isbn !== response.isbn
    });
    setBooks(newBooks);
  }

  return (
    <div className="App">
      <h2>Submission Form</h2>
      <BookForm submitBook={submitBook}/>
      <br/>
      <h2>Books</h2>
      {books.map(book => {
        return <Book book={book} 
        key={book.isbn}
        handleDeletion={handleDeletion} ></Book>
      })}
    </div>
  );
}

export default App;
