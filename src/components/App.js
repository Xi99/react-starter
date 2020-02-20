import React from 'react';
import MoviesList from './MovieList/MoviesList.jsx';
import moviesInfo from '../moviesInfo.js';
import './styles.css';
import Search from './Search/Search.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      moviesInfo: moviesInfo,
      errorMsg: "Sorry, that movie is not in our database"

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(e) {
    this.setState({ text: e.target.value })

  }

  handleSubmit() {
    let filteredMovies = moviesInfo.filter(movie => movie.title === this.state.text)
    this.setState({ moviesInfo: filteredMovies })
  }
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>MovieList</h1>
        </div>

        <div className="search-bar">
          <Search
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>

        <div className="movies-list">
          {this.state.moviesInfo.length > 0 ? (
            <MoviesList
              moviesInfo={this.state.moviesInfo}
              text={this.state.text}
            />
          ) : <div className="errorMessage">{this.state.errorMsg}</div>}
        </div>
      </div>
    );
  }
}

export default App;
