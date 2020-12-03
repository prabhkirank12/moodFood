import React from 'react';
import { Redirect } from 'react-router-dom';

import Map from "../map/map";

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
                <button onClick={this.handleMood}>Happy</button>
                <button onClick={this.handleMood}>Stressed</button>
                <button onClick={this.handleMood}>Sad</button>
                <button onClick={this.handleMood}>Overwhelmed</button>
                <button onClick={this.handleMood}>Hangry</button>
                <button onClick={this.handleMood}>Adventurous</button>
                <Map />
            </div>
        );
    }
}

export default Dashboard;