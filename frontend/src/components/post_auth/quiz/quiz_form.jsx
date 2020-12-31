import React from 'react';
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
    let selections = {
      1: this.state.happySelection,
      2: this.state.stressedSelection,
      3: this.state.sadSelection,
      4: this.state.overwhelmedSelection
    }
    if (selections[currentMood].length > 0) {
      //If our current mood is less than 4, we want to add one
      //Ensures we never go above 4 since we have 4 moods
      this.handleSubmit(e) 
      currentMood = currentMood >= 3 ? 4 : currentMood + 1;
      this.setState({
        currentMood: currentMood
      })
    } else {
      alert("You must select at least one food!")
    }
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
        <button className="next-bttn" onClick={this._prevMood}>Back</button>
      )
    }
    return null;
  }

  get nextButton() {
    let currentMood = this.state.currentMood;
    if (currentMood < 4) {
      return (
        <button className="next-bttn" onClick={this._nextMood}>Submit this Mood</button>
      )
    } else if (currentMood >= 4) {
      return(
        <button className="next-bttn" onClick={this.handleSubmit}>Submit Quiz</button>
      )
    }
    return null;
  }

  //handles the buttons the user selects on each mood page
  handleSelection(e) {
    e.preventDefault();
    const { name, value } = e.target;
    const foods = this.state[name] ? [...this.state[name]] : [];
    if (!foods.includes(value)) {
      foods.push(value);
      e.target.classList.add("selected-button");
    } else {
      let foodIdx = foods.indexOf(value);
      foods.splice(foodIdx, 1);
      e.target.classList.remove("selected-button");
    }
    this.setState({
      [name]: foods,
    })
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
        if (this.state.overwhelmedSelection.length > 0) {
          //If our current mood is less than 4, we want to add one
          //Ensures we never go above 4 since we have 4 moods
          mood = "Overwhelmed";
          submission = {
            mood: mood,
            foods: this.state.overwhelmedSelection
          }
          this.props.processForm(submission);
          this.props.history.push("/dashboard");
        } else {
          alert("You must select at least one food!")
        }
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
            />
          <StressedMood
            currentMood={this.state.currentMood}
            handleSelection={this.handleSelection}
            />
          <SadMood 
            currentMood={this.state.currentMood}
            handleSelection={this.handleSelection}
            />
          <OverwhelmedMood
            currentMood={this.state.currentMood}
            handleSelection={this.handleSelection}
            />
          <div className="next-bttn">
            {this.backButton}
            {this.nextButton}
          </div>

        </form>
      </div>
      )
    
  }

}



export default QuizForm;