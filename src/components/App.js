import React from "react";
import MoviesList from "./MovieList/MoviesList.jsx";
import moviesInfo from "../moviesInfo.js";
import "./styles.css";
import Search from "./Search/Search.jsx";
import AddMovie from "./AddMovie/AddMovie.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      moviesInfo: [],
      errorMsg: "Sorry, that movie is not in our database",
      newInput: "",
      watchedList: true,
      searchResults: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddInput = this.handleAddInput.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
    this.updateWatchBtns = this.updateWatchBtns.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(search = "") {
    // TOFIX: handle partial inputs and upper and lowercase
    let filteredMovies = this.state.moviesInfo.filter(movie => {
      return (
        movie.title.toLowerCase().indexOf(search.toLowerCase()) >= 0 &&
        movie.watched === this.state.showWatched
      );
    });
    this.setState({ searchResults: filteredMovies });
  }

  handleAddInput(e) {
    this.setState({ newInput: e.target.value });
  }

  handleAdd(movie) {
    if (this.state.newInput.length > 2) {
      this.setState(
        {
          moviesInfo: [
            ...this.state.moviesInfo,
            { title: movie, watched: true }
          ]
        },
        () => {
          this.handleSubmit();
        }
      );
    }
  }

  toggleWatched(selectedMovie) {
    let newState = this.state.moviesInfo.map(movie => {
      if (movie === selectedMovie) {
        return { title: movie.title, watched: !movie.watched };
      }
      return movie;
    });
    this.setState({ moviesInfo: newState }, () => this.handleSubmit());
  }

  updateWatchBtns(shouldShow) {
    this.setState({ showWatched: shouldShow }, () => this.handleSubmit());
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Movie List</h1>
        </div>

        <div className="add-movie-bar">
          <AddMovie
            handleAddInput={this.handleAddInput}
            handleAdd={this.handleAdd}
          />
          {/* </div> */}

          <span>
            <button
              onClick={() => this.updateWatchBtns(true)}
              className={`p1-a ${this.state.showWatched ? "greenbtn" : ""}`}
            >
              Watched
            </button>
            <button
              onClick={() => this.updateWatchBtns(false)}
              className={`p1-a ${!this.state.showWatched ? "greenbtn" : ""}`}
            >
              To Watch
            </button>
          </span>

          <span className="search-bar">
            <Search
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </span>

          <span className="movies-list">
            {/* {this.state.moviesInfo.length >= 0 ? ( */}
            <MoviesList // TOFIX: figure out how to get error message to show up properly
              moviesInfo={this.state.searchResults}
              toggleWatched={this.toggleWatched}
              showWatched={this.state.showWatched}
              updateWatchBtns={this.updateWatchBtns}
            />
            {/* ) : ( */}
            {/* <span className="errorMessage">{this.state.errorMsg}</span> */}
            {/* )} */}
          </span>
        </div>
      </div>
    );
  }
}

export default App;
