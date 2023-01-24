import { useState } from 'react';
import Togglable from './Togglable'

const Book = ({ book }) => {

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
                <button>Delete</button>
            </Togglable>
        </div>
    )
}

export default Book;