import React from 'react';
import Movie from '../Movie/Movie.jsx';
import './MoviesList.css';

const MoviesList = ({ moviesInfo, watchedList }) => (
    <div className="movie-list">
        {moviesInfo.map((movies, i) => (
            <Movie
                title={movies.title}
                key={i}
                watchedList={watchedList}
            />
        ))}
    </div>
);

export default MoviesList;