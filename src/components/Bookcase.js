import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

const BookCase = (props) => {
  const shelves = [
    { shelfTitle: 'Reading Now', shelfCriterion: 'currentlyReading' },
    { shelfTitle: 'Want to Read', shelfCriterion: 'wantToRead' },
    { shelfTitle: 'Read', shelfCriterion: 'read' },
  ];

  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          {shelves.map((s) => (
            <BookShelf {...s} {...props} key={s.shelfCriterion} />
          ))}
        </div>
      </div>
      <div className='open-search'>
        <Link to='/search'>
          <button />
        </Link>
      </div>
    </div>
  );
};

export default BookCase;
