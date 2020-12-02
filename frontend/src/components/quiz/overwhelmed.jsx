import React from 'react';

class OverwhelmedMood extends React.Component {

    render() {

        const { currentMood, overwhelmedSelection } = this.props;

        if (currentMood !== 4) {
            return null
        }

        return (
            <div>
                <h1>Overwhelmed</h1>
                <div>
                    <button name={overwhelmedSelection} value="Italian">Italian</button>
                    <button name={overwhelmedSelection} value="Mexican">Mexican</button>
                    <button name={overwhelmedSelection} value="Pizza">Pizza</button>
                    <button name={overwhelmedSelection} value="Japanese">Japanese</button>
                    <button name={overwhelmedSelection} value="Indian">Indian</button>
                    <button name={overwhelmedSelection} value="Chinese">Chinese</button>
                    <button name={overwhelmedSelection} value="American">American</button>
                    <button name={overwhelmedSelection} value="Dessert">Dessert</button>
                    <button name={overwhelmedSelection} value="Thai">Thai</button>
                    <button name={overwhelmedSelection} value="Fast Food">Fast Food</button>
                    <button name={overwhelmedSelection} value="Seafood">Seafood</button>
                    <button name={overwhelmedSelection} value="Vegetarian">Vegetarian</button>
                </div>
            </div>
        )
    }

}

export default OverwhelmedMood;
