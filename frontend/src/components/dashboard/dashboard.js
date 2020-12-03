import React from 'react';
import Map from "../map/map";

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <p>how are you feeling today?</p>
                <button>Happy</button>
                <button>Stressed</button>
                <button>Sad</button>
                <button>Overwhelmed</button>
                <button>Hangry</button>
                <button>Adventurous</button>
                <Map />
            </div>
        );
    }
}

export default Dashboard;