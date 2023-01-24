import { useState } from 'react';
import Togglable from './Togglable'

const Book = ({ book, handleDeletion }) => {

    const [newPage, setNewPage] = useState('');

    const style = {
        outline: 'solid',
        marginBottom: '9px',
        padding: '9px'
    }

    const updatePage = (e) => {
        e.preventDefault();
        console.log('updating to page num ');
        book.page = newPage;
        setNewPage('');
    }

    const deleteBook = (e) => {
        e.preventDefault();
        console.log('deleting')
        console.log(book);
        handleDeletion(book);
    }

    return (
        <div style={style}>
            <div style={{ fontWeight: 800 }}>
                "{book.title}"
            </div>
            <Togglable>
                <div>
                    {book.author}
                </div>
                <div>
                    ISBN {book.isbn}
                </div>
                <div>
                    Progress: {book.page}<br></br>
                    <form onSubmit={(e) => updatePage(e)}>
                        <input  value={newPage}
                        style={{ width: '90px' }}
                        placeholder='Set Page Num'
                        onChange={(e) => setNewPage(e.target.value)}></input>
                    <button type='submit'>Enter</button>
                    </form>
                </div>
                <button onClick={(e) => deleteBook(e)}>Delete</button>
            </Togglable>
        </div>
    )
}

export default Book;