import React from 'react';
import './AddMovie.css';

const AddMovie = ({ handleAddInput, handleAdd }) => (

    <div className="add-movie-container">
        <div className="add-in">
            <input onChange={handleAddInput} className="add-movie-input" type="text" placeholder="Add A Movie" />
            <button onClick={handleAdd} className="add-btn">
                Add
            </button>
        </div>
    </div>

);

export default AddMovie