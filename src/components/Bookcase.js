import React from 'react';
import BookShelf from './BookShelf';

const BookCase = (props) => {
  const shelves = [
    { shelfTitle: 'Reading Now', shelfCriterion: 'currentlyReading' },
    { shelfTitle: 'Want to Read', shelfCriterion: 'wantToRead' },
    { shelfTitle: 'Read', shelfCriterion: 'read' },
  ];

  return (
    <div>
      MyReads
      {shelves.map((s) => (
        <BookShelf {...s} {...props} key={s.shelfCriterion} />
      ))}
    </div>
  );
};

export default BookCase;
