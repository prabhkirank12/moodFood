import React from 'react';
import { Redirect } from 'react-router-dom';
import HappyMood from './happy_mood';
import StressedMood from './stressed_mood';
import SadMood from './sad';
import OverwhelmedMood from './overwhelmed';

class QuizForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentMood: 1, //Default is Happy (1), each mood will have a number
      happySelection: [],
      stressedSelection: [],
      sadSelection: [],
      overwhelmedSelection: []
    }
    this._nextMood = this._nextMood.bind(this);
    this._prevMood = this._prevMood.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //moods will each have a number associated with them
  //logic for selecting which mood is previous/next based on the current
  _nextMood(e) {
    let currentMood = this.state.currentMood;
    //If our current mood is less than 4, we want to add one
    //Ensures we never go above 4 since we have 4 moods
    currentMood = currentMood >= 3 ? 4 : currentMood + 1;
    this.setState({
      currentMood: currentMood
    })
    { this.handleSubmit(e) }
  }

  _prevMood(e) {
    e.preventDefault();
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
        <button class="next-bttn" onClick={this._prevMood}>Back</button>
      )
    }
    return null;
  }

  get nextButton() {
    let currentMood = this.state.currentMood;

    if (currentMood < 4) {
      return (
        <button class="next-bttn" onClick={this._nextMood}>Submit this Mood</button>
      )
    } else if (currentMood >= 4) {
      return(
        <button class="next-bttn" onClick={this.handleSubmit}>Submit Quiz</button>
      )
    }
    return null;
  }

  //handles the buttons the user selects on each mood page
  handleSelection(e) {
    e.preventDefault();
    const { name, value } = e.target;
    const foods = this.state[name] ? [...this.state[name]] : [];
    foods.push(value);
    this.setState({
      [name]: foods,
    })

    e.target.classList.add("selected-button");
  }

  //processes the user's quiz (sends their choices to the backend)
  //need to pass in processForm through the container
  handleSubmit(e) {
    e.preventDefault();
    let mood;
    let submission;
    if (this.state.currentMood === 1) {
      mood = "Happy";
      submission = { 
        mood: mood,
        foods: this.state.happySelection 
      }
      this.props.processForm(submission);
    } else if (this.state.currentMood === 2) {
      mood = "Stressed";
      submission = { 
        mood: mood,
        foods: this.state.stressedSelection 
      }
      this.props.processForm(submission);
    } else if (this.state.currentMood === 3) {
      mood = "Sad";
      submission = { 
        mood: mood,
        foods: this.state.sadSelection
      }
      this.props.processForm(submission);
    } else {
      mood = "Overwhelmed";
      submission = { 
        mood: mood,
        foods: this.state.overwhelmedSelection
      }
      this.props.processForm(submission);
      this.props.history.push("/dashboard")
    }
    
  }

  render() {
    
      return (

      <div className="quiz-container">
        <h1>What do you like to eat when you're feeling...</h1>
        <form>
          <HappyMood
            currentMood={this.state.currentMood}
            handleSelection={this.handleSelection}
            happySelection={this.state.happySelection}
            />
          <StressedMood
            currentMood={this.state.currentMood}
            handleSelection={this.handleSelection}
            stressedSelection={this.state.stressedSelection}
            />
          <SadMood 
            currentMood={this.state.currentMood}
            handleSelection={this.handleSelection}
            sadSelection={this.state.sadSelection}
            />
          <OverwhelmedMood
            currentMood={this.state.currentMood}
            handleSelection={this.handleSelection}
            overwhelmedSelection={this.state.overwhelmedSelection}
            />
          <div class="next-bttn">
            {this.backButton}
            {this.nextButton}
          </div>

        </form>
      </div>
      )
    
  }

}



export default QuizForm;