import React from 'react';
import Movie from '../Movie/Movie.jsx';
import './MoviesList.css';
import moviesInfo from '../../moviesInfo.js';

const MoviesList = () => (
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