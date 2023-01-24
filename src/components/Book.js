import Togglable from './Togglable'

const Book = ({ book }) => {

    const style = {
        outline: 'solid',
        marginBottom: '9px',
        padding: '9px'
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
                <button>Delete</button>
            </Togglable>
        </div>
    )
}

export default Book;