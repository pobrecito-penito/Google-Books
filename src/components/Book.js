import React from 'react'

const Book = ( {book} ) => {

    let { title, authors, publisher, publishedDate, imageLinks: { thumbnail }, language, previewLink } = book;

    return(
        <div className="book">
            <h4>{title}</h4>
            {authors ? <ul>Author/s: {authors.map(element => <li key={element}>{element}</li>)}
            </ul> : <></>
            }
            <img src={thumbnail} alt="no img"></img>
            {publisher ? <p>published by {publisher}, {publishedDate}</p> : <p>published {publishedDate}</p>}
            <p>language: {language}</p>
            <a href={previewLink} target="_blank" rel="noopener noreferrer">Preview</a>
        </div>
    )

}

export default Book