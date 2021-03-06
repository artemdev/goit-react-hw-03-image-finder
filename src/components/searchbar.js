import { Component } from 'react';

class Searchbar extends Component {
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.props.handleImages}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            id="q"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
