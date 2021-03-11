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

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.handleDistance = this.handleDistance.bind(this);
        this.state = {
            radius: 1
        }
    }

    handleDistance(e) {
        e.preventDefault();
        const valueInt = parseInt(e.target.value)
        this.setState({
            radius: valueInt
        })
    }

    render() {
        let radius = this.state.radius;
        return (
            <div className="moods">
                <p>How are you feeling today?</p>
                <div className="dropdown-container">
                    <label className="labels">
                        Adjust max restaurant distance:&emsp;
                    </label>
                    <select name="radius" onChange={this.handleDistance}>
                        <option value="1">1 mile</option>
                        <option value="2">2 miles</option>
                        <option value="5">5 miles</option>
                        <option value="10">10 miles</option>
                        <option value="20">20 miles</option>
                    </select>
                </div>
                <div className="single-mood">
                    {MOODS.map((mood, i) => (
                        <Link to={`/map/${mood}/${radius}`} key={i} className={mood}>
                            {mood}
                        </Link>)
                    )}
                </div>
            </div>
        )
    }

}

export default Dashboard;