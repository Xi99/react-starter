import React from 'react';
import Movies from '../Movie/Movies.jsx';
import './MoviesList.css'

var movies = [
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' },
];

const MoviesList = () => (
    <div className="movie-list">
        {movies.map((movie, i) => (
            <Movies
                title={movie.title}
                key={i}
            />
        ))}
    </div>
);

export default MoviesList;