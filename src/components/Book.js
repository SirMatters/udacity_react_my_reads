import React from 'react';

const Book = (props) => {
  const { title, authors, imageLinks, shelf } = props.book;

  const onShelfChange = (e) => {
    e.preventDefault();
    props.onShelfChange(props.book, e.target.value);
  };

  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url('${imageLinks.thumbnail}')`,
          }}
        />
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
      <div className='book-title'>{title}</div>
      <div className='book-authors'>{authors.join(', ')}</div>
    </div>
  );
};

export default Book;
