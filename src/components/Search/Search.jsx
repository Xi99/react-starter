import React from 'react';
import './Search.css';

const Search = () => (
    <div className="search-container">
        <div className="search-in">
            <input className="search-input" type="text" />
            <button className="submit-btn">
                Go!
            </button>
        </div>
    </div>
);

export default Search;