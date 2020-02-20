import React from 'react';
import './Movies.css'


const Movies = ({ title }) => (
    <div className="movie-list-entry">
        <div className="media-body">
            <div className="movie-list-entry-title">{title} </div>
        </div>
    </div>
);

export default Movies;
