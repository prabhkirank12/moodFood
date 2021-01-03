import axios from "axios";

export const RECEIVE_PLACE = "RECEIVE_PLACE";
export const REMOVE_PLACE = "REMOVE_PLACE";

const receivePlace = place => {
  return {
    type: RECEIVE_PLACE,
    place
  }
}

export const removePlace = () => {
  return {
    type: REMOVE_PLACE,
  }
}

// export const fetchRestaurant = (mood) => (dispatch) => {
//     return PlacesUtil.fetchRestaurants(mood)
//         .then((place) => dispatch(receivePlace(place)));
// }


export const fetchRestaurant = (mood, radius) => (dispatch) => {
    // 1600 tells google to look in a circle with a radius of 1600m for the restaurants
    // this can be changed later if we want to allow user to look closer or farther
    // const radius = `1600`;
    radius = parseInt(radius);
    let radiusMeters;
    if (radius === 1) {
      radiusMeters = 1600;
    } else if (radius === 2) {
      radiusMeters = 3200;
    } else if (radius === 5) {
      radiusMeters = 8050;
    } else if (radius === 10) {
      radiusMeters = 16100;
    } else if (radius === 20) {
      radiusMeters = 32200;
    } else {
      radiusMeters = 1600;
    }

    navigator.geolocation.getCurrentPosition(pos => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      const location = lat + "," + lon;
      axios.get(`/api/third-party/restaurant?location=${location}&mood=${mood}&radius=${radiusMeters}`)
        .then( place => dispatch(receivePlace(place.data)));
  })
};