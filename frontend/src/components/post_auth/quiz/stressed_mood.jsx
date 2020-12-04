import React from 'react';

class StressedMood extends React.Component {

  render() {

    const { currentMood, stressedSelection, handleSelection } = this.props;

    if (currentMood !== 2) {
      return null
    }

    return (
      <div className="select-container stressed">
        <h1>STRESSED</h1>
        <div>
          <button name="stressedSelection" onClick={handleSelection} value="Italian">Italian</button>
          <button name="stressedSelection" onClick={handleSelection} value="Mexican">Mexican</button>
          <button name="stressedSelection" onClick={handleSelection} value="Pizza">Pizza</button>
          <button name="stressedSelection" onClick={handleSelection} value="Japanese">Japanese</button>
          <button name="stressedSelection" onClick={handleSelection} value="Indian">Indian</button>
          <button name="stressedSelection" onClick={handleSelection} value="Chinese">Chinese</button>
          <button name="stressedSelection" onClick={handleSelection} value="American">American</button>
          <button name="stressedSelection" onClick={handleSelection} value="Dessert">Dessert</button>
          <button name="stressedSelection" onClick={handleSelection} value="Thai">Thai</button>
          <button name="stressedSelection" onClick={handleSelection} value="Fast Food">Fast Food</button>
          <button name="stressedSelection" onClick={handleSelection} value="Seafood">Seafood</button>
          <button name="stressedSelection" onClick={handleSelection} value="Vegetarian">Vegetarian</button>
        </div>
      </div>
    )
  }

}

export default StressedMood;