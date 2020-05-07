import React from 'react';
import * as BooksAPI from './BooksAPI';
import BookCase from './components/Bookcase';
import { Route } from 'react-router-dom';
import SearchBooks from './components/SearchBooks';

class App extends React.Component {
  state = { books: [] };

  componentDidMount() {
    BooksAPI.getAll().then((data) => {
      this.setState((currState) => ({ books: data }));
    });
  }

  // onBookSearch = (val) => {
  //   BooksAPI.search(val).then((res) => {
  //     console.log(res);
  //   });
  // };

  handleShelfChange = (book, newShelf) => {
    console.log(book, newShelf);
    book.shelf = newShelf;
    this.setState((currState) => ({ ...currState.books, book }));
    BooksAPI.update(book, newShelf).then((res) => {
      BooksAPI.getAll().then((data) => {
        // this.setState((currState) => ({ books: data }));
      });
    });
  };

  render() {
    return (
      <div>
        <Route
          exact
          path='/'
          render={() => (
            <BookCase
              books={this.state.books}
              onShelfChange={this.handleShelfChange}
            />
          )}
        />
        <Route
          path='/search'
          render={() => (
            <SearchBooks
              // onSearch={this.onBookSearch}
              onShelfChange={this.handleShelfChange}
              userShelf={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
