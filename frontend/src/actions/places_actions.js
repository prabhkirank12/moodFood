import * as PlacesUtil from '../util/places_api_util';
import axios from "axios";

export const RECEIVE_PLACE = "RECEIVE_PLACE";

const receivePlace = place => {
    return {
        type: RECEIVE_PLACE,
        place
    }
}

// export const fetchRestaurant = (mood) => (dispatch) => {
//     return PlacesUtil.fetchRestaurants(mood)
//         .then((place) => dispatch(receivePlace(place)));
// }


export const fetchRestaurant = mood => dispatch => {
    // 1600 tells google to look in a circle with a radius of 1600m for the restaurants
    // this can be changed later if we want to allow user to look closer or farther
    const radius = `1600`;
    navigator.geolocation.getCurrentPosition(pos => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      const location = lat + "," + lon;
      axios.get(`/api/third-party?location=${location}&mood=${mood}&radius=${radius}`)
        .then( place => console.log(place));
  })
};