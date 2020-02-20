import React from 'react';
import './Movie.css'


const Movie = ({ title }) => (
    <div className="movie-list-entry">
        <div className="movie-body">
            <div className="movie-list-entry-title">{title} </div>
        </div>
    </div>
);

export default Movie;
