import React from 'react';

class OverwhelmedMood extends React.Component {

    render() {

        const { currentMood, overwhelmedSelection, handleSelection } = this.props;

        if (currentMood !== 4) {
            return null
        }

        return (
            <div className="select-container overwhelmed">
                <h1>OVERWHELMED</h1>
                <div>
                    <button name="overwhelmedSelection" onClick={handleSelection} value="Italian">Italian</button>
                    <button name="overwhelmedSelection" onClick={handleSelection} value="Mexican">Mexican</button>
                    <button name="overwhelmedSelection" onClick={handleSelection} value="Pizza">Pizza</button>
                    <button name="overwhelmedSelection" onClick={handleSelection} value="Japanese">Japanese</button>
                    <button name="overwhelmedSelection" onClick={handleSelection} value="Indian">Indian</button>
                    <button name="overwhelmedSelection" onClick={handleSelection} value="Chinese">Chinese</button>
                    <button name="overwhelmedSelection" onClick={handleSelection} value="American">American</button>
                    <button name="overwhelmedSelection" onClick={handleSelection} value="Dessert">Dessert</button>
                    <button name="overwhelmedSelection" onClick={handleSelection} value="Thai">Thai</button>
                    <button name="overwhelmedSelection" onClick={handleSelection} value="Fast Food">Fast Food</button>
                    <button name="overwhelmedSelection" onClick={handleSelection} value="Seafood">Seafood</button>
                    <button name="overwhelmedSelection" onClick={handleSelection} value="Vegetarian">Vegetarian</button>
                </div>
            </div>
        )
    }

}

export default OverwhelmedMood;
