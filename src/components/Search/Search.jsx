import React from 'react';
import './Search.css';

const Search = ({ handleChange }) => (
    <div className="search-container">
        <div className="search-in">
            <input className="search-input" type="text" placeholder="Search..." onChange={handleChange} />
            <button className="submit-btn">
                Go!
            </button>
        </div>
    </div>
);

export default Search;