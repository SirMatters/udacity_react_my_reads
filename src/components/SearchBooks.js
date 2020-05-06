import React from 'react';
import Book from './Book';

const SearchBooks = (props) => {
  const onChange = (e) => {
    props.onSearch(e.target.value);
  };

  const displayBooks = [];

  return (
    <div>
      <form>
        <input type='text' onChange={onChange} />
      </form>
      <div>
        {displayBooks.map((b) => (
          <Book book={b} />
        ))}
      </div>
    </div>
  );
};

export default SearchBooks;
