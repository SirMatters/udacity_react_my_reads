import React from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';

const BookCase = (props) => {
  const shelves = [
    { shelfTitle: 'Reading Now', shelfCriterion: 'currentlyReading' },
    { shelfTitle: 'Want to Read', shelfCriterion: 'wantToRead' },
    { shelfTitle: 'Read', shelfCriterion: 'read' },
  ];

  return (
    <div>
      <h1>MyReads</h1>
      {shelves.map((s) => (
        <BookShelf {...s} {...props} key={s.shelfCriterion} />
      ))}
      <Link to='/search'>Search Books</Link>
    </div>
  );
};

export default BookCase;
