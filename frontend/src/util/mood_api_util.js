import axios from 'axios';

export const createMood = (moodData) => {
  return axios.post('/api/moods/new', moodData)
}

// export const fetchMoodsExist = () => {
//   return axios.get('/api/moods/new')
// }