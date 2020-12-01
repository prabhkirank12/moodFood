import React from 'react';
import HappyMood from './happy_mood';
import StressedMood from './stressed_mood';

class QuizForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentMood: 1, //Default is Happy (1),
      happySelection: [],
      stressedSelection: [],
      sadSelection: [],
      overwhelmedSelection: []
    }
    this._nextMood = this._nextMood.bind(this);
    this._prevMood = this._prevMood.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  //moods will each have a number associated with them
  //logic for selecting which mood is previous/next based on the current
  _nextMood() {
    let currentMood = this.state.currentMood;
    //If our current mood is less than 4, we want to add one
    //Ensures we never go above 4 since we have 4 moods
    currentMood = currentMood >= 3 ? 4 : currentMood + 1;
    this.setState({
      currentMood: currentMood
    })
  }

  _prevMood() {
    let currentMood = this.state.currentMood;
    //As long as we above 1, we will subtract 1
    //Ensures we never go below 1
    currentMood = currentMood <= 1 ? 1 :currentMood - 1
    this.setState({
      currentMood: currentMood
    })
  }

  //generating either back or next button depeding on what we need
  get backButton() {
    let currentMood = this.state.currentMood;

    if (currentMood !== 1) {
      return (
        <button onClick={this._prevMood}>Back</button>
      )
    }
    return null;
  }

  get nextButton() {
    let currentMood = this.state.currentMood;

    if (currentMood < 3) {
      return (
        <button onClick={this._nextMood}>Next</button>
      )
    }
    return null;
  }

  //handles the buttons the user selects on each mood page
  handleSelection(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name] : this.state[name].push(value)
    })
  }

  //processes the user's quiz (sends their choices to the backend)
  //need to pass in processForm through the container
  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render() {
    const { 
      currentMood,
      happySelection, 
      stressedSelection, 
      sadSelection, 
      overwhelmedSelection } = this.state;

    <div>
      <h1>Mood Quiz</h1>
      <form onSubmit={this.handleSubmit}>
        <HappyMood
          currentMood={currentMood}
          handleSelection={this.handleSelection}
          happySelection={happySelection}
        />
        <StressedMood
          currentMood={currentMood}
          handleSelection={this.handleSelection}
          stressedSelection={stressedSelection}
        />
        <SadMood 
          currentMood={currentMood}
          handleSelection={this.handleSelection}
          sadSelection={sadSelection}
        />
        <OverwhelmedMood
          currentMood={currentMood}
          handleSelection={this.handleSelection}
          overwhelmedSelection={overwhelmedSelection}
        />
        <div>
          {this.backButton}
          {this.nextButton}
        </div>
      </form>
    </div>
  }

}



export default QuizForm;