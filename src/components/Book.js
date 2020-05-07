import React from 'react';

const Book = (props) => {
  const { title, shelf } = props.book;

  const onShelfChange = (e) => {
    e.preventDefault();
    props.onShelfChange(props.book, e.target.value);
  };

  return (
    <div>
      <h3>{title}</h3>
      <div className='book-shelf-changer'>
        <select onChange={onShelfChange} value={shelf ? shelf : 'none'}>
          <option value='move' disabled>
            Move to...
          </option>
          <option value='currentlyReading'>Currently Reading</option>
          <option value='wantToRead'>Want to Read</option>
          <option value='read'>Read</option>
          <option value='none'>None</option>
        </select>
      </div>
    </div>
  );
};

export default Book;
