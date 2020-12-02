import * as APIUtil from '../util/mood_api_util';

export const RECEIVE_USER_MOOD = "RECEIVE_USER_MOOD";

const receiveUserMood = mood => {
  return {
    type: RECEIVE_USER_MOOD,
    mood
  }
}

export const createMood = (moodData) => (dispatch) =>  {
  return APIUtil.createMood(moodData)
    .then((newMood) => dispatch(receiveUserMood(newMood)));
}