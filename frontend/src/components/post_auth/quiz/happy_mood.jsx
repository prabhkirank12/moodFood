import React from 'react';
import './quiz.scss';

class HappyMood extends React.Component {

  render () {
    const { currentMood, handleSelection } = this.props;

    if (currentMood !== 1) {
      return null
    }

    return (
      <div className="select-container happy">
        <h1>HAPPY</h1>
        <div>
          <button name="happySelection" onClick={handleSelection} value="Italian">Italian</button>
          <button name="happySelection" onClick={handleSelection} value="Mexican">Mexican</button>
          <button name="happySelection" onClick={handleSelection} value="Pizza">Pizza</button>
          <button name="happySelection" onClick={handleSelection} value="Japanese">Japanese</button>
          <button name="happySelection" onClick={handleSelection} value="Indian">Indian</button>
          <button name="happySelection" onClick={handleSelection} value="Chinese">Chinese</button>
          <button name="happySelection" onClick={handleSelection} value="American">American</button>
          <button name="happySelection" onClick={handleSelection} value="Dessert">Dessert</button>
          <button name="happySelection" onClick={handleSelection} value="Thai">Thai</button>
          <button name="happySelection" onClick={handleSelection} value="Fast Food">Fast Food</button>
          <button name="happySelection" onClick={handleSelection} value="Seafood">Seafood</button>
          <button name="happySelection" onClick={handleSelection} value="Vegetarian">Vegetarian</button>
        </div>
      </div>
    )
  }

}

export default HappyMood;

// Italian, Mexican, Pizza, Japanese, Indian, Chinese, American, Desserts, Thai, Fast Food, Seafood, Vegetarian