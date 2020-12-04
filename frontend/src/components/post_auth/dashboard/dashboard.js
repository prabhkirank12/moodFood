import React from 'react';
import { Redirect, Link } from 'react-router-dom';
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