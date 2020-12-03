import * as APIUtil from '../util/mood_api_util';

export const RECEIVE_USER_MOOD = "RECEIVE_USER_MOOD";

const receiveUserMood = newMood => {
  console.log("mood actions")
  console.log(newMood)
  return {
    type: RECEIVE_USER_MOOD,
    newMood
  }
}

export const createMood = (moodData) => (dispatch) =>  {
  return APIUtil.createMood(moodData)
    .then((newMood) => dispatch(receiveUserMood(newMood)));
}