import React from 'react';
import MoviesList from './MovieList/MoviesList.jsx';
// import moviesInfo from '../../moviesInfo.js';
import './styles.css';
import Search from './Search/Search.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    var state = {

    };
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>MovieList</h1>
        </div>

        <div className="search-bar">
          <Search />
        </div>

        <div className="movies-list">
          <MoviesList />
        </div>
      </div>
    );
  }
}

export default App;
