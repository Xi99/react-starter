import React from 'react';
import './Movie.css';
import WatchedButton from '../Watched/WatchedButton.jsx';


const Movie = ({ title, watchedList }) => (
    <div className="movie-list-entry">
        <div className="movie-body">
            <div className="movie-list-entry-title">
                {title}
                <WatchedButton
                    watchedList={watchedList}
                />
            </div>
        </div>

    </div>
);

export default Movie;
