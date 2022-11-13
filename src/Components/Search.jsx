import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {search} from '../BooksAPI';
import Book from './Book';
export default function Search() {
  const [books, setBooks] = useState([]);
  const [value , setValue] = useState('');

  useEffect(() => {
    let mounted = true;

    if (value.length > 0) {
      const res = Promise.resolve(search(value));
      res.then(function (result) {
        if (mounted) {
          setBooks(result);          
        }
      })
      }

    return () => {
      mounted = false;
    }

  }, [value]);

  return (
    <>
    <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div>
              <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                  <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Search by title or author" />
                </div>
            </div>
        </div>
            </div>
          </div>
        </div>
            <div className='row'>
                {books.length > 0 && value.length > 0? books.map((book)=>
                <div className='col-md-2' key={book.id}>
                <div>
                <div className="list-books-content searchBooks">
                  <div>
                    <Book {...book}/>
                  </div>
                </div>
                </div>
              </div>
          )
          :<div className='col-md-8 offset-md-2'>
            <div>
              <h2>Please Enter Book Name</h2>
            </div>
            </div>}
            </div>
        </div>
    </>
  )
}
