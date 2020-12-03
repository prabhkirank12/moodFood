import {connect} from 'react-redux';
import {createMood} from '../../../actions/mood_actions';
import QuizForm from './quiz_form';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    currentUser: state.session.user,
    moods: state.session.user.moods
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (moodData) => dispatch(createMood(moodData))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(QuizForm);