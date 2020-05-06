import React from 'react';
import Book from './Book';

const BookShelf = (props) => {
  const { shelfTitle, books, shelfCriterion } = props;
  const shelfBooks = books.filter((b) => {
    return b.shelf === shelfCriterion;
  });
  return (
    <div>
      <h2>{shelfTitle}</h2>
      <ul>
        {shelfBooks.map((b) => (
          <li key={b.id}>
            <Book book={b} onShelfChange={props.onShelfChange} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookShelf;
