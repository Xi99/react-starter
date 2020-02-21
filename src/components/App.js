import React from 'react';
import MoviesList from './MovieList/MoviesList.jsx';
import moviesInfo from '../moviesInfo.js';
import './styles.css';
import Search from './Search/Search.jsx';
import AddMovie from './AddMovie/AddMovie.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      moviesInfo: [],
      errorMsg: "Sorry, that movie is not in our database",
      newInput: '',
      userList: []

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddInput = this.handleAddInput.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  };

  handleChange(e) {
    this.setState({ text: e.target.value })

  }

  handleSubmit() { // TOFIX: handle partial inputs and upper and lowercase 
    let filteredMovies = moviesInfo.filter(movie => movie.title === this.state.text)
    this.setState({ moviesInfo: filteredMovies })
  }

  handleAddInput(e) {
    this.setState({ newInput: e.target.value })
  }

  handleAdd() {
    if (this.state.newInput.length > 2) {
      this.setState({ moviesInfo: [...this.state.moviesInfo, { title: this.state.newInput }] })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>MovieList</h1>
        </div>

        <div className="add-movie-bar">
          <AddMovie
            handleAddInput={this.handleAddInput}
            handleAdd={this.handleAdd}
          />
        </div>

        <div className="search-bar">
          <Search
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>

        <div className="movies-list">
          {this.state.moviesInfo.length >= 0 ? (
            <MoviesList // TOFIX: figure out how to get error message to show up properly
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
