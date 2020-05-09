import React from 'react';
import * as BooksAPI from './BooksAPI';
import BookCase from './components/Bookcase';
import { Route } from 'react-router-dom';
import SearchBooks from './components/SearchBooks';
import './App.css';

class App extends React.Component {
  state = { books: [] };

  componentDidMount() {
    BooksAPI.getAll().then((data) => {
      this.setState((currState) => ({ books: data }));
    });
  }

  handleShelfChange = (book, newShelf) => {
    book.shelf = newShelf;
    this.setState((currState) => ({ ...currState.books, book }));
    BooksAPI.update(book, newShelf)
      .then(() => {})
      .catch((err) =>
        this.setState((currState) => {
          alert(
            `Sorry, the server is currently unavailabe. We can not change the shelf of ${
              book.name
            }. Please, try again later.`
          );
          return currState.books.filter((b) => b.id !== book.id);
        })
      );
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
