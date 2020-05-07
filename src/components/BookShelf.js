import React from 'react';
import Book from './Book';

const BookShelf = (props) => {
  const { shelfTitle, books, shelfCriterion } = props;
  const shelfBooks = books.filter((b) => {
    return b.shelf === shelfCriterion;
  });
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{shelfTitle}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {shelfBooks.map((b) => (
            <li key={b.id}>
              <Book book={b} onShelfChange={props.onShelfChange} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
