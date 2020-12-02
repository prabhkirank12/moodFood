import React from 'react';

class HappyMood extends React.Component {

  render () {

    const { currentMood, happySelection } = this.props;

    if (currentMood !== 1) {
      return null
    }

    return (
      <div>
        <h1>Happy</h1>
        <div>
          <button name={happySelection} value="Italian">Italian</button>
          <button name={happySelection} value="Mexican">Mexican</button>
          <button name={happySelection} value="Pizza">Pizza</button>
          <button name={happySelection} value="Japanese">Japanese</button>
          <button name={happySelection} value="Indian">Indian</button>
          <button name={happySelection} value="Chinese">Chinese</button>
          <button name={happySelection} value="American">American</button>
          <button name={happySelection} value="Dessert">Dessert</button>
          <button name={happySelection} value="Thai">Thai</button>
          <button name={happySelection} value="Fast Food">Fast Food</button>
          <button name={happySelection} value="Seafood">Seafood</button>
          <button name={happySelection} value="Vegetarian">Vegetarian</button>
        </div>
      </div>
    )
  }

}

export default HappyMood;

// Italian, Mexican, Pizza, Japanese, Indian, Chinese, American, Desserts, Thai, Fast Food, Seafood, Vegetarian