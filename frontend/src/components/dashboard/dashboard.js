import React from 'react';
import { fetchRestaurant } from '../../actions/places_actions'

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.handleMood = this.handleMood.bind(this);
    }

    handleMood(e){
        e.preventDefault();
        const { value } = e.target;
        fetchRestaurant(value);
        //make a container and pass fetchRestaurant to it
        //handleMood will fetch restaurant and the restaurant will be in the state
        //redirect to "/map" page
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
            </div>
        );
    }
}

export default Dashboard;