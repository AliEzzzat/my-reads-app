import React from 'react';
import Book from './Book';
import '../App';
export default function Shelf(props) {
  return (
    <>
    <div className="list-books-content">
              <div>
                <div className="bookShelf">
                  <h2 className="bookShelf-title">{props.title}</h2>
                  <div className="bookShelf-books">
                    <ol className="books-grid">
                    {props.books && props.books.map((book)=>
                          <Book {...book} key={book.id}/>
                    )}
                    </ol>
                  </div>
                </div>
              </div>
    </div>
    </>
  )
}
