import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.scss';

const MOODS = [
    "Happy", 
    "Stressed", 
    "Sad",
    "Overwhelmed",
    "Hangry",
    "Adventurous",
];

const Dashboard = () => (
    <div className="moods">
        <p>How are you feeling today?</p>
        <div className="dropdown-container">
            <label className="labels" for="radius">Adjust max restaurant distance:&emsp;</label>
            <select name="radius" id="radius">
                <option value="1">1 mile</option>
                <option value="1">2 miles</option>
                <option value="1">5 miles</option>
                <option value="1">10 miles</option>
                <option value="1">20 miles</option>
            </select>
        </div>
        <div className="single-mood">
            {MOODS.map( ( mood, i ) => (
                <Link to={`/map/${mood}`} key={i} className={mood}>
                    {mood}
                </Link>)
            )}
        </div>
    </div>
)

export default Dashboard;