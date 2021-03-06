import React from 'react'

class SadMood extends React.Component {
    render(){
        const { currentMood, handleSelection } = this.props;
        
        if (currentMood !== 3) {
            return null
        }
        
        return (
            <div className="select-container sad">
                <h1>SAD</h1>
                <div>
                    <button name="sadSelection" onClick={handleSelection} value="Italian">Italian</button>
                    <button name="sadSelection" onClick={handleSelection} value="Mexican">Mexican</button>
                    <button name="sadSelection" onClick={handleSelection} value="Pizza">Pizza</button>
                    <button name="sadSelection" onClick={handleSelection} value="Japanese">Japanese</button>
                    <button name="sadSelection" onClick={handleSelection} value="Indian">Indian</button>
                    <button name="sadSelection" onClick={handleSelection} value="Chinese">Chinese</button>
                    <button name="sadSelection" onClick={handleSelection} value="American">American</button>
                    <button name="sadSelection" onClick={handleSelection} value="Dessert">Dessert</button>
                    <button name="sadSelection" onClick={handleSelection} value="Thai">Thai</button>
                    <button name="sadSelection" onClick={handleSelection} value="Fast Food">Fast Food</button>
                    <button name="sadSelection" onClick={handleSelection} value="Seafood">Seafood</button>
                    <button name="sadSelection" onClick={handleSelection} value="Vegetarian">Vegetarian</button>
                </div>
            </div>
        )
    }
}

export default SadMood;
