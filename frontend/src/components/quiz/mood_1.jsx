import React from 'react';

class Mood1 extends React.Component {

  render () {

    const { currentMood } = this.props;

    if (currentMood !== "Happy") {
      return null
    }

    return (
      <div>
        <h1>{currentMood}</h1>
        <button>Italian</button>
        <button>Mexican</button>
        <button>Chinese</button>
        <button>Pizza</button>
        <button>Sushi</button>
      </div>
    )
  }

}

export default Mood1;