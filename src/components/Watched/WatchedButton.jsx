import React from 'react';
import './WatchedButton.css';

const WatchedButton = ({ watchedList }) => (
    <div className="watched-div">
        <button onClick={watchedList} className="watched-button" type="submit" >Watched</button>
    </div>
);

export default WatchedButton