import React from 'react';
import { Redirect } from 'react-router-dom';

import Map from "../map/map";

const MOODS = [
    "Happy", 
    "Stressed", 
    "Sad",
    "Overwhelmed",
    "Hangry",
    "Adventurous",
];

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentMood: ""
        }
        this.handleMood = this.handleMood.bind(this);
    }

    handleMood(e){
        e.preventDefault();
        debugger;
        const { value } = e.target;
        this.setState({
            currentMood: value
        })
        
        this.props.fetchRestaurant(value);
        <Redirect to="/map" currentMood={this.state.currentMood} />

    }

    render() {
        return (
            <div>
                <p>how are you feeling today?</p>

                {MOODS.map( ( mood, i ) => (
                    <button
                        key={i}
                        onClick={this.handleMood}
                        value={mood}
                    >
                        {mood}
                    </button>)
                )}
                
                <Map />
            </div>
        );
    }
}

export default Dashboard;