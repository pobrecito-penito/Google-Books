import React from 'react'
import Book from './Book'

const BookList = ( {books} ) => {
    
    return(
        <div className="book-list">
            {books.map(element => <Book key={element.id} book={element.volumeInfo} />)}
        </div>
    )

}

export default BookList