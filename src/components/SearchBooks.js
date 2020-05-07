import React from 'react';
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
        <input type='text' onChange={this.onChange} />
        <div>
          {this.state.displayBooks.map((b) => (
            <Book
              book={b}
              key={b.id}
              onShelfChange={this.props.onShelfChange}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SearchBooks;
