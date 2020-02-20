import React from 'react';
import MoviesList from './MovieList/MoviesList.jsx';
import movies from '../movieInfo.js';
import './styles.css'
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

        <div className="movies-list">
          <MoviesList />
        </div>
      </div>
    );
  }
}

export default App;
