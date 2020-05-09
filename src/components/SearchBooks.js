import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';

class SearchBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBooks: [],
    };
  }

  syncWithState = (arr) => {
    this.props.userShelf.forEach((userBook) => {
      let foundBook = arr.find((queryBook) => userBook.id === queryBook.id);
      if (foundBook) {
        foundBook.shelf = userBook.shelf;
      }
    });
    return arr;
  };

  onChange = (e) => {
    const val = e.target.value.trim();

    BooksAPI.search(val).then((res) => {
      if (res && !res.hasOwnProperty('error')) {
        let syncedRes = this.syncWithState(res);
        this.setState({ displayBooks: syncedRes });
      } else {
        this.setState({ displayBooks: [] });
        console.log('no books match your query');
      }
    });
  };
  render() {
    return (
      <div>
        <div className='search-books-bar'>
          <Link to='/'>
            <button className='close-search'>Close</button>
          </Link>
          <div className='search-books-input-wrapper'>
            <input type='text' onChange={this.onChange} />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {this.state.displayBooks.map((b) => (
              <Book
                book={b}
                key={b.id}
                onShelfChange={this.props.onShelfChange}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
