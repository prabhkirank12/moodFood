import React from 'react'

class SadMood extends React.Component {
    render(){
        const { currentMood, sadSelection } = this.props;
        
        if (currentMood !== 3) {
            return null
        }
        
        return (
            <div>
                <h1>Sad</h1>
                <div>
                    <button name="sadSelection" value="Italian">Italian</button>
                    <button name="sadSelection" value="Mexican">Mexican</button>
                    <button name="sadSelection" value="Pizza">Pizza</button>
                    <button name="sadSelection" value="Japanese">Japanese</button>
                    <button name="sadSelection" value="Indian">Indian</button>
                    <button name="sadSelection" value="Chinese">Chinese</button>
                    <button name="sadSelection" value="American">American</button>
                    <button name="sadSelection" value="Dessert">Dessert</button>
                    <button name="sadSelection" value="Thai">Thai</button>
                    <button name="sadSelection" value="Fast Food">Fast Food</button>
                    <button name="sadSelection" value="Seafood">Seafood</button>
                    <button name="sadSelection" value="Vegetarian">Vegetarian</button>
                </div>
            </div>
        )
    }
}

export default SadMood;
