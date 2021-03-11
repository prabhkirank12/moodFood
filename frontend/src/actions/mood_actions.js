import * as APIUtil from '../util/mood_api_util';

export const RECEIVE_USER_MOOD = "RECEIVE_USER_MOOD";
export const RECEIVE_MOODS_EXIST = "RECEIVE_MOODS_EXIST";

// const receiveUserMood = newMood => {
//   return {
//     type: RECEIVE_USER_MOOD,
//     newMood
//   }
// }

const receiveMoodsExist = moodsExist => {
  return {
    type: RECEIVE_MOODS_EXIST,
    moodsExist
  }
}

export const createMood = (moodData) => (dispatch) => {
  return APIUtil.createMood(moodData)
    .then((moodsExist) => dispatch(receiveMoodsExist(moodsExist.data)));
}


// export const fetchMoodsExist = () => (dispatch) => {
//   return APIUtil.fetchMoodsExist()
//     .then((moodsExist) => dispatch(receiveMoodsExist(moodsExist.data)));
// }