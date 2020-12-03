import * as PlacesUtil from '../util/places_api_util';

export const RECEIVE_PLACE = "RECEIVE_PLACE";

const receivePlace = place => {
    return {
        type: RECEIVE_PLACE,
        place
    }
}

export const fetchRestaurant = (mood) => (dispatch) => {
    return PlacesUtil.fetchRestaurants(mood)
        .then((place) => dispatch(receivePlace(place)));
}