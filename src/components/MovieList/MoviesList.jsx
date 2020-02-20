import React from 'react';
import Movie from '../Movie/Movie.jsx';
import './MoviesList.css';

const MoviesList = ({ moviesInfo }) => (
    <div className="movie-list">
        {moviesInfo.map((movies, i) => (
            <Movie
                title={movies.title}
                key={i}
            />
        ))}
    </div>
);

export default MoviesList;