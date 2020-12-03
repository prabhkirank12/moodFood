import React from 'react';

class StressedMood extends React.Component {

  render() {

    const { currentMood, stressedSelection } = this.props;

    if (currentMood !== 2) {
      return null
    }

    return (
      <div>
        <h1>Stressed</h1>
        <div>
          <button name="stressedSelection" value="Italian">Italian</button>
          <button name="stressedSelection" value="Mexican">Mexican</button>
          <button name="stressedSelection" value="Pizza">Pizza</button>
          <button name="stressedSelection" value="Japanese">Japanese</button>
          <button name="stressedSelection" value="Indian">Indian</button>
          <button name="stressedSelection" value="Chinese">Chinese</button>
          <button name="stressedSelection" value="American">American</button>
          <button name="stressedSelection" value="Dessert">Dessert</button>
          <button name="stressedSelection" value="Thai">Thai</button>
          <button name="stressedSelection" value="Fast Food">Fast Food</button>
          <button name="stressedSelection" value="Seafood">Seafood</button>
          <button name="stressedSelection" value="Vegetarian">Vegetarian</button>
        </div>
      </div>
    )
  }

}

export default StressedMood;