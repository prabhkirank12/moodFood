import React from 'react';
import { Redirect } from 'react-router-dom';

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
        const { value } = e.target;
        this.props.fetchRestaurant(value);
        this.setState({
            currentMood: value
        })
    }

    render() {
        if (this.state.currentMood) return <Redirect to="/map" />
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
                
                {/* <Map /> */}
            </div>
        );
    }
}

export default Dashboard;