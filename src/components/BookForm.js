import { useState } from 'react';

const BlogForm = ({submitBook}) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setISBN] = useState('');

    const createBook = (e) => {
        e.preventDefault();
        const book = {
            title: title,
            author: author,
            isbn: isbn
        }
        submitBook(book);

        setTitle(''); 
        setAuthor(''); 
        setISBN(''); 
    }

    return (
        // <form type='submit' onSubmit={createBook()}>
        <form onSubmit={createBook}>
            <div>
                Title <input className={'bookTitle'}
                placeholder={'Title'}
                value={title}
                onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div>
                Title <input className={'bookAuthor'}
                placeholder={'Author'}
                value={author}
                onChange={(e) => setAuthor(e.target.value)}></input>
            </div>
            <div>
                ISBN <input className={'bookISBN'}
                placeholder={'ISBN'}
                value={isbn}
                onChange={(e) => setISBN(e.target.value)}></input>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default BlogForm;
