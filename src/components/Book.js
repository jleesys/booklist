
const Book = ({book}) => {

    const style = {
        outline: 'solid',
        marginBottom: '9px'
    }
    
    return (
    <div style={style}>
        {book.title}
        <div>
            {book.author}
        </div>
        <div>
            {book.isbn}
        </div>
    </div>
    )
}

export default Book;