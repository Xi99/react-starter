import React from 'react';
import './Search.css';

const Search = ({ handleChange, handleSubmit }) => (
    <div className="search-container">
        <div className="search-in">
            <input className="search-input" type="text" placeholder="Search..." onChange={handleChange} />
            <button onClick={handleSubmit} className="submit-btn">
                Go!
            </button>
        </div>
    </div>
);

export default Search;